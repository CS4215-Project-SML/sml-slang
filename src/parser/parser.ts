/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import { smlLexer } from '../lang/smlLexer'
import {
  BoolContext,
  CharContext,
  ConstantContext,
  DecContext,
  DecExpContext,
  ExpAppInfixContext,
  ExpAppPrefixContext,
  ExpConContext,
  ExpContext,
  ExpParContext,
  IdAlphaContext,
  IdContext,
  IdSymbolContext,
  IntContext,
  LabelContext,
  NumberContext,
  ProgContext,
  ProgDecContext,
  ProgSeqContext,
  RealContext,
  smlParser,
  StringContext,
  TypeContext,
  TypeFunContext,
  TypeParContext,
  TypeVarContext,
  VariableContext
} from '../lang/smlParser'
import { smlVisitor } from '../lang/smlVisitor'
import { Context, ErrorSeverity, ErrorType, SourceError, Variable } from '../types'
import { expressionStatement } from '../utils/astCreator'
import { stripIndent } from '../utils/formatters'

export class DisallowedConstructError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public nodeType: string

  constructor(public node: es.Node) {
    this.nodeType = this.formatNodeType(this.node.type)
  }

  get location() {
    return this.node.loc!
  }

  public explain() {
    return `${this.nodeType} are not allowed`
  }

  public elaborate() {
    return stripIndent`
      You are trying to use ${this.nodeType}, which is not allowed (yet).
    `
  }

  /**
   * Converts estree node.type into english
   * e.g. ThisExpression -> 'this' expressions
   *      Property -> Properties
   *      EmptyStatement -> Empty Statements
   */
  private formatNodeType(nodeType: string) {
    switch (nodeType) {
      case 'ThisExpression':
        return "'this' expressions"
      case 'Property':
        return 'Properties'
      default: {
        const words = nodeType.split(/(?=[A-Z])/)
        return words.map((word, i) => (i === 0 ? word : word.toLowerCase())).join(' ') + 's'
      }
    }
  }
}

export class FatalSyntaxError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public location: es.SourceLocation, public message: string) {}

  public explain() {
    return this.message
  }

  public elaborate() {
    return 'There is a syntax error in your program'
  }
}

export class MissingSemicolonError implements SourceError {
  public type = ErrorType.SYNTAX
  public severity = ErrorSeverity.ERROR
  public constructor(public location: es.SourceLocation) {}

  public explain() {
    return 'Missing semicolon at the end of statement'
  }

  public elaborate() {
    return 'Every statement must be terminated by a semicolon.'
  }
}

export class TrailingCommaError implements SourceError {
  public type: ErrorType.SYNTAX
  public severity: ErrorSeverity.WARNING
  public constructor(public location: es.SourceLocation) {}

  public explain() {
    return 'Trailing comma'
  }

  public elaborate() {
    return 'Please remove the trailing comma'
  }
}

