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
	public static readonly DIGIT = 29;
	public static readonly TRUE = 30;
	public static readonly FALSE = 31;
	public static readonly LETTER = 32;
	public static readonly ASCII = 33;
	public static readonly WHITESPACE = 34;
	public static readonly RULE_number = 0;
	public static readonly RULE_constant = 1;
	public static readonly RULE_int = 2;
	public static readonly RULE_real = 3;
	public static readonly RULE_bool = 4;
	public static readonly RULE_char = 5;
	public static readonly RULE_string = 6;
	public static readonly RULE_id = 7;
	public static readonly RULE_variable = 8;
	public static readonly RULE_label = 9;
	public static readonly RULE_type = 10;
	public static readonly RULE_exp = 11;
	public static readonly RULE_dec = 12;
	public static readonly RULE_prog = 13;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"number", "constant", "int", "real", "bool", "char", "string", "id", "variable", 
		"label", "type", "exp", "dec", "prog",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'#\"'", "'\"'", "'''", "'_'", "'!'", "'%'", "'&'", 
		"'$'", "'#'", "'+'", "'-'", "'/'", "':'", "'<'", "'='", "'>'", "'?'", 
		"'@'", "'\\'", "'~'", "'^'", "'|'", "'*'", "'('", "')'", "'->'", "';'", 
		undefined, "'true'", "'false'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "DIGIT", "TRUE", "FALSE", "LETTER", "ASCII", "WHITESPACE",
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
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, smlParser.RULE_number);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 28;
					this.match(smlParser.DIGIT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 31;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
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
		this.enterRule(_localctx, 2, smlParser.RULE_constant);
		try {
			this.state = 38;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 33;
				this.int();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 34;
				this.real();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 35;
				this.bool();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 36;
				this.char();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 37;
				this.string();
				}
				break;
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
	public int(): IntContext {
		let _localctx: IntContext = new IntContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, smlParser.RULE_int);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.number();
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
	public real(): RealContext {
		let _localctx: RealContext = new RealContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, smlParser.RULE_real);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.number();
			this.state = 43;
			this.match(smlParser.T__0);
			this.state = 44;
			this.number();
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
	public bool(): BoolContext {
		let _localctx: BoolContext = new BoolContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, smlParser.RULE_bool);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			_la = this._input.LA(1);
			if (!(_la === smlParser.TRUE || _la === smlParser.FALSE)) {
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
	public char(): CharContext {
		let _localctx: CharContext = new CharContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, smlParser.RULE_char);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.match(smlParser.T__1);
			this.state = 49;
			this.match(smlParser.ASCII);
			this.state = 50;
			this.match(smlParser.T__2);
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
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, smlParser.RULE_string);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
			this.match(smlParser.T__2);
			this.state = 56;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === smlParser.ASCII) {
				{
				{
				this.state = 53;
				this.match(smlParser.ASCII);
				}
				}
				this.state = 58;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 59;
			this.match(smlParser.T__2);
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
			this.state = 73;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.LETTER:
				_localctx = new IdAlphaContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 61;
				this.match(smlParser.LETTER);
				this.state = 65;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 62;
						_la = this._input.LA(1);
						if (!(((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (smlParser.T__3 - 4)) | (1 << (smlParser.T__4 - 4)) | (1 << (smlParser.DIGIT - 4)) | (1 << (smlParser.LETTER - 4)))) !== 0))) {
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
					this.state = 67;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				}
				}
				break;
			case smlParser.T__3:
			case smlParser.T__5:
			case smlParser.T__6:
			case smlParser.T__7:
			case smlParser.T__8:
			case smlParser.T__9:
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
				_localctx = new IdSymbolContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 69;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 68;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smlParser.T__3) | (1 << smlParser.T__5) | (1 << smlParser.T__6) | (1 << smlParser.T__7) | (1 << smlParser.T__8) | (1 << smlParser.T__9) | (1 << smlParser.T__10) | (1 << smlParser.T__11) | (1 << smlParser.T__12) | (1 << smlParser.T__13) | (1 << smlParser.T__14) | (1 << smlParser.T__15) | (1 << smlParser.T__16) | (1 << smlParser.T__17) | (1 << smlParser.T__18) | (1 << smlParser.T__19) | (1 << smlParser.T__20) | (1 << smlParser.T__21) | (1 << smlParser.T__22) | (1 << smlParser.T__23))) !== 0))) {
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
					this.state = 71;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smlParser.T__3) | (1 << smlParser.T__5) | (1 << smlParser.T__6) | (1 << smlParser.T__7) | (1 << smlParser.T__8) | (1 << smlParser.T__9) | (1 << smlParser.T__10) | (1 << smlParser.T__11) | (1 << smlParser.T__12) | (1 << smlParser.T__13) | (1 << smlParser.T__14) | (1 << smlParser.T__15) | (1 << smlParser.T__16) | (1 << smlParser.T__17) | (1 << smlParser.T__18) | (1 << smlParser.T__19) | (1 << smlParser.T__20) | (1 << smlParser.T__21) | (1 << smlParser.T__22) | (1 << smlParser.T__23))) !== 0));
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(smlParser.T__3);
			this.state = 79;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 76;
					_la = this._input.LA(1);
					if (!(((((_la - 4)) & ~0x1F) === 0 && ((1 << (_la - 4)) & ((1 << (smlParser.T__3 - 4)) | (1 << (smlParser.T__4 - 4)) | (1 << (smlParser.DIGIT - 4)) | (1 << (smlParser.LETTER - 4)))) !== 0))) {
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
				this.state = 81;
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
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, smlParser.RULE_label);
		try {
			this.state = 84;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.T__3:
			case smlParser.T__5:
			case smlParser.T__6:
			case smlParser.T__7:
			case smlParser.T__8:
			case smlParser.T__9:
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
			case smlParser.LETTER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 82;
				this.id();
				}
				break;
			case smlParser.DIGIT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 83;
				this.number();
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

	public type(): TypeContext;
	public type(_p: number): TypeContext;
	// @RuleVersion(0)
	public type(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypeContext = new TypeContext(this._ctx, _parentState);
		let _prevctx: TypeContext = _localctx;
		let _startState: number = 20;
		this.enterRecursionRule(_localctx, 20, smlParser.RULE_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.T__3:
				{
				_localctx = new TypeVarContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 87;
				this.variable();
				}
				break;
			case smlParser.T__24:
				{
				_localctx = new TypeParContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 88;
				this.match(smlParser.T__24);
				this.state = 89;
				(_localctx as TypeParContext)._inner = this.exp(0);
				this.state = 90;
				this.match(smlParser.T__25);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 99;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new TypeFunContext(new TypeContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_type);
					this.state = 94;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 95;
					this.match(smlParser.T__26);
					this.state = 96;
					this.type(2);
					}
					}
				}
				this.state = 101;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
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

	public exp(): ExpContext;
	public exp(_p: number): ExpContext;
	// @RuleVersion(0)
	public exp(_p?: number): ExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpContext = new ExpContext(this._ctx, _parentState);
		let _prevctx: ExpContext = _localctx;
		let _startState: number = 22;
		this.enterRecursionRule(_localctx, 22, smlParser.RULE_exp, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 108;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.T__1:
			case smlParser.T__2:
			case smlParser.DIGIT:
			case smlParser.TRUE:
			case smlParser.FALSE:
				{
				_localctx = new ExpConContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 103;
				this.constant();
				}
				break;
			case smlParser.T__24:
				{
				_localctx = new ExpParContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 104;
				this.match(smlParser.T__24);
				this.state = 105;
				(_localctx as ExpParContext)._inner = this.exp(0);
				this.state = 106;
				this.match(smlParser.T__25);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 118;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 116;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpAppPrefixContext(new ExpContext(_parentctx, _parentState));
						(_localctx as ExpAppPrefixContext)._operator = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_exp);
						this.state = 110;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 111;
						(_localctx as ExpAppPrefixContext)._operand = this.exp(3);
						}
						break;

					case 2:
						{
						_localctx = new ExpAppInfixContext(new ExpContext(_parentctx, _parentState));
						(_localctx as ExpAppInfixContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_exp);
						this.state = 112;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 113;
						(_localctx as ExpAppInfixContext)._operator = this.id();
						this.state = 114;
						(_localctx as ExpAppInfixContext)._right = this.exp(2);
						}
						break;
					}
					}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
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
	public dec(): DecContext {
		let _localctx: DecContext = new DecContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, smlParser.RULE_dec);
		try {
			_localctx = new DecExpContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 121;
			this.exp(0);
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

	public prog(): ProgContext;
	public prog(_p: number): ProgContext;
	// @RuleVersion(0)
	public prog(_p?: number): ProgContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ProgContext = new ProgContext(this._ctx, _parentState);
		let _prevctx: ProgContext = _localctx;
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, smlParser.RULE_prog, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			_localctx = new ProgDecContext(_localctx);
			this._ctx = _localctx;
			_prevctx = _localctx;

			this.state = 124;
			this.dec();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 131;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new ProgSeqContext(new ProgContext(_parentctx, _parentState));
					(_localctx as ProgSeqContext)._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_prog);
					this.state = 126;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 127;
					this.match(smlParser.T__27);
					this.state = 128;
					(_localctx as ProgSeqContext)._right = this.prog(3);
					}
					}
				}
				this.state = 133;
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 10:
			return this.type_sempred(_localctx as TypeContext, predIndex);

		case 11:
			return this.exp_sempred(_localctx as ExpContext, predIndex);

		case 13:
			return this.prog_sempred(_localctx as ProgContext, predIndex);
		}
		return true;
	}
	private type_sempred(_localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private exp_sempred(_localctx: ExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);

		case 2:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private prog_sempred(_localctx: ProgContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03$\x89\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x06\x02 \n\x02\r\x02\x0E\x02!\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03)\n\x03\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x07\b9\n\b\f\b\x0E\b<\v\b\x03\b\x03\b\x03\t\x03\t\x07\tB" +
		"\n\t\f\t\x0E\tE\v\t\x03\t\x06\tH\n\t\r\t\x0E\tI\x05\tL\n\t\x03\n\x03\n" +
		"\x07\nP\n\n\f\n\x0E\nS\v\n\x03\v\x03\v\x05\vW\n\v\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x05\f_\n\f\x03\f\x03\f\x03\f\x07\fd\n\f\f\f\x0E\fg\v\f" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\ro\n\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x07\rw\n\r\f\r\x0E\rz\v\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\x84\n\x0F\f\x0F\x0E\x0F\x87\v" +
		"\x0F\x03\x0F\x02\x02\x05\x16\x18\x1C\x10\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x02\x05\x03\x02 !\x05\x02\x06\x07\x1F\x1F\"\"\x04\x02\x06\x06\b\x1A" +
		"\x02\x8B\x02\x1F\x03\x02\x02\x02\x04(\x03\x02\x02\x02\x06*\x03\x02\x02" +
		"\x02\b,\x03\x02\x02\x02\n0\x03\x02\x02\x02\f2\x03\x02\x02\x02\x0E6\x03" +
		"\x02\x02\x02\x10K\x03\x02\x02\x02\x12M\x03\x02\x02\x02\x14V\x03\x02\x02" +
		"\x02\x16^\x03\x02\x02\x02\x18n\x03\x02\x02\x02\x1A{\x03\x02\x02\x02\x1C" +
		"}\x03\x02\x02\x02\x1E \x07\x1F\x02\x02\x1F\x1E\x03\x02\x02\x02 !\x03\x02" +
		"\x02\x02!\x1F\x03\x02\x02\x02!\"\x03\x02\x02\x02\"\x03\x03\x02\x02\x02" +
		"#)\x05\x06\x04\x02$)\x05\b\x05\x02%)\x05\n\x06\x02&)\x05\f\x07\x02\')" +
		"\x05\x0E\b\x02(#\x03\x02\x02\x02($\x03\x02\x02\x02(%\x03\x02\x02\x02(" +
		"&\x03\x02\x02\x02(\'\x03\x02\x02\x02)\x05\x03\x02\x02\x02*+\x05\x02\x02" +
		"\x02+\x07\x03\x02\x02\x02,-\x05\x02\x02\x02-.\x07\x03\x02\x02./\x05\x02" +
		"\x02\x02/\t\x03\x02\x02\x0201\t\x02\x02\x021\v\x03\x02\x02\x0223\x07\x04" +
		"\x02\x0234\x07#\x02\x0245\x07\x05\x02\x025\r\x03\x02\x02\x026:\x07\x05" +
		"\x02\x0279\x07#\x02\x0287\x03\x02\x02\x029<\x03\x02\x02\x02:8\x03\x02" +
		"\x02\x02:;\x03\x02\x02\x02;=\x03\x02\x02\x02<:\x03\x02\x02\x02=>\x07\x05" +
		"\x02\x02>\x0F\x03\x02\x02\x02?C\x07\"\x02\x02@B\t\x03\x02\x02A@\x03\x02" +
		"\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02DL\x03\x02" +
		"\x02\x02EC\x03\x02\x02\x02FH\t\x04\x02\x02GF\x03\x02\x02\x02HI\x03\x02" +
		"\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02JL\x03\x02\x02\x02K?\x03\x02" +
		"\x02\x02KG\x03\x02\x02\x02L\x11\x03\x02\x02\x02MQ\x07\x06\x02\x02NP\t" +
		"\x03\x02\x02ON\x03\x02\x02\x02PS\x03\x02\x02\x02QO\x03\x02\x02\x02QR\x03" +
		"\x02\x02\x02R\x13\x03\x02\x02\x02SQ\x03\x02\x02\x02TW\x05\x10\t\x02UW" +
		"\x05\x02\x02\x02VT\x03\x02\x02\x02VU\x03\x02\x02\x02W\x15\x03\x02\x02" +
		"\x02XY\b\f\x01\x02Y_\x05\x12\n\x02Z[\x07\x1B\x02\x02[\\\x05\x18\r\x02" +
		"\\]\x07\x1C\x02\x02]_\x03\x02\x02\x02^X\x03\x02\x02\x02^Z\x03\x02\x02" +
		"\x02_e\x03\x02\x02\x02`a\f\x03\x02\x02ab\x07\x1D\x02\x02bd\x05\x16\f\x04" +
		"c`\x03\x02\x02\x02dg\x03\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02" +
		"f\x17\x03\x02\x02\x02ge\x03\x02\x02\x02hi\b\r\x01\x02io\x05\x04\x03\x02" +
		"jk\x07\x1B\x02\x02kl\x05\x18\r\x02lm\x07\x1C\x02\x02mo\x03\x02\x02\x02" +
		"nh\x03\x02\x02\x02nj\x03\x02\x02\x02ox\x03\x02\x02\x02pq\f\x04\x02\x02" +
		"qw\x05\x18\r\x05rs\f\x03\x02\x02st\x05\x10\t\x02tu\x05\x18\r\x04uw\x03" +
		"\x02\x02\x02vp\x03\x02\x02\x02vr\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03" +
		"\x02\x02\x02xy\x03\x02\x02\x02y\x19\x03\x02\x02\x02zx\x03\x02\x02\x02" +
		"{|\x05\x18\r\x02|\x1B\x03\x02\x02\x02}~\b\x0F\x01\x02~\x7F\x05\x1A\x0E" +
		"\x02\x7F\x85\x03\x02\x02\x02\x80\x81\f\x04\x02\x02\x81\x82\x07\x1E\x02" +
		"\x02\x82\x84\x05\x1C\x0F\x05\x83\x80\x03\x02\x02\x02\x84\x87\x03\x02\x02" +
		"\x02\x85\x83\x03\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x1D\x03\x02\x02" +
		"\x02\x87\x85\x03\x02\x02\x02\x10!(:CIKQV^envx\x85";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!smlParser.__ATN) {
			smlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(smlParser._serializedATN));
		}

		return smlParser.__ATN;
	}

}

export class NumberContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return smlParser.RULE_number; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public int(): IntContext | undefined {
		return this.tryGetRuleContext(0, IntContext);
	}
	public real(): RealContext | undefined {
		return this.tryGetRuleContext(0, RealContext);
	}
	public bool(): BoolContext | undefined {
		return this.tryGetRuleContext(0, BoolContext);
	}
	public char(): CharContext | undefined {
		return this.tryGetRuleContext(0, CharContext);
	}
	public string(): StringContext | undefined {
		return this.tryGetRuleContext(0, StringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_constant; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitConstant) {
			return visitor.visitConstant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntContext extends ParserRuleContext {
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_int; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterInt) {
			listener.enterInt(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitInt) {
			listener.exitInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitInt) {
			return visitor.visitInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RealContext extends ParserRuleContext {
	public number(): NumberContext[];
	public number(i: number): NumberContext;
	public number(i?: number): NumberContext | NumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberContext);
		} else {
			return this.getRuleContext(i, NumberContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_real; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterReal) {
			listener.enterReal(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitReal) {
			listener.exitReal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitReal) {
			return visitor.visitReal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BoolContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(smlParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(smlParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_bool; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterBool) {
			listener.enterBool(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitBool) {
			listener.exitBool(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitBool) {
			return visitor.visitBool(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CharContext extends ParserRuleContext {
	public ASCII(): TerminalNode { return this.getToken(smlParser.ASCII, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_char; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterChar) {
			listener.enterChar(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitChar) {
			listener.exitChar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitChar) {
			return visitor.visitChar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public ASCII(): TerminalNode[];
	public ASCII(i: number): TerminalNode;
	public ASCII(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(smlParser.ASCII);
		} else {
			return this.getToken(smlParser.ASCII, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_string; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
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


export class LabelContext extends ParserRuleContext {
	public id(): IdContext | undefined {
		return this.tryGetRuleContext(0, IdContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_label; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_type; }
	public copyFrom(ctx: TypeContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeVarContext extends TypeContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterTypeVar) {
			listener.enterTypeVar(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitTypeVar) {
			listener.exitTypeVar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitTypeVar) {
			return visitor.visitTypeVar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeParContext extends TypeContext {
	public _inner!: ExpContext;
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterTypePar) {
			listener.enterTypePar(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitTypePar) {
			listener.exitTypePar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitTypePar) {
			return visitor.visitTypePar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeFunContext extends TypeContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	constructor(ctx: TypeContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterTypeFun) {
			listener.enterTypeFun(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitTypeFun) {
			listener.exitTypeFun(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitTypeFun) {
			return visitor.visitTypeFun(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_exp; }
	public copyFrom(ctx: ExpContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpConContext extends ExpContext {
	public constant(): ConstantContext {
		return this.getRuleContext(0, ConstantContext);
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpCon) {
			listener.enterExpCon(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpCon) {
			listener.exitExpCon(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpCon) {
			return visitor.visitExpCon(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpParContext extends ExpContext {
	public _inner!: ExpContext;
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpPar) {
			listener.enterExpPar(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpPar) {
			listener.exitExpPar(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpPar) {
			return visitor.visitExpPar(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpAppPrefixContext extends ExpContext {
	public _operator!: ExpContext;
	public _operand!: ExpContext;
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpAppPrefix) {
			listener.enterExpAppPrefix(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpAppPrefix) {
			listener.exitExpAppPrefix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpAppPrefix) {
			return visitor.visitExpAppPrefix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExpAppInfixContext extends ExpContext {
	public _left!: ExpContext;
	public _operator!: IdContext;
	public _right!: ExpContext;
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpAppInfix) {
			listener.enterExpAppInfix(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpAppInfix) {
			listener.exitExpAppInfix(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpAppInfix) {
			return visitor.visitExpAppInfix(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_dec; }
	public copyFrom(ctx: DecContext): void {
		super.copyFrom(ctx);
	}
}
export class DecExpContext extends DecContext {
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterDecExp) {
			listener.enterDecExp(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitDecExp) {
			listener.exitDecExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitDecExp) {
			return visitor.visitDecExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_prog; }
	public copyFrom(ctx: ProgContext): void {
		super.copyFrom(ctx);
	}
}
export class ProgSeqContext extends ProgContext {
	public _left!: ProgContext;
	public _right!: ProgContext;
	public prog(): ProgContext[];
	public prog(i: number): ProgContext;
	public prog(i?: number): ProgContext | ProgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProgContext);
		} else {
			return this.getRuleContext(i, ProgContext);
		}
	}
	constructor(ctx: ProgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterProgSeq) {
			listener.enterProgSeq(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitProgSeq) {
			listener.exitProgSeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitProgSeq) {
			return visitor.visitProgSeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ProgDecContext extends ProgContext {
	public dec(): DecContext {
		return this.getRuleContext(0, DecContext);
	}
	constructor(ctx: ProgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterProgDec) {
			listener.enterProgDec(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitProgDec) {
			listener.exitProgDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitProgDec) {
			return visitor.visitProgDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


