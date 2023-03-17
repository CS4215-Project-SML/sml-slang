// Generated from ./src/lang/sml.g4 by ANTLR 4.9.0-SNAPSHOT

import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'

import { ExpressionParenthesesContext } from './smlParser'
import { ExpressionConditionalContext } from './smlParser'
import { ExpressionApplicationInfixContext } from './smlParser'
import { ExpressionApplicationPrefixContext } from './smlParser'
import { ExpressionRecordContext } from './smlParser'
import { ExpressionSequenceContext } from './smlParser'
import { ExpressionListContext } from './smlParser'
import { ExpressionRecordSelectorContext } from './smlParser'
import { ExpressionConstantContext } from './smlParser'
import { ExpressionIdentifierContext } from './smlParser'
import { ConstantIntContext } from './smlParser'
import { ConstantRealContext } from './smlParser'
import { ConstantBoolContext } from './smlParser'
import { ConstantCharContext } from './smlParser'
import { ConstantStrContext } from './smlParser'
import { PatternConstantContext } from './smlParser'
import { PatternIdentifierContext } from './smlParser'
import { ProgramSequenceContext } from './smlParser'
import { ProgramDeclarationContext } from './smlParser'
import { ProgramEmptyContext } from './smlParser'
import { LabelIdentifierContext } from './smlParser'
import { LabelIntContext } from './smlParser'
import { DeclarationValueContext } from './smlParser'
import { DeclarationExpressionContext } from './smlParser'
import { ProgramContext } from './smlParser'
import { DeclarationContext } from './smlParser'
import { ValbindContext } from './smlParser'
import { PatternContext } from './smlParser'
import { ExpressionContext } from './smlParser'
import { KeyvalueContext } from './smlParser'
import { LabelContext } from './smlParser'
import { IdentifierContext } from './smlParser'
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
   * Enter a parse tree produced by the `expressionConditional`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  enterExpressionConditional?: (ctx: ExpressionConditionalContext) => void
  /**
   * Exit a parse tree produced by the `expressionConditional`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  exitExpressionConditional?: (ctx: ExpressionConditionalContext) => void

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
   * Enter a parse tree produced by the `expressionRecord`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  enterExpressionRecord?: (ctx: ExpressionRecordContext) => void
  /**
   * Exit a parse tree produced by the `expressionRecord`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  exitExpressionRecord?: (ctx: ExpressionRecordContext) => void

  /**
   * Enter a parse tree produced by the `expressionSequence`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  enterExpressionSequence?: (ctx: ExpressionSequenceContext) => void
  /**
   * Exit a parse tree produced by the `expressionSequence`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  exitExpressionSequence?: (ctx: ExpressionSequenceContext) => void

  /**
   * Enter a parse tree produced by the `expressionList`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  enterExpressionList?: (ctx: ExpressionListContext) => void
  /**
   * Exit a parse tree produced by the `expressionList`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  exitExpressionList?: (ctx: ExpressionListContext) => void

  /**
   * Enter a parse tree produced by the `expressionRecordSelector`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  enterExpressionRecordSelector?: (ctx: ExpressionRecordSelectorContext) => void
  /**
   * Exit a parse tree produced by the `expressionRecordSelector`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  exitExpressionRecordSelector?: (ctx: ExpressionRecordSelectorContext) => void

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
   * Enter a parse tree produced by the `expressionIdentifier`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  enterExpressionIdentifier?: (ctx: ExpressionIdentifierContext) => void
  /**
   * Exit a parse tree produced by the `expressionIdentifier`
   * labeled alternative in `smlParser.expression`.
   * @param ctx the parse tree
   */
  exitExpressionIdentifier?: (ctx: ExpressionIdentifierContext) => void

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
   * Enter a parse tree produced by the `patternIdentifier`
   * labeled alternative in `smlParser.pattern`.
   * @param ctx the parse tree
   */
  enterPatternIdentifier?: (ctx: PatternIdentifierContext) => void
  /**
   * Exit a parse tree produced by the `patternIdentifier`
   * labeled alternative in `smlParser.pattern`.
   * @param ctx the parse tree
   */
  exitPatternIdentifier?: (ctx: PatternIdentifierContext) => void

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
   * Enter a parse tree produced by the `labelIdentifier`
   * labeled alternative in `smlParser.label`.
   * @param ctx the parse tree
   */
  enterLabelIdentifier?: (ctx: LabelIdentifierContext) => void
  /**
   * Exit a parse tree produced by the `labelIdentifier`
   * labeled alternative in `smlParser.label`.
   * @param ctx the parse tree
   */
  exitLabelIdentifier?: (ctx: LabelIdentifierContext) => void

  /**
   * Enter a parse tree produced by the `labelInt`
   * labeled alternative in `smlParser.label`.
   * @param ctx the parse tree
   */
  enterLabelInt?: (ctx: LabelIntContext) => void
  /**
   * Exit a parse tree produced by the `labelInt`
   * labeled alternative in `smlParser.label`.
   * @param ctx the parse tree
   */
  exitLabelInt?: (ctx: LabelIntContext) => void

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
   * Enter a parse tree produced by `smlParser.keyvalue`.
   * @param ctx the parse tree
   */
  enterKeyvalue?: (ctx: KeyvalueContext) => void
  /**
   * Exit a parse tree produced by `smlParser.keyvalue`.
   * @param ctx the parse tree
   */
  exitKeyvalue?: (ctx: KeyvalueContext) => void

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
   * Enter a parse tree produced by `smlParser.identifier`.
   * @param ctx the parse tree
   */
  enterIdentifier?: (ctx: IdentifierContext) => void
  /**
   * Exit a parse tree produced by `smlParser.identifier`.
   * @param ctx the parse tree
   */
  exitIdentifier?: (ctx: IdentifierContext) => void

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
