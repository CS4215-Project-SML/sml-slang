/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import * as es from 'estree'

import { smlLexer } from '../lang/smlLexer'
import {
  NumberContext,
  ConstantContext,
  IntContext,
  RealContext,
  BoolContext,
  CharContext,
  DecContext,
  DecExpContext,
  ExpAppInfixContext,
  ExpAppPrefixContext,
  ExpConContext,
  ExpContext,
  ExpParContext,
  IdContext,
  IdAlphaContext,
  IdSymbolContext,
  LabelContext,
  ProgContext,
  ProgDecContext,
  ProgSeqContext,
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

// function contextToLocation(ctx: ExpressionContext): es.SourceLocation {
//   return {
//     start: {
//       line: ctx.start.line,
//       column: ctx.start.charPositionInLine
//     },
//     end: {
//       line: ctx.stop ? ctx.stop.line : ctx.start.line,
//       column: ctx.stop ? ctx.stop.charPositionInLine : ctx.start.charPositionInLine
//     }
//   }
// }

// class ExpressionGenerator implements smlVisitor<es.Expression> {
//   visitNumber(ctx: NumberContext): es.Expression {
//     return {
//       type: 'Literal',
//       value: parseInt(ctx.text),
//       raw: ctx.text,
//       loc: contextToLocation(ctx)
//     }
//   }
//   visitParentheses(ctx: ParenthesesContext): es.Expression {
//     return this.visit(ctx.expression())
//   }
//   visitPower(ctx: PowerContext): es.Expression {
//     return {
//       type: 'BinaryExpression',
//       operator: '^',
//       left: this.visit(ctx._left),
//       right: this.visit(ctx._right),
//       loc: contextToLocation(ctx)
//     }
//   }

//   visitMultiplication(ctx: MultiplicationContext): es.Expression {
//     return {
//       type: 'BinaryExpression',
//       operator: '*',
//       left: this.visit(ctx._left),
//       right: this.visit(ctx._right),
//       loc: contextToLocation(ctx)
//     }
//   }
//   visitDivision(ctx: DivisionContext): es.Expression {
//     return {
//       type: 'BinaryExpression',
//       operator: '/',
//       left: this.visit(ctx._left),
//       right: this.visit(ctx._right),
//       loc: contextToLocation(ctx)
//     }
//   }
//   visitAddition(ctx: AdditionContext): es.Expression {
//     return {
//       type: 'BinaryExpression',
//       operator: '+',
//       left: this.visit(ctx._left),
//       right: this.visit(ctx._right),
//       loc: contextToLocation(ctx)
//     }
//   }

//   visitSubtraction(ctx: SubtractionContext): es.Expression {
//     return {
//       type: 'BinaryExpression',
//       operator: '-',
//       left: this.visit(ctx._left),
//       right: this.visit(ctx._right),
//       loc: contextToLocation(ctx)
//     }
//   }

//   visitExpression?: ((ctx: ExpressionContext) => es.Expression) | undefined
//   visitStart?: ((ctx: StartContext) => es.Expression) | undefined

//   visit(tree: ParseTree): es.Expression {
//     return tree.accept(this)
//   }
//   visitChildren(node: RuleNode): es.Expression {
//     const expressions: es.Expression[] = []
//     for (let i = 0; i < node.childCount; i++) {
//       expressions.push(node.getChild(i).accept(this))
//     }
//     return {
//       type: 'SequenceExpression',
//       expressions
//     }
//   }
//   visitTerminal(node: TerminalNode): es.Expression {
//     return node.accept(this)
//   }

//   visitErrorNode(node: ErrorNode): es.Expression {
//     throw new FatalSyntaxError(
//       {
//         start: {
//           line: node.symbol.line,
//           column: node.symbol.charPositionInLine
//         },
//         end: {
//           line: node.symbol.line,
//           column: node.symbol.charPositionInLine + 1
//         }
//       },
//       `invalid syntax ${node.text}`
//     )
//   }
// }

// function convertExpression(expression: ExpressionContext): es.Expression {
//   const generator = new ExpressionGenerator()
//   return expression.accept(generator)
// }

// function convertSource(expression: ExpressionContext): es.Program {
//   return {
//     type: 'Program',
//     sourceType: 'script',
//     body: [
//       {
//         type: 'ExpressionStatement',
//         expression: convertExpression(expression)
//       }
//     ]
//   }
// }

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
  visitNumber(ctx: NumberContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitConstant(ctx: ConstantContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
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
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitBool(ctx: BoolContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitChar(ctx: CharContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitString(ctx: StringContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitId(ctx: IdContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitIdAlpha(ctx: IdAlphaContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitIdSymbol(ctx: IdSymbolContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitVariable(ctx: VariableContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitLabel(ctx: LabelContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitType(ctx: TypeContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitTypeVar(ctx: TypeVarContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitTypePar(ctx: TypeParContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitTypeFun(ctx: TypeFunContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitExp(ctx: ExpContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitExpConst(ctx: ExpConContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitExpPar(ctx: ExpParContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitExpAppPrefix(ctx: ExpAppPrefixContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitExpAppInfix(ctx: ExpAppInfixContext): es.Expression {
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitDec(ctx: DecContext): es.Expression {
    console.log('dec')
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitDecExp(ctx: DecExpContext): es.Expression {
    console.log('decexp')
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitProg(ctx: ProgContext): es.Expression {
    console.log('prog')
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitProgDec(ctx: ProgDecContext): es.Expression {
    console.log('progdec')
    return {
      type: 'Literal',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitProgSeq(ctx: ProgSeqContext): es.Expression {
    console.log('progseq')
    const expressions: es.Expression[] = []
    for (let i = 0; i < ctx.childCount; i++) {
      expressions.push(ctx.getChild(i).accept(this))
    }
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

function convertsml(program: ProgContext): es.Program | undefined {
  console.log(program)
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
      program = convertsml(tree)
      console.log(program)
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
