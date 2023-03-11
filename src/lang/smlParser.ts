// Generated from ./src/lang/sml.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException'
import * as Utils from 'antlr4ts/misc/Utils'
import { NoViableAltException } from 'antlr4ts/NoViableAltException'
import { Parser } from 'antlr4ts/Parser'
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext'
import { RecognitionException } from 'antlr4ts/RecognitionException'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Token } from 'antlr4ts/Token'
import { TokenStream } from 'antlr4ts/TokenStream'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener'
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor'
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

import { smlListener } from './smlListener'
import { smlVisitor } from './smlVisitor'

export class smlParser extends Parser {
  public static readonly T__0 = 1
  public static readonly T__1 = 2
  public static readonly T__2 = 3
  public static readonly T__3 = 4
  public static readonly T__4 = 5
  public static readonly T__5 = 6
  public static readonly T__6 = 7
  public static readonly T__7 = 8
  public static readonly T__8 = 9
  public static readonly T__9 = 10
  public static readonly T__10 = 11
  public static readonly T__11 = 12
  public static readonly T__12 = 13
  public static readonly T__13 = 14
  public static readonly T__14 = 15
  public static readonly T__15 = 16
  public static readonly T__16 = 17
  public static readonly T__17 = 18
  public static readonly T__18 = 19
  public static readonly T__19 = 20
  public static readonly T__20 = 21
  public static readonly T__21 = 22
  public static readonly T__22 = 23
  public static readonly T__23 = 24
  public static readonly CHAR = 25
  public static readonly STR = 26
  public static readonly BOOL = 27
  public static readonly REAL = 28
  public static readonly INT = 29
  public static readonly ABSTYPE = 30
  public static readonly AND = 31
  public static readonly ANDALSO = 32
  public static readonly AS = 33
  public static readonly CASE = 34
  public static readonly DATATYPE = 35
  public static readonly DO = 36
  public static readonly ELSE = 37
  public static readonly END = 38
  public static readonly EXCEPTION = 39
  public static readonly FN = 40
  public static readonly FUN = 41
  public static readonly HANDLE = 42
  public static readonly IF = 43
  public static readonly IN = 44
  public static readonly INFIX = 45
  public static readonly INFIXR = 46
  public static readonly LET = 47
  public static readonly LOCAL = 48
  public static readonly NONFIX = 49
  public static readonly OF = 50
  public static readonly OP = 51
  public static readonly OPEN = 52
  public static readonly ORELSE = 53
  public static readonly RAISE = 54
  public static readonly REC = 55
  public static readonly THEN = 56
  public static readonly TYPE = 57
  public static readonly VAL = 58
  public static readonly WITH = 59
  public static readonly WITHTYPE = 60
  public static readonly WHILE = 61
  public static readonly TRUE = 62
  public static readonly FALSE = 63
  public static readonly DIGIT = 64
  public static readonly LETTER = 65
  public static readonly NEWLINE = 66
  public static readonly WHITESPACE = 67
  public static readonly RULE_program = 0
  public static readonly RULE_declaration = 1
  public static readonly RULE_valbind = 2
  public static readonly RULE_pattern = 3
  public static readonly RULE_expression = 4
  public static readonly RULE_label = 5
  public static readonly RULE_id = 6
  public static readonly RULE_variable = 7
  public static readonly RULE_constant = 8
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'program',
    'declaration',
    'valbind',
    'pattern',
    'expression',
    'label',
    'id',
    'variable',
    'constant'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "';'",
    "'='",
    "'('",
    "')'",
    "'''",
    "'_'",
    "'!'",
    "'%'",
    "'&'",
    "'$'",
    "'#'",
    "'+'",
    "'-'",
    "'/'",
    "':'",
    "'<'",
    "'>'",
    "'?'",
    "'@'",
    "'\\'",
    "'~'",
    "'^'",
    "'|'",
    "'*'",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'abstype'",
    "'and'",
    "'andalso'",
    "'as'",
    "'case'",
    "'datatype'",
    "'do'",
    "'else'",
    "'end'",
    "'exception'",
    "'fn'",
    "'fun'",
    "'handle'",
    "'if'",
    "'in'",
    "'infix'",
    "'infixr'",
    "'let'",
    "'local'",
    "'nonfix'",
    "'of'",
    "'op'",
    "'open'",
    "'orelse'",
    "'raise'",
    "'rec'",
    "'then'",
    "'type'",
    "'val'",
    "'with'",
    "'withtype'",
    "'while'",
    "'true'",
    "'false'"
  ]
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    'CHAR',
    'STR',
    'BOOL',
    'REAL',
    'INT',
    'ABSTYPE',
    'AND',
    'ANDALSO',
    'AS',
    'CASE',
    'DATATYPE',
    'DO',
    'ELSE',
    'END',
    'EXCEPTION',
    'FN',
    'FUN',
    'HANDLE',
    'IF',
    'IN',
    'INFIX',
    'INFIXR',
    'LET',
    'LOCAL',
    'NONFIX',
    'OF',
    'OP',
    'OPEN',
    'ORELSE',
    'RAISE',
    'REC',
    'THEN',
    'TYPE',
    'VAL',
    'WITH',
    'WITHTYPE',
    'WHILE',
    'TRUE',
    'FALSE',
    'DIGIT',
    'LETTER',
    'NEWLINE',
    'WHITESPACE'
  ]
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    smlParser._LITERAL_NAMES,
    smlParser._SYMBOLIC_NAMES,
    []
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return smlParser.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'sml.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return smlParser.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return smlParser._serializedATN
  }

  protected createFailedPredicateException(
    predicate?: string,
    message?: string
  ): FailedPredicateException {
    return new FailedPredicateException(this, predicate, message)
  }

  constructor(input: TokenStream) {
    super(input)
    this._interp = new ParserATNSimulator(smlParser._ATN, this)
  }

  public program(): ProgramContext
  public program(_p: number): ProgramContext
  // @RuleVersion(0)
  public program(_p?: number): ProgramContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: ProgramContext = new ProgramContext(this._ctx, _parentState)
    let _prevctx: ProgramContext = _localctx
    const _startState: number = 0
    this.enterRecursionRule(_localctx, 0, smlParser.RULE_program, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 21
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
          case 1:
            {
              _localctx = new ProgramDeclarationContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 19
              this.declaration()
            }
            break

          case 2:
            {
              _localctx = new ProgramEmptyContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
            }
            break
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 28
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new ProgramSequenceContext(new ProgramContext(_parentctx, _parentState))
                ;(_localctx as ProgramSequenceContext)._left = _prevctx
                this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_program)
                this.state = 23
                if (!this.precpred(this._ctx, 3)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                }
                this.state = 24
                this.match(smlParser.T__0)
                this.state = 25
                ;(_localctx as ProgramSequenceContext)._right = this.program(4)
              }
            }
          }
          this.state = 30
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public declaration(): DeclarationContext {
    let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state)
    this.enterRule(_localctx, 2, smlParser.RULE_declaration)
    try {
      this.state = 34
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case smlParser.VAL:
          _localctx = new DeclarationValueContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 31
            this.match(smlParser.VAL)
            this.state = 32
            this.valbind()
          }
          break
        case smlParser.T__1:
        case smlParser.T__2:
        case smlParser.T__4:
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
        case smlParser.CHAR:
        case smlParser.STR:
        case smlParser.BOOL:
        case smlParser.REAL:
        case smlParser.INT:
        case smlParser.LETTER:
          _localctx = new DeclarationExpressionContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 33
            this.expression(0)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public valbind(): ValbindContext {
    const _localctx: ValbindContext = new ValbindContext(this._ctx, this.state)
    this.enterRule(_localctx, 4, smlParser.RULE_valbind)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 36
        _localctx._name = this.id()
        this.state = 37
        this.match(smlParser.T__1)
        this.state = 38
        _localctx._value = this.expression(0)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public pattern(): PatternContext {
    let _localctx: PatternContext = new PatternContext(this._ctx, this.state)
    this.enterRule(_localctx, 6, smlParser.RULE_pattern)
    try {
      this.state = 42
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case smlParser.CHAR:
        case smlParser.STR:
        case smlParser.BOOL:
        case smlParser.REAL:
        case smlParser.INT:
          _localctx = new PatternConstantContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 40
            this.constant()
          }
          break
        case smlParser.T__1:
        case smlParser.T__4:
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
          _localctx = new PatternIdContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 41
            this.id()
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public expression(): ExpressionContext
  public expression(_p: number): ExpressionContext
  // @RuleVersion(0)
  public expression(_p?: number): ExpressionContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState)
    let _prevctx: ExpressionContext = _localctx
    const _startState: number = 8
    this.enterRecursionRule(_localctx, 8, smlParser.RULE_expression, _p)
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 51
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case smlParser.T__2:
            {
              _localctx = new ExpressionParenthesesContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 45
              this.match(smlParser.T__2)
              this.state = 46
              ;(_localctx as ExpressionParenthesesContext)._inner = this.expression(0)
              this.state = 47
              this.match(smlParser.T__3)
            }
            break
          case smlParser.CHAR:
          case smlParser.STR:
          case smlParser.BOOL:
          case smlParser.REAL:
          case smlParser.INT:
            {
              _localctx = new ExpressionConstantContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 49
              this.constant()
            }
            break
          case smlParser.T__1:
          case smlParser.T__4:
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
            {
              _localctx = new ExpressionIdContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 50
              this.id()
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 61
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 59
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 5, this._ctx)) {
                case 1:
                  {
                    _localctx = new ExpressionApplicationInfixContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as ExpressionApplicationInfixContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression)
                    this.state = 53
                    if (!this.precpred(this._ctx, 4)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 4)')
                    }
                    this.state = 54
                    ;(_localctx as ExpressionApplicationInfixContext)._operator = this.id()
                    this.state = 55
                    ;(_localctx as ExpressionApplicationInfixContext)._right = this.expression(5)
                  }
                  break

                case 2:
                  {
                    _localctx = new ExpressionApplicationPrefixContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as ExpressionApplicationPrefixContext)._operator = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression)
                    this.state = 57
                    if (!this.precpred(this._ctx, 3)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                    }
                    this.state = 58
                    ;(_localctx as ExpressionApplicationPrefixContext)._operand = this.expression(4)
                  }
                  break
              }
            }
          }
          this.state = 63
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 6, this._ctx)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.unrollRecursionContexts(_parentctx)
    }
    return _localctx
  }
  // @RuleVersion(0)
  public label(): LabelContext {
    const _localctx: LabelContext = new LabelContext(this._ctx, this.state)
    this.enterRule(_localctx, 10, smlParser.RULE_label)
    try {
      this.state = 66
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case smlParser.T__1:
        case smlParser.T__4:
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
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 64
            this.id()
          }
          break
        case smlParser.INT:
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 65
            this.match(smlParser.INT)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public id(): IdContext {
    let _localctx: IdContext = new IdContext(this._ctx, this.state)
    this.enterRule(_localctx, 12, smlParser.RULE_id)
    let _la: number
    try {
      let _alt: number
      this.state = 80
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case smlParser.LETTER:
          _localctx = new IdAlphaContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 68
            this.match(smlParser.LETTER)
            this.state = 72
            this._errHandler.sync(this)
            _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx)
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 69
                    _la = this._input.LA(1)
                    if (
                      !(
                        _la === smlParser.T__4 ||
                        _la === smlParser.T__5 ||
                        _la === smlParser.DIGIT ||
                        _la === smlParser.LETTER
                      )
                    ) {
                      this._errHandler.recoverInline(this)
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true
                      }

                      this._errHandler.reportMatch(this)
                      this.consume()
                    }
                  }
                }
              }
              this.state = 74
              this._errHandler.sync(this)
              _alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx)
            }
          }
          break
        case smlParser.T__1:
        case smlParser.T__4:
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
          _localctx = new IdSymbolContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 76
            this._errHandler.sync(this)
            _alt = 1
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 75
                      _la = this._input.LA(1)
                      if (
                        !(
                          (_la & ~0x1f) === 0 &&
                          ((1 << _la) &
                            ((1 << smlParser.T__1) |
                              (1 << smlParser.T__4) |
                              (1 << smlParser.T__6) |
                              (1 << smlParser.T__7) |
                              (1 << smlParser.T__8) |
                              (1 << smlParser.T__9) |
                              (1 << smlParser.T__10) |
                              (1 << smlParser.T__11) |
                              (1 << smlParser.T__12) |
                              (1 << smlParser.T__13) |
                              (1 << smlParser.T__14) |
                              (1 << smlParser.T__15) |
                              (1 << smlParser.T__16) |
                              (1 << smlParser.T__17) |
                              (1 << smlParser.T__18) |
                              (1 << smlParser.T__19) |
                              (1 << smlParser.T__20) |
                              (1 << smlParser.T__21) |
                              (1 << smlParser.T__22) |
                              (1 << smlParser.T__23))) !==
                            0
                        )
                      ) {
                        this._errHandler.recoverInline(this)
                      } else {
                        if (this._input.LA(1) === Token.EOF) {
                          this.matchedEOF = true
                        }

                        this._errHandler.reportMatch(this)
                        this.consume()
                      }
                    }
                  }
                  break
                default:
                  throw new NoViableAltException(this)
              }
              this.state = 78
              this._errHandler.sync(this)
              _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx)
            } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public variable(): VariableContext {
    const _localctx: VariableContext = new VariableContext(this._ctx, this.state)
    this.enterRule(_localctx, 14, smlParser.RULE_variable)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 82
        this.match(smlParser.T__4)
        this.state = 86
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          _la === smlParser.T__4 ||
          _la === smlParser.T__5 ||
          _la === smlParser.DIGIT ||
          _la === smlParser.LETTER
        ) {
          {
            {
              this.state = 83
              _la = this._input.LA(1)
              if (
                !(
                  _la === smlParser.T__4 ||
                  _la === smlParser.T__5 ||
                  _la === smlParser.DIGIT ||
                  _la === smlParser.LETTER
                )
              ) {
                this._errHandler.recoverInline(this)
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true
                }

                this._errHandler.reportMatch(this)
                this.consume()
              }
            }
          }
          this.state = 88
          this._errHandler.sync(this)
          _la = this._input.LA(1)
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }
  // @RuleVersion(0)
  public constant(): ConstantContext {
    let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state)
    this.enterRule(_localctx, 16, smlParser.RULE_constant)
    try {
      this.state = 94
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case smlParser.INT:
          _localctx = new ConstantIntContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 89
            this.match(smlParser.INT)
          }
          break
        case smlParser.REAL:
          _localctx = new ConstantRealContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 90
            this.match(smlParser.REAL)
          }
          break
        case smlParser.BOOL:
          _localctx = new ConstantBoolContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 91
            this.match(smlParser.BOOL)
          }
          break
        case smlParser.CHAR:
          _localctx = new ConstantCharContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 92
            this.match(smlParser.CHAR)
          }
          break
        case smlParser.STR:
          _localctx = new ConstantStrContext(_localctx)
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 93
            this.match(smlParser.STR)
          }
          break
        default:
          throw new NoViableAltException(this)
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re
        this._errHandler.reportError(this, re)
        this._errHandler.recover(this, re)
      } else {
        throw re
      }
    } finally {
      this.exitRule()
    }
    return _localctx
  }

  public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
    switch (ruleIndex) {
      case 0:
        return this.program_sempred(_localctx as ProgramContext, predIndex)

      case 4:
        return this.expression_sempred(_localctx as ExpressionContext, predIndex)
    }
    return true
  }
  private program_sempred(_localctx: ProgramContext, predIndex: number): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 3)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 1:
        return this.precpred(this._ctx, 4)

      case 2:
        return this.precpred(this._ctx, 3)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03Ec\x04\x02\t\x02' +
    '\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t\x07' +
    '\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x05\x02\x18\n\x02' +
    '\x03\x02\x03\x02\x03\x02\x07\x02\x1D\n\x02\f\x02\x0E\x02 \v\x02\x03\x03' +
    '\x03\x03\x03\x03\x05\x03%\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05' +
    '\x03\x05\x05\x05-\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06' +
    '\x03\x06\x05\x066\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06' +
    '\x07\x06>\n\x06\f\x06\x0E\x06A\v\x06\x03\x07\x03\x07\x05\x07E\n\x07\x03' +
    '\b\x03\b\x07\bI\n\b\f\b\x0E\bL\v\b\x03\b\x06\bO\n\b\r\b\x0E\bP\x05\bS' +
    '\n\b\x03\t\x03\t\x07\tW\n\t\f\t\x0E\tZ\v\t\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x05\na\n\n\x03\n\x02\x02\x04\x02\n\v\x02\x02\x04\x02\x06\x02\b\x02' +
    '\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x04\x04\x02\x07\bBC\x05\x02\x04' +
    '\x04\x07\x07\t\x1A\x02j\x02\x17\x03\x02\x02\x02\x04$\x03\x02\x02\x02\x06' +
    '&\x03\x02\x02\x02\b,\x03\x02\x02\x02\n5\x03\x02\x02\x02\fD\x03\x02\x02' +
    '\x02\x0ER\x03\x02\x02\x02\x10T\x03\x02\x02\x02\x12`\x03\x02\x02\x02\x14' +
    '\x15\b\x02\x01\x02\x15\x18\x05\x04\x03\x02\x16\x18\x03\x02\x02\x02\x17' +
    '\x14\x03\x02\x02\x02\x17\x16\x03\x02\x02\x02\x18\x1E\x03\x02\x02\x02\x19' +
    '\x1A\f\x05\x02\x02\x1A\x1B\x07\x03\x02\x02\x1B\x1D\x05\x02\x02\x06\x1C' +
    '\x19\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E' +
    '\x1F\x03\x02\x02\x02\x1F\x03\x03\x02\x02\x02 \x1E\x03\x02\x02\x02!"\x07' +
    '<\x02\x02"%\x05\x06\x04\x02#%\x05\n\x06\x02$!\x03\x02\x02\x02$#\x03\x02' +
    "\x02\x02%\x05\x03\x02\x02\x02&'\x05\x0E\b\x02'(\x07\x04\x02\x02()\x05" +
    '\n\x06\x02)\x07\x03\x02\x02\x02*-\x05\x12\n\x02+-\x05\x0E\b\x02,*\x03' +
    '\x02\x02\x02,+\x03\x02\x02\x02-\t\x03\x02\x02\x02./\b\x06\x01\x02/0\x07' +
    '\x05\x02\x0201\x05\n\x06\x0212\x07\x06\x02\x0226\x03\x02\x02\x0236\x05' +
    '\x12\n\x0246\x05\x0E\b\x025.\x03\x02\x02\x0253\x03\x02\x02\x0254\x03\x02' +
    '\x02\x026?\x03\x02\x02\x0278\f\x06\x02\x0289\x05\x0E\b\x029:\x05\n\x06' +
    '\x07:>\x03\x02\x02\x02;<\f\x05\x02\x02<>\x05\n\x06\x06=7\x03\x02\x02\x02' +
    '=;\x03\x02\x02\x02>A\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02' +
    '@\v\x03\x02\x02\x02A?\x03\x02\x02\x02BE\x05\x0E\b\x02CE\x07\x1F\x02\x02' +
    'DB\x03\x02\x02\x02DC\x03\x02\x02\x02E\r\x03\x02\x02\x02FJ\x07C\x02\x02' +
    'GI\t\x02\x02\x02HG\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02' +
    'JK\x03\x02\x02\x02KS\x03\x02\x02\x02LJ\x03\x02\x02\x02MO\t\x03\x02\x02' +
    'NM\x03\x02\x02\x02OP\x03\x02\x02\x02PN\x03\x02\x02\x02PQ\x03\x02\x02\x02' +
    'QS\x03\x02\x02\x02RF\x03\x02\x02\x02RN\x03\x02\x02\x02S\x0F\x03\x02\x02' +
    '\x02TX\x07\x07\x02\x02UW\t\x02\x02\x02VU\x03\x02\x02\x02WZ\x03\x02\x02' +
    '\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y\x11\x03\x02\x02\x02ZX\x03\x02' +
    '\x02\x02[a\x07\x1F\x02\x02\\a\x07\x1E\x02\x02]a\x07\x1D\x02\x02^a\x07' +
    '\x1B\x02\x02_a\x07\x1C\x02\x02`[\x03\x02\x02\x02`\\\x03\x02\x02\x02`]' +
    '\x03\x02\x02\x02`^\x03\x02\x02\x02`_\x03\x02\x02\x02a\x13\x03\x02\x02' +
    '\x02\x0F\x17\x1E$,5=?DJPRX`'
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!smlParser.__ATN) {
      smlParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(smlParser._serializedATN)
      )
    }

    return smlParser.__ATN
  }
}

