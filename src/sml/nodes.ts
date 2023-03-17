export interface BaseNodeWithoutComments {
  // Every leaf interface that extends BaseNode must specify a type property.
  // The type property should be a string literal. For example, Identifier
  // has: `type: "Identifier"`
  tag: string
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
  Tuple: Tuple
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

export interface Funbind extends BaseNode {
  tag: 'Functionbind'
  name: string
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
  Sequence: Tuple
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

export interface Tuple extends BaseSequence {
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
