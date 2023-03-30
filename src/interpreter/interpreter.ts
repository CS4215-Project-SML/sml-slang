import * as lodash from 'lodash'

import * as sml from '../sml/nodes'
import { Context, Environment, Frame } from '../types'

/* **********************
 * find free variables
 * **********************/

// TODO:
function getFreeVariables() {}

/* **********************
 * pattern matching
 * **********************/

type MatchableValue = sml.Constant | sml.Record | sml.List

function evaluateMatch(match: sml.Matching, value: MatchableValue): [sml.Expression, Frame] | null {
  for (const mrule of match.rules) {
    console.log(`Matching mrule ${JSON.stringify(mrule)}`)
    const [isMatch, frame] = evaluatePattern(mrule.pat, value)

    if (isMatch) {
      return [mrule.exp, frame]
    }
  }

  // If match fails, return null
  return null
}

function evaluatePattern(pattern: sml.Pattern, value: MatchableValue): [boolean, Frame] {
  console.log(`Pattern: ${JSON.stringify(pattern)}`)
  console.log(`Value: ${JSON.stringify(value)}`)

  switch (pattern.tag) {
    case 'PatternConstant':
      return evaluatePatternConstant(pattern as sml.PatternConstant, value)
    case 'PatternRecord':
      return evaluatePatternRecord(pattern as sml.PatternRecord, value)
    case 'PatternIdentifier':
      return evaluatePatternIdentifier(pattern as sml.PatternIdentifier, value)
    case 'PatternInfix':
      return evaluatePatternInfix(pattern as sml.PatternInfix, value)
    default:
      return [false, {}]
  }
}

function evaluatePatternConstant(
  pattern: sml.PatternConstant,
  value: MatchableValue
): [boolean, Frame] {
  if (value.tag !== 'Constant') {
    return [false, {}]
  }

  const val = value as sml.Constant

  if (val.value === pattern.value) {
    return [true, {}]
  }

  return [false, {}]
}

function evaluatePatternIdentifier(
  pattern: sml.PatternIdentifier,
  value: MatchableValue
): [boolean, Frame] {
  console.log('Evaluating pattern identifier...')
  return [
    true,
    {
      [pattern.name]: value
    }
  ]
}

function evaluatePatternRecord(
  pattern: sml.PatternRecord,
  value: MatchableValue
): [boolean, Frame] {
  if (value.tag !== 'Record') {
    return [false, {}]
  }

  console.log('Evaluating pattern record')

  const record = value as sml.Record
  const items = record.items
  const frame: Frame = {}

  // Check whether they have the same keys
  // 1) They have same length
  // 2) Keys of `aliases` is in keys of `items`
  const aliasKeys = Object.keys(pattern.aliases)
  const itemKeys = Object.keys(items)

  if (aliasKeys.length !== itemKeys.length) {
    return [false, {}]
  }

  // Need to check that the type is exactly the same
  for (const [key, alias] of Object.entries(pattern.aliases) as Array<[string, sml.Pattern]>) {
    if (!(key in items)) {
      console.log(`${key} is not in items ${JSON.stringify(items)}`)
      return [false, {}]
    }

    // Gets the value
    const [isMatch, patFrame] = evaluatePattern(alias, items[key])

    if (!isMatch) {
      console.log(`Pattern record failed to match key ${key}`)
      return [false, {}]
    }

    for (const [key, value] of Object.entries(patFrame)) {
      if (key in frame) {
        throw new Error(`Variable ${key} is defined multiple times`)
      }

      console.log(`Putting key ${key} into frame with value ${value}`)

      frame[key] = value
    }
  }

  console.log(`The frame: ${JSON.stringify(frame)}`)

  return [true, frame]
}

function evaluatePatternInfix(pattern: sml.PatternInfix, value: MatchableValue): [boolean, Frame] {
  // For now, we only support infix pattern matching for list type.
  // Hence, pattern.operator === '::' is always true

  if (pattern.operator !== '::' || value.tag !== 'List') {
    return [false, {}]
  }

  // x::xs -> x: a', xs: a' list

  return [false, {}]
}

/* **********************
 * operators and builtins
 * **********************/

