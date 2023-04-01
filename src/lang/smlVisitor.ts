// Generated from ./src/lang/sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExpressionLambdaContext } from "./smlParser";
import { ExpressionLetContext } from "./smlParser";
import { ExpressionParenthesesContext } from "./smlParser";
import { ExpressionApplicationPrefixContext } from "./smlParser";
import { ExpressionApplicationInfixContext } from "./smlParser";
import { ExpressionConditionalContext } from "./smlParser";
import { ExpressionRecordContext } from "./smlParser";
import { ExpressionTupleContext } from "./smlParser";
import { ExpressionListContext } from "./smlParser";
import { ExpressionRecordSelectorContext } from "./smlParser";
import { ExpressionConstantContext } from "./smlParser";
import { ExpressionIdentifierContext } from "./smlParser";
import { ConstantIntContext } from "./smlParser";
import { ConstantRealContext } from "./smlParser";
import { ConstantBoolContext } from "./smlParser";
import { ConstantCharContext } from "./smlParser";
import { ConstantStrContext } from "./smlParser";
import { PatternInfixContext } from "./smlParser";
import { PatternTupleContext } from "./smlParser";
import { PatternParanthesesContext } from "./smlParser";
import { PatternRecordContext } from "./smlParser";
import { PatternListContext } from "./smlParser";
import { PatternConstantContext } from "./smlParser";
import { PatternIdentifierContext } from "./smlParser";
import { ProgramSequenceContext } from "./smlParser";
import { ProgramDeclarationContext } from "./smlParser";
import { ProgramEmptyContext } from "./smlParser";
import { LabelIdentifierContext } from "./smlParser";
import { LabelIntContext } from "./smlParser";
import { DeclarationSequenceContext } from "./smlParser";
import { DeclarationFunctionContext } from "./smlParser";
import { DeclarationValueContext } from "./smlParser";
import { DeclarationExpressionContext } from "./smlParser";
import { MatchingSequenceContext } from "./smlParser";
import { MatchingAtomicContext } from "./smlParser";
import { ProgramContext } from "./smlParser";
import { DeclarationContext } from "./smlParser";
import { ValbindContext } from "./smlParser";
import { FunbindContext } from "./smlParser";
import { PatternContext } from "./smlParser";
import { MatchingContext } from "./smlParser";
import { MatchingruleContext } from "./smlParser";
import { KeypatternContext } from "./smlParser";
import { ExpressionContext } from "./smlParser";
import { KeyvalueContext } from "./smlParser";
import { LabelContext } from "./smlParser";
import { IdentifierContext } from "./smlParser";
import { ConstantContext } from "./smlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `smlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface smlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `expressionLambda`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionLambda?: (ctx: ExpressionLambdaContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionLet`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionLet?: (ctx: ExpressionLetContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionParentheses`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionParentheses?: (ctx: ExpressionParenthesesContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionApplicationPrefix`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionApplicationPrefix?: (ctx: ExpressionApplicationPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionApplicationInfix`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionApplicationInfix?: (ctx: ExpressionApplicationInfixContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionConditional`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionConditional?: (ctx: ExpressionConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionRecord`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionRecord?: (ctx: ExpressionRecordContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionTuple`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionTuple?: (ctx: ExpressionTupleContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionList`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionRecordSelector`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionRecordSelector?: (ctx: ExpressionRecordSelectorContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionConstant`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionConstant?: (ctx: ExpressionConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionIdentifier`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionIdentifier?: (ctx: ExpressionIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantInt`
	 * labeled alternative in `smlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantInt?: (ctx: ConstantIntContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantReal`
	 * labeled alternative in `smlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantReal?: (ctx: ConstantRealContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantBool`
	 * labeled alternative in `smlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantBool?: (ctx: ConstantBoolContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantChar`
	 * labeled alternative in `smlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantChar?: (ctx: ConstantCharContext) => Result;

	/**
	 * Visit a parse tree produced by the `constantStr`
	 * labeled alternative in `smlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantStr?: (ctx: ConstantStrContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternInfix`
	 * labeled alternative in `smlParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternInfix?: (ctx: PatternInfixContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternTuple`
	 * labeled alternative in `smlParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternTuple?: (ctx: PatternTupleContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternParantheses`
	 * labeled alternative in `smlParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternParantheses?: (ctx: PatternParanthesesContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternRecord`
	 * labeled alternative in `smlParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternRecord?: (ctx: PatternRecordContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternList`
	 * labeled alternative in `smlParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternList?: (ctx: PatternListContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternConstant`
	 * labeled alternative in `smlParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternConstant?: (ctx: PatternConstantContext) => Result;

	/**
	 * Visit a parse tree produced by the `patternIdentifier`
	 * labeled alternative in `smlParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternIdentifier?: (ctx: PatternIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `programSequence`
	 * labeled alternative in `smlParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgramSequence?: (ctx: ProgramSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `programDeclaration`
	 * labeled alternative in `smlParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgramDeclaration?: (ctx: ProgramDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `programEmpty`
	 * labeled alternative in `smlParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgramEmpty?: (ctx: ProgramEmptyContext) => Result;

	/**
	 * Visit a parse tree produced by the `labelIdentifier`
	 * labeled alternative in `smlParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelIdentifier?: (ctx: LabelIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by the `labelInt`
	 * labeled alternative in `smlParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelInt?: (ctx: LabelIntContext) => Result;

	/**
	 * Visit a parse tree produced by the `declarationSequence`
	 * labeled alternative in `smlParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationSequence?: (ctx: DeclarationSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `declarationFunction`
	 * labeled alternative in `smlParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationFunction?: (ctx: DeclarationFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by the `declarationValue`
	 * labeled alternative in `smlParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationValue?: (ctx: DeclarationValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `declarationExpression`
	 * labeled alternative in `smlParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationExpression?: (ctx: DeclarationExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `matchingSequence`
	 * labeled alternative in `smlParser.matching`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchingSequence?: (ctx: MatchingSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `matchingAtomic`
	 * labeled alternative in `smlParser.matching`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchingAtomic?: (ctx: MatchingAtomicContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.valbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValbind?: (ctx: ValbindContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.funbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunbind?: (ctx: FunbindContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPattern?: (ctx: PatternContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.matching`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatching?: (ctx: MatchingContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.matchingrule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchingrule?: (ctx: MatchingruleContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.keypattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeypattern?: (ctx: KeypatternContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.keyvalue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyvalue?: (ctx: KeyvalueContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;
}

