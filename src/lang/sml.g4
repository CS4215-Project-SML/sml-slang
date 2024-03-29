grammar sml;

/*
 * Programs
 */
program
    : declaration (';')?    # programDeclaration
    |                       # programEmpty
    ;


/*
 * Declarations
 */
declaration
    : left=declaration (';')? right=declaration     # declarationSequence
    | FUN funbind                                   # declarationFunction
    | VAL valbind                                   # declarationValue
    | expression                                    # declarationExpression
    ;

valbind
    : name=identifier '=' value=expression;

funbind
    : name=identifier pat=pattern '=' body=expression ('|' rest=funbind)*;


/*
 * Patterns
 */
pattern
    : <assoc=right> left=pattern '::' right=pattern             # patternInfix
    | '(' pattern ',' pattern (',' pattern)* ')'                # patternTuple
    | '(' pattern ')'                                           # patternParantheses
    | '{' (keypattern? | (keypattern (',' keypattern)+)) '}'    # patternRecord
    | '[' pattern (',' pattern)* ']'                            # patternList
    | constant                                                  # patternConstant
    | identifier                                                # patternIdentifier
    ;

matching
    : matchrule=matchingrule '|' rest=matching      # matchingSequence
    | matchrule=matchingrule                        # matchingAtomic
    ;

matchingrule
    : pat=pattern '=>' exp=expression;

keypattern
    : key=label '=' pat=pattern;

/*
 * Expressions
 */
expression
    : FN matching                                                                           # expressionLambda
    | LET dec=declaration IN exp=expression END                                             # expressionLet

    // Operator precedence is captured here
    | '(' inner=expression ')'                                                              # expressionParentheses
    | operator=expression operand=expression                                                # expressionApplicationPrefix
    | left=expression operator=('*' | '/') right=expression                                 # expressionApplicationInfix
    | left=expression operator=('+' | '-' | '^') right=expression                           # expressionApplicationInfix
    | <assoc=right> left=expression operator='::' right=expression                          # expressionApplicationInfix
    | left=expression operator=('=' | '<>' | '<' | '<=' | '>' | '>=') right=expression      # expressionApplicationInfix
    | left=expression operator=(ANDALSO | ORELSE) right=expression                          # expressionApplicationInfix
    | IF pred=expression THEN cons=expression ELSE alt=expression                           # expressionConditional
    | CASE exp=expression OF match=matching                                                           # expressionCase

    | '{' (keyvalue? | (keyvalue (',' keyvalue)+)) '}'                                      # expressionRecord
    | '(' expression ',' expression (',' expression)* ')'                                   # expressionTuple
    | '[' (expression? | (expression (',' expression)+)) ']'                                # expressionList
    | '#' label                                                                             # expressionRecordSelector
    | constant                                                                              # expressionConstant
    | identifier                                                                            # expressionIdentifier
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
REAL:           DIGIT+ '.' DIGIT+;
INT:            DIGIT+;
BOOL:           TRUE | FALSE;

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
    :           LETTER (LETTER | DIGIT | '\'' | '_')*
    |           ('!' | '%' | '&' | '$' | '#' | '+' | '-' | '/' | ':' | '<' | '=' | '>' | '?' | '@' | '\\' | '~' | '\'' | '^' | '|' | '*')+
    ;

DIGIT:          [0-9];
LETTER:         [A-Za-z];
NEWLINE:        ('\r'? '\n' | '\r') -> skip;
WHITESPACE:     [ \t]+ -> skip;
COMMENT:        '(*' .*? '*)' -> skip;
