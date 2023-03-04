grammar Sml;

/*
 * Tokens (terminal)
 */
DIGIT:      [0-9];
TRUE:       'true';
FALSE:      'false';
LETTER:     [A-Za-z];
ASCII:      [A-Za-z0-9];
WHITESPACE: [ \r\n\t]+ -> skip;
NEWLINE: '\r'? '\n';

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
    | string;

int:    number;
real:   number '.' number;
bool:   TRUE | FALSE;
char:   '#"' ASCII '"';
string: '"' ASCII* '"';

/*
 * Identifiers
 */
id: LETTER (LETTER | DIGIT | '\'' | '_')*;

variable: '\'' (LETTER | DIGIT | '\'' | '_' )*;

label: id | number;

/*
 * Types
 */
type
    : variable          # typeVar
    | '(' exp ')'       # typePar
    | type '->' type    # typeFun;

/*
 * Expressions
 */
exp
    : constant      # expConst
    | '(' exp ')'   # expPar
    | exp exp       # expAppPrefix
    | exp id exp    # expAppInfix;

/*
 * Declarations
 */


/*
 * Programs
 */
prog
    : exp (';' exp)*;
