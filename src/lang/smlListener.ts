// Generated from ./src/lang/sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { DecExpContext } from "./smlParser";
import { TypeVarContext } from "./smlParser";
import { TypeParContext } from "./smlParser";
import { TypeFunContext } from "./smlParser";
import { ProgSeqContext } from "./smlParser";
import { ProgDecContext } from "./smlParser";
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
 * This interface defines a complete listener for a parse tree produced by
 * `smlParser`.
 */
export interface smlListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `decExp`
	 * labeled alternative in `smlParser.dec`.
	 * @param ctx the parse tree
	 */
	enterDecExp?: (ctx: DecExpContext) => void;
	/**
	 * Exit a parse tree produced by the `decExp`
	 * labeled alternative in `smlParser.dec`.
	 * @param ctx the parse tree
	 */
	exitDecExp?: (ctx: DecExpContext) => void;

	/**
	 * Enter a parse tree produced by the `typeVar`
	 * labeled alternative in `smlParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeVar?: (ctx: TypeVarContext) => void;
	/**
	 * Exit a parse tree produced by the `typeVar`
	 * labeled alternative in `smlParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeVar?: (ctx: TypeVarContext) => void;

	/**
	 * Enter a parse tree produced by the `typePar`
	 * labeled alternative in `smlParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypePar?: (ctx: TypeParContext) => void;
	/**
	 * Exit a parse tree produced by the `typePar`
	 * labeled alternative in `smlParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypePar?: (ctx: TypeParContext) => void;

	/**
	 * Enter a parse tree produced by the `typeFun`
	 * labeled alternative in `smlParser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeFun?: (ctx: TypeFunContext) => void;
	/**
	 * Exit a parse tree produced by the `typeFun`
	 * labeled alternative in `smlParser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeFun?: (ctx: TypeFunContext) => void;

	/**
	 * Enter a parse tree produced by the `progSeq`
	 * labeled alternative in `smlParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProgSeq?: (ctx: ProgSeqContext) => void;
	/**
	 * Exit a parse tree produced by the `progSeq`
	 * labeled alternative in `smlParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProgSeq?: (ctx: ProgSeqContext) => void;

	/**
	 * Enter a parse tree produced by the `progDec`
	 * labeled alternative in `smlParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProgDec?: (ctx: ProgDecContext) => void;
	/**
	 * Exit a parse tree produced by the `progDec`
	 * labeled alternative in `smlParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProgDec?: (ctx: ProgDecContext) => void;

	/**
	 * Enter a parse tree produced by the `idAlpha`
	 * labeled alternative in `smlParser.id`.
	 * @param ctx the parse tree
	 */
	enterIdAlpha?: (ctx: IdAlphaContext) => void;
	/**
	 * Exit a parse tree produced by the `idAlpha`
	 * labeled alternative in `smlParser.id`.
	 * @param ctx the parse tree
	 */
	exitIdAlpha?: (ctx: IdAlphaContext) => void;

	/**
	 * Enter a parse tree produced by the `idSymbol`
	 * labeled alternative in `smlParser.id`.
	 * @param ctx the parse tree
	 */
	enterIdSymbol?: (ctx: IdSymbolContext) => void;
	/**
	 * Exit a parse tree produced by the `idSymbol`
	 * labeled alternative in `smlParser.id`.
	 * @param ctx the parse tree
	 */
	exitIdSymbol?: (ctx: IdSymbolContext) => void;

	/**
	 * Enter a parse tree produced by the `expCon`
	 * labeled alternative in `smlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpCon?: (ctx: ExpConContext) => void;
	/**
	 * Exit a parse tree produced by the `expCon`
	 * labeled alternative in `smlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpCon?: (ctx: ExpConContext) => void;

	/**
	 * Enter a parse tree produced by the `expPar`
	 * labeled alternative in `smlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpPar?: (ctx: ExpParContext) => void;
	/**
	 * Exit a parse tree produced by the `expPar`
	 * labeled alternative in `smlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpPar?: (ctx: ExpParContext) => void;

	/**
	 * Enter a parse tree produced by the `expAppPrefix`
	 * labeled alternative in `smlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpAppPrefix?: (ctx: ExpAppPrefixContext) => void;
	/**
	 * Exit a parse tree produced by the `expAppPrefix`
	 * labeled alternative in `smlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpAppPrefix?: (ctx: ExpAppPrefixContext) => void;

	/**
	 * Enter a parse tree produced by the `expAppInfix`
	 * labeled alternative in `smlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExpAppInfix?: (ctx: ExpAppInfixContext) => void;
	/**
	 * Exit a parse tree produced by the `expAppInfix`
	 * labeled alternative in `smlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExpAppInfix?: (ctx: ExpAppInfixContext) => void;

	/**
	 * Enter a parse tree produced by `smlParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `smlParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `smlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `smlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `smlParser.int`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by `smlParser.int`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;

	/**
	 * Enter a parse tree produced by `smlParser.real`.
	 * @param ctx the parse tree
	 */
	enterReal?: (ctx: RealContext) => void;
	/**
	 * Exit a parse tree produced by `smlParser.real`.
	 * @param ctx the parse tree
	 */
	exitReal?: (ctx: RealContext) => void;

	/**
	 * Enter a parse tree produced by `smlParser.bool`.
	 * @param ctx the parse tree
	 */
	enterBool?: (ctx: BoolContext) => void;
	/**
	 * Exit a parse tree produced by `smlParser.bool`.
	 * @param ctx the parse tree
	 */
	exitBool?: (ctx: BoolContext) => void;

	/**
	 * Enter a parse tree produced by `smlParser.char`.
	 * @param ctx the parse tree
	 */
	enterChar?: (ctx: CharContext) => void;
	/**
	 * Exit a parse tree produced by `smlParser.char`.
	 * @param ctx the parse tree
	 */
	exitChar?: (ctx: CharContext) => void;

	/**
	 * Enter a parse tree produced by `smlParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `smlParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `smlParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `smlParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by `smlParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `smlParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `smlParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `smlParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `smlParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `smlParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `smlParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `smlParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;

	/**
	 * Enter a parse tree produced by `smlParser.dec`.
	 * @param ctx the parse tree
	 */
	enterDec?: (ctx: DecContext) => void;
	/**
	 * Exit a parse tree produced by `smlParser.dec`.
	 * @param ctx the parse tree
	 */
	exitDec?: (ctx: DecContext) => void;

	/**
	 * Enter a parse tree produced by `smlParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `smlParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
}

