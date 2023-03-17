/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { smlLexer } from '../lang/smlLexer'
import {
  ConstantBoolContext,
  ConstantCharContext,
  ConstantContext,
  ConstantIntContext,
  ConstantRealContext,
  ConstantStrContext,
  DeclarationContext,
  DeclarationExpressionContext,
  DeclarationFunctionContext,
  DeclarationValueContext,
  ExpressionApplicationInfixContext,
  ExpressionApplicationPrefixContext,
  ExpressionConditionalContext,
  ExpressionConstantContext,
  ExpressionContext,
  ExpressionIdContext,
  ExpressionLambdaContext,
  ExpressionListContext,
  ExpressionParenthesesContext,
  ExpressionRecordContext,
  ExpressionRecordSelectorContext,
  ExpressionTupleContext,
  FunbindContext,
  IdAlphaContext,
  IdContext,
  IdSymbolContext,
  KeyvalueContext,
  LabelContext,
  LabelIdContext,
  LabelIntContext,
  MatchSmlContext,
  PatternConstantContext,
  PatternContext,
  PatternIdContext,
  ProgramContext,
  ProgramDeclarationContext,
  ProgramEmptyContext,
  ProgramSequenceContext,
  smlParser,
  ValbindContext,
  VariableContext
} from '../lang/smlParser'
import { smlVisitor } from '../lang/smlVisitor'
import * as sml from '../sml/nodes'
import { Context } from '../types'

function contextToLocation(ctx: DeclarationContext): sml.SourceLocation {
  return {
    start: {
      line: ctx.start.line,
      column: ctx.start.charPositionInLine
    },
    end: {
      line: ctx.stop ? ctx.stop.line : ctx.start.line,
      column: ctx.stop ? ctx.stop.charPositionInLine : ctx.start.charPositionInLine
    }
  }
}

