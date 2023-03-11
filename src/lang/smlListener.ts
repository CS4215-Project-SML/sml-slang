// Generated from ./src/lang/sml.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { ExpressionParenthesesContext } from './smlParser'
import { ExpressionApplicationInfixContext } from './smlParser'
import { ExpressionApplicationPrefixContext } from './smlParser'
import { ExpressionConstantContext } from './smlParser'
import { ExpressionIdContext } from './smlParser'
import { ConstantIntContext } from './smlParser'
import { ConstantRealContext } from './smlParser'
import { ConstantBoolContext } from './smlParser'
import { ConstantCharContext } from './smlParser'
import { ConstantStrContext } from './smlParser'
import { PatternConstantContext } from './smlParser'
import { PatternIdContext } from './smlParser'
import { ProgramSequenceContext } from './smlParser'
import { ProgramDeclarationContext } from './smlParser'
import { ProgramEmptyContext } from './smlParser'
import { IdAlphaContext } from './smlParser'
import { IdSymbolContext } from './smlParser'
import { DeclarationValueContext } from './smlParser'
import { DeclarationExpressionContext } from './smlParser'
import { ProgramContext } from './smlParser'
import { DeclarationContext } from './smlParser'
import { ValbindContext } from './smlParser'
import { PatternContext } from './smlParser'
import { ExpressionContext } from './smlParser'
import { LabelContext } from './smlParser'
import { IdContext } from './smlParser'
import { VariableContext } from './smlParser'
import { ConstantContext } from './smlParser'

/**
 * This interface defines a complete listener for a parse tree produced by
 * `smlParser`.
 */
export interface smlListener extends ParseTreeListener {
  /**
   * Enter a parse tree produced by the `expressionParentheses`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  enterExpressionParentheses?: (ctx: ExpressionParenthesesContext) => void
  /**
   * Exit a parse tree produced by the `expressionParentheses`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  exitExpressionParentheses?: (ctx: ExpressionParenthesesContext) => void

  /**
   * Enter a parse tree produced by the `expressionApplicationInfix`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  enterExpressionApplicationInfix?: (ctx: ExpressionApplicationInfixContext) => void
  /**
   * Exit a parse tree produced by the `expressionApplicationInfix`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  exitExpressionApplicationInfix?: (ctx: ExpressionApplicationInfixContext) => void

  /**
   * Enter a parse tree produced by the `expressionApplicationPrefix`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  enterExpressionApplicationPrefix?: (ctx: ExpressionApplicationPrefixContext) => void
  /**
   * Exit a parse tree produced by the `expressionApplicationPrefix`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  exitExpressionApplicationPrefix?: (ctx: ExpressionApplicationPrefixContext) => void

  /**
   * Enter a parse tree produced by the `expressionConstant`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  enterExpressionConstant?: (ctx: ExpressionConstantContext) => void
  /**
   * Exit a parse tree produced by the `expressionConstant`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  exitExpressionConstant?: (ctx: ExpressionConstantContext) => void

  /**
   * Enter a parse tree produced by the `expressionId`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  enterExpressionId?: (ctx: ExpressionIdContext) => void
  /**
   * Exit a parse tree produced by the `expressionId`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  exitExpressionId?: (ctx: ExpressionIdContext) => void

  /**
   * Enter a parse tree produced by the `constantInt`
   * labeled alternative in `smlParser.constant`.
   * @param ctx the parse tree
   */
  enterConstantInt?: (ctx: ConstantIntContext) => void
  /**
   * Exit a parse tree produced by the `constantInt`
   * labeled alternative in `smlParser.constant`.
   * @param ctx the parse tree
   */
  exitConstantInt?: (ctx: ConstantIntContext) => void

  /**
   * Enter a parse tree produced by the `constantReal`
   * labeled alternative in `smlParser.constant`.
   * @param ctx the parse tree
   */
  enterConstantReal?: (ctx: ConstantRealContext) => void
  /**
   * Exit a parse tree produced by the `constantReal`
   * labeled alternative in `smlParser.constant`.
   * @param ctx the parse tree
   */
  exitConstantReal?: (ctx: ConstantRealContext) => void

