grammar sml;

/*
 * Programs
 */
program
    : left=program ';' right=program    # programSequence
    | declaration                       # programDeclaration
    |                                   # programEmpty
    ;


/*
 * Declarations
 */
declaration
    : VAL valbind       # declarationValue
    | expression        # declarationExpression
    ;

valbind
    : name=identifier '=' value=expression;


/*
 * Patterns
 */
pattern
    : constant          # patternConstant
    | identifier        # patternIdentifier
    ;


/*
 * Expressions
 */
expression
    : '(' inner=expression ')'                                          # expressionParentheses
    | IF pred=expression THEN cons=expression ELSE alt=expression       # expressionConditional
    | left=expression operator=identifier right=expression              # expressionApplicationInfix
    | operator=expression operand=expression                            # expressionApplicationPrefix
    | '{' (keyvalue? | (keyvalue (',' keyvalue)+)) '}'                  # expressionRecord
    | '(' expression ',' expression (',' expression)* ')'               # expressionSequence
    | '[' (expression? | (expression (',' expression)+)) ']'            # expressionList
    | '#' label                                                         # expressionRecordSelector
    | constant                                                          # expressionConstant
    | identifier                                                        # expressionIdentifier
    ;

keyvalue
    : key=label '=' value=expression;


/*
 * Identifiers
 */
label
    :           identifier      # labelIdentifier
    |           INT             # labelInt
    ;

identifier:     ID;


/*
 * Constants
 */
constant
    : INT           # constantInt
    | REAL          # constantReal
    | BOOL          # constantBool
    | CHAR          # constantChar
    | STR           # constantStr
    ;


/*
 * Tokens (processed by Lexer)
 */
CHAR:           '#"' (WHITESPACE | DIGIT | LETTER) '"';
STR:            '"' (WHITESPACE | DIGIT | LETTER)* '"';
BOOL:           TRUE | FALSE;
REAL:           DIGIT+ '.' DIGIT+;
INT:            DIGIT+;

ABSTYPE:        'abstype';
AND:            'and';
ANDALSO:        'andalso';
AS:             'as';
CASE:           'case';
DATATYPE:       'datatype';
DO:             'do';
ELSE:           'else';
END:            'end';
EXCEPTION:      'exception';
FN:             'fn';
FUN:            'fun';
HANDLE:         'handle';
IF:             'if';
IN:             'in';
INFIX:          'infix';
INFIXR:         'infixr';
LET:            'let';
LOCAL:          'local';
NONFIX:         'nonfix';
OF:             'of';
OP:             'op';
OPEN:           'open';
ORELSE:         'orelse';
RAISE:          'raise';
REC:            'rec';
THEN:           'then';
TYPE:           'type';
VAL:            'val';
WITH:           'with';
WITHTYPE:       'withtype';
WHILE:          'while';
TRUE:           'true';
FALSE:          'false';

ID
    :           (LETTER (LETTER | DIGIT | '\'' | '_')*)
    |           ('!' | '%' | '&' | '$' | '#' | '+' | '-' | '/' | ':' | '<' | '=' | '>' | '?' | '@' | '\\' | '~' | '\'' | '^' | '|' | '*')+
    ;

DIGIT:          [0-9];
LETTER:         [A-Za-z];
NEWLINE:        ('\r'? '\n' | '\r');
WHITESPACE:     [ \t]+ -> skip;