const infixOperatorMicrocode = {
  '+': (x: number, y: number): number => x + y,
  '-': (x: number, y: number): number => x - y,
  '*': (x: number, y: number): number => x * y,
  '/': (x: number, y: number): number => x / y,
  '<': (x: number, y: number): boolean => x < y,
  '>': (x: number, y: number): boolean => x > y,
  '=': (x: number, y: number): boolean => x === y,
  '<=': (x: number, y: number): boolean => x <= y,
  '>=': (x: number, y: number): boolean => x >= y,
  '<>': (x: number, y: number): boolean => x !== y,
  '^': (x: string, y: string): string => x + y,
  andalso: (x: boolean, y: boolean): boolean => x && y,
  orelse: (x: boolean, y: boolean): boolean => x || y
}

// right is popped before left
function applyInfixOperator(
  op: string,
  left: number | boolean | string,
  right: number | boolean | string
) {
  return infixOperatorMicrocode[op](left, right)
}

/* ************
 * environments
 * ************/

// Frames are objects that map symbols (strings) to values.

const GLOBAL_FRAME = {}
const GLOBAL_ENVIRONMENT = [GLOBAL_FRAME]

function lookup(name: string, env: Array<Object>): sml.Constant | sml.Record | sml.List {
  for (let i = env.length - 1; i >= 0; i--) {
    const frame = env[i]
    if (frame.hasOwnProperty(name)) {
      return frame[name]
    }
  }
  throw new Error()
}

function bind(name: string, value: sml.Constant | sml.Record | sml.Closure, env: Array<Object>) {
  const frame = env[env.length - 1]
  frame[name] = value
}

function extend(env: Array<Object>): number {
  return env.push({})
}

/* **********************
 * using arrays as stacks
 * **********************/

// add values destructively to the end of
// given array; return the array
function push(array: Array<any>, ...items: Array<any>): Array<any> {
  array.splice(array.length, 0, ...items)
  return array
}

// return the last element of given array
// without changing the array
function peek(array: Array<any>) {
  return array.slice(-1)[0]
}

/* **************************
 * interpreter configurations
 * **************************/

// An interpreter configuration has three parts:
// A: agenda: stack of commands
// S: stash: stack of values
// E: environment: list of frames

// agenda A

// The agenda A is a stack of commands that still need
// to be executed by the interpreter. The agenda follows
// stack discipline: pop, push, peek at end of the array.

// Commands are nodes of syntax tree or instructions.

// Instructions are objects whose tag value ends in '_i'.

// Execution initializes A as a singleton array
// containing the given program.

let A: Array<Object>

// stash S

// stash S is array of values that stores intermediate
// results. The stash follows strict stack discipline:
// pop, push, peek at the end of the array.

// Execution initializes stash S as an empty array.

let S: Array<sml.Constant | sml.Identifier | sml.Record | sml.Keyvalue | sml.List | sml.Closure>

// environment E

// See *environments* above. Execution initializes
// environment E as the global environment.

let E: Array<Object>

/* *********************
 * interpreter microcode
 * *********************/

// The interpreter dispaches for each command type to the
// microcode that belong to the type.

// microcode.cmd.tag is the microcode for the command,
// a function that takes a command as argument and
// changes the configuration according to the meaning of
// the command. The return value is not used.

