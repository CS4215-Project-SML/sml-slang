grammar sml;

/*
 * Tokens (terminal)
 */
TRUE:           'true';
FALSE:          'false';
DIGIT:          [0-9];
LETTER:         [A-Za-z];
SYMBOL:         [!-~];
WHITESPACE:     [ \t]+ -> skip;
NEWLINE:        ('\r'? '\n' | '\r');


/*
 * Tokens (non-terminal)
 */
NUMBER:         DIGIT+;


/*
 * Constants
 */
// constant:       integer | real | bool | character | string;
constant:       integer | real | bool;

integer:        NUMBER;
real:           NUMBER '.' NUMBER;
bool:           TRUE | FALSE;
// character:      '#"' (' ' | SYMBOL) '"';
// string:         '"' (' ' | SYMBOL)* '"';


/*
 * Identifiers
 */
id
    :       LETTER (LETTER | DIGIT | '\'' | '_')*                                                                                           # idAlpha
    |       ('!' | '%' | '&' | '$' | '#' | '+' | '-' | '/' | ':' | '<' | '=' | '>' | '?' | '@' | '\\' | '~' | '\'' | '^' | '|' | '*')+      # idSymbol
    ;

variable:   '\'' (LETTER | DIGIT | '\'' | '_' )*;

label:      id | NUMBER;


/*
 * Expressions
 */
expression
    : constant                                          # expressionConstant
    | '(' inner=expression ')'                          # expressionParentheses
    | operator=expression operand=expression            # expressionApplicationPrefix
    | left=expression operator=id right=expression      # expressionApplicationInfix
    ;


/*
 * Patterns
 */
pattern
    : constant      # patternConstant
    | id            # patternId
    ;


/*
 * Declarations
 */
declaration
    : expression        # declarationExpression
    | 'val' valbind     # declarationValue
    ;

valbind
    : pattern '=' expression;


/*
 * Programs
 */
program
    : declaration                       # programDeclaration
    | left=program ';' right=program    # programSequence
    ;
