// Generated from ./src/lang/sml.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator'
import { CharStream } from 'antlr4ts/CharStream'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { Lexer } from 'antlr4ts/Lexer'
import * as Utils from 'antlr4ts/misc/Utils'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

export class smlLexer extends Lexer {
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

  // tslint:disable:no-trailing-whitespace
  public static readonly channelNames: string[] = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN']

  // tslint:disable:no-trailing-whitespace
  public static readonly modeNames: string[] = ['DEFAULT_MODE']

  public static readonly ruleNames: string[] = [
    'T__0',
    'T__1',
    'T__2',
    'T__3',
    'T__4',
    'T__5',
    'T__6',
    'T__7',
    'T__8',
    'T__9',
    'T__10',
    'T__11',
    'T__12',
    'T__13',
    'T__14',
    'T__15',
    'T__16',
    'T__17',
    'T__18',
    'T__19',
    'T__20',
    'T__21',
    'T__22',
    'T__23',
    'T__24',
    'T__25',
    'T__26',
    'T__27',
    'T__28',
    'T__29',
    'T__30',
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
    smlLexer._LITERAL_NAMES,
    smlLexer._SYMBOLIC_NAMES,
    []
  )

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return smlLexer.VOCABULARY
  }
  // tslint:enable:no-trailing-whitespace

  constructor(input: CharStream) {
    super(input)
    this._interp = new LexerATNSimulator(smlLexer._ATN, this)
  }

  // @Override
  public get grammarFileName(): string {
    return 'sml.g4'
  }

  // @Override
  public get ruleNames(): string[] {
    return smlLexer.ruleNames
  }

  // @Override
  public get serializedATN(): string {
    return smlLexer._serializedATN
  }

  // @Override
  public get channelNames(): string[] {
    return smlLexer.channelNames
  }

  // @Override
  public get modeNames(): string[] {
    return smlLexer.modeNames
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02L\u01C8\b\x01' +
    '\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06' +
    '\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r' +
    '\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t' +
    '\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t' +
    '\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t' +
    '\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t' +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04" +
    '+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04' +
    '4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04' +
    '=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04' +
    'F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x03\x02\x03\x02\x03\x03\x03' +
    '\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03' +
    '\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r' +
    '\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03' +
    '\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03' +
    '\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03' +
    '\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03' +
    '\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!\x03!\x03!\x03!\x05!\xDE\n!\x03!' +
    '\x03!\x03"\x03"\x03"\x03"\x07"\xE6\n"\f"\x0E"\xE9\v"\x03"\x03' +
    '"\x03#\x03#\x05#\xEF\n#\x03$\x06$\xF2\n$\r$\x0E$\xF3\x03$\x03$\x06$\xF8' +
    '\n$\r$\x0E$\xF9\x03%\x06%\xFD\n%\r%\x0E%\xFE\x03&\x03&\x03&\x03&\x03&' +
    "\x03&\x03&\x03&\x03'\x03'\x03'\x03'\x03(\x03(\x03(\x03(\x03(\x03(" +
    '\x03(\x03(\x03)\x03)\x03)\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03' +
    '+\x03+\x03+\x03+\x03+\x03+\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03' +
    '.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03/\x03' +
    '0\x030\x030\x031\x031\x031\x031\x032\x032\x032\x032\x032\x032\x032\x03' +
    '3\x033\x033\x034\x034\x034\x035\x035\x035\x035\x035\x035\x036\x036\x03' +
    '6\x036\x036\x036\x036\x037\x037\x037\x037\x038\x038\x038\x038\x038\x03' +
    '8\x039\x039\x039\x039\x039\x039\x039\x03:\x03:\x03:\x03;\x03;\x03;\x03' +
    '<\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03=\x03=\x03>\x03>\x03' +
    '>\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03@\x03@\x03@\x03@\x03@\x03A\x03' +
    'A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03C\x03D\x03' +
    'D\x03D\x03D\x03D\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03E\x03' +
    'F\x03F\x03F\x03F\x03F\x03G\x03G\x03G\x03G\x03G\x03G\x03H\x03H\x03I\x03' +
    'I\x03J\x05J\u01BC\nJ\x03J\x03J\x05J\u01C0\nJ\x03K\x06K\u01C3\nK\rK\x0E' +
    'K\u01C4\x03K\x03K\x02\x02\x02L\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02' +
    '\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02' +
    '\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%' +
    "\x02\x14'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B" +
    '5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02"C\x02#E\x02$G\x02' +
    "%I\x02&K\x02'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_" +
    '\x021a\x022c\x023e\x024g\x025i\x026k\x027m\x028o\x029q\x02:s\x02;u\x02' +
    '<w\x02=y\x02>{\x02?}\x02@\x7F\x02A\x81\x02B\x83\x02C\x85\x02D\x87\x02' +
    'E\x89\x02F\x8B\x02G\x8D\x02H\x8F\x02I\x91\x02J\x93\x02K\x95\x02L\x03\x02' +
    '\x05\x03\x022;\x04\x02C\\c|\x04\x02\v\v""\x02\u01D3\x02\x03\x03\x02' +
    '\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02' +
    '\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02' +
    '\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02' +
    '\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02' +
    '\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02' +
    "\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02'\x03\x02\x02\x02\x02" +
    ')\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02' +
    '\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02' +
    '\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03' +
    '\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02' +
    '\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02' +
    'K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02' +
    '\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02' +
    '\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03' +
    '\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02' +
    '\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02' +
    'm\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02' +
    '\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02' +
    '\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02' +
    '\x81\x03\x02\x02\x02\x02\x83\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02' +
    '\x87\x03\x02\x02\x02\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x02' +
    '\x8D\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02\x02\x91\x03\x02\x02\x02\x02' +
    '\x93\x03\x02\x02\x02\x02\x95\x03\x02\x02\x02\x03\x97\x03\x02\x02\x02\x05' +
    '\x99\x03\x02\x02\x02\x07\x9B\x03\x02\x02\x02\t\x9E\x03\x02\x02\x02\v\xA0' +
    '\x03\x02\x02\x02\r\xA2\x03\x02\x02\x02\x0F\xA4\x03\x02\x02\x02\x11\xA6' +
    '\x03\x02\x02\x02\x13\xA8\x03\x02\x02\x02\x15\xAA\x03\x02\x02\x02\x17\xAC' +
    '\x03\x02\x02\x02\x19\xAE\x03\x02\x02\x02\x1B\xB1\x03\x02\x02\x02\x1D\xB3' +
    '\x03\x02\x02\x02\x1F\xB5\x03\x02\x02\x02!\xB7\x03\x02\x02\x02#\xB9\x03' +
    "\x02\x02\x02%\xBB\x03\x02\x02\x02'\xBD\x03\x02\x02\x02)\xBF\x03\x02\x02" +
    '\x02+\xC1\x03\x02\x02\x02-\xC3\x03\x02\x02\x02/\xC5\x03\x02\x02\x021\xC7' +
    '\x03\x02\x02\x023\xC9\x03\x02\x02\x025\xCB\x03\x02\x02\x027\xCD\x03\x02' +
    '\x02\x029\xCF\x03\x02\x02\x02;\xD1\x03\x02\x02\x02=\xD3\x03\x02\x02\x02' +
    '?\xD5\x03\x02\x02\x02A\xD7\x03\x02\x02\x02C\xE1\x03\x02\x02\x02E\xEE\x03' +
    '\x02\x02\x02G\xF1\x03\x02\x02\x02I\xFC\x03\x02\x02\x02K\u0100\x03\x02' +
    '\x02\x02M\u0108\x03\x02\x02\x02O\u010C\x03\x02\x02\x02Q\u0114\x03\x02' +
    '\x02\x02S\u0117\x03\x02\x02\x02U\u011C\x03\x02\x02\x02W\u0125\x03\x02' +
    '\x02\x02Y\u0128\x03\x02\x02\x02[\u012D\x03\x02\x02\x02]\u0131\x03\x02' +
    '\x02\x02_\u013B\x03\x02\x02\x02a\u013E\x03\x02\x02\x02c\u0142\x03\x02' +
    '\x02\x02e\u0149\x03\x02\x02\x02g\u014C\x03\x02\x02\x02i\u014F\x03\x02' +
    '\x02\x02k\u0155\x03\x02\x02\x02m\u015C\x03\x02\x02\x02o\u0160\x03\x02' +
    '\x02\x02q\u0166\x03\x02\x02\x02s\u016D\x03\x02\x02\x02u\u0170\x03\x02' +
    '\x02\x02w\u0173\x03\x02\x02\x02y\u0178\x03\x02\x02\x02{\u017F\x03\x02' +
    '\x02\x02}\u0185\x03\x02\x02\x02\x7F\u0189\x03\x02\x02\x02\x81\u018E\x03' +
    '\x02\x02\x02\x83\u0193\x03\x02\x02\x02\x85\u0197\x03\x02\x02\x02\x87\u019C' +
    '\x03\x02\x02\x02\x89\u01A5\x03\x02\x02\x02\x8B\u01AB\x03\x02\x02\x02\x8D' +
    '\u01B0\x03\x02\x02\x02\x8F\u01B6\x03\x02\x02\x02\x91\u01B8\x03\x02\x02' +
    '\x02\x93\u01BF\x03\x02\x02\x02\x95\u01C2\x03\x02\x02\x02\x97\x98\x07=' +
    '\x02\x02\x98\x04\x03\x02\x02\x02\x99\x9A\x07?\x02\x02\x9A\x06\x03\x02' +
    '\x02\x02\x9B\x9C\x07<\x02\x02\x9C\x9D\x07<\x02\x02\x9D\b\x03\x02\x02\x02' +
    '\x9E\x9F\x07*\x02\x02\x9F\n\x03\x02\x02\x02\xA0\xA1\x07.\x02\x02\xA1\f' +
    '\x03\x02\x02\x02\xA2\xA3\x07+\x02\x02\xA3\x0E\x03\x02\x02\x02\xA4\xA5' +
    '\x07}\x02\x02\xA5\x10\x03\x02\x02\x02\xA6\xA7\x07\x7F\x02\x02\xA7\x12' +
    '\x03\x02\x02\x02\xA8\xA9\x07]\x02\x02\xA9\x14\x03\x02\x02\x02\xAA\xAB' +
    '\x07_\x02\x02\xAB\x16\x03\x02\x02\x02\xAC\xAD\x07~\x02\x02\xAD\x18\x03' +
    '\x02\x02\x02\xAE\xAF\x07?\x02\x02\xAF\xB0\x07@\x02\x02\xB0\x1A\x03\x02' +
    '\x02\x02\xB1\xB2\x07%\x02\x02\xB2\x1C\x03\x02\x02\x02\xB3\xB4\x07)\x02' +
    '\x02\xB4\x1E\x03\x02\x02\x02\xB5\xB6\x07a\x02\x02\xB6 \x03\x02\x02\x02' +
    '\xB7\xB8\x07#\x02\x02\xB8"\x03\x02\x02\x02\xB9\xBA\x07\'\x02\x02\xBA' +
    '$\x03\x02\x02\x02\xBB\xBC\x07(\x02\x02\xBC&\x03\x02\x02\x02\xBD\xBE\x07' +
    '&\x02\x02\xBE(\x03\x02\x02\x02\xBF\xC0\x07-\x02\x02\xC0*\x03\x02\x02\x02' +
    '\xC1\xC2\x07/\x02\x02\xC2,\x03\x02\x02\x02\xC3\xC4\x071\x02\x02\xC4.\x03' +
    '\x02\x02\x02\xC5\xC6\x07<\x02\x02\xC60\x03\x02\x02\x02\xC7\xC8\x07>\x02' +
    '\x02\xC82\x03\x02\x02\x02\xC9\xCA\x07@\x02\x02\xCA4\x03\x02\x02\x02\xCB' +
    '\xCC\x07A\x02\x02\xCC6\x03\x02\x02\x02\xCD\xCE\x07B\x02\x02\xCE8\x03\x02' +
    '\x02\x02\xCF\xD0\x07^\x02\x02\xD0:\x03\x02\x02\x02\xD1\xD2\x07\x80\x02' +
    '\x02\xD2<\x03\x02\x02\x02\xD3\xD4\x07`\x02\x02\xD4>\x03\x02\x02\x02\xD5' +
    '\xD6\x07,\x02\x02\xD6@\x03\x02\x02\x02\xD7\xD8\x07%\x02\x02\xD8\xD9\x07' +
    '$\x02\x02\xD9\xDD\x03\x02\x02\x02\xDA\xDE\x05\x95K\x02\xDB\xDE\x05\x8F' +
    'H\x02\xDC\xDE\x05\x91I\x02\xDD\xDA\x03\x02\x02\x02\xDD\xDB\x03\x02\x02' +
    '\x02\xDD\xDC\x03\x02\x02\x02\xDE\xDF\x03\x02\x02\x02\xDF\xE0\x07$\x02' +
    '\x02\xE0B\x03\x02\x02\x02\xE1\xE7\x07$\x02\x02\xE2\xE6\x05\x95K\x02\xE3' +
    '\xE6\x05\x8FH\x02\xE4\xE6\x05\x91I\x02\xE5\xE2\x03\x02\x02\x02\xE5\xE3' +
    '\x03\x02\x02\x02\xE5\xE4\x03\x02\x02\x02\xE6\xE9\x03\x02\x02\x02\xE7\xE5' +
    '\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8\xEA\x03\x02\x02\x02\xE9\xE7' +
    '\x03\x02\x02\x02\xEA\xEB\x07$\x02\x02\xEBD\x03\x02\x02\x02\xEC\xEF\x05' +
    '\x8BF\x02\xED\xEF\x05\x8DG\x02\xEE\xEC\x03\x02\x02\x02\xEE\xED\x03\x02' +
    '\x02\x02\xEFF\x03\x02\x02\x02\xF0\xF2\x05\x8FH\x02\xF1\xF0\x03\x02\x02' +
    '\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02' +
    '\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF7\x070\x02\x02\xF6\xF8\x05\x8FH\x02' +
    '\xF7\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xF7\x03\x02\x02\x02' +
    '\xF9\xFA\x03\x02\x02\x02\xFAH\x03\x02\x02\x02\xFB\xFD\x05\x8FH\x02\xFC' +
    '\xFB\x03\x02\x02\x02\xFD\xFE\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02\xFE' +
    '\xFF\x03\x02\x02\x02\xFFJ\x03\x02\x02\x02\u0100\u0101\x07c\x02\x02\u0101' +
    '\u0102\x07d\x02\x02\u0102\u0103\x07u\x02\x02\u0103\u0104\x07v\x02\x02' +
    '\u0104\u0105\x07{\x02\x02\u0105\u0106\x07r\x02\x02\u0106\u0107\x07g\x02' +
    '\x02\u0107L\x03\x02\x02\x02\u0108\u0109\x07c\x02\x02\u0109\u010A\x07p' +
    '\x02\x02\u010A\u010B\x07f\x02\x02\u010BN\x03\x02\x02\x02\u010C\u010D\x07' +
    'c\x02\x02\u010D\u010E\x07p\x02\x02\u010E\u010F\x07f\x02\x02\u010F\u0110' +
    '\x07c\x02\x02\u0110\u0111\x07n\x02\x02\u0111\u0112\x07u\x02\x02\u0112' +
    '\u0113\x07q\x02\x02\u0113P\x03\x02\x02\x02\u0114\u0115\x07c\x02\x02\u0115' +
    '\u0116\x07u\x02\x02\u0116R\x03\x02\x02\x02\u0117\u0118\x07e\x02\x02\u0118' +
    '\u0119\x07c\x02\x02\u0119\u011A\x07u\x02\x02\u011A\u011B\x07g\x02\x02' +
    '\u011BT\x03\x02\x02\x02\u011C\u011D\x07f\x02\x02\u011D\u011E\x07c\x02' +
    '\x02\u011E\u011F\x07v\x02\x02\u011F\u0120\x07c\x02\x02\u0120\u0121\x07' +
    'v\x02\x02\u0121\u0122\x07{\x02\x02\u0122\u0123\x07r\x02\x02\u0123\u0124' +
    '\x07g\x02\x02\u0124V\x03\x02\x02\x02\u0125\u0126\x07f\x02\x02\u0126\u0127' +
    '\x07q\x02\x02\u0127X\x03\x02\x02\x02\u0128\u0129\x07g\x02\x02\u0129\u012A' +
    '\x07n\x02\x02\u012A\u012B\x07u\x02\x02\u012B\u012C\x07g\x02\x02\u012C' +
    'Z\x03\x02\x02\x02\u012D\u012E\x07g\x02\x02\u012E\u012F\x07p\x02\x02\u012F' +
    '\u0130\x07f\x02\x02\u0130\\\x03\x02\x02\x02\u0131\u0132\x07g\x02\x02\u0132' +
    '\u0133\x07z\x02\x02\u0133\u0134\x07e\x02\x02\u0134\u0135\x07g\x02\x02' +
    '\u0135\u0136\x07r\x02\x02\u0136\u0137\x07v\x02\x02\u0137\u0138\x07k\x02' +
    '\x02\u0138\u0139\x07q\x02\x02\u0139\u013A\x07p\x02\x02\u013A^\x03\x02' +
    '\x02\x02\u013B\u013C\x07h\x02\x02\u013C\u013D\x07p\x02\x02\u013D`\x03' +
    '\x02\x02\x02\u013E\u013F\x07h\x02\x02\u013F\u0140\x07w\x02\x02\u0140\u0141' +
    '\x07p\x02\x02\u0141b\x03\x02\x02\x02\u0142\u0143\x07j\x02\x02\u0143\u0144' +
    '\x07c\x02\x02\u0144\u0145\x07p\x02\x02\u0145\u0146\x07f\x02\x02\u0146' +
    '\u0147\x07n\x02\x02\u0147\u0148\x07g\x02\x02\u0148d\x03\x02\x02\x02\u0149' +
    '\u014A\x07k\x02\x02\u014A\u014B\x07h\x02\x02\u014Bf\x03\x02\x02\x02\u014C' +
    '\u014D\x07k\x02\x02\u014D\u014E\x07p\x02\x02\u014Eh\x03\x02\x02\x02\u014F' +
    '\u0150\x07k\x02\x02\u0150\u0151\x07p\x02\x02\u0151\u0152\x07h\x02\x02' +
    '\u0152\u0153\x07k\x02\x02\u0153\u0154\x07z\x02\x02\u0154j\x03\x02\x02' +
    '\x02\u0155\u0156\x07k\x02\x02\u0156\u0157\x07p\x02\x02\u0157\u0158\x07' +
    'h\x02\x02\u0158\u0159\x07k\x02\x02\u0159\u015A\x07z\x02\x02\u015A\u015B' +
    '\x07t\x02\x02\u015Bl\x03\x02\x02\x02\u015C\u015D\x07n\x02\x02\u015D\u015E' +
    '\x07g\x02\x02\u015E\u015F\x07v\x02\x02\u015Fn\x03\x02\x02\x02\u0160\u0161' +
    '\x07n\x02\x02\u0161\u0162\x07q\x02\x02\u0162\u0163\x07e\x02\x02\u0163' +
    '\u0164\x07c\x02\x02\u0164\u0165\x07n\x02\x02\u0165p\x03\x02\x02\x02\u0166' +
    '\u0167\x07p\x02\x02\u0167\u0168\x07q\x02\x02\u0168\u0169\x07p\x02\x02' +
    '\u0169\u016A\x07h\x02\x02\u016A\u016B\x07k\x02\x02\u016B\u016C\x07z\x02' +
    '\x02\u016Cr\x03\x02\x02\x02\u016D\u016E\x07q\x02\x02\u016E\u016F\x07h' +
    '\x02\x02\u016Ft\x03\x02\x02\x02\u0170\u0171\x07q\x02\x02\u0171\u0172\x07' +
    'r\x02\x02\u0172v\x03\x02\x02\x02\u0173\u0174\x07q\x02\x02\u0174\u0175' +
    '\x07r\x02\x02\u0175\u0176\x07g\x02\x02\u0176\u0177\x07p\x02\x02\u0177' +
    'x\x03\x02\x02\x02\u0178\u0179\x07q\x02\x02\u0179\u017A\x07t\x02\x02\u017A' +
    '\u017B\x07g\x02\x02\u017B\u017C\x07n\x02\x02\u017C\u017D\x07u\x02\x02' +
    '\u017D\u017E\x07g\x02\x02\u017Ez\x03\x02\x02\x02\u017F\u0180\x07t\x02' +
    '\x02\u0180\u0181\x07c\x02\x02\u0181\u0182\x07k\x02\x02\u0182\u0183\x07' +
    'u\x02\x02\u0183\u0184\x07g\x02\x02\u0184|\x03\x02\x02\x02\u0185\u0186' +
    '\x07t\x02\x02\u0186\u0187\x07g\x02\x02\u0187\u0188\x07e\x02\x02\u0188' +
    '~\x03\x02\x02\x02\u0189\u018A\x07v\x02\x02\u018A\u018B\x07j\x02\x02\u018B' +
    '\u018C\x07g\x02\x02\u018C\u018D\x07p\x02\x02\u018D\x80\x03\x02\x02\x02' +
    '\u018E\u018F\x07v\x02\x02\u018F\u0190\x07{\x02\x02\u0190\u0191\x07r\x02' +
    '\x02\u0191\u0192\x07g\x02\x02\u0192\x82\x03\x02\x02\x02\u0193\u0194\x07' +
    'x\x02\x02\u0194\u0195\x07c\x02\x02\u0195\u0196\x07n\x02\x02\u0196\x84' +
    '\x03\x02\x02\x02\u0197\u0198\x07y\x02\x02\u0198\u0199\x07k\x02\x02\u0199' +
    '\u019A\x07v\x02\x02\u019A\u019B\x07j\x02\x02\u019B\x86\x03\x02\x02\x02' +
    '\u019C\u019D\x07y\x02\x02\u019D\u019E\x07k\x02\x02\u019E\u019F\x07v\x02' +
    '\x02\u019F\u01A0\x07j\x02\x02\u01A0\u01A1\x07v\x02\x02\u01A1\u01A2\x07' +
    '{\x02\x02\u01A2\u01A3\x07r\x02\x02\u01A3\u01A4\x07g\x02\x02\u01A4\x88' +
    '\x03\x02\x02\x02\u01A5\u01A6\x07y\x02\x02\u01A6\u01A7\x07j\x02\x02\u01A7' +
    '\u01A8\x07k\x02\x02\u01A8\u01A9\x07n\x02\x02\u01A9\u01AA\x07g\x02\x02' +
    '\u01AA\x8A\x03\x02\x02\x02\u01AB\u01AC\x07v\x02\x02\u01AC\u01AD\x07t\x02' +
    '\x02\u01AD\u01AE\x07w\x02\x02\u01AE\u01AF\x07g\x02\x02\u01AF\x8C\x03\x02' +
    '\x02\x02\u01B0\u01B1\x07h\x02\x02\u01B1\u01B2\x07c\x02\x02\u01B2\u01B3' +
    '\x07n\x02\x02\u01B3\u01B4\x07u\x02\x02\u01B4\u01B5\x07g\x02\x02\u01B5' +
    '\x8E\x03\x02\x02\x02\u01B6\u01B7\t\x02\x02\x02\u01B7\x90\x03\x02\x02\x02' +
    '\u01B8\u01B9\t\x03\x02\x02\u01B9\x92\x03\x02\x02\x02\u01BA\u01BC\x07\x0F' +
    '\x02\x02\u01BB\u01BA\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC' +
    '\u01BD\x03\x02\x02\x02\u01BD\u01C0\x07\f\x02\x02\u01BE\u01C0\x07\x0F\x02' +
    '\x02\u01BF\u01BB\x03\x02\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0\x94' +
    '\x03\x02\x02\x02\u01C1\u01C3\t\x04\x02\x02\u01C2\u01C1\x03\x02\x02\x02' +
    '\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C4\u01C5\x03' +
    '\x02\x02\x02\u01C5\u01C6\x03\x02\x02\x02\u01C6\u01C7\bK\x02\x02\u01C7' +
    '\x96\x03\x02\x02\x02\r\x02\xDD\xE5\xE7\xEE\xF3\xF9\xFE\u01BB\u01BF\u01C4' +
    '\x03\b\x02\x02'
  public static __ATN: ATN
  public static get _ATN(): ATN {
    if (!smlLexer.__ATN) {
      smlLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(smlLexer._serializedATN))
    }

    return smlLexer.__ATN
  }
}