class ProgramGenerator implements smlVisitor<sml.Node> {
  visitProgram(ctx: ProgramContext): sml.Node {
    this.debugVisit('Program', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitProgramSequence(ctx: ProgramSequenceContext): sml.Node {
    this.debugVisit('Program Sequence', ctx)

    const declarations: Array<sml.Declaration> = []

    const left = ctx._left.accept(this)
    if (left.tag === 'SequenceDeclaration') {
      declarations.push(...left.declarations)
    } else if (left.tag !== 'Empty') {
      declarations.push(left as sml.Declaration)
    }

    const right = ctx._right.accept(this)
    if (right.tag === 'SequenceDeclaration') {
      declarations.push(...right.declarations)
    } else if (right.tag !== 'Empty') {
      declarations.push(right as sml.Declaration)
    }

    return {
      tag: 'SequenceDeclaration',
      declarations: declarations
    }
  }

  visitProgramDeclaration(ctx: ProgramDeclarationContext): sml.Node {
    this.debugVisit('Program Declaration', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitProgramEmpty(ctx: ProgramEmptyContext): sml.Node {
    this.debugVisit('Program Empty', ctx)

    return { tag: 'Empty' }
  }

  visitDeclaration(ctx: DeclarationContext): sml.Node {
    this.debugVisit('Declaration', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitDeclarationFunction(ctx: DeclarationFunctionContext): sml.Node {
    this.debugVisit('Declaration Function', ctx)

    const funbind = ctx.getChild(1).accept(this) as sml.Funbind

    return {
      tag: 'FunctionDeclaration',
      name: funbind.name,
      pat: funbind.pat,
      body: funbind.body,
      loc: contextToLocation(ctx)
    }
  }

  visitDeclarationValue(ctx: DeclarationValueContext): sml.Node {
    this.debugVisit('Declaration Value', ctx)

    const valbind = ctx.getChild(1).accept(this) as sml.Valbind

    return {
      tag: 'ValueDeclaration',
      name: valbind.name,
      value: valbind.value,
      loc: contextToLocation(ctx)
    }
  }

  visitDeclarationExpression(ctx: DeclarationExpressionContext): sml.Node {
    this.debugVisit('Declaration Expression', ctx)

    return {
      tag: 'ExpressionDeclaration',
      value: ctx.getChild(0).accept(this) as sml.Expression,
      loc: contextToLocation(ctx)
    }
  }

  visitValbind(ctx: ValbindContext): sml.Node {
    this.debugVisit('Valbind', ctx)

    return {
      tag: 'Valbind',
      name: (ctx._name.accept(this) as sml.Identifier).name,
      value: ctx._value.accept(this) as sml.Expression
    }
  }

  visitFunbind(ctx: FunbindContext): sml.Node {
    // TODO: extend pattern to many patterns
    // i.e. support fun f (x) (y) = x + y; [currying]
    this.debugVisit('Funbind', ctx)

    return {
      tag: 'Funbind',
      name: (ctx._name.accept(this) as sml.Identifier).name,
      pat: ctx._pat.accept(this) as sml.Pattern,
      body: ctx._body.accept(this) as sml.Expression
    }
  }

  visitMatchSml(ctx: MatchSmlContext): sml.Node {
    this.debugVisit('Matchsml', ctx)

    return {
      tag: 'Match',
      pat: ctx._pat.accept(this) as sml.Pattern,
      exp: ctx._exp.accept(this) as sml.Expression
    }
  }

  visitPattern(ctx: PatternContext): sml.Node {
    this.debugVisit('Pattern', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitPatternConstant(ctx: PatternConstantContext): sml.Node {
    this.debugVisit('Pattern Constant', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitPatternId(ctx: PatternIdContext): sml.Node {
    this.debugVisit('Pattern Id', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitExpression(ctx: ExpressionContext): sml.Node {
    this.debugVisit('Expression', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitExpressionLambda(ctx: ExpressionLambdaContext): sml.Node {
    this.debugVisit('Expression Lambda', ctx)

    return {
      tag: 'LambdaExpression',
      match: ctx.getChild(1).accept(this) as sml.Match
    }
  }

  visitExpressionParentheses(ctx: ExpressionParenthesesContext): sml.Node {
    this.debugVisit('Expression Parentheses', ctx)

    return ctx._inner.accept(this)
  }

  visitExpressionConditional(ctx: ExpressionConditionalContext): sml.Node {
    this.debugVisit('Expression Conditional', ctx)

    return {
      tag: 'ConditionalExpression',
      pred: ctx._pred.accept(this) as sml.Expression,
      cons: ctx._cons.accept(this) as sml.Expression,
      alt: ctx._alt.accept(this) as sml.Expression
    }
  }

  visitExpressionApplicationInfix(ctx: ExpressionApplicationInfixContext): sml.Node {
    this.debugVisit('Expression Application Infix', ctx)

    return {
      tag: 'InfixApplicationExpression',
      operator: ctx._operator.text as sml.InfixOperator,
      left: ctx._left.accept(this) as sml.Expression,
      right: ctx._right.accept(this) as sml.Expression,
      loc: contextToLocation(ctx)
    }
  }

  visitExpressionApplicationPrefix(ctx: ExpressionApplicationPrefixContext): sml.Node {
    this.debugVisit('Expression Application Prefix', ctx)

    const operator = ctx._operator.accept(this)
    const operand = ctx._operand.accept(this)

    if (
      operator.tag === 'RecordSelector' &&
      (operand.tag === 'Record' || operand.tag === 'Tuple' || operand.tag === 'Identifier')
    ) {
      return {
        tag: 'RecordSelector',
        label: operator.label,
        record: operand,
        loc: contextToLocation(ctx)
      }
    } else {
      throw new Error(`not supported yet: ${ctx}`)
    }
  }

  visitExpressionRecord(ctx: ExpressionRecordContext): sml.Node {
    this.debugVisit('Expression Record', ctx)

    const items = {}
    let count = 0
    for (let i = 1; ctx.childCount > 2 && i < ctx.childCount; i += 2) {
      const keyvalue = ctx.getChild(i).accept(this) as sml.Keyvalue
      items[keyvalue.key] = keyvalue.value
      count++
    }

    return {
      tag: 'Record',
      length: count,
      items: items,
      loc: contextToLocation(ctx)
    }
  }

  visitExpressionTuple(ctx: ExpressionTupleContext): sml.Node {
    this.debugVisit('Expression Tuple', ctx)

    const items = {}
    let count = 0
    for (let i = 1; ctx.childCount > 2 && i < ctx.childCount; i += 2) {
      const expr = ctx.getChild(i).accept(this) as sml.Expression
      items[++count] = expr
    }

    return {
      tag: 'Tuple',
      length: count,
      items: items,
      loc: contextToLocation(ctx)
    }
  }

  visitExpressionRecordSelector(ctx: ExpressionRecordSelectorContext): sml.Node {
    this.debugVisit('Expression Record Selector', ctx)

    let name: string
    const label = ctx.getChild(1).accept(this) as sml.Constant | sml.Identifier

    if (label.tag === 'Constant') {
      name = label.value.toString()
    } else if (label.tag === 'Identifier') {
      name = label.name.toString()
    } else {
      throw new Error('bruh')
    }

    return {
      tag: 'RecordSelector',
      label: name,
      loc: contextToLocation(ctx)
    }
  }

  visitExpressionList(ctx: ExpressionListContext): sml.Node {
    this.debugVisit('Expression List', ctx)

    const items = []
    for (let i = 1; ctx.childCount > 2 && i < ctx.childCount; i += 2) {
      const expr = ctx.getChild(i).accept(this) as sml.Expression
      items.push(expr)
    }

    return {
      tag: 'List',
      length: items.length,
      items: items,
      loc: contextToLocation(ctx)
    }
  }

  visitExpressionConstant(ctx: ExpressionConstantContext): sml.Node {
    this.debugVisit('Expression Constant', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitExpressionId(ctx: ExpressionIdContext): sml.Node {
    this.debugVisit('Expression Id', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitKeyvalue(ctx: KeyvalueContext): sml.Node {
    this.debugVisit('Keyvalue', ctx)

    return {
      tag: 'Keyvalue',
      key: (ctx._key.accept(this) as sml.Constant).value.toString(),
      value: ctx._value.accept(this) as sml.Expression
    }
  }

  visitLabel(ctx: LabelContext): sml.Node {
    this.debugVisit('Label', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitLabelId(ctx: LabelIdContext): sml.Node {
    this.debugVisit('Label Id', ctx)

    const label = ctx.getChild(0).accept(this) as sml.Identifier

    return {
      tag: 'Constant',
      value: label.name
    }
  }

  visitLabelInt(ctx: LabelIntContext): sml.Node {
    this.debugVisit('Label Int', ctx)

    return {
      tag: 'Constant',
      value: parseInt(ctx.text)
    }
  }

  visitId(ctx: IdContext): sml.Node {
    this.debugVisit('Identifier', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitIdAlpha(ctx: IdAlphaContext): sml.Node {
    this.debugVisit('Identifier Alpha', ctx)

    return {
      tag: 'Identifier',
      name: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitIdSymbol(ctx: IdSymbolContext): sml.Node {
    this.debugVisit('Identifier Symbol', ctx)

    return {
      tag: 'Identifier',
      name: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitVariable(ctx: VariableContext): sml.Node {
    this.debugVisit('Variable', ctx)

    throw new Error(`not supported yet: ${ctx}`)
  }

  visitConstant(ctx: ConstantContext): sml.Node {
    this.debugVisit('Constant', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitConstantInt(ctx: ConstantIntContext): sml.Node {
    this.debugVisit('Constant Int', ctx)

    return {
      tag: 'Constant',
      value: parseInt(ctx.text),
      loc: contextToLocation(ctx)
    }
  }

  visitConstantReal(ctx: ConstantRealContext): sml.Node {
    this.debugVisit('Constant Real', ctx)

    return {
      tag: 'Constant',
      value: parseFloat(ctx.text),
      loc: contextToLocation(ctx)
    }
  }

  visitConstantBool(ctx: ConstantBoolContext): sml.Node {
    this.debugVisit('Constant Bool', ctx)

    return {
      tag: 'Constant',
      value: JSON.parse(ctx.text) as boolean,
      loc: contextToLocation(ctx)
    }
  }

  visitConstantChar(ctx: ConstantCharContext): sml.Node {
    this.debugVisit('Constant Char', ctx)

    return {
      tag: 'Constant',
      value: ctx.text.slice(2, ctx.text.length - 1),
      loc: contextToLocation(ctx)
    }
  }

  visitConstantStr(ctx: ConstantStrContext): sml.Node {
    this.debugVisit('Constant Str', ctx)

    return {
      tag: 'Constant',
      value: ctx.text.slice(1, ctx.text.length - 1),
      loc: contextToLocation(ctx)
    }
  }

  visit(tree: ParseTree): sml.Node {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): sml.Node {
    throw new Error(`not supported yet: ${node}`)
  }

  visitTerminal(node: TerminalNode): sml.Node {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): sml.Node {
    throw new Error('bruh') // TODO: implement proper error type
  }

  debugVisit(phase: string, tree: ParseTree) {
    console.log(phase)
    console.log(tree)
    console.log('================================')
  }
}

function convertSml(program: ProgramContext): sml.Program {
  const generator = new ProgramGenerator()
  return {
    tag: 'Program',
    body: program.accept(generator) as sml.Declaration
  }
}

export function parse(source: string, context: Context) {
  const inputStream = CharStreams.fromString(source)
  const lexer = new smlLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new smlParser(tokenStream)
  parser.buildParseTree = true
  const tree = parser.program()
  const program = convertSml(tree)
  return {
    sml: program,
    es: {
      type: 'Program',
      sourceType: 'script',
      body: []
    }
  }
}
