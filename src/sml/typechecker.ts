import * as lodash from 'lodash'

import { Context } from '../types'
import * as sml from './nodes'

const typeOfInfixOperator = {
  '+': {
    name: 'function',
    par: [
      { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
      { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } }
    ],
    ret: [{ name: 'int' }, { name: 'real' }]
  },
  '-': {
    name: 'function',
    par: [
      { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
      { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } }
    ],
    ret: [{ name: 'int' }, { name: 'real' }]
  },
  '*': {
    name: 'function',
    par: [
      { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
      { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } }
    ],
    ret: [{ name: 'int' }, { name: 'real' }]
  },
  '/': {
    name: 'function',
    par: [
      { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
      { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } }
    ],
    ret: [{ name: 'int' }, { name: 'real' }]
  },
  '<': {
    name: 'function',
    par: [
      { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
      { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } },
      { name: 'record', body: { 1: { name: 'char' }, 2: { name: 'char' } } },
      { name: 'record', body: { 1: { name: 'string' }, 2: { name: 'string' } } }
    ],
    ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
  },
  '>': {
    name: 'function',
    par: [
      { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
      { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } },
      { name: 'record', body: { 1: { name: 'char' }, 2: { name: 'char' } } },
      { name: 'record', body: { 1: { name: 'string' }, 2: { name: 'string' } } }
    ],
    ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
  },
  '=': {
    name: 'function',
    par: [
      { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
      { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } },
      { name: 'record', body: { 1: { name: 'char' }, 2: { name: 'char' } } },
      { name: 'record', body: { 1: { name: 'string' }, 2: { name: 'string' } } }
    ],
    ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
  },
  '<=': {
    name: 'function',
    par: [
      { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
      { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } },
      { name: 'record', body: { 1: { name: 'char' }, 2: { name: 'char' } } },
      { name: 'record', body: { 1: { name: 'string' }, 2: { name: 'string' } } }
    ],
    ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
  },
  '>=': {
    name: 'function',
    par: [
      { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
      { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } },
      { name: 'record', body: { 1: { name: 'char' }, 2: { name: 'char' } } },
      { name: 'record', body: { 1: { name: 'string' }, 2: { name: 'string' } } }
    ],
    ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
  },
  '<>': {
    name: 'function',
    par: [
      { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
      { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } },
      { name: 'record', body: { 1: { name: 'char' }, 2: { name: 'char' } } },
      { name: 'record', body: { 1: { name: 'string' }, 2: { name: 'string' } } }
    ],
    ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
  },
  '^': {
    name: 'function',
    par: [{ name: 'record', body: { 1: { name: 'string' }, 2: { name: 'string' } } }],
    ret: [{ name: 'string' }]
  },
  '::': {
    name: 'function',
    par: [
      { name: 'record', body: { 1: { name: "'a" }, 2: { name: 'list', body: { name: "'a" } } } }
    ],
    ret: [{ name: 'list', body: { name: "'a" } }]
  },
  andalso: {
    name: 'function',
    par: [{ name: 'record', body: { 1: { name: 'bool' }, 2: { name: 'bool' } } }],
    ret: [{ name: 'bool' }]
  },
  orelse: {
    name: 'function',
    par: [{ name: 'record', body: { 1: { name: 'bool' }, 2: { name: 'bool' } } }],
    ret: [{ name: 'bool' }]
  }
}

/* ************
 * environments
 * ************/

// Frames are objects that map symbols (strings) to values.

const GLOBAL_FRAME = {}

// Populate global frame with infix operators
for (const key in typeOfInfixOperator) {
  GLOBAL_FRAME[key] = typeOfInfixOperator[key]
}

const GLOBAL_ENVIRONMENT = [GLOBAL_FRAME]

function lookup(name: string, env: Array<Object>): sml.Type {
  for (let i = env.length - 1; i >= 0; i--) {
    const frame = env[i]
    if (frame.hasOwnProperty(name)) {
      return frame[name]
    }
  }
  throw new Error(`unbound variable: ${name}`)
}

function bind(name: string, value: sml.Type, env: Array<Object>) {
  const frame = env[env.length - 1]
  frame[name] = value
}

function extend(env: Array<Object>): number {
  return env.push({})
}

const E: Array<Object> = GLOBAL_ENVIRONMENT

function infer(node: sml.Node): sml.Type {
  if (node.tag === 'ExpressionDeclaration') {
    node.type = infer(node.value)
    bind('it', node.type, E)
    return node.type
  } else if (node.tag === 'ValueDeclaration') {
    node.type = infer(node.value)
    bind(node.name, node.type, E)
    return node.type
  } else if (node.tag === 'SequenceDeclaration') {
    for (let i = 0; i < node.declarations.length; i++) {
      infer(node.declarations[i])
    }
    node.type = node.declarations[node.declarations.length - 1].type
    return node.type
  } else if (node.tag === 'ConditionalExpression') {
    throw new Error('not supported yet')
  } else if (node.tag === 'InfixApplicationExpression') {
    const funType = lookup(node.operator, E) as sml.Fun
    const operandType = { name: 'record', body: { 1: infer(node.left), 2: infer(node.right) } }
    for (let i = 0; i < funType.par.length; i++) {
      if (lodash.isEqual(funType.par[i], operandType)) {
        node.type = funType.ret[i]
        return node.type
      }
    }
    throw new Error('operator and operand do not agree [type mismatch]')
  } else if (node.tag === 'Record') {
    const recordType = {}
    for (const [key, value] of Object.entries(node.items)) {
      recordType[key] = infer(value)
    }
    node.type = { name: 'record', body: recordType }
    return node.type
  } else if (node.tag === 'RecordSelector') {
    node.type = (infer(node.record!) as sml.Rec).body[node.label]
    return node.type
  } else if (node.tag === 'List') {
    let listType = { name: "'a" } as sml.Poly
    for (let i = 0; i < node.items.length; i++) {
      const itemType = infer(node.items[i])
      if (i > 0 && !lodash.isEqual(listType, itemType)) {
        throw new Error('operator and operand do not agree [type mismatch]')
      }
      listType = itemType
    }
    node.type = { name: 'list', body: listType }
    return node.type
  } else if (node.tag === 'Identifier') {
    return lookup(node.name, E)
  } else if (node.tag === 'Constant') {
    return node.type
  }

  throw new Error('bruh')
  // return node.type
}

export function typechecker(program: sml.Program, context: Context): sml.Program {
  program.type = infer(program.body)
  console.log(program)
  return program
}
