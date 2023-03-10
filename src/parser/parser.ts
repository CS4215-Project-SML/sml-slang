/* tslint:disable:max-classes-per-file */
import { CharStreams, CommonTokenStream } from 'antlr4ts'
import { ErrorNode } from 'antlr4ts/tree/ErrorNode'
import { ParseTree } from 'antlr4ts/tree/ParseTree'
import { RuleNode } from 'antlr4ts/tree/RuleNode'
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'

import { smlLexer } from '../lang/smlLexer'
import {
  BoolContext,
  ConstantContext,
  DeclarationContext,
  DeclarationExpressionContext,
  DeclarationValueContext,
  ExpressionApplicationInfixContext,
  ExpressionApplicationPrefixContext,
  ExpressionConstantContext,
  ExpressionContext,
  ExpressionParenthesesContext,
  IdAlphaContext,
  // CharacterContext,
  // StringContext,
  IdContext,
  IdSymbolContext,
  IntegerContext,
  LabelContext,
  PatternConstantContext,
  PatternContext,
  PatternIdContext,
  ProgramContext,
  ProgramDeclarationContext,
  ProgramSequenceContext,
  RealContext,
  smlParser,
  ValbindContext,
  VariableContext
} from '../lang/smlParser'
import { smlVisitor } from '../lang/smlVisitor'
import * as sml from '../sml/types'
import { Context, ErrorSeverity } from '../types'

// export class FatalSyntaxError implements SourceError {
//   public type = ErrorType.SYNTAX
//   public severity = ErrorSeverity.ERROR
//   public constructor(public location: es.SourceLocation, public message: string) {}

//   public explain() {
//     return this.message
//   }

