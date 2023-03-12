import * as sml from '../sml/types'
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

function lookup(name: string, env: Array<Object>): sml.Constant {
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
    push(S, { type: 'Constant', value: cmd.value })
  },
  Identifier: (cmd: sml.Identifier) => {
    const value = lookup(cmd.name, E)
    push(S, value)
  },
  Record: (cmd: sml.Record) => {
    const items = []
    for (let [key, value] of Object.entries(cmd.items)) {
      items.push({ type: 'Keyvalue', key: key, value: value })
    }
    push(A, { type: 'RecordInstruction', length: cmd.length }, ...items.reverse())
  },
  Keyvalue: (cmd: sml.Keyvalue) => {
    push(A, { type: 'KeyvalueInstruction', key: cmd.key }, cmd.value)
  },
  RecordSelector: (cmd: sml.RecordSelector) => {
    if (cmd.record === undefined) throw new Error('bruh') // TODO: this shouldn't happen, we should enforce this during type-checking
    push(A, { type: 'RecordSelectorInstruction', label: cmd.label }, cmd.record)
  },
  ExpressionDeclaration: (cmd: sml.ExpressionDeclaration) => {
    push(A, { type: 'BindInstruction', name: 'it' }, cmd.value)
  },
  ValueDeclaration: (cmd: sml.ValueDeclaration) => {
    push(A, { type: 'BindInstruction', name: cmd.name }, cmd.value)
  },
  InfixApplicationExpression: (cmd: sml.InfixApplicationExpression) => {
    push(A, { type: 'InfixApplicationInstruction', operator: cmd.operator }, cmd.right, cmd.left)
  },
  SequenceDeclaration: (cmd: sml.SequenceDeclaration) => {
    push(A, cmd.declarations[cmd.declarations.length - 1])
    for (let i = cmd.declarations.length - 2; i >= 0; i--) {
      push(A, { type: 'PopInstruction' }, cmd.declarations[i])
    }
  },

  PopInstruction: (_: PopInstruction) => {
    S.pop()
  },
  BindInstruction: (cmd: BindInstruction) => {
    const value = S.pop() as sml.Constant
    bind(cmd.name, value, E)
    push(S, { type: 'Identifier', name: cmd.name })
  },
  RecordInstruction: (cmd: RecordInstruction) => {
    const items = {}
    for (let i = 0; i < cmd.length; i++) {
      const keyvalue = S.pop() as sml.Keyvalue
      items[keyvalue.key] = keyvalue.value
    }
    push(S, { type: 'Record', length: cmd.length, items: items })
  },
  KeyvalueInstruction: (cmd: KeyvalueInstruction) => {
    push(S, { type: 'Keyvalue', key: cmd.key, value: S.pop() as sml.Constant })
  },
  RecordSelectorInstruction: (cmd: RecordSelectorInstruction) => {
    const items = (S.pop() as sml.Record).items // TODO: should be a record, type-check this
    if (items.hasOwnProperty(cmd.label)) {
      push(S, items[cmd.label])
    } else {
      throw new Error('bruh') // TODO: proper error handling
    }
  },
  InfixApplicationInstruction: (cmd: InfixApplicationInstruction) => {
    const right = (S.pop() as sml.Constant).value
    const left = (S.pop() as sml.Constant).value
    push(S, { type: 'Constant', value: applyInfixOperator(cmd.operator, left, right) })
  }
}

/* **********************
 * microcode instructions
 * **********************/
interface PopInstruction {
  type: 'Pop'
}

interface BindInstruction {
  type: 'Bind'
  name: string
}

interface RecordInstruction {
  type: 'Record'
  length: number
}

interface KeyvalueInstruction {
  type: 'Keyvalue'
  key: string
}

interface RecordSelectorInstruction {
  type: 'RecordSelectorInstruction'
  label: string
}

interface InfixApplicationInstruction {
  type: 'InfixApplicationInstruction'
  operator: sml.InfixOperator
}

/* ****************
 * interpreter loop
 * ****************/

const STEP_LIMIT = 1000000

export function evaluate(program: sml.Program, context: Context) {
  A = [program.body]
  S = []
  E = GLOBAL_ENVIRONMENT

  let i = 0
  while (i < STEP_LIMIT) {
    if (A.length === 0) break

    const cmd = A.pop() as sml.Declaration

    console.log('Executed command:')
    console.log(cmd)

    if (microcode.hasOwnProperty(cmd.type)) {
      microcode[cmd.type](cmd)
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
}