export class ProgramContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return smlParser.RULE_program
  }
  public copyFrom(ctx: ProgramContext): void {
    super.copyFrom(ctx)
  }
}
export class ProgramSequenceContext extends ProgramContext {
  public _left!: ProgramContext
  public _right!: ProgramContext
  public program(): ProgramContext[]
  public program(i: number): ProgramContext
  public program(i?: number): ProgramContext | ProgramContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ProgramContext)
    } else {
      return this.getRuleContext(i, ProgramContext)
    }
  }
  constructor(ctx: ProgramContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterProgramSequence) {
      listener.enterProgramSequence(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitProgramSequence) {
      listener.exitProgramSequence(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitProgramSequence) {
      return visitor.visitProgramSequence(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ProgramDeclarationContext extends ProgramContext {
  public declaration(): DeclarationContext {
    return this.getRuleContext(0, DeclarationContext)
  }
  constructor(ctx: ProgramContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterProgramDeclaration) {
      listener.enterProgramDeclaration(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitProgramDeclaration) {
      listener.exitProgramDeclaration(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitProgramDeclaration) {
      return visitor.visitProgramDeclaration(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ProgramEmptyContext extends ProgramContext {
  constructor(ctx: ProgramContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterProgramEmpty) {
      listener.enterProgramEmpty(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitProgramEmpty) {
      listener.exitProgramEmpty(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitProgramEmpty) {
      return visitor.visitProgramEmpty(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class DeclarationContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return smlParser.RULE_declaration
  }
  public copyFrom(ctx: DeclarationContext): void {
    super.copyFrom(ctx)
  }
}
export class DeclarationValueContext extends DeclarationContext {
  public VAL(): TerminalNode {
    return this.getToken(smlParser.VAL, 0)
  }
  public valbind(): ValbindContext {
    return this.getRuleContext(0, ValbindContext)
  }
  constructor(ctx: DeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterDeclarationValue) {
      listener.enterDeclarationValue(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitDeclarationValue) {
      listener.exitDeclarationValue(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitDeclarationValue) {
      return visitor.visitDeclarationValue(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class DeclarationExpressionContext extends DeclarationContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: DeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterDeclarationExpression) {
      listener.enterDeclarationExpression(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitDeclarationExpression) {
      listener.exitDeclarationExpression(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitDeclarationExpression) {
      return visitor.visitDeclarationExpression(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ValbindContext extends ParserRuleContext {
  public _name!: IdContext
  public _value!: ExpressionContext
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return smlParser.RULE_valbind
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterValbind) {
      listener.enterValbind(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitValbind) {
      listener.exitValbind(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitValbind) {
      return visitor.visitValbind(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class PatternContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return smlParser.RULE_pattern
  }
  public copyFrom(ctx: PatternContext): void {
    super.copyFrom(ctx)
  }
}
export class PatternConstantContext extends PatternContext {
  public constant(): ConstantContext {
    return this.getRuleContext(0, ConstantContext)
  }
  constructor(ctx: PatternContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterPatternConstant) {
      listener.enterPatternConstant(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitPatternConstant) {
      listener.exitPatternConstant(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitPatternConstant) {
      return visitor.visitPatternConstant(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PatternIdContext extends PatternContext {
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)
  }
  constructor(ctx: PatternContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterPatternId) {
      listener.enterPatternId(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitPatternId) {
      listener.exitPatternId(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitPatternId) {
      return visitor.visitPatternId(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return smlParser.RULE_expression
  }
  public copyFrom(ctx: ExpressionContext): void {
    super.copyFrom(ctx)
  }
}
export class ExpressionParenthesesContext extends ExpressionContext {
  public _inner!: ExpressionContext
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterExpressionParentheses) {
      listener.enterExpressionParentheses(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitExpressionParentheses) {
      listener.exitExpressionParentheses(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitExpressionParentheses) {
      return visitor.visitExpressionParentheses(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ExpressionApplicationInfixContext extends ExpressionContext {
  public _left!: ExpressionContext
  public _operator!: IdContext
  public _right!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterExpressionApplicationInfix) {
      listener.enterExpressionApplicationInfix(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitExpressionApplicationInfix) {
      listener.exitExpressionApplicationInfix(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitExpressionApplicationInfix) {
      return visitor.visitExpressionApplicationInfix(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ExpressionApplicationPrefixContext extends ExpressionContext {
  public _operator!: ExpressionContext
  public _operand!: ExpressionContext
  public expression(): ExpressionContext[]
  public expression(i: number): ExpressionContext
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext)
    } else {
      return this.getRuleContext(i, ExpressionContext)
    }
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterExpressionApplicationPrefix) {
      listener.enterExpressionApplicationPrefix(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitExpressionApplicationPrefix) {
      listener.exitExpressionApplicationPrefix(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitExpressionApplicationPrefix) {
      return visitor.visitExpressionApplicationPrefix(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ExpressionConstantContext extends ExpressionContext {
  public constant(): ConstantContext {
    return this.getRuleContext(0, ConstantContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterExpressionConstant) {
      listener.enterExpressionConstant(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitExpressionConstant) {
      listener.exitExpressionConstant(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitExpressionConstant) {
      return visitor.visitExpressionConstant(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ExpressionIdContext extends ExpressionContext {
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterExpressionId) {
      listener.enterExpressionId(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitExpressionId) {
      listener.exitExpressionId(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitExpressionId) {
      return visitor.visitExpressionId(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LabelContext extends ParserRuleContext {
  public id(): IdContext | undefined {
    return this.tryGetRuleContext(0, IdContext)
  }
  public INT(): TerminalNode | undefined {
    return this.tryGetToken(smlParser.INT, 0)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return smlParser.RULE_label
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterLabel) {
      listener.enterLabel(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitLabel) {
      listener.exitLabel(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitLabel) {
      return visitor.visitLabel(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class IdContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return smlParser.RULE_id
  }
  public copyFrom(ctx: IdContext): void {
    super.copyFrom(ctx)
  }
}
export class IdAlphaContext extends IdContext {
  public LETTER(): TerminalNode[]
  public LETTER(i: number): TerminalNode
  public LETTER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(smlParser.LETTER)
    } else {
      return this.getToken(smlParser.LETTER, i)
    }
  }
  public DIGIT(): TerminalNode[]
  public DIGIT(i: number): TerminalNode
  public DIGIT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(smlParser.DIGIT)
    } else {
      return this.getToken(smlParser.DIGIT, i)
    }
  }
  constructor(ctx: IdContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterIdAlpha) {
      listener.enterIdAlpha(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitIdAlpha) {
      listener.exitIdAlpha(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitIdAlpha) {
      return visitor.visitIdAlpha(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class IdSymbolContext extends IdContext {
  constructor(ctx: IdContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterIdSymbol) {
      listener.enterIdSymbol(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitIdSymbol) {
      listener.exitIdSymbol(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitIdSymbol) {
      return visitor.visitIdSymbol(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class VariableContext extends ParserRuleContext {
  public LETTER(): TerminalNode[]
  public LETTER(i: number): TerminalNode
  public LETTER(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(smlParser.LETTER)
    } else {
      return this.getToken(smlParser.LETTER, i)
    }
  }
  public DIGIT(): TerminalNode[]
  public DIGIT(i: number): TerminalNode
  public DIGIT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(smlParser.DIGIT)
    } else {
      return this.getToken(smlParser.DIGIT, i)
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return smlParser.RULE_variable
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterVariable) {
      listener.enterVariable(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitVariable) {
      listener.exitVariable(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitVariable) {
      return visitor.visitVariable(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class ConstantContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return smlParser.RULE_constant
  }
  public copyFrom(ctx: ConstantContext): void {
    super.copyFrom(ctx)
  }
}
export class ConstantIntContext extends ConstantContext {
  public INT(): TerminalNode {
    return this.getToken(smlParser.INT, 0)
  }
  constructor(ctx: ConstantContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterConstantInt) {
      listener.enterConstantInt(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitConstantInt) {
      listener.exitConstantInt(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitConstantInt) {
      return visitor.visitConstantInt(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ConstantRealContext extends ConstantContext {
  public REAL(): TerminalNode {
    return this.getToken(smlParser.REAL, 0)
  }
  constructor(ctx: ConstantContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterConstantReal) {
      listener.enterConstantReal(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitConstantReal) {
      listener.exitConstantReal(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitConstantReal) {
      return visitor.visitConstantReal(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ConstantBoolContext extends ConstantContext {
  public BOOL(): TerminalNode {
    return this.getToken(smlParser.BOOL, 0)
  }
  constructor(ctx: ConstantContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterConstantBool) {
      listener.enterConstantBool(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitConstantBool) {
      listener.exitConstantBool(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitConstantBool) {
      return visitor.visitConstantBool(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ConstantCharContext extends ConstantContext {
  public CHAR(): TerminalNode {
    return this.getToken(smlParser.CHAR, 0)
  }
  constructor(ctx: ConstantContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterConstantChar) {
      listener.enterConstantChar(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitConstantChar) {
      listener.exitConstantChar(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitConstantChar) {
      return visitor.visitConstantChar(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ConstantStrContext extends ConstantContext {
  public STR(): TerminalNode {
    return this.getToken(smlParser.STR, 0)
  }
  constructor(ctx: ConstantContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterConstantStr) {
      listener.enterConstantStr(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitConstantStr) {
      listener.exitConstantStr(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitConstantStr) {
      return visitor.visitConstantStr(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
