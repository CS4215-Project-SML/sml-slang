// Generated from ./src/lang/sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { smlListener } from "./smlListener";
import { smlVisitor } from "./smlVisitor";


export class smlParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly CHAR = 31;
	public static readonly STR = 32;
	public static readonly BOOL = 33;
	public static readonly REAL = 34;
	public static readonly INT = 35;
	public static readonly ABSTYPE = 36;
	public static readonly AND = 37;
	public static readonly ANDALSO = 38;
	public static readonly AS = 39;
	public static readonly CASE = 40;
	public static readonly DATATYPE = 41;
	public static readonly DO = 42;
	public static readonly ELSE = 43;
	public static readonly END = 44;
	public static readonly EXCEPTION = 45;
	public static readonly FN = 46;
	public static readonly FUN = 47;
	public static readonly HANDLE = 48;
	public static readonly IF = 49;
	public static readonly IN = 50;
	public static readonly INFIX = 51;
	public static readonly INFIXR = 52;
	public static readonly LET = 53;
	public static readonly LOCAL = 54;
	public static readonly NONFIX = 55;
	public static readonly OF = 56;
	public static readonly OP = 57;
	public static readonly OPEN = 58;
	public static readonly ORELSE = 59;
	public static readonly RAISE = 60;
	public static readonly REC = 61;
	public static readonly THEN = 62;
	public static readonly TYPE = 63;
	public static readonly VAL = 64;
	public static readonly WITH = 65;
	public static readonly WITHTYPE = 66;
	public static readonly WHILE = 67;
	public static readonly TRUE = 68;
	public static readonly FALSE = 69;
	public static readonly DIGIT = 70;
	public static readonly LETTER = 71;
	public static readonly NEWLINE = 72;
	public static readonly WHITESPACE = 73;
	public static readonly RULE_program = 0;
	public static readonly RULE_declaration = 1;
	public static readonly RULE_valbind = 2;
	public static readonly RULE_funbind = 3;
	public static readonly RULE_pattern = 4;
	public static readonly RULE_expression = 5;
	public static readonly RULE_keyvalue = 6;
	public static readonly RULE_matchSml = 7;
	public static readonly RULE_label = 8;
	public static readonly RULE_id = 9;
	public static readonly RULE_variable = 10;
	public static readonly RULE_constant = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "declaration", "valbind", "funbind", "pattern", "expression", 
		"keyvalue", "matchSml", "label", "id", "variable", "constant",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'='", "'('", "','", "')'", "'['", "']'", "'{'", "'}'", 
		"'#'", "'=>'", "'''", "'_'", "'!'", "'%'", "'&'", "'$'", "'+'", "'-'", 
		"'/'", "':'", "'<'", "'>'", "'?'", "'@'", "'\\'", "'~'", "'^'", "'|'", 
		"'*'", undefined, undefined, undefined, undefined, undefined, "'abstype'", 
		"'and'", "'andalso'", "'as'", "'case'", "'datatype'", "'do'", "'else'", 
		"'end'", "'exception'", "'fn'", "'fun'", "'handle'", "'if'", "'in'", "'infix'", 
		"'infixr'", "'let'", "'local'", "'nonfix'", "'of'", "'op'", "'open'", 
		"'orelse'", "'raise'", "'rec'", "'then'", "'type'", "'val'", "'with'", 
		"'withtype'", "'while'", "'true'", "'false'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "CHAR", "STR", "BOOL", "REAL", "INT", 
		"ABSTYPE", "AND", "ANDALSO", "AS", "CASE", "DATATYPE", "DO", "ELSE", "END", 
		"EXCEPTION", "FN", "FUN", "HANDLE", "IF", "IN", "INFIX", "INFIXR", "LET", 
		"LOCAL", "NONFIX", "OF", "OP", "OPEN", "ORELSE", "RAISE", "REC", "THEN", 
		"TYPE", "VAL", "WITH", "WITHTYPE", "WHILE", "TRUE", "FALSE", "DIGIT", 
		"LETTER", "NEWLINE", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(smlParser._LITERAL_NAMES, smlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return smlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "sml.g4"; }

	// @Override
	public get ruleNames(): string[] { return smlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return smlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(smlParser._ATN, this);
	}

	public program(): ProgramContext;
	public program(_p: number): ProgramContext;
	// @RuleVersion(0)
	public program(_p?: number): ProgramContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ProgramContext = new ProgramContext(this._ctx, _parentState);
		let _prevctx: ProgramContext = _localctx;
		let _startState: number = 0;
		this.enterRecursionRule(_localctx, 0, smlParser.RULE_program, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				_localctx = new ProgramDeclarationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 25;
				this.declaration();
				}
				break;

			case 2:
				{
				_localctx = new ProgramEmptyContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 34;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ProgramSequenceContext(new ProgramContext(_parentctx, _parentState));
					(_localctx as ProgramSequenceContext)._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_program);
					this.state = 29;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 30;
					this.match(smlParser.T__0);
					this.state = 31;
					(_localctx as ProgramSequenceContext)._right = this.program(4);
					}
					}
				}
				this.state = 36;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, smlParser.RULE_declaration);
		try {
			this.state = 42;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.FUN:
				_localctx = new DeclarationFunctionContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 37;
				this.match(smlParser.FUN);
				this.state = 38;
				this.funbind();
				}
				break;
			case smlParser.VAL:
				_localctx = new DeclarationValueContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 39;
				this.match(smlParser.VAL);
				this.state = 40;
				this.valbind();
				}
				break;
			case smlParser.T__1:
			case smlParser.T__2:
			case smlParser.T__5:
			case smlParser.T__7:
			case smlParser.T__9:
			case smlParser.T__11:
			case smlParser.T__13:
			case smlParser.T__14:
			case smlParser.T__15:
			case smlParser.T__16:
			case smlParser.T__17:
			case smlParser.T__18:
			case smlParser.T__19:
			case smlParser.T__20:
			case smlParser.T__21:
			case smlParser.T__22:
			case smlParser.T__23:
			case smlParser.T__24:
			case smlParser.T__25:
			case smlParser.T__26:
			case smlParser.T__27:
			case smlParser.T__28:
			case smlParser.T__29:
			case smlParser.CHAR:
			case smlParser.STR:
			case smlParser.BOOL:
			case smlParser.REAL:
			case smlParser.INT:
			case smlParser.FN:
			case smlParser.IF:
			case smlParser.LETTER:
				_localctx = new DeclarationExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 41;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valbind(): ValbindContext {
		let _localctx: ValbindContext = new ValbindContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, smlParser.RULE_valbind);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			_localctx._name = this.id();
			this.state = 45;
			this.match(smlParser.T__1);
			this.state = 46;
			_localctx._value = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funbind(): FunbindContext {
		let _localctx: FunbindContext = new FunbindContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, smlParser.RULE_funbind);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			_localctx._name = this.id();
			this.state = 49;
			_localctx._pat = this.pattern(0);
			this.state = 50;
			this.match(smlParser.T__1);
			this.state = 51;
			_localctx._body = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public pattern(): PatternContext;
	public pattern(_p: number): PatternContext;
	// @RuleVersion(0)
	public pattern(_p?: number): PatternContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PatternContext = new PatternContext(this._ctx, _parentState);
		let _prevctx: PatternContext = _localctx;
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, smlParser.RULE_pattern, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.T__2:
				{
				_localctx = new PatternTupleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 54;
				this.match(smlParser.T__2);
				this.state = 55;
				this.pattern(0);
				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === smlParser.T__3) {
					{
					{
					this.state = 56;
					this.match(smlParser.T__3);
					this.state = 57;
					this.pattern(0);
					}
					}
					this.state = 62;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 63;
				this.match(smlParser.T__4);
				}
				break;
			case smlParser.T__5:
				{
				_localctx = new PatternListContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 65;
				this.match(smlParser.T__5);
				this.state = 66;
				this.pattern(0);
				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === smlParser.T__3) {
					{
					{
					this.state = 67;
					this.match(smlParser.T__3);
					this.state = 68;
					this.pattern(0);
					}
					}
					this.state = 73;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 74;
				this.match(smlParser.T__6);
				}
				break;
			case smlParser.CHAR:
			case smlParser.STR:
			case smlParser.BOOL:
			case smlParser.REAL:
			case smlParser.INT:
				{
				_localctx = new PatternConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 76;
				this.constant();
				}
				break;
			case smlParser.T__1:
			case smlParser.T__9:
			case smlParser.T__11:
			case smlParser.T__13:
			case smlParser.T__14:
			case smlParser.T__15:
			case smlParser.T__16:
			case smlParser.T__17:
			case smlParser.T__18:
			case smlParser.T__19:
			case smlParser.T__20:
			case smlParser.T__21:
			case smlParser.T__22:
			case smlParser.T__23:
			case smlParser.T__24:
			case smlParser.T__25:
			case smlParser.T__26:
			case smlParser.T__27:
			case smlParser.T__28:
			case smlParser.T__29:
			case smlParser.LETTER:
				{
				_localctx = new PatternIdContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 77;
				this.id();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 86;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PatternInfixContext(new PatternContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_pattern);
					this.state = 80;
					if (!(this.precpred(this._ctx, 5))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
					}
					this.state = 81;
					this.id();
					this.state = 82;
					this.pattern(6);
					}
					}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, smlParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				_localctx = new ExpressionParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 90;
				this.match(smlParser.T__2);
				this.state = 91;
				(_localctx as ExpressionParenthesesContext)._inner = this.expression(0);
				this.state = 92;
				this.match(smlParser.T__4);
				}
				break;

			case 2:
				{
				_localctx = new ExpressionLambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 94;
				this.match(smlParser.FN);
				this.state = 95;
				this.matchSml();
				}
				break;

			case 3:
				{
				_localctx = new ExpressionConditionalContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 96;
				this.match(smlParser.IF);
				this.state = 97;
				(_localctx as ExpressionConditionalContext)._pred = this.expression(0);
				this.state = 98;
				this.match(smlParser.THEN);
				this.state = 99;
				(_localctx as ExpressionConditionalContext)._cons = this.expression(0);
				this.state = 100;
				this.match(smlParser.ELSE);
				this.state = 101;
				(_localctx as ExpressionConditionalContext)._alt = this.expression(9);
				}
				break;

			case 4:
				{
				_localctx = new ExpressionRecordContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 103;
				this.match(smlParser.T__7);
				this.state = 114;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 105;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smlParser.T__1) | (1 << smlParser.T__9) | (1 << smlParser.T__11) | (1 << smlParser.T__13) | (1 << smlParser.T__14) | (1 << smlParser.T__15) | (1 << smlParser.T__16) | (1 << smlParser.T__17) | (1 << smlParser.T__18) | (1 << smlParser.T__19) | (1 << smlParser.T__20) | (1 << smlParser.T__21) | (1 << smlParser.T__22) | (1 << smlParser.T__23) | (1 << smlParser.T__24) | (1 << smlParser.T__25) | (1 << smlParser.T__26) | (1 << smlParser.T__27) | (1 << smlParser.T__28) | (1 << smlParser.T__29))) !== 0) || _la === smlParser.INT || _la === smlParser.LETTER) {
						{
						this.state = 104;
						this.keyvalue();
						}
					}

					}
					break;

				case 2:
					{
					{
					this.state = 107;
					this.keyvalue();
					this.state = 110;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 108;
						this.match(smlParser.T__3);
						this.state = 109;
						this.keyvalue();
						}
						}
						this.state = 112;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === smlParser.T__3);
					}
					}
					break;
				}
				this.state = 116;
				this.match(smlParser.T__8);
				}
				break;

			case 5:
				{
				_localctx = new ExpressionTupleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 117;
				this.match(smlParser.T__2);
				this.state = 118;
				this.expression(0);
				this.state = 119;
				this.match(smlParser.T__3);
				this.state = 120;
				this.expression(0);
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === smlParser.T__3) {
					{
					{
					this.state = 121;
					this.match(smlParser.T__3);
					this.state = 122;
					this.expression(0);
					}
					}
					this.state = 127;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 128;
				this.match(smlParser.T__4);
				}
				break;

			case 6:
				{
				_localctx = new ExpressionListContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 130;
				this.match(smlParser.T__5);
				this.state = 141;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smlParser.T__1) | (1 << smlParser.T__2) | (1 << smlParser.T__5) | (1 << smlParser.T__7) | (1 << smlParser.T__9) | (1 << smlParser.T__11) | (1 << smlParser.T__13) | (1 << smlParser.T__14) | (1 << smlParser.T__15) | (1 << smlParser.T__16) | (1 << smlParser.T__17) | (1 << smlParser.T__18) | (1 << smlParser.T__19) | (1 << smlParser.T__20) | (1 << smlParser.T__21) | (1 << smlParser.T__22) | (1 << smlParser.T__23) | (1 << smlParser.T__24) | (1 << smlParser.T__25) | (1 << smlParser.T__26) | (1 << smlParser.T__27) | (1 << smlParser.T__28) | (1 << smlParser.T__29) | (1 << smlParser.CHAR))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (smlParser.STR - 32)) | (1 << (smlParser.BOOL - 32)) | (1 << (smlParser.REAL - 32)) | (1 << (smlParser.INT - 32)) | (1 << (smlParser.FN - 32)) | (1 << (smlParser.IF - 32)))) !== 0) || _la === smlParser.LETTER) {
						{
						this.state = 131;
						this.expression(0);
						}
					}

					}
					break;

				case 2:
					{
					{
					this.state = 134;
					this.expression(0);
					this.state = 137;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 135;
						this.match(smlParser.T__3);
						this.state = 136;
						this.expression(0);
						}
						}
						this.state = 139;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === smlParser.T__3);
					}
					}
					break;
				}
				this.state = 143;
				this.match(smlParser.T__6);
				}
				break;

			case 7:
				{
				_localctx = new ExpressionRecordSelectorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 144;
				this.match(smlParser.T__9);
				this.state = 145;
				this.label();
				}
				break;

			case 8:
				{
				_localctx = new ExpressionConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 146;
				this.constant();
				}
				break;

			case 9:
				{
				_localctx = new ExpressionIdContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 147;
				this.id();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 158;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 156;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionApplicationInfixContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionApplicationInfixContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression);
						this.state = 150;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 151;
						(_localctx as ExpressionApplicationInfixContext)._operator = this.id();
						this.state = 152;
						(_localctx as ExpressionApplicationInfixContext)._right = this.expression(9);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionApplicationPrefixContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionApplicationPrefixContext)._operator = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression);
						this.state = 154;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 155;
						(_localctx as ExpressionApplicationPrefixContext)._operand = this.expression(8);
						}
						break;
					}
					}
				}
				this.state = 160;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyvalue(): KeyvalueContext {
		let _localctx: KeyvalueContext = new KeyvalueContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, smlParser.RULE_keyvalue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			_localctx._key = this.label();
			this.state = 162;
			this.match(smlParser.T__1);
			this.state = 163;
			_localctx._value = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public matchSml(): MatchSmlContext {
		let _localctx: MatchSmlContext = new MatchSmlContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, smlParser.RULE_matchSml);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			_localctx._pat = this.pattern(0);
			this.state = 166;
			this.match(smlParser.T__10);
			this.state = 167;
			_localctx._exp = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, smlParser.RULE_label);
		try {
			this.state = 171;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.T__1:
			case smlParser.T__9:
			case smlParser.T__11:
			case smlParser.T__13:
			case smlParser.T__14:
			case smlParser.T__15:
			case smlParser.T__16:
			case smlParser.T__17:
			case smlParser.T__18:
			case smlParser.T__19:
			case smlParser.T__20:
			case smlParser.T__21:
			case smlParser.T__22:
			case smlParser.T__23:
			case smlParser.T__24:
			case smlParser.T__25:
			case smlParser.T__26:
			case smlParser.T__27:
			case smlParser.T__28:
			case smlParser.T__29:
			case smlParser.LETTER:
				_localctx = new LabelIdContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 169;
				this.id();
				}
				break;
			case smlParser.INT:
				_localctx = new LabelIntContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 170;
				this.match(smlParser.INT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, smlParser.RULE_id);
		let _la: number;
		try {
			let _alt: number;
			this.state = 185;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.LETTER:
				_localctx = new IdAlphaContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 173;
				this.match(smlParser.LETTER);
				this.state = 177;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 174;
						_la = this._input.LA(1);
						if (!(_la === smlParser.T__11 || _la === smlParser.T__12 || _la === smlParser.DIGIT || _la === smlParser.LETTER)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						}
					}
					this.state = 179;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
				}
				}
				break;
			case smlParser.T__1:
			case smlParser.T__9:
			case smlParser.T__11:
			case smlParser.T__13:
			case smlParser.T__14:
			case smlParser.T__15:
			case smlParser.T__16:
			case smlParser.T__17:
			case smlParser.T__18:
			case smlParser.T__19:
			case smlParser.T__20:
			case smlParser.T__21:
			case smlParser.T__22:
			case smlParser.T__23:
			case smlParser.T__24:
			case smlParser.T__25:
			case smlParser.T__26:
			case smlParser.T__27:
			case smlParser.T__28:
			case smlParser.T__29:
				_localctx = new IdSymbolContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 181;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 180;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smlParser.T__1) | (1 << smlParser.T__9) | (1 << smlParser.T__11) | (1 << smlParser.T__13) | (1 << smlParser.T__14) | (1 << smlParser.T__15) | (1 << smlParser.T__16) | (1 << smlParser.T__17) | (1 << smlParser.T__18) | (1 << smlParser.T__19) | (1 << smlParser.T__20) | (1 << smlParser.T__21) | (1 << smlParser.T__22) | (1 << smlParser.T__23) | (1 << smlParser.T__24) | (1 << smlParser.T__25) | (1 << smlParser.T__26) | (1 << smlParser.T__27) | (1 << smlParser.T__28) | (1 << smlParser.T__29))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 183;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, smlParser.RULE_variable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 187;
			this.match(smlParser.T__11);
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === smlParser.T__11 || _la === smlParser.T__12 || _la === smlParser.DIGIT || _la === smlParser.LETTER) {
				{
				{
				this.state = 188;
				_la = this._input.LA(1);
				if (!(_la === smlParser.T__11 || _la === smlParser.T__12 || _la === smlParser.DIGIT || _la === smlParser.LETTER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, smlParser.RULE_constant);
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.INT:
				_localctx = new ConstantIntContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 194;
				this.match(smlParser.INT);
				}
				break;
			case smlParser.REAL:
				_localctx = new ConstantRealContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 195;
				this.match(smlParser.REAL);
				}
				break;
			case smlParser.BOOL:
				_localctx = new ConstantBoolContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 196;
				this.match(smlParser.BOOL);
				}
				break;
			case smlParser.CHAR:
				_localctx = new ConstantCharContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 197;
				this.match(smlParser.CHAR);
				}
				break;
			case smlParser.STR:
				_localctx = new ConstantStrContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 198;
				this.match(smlParser.STR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 0:
			return this.program_sempred(_localctx as ProgramContext, predIndex);

		case 4:
			return this.pattern_sempred(_localctx as PatternContext, predIndex);

		case 5:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private program_sempred(_localctx: ProgramContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private pattern_sempred(_localctx: PatternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 8);

		case 3:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03K\xCC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x03\x02\x05\x02\x1E\n\x02\x03\x02\x03\x02\x03\x02\x07\x02" +
		"#\n\x02\f\x02\x0E\x02&\v\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03-\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06=\n\x06\f" +
		"\x06\x0E\x06@\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07" +
		"\x06H\n\x06\f\x06\x0E\x06K\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06" +
		"Q\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06W\n\x06\f\x06\x0E\x06Z" +
		"\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"l\n\x07\x03\x07\x03\x07\x03\x07\x06\x07q\n\x07\r\x07\x0E\x07r\x05\x07" +
		"u\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07" +
		"~\n\x07\f\x07\x0E\x07\x81\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"\x87\n\x07\x03\x07\x03\x07\x03\x07\x06\x07\x8C\n\x07\r\x07\x0E\x07\x8D" +
		"\x05\x07\x90\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x97" +
		"\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\x9F\n\x07" +
		"\f\x07\x0E\x07\xA2\v\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x05\n\xAE\n\n\x03\v\x03\v\x07\v\xB2\n\v\f\v\x0E\v\xB5\v" +
		"\v\x03\v\x06\v\xB8\n\v\r\v\x0E\v\xB9\x05\v\xBC\n\v\x03\f\x03\f\x07\f\xC0" +
		"\n\f\f\f\x0E\f\xC3\v\f\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\xCA\n\r\x03" +
		"\r\x02\x02\x05\x02\n\f\x0E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x02\x04\x04\x02\x0E\x0FH" +
		"I\x06\x02\x04\x04\f\f\x0E\x0E\x10 \x02\xE3\x02\x1D\x03\x02\x02\x02\x04" +
		",\x03\x02\x02\x02\x06.\x03\x02\x02\x02\b2\x03\x02\x02\x02\nP\x03\x02\x02" +
		"\x02\f\x96\x03\x02\x02\x02\x0E\xA3\x03\x02\x02\x02\x10\xA7\x03\x02\x02" +
		"\x02\x12\xAD\x03\x02\x02\x02\x14\xBB\x03\x02\x02\x02\x16\xBD\x03\x02\x02" +
		"\x02\x18\xC9\x03\x02\x02\x02\x1A\x1B\b\x02\x01\x02\x1B\x1E\x05\x04\x03" +
		"\x02\x1C\x1E\x03\x02\x02\x02\x1D\x1A\x03\x02\x02\x02\x1D\x1C\x03\x02\x02" +
		"\x02\x1E$\x03\x02\x02\x02\x1F \f\x05\x02\x02 !\x07\x03\x02\x02!#\x05\x02" +
		"\x02\x06\"\x1F\x03\x02\x02\x02#&\x03\x02\x02\x02$\"\x03\x02\x02\x02$%" +
		"\x03\x02\x02\x02%\x03\x03\x02\x02\x02&$\x03\x02\x02\x02\'(\x071\x02\x02" +
		"(-\x05\b\x05\x02)*\x07B\x02\x02*-\x05\x06\x04\x02+-\x05\f\x07\x02,\'\x03" +
		"\x02\x02\x02,)\x03\x02\x02\x02,+\x03\x02\x02\x02-\x05\x03\x02\x02\x02" +
		"./\x05\x14\v\x02/0\x07\x04\x02\x0201\x05\f\x07\x021\x07\x03\x02\x02\x02" +
		"23\x05\x14\v\x0234\x05\n\x06\x0245\x07\x04\x02\x0256\x05\f\x07\x026\t" +
		"\x03\x02\x02\x0278\b\x06\x01\x0289\x07\x05\x02\x029>\x05\n\x06\x02:;\x07" +
		"\x06\x02\x02;=\x05\n\x06\x02<:\x03\x02\x02\x02=@\x03\x02\x02\x02><\x03" +
		"\x02\x02\x02>?\x03\x02\x02\x02?A\x03\x02\x02\x02@>\x03\x02\x02\x02AB\x07" +
		"\x07\x02\x02BQ\x03\x02\x02\x02CD\x07\b\x02\x02DI\x05\n\x06\x02EF\x07\x06" +
		"\x02\x02FH\x05\n\x06\x02GE\x03\x02\x02\x02HK\x03\x02\x02\x02IG\x03\x02" +
		"\x02\x02IJ\x03\x02\x02\x02JL\x03\x02\x02\x02KI\x03\x02\x02\x02LM\x07\t" +
		"\x02\x02MQ\x03\x02\x02\x02NQ\x05\x18\r\x02OQ\x05\x14\v\x02P7\x03\x02\x02" +
		"\x02PC\x03\x02\x02\x02PN\x03\x02\x02\x02PO\x03\x02\x02\x02QX\x03\x02\x02" +
		"\x02RS\f\x07\x02\x02ST\x05\x14\v\x02TU\x05\n\x06\bUW\x03\x02\x02\x02V" +
		"R\x03\x02\x02\x02WZ\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02" +
		"Y\v\x03\x02\x02\x02ZX\x03\x02\x02\x02[\\\b\x07\x01\x02\\]\x07\x05\x02" +
		"\x02]^\x05\f\x07\x02^_\x07\x07\x02\x02_\x97\x03\x02\x02\x02`a\x070\x02" +
		"\x02a\x97\x05\x10\t\x02bc\x073\x02\x02cd\x05\f\x07\x02de\x07@\x02\x02" +
		"ef\x05\f\x07\x02fg\x07-\x02\x02gh\x05\f\x07\vh\x97\x03\x02\x02\x02it\x07" +
		"\n\x02\x02jl\x05\x0E\b\x02kj\x03\x02\x02\x02kl\x03\x02\x02\x02lu\x03\x02" +
		"\x02\x02mp\x05\x0E\b\x02no\x07\x06\x02\x02oq\x05\x0E\b\x02pn\x03\x02\x02" +
		"\x02qr\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02su\x03\x02\x02" +
		"\x02tk\x03\x02\x02\x02tm\x03\x02\x02\x02uv\x03\x02\x02\x02v\x97\x07\v" +
		"\x02\x02wx\x07\x05\x02\x02xy\x05\f\x07\x02yz\x07\x06\x02\x02z\x7F\x05" +
		"\f\x07\x02{|\x07\x06\x02\x02|~\x05\f\x07\x02}{\x03\x02\x02\x02~\x81\x03" +
		"\x02\x02\x02\x7F}\x03\x02\x02\x02\x7F\x80\x03\x02\x02\x02\x80\x82\x03" +
		"\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x82\x83\x07\x07\x02\x02\x83\x97\x03" +
		"\x02\x02\x02\x84\x8F\x07\b\x02\x02\x85\x87\x05\f\x07\x02\x86\x85\x03\x02" +
		"\x02\x02\x86\x87\x03\x02\x02\x02\x87\x90\x03\x02\x02\x02\x88\x8B\x05\f" +
		"\x07\x02\x89\x8A\x07\x06\x02\x02\x8A\x8C\x05\f\x07\x02\x8B\x89\x03\x02" +
		"\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02" +
		"\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x86\x03\x02\x02\x02\x8F\x88\x03\x02" +
		"\x02\x02\x90\x91\x03\x02\x02\x02\x91\x97\x07\t\x02\x02\x92\x93\x07\f\x02" +
		"\x02\x93\x97\x05\x12\n\x02\x94\x97\x05\x18\r\x02\x95\x97\x05\x14\v\x02" +
		"\x96[\x03\x02\x02\x02\x96`\x03\x02\x02\x02\x96b\x03\x02\x02\x02\x96i\x03" +
		"\x02\x02\x02\x96w\x03\x02\x02\x02\x96\x84\x03\x02\x02\x02\x96\x92\x03" +
		"\x02\x02\x02\x96\x94\x03\x02\x02\x02\x96\x95\x03\x02\x02\x02\x97\xA0\x03" +
		"\x02\x02\x02\x98\x99\f\n\x02\x02\x99\x9A\x05\x14\v\x02\x9A\x9B\x05\f\x07" +
		"\v\x9B\x9F\x03\x02\x02\x02\x9C\x9D\f\t\x02\x02\x9D\x9F\x05\f\x07\n\x9E" +
		"\x98\x03\x02\x02\x02\x9E\x9C\x03\x02\x02\x02\x9F\xA2\x03\x02\x02\x02\xA0" +
		"\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\r\x03\x02\x02\x02\xA2" +
		"\xA0\x03\x02\x02\x02\xA3\xA4\x05\x12\n\x02\xA4\xA5\x07\x04\x02\x02\xA5" +
		"\xA6\x05\f\x07\x02\xA6\x0F\x03\x02\x02\x02\xA7\xA8\x05\n\x06\x02\xA8\xA9" +
		"\x07\r\x02\x02\xA9\xAA\x05\f\x07\x02\xAA\x11\x03\x02\x02\x02\xAB\xAE\x05" +
		"\x14\v\x02\xAC\xAE\x07%\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAC\x03\x02" +
		"\x02\x02\xAE\x13\x03\x02\x02\x02\xAF\xB3\x07I\x02\x02\xB0\xB2\t\x02\x02" +
		"\x02\xB1\xB0\x03\x02\x02\x02\xB2\xB5\x03\x02\x02\x02\xB3\xB1\x03\x02\x02" +
		"\x02\xB3\xB4\x03\x02\x02\x02\xB4\xBC\x03\x02\x02\x02\xB5\xB3\x03\x02\x02" +
		"\x02\xB6\xB8\t\x03\x02\x02\xB7\xB6\x03\x02\x02\x02\xB8\xB9\x03\x02\x02" +
		"\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\xBC\x03\x02\x02" +
		"\x02\xBB\xAF\x03\x02\x02\x02\xBB\xB7\x03\x02\x02\x02\xBC\x15\x03\x02\x02" +
		"\x02\xBD\xC1\x07\x0E\x02\x02\xBE\xC0\t\x02\x02\x02\xBF\xBE\x03\x02\x02" +
		"\x02\xC0\xC3\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02" +
		"\x02\xC2\x17\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xCA\x07%\x02" +
		"\x02\xC5\xCA\x07$\x02\x02\xC6\xCA\x07#\x02\x02\xC7\xCA\x07!\x02\x02\xC8" +
		"\xCA\x07\"\x02\x02\xC9\xC4\x03\x02\x02\x02\xC9\xC5\x03\x02\x02\x02\xC9" +
		"\xC6\x03\x02\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xC8\x03\x02\x02\x02\xCA" +
		"\x19\x03\x02\x02\x02\x19\x1D$,>IPXkrt\x7F\x86\x8D\x8F\x96\x9E\xA0\xAD" +
		"\xB3\xB9\xBB\xC1\xC9";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!smlParser.__ATN) {
			smlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(smlParser._serializedATN));
		}

		return smlParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_program; }
	public copyFrom(ctx: ProgramContext): void {
		super.copyFrom(ctx);
	}
}
export class ProgramSequenceContext extends ProgramContext {
	public _left!: ProgramContext;
	public _right!: ProgramContext;
	public program(): ProgramContext[];
	public program(i: number): ProgramContext;
	public program(i?: number): ProgramContext | ProgramContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProgramContext);
		} else {
			return this.getRuleContext(i, ProgramContext);
		}
	}
	constructor(ctx: ProgramContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterProgramSequence) {
			listener.enterProgramSequence(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitProgramSequence) {
			listener.exitProgramSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitProgramSequence) {
			return visitor.visitProgramSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ProgramDeclarationContext extends ProgramContext {
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	constructor(ctx: ProgramContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterProgramDeclaration) {
			listener.enterProgramDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitProgramDeclaration) {
			listener.exitProgramDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitProgramDeclaration) {
			return visitor.visitProgramDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ProgramEmptyContext extends ProgramContext {
	constructor(ctx: ProgramContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterProgramEmpty) {
			listener.enterProgramEmpty(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitProgramEmpty) {
			listener.exitProgramEmpty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitProgramEmpty) {
			return visitor.visitProgramEmpty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_declaration; }
	public copyFrom(ctx: DeclarationContext): void {
		super.copyFrom(ctx);
	}
}
export class DeclarationFunctionContext extends DeclarationContext {
	public FUN(): TerminalNode { return this.getToken(smlParser.FUN, 0); }
	public funbind(): FunbindContext {
		return this.getRuleContext(0, FunbindContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterDeclarationFunction) {
			listener.enterDeclarationFunction(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitDeclarationFunction) {
			listener.exitDeclarationFunction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitDeclarationFunction) {
			return visitor.visitDeclarationFunction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeclarationValueContext extends DeclarationContext {
	public VAL(): TerminalNode { return this.getToken(smlParser.VAL, 0); }
	public valbind(): ValbindContext {
		return this.getRuleContext(0, ValbindContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterDeclarationValue) {
			listener.enterDeclarationValue(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitDeclarationValue) {
			listener.exitDeclarationValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitDeclarationValue) {
			return visitor.visitDeclarationValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DeclarationExpressionContext extends DeclarationContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterDeclarationExpression) {
			listener.enterDeclarationExpression(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitDeclarationExpression) {
			listener.exitDeclarationExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitDeclarationExpression) {
			return visitor.visitDeclarationExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValbindContext extends ParserRuleContext {
	public _name!: IdContext;
	public _value!: ExpressionContext;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_valbind; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterValbind) {
			listener.enterValbind(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitValbind) {
			listener.exitValbind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitValbind) {
			return visitor.visitValbind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunbindContext extends ParserRuleContext {
	public _name!: IdContext;
	public _pat!: PatternContext;
	public _body!: ExpressionContext;
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_funbind; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterFunbind) {
			listener.enterFunbind(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitFunbind) {
			listener.exitFunbind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitFunbind) {
			return visitor.visitFunbind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_pattern; }
	public copyFrom(ctx: PatternContext): void {
		super.copyFrom(ctx);
	}
}
export class PatternInfixContext extends PatternContext {
	public pattern(): PatternContext[];
	public pattern(i: number): PatternContext;
	public pattern(i?: number): PatternContext | PatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatternContext);
		} else {
			return this.getRuleContext(i, PatternContext);
		}
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: PatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterPatternInfix) {
			listener.enterPatternInfix(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitPatternInfix) {
			listener.exitPatternInfix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitPatternInfix) {
			return visitor.visitPatternInfix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternTupleContext extends PatternContext {
	public pattern(): PatternContext[];
	public pattern(i: number): PatternContext;
	public pattern(i?: number): PatternContext | PatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatternContext);
		} else {
			return this.getRuleContext(i, PatternContext);
		}
	}
	constructor(ctx: PatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterPatternTuple) {
			listener.enterPatternTuple(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitPatternTuple) {
			listener.exitPatternTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitPatternTuple) {
			return visitor.visitPatternTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternListContext extends PatternContext {
	public pattern(): PatternContext[];
	public pattern(i: number): PatternContext;
	public pattern(i?: number): PatternContext | PatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatternContext);
		} else {
			return this.getRuleContext(i, PatternContext);
		}
	}
	constructor(ctx: PatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterPatternList) {
			listener.enterPatternList(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitPatternList) {
			listener.exitPatternList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitPatternList) {
			return visitor.visitPatternList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternConstantContext extends PatternContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: PatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterPatternConstant) {
			listener.enterPatternConstant(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitPatternConstant) {
			listener.exitPatternConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitPatternConstant) {
			return visitor.visitPatternConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternIdContext extends PatternContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: PatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterPatternId) {
			listener.enterPatternId(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitPatternId) {
			listener.exitPatternId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitPatternId) {
			return visitor.visitPatternId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpressionParenthesesContext extends ExpressionContext {
	public _inner!: ExpressionContext;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpressionParentheses) {
			listener.enterExpressionParentheses(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpressionParentheses) {
			listener.exitExpressionParentheses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpressionParentheses) {
			return visitor.visitExpressionParentheses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionLambdaContext extends ExpressionContext {
	public FN(): TerminalNode { return this.getToken(smlParser.FN, 0); }
	public matchSml(): MatchSmlContext {
		return this.getRuleContext(0, MatchSmlContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpressionLambda) {
			listener.enterExpressionLambda(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpressionLambda) {
			listener.exitExpressionLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpressionLambda) {
			return visitor.visitExpressionLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionConditionalContext extends ExpressionContext {
	public _pred!: ExpressionContext;
	public _cons!: ExpressionContext;
	public _alt!: ExpressionContext;
	public IF(): TerminalNode { return this.getToken(smlParser.IF, 0); }
	public THEN(): TerminalNode { return this.getToken(smlParser.THEN, 0); }
	public ELSE(): TerminalNode { return this.getToken(smlParser.ELSE, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpressionConditional) {
			listener.enterExpressionConditional(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpressionConditional) {
			listener.exitExpressionConditional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpressionConditional) {
			return visitor.visitExpressionConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionApplicationInfixContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: IdContext;
	public _right!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpressionApplicationInfix) {
			listener.enterExpressionApplicationInfix(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpressionApplicationInfix) {
			listener.exitExpressionApplicationInfix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpressionApplicationInfix) {
			return visitor.visitExpressionApplicationInfix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionApplicationPrefixContext extends ExpressionContext {
	public _operator!: ExpressionContext;
	public _operand!: ExpressionContext;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpressionApplicationPrefix) {
			listener.enterExpressionApplicationPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpressionApplicationPrefix) {
			listener.exitExpressionApplicationPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpressionApplicationPrefix) {
			return visitor.visitExpressionApplicationPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionRecordContext extends ExpressionContext {
	public keyvalue(): KeyvalueContext[];
	public keyvalue(i: number): KeyvalueContext;
	public keyvalue(i?: number): KeyvalueContext | KeyvalueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyvalueContext);
		} else {
			return this.getRuleContext(i, KeyvalueContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpressionRecord) {
			listener.enterExpressionRecord(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpressionRecord) {
			listener.exitExpressionRecord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpressionRecord) {
			return visitor.visitExpressionRecord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionTupleContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpressionTuple) {
			listener.enterExpressionTuple(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpressionTuple) {
			listener.exitExpressionTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpressionTuple) {
			return visitor.visitExpressionTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionListContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpressionList) {
			listener.enterExpressionList(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpressionList) {
			listener.exitExpressionList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpressionList) {
			return visitor.visitExpressionList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionRecordSelectorContext extends ExpressionContext {
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpressionRecordSelector) {
			listener.enterExpressionRecordSelector(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpressionRecordSelector) {
			listener.exitExpressionRecordSelector(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpressionRecordSelector) {
			return visitor.visitExpressionRecordSelector(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionConstantContext extends ExpressionContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpressionConstant) {
			listener.enterExpressionConstant(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpressionConstant) {
			listener.exitExpressionConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpressionConstant) {
			return visitor.visitExpressionConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpressionIdContext extends ExpressionContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpressionId) {
			listener.enterExpressionId(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpressionId) {
			listener.exitExpressionId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpressionId) {
			return visitor.visitExpressionId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyvalueContext extends ParserRuleContext {
	public _key!: LabelContext;
	public _value!: ExpressionContext;
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_keyvalue; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterKeyvalue) {
			listener.enterKeyvalue(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitKeyvalue) {
			listener.exitKeyvalue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitKeyvalue) {
			return visitor.visitKeyvalue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchSmlContext extends ParserRuleContext {
	public _pat!: PatternContext;
	public _exp!: ExpressionContext;
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_matchSml; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterMatchSml) {
			listener.enterMatchSml(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitMatchSml) {
			listener.exitMatchSml(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitMatchSml) {
			return visitor.visitMatchSml(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_label; }
	public copyFrom(ctx: LabelContext): void {
		super.copyFrom(ctx);
	}
}
export class LabelIdContext extends LabelContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: LabelContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterLabelId) {
			listener.enterLabelId(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitLabelId) {
			listener.exitLabelId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitLabelId) {
			return visitor.visitLabelId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LabelIntContext extends LabelContext {
	public INT(): TerminalNode { return this.getToken(smlParser.INT, 0); }
	constructor(ctx: LabelContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterLabelInt) {
			listener.enterLabelInt(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitLabelInt) {
			listener.exitLabelInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitLabelInt) {
			return visitor.visitLabelInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_id; }
	public copyFrom(ctx: IdContext): void {
		super.copyFrom(ctx);
	}
}
export class IdAlphaContext extends IdContext {
	public LETTER(): TerminalNode[];
	public LETTER(i: number): TerminalNode;
	public LETTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(smlParser.LETTER);
		} else {
			return this.getToken(smlParser.LETTER, i);
		}
	}
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(smlParser.DIGIT);
		} else {
			return this.getToken(smlParser.DIGIT, i);
		}
	}
	constructor(ctx: IdContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterIdAlpha) {
			listener.enterIdAlpha(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitIdAlpha) {
			listener.exitIdAlpha(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitIdAlpha) {
			return visitor.visitIdAlpha(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdSymbolContext extends IdContext {
	constructor(ctx: IdContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterIdSymbol) {
			listener.enterIdSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitIdSymbol) {
			listener.exitIdSymbol(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitIdSymbol) {
			return visitor.visitIdSymbol(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public LETTER(): TerminalNode[];
	public LETTER(i: number): TerminalNode;
	public LETTER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(smlParser.LETTER);
		} else {
			return this.getToken(smlParser.LETTER, i);
		}
	}
	public DIGIT(): TerminalNode[];
	public DIGIT(i: number): TerminalNode;
	public DIGIT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(smlParser.DIGIT);
		} else {
			return this.getToken(smlParser.DIGIT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_variable; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitVariable) {
			return visitor.visitVariable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_constant; }
	public copyFrom(ctx: ConstantContext): void {
		super.copyFrom(ctx);
	}
}
export class ConstantIntContext extends ConstantContext {
	public INT(): TerminalNode { return this.getToken(smlParser.INT, 0); }
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterConstantInt) {
			listener.enterConstantInt(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitConstantInt) {
			listener.exitConstantInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitConstantInt) {
			return visitor.visitConstantInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantRealContext extends ConstantContext {
	public REAL(): TerminalNode { return this.getToken(smlParser.REAL, 0); }
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterConstantReal) {
			listener.enterConstantReal(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitConstantReal) {
			listener.exitConstantReal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitConstantReal) {
			return visitor.visitConstantReal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantBoolContext extends ConstantContext {
	public BOOL(): TerminalNode { return this.getToken(smlParser.BOOL, 0); }
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterConstantBool) {
			listener.enterConstantBool(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitConstantBool) {
			listener.exitConstantBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitConstantBool) {
			return visitor.visitConstantBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantCharContext extends ConstantContext {
	public CHAR(): TerminalNode { return this.getToken(smlParser.CHAR, 0); }
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterConstantChar) {
			listener.enterConstantChar(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitConstantChar) {
			listener.exitConstantChar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitConstantChar) {
			return visitor.visitConstantChar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstantStrContext extends ConstantContext {
	public STR(): TerminalNode { return this.getToken(smlParser.STR, 0); }
	constructor(ctx: ConstantContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterConstantStr) {
			listener.enterConstantStr(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitConstantStr) {
			listener.exitConstantStr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitConstantStr) {
			return visitor.visitConstantStr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


