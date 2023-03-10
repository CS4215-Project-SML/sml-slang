// Generated from ./src/lang/sml.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class smlLexer extends Lexer {
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
	public static readonly TRUE = 27;
	public static readonly FALSE = 28;
	public static readonly DIGIT = 29;
	public static readonly LETTER = 30;
	public static readonly WHITESPACE = 31;
	public static readonly NEWLINE = 32;
	public static readonly SYMBOL = 33;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "TRUE", "FALSE", "DIGIT", "LETTER", "WHITESPACE", "NEWLINE", 
		"SYMBOL",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'''", "'_'", "'!'", "'%'", "'&'", "'$'", "'#'", "'+'", 
		"'-'", "'/'", "':'", "'<'", "'='", "'>'", "'?'", "'@'", "'\\'", "'~'", 
		"'^'", "'|'", "'*'", "'('", "')'", "'val'", "';'", "'true'", "'false'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "TRUE", 
		"FALSE", "DIGIT", "LETTER", "WHITESPACE", "NEWLINE", "SYMBOL",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(smlLexer._LITERAL_NAMES, smlLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return smlLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(smlLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "sml.g4"; }

	// @Override
	public get ruleNames(): string[] { return smlLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return smlLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return smlLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return smlLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02#\x9A\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03" +
		"\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03" +
		"\x1E\x03\x1F\x03\x1F\x03 \x06 \x8C\n \r \x0E \x8D\x03 \x03 \x03!\x05!" +
		"\x93\n!\x03!\x03!\x05!\x97\n!\x03\"\x03\"\x02\x02\x02#\x03\x02\x03\x05" +
		"\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13" +
		"\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02" +
		"\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/" +
		"\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?" +
		"\x02!A\x02\"C\x02#\x03\x02\x06\x03\x022;\x04\x02C\\c|\x04\x02\v\v\"\"" +
		"\x03\x02#\x80\x02\x9C\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
		"\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
		"\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02" +
		"\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02" +
		"\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03" +
		"\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02" +
		"\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x02" +
		"3\x03\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02" +
		"\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02" +
		"\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02\x03E\x03\x02\x02\x02\x05G\x03" +
		"\x02\x02\x02\x07I\x03\x02\x02\x02\tK\x03\x02\x02\x02\vM\x03\x02\x02\x02" +
		"\rO\x03\x02\x02\x02\x0FQ\x03\x02\x02\x02\x11S\x03\x02\x02\x02\x13U\x03" +
		"\x02\x02\x02\x15W\x03\x02\x02\x02\x17Y\x03\x02\x02\x02\x19[\x03\x02\x02" +
		"\x02\x1B]\x03\x02\x02\x02\x1D_\x03\x02\x02\x02\x1Fa\x03\x02\x02\x02!c" +
		"\x03\x02\x02\x02#e\x03\x02\x02\x02%g\x03\x02\x02\x02\'i\x03\x02\x02\x02" +
		")k\x03\x02\x02\x02+m\x03\x02\x02\x02-o\x03\x02\x02\x02/q\x03\x02\x02\x02" +
		"1s\x03\x02\x02\x023u\x03\x02\x02\x025y\x03\x02\x02\x027{\x03\x02\x02\x02" +
		"9\x80\x03\x02\x02\x02;\x86\x03\x02\x02\x02=\x88\x03\x02\x02\x02?\x8B\x03" +
		"\x02\x02\x02A\x96\x03\x02\x02\x02C\x98\x03\x02\x02\x02EF\x070\x02\x02" +
		"F\x04\x03\x02\x02\x02GH\x07)\x02\x02H\x06\x03\x02\x02\x02IJ\x07a\x02\x02" +
		"J\b\x03\x02\x02\x02KL\x07#\x02\x02L\n\x03\x02\x02\x02MN\x07\'\x02\x02" +
		"N\f\x03\x02\x02\x02OP\x07(\x02\x02P\x0E\x03\x02\x02\x02QR\x07&\x02\x02" +
		"R\x10\x03\x02\x02\x02ST\x07%\x02\x02T\x12\x03\x02\x02\x02UV\x07-\x02\x02" +
		"V\x14\x03\x02\x02\x02WX\x07/\x02\x02X\x16\x03\x02\x02\x02YZ\x071\x02\x02" +
		"Z\x18\x03\x02\x02\x02[\\\x07<\x02\x02\\\x1A\x03\x02\x02\x02]^\x07>\x02" +
		"\x02^\x1C\x03\x02\x02\x02_`\x07?\x02\x02`\x1E\x03\x02\x02\x02ab\x07@\x02" +
		"\x02b \x03\x02\x02\x02cd\x07A\x02\x02d\"\x03\x02\x02\x02ef\x07B\x02\x02" +
		"f$\x03\x02\x02\x02gh\x07^\x02\x02h&\x03\x02\x02\x02ij\x07\x80\x02\x02" +
		"j(\x03\x02\x02\x02kl\x07`\x02\x02l*\x03\x02\x02\x02mn\x07~\x02\x02n,\x03" +
		"\x02\x02\x02op\x07,\x02\x02p.\x03\x02\x02\x02qr\x07*\x02\x02r0\x03\x02" +
		"\x02\x02st\x07+\x02\x02t2\x03\x02\x02\x02uv\x07x\x02\x02vw\x07c\x02\x02" +
		"wx\x07n\x02\x02x4\x03\x02\x02\x02yz\x07=\x02\x02z6\x03\x02\x02\x02{|\x07" +
		"v\x02\x02|}\x07t\x02\x02}~\x07w\x02\x02~\x7F\x07g\x02\x02\x7F8\x03\x02" +
		"\x02\x02\x80\x81\x07h\x02\x02\x81\x82\x07c\x02\x02\x82\x83\x07n\x02\x02" +
		"\x83\x84\x07u\x02\x02\x84\x85\x07g\x02\x02\x85:\x03\x02\x02\x02\x86\x87" +
		"\t\x02\x02\x02\x87<\x03\x02\x02\x02\x88\x89\t\x03\x02\x02\x89>\x03\x02" +
		"\x02\x02\x8A\x8C\t\x04\x02\x02\x8B\x8A\x03\x02\x02\x02\x8C\x8D\x03\x02" +
		"\x02\x02\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x8F\x03\x02" +
		"\x02\x02\x8F\x90\b \x02\x02\x90@\x03\x02\x02\x02\x91\x93\x07\x0F\x02\x02" +
		"\x92\x91\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02" +
		"\x94\x97\x07\f\x02\x02\x95\x97\x07\x0F\x02\x02\x96\x92\x03\x02\x02\x02" +
		"\x96\x95\x03\x02\x02\x02\x97B\x03\x02\x02\x02\x98\x99\t\x05\x02\x02\x99" +
		"D\x03\x02\x02\x02\x06\x02\x8D\x92\x96\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!smlLexer.__ATN) {
			smlLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(smlLexer._serializedATN));
		}

		return smlLexer.__ATN;
	}

}

