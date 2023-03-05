// Generated from ./src/lang/sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { DecExpContext } from "./smlParser";
import { TypeVarContext } from "./smlParser";
import { TypeParContext } from "./smlParser";
import { TypeFunContext } from "./smlParser";
import { ProgDecContext } from "./smlParser";
import { ProgSeqContext } from "./smlParser";
import { IdAlphaContext } from "./smlParser";
import { IdSymbolContext } from "./smlParser";
import { ExpConContext } from "./smlParser";
import { ExpParContext } from "./smlParser";
import { ExpAppPrefixContext } from "./smlParser";
import { ExpAppInfixContext } from "./smlParser";
import { NumberContext } from "./smlParser";
import { ConstantContext } from "./smlParser";
import { IntContext } from "./smlParser";
import { RealContext } from "./smlParser";
import { BoolContext } from "./smlParser";
import { CharContext } from "./smlParser";
import { StringContext } from "./smlParser";
import { IdContext } from "./smlParser";
import { VariableContext } from "./smlParser";
import { LabelContext } from "./smlParser";
import { TypeContext } from "./smlParser";
import { ExpContext } from "./smlParser";
import { DecContext } from "./smlParser";
import { ProgContext } from "./smlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `smlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface smlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `decExp`
	 * labeled alternative in `smlParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecExp?: (ctx: DecExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeVar`
	 * labeled alternative in `smlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeVar?: (ctx: TypeVarContext) => Result;

	/**
	 * Visit a parse tree produced by the `typePar`
	 * labeled alternative in `smlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypePar?: (ctx: TypeParContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeFun`
	 * labeled alternative in `smlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeFun?: (ctx: TypeFunContext) => Result;

	/**
	 * Visit a parse tree produced by the `progDec`
	 * labeled alternative in `smlParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgDec?: (ctx: ProgDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `progSeq`
	 * labeled alternative in `smlParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgSeq?: (ctx: ProgSeqContext) => Result;

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
	 * Visit a parse tree produced by the `expCon`
	 * labeled alternative in `smlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpCon?: (ctx: ExpConContext) => Result;

	/**
	 * Visit a parse tree produced by the `expPar`
	 * labeled alternative in `smlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpPar?: (ctx: ExpParContext) => Result;

	/**
	 * Visit a parse tree produced by the `expAppPrefix`
	 * labeled alternative in `smlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpAppPrefix?: (ctx: ExpAppPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by the `expAppInfix`
	 * labeled alternative in `smlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpAppInfix?: (ctx: ExpAppInfixContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.int`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.real`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReal?: (ctx: RealContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.bool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool?: (ctx: BoolContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.char`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChar?: (ctx: CharContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

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
	 * Visit a parse tree produced by `smlParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDec?: (ctx: DecContext) => Result;

	/**
	 * Visit a parse tree produced by `smlParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;
}