function contextToLocation(ctx: ExpContext): es.SourceLocation {
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

class ProgramGenerator implements smlVisitor<es.Expression> {
  visitNumber?: ((ctx: NumberContext) => es.Expression) | undefined

  visitConstant(ctx: ConstantContext): es.Expression {
    console.log('con')
    console.log(ctx)
    console.log('================================')
    return ctx.getChild(0).accept(this)
  }

  visitInt(ctx: IntContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitReal(ctx: RealContext): es.Expression {
    return {
      type: 'Literal',
      value: parseFloat(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitBool(ctx: BoolContext): es.Expression {
    return {
      type: 'Literal',
      value: JSON.parse(ctx.text) as boolean,
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitChar(ctx: CharContext): es.Expression {
    return {
      type: 'Literal',
      value: ctx.text,
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitString(ctx: StringContext): es.Expression {
    return {
      type: 'Literal',
      value: ctx.text,
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitId?: ((ctx: TypeContext) => es.Expression) | undefined

  visitIdAlpha(ctx: IdAlphaContext): es.Expression {
    return {
      type: 'Identifier',
      name: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitIdSymbol(ctx: IdSymbolContext): es.Expression {
    return {
      type: 'Identifier',
      name: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitVariable(ctx: VariableContext): es.Expression {
    throw new Error(`not supported yet: ${ctx}`)
  }

  visitLabel(ctx: LabelContext): es.Expression {
    throw new Error(`not supported yet: ${ctx}`)
  }

  visitType?: ((ctx: TypeContext) => es.Expression) | undefined

  visitTypeVar(ctx: TypeVarContext): es.Expression {
    throw new Error(`not supported yet: ${ctx}`)
  }

  visitTypePar(ctx: TypeParContext): es.Expression {
    throw new Error(`not supported yet: ${ctx}`)
  }

  visitTypeFun(ctx: TypeFunContext): es.Expression {
    throw new Error(`not supported yet: ${ctx}`)
  }

  visitExp?: ((ctx: ExpContext) => es.Expression) | undefined

  visitExpCon(ctx: ExpConContext): es.Expression {
    console.log('expcon')
    console.log(ctx)
    console.log('================================')
    return ctx.getChild(0).accept(this)
  }

  visitExpPar(ctx: ExpParContext): es.Expression {
    console.log('exppar')
    console.log(ctx)
    console.log('================================')
    return ctx.getChild(0).accept(this)
  }

  visitExpAppPrefix(ctx: ExpAppPrefixContext): es.Expression {
    throw new Error(`not supported yet: ${ctx}`)
  }

  visitExpAppInfix(ctx: ExpAppInfixContext): es.Expression {
    console.log('expappinfix')
    console.log(ctx)
    console.log('================================')
    return {
      type: 'BinaryExpression',
      operator: ctx._operator.text as es.BinaryOperator,
      left: ctx._left.accept(this),
      right: ctx._right.accept(this),
      loc: contextToLocation(ctx)
    }
  }

  visitDec?: ((ctx: DecContext) => es.Expression) | undefined

  visitDecExp(ctx: DecExpContext): es.Expression {
    console.log('decexp')
    console.log(ctx)
    console.log('================================')
    return ctx.getChild(0).accept(this)
  }

  // visitProg?: ((ctx: ProgContext) => es.Expression) | undefined

  visitProg(ctx: ProgContext): es.Expression {
    console.log('prog')
    console.log(ctx)
    console.log('================================')
    return ctx.getChild(0).accept(this)
  }

  visitProgDec(ctx: ProgDecContext): es.Expression {
    console.log('progdec')
    console.log(ctx)
    console.log('================================')
    return ctx.getChild(0).accept(this)
  }

  visitProgSeq(ctx: ProgSeqContext): es.Expression {
    console.log('progseq')
    const expressions: es.Expression[] = []
    expressions.push(ctx._left.accept(this))
    expressions.push(ctx._right.accept(this))
    return {
      type: 'SequenceExpression',
      expressions
    }
  }

  visit(tree: ParseTree): es.Expression {
    return tree.accept(this)
  }

  visitChildren(node: RuleNode): es.Expression {
    const expressions: es.Expression[] = []
    for (let i = 0; i < node.childCount; i++) {
      expressions.push(node.getChild(i).accept(this))
    }
    return {
      type: 'SequenceExpression',
      expressions
    }
  }

  visitTerminal(node: TerminalNode): es.Expression {
    return node.accept(this)
  }

  visitErrorNode(node: ErrorNode): es.Expression {
    throw new FatalSyntaxError(
      {
        start: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine
        },
        end: {
          line: node.symbol.line,
          column: node.symbol.charPositionInLine + 1
        }
      },
      `invalid syntax ${node.text}`
    )
  }
}

function convertSml(program: ProgContext): es.Program | undefined {
  const generator = new ProgramGenerator()
  console.log(program.accept(generator))
  return undefined
}

export function parse(source: string, context: Context) {
  let program: es.Program | undefined

  if (context.variant === 'sml') {
    const inputStream = CharStreams.fromString(source)
    const lexer = new smlLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new smlParser(tokenStream)
    parser.buildParseTree = true
    try {
      const tree = parser.prog()
      // console.log(tree)
      program = convertSml(tree)
    } catch (error) {
      if (error instanceof FatalSyntaxError) {
        context.errors.push(error)
      } else {
        throw error
      }
    }
    const hasErrors = context.errors.find(m => m.severity === ErrorSeverity.ERROR)
    if (program && !hasErrors) {
      return program
    } else {
      return undefined
    }
  } else {
    return undefined
  }
}
