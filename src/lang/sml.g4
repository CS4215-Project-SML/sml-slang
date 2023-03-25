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
    : FUN funbind       # declarationFunction
    | VAL valbind       # declarationValue
    | expression        # declarationExpression
    ;

valbind
    : name=id '=' value=expression;

funbind
    : name=id pat=pattern '=' body=expression;


/*
 * Patterns
 */
pattern
    : left=pattern '::' right=pattern                                      # patternInfix
    | '(' pattern (',' pattern)* ')'                            # patternTuple
    | '{' (keypattern? | (keypattern (',' keypattern)+)) '}'    # patternRecord
    | '[' pattern (',' pattern)* ']'                            # patternList
    | constant                                                  # patternConstant
    | id                                                        # patternId
    ;

matchSml
    : matchRule=mrule '|' rest=matchSml         # matchSequence
    | matchRule=mrule                           # matchAtomic
    ;

mrule
    : pat=pattern '=>' exp=expression;

keypattern
    : key=label '=' pat=pattern;

/*
 * Expressions
 */
expression
    : '(' inner=expression ')'                                      # expressionParentheses
    | FN matchSml                                                   # expressionLambda
    | IF pred=expression THEN cons=expression ELSE alt=expression   # expressionConditional
    | left=expression operator=id right=expression                  # expressionApplicationInfix
    | operator=expression operand=expression                        # expressionApplicationPrefix
    | '{' (keyvalue? | (keyvalue (',' keyvalue)+)) '}'              # expressionRecord
    | '(' expression ',' expression (',' expression)* ')'           # expressionTuple
    | '[' (expression? | (expression (',' expression)+)) ']'        # expressionList
    | '#' label                                                     # expressionRecordSelector
    | constant                                                      # expressionConstant
    | id                                                            # expressionId
    ;

keyvalue
    : key=label '=' value=expression;

/*
 * Identifiers
 */
label
    :       id      # labelId
    |       INT     # labelInt;

id
    :       LETTER (LETTER | DIGIT | '\'' | '_')*                                                                                           # idAlpha
    |       ('!' | '%' | '&' | '$' | '#' | '+' | '-' | '/' | ':' | '<' | '=' | '>' | '?' | '@' | '\\' | '~' | '\'' | '^' | '|' | '*')+      # idSymbol
    ;

variable:   '\'' (LETTER | DIGIT | '\'' | '_' )*;


/*
 * Constants
 */
constant
    : INT           # constantInt
    | REAL          # constantReal
    | BOOL          # constantBool
    | CHAR          # constantChar
    | STR           # constantStr;


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

DIGIT:          [0-9];
LETTER:         [A-Za-z];
NEWLINE:        ('\r'? '\n' | '\r');
WHITESPACE:     [ \t]+ -> skip;
