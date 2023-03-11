export interface BaseNodeWithoutComments {
  // Every leaf interface that extends BaseNode must specify a type property.
  // The type property should be a string literal. For example, Identifier
  // has: `type: "Identifier"`
  type: string
  loc?: SourceLocation | null | undefined
  range?: [number, number] | undefined
}

export interface BaseNode extends BaseNodeWithoutComments {
  leadingComments?: Array<Comment> | undefined
  trailingComments?: Array<Comment> | undefined
}

export interface NodeMap {
  Empty: Empty
  Constant: Constant
  Identifier: Identifier
  Expression: Expression
  Pattern: Pattern
  Declaration: Declaration
  Program: Program
}

export type Node = NodeMap[keyof NodeMap]

export interface Comment extends BaseNodeWithoutComments {
  type: 'Block'
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

export interface Program extends BaseNode {
  type: 'Program'
  body: Declaration
  comments?: Array<Comment> | undefined
}

export interface DeclarationMap {
  ExpressionDeclaration: ExpressionDeclaration
  ValueDeclaration: ValueDeclaration
  SequenceDeclaration: SequenceDeclaration
  Empty: Empty
  Constant: Constant
  Identifier: Identifier
  Expression: Expression
  Pattern: Pattern
}

export type Declaration = DeclarationMap[keyof DeclarationMap]

export interface BaseDeclaration extends BaseNode {}

export interface ExpressionDeclaration extends BaseDeclaration {
  type: 'ExpressionDeclaration'
  value: Expression
}

export interface ValueDeclaration extends BaseDeclaration {
  type: 'ValueDeclaration'
  id: Identifier
  value: Expression
}

export interface SequenceDeclaration extends BaseDeclaration {
  type: 'SequenceDeclaration'
  declarations: Array<Declaration>
}

export interface PatternMap {
  Constant: Constant
  Identifier: Identifier
}

export type Pattern = PatternMap[keyof PatternMap]

export interface BasePattern extends BaseNode {}

export interface ExpressionMap {
  Constant: Constant
  Identifier: Identifier
  PrefixApplicationExpression: PrefixApplicationExpression
  InfixApplicationExpression: InfixApplicationExpression
}

export type Expression = ExpressionMap[keyof ExpressionMap]

export interface BaseExpression extends BaseNode {}

export interface PrefixApplicationExpression extends BaseExpression {
  type: 'PrefixApplicationExpression'
}

export interface InfixApplicationExpression extends BaseExpression {
  type: 'InfixApplicationExpression'
  operator: InfixOperator
  left: Expression
  right: Expression
}

export interface Identifier extends BaseNode {
  type: 'Identifier'
  name: string
}

export interface Constant extends BaseNode {
  type: 'Constant'
  value: number | boolean | string
}

export interface Empty extends BaseNode {
  type: 'Empty'
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