  /**
   * Enter a parse tree produced by the `constantBool`
   * labeled alternative in `smlParser.constant`.
   * @param ctx the parse tree
   */
  enterConstantBool?: (ctx: ConstantBoolContext) => void
  /**
   * Exit a parse tree produced by the `constantBool`
   * labeled alternative in `smlParser.constant`.
   * @param ctx the parse tree
   */
  exitConstantBool?: (ctx: ConstantBoolContext) => void

  /**
   * Enter a parse tree produced by the `constantChar`
   * labeled alternative in `smlParser.constant`.
   * @param ctx the parse tree
   */
  enterConstantChar?: (ctx: ConstantCharContext) => void
  /**
   * Exit a parse tree produced by the `constantChar`
   * labeled alternative in `smlParser.constant`.
   * @param ctx the parse tree
   */
  exitConstantChar?: (ctx: ConstantCharContext) => void

  /**
   * Enter a parse tree produced by the `constantStr`
   * labeled alternative in `smlParser.constant`.
   * @param ctx the parse tree
   */
  enterConstantStr?: (ctx: ConstantStrContext) => void
  /**
   * Exit a parse tree produced by the `constantStr`
   * labeled alternative in `smlParser.constant`.
   * @param ctx the parse tree
   */
  exitConstantStr?: (ctx: ConstantStrContext) => void

  /**
   * Enter a parse tree produced by the `patternConstant`
   * labeled alternative in `smlParser.pattern`.
   * @param ctx the parse tree
   */
  enterPatternConstant?: (ctx: PatternConstantContext) => void
  /**
   * Exit a parse tree produced by the `patternConstant`
   * labeled alternative in `smlParser.pattern`.
   * @param ctx the parse tree
   */
  exitPatternConstant?: (ctx: PatternConstantContext) => void

  /**
   * Enter a parse tree produced by the `patternId`
   * labeled alternative in `smlParser.pattern`.
   * @param ctx the parse tree
   */
  enterPatternId?: (ctx: PatternIdContext) => void
  /**
   * Exit a parse tree produced by the `patternId`
   * labeled alternative in `smlParser.pattern`.
   * @param ctx the parse tree
   */
  exitPatternId?: (ctx: PatternIdContext) => void

  /**
   * Enter a parse tree produced by the `programSequence`
   * labeled alternative in `smlParser.program`.
   * @param ctx the parse tree
   */
  enterProgramSequence?: (ctx: ProgramSequenceContext) => void
  /**
   * Exit a parse tree produced by the `programSequence`
   * labeled alternative in `smlParser.program`.
   * @param ctx the parse tree
   */
  exitProgramSequence?: (ctx: ProgramSequenceContext) => void

  /**
   * Enter a parse tree produced by the `programDeclaration`
   * labeled alternative in `smlParser.program`.
   * @param ctx the parse tree
   */
  enterProgramDeclaration?: (ctx: ProgramDeclarationContext) => void
  /**
   * Exit a parse tree produced by the `programDeclaration`
   * labeled alternative in `smlParser.program`.
   * @param ctx the parse tree
   */
  exitProgramDeclaration?: (ctx: ProgramDeclarationContext) => void

  /**
   * Enter a parse tree produced by the `programEmpty`
   * labeled alternative in `smlParser.program`.
   * @param ctx the parse tree
   */
  enterProgramEmpty?: (ctx: ProgramEmptyContext) => void
  /**
   * Exit a parse tree produced by the `programEmpty`
   * labeled alternative in `smlParser.program`.
   * @param ctx the parse tree
   */
  exitProgramEmpty?: (ctx: ProgramEmptyContext) => void

  /**
   * Enter a parse tree produced by the `idAlpha`
   * labeled alternative in `smlParser.id`.
   * @param ctx the parse tree
   */
  enterIdAlpha?: (ctx: IdAlphaContext) => void
  /**
   * Exit a parse tree produced by the `idAlpha`
   * labeled alternative in `smlParser.id`.
   * @param ctx the parse tree
   */
  exitIdAlpha?: (ctx: IdAlphaContext) => void

