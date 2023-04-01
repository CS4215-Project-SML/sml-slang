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
	public static readonly CHAR = 24;
	public static readonly STR = 25;
	public static readonly REAL = 26;
	public static readonly INT = 27;
	public static readonly BOOL = 28;
	public static readonly ABSTYPE = 29;
	public static readonly AND = 30;
	public static readonly ANDALSO = 31;
	public static readonly AS = 32;
	public static readonly CASE = 33;
	public static readonly DATATYPE = 34;
	public static readonly DO = 35;
	public static readonly ELSE = 36;
	public static readonly END = 37;
	public static readonly EXCEPTION = 38;
	public static readonly FN = 39;
	public static readonly FUN = 40;
	public static readonly HANDLE = 41;
	public static readonly IF = 42;
	public static readonly IN = 43;
	public static readonly INFIX = 44;
	public static readonly INFIXR = 45;
	public static readonly LET = 46;
	public static readonly LOCAL = 47;
	public static readonly NONFIX = 48;
	public static readonly OF = 49;
	public static readonly OP = 50;
	public static readonly OPEN = 51;
	public static readonly ORELSE = 52;
	public static readonly RAISE = 53;
	public static readonly REC = 54;
	public static readonly THEN = 55;
	public static readonly TYPE = 56;
	public static readonly VAL = 57;
	public static readonly WITH = 58;
	public static readonly WITHTYPE = 59;
	public static readonly WHILE = 60;
	public static readonly TRUE = 61;
	public static readonly FALSE = 62;
	public static readonly ID = 63;
	public static readonly DIGIT = 64;
	public static readonly LETTER = 65;
	public static readonly NEWLINE = 66;
	public static readonly WHITESPACE = 67;
	public static readonly RULE_program = 0;
	public static readonly RULE_declaration = 1;
	public static readonly RULE_valbind = 2;
	public static readonly RULE_funbind = 3;
	public static readonly RULE_pattern = 4;
	public static readonly RULE_matching = 5;
	public static readonly RULE_matchingrule = 6;
	public static readonly RULE_keypattern = 7;
	public static readonly RULE_expression = 8;
	public static readonly RULE_keyvalue = 9;
	public static readonly RULE_label = 10;
	public static readonly RULE_identifier = 11;
	public static readonly RULE_constant = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "declaration", "valbind", "funbind", "pattern", "matching", 
		"matchingrule", "keypattern", "expression", "keyvalue", "label", "identifier", 
		"constant",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'='", "'|'", "'::'", "'('", "','", "')'", "'{'", "'}'", 
		"'['", "']'", "'=>'", "'*'", "'/'", "'+'", "'-'", "'^'", "'<>'", "'<'", 
		"'<='", "'>'", "'>='", "'#'", undefined, undefined, undefined, undefined, 
		undefined, "'abstype'", "'and'", "'andalso'", "'as'", "'case'", "'datatype'", 
		"'do'", "'else'", "'end'", "'exception'", "'fn'", "'fun'", "'handle'", 
		"'if'", "'in'", "'infix'", "'infixr'", "'let'", "'local'", "'nonfix'", 
		"'of'", "'op'", "'open'", "'orelse'", "'raise'", "'rec'", "'then'", "'type'", 
		"'val'", "'with'", "'withtype'", "'while'", "'true'", "'false'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "CHAR", "STR", "REAL", "INT", "BOOL", 
		"ABSTYPE", "AND", "ANDALSO", "AS", "CASE", "DATATYPE", "DO", "ELSE", "END", 
		"EXCEPTION", "FN", "FUN", "HANDLE", "IF", "IN", "INFIX", "INFIXR", "LET", 
		"LOCAL", "NONFIX", "OF", "OP", "OPEN", "ORELSE", "RAISE", "REC", "THEN", 
		"TYPE", "VAL", "WITH", "WITHTYPE", "WHILE", "TRUE", "FALSE", "ID", "DIGIT", 
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
			this.state = 29;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				_localctx = new ProgramDeclarationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 27;
				this.declaration(0);
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
			this.state = 36;
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
					this.state = 31;
					if (!(this.precpred(this._ctx, 3))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
					}
					this.state = 32;
					this.match(smlParser.T__0);
					this.state = 33;
					(_localctx as ProgramSequenceContext)._right = this.program(4);
					}
					}
				}
				this.state = 38;
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

	public declaration(): DeclarationContext;
	public declaration(_p: number): DeclarationContext;
	// @RuleVersion(0)
	public declaration(_p?: number): DeclarationContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, _parentState);
		let _prevctx: DeclarationContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, smlParser.RULE_declaration, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.FUN:
				{
				_localctx = new DeclarationFunctionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 40;
				this.match(smlParser.FUN);
				this.state = 41;
				this.funbind();
				}
				break;
			case smlParser.VAL:
				{
				_localctx = new DeclarationValueContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 42;
				this.match(smlParser.VAL);
				this.state = 43;
				this.valbind();
				}
				break;
			case smlParser.T__4:
			case smlParser.T__7:
			case smlParser.T__9:
			case smlParser.T__22:
			case smlParser.CHAR:
			case smlParser.STR:
			case smlParser.REAL:
			case smlParser.INT:
			case smlParser.BOOL:
			case smlParser.FN:
			case smlParser.IF:
			case smlParser.LET:
			case smlParser.ID:
				{
				_localctx = new DeclarationExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 44;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 54;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new DeclarationSequenceContext(new DeclarationContext(_parentctx, _parentState));
					(_localctx as DeclarationSequenceContext)._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_declaration);
					this.state = 47;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 49;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === smlParser.T__0) {
						{
						this.state = 48;
						this.match(smlParser.T__0);
						}
					}

					this.state = 51;
					(_localctx as DeclarationSequenceContext)._right = this.declaration(5);
					}
					}
				}
				this.state = 56;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
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
	public valbind(): ValbindContext {
		let _localctx: ValbindContext = new ValbindContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, smlParser.RULE_valbind);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			_localctx._name = this.identifier();
			this.state = 58;
			this.match(smlParser.T__1);
			this.state = 59;
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
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 61;
			_localctx._name = this.identifier();
			this.state = 62;
			_localctx._pat = this.pattern(0);
			this.state = 63;
			this.match(smlParser.T__1);
			this.state = 64;
			_localctx._body = this.expression(0);
			this.state = 69;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 65;
					this.match(smlParser.T__2);
					this.state = 66;
					_localctx._rest = this.funbind();
					}
					}
				}
				this.state = 71;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
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
			this.state = 117;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				_localctx = new PatternTupleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 73;
				this.match(smlParser.T__4);
				this.state = 74;
				this.pattern(0);
				this.state = 75;
				this.match(smlParser.T__5);
				this.state = 76;
				this.pattern(0);
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === smlParser.T__5) {
					{
					{
					this.state = 77;
					this.match(smlParser.T__5);
					this.state = 78;
					this.pattern(0);
					}
					}
					this.state = 83;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 84;
				this.match(smlParser.T__6);
				}
				break;

			case 2:
				{
				_localctx = new PatternParanthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 86;
				this.match(smlParser.T__4);
				this.state = 87;
				this.pattern(0);
				this.state = 88;
				this.match(smlParser.T__6);
				}
				break;

			case 3:
				{
				_localctx = new PatternRecordContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 90;
				this.match(smlParser.T__7);
				this.state = 101;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 92;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === smlParser.INT || _la === smlParser.ID) {
						{
						this.state = 91;
						this.keypattern();
						}
					}

					}
					break;

				case 2:
					{
					{
					this.state = 94;
					this.keypattern();
					this.state = 97;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 95;
						this.match(smlParser.T__5);
						this.state = 96;
						this.keypattern();
						}
						}
						this.state = 99;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === smlParser.T__5);
					}
					}
					break;
				}
				this.state = 103;
				this.match(smlParser.T__8);
				}
				break;

			case 4:
				{
				_localctx = new PatternListContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 104;
				this.match(smlParser.T__9);
				this.state = 105;
				this.pattern(0);
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === smlParser.T__5) {
					{
					{
					this.state = 106;
					this.match(smlParser.T__5);
					this.state = 107;
					this.pattern(0);
					}
					}
					this.state = 112;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 113;
				this.match(smlParser.T__10);
				}
				break;

			case 5:
				{
				_localctx = new PatternConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 115;
				this.constant();
				}
				break;

			case 6:
				{
				_localctx = new PatternIdentifierContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 116;
				this.identifier();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 124;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new PatternInfixContext(new PatternContext(_parentctx, _parentState));
					(_localctx as PatternInfixContext)._left = _prevctx;
					this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_pattern);
					this.state = 119;
					if (!(this.precpred(this._ctx, 7))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
					}
					this.state = 120;
					this.match(smlParser.T__3);
					this.state = 121;
					(_localctx as PatternInfixContext)._right = this.pattern(7);
					}
					}
				}
				this.state = 126;
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
	public matching(): MatchingContext {
		let _localctx: MatchingContext = new MatchingContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, smlParser.RULE_matching);
		try {
			this.state = 132;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				_localctx = new MatchingSequenceContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 127;
				(_localctx as MatchingSequenceContext)._matchrule = this.matchingrule();
				this.state = 128;
				this.match(smlParser.T__2);
				this.state = 129;
				(_localctx as MatchingSequenceContext)._rest = this.matching();
				}
				break;

			case 2:
				_localctx = new MatchingAtomicContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 131;
				(_localctx as MatchingAtomicContext)._matchrule = this.matchingrule();
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
	public matchingrule(): MatchingruleContext {
		let _localctx: MatchingruleContext = new MatchingruleContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, smlParser.RULE_matchingrule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			_localctx._pat = this.pattern(0);
			this.state = 135;
			this.match(smlParser.T__11);
			this.state = 136;
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
	public keypattern(): KeypatternContext {
		let _localctx: KeypatternContext = new KeypatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, smlParser.RULE_keypattern);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			_localctx._key = this.label();
			this.state = 139;
			this.match(smlParser.T__1);
			this.state = 140;
			_localctx._pat = this.pattern(0);
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
		let _startState: number = 16;
		this.enterRecursionRule(_localctx, 16, smlParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				_localctx = new ExpressionLambdaContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 143;
				this.match(smlParser.FN);
				this.state = 144;
				this.matching();
				}
				break;

			case 2:
				{
				_localctx = new ExpressionLetContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 145;
				this.match(smlParser.LET);
				this.state = 146;
				(_localctx as ExpressionLetContext)._dec = this.declaration(0);
				this.state = 147;
				this.match(smlParser.IN);
				this.state = 148;
				(_localctx as ExpressionLetContext)._exp = this.expression(0);
				this.state = 149;
				this.match(smlParser.END);
				}
				break;

			case 3:
				{
				_localctx = new ExpressionParenthesesContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 151;
				this.match(smlParser.T__4);
				this.state = 152;
				(_localctx as ExpressionParenthesesContext)._inner = this.expression(0);
				this.state = 153;
				this.match(smlParser.T__6);
				}
				break;

			case 4:
				{
				_localctx = new ExpressionConditionalContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 155;
				this.match(smlParser.IF);
				this.state = 156;
				(_localctx as ExpressionConditionalContext)._pred = this.expression(0);
				this.state = 157;
				this.match(smlParser.THEN);
				this.state = 158;
				(_localctx as ExpressionConditionalContext)._cons = this.expression(0);
				this.state = 159;
				this.match(smlParser.ELSE);
				this.state = 160;
				(_localctx as ExpressionConditionalContext)._alt = this.expression(7);
				}
				break;

			case 5:
				{
				_localctx = new ExpressionRecordContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 162;
				this.match(smlParser.T__7);
				this.state = 173;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 164;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === smlParser.INT || _la === smlParser.ID) {
						{
						this.state = 163;
						this.keyvalue();
						}
					}

					}
					break;

				case 2:
					{
					{
					this.state = 166;
					this.keyvalue();
					this.state = 169;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 167;
						this.match(smlParser.T__5);
						this.state = 168;
						this.keyvalue();
						}
						}
						this.state = 171;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === smlParser.T__5);
					}
					}
					break;
				}
				this.state = 175;
				this.match(smlParser.T__8);
				}
				break;

			case 6:
				{
				_localctx = new ExpressionTupleContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 176;
				this.match(smlParser.T__4);
				this.state = 177;
				this.expression(0);
				this.state = 178;
				this.match(smlParser.T__5);
				this.state = 179;
				this.expression(0);
				this.state = 184;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === smlParser.T__5) {
					{
					{
					this.state = 180;
					this.match(smlParser.T__5);
					this.state = 181;
					this.expression(0);
					}
					}
					this.state = 186;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 187;
				this.match(smlParser.T__6);
				}
				break;

			case 7:
				{
				_localctx = new ExpressionListContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 189;
				this.match(smlParser.T__9);
				this.state = 200;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 191;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smlParser.T__4) | (1 << smlParser.T__7) | (1 << smlParser.T__9) | (1 << smlParser.T__22) | (1 << smlParser.CHAR) | (1 << smlParser.STR) | (1 << smlParser.REAL) | (1 << smlParser.INT) | (1 << smlParser.BOOL))) !== 0) || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (smlParser.FN - 39)) | (1 << (smlParser.IF - 39)) | (1 << (smlParser.LET - 39)) | (1 << (smlParser.ID - 39)))) !== 0)) {
						{
						this.state = 190;
						this.expression(0);
						}
					}

					}
					break;

				case 2:
					{
					{
					this.state = 193;
					this.expression(0);
					this.state = 196;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 194;
						this.match(smlParser.T__5);
						this.state = 195;
						this.expression(0);
						}
						}
						this.state = 198;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === smlParser.T__5);
					}
					}
					break;
				}
				this.state = 202;
				this.match(smlParser.T__10);
				}
				break;

			case 8:
				{
				_localctx = new ExpressionRecordSelectorContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 203;
				this.match(smlParser.T__22);
				this.state = 204;
				this.label();
				}
				break;

			case 9:
				{
				_localctx = new ExpressionConstantContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 205;
				this.constant();
				}
				break;

			case 10:
				{
				_localctx = new ExpressionIdentifierContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 206;
				this.identifier();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 228;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 226;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionApplicationPrefixContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionApplicationPrefixContext)._operator = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression);
						this.state = 209;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 210;
						(_localctx as ExpressionApplicationPrefixContext)._operand = this.expression(14);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionApplicationInfixContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionApplicationInfixContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression);
						this.state = 211;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 212;
						(_localctx as ExpressionApplicationInfixContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === smlParser.T__12 || _la === smlParser.T__13)) {
							(_localctx as ExpressionApplicationInfixContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 213;
						(_localctx as ExpressionApplicationInfixContext)._right = this.expression(13);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionApplicationInfixContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionApplicationInfixContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression);
						this.state = 214;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 215;
						(_localctx as ExpressionApplicationInfixContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smlParser.T__14) | (1 << smlParser.T__15) | (1 << smlParser.T__16))) !== 0))) {
							(_localctx as ExpressionApplicationInfixContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 216;
						(_localctx as ExpressionApplicationInfixContext)._right = this.expression(12);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionApplicationInfixContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionApplicationInfixContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression);
						this.state = 217;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 218;
						(_localctx as ExpressionApplicationInfixContext)._operator = this.match(smlParser.T__3);
						this.state = 219;
						(_localctx as ExpressionApplicationInfixContext)._right = this.expression(11);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionApplicationInfixContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionApplicationInfixContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression);
						this.state = 220;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 221;
						(_localctx as ExpressionApplicationInfixContext)._operator = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << smlParser.T__1) | (1 << smlParser.T__17) | (1 << smlParser.T__18) | (1 << smlParser.T__19) | (1 << smlParser.T__20) | (1 << smlParser.T__21))) !== 0))) {
							(_localctx as ExpressionApplicationInfixContext)._operator = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 222;
						(_localctx as ExpressionApplicationInfixContext)._right = this.expression(10);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionApplicationInfixContext(new ExpressionContext(_parentctx, _parentState));
						(_localctx as ExpressionApplicationInfixContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression);
						this.state = 223;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 224;
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
						this.state = 225;
						(_localctx as ExpressionApplicationInfixContext)._right = this.expression(9);
						}
						break;
					}
					}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
		this.enterRule(_localctx, 18, smlParser.RULE_keyvalue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 231;
			_localctx._key = this.label();
			this.state = 232;
			this.match(smlParser.T__1);
			this.state = 233;
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
		this.enterRule(_localctx, 20, smlParser.RULE_label);
		try {
			this.state = 237;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.ID:
				_localctx = new LabelIdentifierContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 235;
				this.identifier();
				}
				break;
			case smlParser.INT:
				_localctx = new LabelIntContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 236;
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
		this.enterRule(_localctx, 22, smlParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
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
		this.enterRule(_localctx, 24, smlParser.RULE_constant);
		try {
			this.state = 246;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case smlParser.INT:
				_localctx = new ConstantIntContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 241;
				this.match(smlParser.INT);
				}
				break;
			case smlParser.REAL:
				_localctx = new ConstantRealContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 242;
				this.match(smlParser.REAL);
				}
				break;
			case smlParser.BOOL:
				_localctx = new ConstantBoolContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 243;
				this.match(smlParser.BOOL);
				}
				break;
			case smlParser.CHAR:
				_localctx = new ConstantCharContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 244;
				this.match(smlParser.CHAR);
				}
				break;
			case smlParser.STR:
				_localctx = new ConstantStrContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 245;
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

		case 1:
			return this.declaration_sempred(_localctx as DeclarationContext, predIndex);

		case 4:
			return this.pattern_sempred(_localctx as PatternContext, predIndex);

		case 8:
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
	private declaration_sempred(_localctx: DeclarationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private pattern_sempred(_localctx: PatternContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 13);

		case 4:
			return this.precpred(this._ctx, 12);

		case 5:
			return this.precpred(this._ctx, 11);

		case 6:
			return this.precpred(this._ctx, 10);

		case 7:
			return this.precpred(this._ctx, 9);

		case 8:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\xFB\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x03\x02\x03\x02\x05\x02 \n\x02\x03\x02\x03\x02\x03" +
		"\x02\x07\x02%\n\x02\f\x02\x0E\x02(\v\x02\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x030\n\x03\x03\x03\x03\x03\x05\x034\n\x03\x03\x03" +
		"\x07\x037\n\x03\f\x03\x0E\x03:\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05F\n\x05\f\x05\x0E" +
		"\x05I\v\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07" +
		"\x06R\n\x06\f\x06\x0E\x06U\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06_\n\x06\x03\x06\x03\x06\x03\x06\x06\x06" +
		"d\n\x06\r\x06\x0E\x06e\x05\x06h\n\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x07\x06o\n\x06\f\x06\x0E\x06r\v\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06x\n\x06\x03\x06\x03\x06\x03\x06\x07\x06}\n\x06\f\x06\x0E\x06" +
		"\x80\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x87\n\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xA7\n\n\x03\n\x03\n\x03\n\x06\n" +
		"\xAC\n\n\r\n\x0E\n\xAD\x05\n\xB0\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x03\n\x07\n\xB9\n\n\f\n\x0E\n\xBC\v\n\x03\n\x03\n\x03\n\x03\n\x05\n" +
		"\xC2\n\n\x03\n\x03\n\x03\n\x06\n\xC7\n\n\r\n\x0E\n\xC8\x05\n\xCB\n\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x05\n\xD2\n\n\x03\n\x03\n\x03\n\x03\n\x03\n" +
		"\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
		"\n\x07\n\xE5\n\n\f\n\x0E\n\xE8\v\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f" +
		"\x05\f\xF0\n\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05" +
		"\x0E\xF9\n\x0E\x03\x0E\x02\x02\x06\x02\x04\n\x12\x0F\x02\x02\x04\x02\x06" +
		"\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
		"\x1A\x02\x02\x06\x03\x02\x0F\x10\x03\x02\x11\x13\x04\x02\x04\x04\x14\x18" +
		"\x04\x02!!66\x02\u011B\x02\x1F\x03\x02\x02\x02\x04/\x03\x02\x02\x02\x06" +
		";\x03\x02\x02\x02\b?\x03\x02\x02\x02\nw\x03\x02\x02\x02\f\x86\x03\x02" +
		"\x02\x02\x0E\x88\x03\x02\x02\x02\x10\x8C\x03\x02\x02\x02\x12\xD1\x03\x02" +
		"\x02\x02\x14\xE9\x03\x02\x02\x02\x16\xEF\x03\x02\x02\x02\x18\xF1\x03\x02" +
		"\x02\x02\x1A\xF8\x03\x02\x02\x02\x1C\x1D\b\x02\x01\x02\x1D \x05\x04\x03" +
		"\x02\x1E \x03\x02\x02\x02\x1F\x1C\x03\x02\x02\x02\x1F\x1E\x03\x02\x02" +
		"\x02 &\x03\x02\x02\x02!\"\f\x05\x02\x02\"#\x07\x03\x02\x02#%\x05\x02\x02" +
		"\x06$!\x03\x02\x02\x02%(\x03\x02\x02\x02&$\x03\x02\x02\x02&\'\x03\x02" +
		"\x02\x02\'\x03\x03\x02\x02\x02(&\x03\x02\x02\x02)*\b\x03\x01\x02*+\x07" +
		"*\x02\x02+0\x05\b\x05\x02,-\x07;\x02\x02-0\x05\x06\x04\x02.0\x05\x12\n" +
		"\x02/)\x03\x02\x02\x02/,\x03\x02\x02\x02/.\x03\x02\x02\x0208\x03\x02\x02" +
		"\x0213\f\x06\x02\x0224\x07\x03\x02\x0232\x03\x02\x02\x0234\x03\x02\x02" +
		"\x0245\x03\x02\x02\x0257\x05\x04\x03\x0761\x03\x02\x02\x027:\x03\x02\x02" +
		"\x0286\x03\x02\x02\x0289\x03\x02\x02\x029\x05\x03\x02\x02\x02:8\x03\x02" +
		"\x02\x02;<\x05\x18\r\x02<=\x07\x04\x02\x02=>\x05\x12\n\x02>\x07\x03\x02" +
		"\x02\x02?@\x05\x18\r\x02@A\x05\n\x06\x02AB\x07\x04\x02\x02BG\x05\x12\n" +
		"\x02CD\x07\x05\x02\x02DF\x05\b\x05\x02EC\x03\x02\x02\x02FI\x03\x02\x02" +
		"\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02H\t\x03\x02\x02\x02IG\x03\x02" +
		"\x02\x02JK\b\x06\x01\x02KL\x07\x07\x02\x02LM\x05\n\x06\x02MN\x07\b\x02" +
		"\x02NS\x05\n\x06\x02OP\x07\b\x02\x02PR\x05\n\x06\x02QO\x03\x02\x02\x02" +
		"RU\x03\x02\x02\x02SQ\x03\x02\x02\x02ST\x03\x02\x02\x02TV\x03\x02\x02\x02" +
		"US\x03\x02\x02\x02VW\x07\t\x02\x02Wx\x03\x02\x02\x02XY\x07\x07\x02\x02" +
		"YZ\x05\n\x06\x02Z[\x07\t\x02\x02[x\x03\x02\x02\x02\\g\x07\n\x02\x02]_" +
		"\x05\x10\t\x02^]\x03\x02\x02\x02^_\x03\x02\x02\x02_h\x03\x02\x02\x02`" +
		"c\x05\x10\t\x02ab\x07\b\x02\x02bd\x05\x10\t\x02ca\x03\x02\x02\x02de\x03" +
		"\x02\x02\x02ec\x03\x02\x02\x02ef\x03\x02\x02\x02fh\x03\x02\x02\x02g^\x03" +
		"\x02\x02\x02g`\x03\x02\x02\x02hi\x03\x02\x02\x02ix\x07\v\x02\x02jk\x07" +
		"\f\x02\x02kp\x05\n\x06\x02lm\x07\b\x02\x02mo\x05\n\x06\x02nl\x03\x02\x02" +
		"\x02or\x03\x02\x02\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02qs\x03\x02\x02" +
		"\x02rp\x03\x02\x02\x02st\x07\r\x02\x02tx\x03\x02\x02\x02ux\x05\x1A\x0E" +
		"\x02vx\x05\x18\r\x02wJ\x03\x02\x02\x02wX\x03\x02\x02\x02w\\\x03\x02\x02" +
		"\x02wj\x03\x02\x02\x02wu\x03\x02\x02\x02wv\x03\x02\x02\x02x~\x03\x02\x02" +
		"\x02yz\f\t\x02\x02z{\x07\x06\x02\x02{}\x05\n\x06\t|y\x03\x02\x02\x02}" +
		"\x80\x03\x02\x02\x02~|\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\v\x03" +
		"\x02\x02\x02\x80~\x03\x02\x02\x02\x81\x82\x05\x0E\b\x02\x82\x83\x07\x05" +
		"\x02\x02\x83\x84\x05\f\x07\x02\x84\x87\x03\x02\x02\x02\x85\x87\x05\x0E" +
		"\b\x02\x86\x81\x03\x02\x02\x02\x86\x85\x03\x02\x02\x02\x87\r\x03\x02\x02" +
		"\x02\x88\x89\x05\n\x06\x02\x89\x8A\x07\x0E\x02\x02\x8A\x8B\x05\x12\n\x02" +
		"\x8B\x0F\x03\x02\x02\x02\x8C\x8D\x05\x16\f\x02\x8D\x8E\x07\x04\x02\x02" +
		"\x8E\x8F\x05\n\x06\x02\x8F\x11\x03\x02\x02\x02\x90\x91\b\n\x01\x02\x91" +
		"\x92\x07)\x02\x02\x92\xD2\x05\f\x07\x02\x93\x94\x070\x02\x02\x94\x95\x05" +
		"\x04\x03\x02\x95\x96\x07-\x02\x02\x96\x97\x05\x12\n\x02\x97\x98\x07\'" +
		"\x02\x02\x98\xD2\x03\x02\x02\x02\x99\x9A\x07\x07\x02\x02\x9A\x9B\x05\x12" +
		"\n\x02\x9B\x9C\x07\t\x02\x02\x9C\xD2\x03\x02\x02\x02\x9D\x9E\x07,\x02" +
		"\x02\x9E\x9F\x05\x12\n\x02\x9F\xA0\x079\x02\x02\xA0\xA1\x05\x12\n\x02" +
		"\xA1\xA2\x07&\x02\x02\xA2\xA3\x05\x12\n\t\xA3\xD2\x03\x02\x02\x02\xA4" +
		"\xAF\x07\n\x02\x02\xA5\xA7\x05\x14\v\x02\xA6\xA5\x03\x02\x02\x02\xA6\xA7" +
		"\x03\x02\x02\x02\xA7\xB0\x03\x02\x02\x02\xA8\xAB\x05\x14\v\x02\xA9\xAA" +
		"\x07\b\x02\x02\xAA\xAC\x05\x14\v\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAD\x03" +
		"\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE\xB0\x03" +
		"\x02\x02\x02\xAF\xA6\x03\x02\x02\x02\xAF\xA8\x03\x02\x02\x02\xB0\xB1\x03" +
		"\x02\x02\x02\xB1\xD2\x07\v\x02\x02\xB2\xB3\x07\x07\x02\x02\xB3\xB4\x05" +
		"\x12\n\x02\xB4\xB5\x07\b\x02\x02\xB5\xBA\x05\x12\n\x02\xB6\xB7\x07\b\x02" +
		"\x02\xB7\xB9\x05\x12\n\x02\xB8\xB6\x03\x02\x02\x02\xB9\xBC\x03\x02\x02" +
		"\x02\xBA\xB8\x03\x02\x02\x02\xBA\xBB\x03\x02\x02\x02\xBB\xBD\x03\x02\x02" +
		"\x02\xBC\xBA\x03\x02\x02\x02\xBD\xBE\x07\t\x02\x02\xBE\xD2\x03\x02\x02" +
		"\x02\xBF\xCA\x07\f\x02\x02\xC0\xC2\x05\x12\n\x02\xC1\xC0\x03\x02\x02\x02" +
		"\xC1\xC2\x03\x02\x02\x02\xC2\xCB\x03\x02\x02\x02\xC3\xC6\x05\x12\n\x02" +
		"\xC4\xC5\x07\b\x02\x02\xC5\xC7\x05\x12\n\x02\xC6\xC4\x03\x02\x02\x02\xC7" +
		"\xC8\x03\x02\x02\x02\xC8\xC6\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9" +
		"\xCB\x03\x02\x02\x02\xCA\xC1\x03\x02\x02\x02\xCA\xC3\x03\x02\x02\x02\xCB" +
		"\xCC\x03\x02\x02\x02\xCC\xD2\x07\r\x02\x02\xCD\xCE\x07\x19\x02\x02\xCE" +
		"\xD2\x05\x16\f\x02\xCF\xD2\x05\x1A\x0E\x02\xD0\xD2\x05\x18\r\x02\xD1\x90" +
		"\x03\x02\x02\x02\xD1\x93\x03\x02\x02\x02\xD1\x99\x03\x02\x02\x02\xD1\x9D" +
		"\x03\x02\x02\x02\xD1\xA4\x03\x02\x02\x02\xD1\xB2\x03\x02\x02\x02\xD1\xBF" +
		"\x03\x02\x02\x02\xD1\xCD\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD1\xD0" +
		"\x03\x02\x02\x02\xD2\xE6\x03\x02\x02\x02\xD3\xD4\f\x0F\x02\x02\xD4\xE5" +
		"\x05\x12\n\x10\xD5\xD6\f\x0E\x02\x02\xD6\xD7\t\x02\x02\x02\xD7\xE5\x05" +
		"\x12\n\x0F\xD8\xD9\f\r\x02\x02\xD9\xDA\t\x03\x02\x02\xDA\xE5\x05\x12\n" +
		"\x0E\xDB\xDC\f\f\x02\x02\xDC\xDD\x07\x06\x02\x02\xDD\xE5\x05\x12\n\r\xDE" +
		"\xDF\f\v\x02\x02\xDF\xE0\t\x04\x02\x02\xE0\xE5\x05\x12\n\f\xE1\xE2\f\n" +
		"\x02\x02\xE2\xE3\t\x05\x02\x02\xE3\xE5\x05\x12\n\v\xE4\xD3\x03\x02\x02" +
		"\x02\xE4\xD5\x03\x02\x02\x02\xE4\xD8\x03\x02\x02\x02\xE4\xDB\x03\x02\x02" +
		"\x02\xE4\xDE\x03\x02\x02\x02\xE4\xE1\x03\x02\x02\x02\xE5\xE8\x03\x02\x02" +
		"\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\x13\x03\x02\x02" +
		"\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEA\x05\x16\f\x02\xEA\xEB\x07\x04\x02" +
		"\x02\xEB\xEC\x05\x12\n\x02\xEC\x15\x03\x02\x02\x02\xED\xF0\x05\x18\r\x02" +
		"\xEE\xF0\x07\x1D\x02\x02\xEF\xED\x03\x02\x02\x02\xEF\xEE\x03\x02\x02\x02" +
		"\xF0\x17\x03\x02\x02\x02\xF1\xF2\x07A\x02\x02\xF2\x19\x03\x02\x02\x02" +
		"\xF3\xF9\x07\x1D\x02\x02\xF4\xF9\x07\x1C\x02\x02\xF5\xF9\x07\x1E\x02\x02" +
		"\xF6\xF9\x07\x1A\x02\x02\xF7\xF9\x07\x1B\x02\x02\xF8\xF3\x03\x02\x02\x02" +
		"\xF8\xF4\x03\x02\x02\x02\xF8\xF5\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02" +
		"\xF8\xF7\x03\x02\x02\x02\xF9\x1B\x03\x02\x02\x02\x1C\x1F&/38GS^egpw~\x86" +
		"\xA6\xAD\xAF\xBA\xC1\xC8\xCA\xD1\xE4\xE6\xEF\xF8";
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
export class DeclarationSequenceContext extends DeclarationContext {
	public _left!: DeclarationContext;
	public _right!: DeclarationContext;
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	constructor(ctx: DeclarationContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterDeclarationSequence) {
			listener.enterDeclarationSequence(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitDeclarationSequence) {
			listener.exitDeclarationSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitDeclarationSequence) {
			return visitor.visitDeclarationSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
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


export class FunbindContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	public _pat!: PatternContext;
	public _body!: ExpressionContext;
	public _rest!: FunbindContext;
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public funbind(): FunbindContext[];
	public funbind(i: number): FunbindContext;
	public funbind(i?: number): FunbindContext | FunbindContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FunbindContext);
		} else {
			return this.getRuleContext(i, FunbindContext);
		}
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
	public _left!: PatternContext;
	public _right!: PatternContext;
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
export class PatternParanthesesContext extends PatternContext {
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	constructor(ctx: PatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterPatternParantheses) {
			listener.enterPatternParantheses(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitPatternParantheses) {
			listener.exitPatternParantheses(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitPatternParantheses) {
			return visitor.visitPatternParantheses(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatternRecordContext extends PatternContext {
	public keypattern(): KeypatternContext[];
	public keypattern(i: number): KeypatternContext;
	public keypattern(i?: number): KeypatternContext | KeypatternContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeypatternContext);
		} else {
			return this.getRuleContext(i, KeypatternContext);
		}
	}
	constructor(ctx: PatternContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterPatternRecord) {
			listener.enterPatternRecord(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitPatternRecord) {
			listener.exitPatternRecord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitPatternRecord) {
			return visitor.visitPatternRecord(this);
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


export class MatchingContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_matching; }
	public copyFrom(ctx: MatchingContext): void {
		super.copyFrom(ctx);
	}
}
export class MatchingSequenceContext extends MatchingContext {
	public _matchrule!: MatchingruleContext;
	public _rest!: MatchingContext;
	public matchingrule(): MatchingruleContext {
		return this.getRuleContext(0, MatchingruleContext);
	}
	public matching(): MatchingContext {
		return this.getRuleContext(0, MatchingContext);
	}
	constructor(ctx: MatchingContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterMatchingSequence) {
			listener.enterMatchingSequence(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitMatchingSequence) {
			listener.exitMatchingSequence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitMatchingSequence) {
			return visitor.visitMatchingSequence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MatchingAtomicContext extends MatchingContext {
	public _matchrule!: MatchingruleContext;
	public matchingrule(): MatchingruleContext {
		return this.getRuleContext(0, MatchingruleContext);
	}
	constructor(ctx: MatchingContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterMatchingAtomic) {
			listener.enterMatchingAtomic(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitMatchingAtomic) {
			listener.exitMatchingAtomic(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitMatchingAtomic) {
			return visitor.visitMatchingAtomic(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MatchingruleContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return smlParser.RULE_matchingrule; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterMatchingrule) {
			listener.enterMatchingrule(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitMatchingrule) {
			listener.exitMatchingrule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitMatchingrule) {
			return visitor.visitMatchingrule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeypatternContext extends ParserRuleContext {
	public _key!: LabelContext;
	public _pat!: PatternContext;
	public label(): LabelContext {
		return this.getRuleContext(0, LabelContext);
	}
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return smlParser.RULE_keypattern; }
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterKeypattern) {
			listener.enterKeypattern(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitKeypattern) {
			listener.exitKeypattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitKeypattern) {
			return visitor.visitKeypattern(this);
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
export class ExpressionLambdaContext extends ExpressionContext {
	public FN(): TerminalNode { return this.getToken(smlParser.FN, 0); }
	public matching(): MatchingContext {
		return this.getRuleContext(0, MatchingContext);
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
export class ExpressionLetContext extends ExpressionContext {
	public _dec!: DeclarationContext;
	public _exp!: ExpressionContext;
	public LET(): TerminalNode { return this.getToken(smlParser.LET, 0); }
	public IN(): TerminalNode { return this.getToken(smlParser.IN, 0); }
	public END(): TerminalNode { return this.getToken(smlParser.END, 0); }
	public declaration(): DeclarationContext {
		return this.getRuleContext(0, DeclarationContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: smlListener): void {
		if (listener.enterExpressionLet) {
			listener.enterExpressionLet(this);
		}
	}
	// @Override
	public exitRule(listener: smlListener): void {
		if (listener.exitExpressionLet) {
			listener.exitExpressionLet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: smlVisitor<Result>): Result {
		if (visitor.visitExpressionLet) {
			return visitor.visitExpressionLet(this);
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