const microcode = {
  Constant: (cmd: sml.Constant) => {
    push(S, { tag: 'Constant', type: cmd.type, value: cmd.value })
  },
  Identifier: (cmd: sml.Identifier) => {
    const value = lookup(cmd.name, E)
    push(S, value)
  },
  Record: (cmd: sml.Record) => {
    const items = []
    for (const [key, value] of Object.entries(cmd.items)) {
      items.push({ tag: 'Keyvalue', key: key, value: value })
    }
    push(A, { tag: 'RecordInstruction', type: cmd.type, length: cmd.length }, ...items.reverse())
  },
  Keyvalue: (cmd: sml.Keyvalue) => {
    push(A, { tag: 'KeyvalueInstruction', key: cmd.key }, cmd.value)
  },
  RecordSelector: (cmd: sml.RecordSelector) => {
    if (cmd.record === undefined) throw new Error('bruh') // TODO: this shouldn't happen
    push(A, { tag: 'RecordSelectorInstruction', type: cmd.type, label: cmd.label }, cmd.record)
  },
  List: (cmd: sml.List) => {
    push(A, { tag: 'ListInstruction', type: cmd.type, length: cmd.length }, ...cmd.items.reverse())
  },
  ExpressionDeclaration: (cmd: sml.ExpressionDeclaration) => {
    push(A, { tag: 'BindInstruction', type: cmd.type, name: 'it' }, cmd.value)
  },
  ValueDeclaration: (cmd: sml.ValueDeclaration) => {
    push(A, { tag: 'BindInstruction', type: cmd.type, name: cmd.name }, cmd.value)
  },
  FunctionDeclaration: (cmd: sml.FunctionDeclaration) => {
    const lambda = cmd.lambda
    const instr: BindFunctionInstruction = {
      tag: 'BindFunctionInstruction',
      name: cmd.name
    }

    push(A, instr, lambda)
  },
  LetExpression: (cmd: sml.LetExpression) => {
    const envInstr: EnvironmentInstruction = {
      tag: 'EnvironmentInstruction',
      env: lodash.cloneDeep(E)
    }

    extend(E)
    push(A, envInstr, cmd.exp, { tag: 'PopInstruction' }, cmd.dec)
  },
  LambdaExpression: (cmd: sml.LambdaExpression) => {
    // TODO: identify free variables
    push(S, { tag: 'Closure', env: lodash.cloneDeep(E), matching: cmd.matching })
  },
  ConditionalExpression: (cmd: sml.ConditionalExpression) => {
    push(A, { tag: 'ConditionalExpressionInstruction', cons: cmd.cons, alt: cmd.alt }, cmd.pred)
  },
  PrefixApplicationExpression: (cmd: sml.PrefixApplicationExpression) => {
    push(A, { tag: 'PrefixApplicationInstruction' }, cmd.operator, cmd.operand)
  },
  InfixApplicationExpression: (cmd: sml.InfixApplicationExpression) => {
    push(
      A,
      { tag: 'InfixApplicationInstruction', type: cmd.type, operator: cmd.operator },
      cmd.right,
      cmd.left
    )
  },
  SequenceDeclaration: (cmd: sml.SequenceDeclaration) => {
    push(A, cmd.declarations[cmd.declarations.length - 1])
    for (let i = cmd.declarations.length - 2; i >= 0; i--) {
      push(A, { tag: 'PopInstruction' }, cmd.declarations[i])
    }
  },

  PopInstruction: (_: PopInstruction) => {
    S.pop()
  },
  BindInstruction: (cmd: BindInstruction) => {
    const value = S.pop() as sml.Constant
    bind(cmd.name, value, E)
    push(S, { tag: 'Identifier', type: cmd.type, name: cmd.name })
  },
  BindFunctionInstruction: (cmd: BindFunctionInstruction) => {
    const value = S.pop() as sml.Closure
    bind(cmd.name, value, E)
    push(S, { tag: 'Identifier', name: cmd.name })

    // To support recursive call
    value.env = lodash.cloneDeep(E)
  },
  RecordInstruction: (cmd: RecordInstruction) => {
    // Make sure that items are added to the object in the order they were specified
    const entries = []
    for (let i = 0; i < cmd.length; i++) {
      entries.push(S.pop())
    }
    entries.reverse()

    const items = {}
    for (let i = 0; i < cmd.length; i++) {
      const keyvalue = entries[i] as sml.Keyvalue
      items[keyvalue.key] = keyvalue.value
    }
    push(S, { tag: 'Record', type: cmd.type, length: cmd.length, items: items })
  },
  KeyvalueInstruction: (cmd: KeyvalueInstruction) => {
    push(S, { tag: 'Keyvalue', key: cmd.key, value: S.pop() as sml.Constant })
  },
  RecordSelectorInstruction: (cmd: RecordSelectorInstruction) => {
    const items = (S.pop() as sml.Record).items
    if (items.hasOwnProperty(cmd.label)) {
      push(S, items[cmd.label])
    } else {
      throw new Error('bruh') // TODO: proper error handling
    }
  },
  ListInstruction: (cmd: ListInstruction) => {
    // Make sure that items are added to the object in the order they were specified
    const items = []
    for (let i = 0; i < cmd.length; i++) {
      items.push(S.pop())
    }
    items.reverse()
    push(S, { tag: 'List', type: cmd.type, length: cmd.length, items: items })
  },
  ConditionalExpressionInstruction: (cmd: ConditionalExpressionInstruction) => {
    push(A, (S.pop() as sml.Constant).value ? cmd.cons : cmd.alt)
  },
  PrefixApplicationInstruction: (cmd: PrefixApplicationInstruction) => {
    const operator = S.pop() as sml.Closure
    const operand = S.pop()

    if (operator.tag !== 'Closure') {
      throw new Error('Prefix application operator must be a lambda value!')
    }

    // Maybe we can find another way to not typecast?
    const res = evaluateMatch(operator.matching, operand as MatchableValue)

    if (!res) {
      throw new Error(`Failed to evaluate matching ${operand} on match rules ${operator.matching}`)
    }

    const [exp, frame] = res

    const envInstr: EnvironmentInstruction = {
      tag: 'EnvironmentInstruction',
      env: E
    }

    E = operator.env
    E.push(frame)

    push(A, envInstr, exp)
  },
  InfixApplicationInstruction: (cmd: InfixApplicationInstruction) => {
    const right = (S.pop() as sml.Constant).value
    const left = (S.pop() as sml.Constant).value
    push(S, {
      tag: 'Constant',
      type: cmd.type,
      value: applyInfixOperator(cmd.operator, left, right)
    })
  },
  EnvironmentInstruction: (cmd: EnvironmentInstruction) => {
    E = cmd.env
  }
}

