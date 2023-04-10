/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream, ConsoleErrorListener } from 'antlr4ts'
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
  ExpressionIdentifierContext,
  ExpressionLambdaContext,
  ExpressionListContext,
  ExpressionParenthesesContext,
  ExpressionRecordContext,
  ExpressionRecordSelectorContext,
  ExpressionTupleContext,
  IdentifierContext,
  FunbindContext,
  KeypatternContext,
  KeyvalueContext,
  LabelContext,
  LabelIdentifierContext,
  LabelIntContext,
  MatchingContext,
  MatchingAtomicContext,
  MatchingSequenceContext,
  MatchingruleContext,
  PatternConstantContext,
  PatternIdentifierContext,
  PatternInfixContext,
  PatternListContext,
  PatternRecordContext,
  PatternTupleContext,
  PatternContext,
  ProgramContext,
  ProgramDeclarationContext,
  ProgramEmptyContext,
  smlParser,
  ValbindContext,
  DeclarationSequenceContext,
  ExpressionLetContext,
  PatternParanthesesContext
} from '../lang/smlParser'
import { smlVisitor } from '../lang/smlVisitor'
import * as sml from '../sml/nodes'
import { Context } from '../types'
import { FunctionNameError, SyntaxError } from '../sml/error'

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

  visitProgramDeclaration(ctx: ProgramDeclarationContext): sml.Node {
    this.debugVisit('Program Declaration', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitProgramEmpty(ctx: ProgramEmptyContext): sml.Node {
    this.debugVisit('Program Empty', ctx)

    return { tag: 'Empty', type: { name: 'undefined' } }
  }

  visitDeclaration(ctx: DeclarationContext): sml.Node {
    this.debugVisit('Declaration', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitDeclarationSequence(ctx: DeclarationSequenceContext): sml.Node {
    this.debugVisit('Declaration Sequence', ctx)

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
      type: { name: 'undefined' },
      declarations,
      loc: contextToLocation(ctx)
    }
  }

  visitDeclarationFunction(ctx: DeclarationFunctionContext): sml.Node {
    // TODO: extend pattern to many patterns
    // i.e. support fun f (x) (y) = x + y; [currying]

    this.debugVisit('Declaration Function', ctx)

    const funbind = ctx.getChild(1).accept(this) as sml.Funbind
    const value: sml.LambdaExpression = {
      tag: 'LambdaExpression',
      type: { name: 'undefined' },
      matching: funbind.matching,
      fv: [],
      loc: contextToLocation(ctx)
    }

    return {
      tag: 'FunctionDeclaration',
      type: { name: 'undefined' },
      name: funbind.name,
      lambda: value,
      loc: contextToLocation(ctx)
    }
  }

  visitDeclarationValue(ctx: DeclarationValueContext): sml.Node {
    this.debugVisit('Declaration Value', ctx)

    const valbind = ctx.getChild(1).accept(this) as sml.Valbind

    return {
      tag: 'ValueDeclaration',
      type: { name: 'undefined' },
      name: valbind.name,
      value: valbind.value,
      loc: contextToLocation(ctx)
    }
  }

  visitDeclarationExpression(ctx: DeclarationExpressionContext): sml.Node {
    this.debugVisit('Declaration Expression', ctx)

    return {
      tag: 'ExpressionDeclaration',
      type: { name: 'undefined' },
      value: ctx.getChild(0).accept(this) as sml.Expression,
      loc: contextToLocation(ctx)
    }
  }

  visitValbind(ctx: ValbindContext): sml.Node {
    this.debugVisit('Valbind', ctx)

    return {
      tag: 'Valbind',
      type: { name: 'undefined' },
      name: (ctx._name.accept(this) as sml.Identifier).name,
      value: ctx._value.accept(this) as sml.Expression,
      loc: contextToLocation(ctx)
    }
  }

  visitFunbind(ctx: FunbindContext): sml.Node {
    this.debugVisit('Funbind', ctx)

    const rest = ctx._rest?.accept(this) as sml.Funbind | null

    const matchingRule: sml.Matchingrule = {
      tag: 'Matchingrule',
      pat: ctx._pat.accept(this) as sml.Pattern,
      exp: ctx._body.accept(this) as sml.Expression,
      type: { name: 'undefined' },
      loc: contextToLocation(ctx)
    }

    const matching: sml.Matching = {
      tag: 'Matching',
      rules: [matchingRule],
      type: { name: 'undefined' },
      loc: contextToLocation(ctx)
    }

    const name = (ctx._name.accept(this) as sml.Identifier).name

    if (rest) {
      if (rest.name !== name) {
        throw new FunctionNameError(name, rest.name, contextToLocation(ctx))
      }

      matching.rules.push(...rest.matching.rules)
    }

    return {
      tag: 'Funbind',
      type: { name: 'undefined' },
      name: (ctx._name.accept(this) as sml.Identifier).name,
      matching: matching,
      loc: contextToLocation(ctx)
    }
  }

  visitMatchingAtomic(ctx: MatchingAtomicContext): sml.Node {
    return {
      tag: 'Matching',
      type: { name: 'undefined' },
      rules: [ctx._matchrule.accept(this) as sml.Matchingrule],
      loc: contextToLocation(ctx)
    }
  }

  visitMatchingSequence(ctx: MatchingSequenceContext): sml.Node {
    const rule = ctx._matchrule.accept(this) as sml.Matchingrule
    console.log('Rule: ', rule)
    const rest = ctx._rest.accept(this)
    console.log('Rest: ', rest)

    const rules = rest ? [rule, ...(rest as sml.Matching).rules] : [rule]

    return {
      tag: 'Matching',
      type: { name: 'undefined' },
      rules,
      loc: contextToLocation(ctx)
    }
  }

  visitMatchingrule(ctx: MatchingruleContext): sml.Node {
    this.debugVisit('Mrule', ctx)

    return {
      tag: 'Matchingrule',
      type: { name: 'undefined' },
      pat: ctx._pat.accept(this) as sml.Pattern,
      exp: ctx._exp.accept(this) as sml.Expression,
      loc: contextToLocation(ctx)
    }
  }

  visitPattern(ctx: PatternContext): sml.Node {
    this.debugVisit('Pattern', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitPatternParantheses(ctx: PatternParanthesesContext): sml.Node {
    this.debugVisit('Pattern Parantheses', ctx)

    return ctx.getChild(1).accept(this)
  }

  visitPatternConstant(ctx: PatternConstantContext): sml.Node {
    this.debugVisit('Pattern Constant', ctx)

    const constant = ctx.getChild(0).accept(this) as sml.Constant
    const value = constant.value
    const type = constant.type

    return {
      tag: 'PatternConstant',
      type: type,
      value: value,
      loc: contextToLocation(ctx)
    }
  }

  visitPatternIdentifier(ctx: PatternIdentifierContext): sml.Node {
    this.debugVisit('Pattern Id', ctx)

    const name = (ctx.getChild(0).accept(this) as sml.Identifier).name

    return {
      tag: 'PatternIdentifier',
      type: { name: 'undefined' },
      name,
      loc: contextToLocation(ctx)
    }
  }

  visitPatternInfix(ctx: PatternInfixContext): sml.Node {
    this.debugVisit('Pattern infix', ctx)

    const left = ctx._left.accept(this) as sml.Pattern
    const right = ctx._right.accept(this) as sml.Pattern

    return {
      tag: 'PatternInfix',
      type: { name: 'undefined' },
      operator: '::',
      left,
      right,
      loc: contextToLocation(ctx)
    }
  }

  visitPatternTuple(ctx: PatternTupleContext): sml.Node {
    this.debugVisit('Pattern tuple', ctx)

    const aliases = {}
    let count = 0
    for (let i = 1; ctx.childCount > 2 && i < ctx.childCount; i += 2) {
      const expr = ctx.getChild(i).accept(this) as sml.Pattern
      aliases[++count] = expr
    }

    return {
      tag: 'PatternRecord',
      type: { name: 'undefined' },
      length: count,
      aliases: aliases,
      loc: contextToLocation(ctx)
    }
  }

  visitPatternRecord(ctx: PatternRecordContext): sml.Node {
    this.debugVisit('Pattern record', ctx)

    const aliases = {}
    let count = 0
    for (let i = 1; ctx.childCount > 2 && i < ctx.childCount; i += 2) {
      const keyvalue = ctx.getChild(i).accept(this) as sml.KeyPattern
      aliases[keyvalue.key] = keyvalue.pat
      count++
    }

    return {
      tag: 'PatternRecord',
      type: { name: 'undefined' },
      length: count,
      aliases: aliases,
      loc: contextToLocation(ctx)
    }
  }

  visitKeypattern(ctx: KeypatternContext): sml.Node {
    this.debugVisit('KeyPattern', ctx)

    return {
      tag: 'KeyPattern',
      type: { name: 'undefined' },
      key: (ctx._key.accept(this) as sml.Identifier).name,
      pat: ctx._pat.accept(this) as sml.Pattern,
      loc: contextToLocation(ctx)
    }
  }

  // visitPatternList(ctx: PatternListContext): sml.Node {
  //   this.debugVisit('Pattern list', ctx)
  // }

  visitExpression(ctx: ExpressionContext): sml.Node {
    this.debugVisit('Expression', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitExpressionLet(ctx: ExpressionLetContext): sml.Node {
    this.debugVisit('Expression Let', ctx)

    return {
      tag: 'LetExpression',
      type: { name: 'undefined' },
      dec: ctx._dec.accept(this) as sml.Declaration,
      exp: ctx._exp.accept(this) as sml.Expression,
      loc: contextToLocation(ctx)
    }
  }

  visitExpressionLambda(ctx: ExpressionLambdaContext): sml.Node {
    this.debugVisit('Expression Lambda', ctx)

    return {
      tag: 'LambdaExpression',
      type: { name: 'undefined' },
      matching: ctx.getChild(1).accept(this) as sml.Matching,
      fv: [],
      loc: contextToLocation(ctx)
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
      type: { name: 'undefined' },
      pred: ctx._pred.accept(this) as sml.Expression,
      cons: ctx._cons.accept(this) as sml.Expression,
      alt: ctx._alt.accept(this) as sml.Expression,
      loc: contextToLocation(ctx)
    }
  }

  visitExpressionApplicationInfix(ctx: ExpressionApplicationInfixContext): sml.Node {
    this.debugVisit('Expression Application Infix', ctx)

    return {
      tag: 'InfixApplicationExpression',
      type: { name: 'undefined' },
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
      (operand.tag === 'Record' || operand.tag === 'Identifier')
    ) {
      return {
        tag: 'RecordSelector',
        type: { name: 'undefined' },
        label: operator.label,
        record: operand,
        loc: contextToLocation(ctx)
      }
    } else {
      return {
        tag: 'PrefixApplicationExpression',
        type: { name: 'undefined' },
        operator: operator as sml.Expression,
        operand: operand as sml.Expression,
        isTailCall: false,
        loc: contextToLocation(ctx)
      }
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
      type: { name: 'undefined' },
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
      tag: 'Record',
      type: { name: 'undefined' },
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
      throw new SyntaxError()
    }

    return {
      tag: 'RecordSelector',
      type: { name: 'undefined' },
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
      type: { name: 'undefined' },
      length: items.length,
      items: items,
      loc: contextToLocation(ctx)
    }
  }

  visitExpressionConstant(ctx: ExpressionConstantContext): sml.Node {
    this.debugVisit('Expression Constant', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitExpressionIdentifier(ctx: ExpressionIdentifierContext): sml.Node {
    this.debugVisit('Expression Identifier', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitKeyvalue(ctx: KeyvalueContext): sml.Node {
    this.debugVisit('Keyvalue', ctx)

    let keyvalue: string
    const child = ctx._key.accept(this) as sml.Constant | sml.Identifier
    if (child.tag === 'Constant') {
      keyvalue = child.value.toString()
    } else if (child.tag === 'Identifier') {
      keyvalue = child.name.toString()
    } else {
      throw new SyntaxError()
    }

    return {
      tag: 'Keyvalue',
      type: { name: 'undefined' },
      key: keyvalue,
      value: ctx._value.accept(this) as sml.Expression
    }
  }

  visitLabel(ctx: LabelContext): sml.Node {
    this.debugVisit('Label', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitLabelIdentifier(ctx: LabelIdentifierContext): sml.Node {
    this.debugVisit('Label Id', ctx)

    const label = ctx.getChild(0).accept(this) as sml.Identifier

    return {
      tag: 'Identifier',
      type: { name: 'undefined' },
      name: label.name
    }
  }

  visitLabelInt(ctx: LabelIntContext): sml.Node {
    this.debugVisit('Label Int', ctx)

    return {
      tag: 'Constant',
      type: { name: 'int' },
      value: parseInt(ctx.text)
    }
  }

  visitIdentifier(ctx: IdentifierContext): sml.Node {
    this.debugVisit('Identifier', ctx)

    return {
      tag: 'Identifier',
      type: { name: 'undefined' },
      name: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitConstant(ctx: ConstantContext): sml.Node {
    this.debugVisit('Constant', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitConstantInt(ctx: ConstantIntContext): sml.Node {
    this.debugVisit('Constant Int', ctx)

    return {
      tag: 'Constant',
      type: { name: 'int' },
      value: parseInt(ctx.text),
      loc: contextToLocation(ctx)
    }
  }

  visitConstantReal(ctx: ConstantRealContext): sml.Node {
    this.debugVisit('Constant Real', ctx)

    return {
      tag: 'Constant',
      type: { name: 'real' },
      value: parseFloat(ctx.text),
      loc: contextToLocation(ctx)
    }
  }

  visitConstantBool(ctx: ConstantBoolContext): sml.Node {
    this.debugVisit('Constant Bool', ctx)

    return {
      tag: 'Constant',
      type: { name: 'bool' },
      value: JSON.parse(ctx.text) as boolean,
      loc: contextToLocation(ctx)
    }
  }

  visitConstantChar(ctx: ConstantCharContext): sml.Node {
    this.debugVisit('Constant Char', ctx)

    return {
      tag: 'Constant',
      type: { name: 'char' },
      value: ctx.text.slice(2, ctx.text.length - 1),
      loc: contextToLocation(ctx)
    }
  }

  visitConstantStr(ctx: ConstantStrContext): sml.Node {
    this.debugVisit('Constant Str', ctx)

    return {
      tag: 'Constant',
      type: { name: 'string' },
      value: ctx.text.slice(1, ctx.text.length - 1),
      loc: contextToLocation(ctx)
    }
  }

  visit(tree: ParseTree): sml.Node {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): sml.Node {
    // Not sure how to retrieve the location of the error
    throw new SyntaxError()
  }

  visitTerminal(node: TerminalNode): sml.Node {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): sml.Node {
    // Not sure how to retrieve the location of the error
    throw new SyntaxError()
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
    type: { name: 'undefined' },
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
