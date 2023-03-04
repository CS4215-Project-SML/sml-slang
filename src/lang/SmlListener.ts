// Generated from ./src/lang/Sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `SmlParser`.
 */
export interface SmlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `typeVar`
	 * labeled alternative in `SmlParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeVar?: (ctx: TypeVarContext) => void;
	/**
	 * Exit a parse tree produced by the `typeVar`
	 * labeled alternative in `SmlParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeVar?: (ctx: TypeVarContext) => void;

	/**
	 * Enter a parse tree produced by the `typePar`
	 * labeled alternative in `SmlParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypePar?: (ctx: TypeParContext) => void;
	/**
	 * Exit a parse tree produced by the `typePar`
	 * labeled alternative in `SmlParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypePar?: (ctx: TypeParContext) => void;

	/**
	 * Enter a parse tree produced by the `typeFun`
	 * labeled alternative in `SmlParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeFun?: (ctx: TypeFunContext) => void;
	/**
	 * Exit a parse tree produced by the `typeFun`
	 * labeled alternative in `SmlParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeFun?: (ctx: TypeFunContext) => void;

	/**
	 * Enter a parse tree produced by the `expConst`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpConst?: (ctx: ExpConstContext) => void;
	/**
	 * Exit a parse tree produced by the `expConst`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpConst?: (ctx: ExpConstContext) => void;

	/**
	 * Enter a parse tree produced by the `expPar`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpPar?: (ctx: ExpParContext) => void;
	/**
	 * Exit a parse tree produced by the `expPar`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpPar?: (ctx: ExpParContext) => void;

	/**
	 * Enter a parse tree produced by the `expAppPrefix`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpAppPrefix?: (ctx: ExpAppPrefixContext) => void;
	/**
	 * Exit a parse tree produced by the `expAppPrefix`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpAppPrefix?: (ctx: ExpAppPrefixContext) => void;

	/**
	 * Enter a parse tree produced by the `expAppInfix`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpAppInfix?: (ctx: ExpAppInfixContext) => void;
	/**
	 * Exit a parse tree produced by the `expAppInfix`
	 * labeled alternative in `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpAppInfix?: (ctx: ExpAppInfixContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.int`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.int`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.real`.
	 * @param ctx the parse tree
	 */
	enterReal?: (ctx: RealContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.real`.
	 * @param ctx the parse tree
	 */
	exitReal?: (ctx: RealContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.bool`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.bool`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.char`.
	 * @param ctx the parse tree
	 */
	enterChar?: (ctx: CharContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.char`.
	 * @param ctx the parse tree
	 */
	exitChar?: (ctx: CharContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;

	/**
	 * Enter a parse tree produced by `SmlParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `SmlParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
}