/* **********************
 * microcode instructions
 * **********************/
interface PopInstruction {
  tag: 'PopInstruction'
}

interface BindInstruction {
  tag: 'BindInstruction'
  type: sml.Type
  name: string
}

interface BindFunctionInstruction {
  tag: 'BindFunctionInstruction'
  name: string
}

interface RecordInstruction {
  tag: 'RecordInstruction'
  type: sml.Type
  length: number
}

interface KeyvalueInstruction {
  tag: 'KeyvalueInstruction'
  key: string
}

interface RecordSelectorInstruction {
  tag: 'RecordSelectorInstruction'
  type: sml.Type
  label: string
}

interface ListInstruction {
  tag: 'ListInstruction'
  type: sml.Type
  length: number
}

// interface Closure {
//   tag: 'LambdaInstruction'
//   match: sml.Match
//   env: Array<Object>
// }

interface ConditionalExpressionInstruction {
  tag: 'ConditionalExpressionInstruction'
  cons: sml.Expression
  alt: sml.Expression
}

interface PrefixApplicationInstruction {
  tag: 'PrefixApplicationInstruction'
}

interface InfixApplicationInstruction {
  tag: 'InfixApplicationInstruction'
  type: sml.Type
  operator: sml.InfixOperator
}

interface EnvironmentInstruction {
  tag: 'EnvironmentInstruction'
  env: Array<Object> // TODO: change this when merge
}

/* ****************
 * interpreter loop
 * ****************/

const STEP_LIMIT = 1000000

export function evaluate(program: sml.Program, context: Context): string {
  A = [program.body]
  S = []
  E = GLOBAL_ENVIRONMENT

  let i = 0
  while (i < STEP_LIMIT) {
    if (A.length === 0) break

    const cmd = A.pop() as sml.Node

    console.log('Executed command:')
    console.log(cmd)

    if (microcode.hasOwnProperty(cmd.tag)) {
      microcode[cmd.tag](cmd)
    } else {
      // Throw error unknown command
    }

    console.log('Resulting registers:')
    console.log('A')
    console.log(A)
    console.log('S')
    console.log(S)
    console.log('E')
    console.log(E)
    console.log('================================\n')

    i++
  }

  return prettier(S[0] as sml.Identifier)
}

