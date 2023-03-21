import * as lodash from 'lodash'
import * as sml from './nodes'
import { Context } from '../types'

const typeOfInfixOperator = {
  '+': {
    name: 'function',
    par: [
      { name: 'tuple', body: [{ name: 'int' }, { name: 'int' }] },
      { name: 'tuple', body: [{ name: 'real' }, { name: 'real' }] }
    ],
    ret: [{ name: 'int' }, { name: 'real' }]
  },
  '-': {
    name: 'function',
    par: [
      { name: 'tuple', body: [{ name: 'int' }, { name: 'int' }] },
      { name: 'tuple', body: [{ name: 'real' }, { name: 'real' }] }
    ],
    ret: [{ name: 'int' }, { name: 'real' }]
  },
  '*': {
    name: 'function',
    par: [
      { name: 'tuple', body: [{ name: 'int' }, { name: 'int' }] },
      { name: 'tuple', body: [{ name: 'real' }, { name: 'real' }] }
    ],
    ret: [{ name: 'int' }, { name: 'real' }]
  },
  '/': {
    name: 'function',
    par: [
      { name: 'tuple', body: [{ name: 'int' }, { name: 'int' }] },
      { name: 'tuple', body: [{ name: 'real' }, { name: 'real' }] }
    ],
    ret: [{ name: 'int' }, { name: 'real' }]
  },
  '<': {
    name: 'function',
    par: [
      { name: 'tuple', body: [{ name: 'int' }, { name: 'int' }] },
      { name: 'tuple', body: [{ name: 'real' }, { name: 'real' }] },
      { name: 'tuple', body: [{ name: 'char' }, { name: 'char' }] },
      { name: 'tuple', body: [{ name: 'string' }, { name: 'string' }] }
    ],
    ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
  },
  '>': {
    name: 'function',
    par: [
      { name: 'tuple', body: [{ name: 'int' }, { name: 'int' }] },
      { name: 'tuple', body: [{ name: 'real' }, { name: 'real' }] },
      { name: 'tuple', body: [{ name: 'char' }, { name: 'char' }] },
      { name: 'tuple', body: [{ name: 'string' }, { name: 'string' }] }
    ],
    ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
  },
  '=': {
    name: 'function',
    par: [
      { name: 'tuple', body: [{ name: 'int' }, { name: 'int' }] },
      { name: 'tuple', body: [{ name: 'real' }, { name: 'real' }] },
      { name: 'tuple', body: [{ name: 'char' }, { name: 'char' }] },
      { name: 'tuple', body: [{ name: 'string' }, { name: 'string' }] }
    ],
    ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
  },
  '<=': {
    name: 'function',
    par: [
      { name: 'tuple', body: [{ name: 'int' }, { name: 'int' }] },
      { name: 'tuple', body: [{ name: 'real' }, { name: 'real' }] },
      { name: 'tuple', body: [{ name: 'char' }, { name: 'char' }] },
      { name: 'tuple', body: [{ name: 'string' }, { name: 'string' }] }
    ],
    ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
  },
  '>=': {
    name: 'function',
    par: [
      { name: 'tuple', body: [{ name: 'int' }, { name: 'int' }] },
      { name: 'tuple', body: [{ name: 'real' }, { name: 'real' }] },
      { name: 'tuple', body: [{ name: 'char' }, { name: 'char' }] },
      { name: 'tuple', body: [{ name: 'string' }, { name: 'string' }] }
    ],
    ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
  },
  '<>': {
    name: 'function',
    par: [
      { name: 'tuple', body: [{ name: 'int' }, { name: 'int' }] },
      { name: 'tuple', body: [{ name: 'real' }, { name: 'real' }] },
      { name: 'tuple', body: [{ name: 'char' }, { name: 'char' }] },
      { name: 'tuple', body: [{ name: 'string' }, { name: 'string' }] }
    ],
    ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
  },
  '^': {
    name: 'function',
    par: [{ name: 'tuple', body: [{ name: 'string' }, { name: 'string' }] }],
    ret: [{ name: 'string' }]
  },
  andalso: {
    name: 'function',
    par: [{ name: 'tuple', body: [{ name: 'bool' }, { name: 'bool' }] }],
    ret: [{ name: 'bool' }]
  },
  orelse: {
    name: 'function',
    par: [{ name: 'tuple', body: [{ name: 'bool' }, { name: 'bool' }] }],
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
    const operandType = { name: 'tuple', body: [infer(node.left), infer(node.right)] }
    for (let i = 0; i < funType.par.length; i++) {
      if (lodash.isEqual(funType.par[i], operandType)) {
        node.type = funType.ret[i]
        return node.type
      }
    }
    throw new Error('operator and operand do not agree [type mismatch]')
  } else if (node.tag === 'PrefixApplicationExpression') {
    throw new Error('not supported yet')
  } else if (node.tag === 'Record') {
    const recordType: Array<sml.Kv> = []
    for (const [key, value] of Object.entries(node.items)) {
      const valueType = infer(value) as
        | sml.Int
        | sml.Real
        | sml.Bool
        | sml.Char
        | sml.Str
        | sml.Rec
        | sml.Tup
        | sml.Lis
        | sml.Fun
        | sml.Poly
      recordType.push({ name: 'keyvalue', key: key, value: valueType })
    }
    node.type = { name: 'record', body: recordType }
    return node.type
  } else if (node.tag === 'RecordSelector') {
    throw new Error('not supported yet')
  } else if (node.tag === 'List') {
    let itemsType = { name: 'a' } as sml.Poly
    for (let i = 0; i < node.items.length; i++) {
      if (i > 0 && !lodash.isEqual(itemsType, node.items[i].type)) {
        throw new Error('operator and operand do not agree [type mismatch]')
      }
      itemsType = node.items[i].type
    }
    node.type = { name: 'list', body: itemsType }
    return node.type
  } else if (node.tag === 'Identifier') {
    return lookup(node.name, E)
  } else if (node.tag === 'Constant') {
    return node.type
  }

  throw new Error('bruh')
}

export function typechecker(program: sml.Program, context: Context): sml.Program {
  console.log(program)
  console.log('xxxxxxxxxxxxxxxxxxxxxxxx')
  program.type = infer(program.body)
  console.log(program)
  return program
}
