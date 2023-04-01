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

function lookup(name: string, env: Array<Object>): sml.Type | undefined {
  for (let i = env.length - 1; i >= 0; i--) {
    const frame = env[i]
    if (frame.hasOwnProperty(name)) {
      return frame[name]
    }
  }
  return undefined
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
    node.type = isWellTyped(funType, operandType)
    return node.type
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
    if (node.items.length === 0) {
      node.type = { name: 'list', body: { name: "'a" } }
      return node.type
    } else {
      let bodyType = infer(node.items[0])
      for (let i = 1; i < node.items.length; i++) {
        const itemType = infer(node.items[i])
        if (!isTypeMatch(bodyType, itemType, [{}])) {
          throw new Error('operator and operand do not agree [type mismatch]')
        }
      }
      node.type = { name: 'list', body: bodyType }
      return node.type
    }
  } else if (node.tag === 'Identifier') {
    const defined = lookup(node.name, E)
    if (defined) {
      node.type = defined
      return node.type
    }
    throw new Error('undefined')
  } else if (node.tag === 'Constant') {
    return node.type
  }

  throw new Error('bruh')
}

export function typechecker(program: sml.Program, context: Context): sml.Program {
  program.type = infer(program.body)
  console.log(program)
  return program
}

function isWellTyped(operatorType: sml.Fun, operandType: sml.Type): sml.Type {
  for (let i = 0; i < operatorType.par.length; i++) {
    const [parType, env] = isTypeMatch(operatorType.par[i], operandType, [{}])
    if (parType) {
      const retType = decayType(operatorType.ret[i], env)
      return retType
    }
  }
  throw new Error('operator and operand do not agree [type mismatch]')
}

function isTypeMatch(t1: sml.Type, t2: sml.Type, env: Array<Object>): [sml.Type | undefined, Array<Object>] {
  t1 = decayType(t1, env)
  t2 = decayType(t2, env)

  if (isTypePoly(t1) && isTypePoly(t2)) {
    if (t1.name === t2.name) {
      return [t1, env]
    }
    return [undefined, env]
  } else if (isTypePoly(t1)) {
    if (isTypePrimitive(t2)) {
      bind(t1.name, t2, env)
      t1.name = t2.name
      return [t1, env]
    }
    return [undefined, env]
  } else if (isTypePoly(t2)) {
    if (isTypePrimitive(t1)) {
      bind(t2.name, t1, env)
      t2.name = t2.name
      return [t1, env]
    }
    return [undefined, env]
  } else if (isTypeRec(t1) && isTypeRec(t2)) {
    // The length of the body is different
    if (Object.keys((t1 as sml.Rec).body).length !== Object.keys((t2 as sml.Rec).body).length) {
      return [undefined, env]
    }

    // Sort the body
    ;(t1 as sml.Rec).body = Object.keys((t1 as sml.Rec).body)
      .sort()
      .reduce((obj, key) => {
        obj[key] = (t1 as sml.Rec).body[key]
        return obj
      }, {})

    // Sort the body
    ;(t2 as sml.Rec).body = Object.keys((t2 as sml.Rec).body)
      .sort()
      .reduce((obj, key) => {
        obj[key] = (t2 as sml.Rec).body[key]
        return obj
      }, {})

    const t1Body = Object.entries((t1 as sml.Rec).body)
    const t2Body = Object.entries((t2 as sml.Rec).body)

    // Check if any of the keys are different
    for (let i = 0; i < t1Body.length; i++) {
      if (t1Body[i][0] !== t2Body[i][0]) {
        return [undefined, env]
      }
    }

    for (let i = 0; i < t1Body.length; i++) {
      const [matchable, _] = isTypeMatch(t1Body[i][1], t2Body[i][1], env)

      if (!matchable) {
        return [undefined, env]
      }
    }

    return [t1, env]
  } else if (isTypeLis(t1) && isTypeLis(t2)) {
    const t1Body = (t1 as sml.Lis).body
    const t2Body = (t2 as sml.Lis).body
    const [matchable, _] = isTypeMatch(t1Body, t2Body, env)
    if (matchable) {
      return [t1, env]
    }
    return [undefined, env]
  } else if (isTypeFun(t1) && isTypeFun(t2)) {
    throw new Error('not supported yet')
  } else if (isTypePrimitive(t1) && isTypePrimitive(t2)) {
    return t1.name === t2.name ? [t1, env] : [undefined, env]
  } else {
    return [undefined, env]
  }
}

function decayType(t: sml.Type, env: Array<Object>): sml.Type {
  if (isTypePoly(t)) {
    const inferable = lookup(t.name, env)
    if (inferable) {
      t.name = inferable.name
    }
    return t
  } else if (isTypeRec(t)) {
    for (let [key, value] of Object.entries((t as sml.Rec).body)) {
      ;(t as sml.Rec).body[key] = decayType(value, env)
    }
    return t
  } else if (isTypeLis(t)) {
    ;(t as sml.Lis).body = decayType((t as sml.Lis).body, env)
    return t
  } else if (isTypeFun(t)) {
    // Not sure if this implementation correct
    for (let i = 0; i < (t as sml.Fun).par.length; i++) {
      decayType((t as sml.Fun).par[i], env)
      decayType((t as sml.Fun).ret[i], env)
    }
    return t
  } else {
    // Primitive type
    return t
  }
}

function isTypeInt(t: sml.Type) {
  return t.name === 'int'
}

function isTypeReal(t: sml.Type) {
  return t.name === 'real'
}

function isTypeBool(t: sml.Type) {
  return t.name === 'bool'
}

function isTypeChar(t: sml.Type) {
  return t.name === 'char'
}

function isTypeStr(t: sml.Type) {
  return t.name === 'string'
}

function isTypeRec(t: sml.Type) {
  return t.name === 'record'
}

function isTypeLis(t: sml.Type) {
  return t.name === 'list'
}

function isTypeFun(t: sml.Type) {
  return t.name === 'function'
}

function isTypePoly(t: sml.Type) {
  return t.name.slice(0, 1) === "'"
}

function isTypePrimitive(t: sml.Type) {
  return isTypeInt(t) || isTypeReal(t) || isTypeBool(t) || isTypeChar(t) || isTypeStr(t)
}