  /**
   * Enter a parse tree produced by the `idSymbol`
   * labeled alternative in `smlParser.id`.
   * @param ctx the parse tree
   */
  enterIdSymbol?: (ctx: IdSymbolContext) => void
  /**
   * Exit a parse tree produced by the `idSymbol`
   * labeled alternative in `smlParser.id`.
   * @param ctx the parse tree
   */
  exitIdSymbol?: (ctx: IdSymbolContext) => void

  /**
   * Enter a parse tree produced by the `declarationValue`
   * labeled alternative in `smlParser.declaration`.
   * @param ctx the parse tree
   */
  enterDeclarationValue?: (ctx: DeclarationValueContext) => void
  /**
   * Exit a parse tree produced by the `declarationValue`
   * labeled alternative in `smlParser.declaration`.
   * @param ctx the parse tree
   */
  exitDeclarationValue?: (ctx: DeclarationValueContext) => void

  /**
   * Enter a parse tree produced by the `declarationExpression`
   * labeled alternative in `smlParser.declaration`.
   * @param ctx the parse tree
   */
  enterDeclarationExpression?: (ctx: DeclarationExpressionContext) => void
  /**
   * Exit a parse tree produced by the `declarationExpression`
   * labeled alternative in `smlParser.declaration`.
   * @param ctx the parse tree
   */
  exitDeclarationExpression?: (ctx: DeclarationExpressionContext) => void

  /**
   * Enter a parse tree produced by `smlParser.program`.
   * @param ctx the parse tree
   */
  enterProgram?: (ctx: ProgramContext) => void
  /**
   * Exit a parse tree produced by `smlParser.program`.
   * @param ctx the parse tree
   */
  exitProgram?: (ctx: ProgramContext) => void

  /**
   * Enter a parse tree produced by `smlParser.declaration`.
   * @param ctx the parse tree
   */
  enterDeclaration?: (ctx: DeclarationContext) => void
  /**
   * Exit a parse tree produced by `smlParser.declaration`.
   * @param ctx the parse tree
   */
  exitDeclaration?: (ctx: DeclarationContext) => void

  /**
   * Enter a parse tree produced by `smlParser.valbind`.
   * @param ctx the parse tree
   */
  enterValbind?: (ctx: ValbindContext) => void
  /**
   * Exit a parse tree produced by `smlParser.valbind`.
   * @param ctx the parse tree
   */
  exitValbind?: (ctx: ValbindContext) => void

  /**
   * Enter a parse tree produced by `smlParser.pattern`.
   * @param ctx the parse tree
   */
  enterPattern?: (ctx: PatternContext) => void
  /**
   * Exit a parse tree produced by `smlParser.pattern`.
   * @param ctx the parse tree
   */
  exitPattern?: (ctx: PatternContext) => void

  /**
   * Enter a parse tree produced by `smlParser.expression`.
   * @param ctx the parse tree
   */
  enterExpression?: (ctx: ExpressionContext) => void
  /**
   * Exit a parse tree produced by `smlParser.expression`.
   * @param ctx the parse tree
   */
  exitExpression?: (ctx: ExpressionContext) => void

  /**
   * Enter a parse tree produced by `smlParser.label`.
   * @param ctx the parse tree
   */
  enterLabel?: (ctx: LabelContext) => void
  /**
   * Exit a parse tree produced by `smlParser.label`.
   * @param ctx the parse tree
   */
  exitLabel?: (ctx: LabelContext) => void

  /**
   * Enter a parse tree produced by `smlParser.id`.
   * @param ctx the parse tree
   */
  enterId?: (ctx: IdContext) => void
  /**
   * Exit a parse tree produced by `smlParser.id`.
   * @param ctx the parse tree
   */
  exitId?: (ctx: IdContext) => void

  /**
   * Enter a parse tree produced by `smlParser.variable`.
   * @param ctx the parse tree
   */
  enterVariable?: (ctx: VariableContext) => void
  /**
   * Exit a parse tree produced by `smlParser.variable`.
   * @param ctx the parse tree
   */
  exitVariable?: (ctx: VariableContext) => void

  /**
   * Enter a parse tree produced by `smlParser.constant`.
   * @param ctx the parse tree
   */
  enterConstant?: (ctx: ConstantContext) => void
  /**
   * Exit a parse tree produced by `smlParser.constant`.
   * @param ctx the parse tree
   */
  exitConstant?: (ctx: ConstantContext) => void
}
