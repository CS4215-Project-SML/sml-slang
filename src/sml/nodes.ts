// Types
export interface TypeMap {
  Int: Int
  Real: Real
  Bool: Bool
  Char: Char
  Str: Str
  Rec: Rec
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

export interface Lis extends BaseType {
  name: 'list'
  body: Int | Real | Bool | Char | Str | Str | Rec | Lis | Fun | Poly
}

export interface Fun extends BaseType {
  name: 'function'
  par: Array<Int | Real | Bool | Char | Str | Rec | Lis | Fun | Poly>
  ret: Array<Int | Real | Bool | Char | Str | Rec | Lis | Fun | Poly>
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
  loc?: SourceLocation | null | undefined
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
  ExpressionDeclaration: ExpressionDeclaration
  Valbind: Valbind
  Expression: Expression
  ConditionalExpression: ConditionalExpression
  PrefixApplicationExpression: PrefixApplicationExpression
  InfixApplicationExpression: InfixApplicationExpression
  Record: Record
  Sequence: Sequence
  Keyvalue: Keyvalue
  RecordSelector: RecordSelector
  List: List
  Pattern: Pattern
  Identifier: Identifier
  Constant: Constant
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

export interface DeclarationMap {
  SequenceDeclaration: SequenceDeclaration
  ValueDeclaration: ValueDeclaration
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

export interface ExpressionDeclaration extends BaseDeclaration {
  tag: 'ExpressionDeclaration'
  value: Expression
}

export interface Valbind extends BaseNode {
  tag: 'Valbind'
  name: string
  value: Expression
}

export interface ExpressionMap {
  ConditionalExpression: ConditionalExpression
  PrefixApplicationExpression: PrefixApplicationExpression
  InfixApplicationExpression: InfixApplicationExpression
  Record: Record
  Sequence: Sequence
  RecordSelector: RecordSelector
  List: List
  Identifier: Identifier
  Constant: Constant
}

export type Expression = ExpressionMap[keyof ExpressionMap]

export type BaseExpression = BaseNode

export interface ConditionalExpression extends BaseExpression {
  tag: 'ConditionalExpression'
  pred: Expression
  cons: Expression
  alt: Expression
}

export interface PrefixApplicationExpression extends BaseExpression {
  tag: 'PrefixApplicationExpression'
}

export interface InfixApplicationExpression extends BaseExpression {
  tag: 'InfixApplicationExpression'
  operator: InfixOperator
  left: Expression
  right: Expression
}

export type BaseRecord = BaseNode

export interface Record extends BaseRecord {
  tag: 'Record'
  length: number
  items: Object
}

export type BaseSequence = BaseNode

export interface Sequence extends BaseSequence {
  tag: 'Sequence'
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
  record?: Record | Sequence | Identifier
}

export interface PatternMap {
  Constant: Constant
  Identifier: Identifier
}

export type Pattern = PatternMap[keyof PatternMap]

export type BasePattern = BaseNode

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
  | 'andalso'
  | 'orelse'
