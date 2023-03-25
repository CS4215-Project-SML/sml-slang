// Generated from ./src/lang/sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExpressionParenthesesContext } from "./smlParser";
import { ExpressionLambdaContext } from "./smlParser";
import { ExpressionConditionalContext } from "./smlParser";
import { ExpressionApplicationInfixContext } from "./smlParser";
import { ExpressionApplicationPrefixContext } from "./smlParser";
import { ExpressionRecordContext } from "./smlParser";
import { ExpressionTupleContext } from "./smlParser";
import { ExpressionListContext } from "./smlParser";
import { ExpressionRecordSelectorContext } from "./smlParser";
import { ExpressionConstantContext } from "./smlParser";
import { ExpressionIdContext } from "./smlParser";
import { ConstantIntContext } from "./smlParser";
import { ConstantRealContext } from "./smlParser";
import { ConstantBoolContext } from "./smlParser";
import { ConstantCharContext } from "./smlParser";
import { ConstantStrContext } from "./smlParser";
import { PatternInfixContext } from "./smlParser";
import { PatternTupleContext } from "./smlParser";
import { PatternRecordContext } from "./smlParser";
import { PatternListContext } from "./smlParser";
import { PatternConstantContext } from "./smlParser";
import { PatternIdContext } from "./smlParser";
import { ProgramSequenceContext } from "./smlParser";
import { ProgramDeclarationContext } from "./smlParser";
import { ProgramEmptyContext } from "./smlParser";
import { LabelIdContext } from "./smlParser";
import { LabelIntContext } from "./smlParser";
import { DeclarationFunctionContext } from "./smlParser";
import { DeclarationValueContext } from "./smlParser";
import { DeclarationExpressionContext } from "./smlParser";
import { IdAlphaContext } from "./smlParser";
import { IdSymbolContext } from "./smlParser";
import { MatchSequenceContext } from "./smlParser";
import { MatchAtomicContext } from "./smlParser";
import { ProgramContext } from "./smlParser";
import { DeclarationContext } from "./smlParser";
import { ValbindContext } from "./smlParser";
import { FunbindContext } from "./smlParser";
import { PatternContext } from "./smlParser";
import { MatchSmlContext } from "./smlParser";
import { MruleContext } from "./smlParser";
import { KeypatternContext } from "./smlParser";
import { ExpressionContext } from "./smlParser";
import { KeyvalueContext } from "./smlParser";
import { LabelContext } from "./smlParser";
import { IdContext } from "./smlParser";
import { VariableContext } from "./smlParser";
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
	 * Visit a parse tree produced by the `expressionParentheses`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionParentheses?: (ctx: ExpressionParenthesesContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionLambda`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionLambda?: (ctx: ExpressionLambdaContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionConditional`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionConditional?: (ctx: ExpressionConditionalContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionApplicationInfix`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionApplicationInfix?: (ctx: ExpressionApplicationInfixContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionApplicationPrefix`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionApplicationPrefix?: (ctx: ExpressionApplicationPrefixContext) => Result;

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
	 * Visit a parse tree produced by the `expressionId`
	 * labeled alternative in `smlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionId?: (ctx: ExpressionIdContext) => Result;

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
	 * Visit a parse tree produced by the `patternId`
	 * labeled alternative in `smlParser.pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternId?: (ctx: PatternIdContext) => Result;

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
	 * Visit a parse tree produced by the `labelId`
	 * labeled alternative in `smlParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelId?: (ctx: LabelIdContext) => Result;

	/**
	 * Visit a parse tree produced by the `labelInt`
	 * labeled alternative in `smlParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelInt?: (ctx: LabelIntContext) => Result;

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
	 * Visit a parse tree produced by the `idAlpha`
	 * labeled alternative in `smlParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdAlpha?: (ctx: IdAlphaContext) => Result;

	/**
	 * Visit a parse tree produced by the `idSymbol`
	 * labeled alternative in `smlParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdSymbol?: (ctx: IdSymbolContext) => Result;

	/**
	 * Visit a parse tree produced by the `matchSequence`
	 * labeled alternative in `smlParser.matchSml`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchSequence?: (ctx: MatchSequenceContext) => Result;

	/**
	 * Visit a parse tree produced by the `matchAtomic`
	 * labeled alternative in `smlParser.matchSml`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchAtomic?: (ctx: MatchAtomicContext) => Result;

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
	 * Visit a parse tree produced by `smlParser.matchSml`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchSml?: (ctx: MatchSmlContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.mrule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMrule?: (ctx: MruleContext) => Result;

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
	 * Visit a parse tree produced by `smlParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;
}

