// Generated from ./src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { TypeVarContext } from "./SmlParser";
import { TypeParContext } from "./SmlParser";
import { TypeFunContext } from "./SmlParser";
import { ExpConstContext } from "./SmlParser";
import { ExpParContext } from "./SmlParser";
import { ExpAppPrefixContext } from "./SmlParser";
import { ExpAppInfixContext } from "./SmlParser";
import { NumberContext } from "./SmlParser";
import { ConstantContext } from "./SmlParser";
import { IntContext } from "./SmlParser";
import { RealContext } from "./SmlParser";
import { BoolContext } from "./SmlParser";
import { CharContext } from "./SmlParser";
import { StringContext } from "./SmlParser";
import { IdContext } from "./SmlParser";
import { VariableContext } from "./SmlParser";
import { LabelContext } from "./SmlParser";
import { TypeContext } from "./SmlParser";
import { ExpContext } from "./SmlParser";
import { ProgContext } from "./SmlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SmlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SmlVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `typeVar`
	 * labeled alternative in `SmlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeVar?: (ctx: TypeVarContext) => Result;

	/**
	 * Visit a parse tree produced by the `typePar`
	 * labeled alternative in `SmlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypePar?: (ctx: TypeParContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeFun`
	 * labeled alternative in `SmlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeFun?: (ctx: TypeFunContext) => Result;

	/**
	 * Visit a parse tree produced by the `expConst`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpConst?: (ctx: ExpConstContext) => Result;

	/**
	 * Visit a parse tree produced by the `expPar`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpPar?: (ctx: ExpParContext) => Result;

	/**
	 * Visit a parse tree produced by the `expAppPrefix`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpAppPrefix?: (ctx: ExpAppPrefixContext) => Result;

	/**
	 * Visit a parse tree produced by the `expAppInfix`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpAppInfix?: (ctx: ExpAppInfixContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.int`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.real`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReal?: (ctx: RealContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.bool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBool?: (ctx: BoolContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.char`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChar?: (ctx: CharContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariable?: (ctx: VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;

	/**
	 * Visit a parse tree produced by `SmlParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;
}

