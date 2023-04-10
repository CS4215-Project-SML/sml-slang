// Types
export interface TypeMap {
  Int: Int
  Real: Real
  Bool: Bool
  Char: Char
  Str: Str
  Rec: Rec
  Tup: Tup
  Lis: Lis
  Fun: Fun
  Poly: Poly
  Und: Und
}

export type Type = TypeMap[keyof TypeMap]

export interface BaseType {
  name: string
}

export interface Int extends BaseType {
  name: 'int'
}

export interface Real extends BaseType {
  name: 'real'
}

export interface Bool extends BaseType {
  name: 'bool'
}

export interface Char extends BaseType {
  name: 'char'
}

export interface Str extends BaseType {
  name: 'string'
}

export interface Rec extends BaseType {
  name: 'record'
  body: Object
}

export interface Tup extends BaseType {
  name: 'tuple'
  body: Object
}

export interface Lis extends BaseType {
  name: 'list'
  body: Int | Real | Bool | Char | Str | Str | Rec | Tup | Lis | Fun | Poly
}

export interface Fun extends BaseType {
  name: 'function'
  par: Array<Int | Real | Bool | Char | Str | Rec | Tup | Lis | Fun | Poly>
  ret: Array<Int | Real | Bool | Char | Str | Rec | Tup | Lis | Fun | Poly>
}

export interface Poly extends BaseType {
  name: string
}

export interface Und extends BaseType {
  name: 'undefined'
}

// Nodes
export interface BaseNodeWithoutComments {
  // Every leaf interface that extends BaseNode must specify a type property.
  // The type property should be a string literal. For example, Identifier
  // has: `type: "Identifier"`
  tag: string
  type: Type
  loc?: SourceLocation | undefined
  range?: [number, number] | undefined
}

export interface BaseNode extends BaseNodeWithoutComments {
  leadingComments?: Array<Comment> | undefined
  trailingComments?: Array<Comment> | undefined
}

export interface Comment extends BaseNodeWithoutComments {
  tag: 'Block'
  value: string
}

export interface SourceLocation {
  source?: string | null | undefined
  start: Position
  end: Position
}

export interface Position {
  /** >= 1 */
  line: number
  /** >= 0 */
  column: number
}

export interface NodeMap {
  Program: Program
  Empty: Empty

  Declaration: Declaration
  SequenceDeclaration: SequenceDeclaration
  ValueDeclaration: ValueDeclaration
  FunctionDeclaration: FunctionDeclaration
  ExpressionDeclaration: ExpressionDeclaration
  Valbind: Valbind
  Funbind: Funbind

  Expression: Expression
  LetExpression: LetExpression
  LambdaExpression: LambdaExpression
  ConditionalExpression: ConditionalExpression
  PrefixApplicationExpression: PrefixApplicationExpression
  InfixApplicationExpression: InfixApplicationExpression

  Record: Record
  Tuple: Tuple
  Keyvalue: Keyvalue
  RecordSelector: RecordSelector

  List: List

  Matching: Matching
  Matchingrule: Matchingrule
  Pattern: Pattern

  KeyPattern: KeyPattern

  Identifier: Identifier
  Constant: Constant

  Closure: Closure
}

export type Node = NodeMap[keyof NodeMap]

export interface Program extends BaseNode {
  tag: 'Program'
  body: Declaration
  comments?: Array<Comment> | undefined
}

export interface Empty extends BaseNode {
  tag: 'Empty'
}

/**
 * Declarations
 */
export interface DeclarationMap {
  SequenceDeclaration: SequenceDeclaration
  ValueDeclaration: ValueDeclaration
  FunctionDeclaration: FunctionDeclaration
  ExpressionDeclaration: ExpressionDeclaration
}

export type Declaration = DeclarationMap[keyof DeclarationMap]

export type BaseDeclaration = BaseNode

export interface SequenceDeclaration extends BaseDeclaration {
  tag: 'SequenceDeclaration'
  declarations: Array<Declaration>
}

export interface ValueDeclaration extends BaseDeclaration {
  tag: 'ValueDeclaration'
  name: string
  value: Expression
}

export interface FunctionDeclaration extends BaseDeclaration {
  tag: 'FunctionDeclaration'
  name: string
  lambda: LambdaExpression
}