function prettier(evaluation: sml.Identifier): string {
  const id = evaluation.name
  const val = lookup(id, E) as sml.Constant | sml.Record | sml.Tuple | sml.List

  return `val ${id} = ${prettierValue(val)} : ${prettierType(val.type)}`
}

function prettierValue(val: sml.Constant | sml.Record | sml.Tuple | sml.List) {
  let pval = ''

  val = val.tag === 'Record' ? tupleValueIfPossible(val) : val

  if (val.tag === 'Constant') {
    pval = val.value.toString()
  } else if (val.tag === 'Record') {
    let i = 0
    pval = '{'
    for (const [key, value] of Object.entries(val.items)) {
      pval += key.toString() + '=' + prettierValue(value)
      pval += i++ < val.length - 1 ? ',' : ''
    }
    pval += '}'
  } else if (val.tag === 'Tuple') {
    let i = 0
    pval = '('
    for (const [key, value] of Object.entries(val.items)) {
      pval += prettierValue(value)
      pval += i++ < val.length - 1 ? ',' : ''
    }
    pval += ')'
  } else if (val.tag === 'List') {
    let i = 0
    pval = '['
    for (let j = 0; j < val.items.length; j++) {
      pval += prettierValue(val.items[j])
      pval += i++ < val.length - 1 ? ',' : ''
    }
    pval += ']'
  }

  return pval
}

function prettierType(val: sml.Type) {
  let ptyp = ''

  val = val.name === 'record' ? tupleTypeIfPossible(val as sml.Rec) : val

  if (
    val.name === 'int' ||
    val.name === 'real' ||
    val.name === 'bool' ||
    val.name === 'char' ||
    val.name === 'string'
  ) {
    ptyp = val.name
  } else if (val.name === 'record') {
    const bodyLength = Object.keys((val as sml.Rec).body).length
    let i = 0
    ptyp = '{'
    for (const [key, value] of Object.entries((val as sml.Rec).body)) {
      ptyp += key.toString() + ':' + prettierType(value)
      ptyp += i++ < bodyLength - 1 ? ',' : ''
    }
    ptyp += '}'
  } else if (val.name === 'tuple') {
    const bodyLength = Object.keys((val as sml.Tup).body).length
    let i = 0
    for (let [key, value] of Object.entries((val as sml.Tup).body)) {
      value = value.name === 'record' ? tupleTypeIfPossible(value) : value
      const valtyp = prettierType(value)
      ptyp += value.name === 'tuple' ? '(' + valtyp + ')' : valtyp
      ptyp += i++ < bodyLength - 1 ? ' * ' : ''
    }
  } else if (val.name === 'list') {
    ptyp = prettierType((val as sml.Lis).body) + ' ' + val.name
  } else if (val.name === 'function') {
    throw new Error(`not supported yet ${val}`)
  } else if (val.name === 'undefined') {
    throw new Error(`not supported yet ${val}`)
  } else {
    // This is polymorphic type
    ptyp = val.name
  }

  return ptyp
}

function tupleValueIfPossible(val: sml.Record): sml.Record | sml.Tuple {
  const sorted = Object.keys(val.items)
    .sort()
    .reduce((obj, key) => {
      obj[key] = val.items[key]
      return obj
    }, {})

  let isTuple = true

  let i = 1
  for (const key in sorted) {
    if (key !== (i++).toString()) {
      isTuple = false
      break
    }
  }

  if (isTuple) {
    return {
      tag: 'Tuple',
      type: {
        name: 'tuple',
        body: tupleTypeIfPossible(val.type as sml.Rec)
      },
      length: Object.keys(sorted).length,
      items: sorted
    }
  }

  return val
}

function tupleTypeIfPossible(val: sml.Rec): sml.Rec | sml.Tup {
  const sorted = Object.keys((val as sml.Rec).body)
    .sort()
    .reduce((obj, key) => {
      obj[key] = val.body[key]
      return obj
    }, {})

  let isTuple = true

  let i = 1
  for (const key in sorted) {
    if (key !== (i++).toString()) {
      isTuple = false
      break
    }
  }

  if (isTuple) {
    return {
      name: 'tuple',
      body: sorted
    }
  }

  return val
}
