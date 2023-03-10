grammar sml;

/*
 * Tokens (terminal)
 */
DIGIT:          [0-9];
TRUE:           'true';
FALSE:          'false';
LETTER:         [A-Za-z];
ASCII:          [ -~];
NEWLINE:        '\r\n' | '\r' | '\n';
WHITESPACE:     [ ]+ -> skip;

/*
 * Tokens (non-terminal)
 */
number: DIGIT+;

/*
 * Constants
 */
constant
    : int
    | real
    | bool
    | char
    | string
    ;

int:    number;
real:   number '.' number;
bool:   TRUE | FALSE;
char:   '#"' ASCII '"';
string: '"' ASCII* '"';

/*
 * Identifiers
 */
id
    : LETTER (LETTER | DIGIT | '\'' | '_')*                                                                                         # idAlpha
    | ('!' | '%' | '&' | '$' | '#' | '+' | '-' | '/' | ':' | '<' | '=' | '>' | '?' | '@' | '\\' | '~' | '\'' | '^' | '|' | '*')+    # idSymbol
    ;

variable: '\'' (LETTER | DIGIT | '\'' | '_' )*;

label: id | number;

/*
 * Types
 */
type
    : variable              # typeVar
    | '(' inner=exp ')'     # typePar
    | type '->' type        # typeFun
    ;

/*
 * Expressions
 */
exp
    : constant                          # expCon
    | '(' inner=exp ')'                 # expPar
    | operator=exp operand=exp          # expAppPrefix
    | left=exp operator=id right=exp    # expAppInfix
    ;

/*
 * Declarations
 */
dec
    : exp           # decExp;

/*
 * Programs
 */
prog
    : dec                           # progDec
    | left=prog ';' right=prog      # progSeq
    ;