//   public elaborate() {
//     return 'There is a syntax error in your program'
//   }
// }

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
  visitConstant(ctx: ConstantContext): sml.Declaration {
    console.log('con')
    console.log(ctx)
    console.log('================================')
    return ctx.getChild(0).accept(this)
  }

  visitInteger(ctx: IntegerContext): sml.Declaration {
    return {
      type: 'Constant',
      value: parseInt(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitReal(ctx: RealContext): sml.Declaration {
    return {
      type: 'Constant',
      value: parseFloat(ctx.text),
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitBool(ctx: BoolContext): sml.Declaration {
    return {
      type: 'Constant',
      value: JSON.parse(ctx.text) as boolean,
      raw: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  // visitCharacter(ctx: CharacterContext): sml.Declaration {
  //   return {
  //     type: 'Constant',
  //     value: ctx.text,
  //     raw: ctx.text,
  //     loc: contextToLocation(ctx)
  //   }
  // }

  // visitString(ctx: StringContext): sml.Declaration {
  //   return {
  //     type: 'Constant',
  //     value: ctx.text,
  //     raw: ctx.text,
  //     loc: contextToLocation(ctx)
  //   }
  // }

  visitId(ctx: IdContext): sml.Declaration {
    return ctx.getChild(0).accept(this)
  }

  visitIdAlpha(ctx: IdAlphaContext): sml.Declaration {
    return {
      type: 'Identifier',
      name: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitIdSymbol(ctx: IdSymbolContext): sml.Declaration {
    return {
      type: 'Identifier',
      name: ctx.text,
      loc: contextToLocation(ctx)
    }
  }

  visitVariable(ctx: VariableContext): sml.Declaration {
    throw new Error(`not supported yet: ${ctx}`)
  }

  visitLabel(ctx: LabelContext): sml.Declaration {
    throw new Error(`not supported yet: ${ctx}`)
  }

  visitExpression(ctx: ExpressionContext): sml.Declaration {
    console.log('exp')
    console.log(ctx)
    console.log('================================')
    return ctx.getChild(0).accept(this)
  }

  visitExpressionConstant(ctx: ExpressionConstantContext): sml.Declaration {
    console.log('expcon')
    console.log(ctx)
    console.log('================================')
    return ctx.getChild(0).accept(this)
  }

  visitExpressionParentheses(ctx: ExpressionParenthesesContext): sml.Declaration {
    console.log('exppar')
    console.log(ctx)
    console.log('================================')
    return ctx.getChild(0).accept(this)
  }

  visitExpressionApplicationPrefix(ctx: ExpressionApplicationPrefixContext): sml.Declaration {
    throw new Error(`not supported yet: ${ctx}`)
  }

  visitExpressionApplicationInfix(ctx: ExpressionApplicationInfixContext): sml.Declaration {
    console.log('expappinfix')
    console.log(ctx)
    console.log('================================')
    return {
      type: 'InfixApplicationExpression',
      operator: ctx._operator.text as sml.InfixOperator,
      left: ctx._left.accept(this) as sml.Expression,
      right: ctx._right.accept(this) as sml.Expression,
      loc: contextToLocation(ctx)
    }
  }

  visitPattern(ctx: PatternContext): sml.Declaration {
    return ctx.getChild(0).accept(this)
  }

  visitPatternConstant(ctx: PatternConstantContext): sml.Declaration {
    throw new Error(`not supported yet: ${ctx}`)
  }

  visitPatternId(ctx: PatternIdContext): sml.Declaration {
    throw new Error(`not supported yet: ${ctx}`)
  }

  visitDeclaration(ctx: DeclarationContext): sml.Declaration {
    return ctx.getChild(0).accept(this)
  }

  visitDeclarationExpression(ctx: DeclarationExpressionContext): sml.Declaration {
    console.log('decexp')
    console.log(ctx)
    console.log('================================')
    return ctx.getChild(0).accept(this)
  }

  visitDeclarationValue(ctx: DeclarationValueContext): sml.Declaration {
    console.log('decexp')
    console.log(ctx)
    console.log('================================')
    return ctx.getChild(0).accept(this)
  }

  visitValbind(ctx: ValbindContext): sml.Declaration {
    throw new Error(`not supported yet: ${ctx}`)
  }

  visitProgram(ctx: ProgramContext): sml.Declaration {
    console.log('prog')
    console.log(ctx)
    console.log('================================')
    return ctx.getChild(0).accept(this)
  }

  visitProgramDeclaration(ctx: ProgramDeclarationContext): sml.Declaration {
    console.log('progdec')
    console.log(ctx)
    console.log('================================')
    return ctx.getChild(0).accept(this)
  }

  visitProgramSequence(ctx: ProgramSequenceContext): sml.Declaration {
    console.log('progseq')
    const declarations = []
    declarations.push(ctx._left.accept(this))
    declarations.push(ctx._right.accept(this))
    return {
      type: 'SequenceDeclaration',
      declarations: declarations
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
    // throw new FatalSyntaxError(
    //   {
    //     start: {
    //       line: node.symbol.line,
    //       column: node.symbol.charPositionInLine
    //     },
    //     end: {
    //       line: node.symbol.line,
    //       column: node.symbol.charPositionInLine + 1
    //     }
    //   },
    //   `invalid syntax ${node.text}`
    // )
    throw new Error(`node error: ${node}`)
  }
}

function convertSml(program: ProgramContext): sml.Program | undefined {
  const generator = new ProgramGenerator()
  let declarations = []
  const programBody = program.accept(generator)
  if (programBody.type === 'SequenceDeclaration') {
    declarations = programBody.declarations
  } else {
    declarations.push(programBody)
  }
  return {
    type: 'Program',
    body: declarations
  }
}

export function parse(source: string, context: Context) {
  let program: sml.Program | undefined

  if (context.variant === 'sml') {
    const inputStream = CharStreams.fromString(source)
    const lexer = new smlLexer(inputStream)
    const tokenStream = new CommonTokenStream(lexer)
    const parser = new smlParser(tokenStream)
    parser.buildParseTree = true
    try {
      const tree = parser.program()
      program = convertSml(tree)
      console.log(program)
    } catch (error) {
      // if (error instanceof FatalSyntaxError) {
      //   context.errors.push(error)
      // } else {
      //   throw error
      // }
      throw error
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
