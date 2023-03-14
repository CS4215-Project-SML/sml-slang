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
	public static readonly CHAR = 28;
	public static readonly STR = 29;
	public static readonly BOOL = 30;
	public static readonly REAL = 31;
	public static readonly INT = 32;
	public static readonly ABSTYPE = 33;
	public static readonly AND = 34;
	public static readonly ANDALSO = 35;
	public static readonly AS = 36;
	public static readonly CASE = 37;
	public static readonly DATATYPE = 38;
	public static readonly DO = 39;
	public static readonly ELSE = 40;
	public static readonly END = 41;
	public static readonly EXCEPTION = 42;
	public static readonly FN = 43;
	public static readonly FUN = 44;
	public static readonly HANDLE = 45;
	public static readonly IF = 46;
	public static readonly IN = 47;
	public static readonly INFIX = 48;
	public static readonly INFIXR = 49;
	public static readonly LET = 50;
	public static readonly LOCAL = 51;
	public static readonly NONFIX = 52;
	public static readonly OF = 53;
	public static readonly OP = 54;
	public static readonly OPEN = 55;
	public static readonly ORELSE = 56;
	public static readonly RAISE = 57;
	public static readonly REC = 58;
	public static readonly THEN = 59;
	public static readonly TYPE = 60;
	public static readonly VAL = 61;
	public static readonly WITH = 62;
	public static readonly WITHTYPE = 63;
	public static readonly WHILE = 64;
	public static readonly TRUE = 65;
	public static readonly FALSE = 66;
	public static readonly DIGIT = 67;
	public static readonly LETTER = 68;
	public static readonly NEWLINE = 69;
	public static readonly WHITESPACE = 70;
	public static readonly RULE_program = 0;
	public static readonly RULE_declaration = 1;
	public static readonly RULE_valbind = 2;
	public static readonly RULE_pattern = 3;
	public static readonly RULE_expression = 4;
	public static readonly RULE_keyvalue = 5;
	public static readonly RULE_label = 6;
	public static readonly RULE_id = 7;
	public static readonly RULE_variable = 8;
	public static readonly RULE_constant = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "declaration", "valbind", "pattern", "expression", "keyvalue", 
		"label", "id", "variable", "constant",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'='", "'('", "')'", "'{'", "','", "'}'", "'#'", "'''", 
		"'_'", "'!'", "'%'", "'&'", "'$'", "'+'", "'-'", "'/'", "':'", "'<'", 
		"'>'", "'?'", "'@'", "'\\'", "'~'", "'^'", "'|'", "'*'", undefined, undefined, 
		undefined, undefined, undefined, "'abstype'", "'and'", "'andalso'", "'as'", 
		"'case'", "'datatype'", "'do'", "'else'", "'end'", "'exception'", "'fn'", 
		"'fun'", "'handle'", "'if'", "'in'", "'infix'", "'infixr'", "'let'", "'local'", 
		"'nonfix'", "'of'", "'op'", "'open'", "'orelse'", "'raise'", "'rec'", 
		"'then'", "'type'", "'val'", "'with'", "'withtype'", "'while'", "'true'", 
		"'false'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"CHAR", "STR", "BOOL", "REAL", "INT", "ABSTYPE", "AND", "ANDALSO", "AS", 
		"CASE", "DATATYPE", "DO", "ELSE", "END", "EXCEPTION", "FN", "FUN", "HANDLE", 
		"IF", "IN", "INFIX", "INFIXR", "LET", "LOCAL", "NONFIX", "OF", "OP", "OPEN", 
		"ORELSE", "RAISE", "REC", "THEN", "TYPE", "VAL", "WITH", "WITHTYPE", "WHILE", 
		"TRUE", "FALSE", "DIGIT", "LETTER", "NEWLINE", "WHITESPACE",
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
			this.state = 23;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				_localctx = new ProgramDeclarationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 21;
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
			this.state = 30;
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
					this.state = 25;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 26;
					this.match(smlParser.T__0);
					this.state = 27;
					(_localctx as ProgramSequenceContext)._right = this.program(4);
					}
					}
				}
				this.state = 32;
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
			this.state = 36;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.VAL:
				_localctx = new DeclarationValueContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 33;
				this.match(smlParser.VAL);
				this.state = 34;
				this.valbind();
				}
				break;
			case smlParser.T__1:
			case smlParser.T__2:
			case smlParser.T__4:
			case smlParser.T__7:
			case smlParser.T__8:
			case smlParser.T__10:
			case smlParser.T__11:
			case smlParser.T__12:
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
			case smlParser.CHAR:
			case smlParser.STR:
			case smlParser.BOOL:
			case smlParser.REAL:
			case smlParser.INT:
			case smlParser.LETTER:
				_localctx = new DeclarationExpressionContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 35;
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
			this.state = 38;
			_localctx._name = this.id();
			this.state = 39;
			this.match(smlParser.T__1);
			this.state = 40;
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
			this.state = 44;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.CHAR:
			case smlParser.STR:
			case smlParser.BOOL:
			case smlParser.REAL:
			case smlParser.INT:
				_localctx = new PatternConstantContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 42;
				this.constant();
				}
				break;
			case smlParser.T__1:
			case smlParser.T__7:
			case smlParser.T__8:
			case smlParser.T__10:
			case smlParser.T__11:
			case smlParser.T__12:
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
			case smlParser.LETTER:
				_localctx = new PatternIdContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 43;
				this.id();
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
			this.state = 82;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				_localctx = new ExpressionParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 47;
				this.match(smlParser.T__2);
				this.state = 48;
				(_localctx as ExpressionParenthesesContext)._inner = this.expression(0);
				this.state = 49;
				this.match(smlParser.T__3);
				}
				break;

			case 2:
				{
				_localctx = new ExpressionRecordContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 51;
				this.match(smlParser.T__4);
				this.state = 62;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 53;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (smlParser.T__1 - 2)) | (1 << (smlParser.T__7 - 2)) | (1 << (smlParser.T__8 - 2)) | (1 << (smlParser.T__10 - 2)) | (1 << (smlParser.T__11 - 2)) | (1 << (smlParser.T__12 - 2)) | (1 << (smlParser.T__13 - 2)) | (1 << (smlParser.T__14 - 2)) | (1 << (smlParser.T__15 - 2)) | (1 << (smlParser.T__16 - 2)) | (1 << (smlParser.T__17 - 2)) | (1 << (smlParser.T__18 - 2)) | (1 << (smlParser.T__19 - 2)) | (1 << (smlParser.T__20 - 2)) | (1 << (smlParser.T__21 - 2)) | (1 << (smlParser.T__22 - 2)) | (1 << (smlParser.T__23 - 2)) | (1 << (smlParser.T__24 - 2)) | (1 << (smlParser.T__25 - 2)) | (1 << (smlParser.T__26 - 2)) | (1 << (smlParser.INT - 2)))) !== 0) || _la === smlParser.LETTER) {
						{
						this.state = 52;
						this.keyvalue();
						}
					}

					}
					break;

				case 2:
					{
					{
					this.state = 55;
					this.keyvalue();
					this.state = 58;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 56;
						this.match(smlParser.T__5);
						this.state = 57;
						this.keyvalue();
						}
						}
						this.state = 60;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === smlParser.T__5);
					}
					}
					break;
				}
				this.state = 64;
				this.match(smlParser.T__6);
				}
				break;

			case 3:
				{
				_localctx = new ExpressionSequenceContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 65;
				this.match(smlParser.T__2);
				this.state = 66;
				this.expression(0);
				this.state = 67;
				this.match(smlParser.T__5);
				this.state = 68;
				this.expression(0);
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === smlParser.T__5) {
					{
					{
					this.state = 69;
					this.match(smlParser.T__5);
					this.state = 70;
					this.expression(0);
					}
					}
					this.state = 75;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 76;
				this.match(smlParser.T__3);
				}
				break;

			case 4:
				{
				_localctx = new ExpressionRecordSelectorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 78;
				this.match(smlParser.T__7);
				this.state = 79;
				this.label();
				}
				break;

			case 5:
				{
				_localctx = new ExpressionConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 80;
				this.constant();
				}
				break;

			case 6:
				{
				_localctx = new ExpressionIdContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 81;
				this.id();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 92;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 90;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionApplicationInfixContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionApplicationInfixContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression);
						this.state = 84;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 85;
						(_localctx as ExpressionApplicationInfixContext)._operator = this.id();
						this.state = 86;
						(_localctx as ExpressionApplicationInfixContext)._right = this.expression(8);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionApplicationPrefixContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionApplicationPrefixContext)._operator = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression);
						this.state = 88;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 89;
						(_localctx as ExpressionApplicationPrefixContext)._operand = this.expression(7);
						}
						break;
					}
					}
				}
				this.state = 94;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
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
			this.state = 95;
			_localctx._key = this.label();
			this.state = 96;
			this.match(smlParser.T__1);
			this.state = 97;
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
			this.state = 101;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.T__1:
			case smlParser.T__7:
			case smlParser.T__8:
			case smlParser.T__10:
			case smlParser.T__11:
			case smlParser.T__12:
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
			case smlParser.LETTER:
				_localctx = new LabelIdContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 99;
				this.id();
				}
				break;
			case smlParser.INT:
				_localctx = new LabelIntContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 100;
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
		this.enterRule(_localctx, 14, smlParser.RULE_id);
		let _la: number;
		try {
			let _alt: number;
			this.state = 115;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.LETTER:
				_localctx = new IdAlphaContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 103;
				this.match(smlParser.LETTER);
				this.state = 107;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 104;
						_la = this._input.LA(1);
						if (!(_la === smlParser.T__8 || _la === smlParser.T__9 || _la === smlParser.DIGIT || _la === smlParser.LETTER)) {
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
					this.state = 109;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
				}
				}
				break;
			case smlParser.T__1:
			case smlParser.T__7:
			case smlParser.T__8:
			case smlParser.T__10:
			case smlParser.T__11:
			case smlParser.T__12:
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
				_localctx = new IdSymbolContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 111;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 110;
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smlParser.T__1) | (1 << smlParser.T__7) | (1 << smlParser.T__8) | (1 << smlParser.T__10) | (1 << smlParser.T__11) | (1 << smlParser.T__12) | (1 << smlParser.T__13) | (1 << smlParser.T__14) | (1 << smlParser.T__15) | (1 << smlParser.T__16) | (1 << smlParser.T__17) | (1 << smlParser.T__18) | (1 << smlParser.T__19) | (1 << smlParser.T__20) | (1 << smlParser.T__21) | (1 << smlParser.T__22) | (1 << smlParser.T__23) | (1 << smlParser.T__24) | (1 << smlParser.T__25) | (1 << smlParser.T__26))) !== 0))) {
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
					this.state = 113;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
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
		this.enterRule(_localctx, 16, smlParser.RULE_variable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 117;
			this.match(smlParser.T__8);
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === smlParser.T__8 || _la === smlParser.T__9 || _la === smlParser.DIGIT || _la === smlParser.LETTER) {
				{
				{
				this.state = 118;
				_la = this._input.LA(1);
				if (!(_la === smlParser.T__8 || _la === smlParser.T__9 || _la === smlParser.DIGIT || _la === smlParser.LETTER)) {
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
				this.state = 123;
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
		this.enterRule(_localctx, 18, smlParser.RULE_constant);
		try {
			this.state = 129;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.INT:
				_localctx = new ConstantIntContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 124;
				this.match(smlParser.INT);
				}
				break;
			case smlParser.REAL:
				_localctx = new ConstantRealContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 125;
				this.match(smlParser.REAL);
				}
				break;
			case smlParser.BOOL:
				_localctx = new ConstantBoolContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 126;
				this.match(smlParser.BOOL);
				}
				break;
			case smlParser.CHAR:
				_localctx = new ConstantCharContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 127;
				this.match(smlParser.CHAR);
				}
				break;
			case smlParser.STR:
				_localctx = new ConstantStrContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 128;
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
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03H\x86\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03\x02" +
		"\x05\x02\x1A\n\x02\x03\x02\x03\x02\x03\x02\x07\x02\x1F\n\x02\f\x02\x0E" +
		"\x02\"\v\x02\x03\x03\x03\x03\x03\x03\x05\x03\'\n\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x05\x05/\n\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x05\x068\n\x06\x03\x06\x03\x06\x03\x06\x06" +
		"\x06=\n\x06\r\x06\x0E\x06>\x05\x06A\n\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x07\x06J\n\x06\f\x06\x0E\x06M\v\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06U\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06]\n\x06\f\x06\x0E\x06`\v\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x05\bh\n\b\x03\t\x03\t\x07\t" +
		"l\n\t\f\t\x0E\to\v\t\x03\t\x06\tr\n\t\r\t\x0E\ts\x05\tv\n\t\x03\n\x03" +
		"\n\x07\nz\n\n\f\n\x0E\n}\v\n\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\x84\n" +
		"\v\x03\v\x02\x02\x04\x02\n\f\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x04\x04\x02\v\fEF\x05\x02\x04\x04" +
		"\n\v\r\x1D\x02\x93\x02\x19\x03\x02\x02\x02\x04&\x03\x02\x02\x02\x06(\x03" +
		"\x02\x02\x02\b.\x03\x02\x02\x02\nT\x03\x02\x02\x02\fa\x03\x02\x02\x02" +
		"\x0Eg\x03\x02\x02\x02\x10u\x03\x02\x02\x02\x12w\x03\x02\x02\x02\x14\x83" +
		"\x03\x02\x02\x02\x16\x17\b\x02\x01\x02\x17\x1A\x05\x04\x03\x02\x18\x1A" +
		"\x03\x02\x02\x02\x19\x16\x03\x02\x02\x02\x19\x18\x03\x02\x02\x02\x1A " +
		"\x03\x02\x02\x02\x1B\x1C\f\x05\x02\x02\x1C\x1D\x07\x03\x02\x02\x1D\x1F" +
		"\x05\x02\x02\x06\x1E\x1B\x03\x02\x02\x02\x1F\"\x03\x02\x02\x02 \x1E\x03" +
		"\x02\x02\x02 !\x03\x02\x02\x02!\x03\x03\x02\x02\x02\" \x03\x02\x02\x02" +
		"#$\x07?\x02\x02$\'\x05\x06\x04\x02%\'\x05\n\x06\x02&#\x03\x02\x02\x02" +
		"&%\x03\x02\x02\x02\'\x05\x03\x02\x02\x02()\x05\x10\t\x02)*\x07\x04\x02" +
		"\x02*+\x05\n\x06\x02+\x07\x03\x02\x02\x02,/\x05\x14\v\x02-/\x05\x10\t" +
		"\x02.,\x03\x02\x02\x02.-\x03\x02\x02\x02/\t\x03\x02\x02\x0201\b\x06\x01" +
		"\x0212\x07\x05\x02\x0223\x05\n\x06\x0234\x07\x06\x02\x024U\x03\x02\x02" +
		"\x025@\x07\x07\x02\x0268\x05\f\x07\x0276\x03\x02\x02\x0278\x03\x02\x02" +
		"\x028A\x03\x02\x02\x029<\x05\f\x07\x02:;\x07\b\x02\x02;=\x05\f\x07\x02" +
		"<:\x03\x02\x02\x02=>\x03\x02\x02\x02><\x03\x02\x02\x02>?\x03\x02\x02\x02" +
		"?A\x03\x02\x02\x02@7\x03\x02\x02\x02@9\x03\x02\x02\x02AB\x03\x02\x02\x02" +
		"BU\x07\t\x02\x02CD\x07\x05\x02\x02DE\x05\n\x06\x02EF\x07\b\x02\x02FK\x05" +
		"\n\x06\x02GH\x07\b\x02\x02HJ\x05\n\x06\x02IG\x03\x02\x02\x02JM\x03\x02" +
		"\x02\x02KI\x03\x02\x02\x02KL\x03\x02\x02\x02LN\x03\x02\x02\x02MK\x03\x02" +
		"\x02\x02NO\x07\x06\x02\x02OU\x03\x02\x02\x02PQ\x07\n\x02\x02QU\x05\x0E" +
		"\b\x02RU\x05\x14\v\x02SU\x05\x10\t\x02T0\x03\x02\x02\x02T5\x03\x02\x02" +
		"\x02TC\x03\x02\x02\x02TP\x03\x02\x02\x02TR\x03\x02\x02\x02TS\x03\x02\x02" +
		"\x02U^\x03\x02\x02\x02VW\f\t\x02\x02WX\x05\x10\t\x02XY\x05\n\x06\nY]\x03" +
		"\x02\x02\x02Z[\f\b\x02\x02[]\x05\n\x06\t\\V\x03\x02\x02\x02\\Z\x03\x02" +
		"\x02\x02]`\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02\x02_\v\x03" +
		"\x02\x02\x02`^\x03\x02\x02\x02ab\x05\x0E\b\x02bc\x07\x04\x02\x02cd\x05" +
		"\n\x06\x02d\r\x03\x02\x02\x02eh\x05\x10\t\x02fh\x07\"\x02\x02ge\x03\x02" +
		"\x02\x02gf\x03\x02\x02\x02h\x0F\x03\x02\x02\x02im\x07F\x02\x02jl\t\x02" +
		"\x02\x02kj\x03\x02\x02\x02lo\x03\x02\x02\x02mk\x03\x02\x02\x02mn\x03\x02" +
		"\x02\x02nv\x03\x02\x02\x02om\x03\x02\x02\x02pr\t\x03\x02\x02qp\x03\x02" +
		"\x02\x02rs\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02tv\x03\x02" +
		"\x02\x02ui\x03\x02\x02\x02uq\x03\x02\x02\x02v\x11\x03\x02\x02\x02w{\x07" +
		"\v\x02\x02xz\t\x02\x02\x02yx\x03\x02\x02\x02z}\x03\x02\x02\x02{y\x03\x02" +
		"\x02\x02{|\x03\x02\x02\x02|\x13\x03\x02\x02\x02}{\x03\x02\x02\x02~\x84" +
		"\x07\"\x02\x02\x7F\x84\x07!\x02\x02\x80\x84\x07 \x02\x02\x81\x84\x07\x1E" +
		"\x02\x02\x82\x84\x07\x1F\x02\x02\x83~\x03\x02\x02\x02\x83\x7F\x03\x02" +
		"\x02\x02\x83\x80\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x83\x82\x03\x02" +
		"\x02\x02\x84\x15\x03\x02\x02\x02\x13\x19 &.7>@KT\\^gmsu{\x83";
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


