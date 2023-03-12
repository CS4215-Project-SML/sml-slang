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
  DeclarationValueContext,
  ExpressionApplicationInfixContext,
  ExpressionApplicationPrefixContext,
  ExpressionConstantContext,
  ExpressionContext,
  ExpressionIdContext,
  ExpressionParenthesesContext,
  ExpressionRecordContext,
  ExpressionRecordSelectorContext,
  IdAlphaContext,
  IdContext,
  IdSymbolContext,
  KeyvalueContext,
  LabelContext,
  LabelIdContext,
  LabelIntContext,
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
import * as sml from '../sml/types'

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

class ProgramGenerator implements smlVisitor<sml.Declaration> {
  visitProgram(ctx: ProgramContext): sml.Declaration {
    this.debugVisit('Program', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitProgramSequence(ctx: ProgramSequenceContext): sml.Declaration {
    this.debugVisit('Program Sequence', ctx)

    const declarations = []

    const left = ctx._left.accept(this)
    if (left.type === 'SequenceDeclaration') {
      declarations.push(...left.declarations)
    } else if (left.type !== 'Empty') {
      declarations.push(left)
    }

    const right = ctx._right.accept(this)
    if (right.type === 'SequenceDeclaration') {
      declarations.push(...right.declarations)
    } else if (right.type !== 'Empty') {
      declarations.push(right)
    }

    return {
      type: 'SequenceDeclaration',
      declarations: declarations
    }
  }

  visitProgramDeclaration(ctx: ProgramDeclarationContext): sml.Declaration {
    this.debugVisit('Program Declaration', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitProgramEmpty(ctx: ProgramEmptyContext): sml.Declaration {
    this.debugVisit('Program Empty', ctx)

    return { type: 'Empty' }
  }

  visitDeclaration(ctx: DeclarationContext): sml.Declaration {
    this.debugVisit('Declaration', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitDeclarationValue(ctx: DeclarationValueContext): sml.Declaration {
    this.debugVisit('Declaration Value', ctx)

    const valbind = ctx.getChild(1).accept(this) as sml.Valbind

    return {
      type: 'ValueDeclaration',
      name: valbind.name,
      value: valbind.value
    }
  }

  visitDeclarationExpression(ctx: DeclarationExpressionContext): sml.Declaration {
    this.debugVisit('Declaration Expression', ctx)

    return {
      type: 'ExpressionDeclaration',
      value: ctx.getChild(0).accept(this) as sml.Expression
    }
  }

  visitValbind(ctx: ValbindContext): sml.Declaration {
    this.debugVisit('Valbind', ctx)

    return {
      type: 'Valbind',
      name: (ctx._name.accept(this) as sml.Identifier).name,
      value: ctx._value.accept(this) as sml.Expression
    }
  }

  visitPattern(ctx: PatternContext): sml.Declaration {
    this.debugVisit('Pattern', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitPatternConstant(ctx: PatternConstantContext): sml.Declaration {
    this.debugVisit('Pattern Constant', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitPatternId(ctx: PatternIdContext): sml.Declaration {
    this.debugVisit('Pattern Id', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitExpression(ctx: ExpressionContext): sml.Declaration {
    this.debugVisit('Expression', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitExpressionParentheses(ctx: ExpressionParenthesesContext): sml.Declaration {
    this.debugVisit('Expression Parentheses', ctx)

    return ctx._inner.accept(this)
  }

  visitExpressionApplicationInfix(ctx: ExpressionApplicationInfixContext): sml.Declaration {
    this.debugVisit('Expression Application Infix', ctx)

    return {
      type: 'InfixApplicationExpression',
      operator: ctx._operator.text as sml.InfixOperator,
      left: ctx._left.accept(this) as sml.Expression,
      right: ctx._right.accept(this) as sml.Expression,
      loc: contextToLocation(ctx)
    }
  }

  visitExpressionApplicationPrefix(ctx: ExpressionApplicationPrefixContext): sml.Declaration {
    this.debugVisit('Expression Application Prefix', ctx)

    const operator = ctx._operator.accept(this)
    const operand = ctx._operand.accept(this)

    if (
      operator.type === 'RecordSelector' &&
      (operand.type === 'Record' || operand.type === 'Identifier')
    ) {
      return {
        type: 'RecordSelector',
        label: operator.label,
        record: operand
      }
    } else {
      throw new Error(`not supported yet: ${ctx}`)
    }
  }

  visitExpressionRecord(ctx: ExpressionRecordContext): sml.Declaration {
    this.debugVisit('Expression Record', ctx)

    const items = {}
    let count = 0
    for (let i = 1; ctx.childCount > 2 && i < ctx.childCount; i += 2) {
      const keyvalue = ctx.getChild(i).accept(this) as sml.Keyvalue
      items[keyvalue.key] = keyvalue.value
      count++
    }

    return {
      type: 'Record',
      length: count,
      items: items,
      loc: contextToLocation(ctx)
    }
  }

  visitExpressionRecordSelector(ctx: ExpressionRecordSelectorContext): sml.Declaration {
    this.debugVisit('Expression Record Selector', ctx)

    const label = ctx.getChild(1).accept(this) as sml.Constant

    return {
      type: 'RecordSelector',
      label: label.value.toString(),
      loc: contextToLocation(ctx)
    }
  }

  visitExpressionConstant(ctx: ExpressionConstantContext): sml.Declaration {
    this.debugVisit('Expression Constant', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitExpressionId(ctx: ExpressionIdContext): sml.Declaration {
    this.debugVisit('Expression Id', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitKeyvalue(ctx: KeyvalueContext): sml.Declaration {
    this.debugVisit('Keyvalue', ctx)

    return {
      type: 'Keyvalue',
      key: (ctx._key.accept(this) as sml.Constant).value.toString(),
      value: ctx._value.accept(this) as sml.Expression
    }
  }

  visitLabel(ctx: LabelContext): sml.Declaration {
    this.debugVisit('Label', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitLabelId(ctx: LabelIdContext): sml.Declaration {
    this.debugVisit('Label Id', ctx)

    const label = ctx.getChild(0).accept(this) as sml.Identifier

    return {
      type: 'Constant',
      value: label.name
    }
  }

  visitLabelInt(ctx: LabelIntContext): sml.Declaration {
    this.debugVisit('Label Int', ctx)

    return {
      type: 'Constant',
      value: parseInt(ctx.text)
    }
  }

  visitId(ctx: IdContext): sml.Declaration {
    this.debugVisit('Identifier', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitIdAlpha(ctx: IdAlphaContext): sml.Declaration {
    this.debugVisit('Identifier Alpha', ctx)

    return {
      type: 'Identifier',
      name: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitIdSymbol(ctx: IdSymbolContext): sml.Declaration {
    this.debugVisit('Identifier Symbol', ctx)

    return {
      type: 'Identifier',
      name: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitVariable(ctx: VariableContext): sml.Declaration {
    this.debugVisit('Variable', ctx)

    throw new Error(`not supported yet: ${ctx}`)
  }

  visitConstant(ctx: ConstantContext): sml.Declaration {
    this.debugVisit('Constant', ctx)

    return ctx.getChild(0).accept(this)
  }

  visitConstantInt(ctx: ConstantIntContext): sml.Declaration {
    this.debugVisit('Constant Int', ctx)

    return {
      type: 'Constant',
      value: parseInt(ctx.text),
      loc: contextToLocation(ctx)
    }
  }

  visitConstantReal(ctx: ConstantRealContext): sml.Declaration {
    this.debugVisit('Constant Real', ctx)

    return {
      type: 'Constant',
      value: parseFloat(ctx.text),
      loc: contextToLocation(ctx)
    }
  }

  visitConstantBool(ctx: ConstantBoolContext): sml.Declaration {
    this.debugVisit('Constant Bool', ctx)

    return {
      type: 'Constant',
      value: JSON.parse(ctx.text) as boolean,
      loc: contextToLocation(ctx)
    }
  }

  visitConstantChar(ctx: ConstantCharContext): sml.Declaration {
    this.debugVisit('Constant Char', ctx)

    return {
      type: 'Constant',
      value: ctx.text.slice(2, ctx.text.length - 1),
      loc: contextToLocation(ctx)
    }
  }

  visitConstantStr(ctx: ConstantStrContext): sml.Declaration {
    this.debugVisit('Constant Str', ctx)

    return {
      type: 'Constant',
      value: ctx.text.slice(1, ctx.text.length - 1),
      loc: contextToLocation(ctx)
    }
  }

  visit(tree: ParseTree): sml.Declaration {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): sml.Declaration {
    const declarations = []
    for (let i = 0; i < node.childCount; i++) {
      declarations.push(node.getChild(i).accept(this))
    }
    return {
      type: 'SequenceDeclaration',
      declarations: declarations
    }
  }

  visitTerminal(node: TerminalNode): sml.Declaration {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): sml.Declaration {
    throw new Error('bruh') // TODO: implement proper error type
  }

  debugVisit(phase: string, tree: ParseTree) {
    console.log(phase)
    console.log(tree)
    console.log('================================')
  }
}

function convertSml(program: ProgramContext): sml.Program | undefined {
  const generator = new ProgramGenerator()
  return {
    type: 'Program',
    body: program.accept(generator)
  }
}

export function parse(source: string): sml.Program | undefined {
  const inputStream = CharStreams.fromString(source)
  const lexer = new smlLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)
  const parser = new smlParser(tokenStream)
  parser.buildParseTree = true
  const tree = parser.program()
  const program = convertSml(tree)
  return program
}
