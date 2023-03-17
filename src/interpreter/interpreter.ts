import * as sml from '../sml/nodes'
import { Context } from '../types'

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

function lookup(name: string, env: Array<Object>): sml.Constant | sml.Record {
  for (let i = env.length - 1; i >= 0; i--) {
    const frame = env[i]
    if (frame.hasOwnProperty(name)) {
      return frame[name]
    }
  }
  throw new Error()
}

function bind(name: string, value: sml.Constant, env: Array<Object>) {
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

let S: Array<sml.Constant | sml.Identifier | sml.Record | sml.Keyvalue>

// environment E

// See *environments* above. Execution initializes
// environment E as the global environment.

let E: Array<Object>

/* *********************
 * interpreter microcode
 * *********************/

// The interpreter dispaches for each command type to the
// microcode that belong to the type.

// microcode.cmd.type is the microcode for the command,
// a function that takes a command as argument and
// changes the configuration according to the meaning of
// the command. The return value is not used.

const microcode = {
  Constant: (cmd: sml.Constant) => {
    push(S, { tag: 'Constant', value: cmd.value })
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
    push(A, { tag: 'RecordInstruction', length: cmd.length }, ...items.reverse())
  },
  Tuple: (cmd: sml.Tuple) => {
    const items = []
    for (const [key, value] of Object.entries(cmd.items)) {
      items.push({ tag: 'Keyvalue', key: key, value: value })
    }
    push(A, { tag: 'TupleInstruction', length: cmd.length }, ...items.reverse())
  },
  Keyvalue: (cmd: sml.Keyvalue) => {
    push(A, { tag: 'KeyvalueInstruction', key: cmd.key }, cmd.value)
  },
  RecordSelector: (cmd: sml.RecordSelector) => {
    if (cmd.record === undefined) throw new Error('bruh') // TODO: this shouldn't happen
    push(A, { tag: 'RecordSelectorInstruction', label: cmd.label }, cmd.record)
  },
  List: (cmd: sml.List) => {
    push(A, { tag: 'ListInstruction', length: cmd.length }, ...cmd.items.reverse())
  },
  ExpressionDeclaration: (cmd: sml.ExpressionDeclaration) => {
    push(A, { tag: 'BindInstruction', name: 'it' }, cmd.value)
  },
  ValueDeclaration: (cmd: sml.ValueDeclaration) => {
    push(A, { tag: 'BindInstruction', name: cmd.name }, cmd.value)
  },
  ConditionalExpression: (cmd: sml.ConditionalExpression) => {
    push(A, { tag: 'ConditionalExpressionInstruction', cons: cmd.cons, alt: cmd.alt }, cmd.pred)
  },
  InfixApplicationExpression: (cmd: sml.InfixApplicationExpression) => {
    push(A, { tag: 'InfixApplicationInstruction', operator: cmd.operator }, cmd.right, cmd.left)
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
    push(S, { tag: 'Identifier', name: cmd.name })
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
    push(S, { tag: 'Record', length: cmd.length, items: items })
  },
  TupleInstruction: (cmd: TupleInstruction) => {
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
    push(S, { tag: 'Tuple', length: cmd.length, items: items })
  },
  KeyvalueInstruction: (cmd: KeyvalueInstruction) => {
    push(S, { tag: 'Keyvalue', key: cmd.key, value: S.pop() as sml.Constant })
  },
  RecordSelectorInstruction: (cmd: RecordSelectorInstruction) => {
    const items = (S.pop() as sml.Record | sml.Tuple).items
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
    push(S, { tag: 'List', length: cmd.length, items: items })
  },
  ConditionalExpressionInstruction: (cmd: ConditionalExpressionInstruction) => {
    push(A, (S.pop() as sml.Constant).value ? cmd.cons : cmd.alt)
  },
  InfixApplicationInstruction: (cmd: InfixApplicationInstruction) => {
    const right = (S.pop() as sml.Constant).value
    const left = (S.pop() as sml.Constant).value
    push(S, { tag: 'Constant', value: applyInfixOperator(cmd.operator, left, right) })
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
  name: string
}

interface RecordInstruction {
  tag: 'RecordInstruction'
  length: number
}

interface TupleInstruction {
  tag: 'TupleInstruction'
  length: number
}

interface KeyvalueInstruction {
  tag: 'KeyvalueInstruction'
  key: string
}

interface RecordSelectorInstruction {
  tag: 'RecordSelectorInstruction'
  label: string
}

interface ListInstruction {
  tag: 'ListInstruction'
  length: number
}

interface ConditionalExpressionInstruction {
  tag: 'ConditionalExpressionInstruction'
  cons: sml.Expression
  alt: sml.Expression
}

interface InfixApplicationInstruction {
  tag: 'InfixApplicationInstruction'
  operator: sml.InfixOperator
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
  let val: any = lookup(id, E)
  const typ = undefined

  if (val.tag == 'Constant') {
    val = val.value
  } else if (val.tag == 'Record') {
    let dic = '{'
    let i = 0
    for (const [key, value] of Object.entries(val.items)) {
      dic += key.toString() + '=' + (value as sml.Constant).value.toString()
      dic += i++ < val.length - 1 ? ',' : ''
    }
    dic += '}'
    val = dic
  }

  return `val ${id} = ${val} : ${typ}`
}