export interface ExpressionDeclaration extends BaseDeclaration {
  tag: 'ExpressionDeclaration'
  value: Expression
}

export interface Funbind extends BaseNode {
  tag: 'Funbind'
  name: string
  matching: Matching
}

export interface Valbind extends BaseNode {
  tag: 'Valbind'
  name: string
  value: Expression
}

/**
 * Expressions
 */

export interface ExpressionMap {
  LetExpression: LetExpression
  LambdaExpression: LambdaExpression
  ConditionalExpression: ConditionalExpression
  PrefixApplicationExpression: PrefixApplicationExpression
  InfixApplicationExpression: InfixApplicationExpression
  Record: Record
  Tuple: Tuple
  RecordSelector: RecordSelector
  List: List
  Identifier: Identifier
  Constant: Constant
}

export type Expression = ExpressionMap[keyof ExpressionMap]

export type BaseExpression = BaseNode

export interface LetExpression extends BaseExpression {
  tag: 'LetExpression'
  dec: Declaration
  exp: Expression
}

export interface LambdaExpression extends BaseExpression {
  tag: 'LambdaExpression'
  fv: Array<string>
  matching: Matching
}

export interface Closure extends BaseNode {
  tag: 'Closure'
  capture: Object
  matching: Matching
}

export interface ConditionalExpression extends BaseExpression {
  tag: 'ConditionalExpression'
  pred: Expression
  cons: Expression
  alt: Expression
}

export interface PrefixApplicationExpression extends BaseExpression {
  tag: 'PrefixApplicationExpression'
  operator: Expression
  operand: Expression
  isTailCall: boolean
}

export interface InfixApplicationExpression extends BaseExpression {
  tag: 'InfixApplicationExpression'
  operator: InfixOperator
  left: Expression
  right: Expression
}

/**
 * Records & Tuples
 */
export type BaseRecord = BaseNode

export interface Record extends BaseRecord {
  tag: 'Record'
  length: number
  items: Object
}

export type BaseTuple = BaseNode

export interface Tuple extends BaseTuple {
  tag: 'Tuple'
  length: number
  items: Object
}

export type BaseList = BaseNode

export interface List extends BaseList {
  tag: 'List'
  length: number
  items: Array<any>
}

export type BaseKeyvalue = BaseNode

export interface Keyvalue extends BaseKeyvalue {
  tag: 'Keyvalue'
  key: string
  value: Expression
}

export type BaseRecordSelector = BaseNode

export interface RecordSelector extends BaseRecord {
  tag: 'RecordSelector'
  label: string
  record?: Record | Tuple | Identifier
}

/**
 * Pattern
 */
export interface PatternMap {
  PatternConstant: PatternConstant
  PatternIdentifier: PatternIdentifier
  PatternRecord: PatternRecord
  PatternInfix: PatternInfix
}

export type Pattern = PatternMap[keyof PatternMap]

export type BasePattern = BaseNode

export interface PatternConstant extends BasePattern {
  tag: 'PatternConstant'
  value: number | boolean | string
}

export interface PatternInfix extends BasePattern {
  tag: 'PatternInfix'
  left: Pattern
  operator: '::'
  right: Pattern
}

export interface PatternIdentifier extends BasePattern {
  tag: 'PatternIdentifier'
  name: string
}

export interface PatternRecord extends BasePattern {
  tag: 'PatternRecord'
  length: number
  aliases: Object // TODO: change to Record<string, Pattern>
}

export interface KeyPattern extends BaseNode {
  tag: 'KeyPattern'
  key: string
  pat: Pattern
}

/**
 * Match
 */
export interface Matching extends BaseNode {
  tag: 'Matching'
  rules: Array<Matchingrule>
}

export interface Matchingrule extends BaseNode {
  tag: 'Matchingrule'
  pat: Pattern
  exp: Expression
}

/**
 * Primitives (?)
 */
export interface Identifier extends BaseNode {
  tag: 'Identifier'
  name: string
}

export interface Constant extends BaseNode {
  tag: 'Constant'
  value: number | boolean | string
}

export type InfixOperator =
  | '+'
  | '-'
  | '/'
  | '<'
  | '='
  | '>'
  | '^'
  | '*'
  | '<='
  | '>='
  | '<>'
  | '::'
  | 'andalso'
  | 'orelse'
