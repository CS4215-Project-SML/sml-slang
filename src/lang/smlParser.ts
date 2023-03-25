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
  public static readonly T__24 = 25
  public static readonly T__25 = 26
  public static readonly T__26 = 27
  public static readonly T__27 = 28
  public static readonly T__28 = 29
  public static readonly T__29 = 30
  public static readonly T__30 = 31
  public static readonly CHAR = 32
  public static readonly STR = 33
  public static readonly BOOL = 34
  public static readonly REAL = 35
  public static readonly INT = 36
  public static readonly ABSTYPE = 37
  public static readonly AND = 38
  public static readonly ANDALSO = 39
  public static readonly AS = 40
  public static readonly CASE = 41
  public static readonly DATATYPE = 42
  public static readonly DO = 43
  public static readonly ELSE = 44
  public static readonly END = 45
  public static readonly EXCEPTION = 46
  public static readonly FN = 47
  public static readonly FUN = 48
  public static readonly HANDLE = 49
  public static readonly IF = 50
  public static readonly IN = 51
  public static readonly INFIX = 52
  public static readonly INFIXR = 53
  public static readonly LET = 54
  public static readonly LOCAL = 55
  public static readonly NONFIX = 56
  public static readonly OF = 57
  public static readonly OP = 58
  public static readonly OPEN = 59
  public static readonly ORELSE = 60
  public static readonly RAISE = 61
  public static readonly REC = 62
  public static readonly THEN = 63
  public static readonly TYPE = 64
  public static readonly VAL = 65
  public static readonly WITH = 66
  public static readonly WITHTYPE = 67
  public static readonly WHILE = 68
  public static readonly TRUE = 69
  public static readonly FALSE = 70
  public static readonly DIGIT = 71
  public static readonly LETTER = 72
  public static readonly NEWLINE = 73
  public static readonly WHITESPACE = 74
  public static readonly RULE_program = 0
  public static readonly RULE_declaration = 1
  public static readonly RULE_valbind = 2
  public static readonly RULE_funbind = 3
  public static readonly RULE_pattern = 4
  public static readonly RULE_matchSml = 5
  public static readonly RULE_mrule = 6
  public static readonly RULE_keypattern = 7
  public static readonly RULE_expression = 8
  public static readonly RULE_keyvalue = 9
  public static readonly RULE_label = 10
  public static readonly RULE_id = 11
  public static readonly RULE_variable = 12
  public static readonly RULE_constant = 13
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'program',
    'declaration',
    'valbind',
    'funbind',
    'pattern',
    'matchSml',
    'mrule',
    'keypattern',
    'expression',
    'keyvalue',
    'label',
    'id',
    'variable',
    'constant'
  ]

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "';'",
    "'='",
    "'::'",
    "'('",
    "','",
    "')'",
    "'{'",
    "'}'",
    "'['",
    "']'",
    "'|'",
    "'=>'",
    "'#'",
    "'''",
    "'_'",
    "'!'",
    "'%'",
    "'&'",
    "'$'",
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
        this.state = 31
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 0, this._ctx)) {
          case 1:
            {
              _localctx = new ProgramDeclarationContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 29
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
        this.state = 38
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
                this.state = 33
                if (!this.precpred(this._ctx, 3)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 3)')
                }
                this.state = 34
                this.match(smlParser.T__0)
                this.state = 35
                ;(_localctx as ProgramSequenceContext)._right = this.program(4)
              }
            }
          }
          this.state = 40
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
      this.state = 46
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case smlParser.FUN:
          _localctx = new DeclarationFunctionContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 41
            this.match(smlParser.FUN)
            this.state = 42
            this.funbind()
          }
          break
        case smlParser.VAL:
          _localctx = new DeclarationValueContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 43
            this.match(smlParser.VAL)
            this.state = 44
            this.valbind()
          }
          break
        case smlParser.T__1:
        case smlParser.T__3:
        case smlParser.T__6:
        case smlParser.T__8:
        case smlParser.T__10:
        case smlParser.T__12:
        case smlParser.T__13:
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
        case smlParser.T__30:
        case smlParser.CHAR:
        case smlParser.STR:
        case smlParser.BOOL:
        case smlParser.REAL:
        case smlParser.INT:
        case smlParser.FN:
        case smlParser.IF:
        case smlParser.LETTER:
          _localctx = new DeclarationExpressionContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 45
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
        this.state = 48
        _localctx._name = this.id()
        this.state = 49
        this.match(smlParser.T__1)
        this.state = 50
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
  public funbind(): FunbindContext {
    const _localctx: FunbindContext = new FunbindContext(this._ctx, this.state)
    this.enterRule(_localctx, 6, smlParser.RULE_funbind)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 52
        _localctx._name = this.id()
        this.state = 53
        _localctx._pat = this.pattern(0)
        this.state = 54
        this.match(smlParser.T__1)
        this.state = 55
        _localctx._body = this.expression(0)
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

  public pattern(): PatternContext
  public pattern(_p: number): PatternContext
  // @RuleVersion(0)
  public pattern(_p?: number): PatternContext {
    if (_p === undefined) {
      _p = 0
    }

    const _parentctx: ParserRuleContext = this._ctx
    const _parentState: number = this.state
    let _localctx: PatternContext = new PatternContext(this._ctx, _parentState)
    let _prevctx: PatternContext = _localctx
    const _startState: number = 8
    this.enterRecursionRule(_localctx, 8, smlParser.RULE_pattern, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 96
        this._errHandler.sync(this)
        switch (this._input.LA(1)) {
          case smlParser.T__3:
            {
              _localctx = new PatternTupleContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 58
              this.match(smlParser.T__3)
              this.state = 59
              this.pattern(0)
              this.state = 64
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              while (_la === smlParser.T__4) {
                {
                  {
                    this.state = 60
                    this.match(smlParser.T__4)
                    this.state = 61
                    this.pattern(0)
                  }
                }
                this.state = 66
                this._errHandler.sync(this)
                _la = this._input.LA(1)
              }
              this.state = 67
              this.match(smlParser.T__5)
            }
            break
          case smlParser.T__6:
            {
              _localctx = new PatternRecordContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 69
              this.match(smlParser.T__6)
              this.state = 80
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 6, this._ctx)) {
                case 1:
                  {
                    this.state = 71
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (
                      ((_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << smlParser.T__1) |
                            (1 << smlParser.T__10) |
                            (1 << smlParser.T__12) |
                            (1 << smlParser.T__13) |
                            (1 << smlParser.T__15) |
                            (1 << smlParser.T__16) |
                            (1 << smlParser.T__17) |
                            (1 << smlParser.T__18) |
                            (1 << smlParser.T__19) |
                            (1 << smlParser.T__20) |
                            (1 << smlParser.T__21) |
                            (1 << smlParser.T__22) |
                            (1 << smlParser.T__23) |
                            (1 << smlParser.T__24) |
                            (1 << smlParser.T__25) |
                            (1 << smlParser.T__26) |
                            (1 << smlParser.T__27) |
                            (1 << smlParser.T__28) |
                            (1 << smlParser.T__29) |
                            (1 << smlParser.T__30))) !==
                          0) ||
                      _la === smlParser.INT ||
                      _la === smlParser.LETTER
                    ) {
                      {
                        this.state = 70
                        this.keypattern()
                      }
                    }
                  }
                  break

                case 2:
                  {
                    {
                      this.state = 73
                      this.keypattern()
                      this.state = 76
                      this._errHandler.sync(this)
                      _la = this._input.LA(1)
                      do {
                        {
                          {
                            this.state = 74
                            this.match(smlParser.T__4)
                            this.state = 75
                            this.keypattern()
                          }
                        }
                        this.state = 78
                        this._errHandler.sync(this)
                        _la = this._input.LA(1)
                      } while (_la === smlParser.T__4)
                    }
                  }
                  break
              }
              this.state = 82
              this.match(smlParser.T__7)
            }
            break
          case smlParser.T__8:
            {
              _localctx = new PatternListContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 83
              this.match(smlParser.T__8)
              this.state = 84
              this.pattern(0)
              this.state = 89
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              while (_la === smlParser.T__4) {
                {
                  {
                    this.state = 85
                    this.match(smlParser.T__4)
                    this.state = 86
                    this.pattern(0)
                  }
                }
                this.state = 91
                this._errHandler.sync(this)
                _la = this._input.LA(1)
              }
              this.state = 92
              this.match(smlParser.T__9)
            }
            break
          case smlParser.CHAR:
          case smlParser.STR:
          case smlParser.BOOL:
          case smlParser.REAL:
          case smlParser.INT:
            {
              _localctx = new PatternConstantContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 94
              this.constant()
            }
            break
          case smlParser.T__1:
          case smlParser.T__10:
          case smlParser.T__12:
          case smlParser.T__13:
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
          case smlParser.T__30:
          case smlParser.LETTER:
            {
              _localctx = new PatternIdContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 95
              this.id()
            }
            break
          default:
            throw new NoViableAltException(this)
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 103
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              {
                _localctx = new PatternInfixContext(new PatternContext(_parentctx, _parentState))
                this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_pattern)
                this.state = 98
                if (!this.precpred(this._ctx, 6)) {
                  throw this.createFailedPredicateException('this.precpred(this._ctx, 6)')
                }
                this.state = 99
                this.match(smlParser.T__2)
                this.state = 100
                this.pattern(7)
              }
            }
          }
          this.state = 105
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx)
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
  public matchSml(): MatchSmlContext {
    let _localctx: MatchSmlContext = new MatchSmlContext(this._ctx, this.state)
    this.enterRule(_localctx, 10, smlParser.RULE_matchSml)
    try {
      this.state = 111
      this._errHandler.sync(this)
      switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
        case 1:
          _localctx = new MatchSequenceContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 106
            ;(_localctx as MatchSequenceContext)._matchRule = this.mrule()
            this.state = 107
            this.match(smlParser.T__10)
            this.state = 108
            ;(_localctx as MatchSequenceContext)._rest = this.matchSml()
          }
          break

        case 2:
          _localctx = new MatchAtomicContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 110
            ;(_localctx as MatchAtomicContext)._matchRule = this.mrule()
          }
          break
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
  public mrule(): MruleContext {
    const _localctx: MruleContext = new MruleContext(this._ctx, this.state)
    this.enterRule(_localctx, 12, smlParser.RULE_mrule)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 113
        _localctx._pat = this.pattern(0)
        this.state = 114
        this.match(smlParser.T__11)
        this.state = 115
        _localctx._exp = this.expression(0)
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
  public keypattern(): KeypatternContext {
    const _localctx: KeypatternContext = new KeypatternContext(this._ctx, this.state)
    this.enterRule(_localctx, 14, smlParser.RULE_keypattern)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 117
        _localctx._key = this.label()
        this.state = 118
        this.match(smlParser.T__1)
        this.state = 119
        _localctx._pat = this.pattern(0)
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
    const _startState: number = 16
    this.enterRecursionRule(_localctx, 16, smlParser.RULE_expression, _p)
    let _la: number
    try {
      let _alt: number
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 180
        this._errHandler.sync(this)
        switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
          case 1:
            {
              _localctx = new ExpressionParenthesesContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx

              this.state = 122
              this.match(smlParser.T__3)
              this.state = 123
              ;(_localctx as ExpressionParenthesesContext)._inner = this.expression(0)
              this.state = 124
              this.match(smlParser.T__5)
            }
            break

          case 2:
            {
              _localctx = new ExpressionLambdaContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 126
              this.match(smlParser.FN)
              this.state = 127
              this.matchSml()
            }
            break

          case 3:
            {
              _localctx = new ExpressionConditionalContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 128
              this.match(smlParser.IF)
              this.state = 129
              ;(_localctx as ExpressionConditionalContext)._pred = this.expression(0)
              this.state = 130
              this.match(smlParser.THEN)
              this.state = 131
              ;(_localctx as ExpressionConditionalContext)._cons = this.expression(0)
              this.state = 132
              this.match(smlParser.ELSE)
              this.state = 133
              ;(_localctx as ExpressionConditionalContext)._alt = this.expression(9)
            }
            break

          case 4:
            {
              _localctx = new ExpressionRecordContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 135
              this.match(smlParser.T__6)
              this.state = 146
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                case 1:
                  {
                    this.state = 137
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (
                      ((_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << smlParser.T__1) |
                            (1 << smlParser.T__10) |
                            (1 << smlParser.T__12) |
                            (1 << smlParser.T__13) |
                            (1 << smlParser.T__15) |
                            (1 << smlParser.T__16) |
                            (1 << smlParser.T__17) |
                            (1 << smlParser.T__18) |
                            (1 << smlParser.T__19) |
                            (1 << smlParser.T__20) |
                            (1 << smlParser.T__21) |
                            (1 << smlParser.T__22) |
                            (1 << smlParser.T__23) |
                            (1 << smlParser.T__24) |
                            (1 << smlParser.T__25) |
                            (1 << smlParser.T__26) |
                            (1 << smlParser.T__27) |
                            (1 << smlParser.T__28) |
                            (1 << smlParser.T__29) |
                            (1 << smlParser.T__30))) !==
                          0) ||
                      _la === smlParser.INT ||
                      _la === smlParser.LETTER
                    ) {
                      {
                        this.state = 136
                        this.keyvalue()
                      }
                    }
                  }
                  break

                case 2:
                  {
                    {
                      this.state = 139
                      this.keyvalue()
                      this.state = 142
                      this._errHandler.sync(this)
                      _la = this._input.LA(1)
                      do {
                        {
                          {
                            this.state = 140
                            this.match(smlParser.T__4)
                            this.state = 141
                            this.keyvalue()
                          }
                        }
                        this.state = 144
                        this._errHandler.sync(this)
                        _la = this._input.LA(1)
                      } while (_la === smlParser.T__4)
                    }
                  }
                  break
              }
              this.state = 148
              this.match(smlParser.T__7)
            }
            break

          case 5:
            {
              _localctx = new ExpressionTupleContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 149
              this.match(smlParser.T__3)
              this.state = 150
              this.expression(0)
              this.state = 151
              this.match(smlParser.T__4)
              this.state = 152
              this.expression(0)
              this.state = 157
              this._errHandler.sync(this)
              _la = this._input.LA(1)
              while (_la === smlParser.T__4) {
                {
                  {
                    this.state = 153
                    this.match(smlParser.T__4)
                    this.state = 154
                    this.expression(0)
                  }
                }
                this.state = 159
                this._errHandler.sync(this)
                _la = this._input.LA(1)
              }
              this.state = 160
              this.match(smlParser.T__5)
            }
            break

          case 6:
            {
              _localctx = new ExpressionListContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 162
              this.match(smlParser.T__8)
              this.state = 173
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                case 1:
                  {
                    this.state = 164
                    this._errHandler.sync(this)
                    _la = this._input.LA(1)
                    if (
                      ((_la & ~0x1f) === 0 &&
                        ((1 << _la) &
                          ((1 << smlParser.T__1) |
                            (1 << smlParser.T__3) |
                            (1 << smlParser.T__6) |
                            (1 << smlParser.T__8) |
                            (1 << smlParser.T__10) |
                            (1 << smlParser.T__12) |
                            (1 << smlParser.T__13) |
                            (1 << smlParser.T__15) |
                            (1 << smlParser.T__16) |
                            (1 << smlParser.T__17) |
                            (1 << smlParser.T__18) |
                            (1 << smlParser.T__19) |
                            (1 << smlParser.T__20) |
                            (1 << smlParser.T__21) |
                            (1 << smlParser.T__22) |
                            (1 << smlParser.T__23) |
                            (1 << smlParser.T__24) |
                            (1 << smlParser.T__25) |
                            (1 << smlParser.T__26) |
                            (1 << smlParser.T__27) |
                            (1 << smlParser.T__28) |
                            (1 << smlParser.T__29) |
                            (1 << smlParser.T__30))) !==
                          0) ||
                      (((_la - 32) & ~0x1f) === 0 &&
                        ((1 << (_la - 32)) &
                          ((1 << (smlParser.CHAR - 32)) |
                            (1 << (smlParser.STR - 32)) |
                            (1 << (smlParser.BOOL - 32)) |
                            (1 << (smlParser.REAL - 32)) |
                            (1 << (smlParser.INT - 32)) |
                            (1 << (smlParser.FN - 32)) |
                            (1 << (smlParser.IF - 32)))) !==
                          0) ||
                      _la === smlParser.LETTER
                    ) {
                      {
                        this.state = 163
                        this.expression(0)
                      }
                    }
                  }
                  break

                case 2:
                  {
                    {
                      this.state = 166
                      this.expression(0)
                      this.state = 169
                      this._errHandler.sync(this)
                      _la = this._input.LA(1)
                      do {
                        {
                          {
                            this.state = 167
                            this.match(smlParser.T__4)
                            this.state = 168
                            this.expression(0)
                          }
                        }
                        this.state = 171
                        this._errHandler.sync(this)
                        _la = this._input.LA(1)
                      } while (_la === smlParser.T__4)
                    }
                  }
                  break
              }
              this.state = 175
              this.match(smlParser.T__9)
            }
            break

          case 7:
            {
              _localctx = new ExpressionRecordSelectorContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 176
              this.match(smlParser.T__12)
              this.state = 177
              this.label()
            }
            break

          case 8:
            {
              _localctx = new ExpressionConstantContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 178
              this.constant()
            }
            break

          case 9:
            {
              _localctx = new ExpressionIdContext(_localctx)
              this._ctx = _localctx
              _prevctx = _localctx
              this.state = 179
              this.id()
            }
            break
        }
        this._ctx._stop = this._input.tryLT(-1)
        this.state = 190
        this._errHandler.sync(this)
        _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx)
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent()
            }
            _prevctx = _localctx
            {
              this.state = 188
              this._errHandler.sync(this)
              switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                case 1:
                  {
                    _localctx = new ExpressionApplicationInfixContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as ExpressionApplicationInfixContext)._left = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression)
                    this.state = 182
                    if (!this.precpred(this._ctx, 8)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 8)')
                    }
                    this.state = 183
                    ;(_localctx as ExpressionApplicationInfixContext)._operator = this.id()
                    this.state = 184
                    ;(_localctx as ExpressionApplicationInfixContext)._right = this.expression(9)
                  }
                  break

                case 2:
                  {
                    _localctx = new ExpressionApplicationPrefixContext(
                      new ExpressionContext(_parentctx, _parentState)
                    )
                    ;(_localctx as ExpressionApplicationPrefixContext)._operator = _prevctx
                    this.pushNewRecursionContext(_localctx, _startState, smlParser.RULE_expression)
                    this.state = 186
                    if (!this.precpred(this._ctx, 7)) {
                      throw this.createFailedPredicateException('this.precpred(this._ctx, 7)')
                    }
                    this.state = 187
                    ;(_localctx as ExpressionApplicationPrefixContext)._operand = this.expression(8)
                  }
                  break
              }
            }
          }
          this.state = 192
          this._errHandler.sync(this)
          _alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx)
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
  public keyvalue(): KeyvalueContext {
    const _localctx: KeyvalueContext = new KeyvalueContext(this._ctx, this.state)
    this.enterRule(_localctx, 18, smlParser.RULE_keyvalue)
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 193
        _localctx._key = this.label()
        this.state = 194
        this.match(smlParser.T__1)
        this.state = 195
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
  public label(): LabelContext {
    let _localctx: LabelContext = new LabelContext(this._ctx, this.state)
    this.enterRule(_localctx, 20, smlParser.RULE_label)
    try {
      this.state = 199
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case smlParser.T__1:
        case smlParser.T__10:
        case smlParser.T__12:
        case smlParser.T__13:
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
        case smlParser.T__30:
        case smlParser.LETTER:
          _localctx = new LabelIdContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 197
            this.id()
          }
          break
        case smlParser.INT:
          _localctx = new LabelIntContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 198
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
    this.enterRule(_localctx, 22, smlParser.RULE_id)
    let _la: number
    try {
      let _alt: number
      this.state = 213
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case smlParser.LETTER:
          _localctx = new IdAlphaContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 201
            this.match(smlParser.LETTER)
            this.state = 205
            this._errHandler.sync(this)
            _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx)
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 202
                    _la = this._input.LA(1)
                    if (
                      !(
                        _la === smlParser.T__13 ||
                        _la === smlParser.T__14 ||
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
              this.state = 207
              this._errHandler.sync(this)
              _alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx)
            }
          }
          break
        case smlParser.T__1:
        case smlParser.T__10:
        case smlParser.T__12:
        case smlParser.T__13:
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
        case smlParser.T__30:
          _localctx = new IdSymbolContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 209
            this._errHandler.sync(this)
            _alt = 1
            do {
              switch (_alt) {
                case 1:
                  {
                    {
                      this.state = 208
                      _la = this._input.LA(1)
                      if (
                        !(
                          (_la & ~0x1f) === 0 &&
                          ((1 << _la) &
                            ((1 << smlParser.T__1) |
                              (1 << smlParser.T__10) |
                              (1 << smlParser.T__12) |
                              (1 << smlParser.T__13) |
                              (1 << smlParser.T__15) |
                              (1 << smlParser.T__16) |
                              (1 << smlParser.T__17) |
                              (1 << smlParser.T__18) |
                              (1 << smlParser.T__19) |
                              (1 << smlParser.T__20) |
                              (1 << smlParser.T__21) |
                              (1 << smlParser.T__22) |
                              (1 << smlParser.T__23) |
                              (1 << smlParser.T__24) |
                              (1 << smlParser.T__25) |
                              (1 << smlParser.T__26) |
                              (1 << smlParser.T__27) |
                              (1 << smlParser.T__28) |
                              (1 << smlParser.T__29) |
                              (1 << smlParser.T__30))) !==
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
              this.state = 211
              this._errHandler.sync(this)
              _alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx)
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
    this.enterRule(_localctx, 24, smlParser.RULE_variable)
    let _la: number
    try {
      this.enterOuterAlt(_localctx, 1)
      {
        this.state = 215
        this.match(smlParser.T__13)
        this.state = 219
        this._errHandler.sync(this)
        _la = this._input.LA(1)
        while (
          _la === smlParser.T__13 ||
          _la === smlParser.T__14 ||
          _la === smlParser.DIGIT ||
          _la === smlParser.LETTER
        ) {
          {
            {
              this.state = 216
              _la = this._input.LA(1)
              if (
                !(
                  _la === smlParser.T__13 ||
                  _la === smlParser.T__14 ||
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
          this.state = 221
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
    this.enterRule(_localctx, 26, smlParser.RULE_constant)
    try {
      this.state = 227
      this._errHandler.sync(this)
      switch (this._input.LA(1)) {
        case smlParser.INT:
          _localctx = new ConstantIntContext(_localctx)
          this.enterOuterAlt(_localctx, 1)
          {
            this.state = 222
            this.match(smlParser.INT)
          }
          break
        case smlParser.REAL:
          _localctx = new ConstantRealContext(_localctx)
          this.enterOuterAlt(_localctx, 2)
          {
            this.state = 223
            this.match(smlParser.REAL)
          }
          break
        case smlParser.BOOL:
          _localctx = new ConstantBoolContext(_localctx)
          this.enterOuterAlt(_localctx, 3)
          {
            this.state = 224
            this.match(smlParser.BOOL)
          }
          break
        case smlParser.CHAR:
          _localctx = new ConstantCharContext(_localctx)
          this.enterOuterAlt(_localctx, 4)
          {
            this.state = 225
            this.match(smlParser.CHAR)
          }
          break
        case smlParser.STR:
          _localctx = new ConstantStrContext(_localctx)
          this.enterOuterAlt(_localctx, 5)
          {
            this.state = 226
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
        return this.pattern_sempred(_localctx as PatternContext, predIndex)

      case 8:
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
  private pattern_sempred(_localctx: PatternContext, predIndex: number): boolean {
    switch (predIndex) {
      case 1:
        return this.precpred(this._ctx, 6)
    }
    return true
  }
  private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
    switch (predIndex) {
      case 2:
        return this.precpred(this._ctx, 8)

      case 3:
        return this.precpred(this._ctx, 7)
    }
    return true
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03L\xE8\x04\x02' +
    '\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07' +
    '\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04' +
    '\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x05\x02"\n\x02\x03\x02' +
    "\x03\x02\x03\x02\x07\x02'\n\x02\f\x02\x0E\x02*\v\x02\x03\x03\x03\x03" +
    '\x03\x03\x03\x03\x03\x03\x05\x031\n\x03\x03\x04\x03\x04\x03\x04\x03\x04' +
    '\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06' +
    '\x03\x06\x07\x06A\n\x06\f\x06\x0E\x06D\v\x06\x03\x06\x03\x06\x03\x06\x03' +
    '\x06\x05\x06J\n\x06\x03\x06\x03\x06\x03\x06\x06\x06O\n\x06\r\x06\x0E\x06' +
    'P\x05\x06S\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07\x06Z\n\x06' +
    '\f\x06\x0E\x06]\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06c\n\x06\x03' +
    '\x06\x03\x06\x03\x06\x07\x06h\n\x06\f\x06\x0E\x06k\v\x06\x03\x07\x03\x07' +
    '\x03\x07\x03\x07\x03\x07\x05\x07r\n\x07\x03\b\x03\b\x03\b\x03\b\x03\t' +
    '\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x8C\n\n\x03\n\x03\n' +
    '\x03\n\x06\n\x91\n\n\r\n\x0E\n\x92\x05\n\x95\n\n\x03\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x07\n\x9E\n\n\f\n\x0E\n\xA1\v\n\x03\n\x03\n\x03\n' +
    '\x03\n\x05\n\xA7\n\n\x03\n\x03\n\x03\n\x06\n\xAC\n\n\r\n\x0E\n\xAD\x05' +
    '\n\xB0\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\xB7\n\n\x03\n\x03\n\x03' +
    '\n\x03\n\x03\n\x03\n\x07\n\xBF\n\n\f\n\x0E\n\xC2\v\n\x03\v\x03\v\x03\v' +
    '\x03\v\x03\f\x03\f\x05\f\xCA\n\f\x03\r\x03\r\x07\r\xCE\n\r\f\r\x0E\r\xD1' +
    '\v\r\x03\r\x06\r\xD4\n\r\r\r\x0E\r\xD5\x05\r\xD8\n\r\x03\x0E\x03\x0E\x07' +
    '\x0E\xDC\n\x0E\f\x0E\x0E\x0E\xDF\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F' +
    '\x03\x0F\x05\x0F\xE6\n\x0F\x03\x0F\x02\x02\x05\x02\n\x12\x10\x02\x02\x04' +
    '\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02' +
    '\x18\x02\x1A\x02\x1C\x02\x02\x04\x04\x02\x10\x11IJ\x06\x02\x04\x04\r\r' +
    '\x0F\x10\x12!\x02\u0102\x02!\x03\x02\x02\x02\x040\x03\x02\x02\x02\x06' +
    '2\x03\x02\x02\x02\b6\x03\x02\x02\x02\nb\x03\x02\x02\x02\fq\x03\x02\x02' +
    '\x02\x0Es\x03\x02\x02\x02\x10w\x03\x02\x02\x02\x12\xB6\x03\x02\x02\x02' +
    '\x14\xC3\x03\x02\x02\x02\x16\xC9\x03\x02\x02\x02\x18\xD7\x03\x02\x02\x02' +
    '\x1A\xD9\x03\x02\x02\x02\x1C\xE5\x03\x02\x02\x02\x1E\x1F\b\x02\x01\x02' +
    '\x1F"\x05\x04\x03\x02 "\x03\x02\x02\x02!\x1E\x03\x02\x02\x02! \x03\x02' +
    '\x02\x02"(\x03\x02\x02\x02#$\f\x05\x02\x02$%\x07\x03\x02\x02%\'\x05\x02' +
    "\x02\x06&#\x03\x02\x02\x02'*\x03\x02\x02\x02(&\x03\x02\x02\x02()\x03" +
    '\x02\x02\x02)\x03\x03\x02\x02\x02*(\x03\x02\x02\x02+,\x072\x02\x02,1\x05' +
    '\b\x05\x02-.\x07C\x02\x02.1\x05\x06\x04\x02/1\x05\x12\n\x020+\x03\x02' +
    '\x02\x020-\x03\x02\x02\x020/\x03\x02\x02\x021\x05\x03\x02\x02\x0223\x05' +
    '\x18\r\x0234\x07\x04\x02\x0245\x05\x12\n\x025\x07\x03\x02\x02\x0267\x05' +
    '\x18\r\x0278\x05\n\x06\x0289\x07\x04\x02\x029:\x05\x12\n\x02:\t\x03\x02' +
    '\x02\x02;<\b\x06\x01\x02<=\x07\x06\x02\x02=B\x05\n\x06\x02>?\x07\x07\x02' +
    '\x02?A\x05\n\x06\x02@>\x03\x02\x02\x02AD\x03\x02\x02\x02B@\x03\x02\x02' +
    '\x02BC\x03\x02\x02\x02CE\x03\x02\x02\x02DB\x03\x02\x02\x02EF\x07\b\x02' +
    '\x02Fc\x03\x02\x02\x02GR\x07\t\x02\x02HJ\x05\x10\t\x02IH\x03\x02\x02\x02' +
    'IJ\x03\x02\x02\x02JS\x03\x02\x02\x02KN\x05\x10\t\x02LM\x07\x07\x02\x02' +
    'MO\x05\x10\t\x02NL\x03\x02\x02\x02OP\x03\x02\x02\x02PN\x03\x02\x02\x02' +
    'PQ\x03\x02\x02\x02QS\x03\x02\x02\x02RI\x03\x02\x02\x02RK\x03\x02\x02\x02' +
    'ST\x03\x02\x02\x02Tc\x07\n\x02\x02UV\x07\v\x02\x02V[\x05\n\x06\x02WX\x07' +
    '\x07\x02\x02XZ\x05\n\x06\x02YW\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03' +
    '\x02\x02\x02[\\\x03\x02\x02\x02\\^\x03\x02\x02\x02][\x03\x02\x02\x02^' +
    '_\x07\f\x02\x02_c\x03\x02\x02\x02`c\x05\x1C\x0F\x02ac\x05\x18\r\x02b;' +
    '\x03\x02\x02\x02bG\x03\x02\x02\x02bU\x03\x02\x02\x02b`\x03\x02\x02\x02' +
    'ba\x03\x02\x02\x02ci\x03\x02\x02\x02de\f\b\x02\x02ef\x07\x05\x02\x02f' +
    'h\x05\n\x06\tgd\x03\x02\x02\x02hk\x03\x02\x02\x02ig\x03\x02\x02\x02ij' +
    '\x03\x02\x02\x02j\v\x03\x02\x02\x02ki\x03\x02\x02\x02lm\x05\x0E\b\x02' +
    'mn\x07\r\x02\x02no\x05\f\x07\x02or\x03\x02\x02\x02pr\x05\x0E\b\x02ql\x03' +
    '\x02\x02\x02qp\x03\x02\x02\x02r\r\x03\x02\x02\x02st\x05\n\x06\x02tu\x07' +
    '\x0E\x02\x02uv\x05\x12\n\x02v\x0F\x03\x02\x02\x02wx\x05\x16\f\x02xy\x07' +
    '\x04\x02\x02yz\x05\n\x06\x02z\x11\x03\x02\x02\x02{|\b\n\x01\x02|}\x07' +
    '\x06\x02\x02}~\x05\x12\n\x02~\x7F\x07\b\x02\x02\x7F\xB7\x03\x02\x02\x02' +
    '\x80\x81\x071\x02\x02\x81\xB7\x05\f\x07\x02\x82\x83\x074\x02\x02\x83\x84' +
    '\x05\x12\n\x02\x84\x85\x07A\x02\x02\x85\x86\x05\x12\n\x02\x86\x87\x07' +
    '.\x02\x02\x87\x88\x05\x12\n\v\x88\xB7\x03\x02\x02\x02\x89\x94\x07\t\x02' +
    '\x02\x8A\x8C\x05\x14\v\x02\x8B\x8A\x03\x02\x02\x02\x8B\x8C\x03\x02\x02' +
    '\x02\x8C\x95\x03\x02\x02\x02\x8D\x90\x05\x14\v\x02\x8E\x8F\x07\x07\x02' +
    '\x02\x8F\x91\x05\x14\v\x02\x90\x8E\x03\x02\x02\x02\x91\x92\x03\x02\x02' +
    '\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x95\x03\x02\x02' +
    '\x02\x94\x8B\x03\x02\x02\x02\x94\x8D\x03\x02\x02\x02\x95\x96\x03\x02\x02' +
    '\x02\x96\xB7\x07\n\x02\x02\x97\x98\x07\x06\x02\x02\x98\x99\x05\x12\n\x02' +
    '\x99\x9A\x07\x07\x02\x02\x9A\x9F\x05\x12\n\x02\x9B\x9C\x07\x07\x02\x02' +
    '\x9C\x9E\x05\x12\n\x02\x9D\x9B\x03\x02\x02\x02\x9E\xA1\x03\x02\x02\x02' +
    '\x9F\x9D\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x03\x02\x02\x02' +
    '\xA1\x9F\x03\x02\x02\x02\xA2\xA3\x07\b\x02\x02\xA3\xB7\x03\x02\x02\x02' +
    '\xA4\xAF\x07\v\x02\x02\xA5\xA7\x05\x12\n\x02\xA6\xA5\x03\x02\x02\x02\xA6' +
    '\xA7\x03\x02\x02\x02\xA7\xB0\x03\x02\x02\x02\xA8\xAB\x05\x12\n\x02\xA9' +
    '\xAA\x07\x07\x02\x02\xAA\xAC\x05\x12\n\x02\xAB\xA9\x03\x02\x02\x02\xAC' +
    '\xAD\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD\xAE\x03\x02\x02\x02\xAE' +
    '\xB0\x03\x02\x02\x02\xAF\xA6\x03\x02\x02\x02\xAF\xA8\x03\x02\x02\x02\xB0' +
    '\xB1\x03\x02\x02\x02\xB1\xB7\x07\f\x02\x02\xB2\xB3\x07\x0F\x02\x02\xB3' +
    '\xB7\x05\x16\f\x02\xB4\xB7\x05\x1C\x0F\x02\xB5\xB7\x05\x18\r\x02\xB6{' +
    '\x03\x02\x02\x02\xB6\x80\x03\x02\x02\x02\xB6\x82\x03\x02\x02\x02\xB6\x89' +
    '\x03\x02\x02\x02\xB6\x97\x03\x02\x02\x02\xB6\xA4\x03\x02\x02\x02\xB6\xB2' +
    '\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6\xB5\x03\x02\x02\x02\xB7\xC0' +
    '\x03\x02\x02\x02\xB8\xB9\f\n\x02\x02\xB9\xBA\x05\x18\r\x02\xBA\xBB\x05' +
    '\x12\n\v\xBB\xBF\x03\x02\x02\x02\xBC\xBD\f\t\x02\x02\xBD\xBF\x05\x12\n' +
    '\n\xBE\xB8\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02\xBF\xC2\x03\x02\x02' +
    '\x02\xC0\xBE\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\x13\x03\x02\x02' +
    '\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC4\x05\x16\f\x02\xC4\xC5\x07\x04\x02' +
    '\x02\xC5\xC6\x05\x12\n\x02\xC6\x15\x03\x02\x02\x02\xC7\xCA\x05\x18\r\x02' +
    '\xC8\xCA\x07&\x02\x02\xC9\xC7\x03\x02\x02\x02\xC9\xC8\x03\x02\x02\x02' +
    '\xCA\x17\x03\x02\x02\x02\xCB\xCF\x07J\x02\x02\xCC\xCE\t\x02\x02\x02\xCD' +
    '\xCC\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xCF' +
    '\xD0\x03\x02\x02\x02\xD0\xD8\x03\x02\x02\x02\xD1\xCF\x03\x02\x02\x02\xD2' +
    '\xD4\t\x03\x02\x02\xD3\xD2\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5' +
    '\xD3\x03\x02\x02\x02\xD5\xD6\x03\x02\x02\x02\xD6\xD8\x03\x02\x02\x02\xD7' +
    '\xCB\x03\x02\x02\x02\xD7\xD3\x03\x02\x02\x02\xD8\x19\x03\x02\x02\x02\xD9' +
    '\xDD\x07\x10\x02\x02\xDA\xDC\t\x02\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC' +
    '\xDF\x03\x02\x02\x02\xDD\xDB\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE' +
    '\x1B\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xE0\xE6\x07&\x02\x02\xE1' +
    '\xE6\x07%\x02\x02\xE2\xE6\x07$\x02\x02\xE3\xE6\x07"\x02\x02\xE4\xE6\x07' +
    '#\x02\x02\xE5\xE0\x03\x02\x02\x02\xE5\xE1\x03\x02\x02\x02\xE5\xE2\x03' +
    '\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\x1D\x03' +
    '\x02\x02\x02\x1D!(0BIPR[biq\x8B\x92\x94\x9F\xA6\xAD\xAF\xB6\xBE\xC0\xC9' +
    '\xCF\xD5\xD7\xDD\xE5'
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
export class DeclarationFunctionContext extends DeclarationContext {
  public FUN(): TerminalNode {
    return this.getToken(smlParser.FUN, 0)
  }
  public funbind(): FunbindContext {
    return this.getRuleContext(0, FunbindContext)
  }
  constructor(ctx: DeclarationContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterDeclarationFunction) {
      listener.enterDeclarationFunction(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitDeclarationFunction) {
      listener.exitDeclarationFunction(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitDeclarationFunction) {
      return visitor.visitDeclarationFunction(this)
    } else {
      return visitor.visitChildren(this)
    }
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

export class FunbindContext extends ParserRuleContext {
  public _name!: IdContext
  public _pat!: PatternContext
  public _body!: ExpressionContext
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)
  }
  public pattern(): PatternContext {
    return this.getRuleContext(0, PatternContext)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return smlParser.RULE_funbind
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterFunbind) {
      listener.enterFunbind(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitFunbind) {
      listener.exitFunbind(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitFunbind) {
      return visitor.visitFunbind(this)
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
export class PatternInfixContext extends PatternContext {
  public pattern(): PatternContext[]
  public pattern(i: number): PatternContext
  public pattern(i?: number): PatternContext | PatternContext[] {
    if (i === undefined) {
      return this.getRuleContexts(PatternContext)
    } else {
      return this.getRuleContext(i, PatternContext)
    }
  }
  constructor(ctx: PatternContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterPatternInfix) {
      listener.enterPatternInfix(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitPatternInfix) {
      listener.exitPatternInfix(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitPatternInfix) {
      return visitor.visitPatternInfix(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PatternTupleContext extends PatternContext {
  public pattern(): PatternContext[]
  public pattern(i: number): PatternContext
  public pattern(i?: number): PatternContext | PatternContext[] {
    if (i === undefined) {
      return this.getRuleContexts(PatternContext)
    } else {
      return this.getRuleContext(i, PatternContext)
    }
  }
  constructor(ctx: PatternContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterPatternTuple) {
      listener.enterPatternTuple(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitPatternTuple) {
      listener.exitPatternTuple(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitPatternTuple) {
      return visitor.visitPatternTuple(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PatternRecordContext extends PatternContext {
  public keypattern(): KeypatternContext[]
  public keypattern(i: number): KeypatternContext
  public keypattern(i?: number): KeypatternContext | KeypatternContext[] {
    if (i === undefined) {
      return this.getRuleContexts(KeypatternContext)
    } else {
      return this.getRuleContext(i, KeypatternContext)
    }
  }
  constructor(ctx: PatternContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterPatternRecord) {
      listener.enterPatternRecord(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitPatternRecord) {
      listener.exitPatternRecord(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitPatternRecord) {
      return visitor.visitPatternRecord(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class PatternListContext extends PatternContext {
  public pattern(): PatternContext[]
  public pattern(i: number): PatternContext
  public pattern(i?: number): PatternContext | PatternContext[] {
    if (i === undefined) {
      return this.getRuleContexts(PatternContext)
    } else {
      return this.getRuleContext(i, PatternContext)
    }
  }
  constructor(ctx: PatternContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterPatternList) {
      listener.enterPatternList(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitPatternList) {
      listener.exitPatternList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitPatternList) {
      return visitor.visitPatternList(this)
    } else {
      return visitor.visitChildren(this)
    }
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

export class MatchSmlContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return smlParser.RULE_matchSml
  }
  public copyFrom(ctx: MatchSmlContext): void {
    super.copyFrom(ctx)
  }
}
export class MatchSequenceContext extends MatchSmlContext {
  public _matchRule!: MruleContext
  public _rest!: MatchSmlContext
  public mrule(): MruleContext {
    return this.getRuleContext(0, MruleContext)
  }
  public matchSml(): MatchSmlContext {
    return this.getRuleContext(0, MatchSmlContext)
  }
  constructor(ctx: MatchSmlContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterMatchSequence) {
      listener.enterMatchSequence(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitMatchSequence) {
      listener.exitMatchSequence(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitMatchSequence) {
      return visitor.visitMatchSequence(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class MatchAtomicContext extends MatchSmlContext {
  public _matchRule!: MruleContext
  public mrule(): MruleContext {
    return this.getRuleContext(0, MruleContext)
  }
  constructor(ctx: MatchSmlContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterMatchAtomic) {
      listener.enterMatchAtomic(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitMatchAtomic) {
      listener.exitMatchAtomic(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitMatchAtomic) {
      return visitor.visitMatchAtomic(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class MruleContext extends ParserRuleContext {
  public _pat!: PatternContext
  public _exp!: ExpressionContext
  public pattern(): PatternContext {
    return this.getRuleContext(0, PatternContext)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return smlParser.RULE_mrule
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterMrule) {
      listener.enterMrule(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitMrule) {
      listener.exitMrule(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitMrule) {
      return visitor.visitMrule(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class KeypatternContext extends ParserRuleContext {
  public _key!: LabelContext
  public _pat!: PatternContext
  public label(): LabelContext {
    return this.getRuleContext(0, LabelContext)
  }
  public pattern(): PatternContext {
    return this.getRuleContext(0, PatternContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return smlParser.RULE_keypattern
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterKeypattern) {
      listener.enterKeypattern(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitKeypattern) {
      listener.exitKeypattern(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitKeypattern) {
      return visitor.visitKeypattern(this)
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
export class ExpressionLambdaContext extends ExpressionContext {
  public FN(): TerminalNode {
    return this.getToken(smlParser.FN, 0)
  }
  public matchSml(): MatchSmlContext {
    return this.getRuleContext(0, MatchSmlContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterExpressionLambda) {
      listener.enterExpressionLambda(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitExpressionLambda) {
      listener.exitExpressionLambda(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitExpressionLambda) {
      return visitor.visitExpressionLambda(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ExpressionConditionalContext extends ExpressionContext {
  public _pred!: ExpressionContext
  public _cons!: ExpressionContext
  public _alt!: ExpressionContext
  public IF(): TerminalNode {
    return this.getToken(smlParser.IF, 0)
  }
  public THEN(): TerminalNode {
    return this.getToken(smlParser.THEN, 0)
  }
  public ELSE(): TerminalNode {
    return this.getToken(smlParser.ELSE, 0)
  }
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
    if (listener.enterExpressionConditional) {
      listener.enterExpressionConditional(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitExpressionConditional) {
      listener.exitExpressionConditional(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitExpressionConditional) {
      return visitor.visitExpressionConditional(this)
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
export class ExpressionRecordContext extends ExpressionContext {
  public keyvalue(): KeyvalueContext[]
  public keyvalue(i: number): KeyvalueContext
  public keyvalue(i?: number): KeyvalueContext | KeyvalueContext[] {
    if (i === undefined) {
      return this.getRuleContexts(KeyvalueContext)
    } else {
      return this.getRuleContext(i, KeyvalueContext)
    }
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterExpressionRecord) {
      listener.enterExpressionRecord(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitExpressionRecord) {
      listener.exitExpressionRecord(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitExpressionRecord) {
      return visitor.visitExpressionRecord(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ExpressionTupleContext extends ExpressionContext {
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
    if (listener.enterExpressionTuple) {
      listener.enterExpressionTuple(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitExpressionTuple) {
      listener.exitExpressionTuple(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitExpressionTuple) {
      return visitor.visitExpressionTuple(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ExpressionListContext extends ExpressionContext {
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
    if (listener.enterExpressionList) {
      listener.enterExpressionList(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitExpressionList) {
      listener.exitExpressionList(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitExpressionList) {
      return visitor.visitExpressionList(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class ExpressionRecordSelectorContext extends ExpressionContext {
  public label(): LabelContext {
    return this.getRuleContext(0, LabelContext)
  }
  constructor(ctx: ExpressionContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterExpressionRecordSelector) {
      listener.enterExpressionRecordSelector(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitExpressionRecordSelector) {
      listener.exitExpressionRecordSelector(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitExpressionRecordSelector) {
      return visitor.visitExpressionRecordSelector(this)
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

export class KeyvalueContext extends ParserRuleContext {
  public _key!: LabelContext
  public _value!: ExpressionContext
  public label(): LabelContext {
    return this.getRuleContext(0, LabelContext)
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext)
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return smlParser.RULE_keyvalue
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterKeyvalue) {
      listener.enterKeyvalue(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitKeyvalue) {
      listener.exitKeyvalue(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitKeyvalue) {
      return visitor.visitKeyvalue(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}

export class LabelContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState)
  }
  // @Override
  public get ruleIndex(): number {
    return smlParser.RULE_label
  }
  public copyFrom(ctx: LabelContext): void {
    super.copyFrom(ctx)
  }
}
export class LabelIdContext extends LabelContext {
  public id(): IdContext {
    return this.getRuleContext(0, IdContext)
  }
  constructor(ctx: LabelContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterLabelId) {
      listener.enterLabelId(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitLabelId) {
      listener.exitLabelId(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitLabelId) {
      return visitor.visitLabelId(this)
    } else {
      return visitor.visitChildren(this)
    }
  }
}
export class LabelIntContext extends LabelContext {
  public INT(): TerminalNode {
    return this.getToken(smlParser.INT, 0)
  }
  constructor(ctx: LabelContext) {
    super(ctx.parent, ctx.invokingState)
    this.copyFrom(ctx)
  }
  // @Override
  public enterRule(listener: smlListener): void {
    if (listener.enterLabelInt) {
      listener.enterLabelInt(this)
    }
  }
  // @Override
  public exitRule(listener: smlListener): void {
    if (listener.exitLabelInt) {
      listener.exitLabelInt(this)
    }
  }
  // @Override
  public accept<Result>(visitor: smlVisitor<Result>): Result {
    if (visitor.visitLabelInt) {
      return visitor.visitLabelInt(this)
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
