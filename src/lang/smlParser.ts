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
	public static readonly CHAR = 21;
	public static readonly STR = 22;
	public static readonly REAL = 23;
	public static readonly INT = 24;
	public static readonly BOOL = 25;
	public static readonly ABSTYPE = 26;
	public static readonly AND = 27;
	public static readonly ANDALSO = 28;
	public static readonly AS = 29;
	public static readonly CASE = 30;
	public static readonly DATATYPE = 31;
	public static readonly DO = 32;
	public static readonly ELSE = 33;
	public static readonly END = 34;
	public static readonly EXCEPTION = 35;
	public static readonly FN = 36;
	public static readonly FUN = 37;
	public static readonly HANDLE = 38;
	public static readonly IF = 39;
	public static readonly IN = 40;
	public static readonly INFIX = 41;
	public static readonly INFIXR = 42;
	public static readonly LET = 43;
	public static readonly LOCAL = 44;
	public static readonly NONFIX = 45;
	public static readonly OF = 46;
	public static readonly OP = 47;
	public static readonly OPEN = 48;
	public static readonly ORELSE = 49;
	public static readonly RAISE = 50;
	public static readonly REC = 51;
	public static readonly THEN = 52;
	public static readonly TYPE = 53;
	public static readonly VAL = 54;
	public static readonly WITH = 55;
	public static readonly WITHTYPE = 56;
	public static readonly WHILE = 57;
	public static readonly TRUE = 58;
	public static readonly FALSE = 59;
	public static readonly ID = 60;
	public static readonly DIGIT = 61;
	public static readonly LETTER = 62;
	public static readonly NEWLINE = 63;
	public static readonly WHITESPACE = 64;
	public static readonly RULE_program = 0;
	public static readonly RULE_declaration = 1;
	public static readonly RULE_valbind = 2;
	public static readonly RULE_pattern = 3;
	public static readonly RULE_expression = 4;
	public static readonly RULE_keyvalue = 5;
	public static readonly RULE_label = 6;
	public static readonly RULE_identifier = 7;
	public static readonly RULE_constant = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "declaration", "valbind", "pattern", "expression", "keyvalue", 
		"label", "identifier", "constant",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'='", "'('", "')'", "'*'", "'/'", "'+'", "'-'", "'^'", 
		"'<>'", "'<'", "'<='", "'>'", "'>='", "'{'", "','", "'}'", "'['", "']'", 
		"'#'", undefined, undefined, undefined, undefined, undefined, "'abstype'", 
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
		"CHAR", "STR", "REAL", "INT", "BOOL", "ABSTYPE", "AND", "ANDALSO", "AS", 
		"CASE", "DATATYPE", "DO", "ELSE", "END", "EXCEPTION", "FN", "FUN", "HANDLE", 
		"IF", "IN", "INFIX", "INFIXR", "LET", "LOCAL", "NONFIX", "OF", "OP", "OPEN", 
		"ORELSE", "RAISE", "REC", "THEN", "TYPE", "VAL", "WITH", "WITHTYPE", "WHILE", 
		"TRUE", "FALSE", "ID", "DIGIT", "LETTER", "NEWLINE", "WHITESPACE",
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
			this.state = 21;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				_localctx = new ProgramDeclarationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 19;
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
			this.state = 28;
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
					this.state = 23;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 24;
					this.match(smlParser.T__0);
					this.state = 25;
					(_localctx as ProgramSequenceContext)._right = this.program(4);
					}
					}
				}
				this.state = 30;
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
			this.state = 34;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.VAL:
				_localctx = new DeclarationValueContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 31;
				this.match(smlParser.VAL);
				this.state = 32;
				this.valbind();
				}
				break;
			case smlParser.T__2:
			case smlParser.T__14:
			case smlParser.T__17:
			case smlParser.T__19:
			case smlParser.CHAR:
			case smlParser.STR:
			case smlParser.REAL:
			case smlParser.INT:
			case smlParser.BOOL:
			case smlParser.IF:
			case smlParser.ID:
				_localctx = new DeclarationExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 33;
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
			this.state = 36;
			_localctx._name = this.identifier();
			this.state = 37;
			this.match(smlParser.T__1);
			this.state = 38;
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
	public pattern(): PatternContext {
		let _localctx: PatternContext = new PatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, smlParser.RULE_pattern);
		try {
			this.state = 42;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.CHAR:
			case smlParser.STR:
			case smlParser.REAL:
			case smlParser.INT:
			case smlParser.BOOL:
				_localctx = new PatternConstantContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 40;
				this.constant();
				}
				break;
			case smlParser.ID:
				_localctx = new PatternIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 41;
				this.identifier();
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
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, smlParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				_localctx = new ExpressionConditionalContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 45;
				this.match(smlParser.IF);
				this.state = 46;
				(_localctx as ExpressionConditionalContext)._pred = this.expression(0);
				this.state = 47;
				this.match(smlParser.THEN);
				this.state = 48;
				(_localctx as ExpressionConditionalContext)._cons = this.expression(0);
				this.state = 49;
				this.match(smlParser.ELSE);
				this.state = 50;
				(_localctx as ExpressionConditionalContext)._alt = this.expression(13);
				}
				break;

			case 2:
				{
				_localctx = new ExpressionParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 52;
				this.match(smlParser.T__2);
				this.state = 53;
				(_localctx as ExpressionParenthesesContext)._inner = this.expression(0);
				this.state = 54;
				this.match(smlParser.T__3);
				}
				break;

			case 3:
				{
				_localctx = new ExpressionRecordContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 56;
				this.match(smlParser.T__14);
				this.state = 67;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 58;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === smlParser.INT || _la === smlParser.ID) {
						{
						this.state = 57;
						this.keyvalue();
						}
					}

					}
					break;

				case 2:
					{
					{
					this.state = 60;
					this.keyvalue();
					this.state = 63;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 61;
						this.match(smlParser.T__15);
						this.state = 62;
						this.keyvalue();
						}
						}
						this.state = 65;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === smlParser.T__15);
					}
					}
					break;
				}
				this.state = 69;
				this.match(smlParser.T__16);
				}
				break;

			case 4:
				{
				_localctx = new ExpressionSequenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 70;
				this.match(smlParser.T__2);
				this.state = 71;
				this.expression(0);
				this.state = 72;
				this.match(smlParser.T__15);
				this.state = 73;
				this.expression(0);
				this.state = 78;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === smlParser.T__15) {
					{
					{
					this.state = 74;
					this.match(smlParser.T__15);
					this.state = 75;
					this.expression(0);
					}
					}
					this.state = 80;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 81;
				this.match(smlParser.T__3);
				}
				break;

			case 5:
				{
				_localctx = new ExpressionListContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 83;
				this.match(smlParser.T__17);
				this.state = 94;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 85;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smlParser.T__2) | (1 << smlParser.T__14) | (1 << smlParser.T__17) | (1 << smlParser.T__19) | (1 << smlParser.CHAR) | (1 << smlParser.STR) | (1 << smlParser.REAL) | (1 << smlParser.INT) | (1 << smlParser.BOOL))) !== 0) || _la === smlParser.IF || _la === smlParser.ID) {
						{
						this.state = 84;
						this.expression(0);
						}
					}

					}
					break;

				case 2:
					{
					{
					this.state = 87;
					this.expression(0);
					this.state = 90;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 88;
						this.match(smlParser.T__15);
						this.state = 89;
						this.expression(0);
						}
						}
						this.state = 92;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === smlParser.T__15);
					}
					}
					break;
				}
				this.state = 96;
				this.match(smlParser.T__18);
				}
				break;

			case 6:
				{
				_localctx = new ExpressionRecordSelectorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 97;
				this.match(smlParser.T__19);
				this.state = 98;
				this.label();
				}
				break;

			case 7:
				{
				_localctx = new ExpressionConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 99;
				this.constant();
				}
				break;

			case 8:
				{
				_localctx = new ExpressionIdentifierContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 100;
				this.identifier();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 119;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 117;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionApplicationPrefixContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionApplicationPrefixContext)._operator = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression);
						this.state = 103;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 104;
						(_localctx as ExpressionApplicationPrefixContext)._operand = this.expression(12);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionApplicationInfixContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionApplicationInfixContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression);
						this.state = 105;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 106;
						(_localctx as ExpressionApplicationInfixContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === smlParser.T__4 || _la === smlParser.T__5)) {
							(_localctx as ExpressionApplicationInfixContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 107;
						(_localctx as ExpressionApplicationInfixContext)._right = this.expression(11);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionApplicationInfixContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionApplicationInfixContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression);
						this.state = 108;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 109;
						(_localctx as ExpressionApplicationInfixContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smlParser.T__6) | (1 << smlParser.T__7) | (1 << smlParser.T__8))) !== 0))) {
							(_localctx as ExpressionApplicationInfixContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 110;
						(_localctx as ExpressionApplicationInfixContext)._right = this.expression(10);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionApplicationInfixContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionApplicationInfixContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression);
						this.state = 111;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 112;
						(_localctx as ExpressionApplicationInfixContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smlParser.T__1) | (1 << smlParser.T__9) | (1 << smlParser.T__10) | (1 << smlParser.T__11) | (1 << smlParser.T__12) | (1 << smlParser.T__13))) !== 0))) {
							(_localctx as ExpressionApplicationInfixContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 113;
						(_localctx as ExpressionApplicationInfixContext)._right = this.expression(9);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionApplicationInfixContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionApplicationInfixContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression);
						this.state = 114;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 115;
						(_localctx as ExpressionApplicationInfixContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === smlParser.ANDALSO || _la === smlParser.ORELSE)) {
							(_localctx as ExpressionApplicationInfixContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 116;
						(_localctx as ExpressionApplicationInfixContext)._right = this.expression(8);
						}
						break;
					}
					}
				}
				this.state = 121;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
		this.enterRule(_localctx, 10, smlParser.RULE_keyvalue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			_localctx._key = this.label();
			this.state = 123;
			this.match(smlParser.T__1);
			this.state = 124;
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
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, smlParser.RULE_label);
		try {
			this.state = 128;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.ID:
				_localctx = new LabelIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 126;
				this.identifier();
				}
				break;
			case smlParser.INT:
				_localctx = new LabelIntContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 127;
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
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, smlParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(smlParser.ID);
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
		this.enterRule(_localctx, 16, smlParser.RULE_constant);
		try {
			this.state = 137;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.INT:
				_localctx = new ConstantIntContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 132;
				this.match(smlParser.INT);
				}
				break;
			case smlParser.REAL:
				_localctx = new ConstantRealContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 133;
				this.match(smlParser.REAL);
				}
				break;
			case smlParser.BOOL:
				_localctx = new ConstantBoolContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 134;
				this.match(smlParser.BOOL);
				}
				break;
			case smlParser.CHAR:
				_localctx = new ConstantCharContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 135;
				this.match(smlParser.CHAR);
				}
				break;
			case smlParser.STR:
				_localctx = new ConstantStrContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 136;
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
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 11);

		case 2:
			return this.precpred(this._ctx, 10);

		case 3:
			return this.precpred(this._ctx, 9);

		case 4:
			return this.precpred(this._ctx, 8);

		case 5:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03B\x8E\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x05\x02\x18" +
		"\n\x02\x03\x02\x03\x02\x03\x02\x07\x02\x1D\n\x02\f\x02\x0E\x02 \v\x02" +
		"\x03\x03\x03\x03\x03\x03\x05\x03%\n\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x05\x03\x05\x05\x05-\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06=\n\x06\x03\x06\x03\x06\x03\x06\x06\x06B\n\x06\r\x06\x0E\x06C" +
		"\x05\x06F\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x07\x06O\n\x06\f\x06\x0E\x06R\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05" +
		"\x06X\n\x06\x03\x06\x03\x06\x03\x06\x06\x06]\n\x06\r\x06\x0E\x06^\x05" +
		"\x06a\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06h\n\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06x\n\x06\f\x06\x0E\x06{\v\x06" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x05\b\x83\n\b\x03\t\x03\t" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x8C\n\n\x03\n\x02\x02\x04\x02\n\v" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02" +
		"\x06\x03\x02\x07\b\x03\x02\t\v\x04\x02\x04\x04\f\x10\x04\x02\x1E\x1E3" +
		"3\x02\xA0\x02\x17\x03\x02\x02\x02\x04$\x03\x02\x02\x02\x06&\x03\x02\x02" +
		"\x02\b,\x03\x02\x02\x02\ng\x03\x02\x02\x02\f|\x03\x02\x02\x02\x0E\x82" +
		"\x03\x02\x02\x02\x10\x84\x03\x02\x02\x02\x12\x8B\x03\x02\x02\x02\x14\x15" +
		"\b\x02\x01\x02\x15\x18\x05\x04\x03\x02\x16\x18\x03\x02\x02\x02\x17\x14" +
		"\x03\x02\x02\x02\x17\x16\x03\x02\x02\x02\x18\x1E\x03\x02\x02\x02\x19\x1A" +
		"\f\x05\x02\x02\x1A\x1B\x07\x03\x02\x02\x1B\x1D\x05\x02\x02\x06\x1C\x19" +
		"\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F" +
		"\x03\x02\x02\x02\x1F\x03\x03\x02\x02\x02 \x1E\x03\x02\x02\x02!\"\x078" +
		"\x02\x02\"%\x05\x06\x04\x02#%\x05\n\x06\x02$!\x03\x02\x02\x02$#\x03\x02" +
		"\x02\x02%\x05\x03\x02\x02\x02&\'\x05\x10\t\x02\'(\x07\x04\x02\x02()\x05" +
		"\n\x06\x02)\x07\x03\x02\x02\x02*-\x05\x12\n\x02+-\x05\x10\t\x02,*\x03" +
		"\x02\x02\x02,+\x03\x02\x02\x02-\t\x03\x02\x02\x02./\b\x06\x01\x02/0\x07" +
		")\x02\x0201\x05\n\x06\x0212\x076\x02\x0223\x05\n\x06\x0234\x07#\x02\x02" +
		"45\x05\n\x06\x0F5h\x03\x02\x02\x0267\x07\x05\x02\x0278\x05\n\x06\x028" +
		"9\x07\x06\x02\x029h\x03\x02\x02\x02:E\x07\x11\x02\x02;=\x05\f\x07\x02" +
		"<;\x03\x02\x02\x02<=\x03\x02\x02\x02=F\x03\x02\x02\x02>A\x05\f\x07\x02" +
		"?@\x07\x12\x02\x02@B\x05\f\x07\x02A?\x03\x02\x02\x02BC\x03\x02\x02\x02" +
		"CA\x03\x02\x02\x02CD\x03\x02\x02\x02DF\x03\x02\x02\x02E<\x03\x02\x02\x02" +
		"E>\x03\x02\x02\x02FG\x03\x02\x02\x02Gh\x07\x13\x02\x02HI\x07\x05\x02\x02" +
		"IJ\x05\n\x06\x02JK\x07\x12\x02\x02KP\x05\n\x06\x02LM\x07\x12\x02\x02M" +
		"O\x05\n\x06\x02NL\x03\x02\x02\x02OR\x03\x02\x02\x02PN\x03\x02\x02\x02" +
		"PQ\x03\x02\x02\x02QS\x03\x02\x02\x02RP\x03\x02\x02\x02ST\x07\x06\x02\x02" +
		"Th\x03\x02\x02\x02U`\x07\x14\x02\x02VX\x05\n\x06\x02WV\x03\x02\x02\x02" +
		"WX\x03\x02\x02\x02Xa\x03\x02\x02\x02Y\\\x05\n\x06\x02Z[\x07\x12\x02\x02" +
		"[]\x05\n\x06\x02\\Z\x03\x02\x02\x02]^\x03\x02\x02\x02^\\\x03\x02\x02\x02" +
		"^_\x03\x02\x02\x02_a\x03\x02\x02\x02`W\x03\x02\x02\x02`Y\x03\x02\x02\x02" +
		"ab\x03\x02\x02\x02bh\x07\x15\x02\x02cd\x07\x16\x02\x02dh\x05\x0E\b\x02" +
		"eh\x05\x12\n\x02fh\x05\x10\t\x02g.\x03\x02\x02\x02g6\x03\x02\x02\x02g" +
		":\x03\x02\x02\x02gH\x03\x02\x02\x02gU\x03\x02\x02\x02gc\x03\x02\x02\x02" +
		"ge\x03\x02\x02\x02gf\x03\x02\x02\x02hy\x03\x02\x02\x02ij\f\r\x02\x02j" +
		"x\x05\n\x06\x0Ekl\f\f\x02\x02lm\t\x02\x02\x02mx\x05\n\x06\rno\f\v\x02" +
		"\x02op\t\x03\x02\x02px\x05\n\x06\fqr\f\n\x02\x02rs\t\x04\x02\x02sx\x05" +
		"\n\x06\vtu\f\t\x02\x02uv\t\x05\x02\x02vx\x05\n\x06\nwi\x03\x02\x02\x02" +
		"wk\x03\x02\x02\x02wn\x03\x02\x02\x02wq\x03\x02\x02\x02wt\x03\x02\x02\x02" +
		"x{\x03\x02\x02\x02yw\x03\x02\x02\x02yz\x03\x02\x02\x02z\v\x03\x02\x02" +
		"\x02{y\x03\x02\x02\x02|}\x05\x0E\b\x02}~\x07\x04\x02\x02~\x7F\x05\n\x06" +
		"\x02\x7F\r\x03\x02\x02\x02\x80\x83\x05\x10\t\x02\x81\x83\x07\x1A\x02\x02" +
		"\x82\x80\x03\x02\x02\x02\x82\x81\x03\x02\x02\x02\x83\x0F\x03\x02\x02\x02" +
		"\x84\x85\x07>\x02\x02\x85\x11\x03\x02\x02\x02\x86\x8C\x07\x1A\x02\x02" +
		"\x87\x8C\x07\x19\x02\x02\x88\x8C\x07\x1B\x02\x02\x89\x8C\x07\x17\x02\x02" +
		"\x8A\x8C\x07\x18\x02\x02\x8B\x86\x03\x02\x02\x02\x8B\x87\x03\x02\x02\x02" +
		"\x8B\x88\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8A\x03\x02\x02\x02" +
		"\x8C\x13\x03\x02\x02\x02\x12\x17\x1E$,<CEPW^`gwy\x82\x8B";
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
	public _name!: IdentifierContext;
	public _value!: ExpressionContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
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
export class PatternIdentifierContext extends PatternContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: PatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterPatternIdentifier) {
			listener.enterPatternIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitPatternIdentifier) {
			listener.exitPatternIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitPatternIdentifier) {
			return visitor.visitPatternIdentifier(this);
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
export class ExpressionApplicationInfixContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _operator!: Token;
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
	public ANDALSO(): TerminalNode | undefined { return this.tryGetToken(smlParser.ANDALSO, 0); }
	public ORELSE(): TerminalNode | undefined { return this.tryGetToken(smlParser.ORELSE, 0); }
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
export class ExpressionSequenceContext extends ExpressionContext {
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
		if (listener.enterExpressionSequence) {
			listener.enterExpressionSequence(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpressionSequence) {
			listener.exitExpressionSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpressionSequence) {
			return visitor.visitExpressionSequence(this);
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
export class ExpressionIdentifierContext extends ExpressionContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpressionIdentifier) {
			listener.enterExpressionIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpressionIdentifier) {
			listener.exitExpressionIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpressionIdentifier) {
			return visitor.visitExpressionIdentifier(this);
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
export class LabelIdentifierContext extends LabelContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(ctx: LabelContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterLabelIdentifier) {
			listener.enterLabelIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitLabelIdentifier) {
			listener.exitLabelIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitLabelIdentifier) {
			return visitor.visitLabelIdentifier(this);
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


export class IdentifierContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(smlParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_identifier; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
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


