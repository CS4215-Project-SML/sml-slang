// Generated from ./src/lang/sml.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `smlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface smlVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by the `expressionParentheses`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionParentheses?: (ctx: ExpressionParenthesesContext) => Result

  /**
   * Visit a parse tree produced by the `expressionApplicationInfix`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionApplicationInfix?: (ctx: ExpressionApplicationInfixContext) => Result

  /**
   * Visit a parse tree produced by the `expressionApplicationPrefix`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionApplicationPrefix?: (ctx: ExpressionApplicationPrefixContext) => Result

  /**
   * Visit a parse tree produced by the `expressionConstant`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionConstant?: (ctx: ExpressionConstantContext) => Result

  /**
   * Visit a parse tree produced by the `expressionId`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpressionId?: (ctx: ExpressionIdContext) => Result

  /**
   * Visit a parse tree produced by the `constantInt`
   * labeled alternative in `smlParser.constant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstantInt?: (ctx: ConstantIntContext) => Result

  /**
   * Visit a parse tree produced by the `constantReal`
   * labeled alternative in `smlParser.constant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstantReal?: (ctx: ConstantRealContext) => Result

  /**
   * Visit a parse tree produced by the `constantBool`
   * labeled alternative in `smlParser.constant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstantBool?: (ctx: ConstantBoolContext) => Result

  /**
   * Visit a parse tree produced by the `constantChar`
   * labeled alternative in `smlParser.constant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstantChar?: (ctx: ConstantCharContext) => Result

  /**
   * Visit a parse tree produced by the `constantStr`
   * labeled alternative in `smlParser.constant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstantStr?: (ctx: ConstantStrContext) => Result

  /**
   * Visit a parse tree produced by the `patternConstant`
   * labeled alternative in `smlParser.pattern`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPatternConstant?: (ctx: PatternConstantContext) => Result

  /**
   * Visit a parse tree produced by the `patternId`
   * labeled alternative in `smlParser.pattern`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPatternId?: (ctx: PatternIdContext) => Result

  /**
   * Visit a parse tree produced by the `programSequence`
   * labeled alternative in `smlParser.program`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitProgramSequence?: (ctx: ProgramSequenceContext) => Result

  /**
   * Visit a parse tree produced by the `programDeclaration`
   * labeled alternative in `smlParser.program`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitProgramDeclaration?: (ctx: ProgramDeclarationContext) => Result

  /**
   * Visit a parse tree produced by the `programEmpty`
   * labeled alternative in `smlParser.program`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitProgramEmpty?: (ctx: ProgramEmptyContext) => Result

  /**
   * Visit a parse tree produced by the `idAlpha`
   * labeled alternative in `smlParser.id`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdAlpha?: (ctx: IdAlphaContext) => Result

  /**
   * Visit a parse tree produced by the `idSymbol`
   * labeled alternative in `smlParser.id`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIdSymbol?: (ctx: IdSymbolContext) => Result

  /**
   * Visit a parse tree produced by the `declarationValue`
   * labeled alternative in `smlParser.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarationValue?: (ctx: DeclarationValueContext) => Result

  /**
   * Visit a parse tree produced by the `declarationExpression`
   * labeled alternative in `smlParser.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclarationExpression?: (ctx: DeclarationExpressionContext) => Result

  /**
   * Visit a parse tree produced by `smlParser.program`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitProgram?: (ctx: ProgramContext) => Result

  /**
   * Visit a parse tree produced by `smlParser.declaration`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDeclaration?: (ctx: DeclarationContext) => Result

  /**
   * Visit a parse tree produced by `smlParser.valbind`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitValbind?: (ctx: ValbindContext) => Result

  /**
   * Visit a parse tree produced by `smlParser.pattern`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPattern?: (ctx: PatternContext) => Result

  /**
   * Visit a parse tree produced by `smlParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result

  /**
   * Visit a parse tree produced by `smlParser.label`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitLabel?: (ctx: LabelContext) => Result

  /**
   * Visit a parse tree produced by `smlParser.id`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitId?: (ctx: IdContext) => Result

  /**
   * Visit a parse tree produced by `smlParser.variable`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitVariable?: (ctx: VariableContext) => Result

  /**
   * Visit a parse tree produced by `smlParser.constant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstant?: (ctx: ConstantContext) => Result
}
