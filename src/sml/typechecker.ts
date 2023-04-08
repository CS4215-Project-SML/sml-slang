import _, * as lodash from 'lodash'
import { Context } from '../types'
import * as sml from './nodes'


const typeOfInfixOperator = {
  '+': {
    name: 'function',
    par: {
      name: 'record',
      body: { 1: { name: 'int' }, 2: { name: 'int' } }
    },
    ret: { name: 'int' }
  },
  '-': {
    name: 'function',
    par: {
      name: 'record',
      body: { 1: { name: 'int' }, 2: { name: 'int' } }
    },
    ret: { name: 'int' }
  },
  '*': {
    name: 'function',
    par: {
      name: 'record',
      body: { 1: { name: 'int' }, 2: { name: 'int' } }
    },
    ret: { name: 'int' }
  },
  '/': {
    name: 'function',
    par: {
      name: 'record',
      body: { 1: { name: 'real' }, 2: { name: 'real' } }
    },
    ret: { name: 'real' }
  },
  '<': {
    name: 'function',
    par: {
      name: 'record',
      body: { 1: { name: 'int' }, 2: { name: 'int' } }
    },
    ret: { name: 'bool' }
  },
  '>': {
    name: 'function',
    par: {
      name: 'record',
      body: { 1: { name: 'int' }, 2: { name: 'int' } }
    },
    ret: { name: 'bool' }
  },
  '=': {
    name: 'function',
    par: {
      name: 'record',
      body: { 1: { name: 'int' }, 2: { name: 'int' } }
    },
    ret: { name: 'bool' }
  },
  '<=': {
    name: 'function',
    par: {
      name: 'record',
      body: { 1: { name: 'int' }, 2: { name: 'int' } }
    },
    ret: { name: 'bool' }
  },
  '>=': {
    name: 'function',
    par: {
      name: 'record',
      body: { 1: { name: 'int' }, 2: { name: 'int' } }
    },
    ret: { name: 'bool' }
  },
  '<>': {
    name: 'function',
    par: {
      name: 'record',
      body: { 1: { name: 'int' }, 2: { name: 'int' } }
    },
    ret: { name: 'bool' }
  },
  '^': {
    name: 'function',
    par: {
      name: 'record',
      body: { 1: { name: 'string' }, 2: { name: 'string' } },
      ret: { name: 'string' }
    }
  },
  '::': {
    name: 'function',
    par: {
      name: 'record',
      body: { 1: { name: "'a" }, 2: { name: 'list', body: { name: "'a" } } }
    },
    ret: { name: 'list', body: { name: "'a" } }
  },
  andalso: {
    name: 'function',
    par: {
      name: 'record',
      body: { 1: { name: 'bool' }, 2: { name: 'bool' } }
    },
    ret: { name: 'bool' }
  },
  orelse: {
    name: 'function',
    par: {
      name: 'record',
      body: { 1: { name: 'bool' }, 2: { name: 'bool' } }
    },
    ret: { name: 'bool' }
  }
}

/* ******************
 * Static environment
 * ******************/

// Frames are objects that map identifiers to types.

type Frame = Object

type StaticEnvironment = Array<Frame>

const GLOBAL_FRAME: Frame = {}

// Populate global frame with infix operators
for (const key in typeOfInfixOperator) {
  GLOBAL_FRAME[key] = typeOfInfixOperator[key]
}

const GLOBAL_ENVIRONMENT: StaticEnvironment = [GLOBAL_FRAME]

function lookup(name: string, env: StaticEnvironment): sml.Type {
  for (let i = env.length - 1; i >= 0; i--) {
    const frame = env[i]
    if (frame.hasOwnProperty(name)) {
      return frame[name]
    }
  }
  throw new Error('undefined')
}

function bind(name: string, value: sml.Type, env: StaticEnvironment) {
  const frame = env[env.length - 1]
  frame[name] = value
}

function extend(env: StaticEnvironment): number {
  return env.push({})
}

const E: StaticEnvironment = GLOBAL_ENVIRONMENT

/* ****************
 * Type constraints
 * ****************/

type Constraint = [sml.Type, sml.Type]

type ConstraintEnvironment = Array<Constraint>

function addConstraint(t1: sml.Type, t2: sml.Type, cenv: ConstraintEnvironment) {
  if (isTypeEquivalent(t1, t2)) {

    // Ignore redundant constraints
    return

  } else if (isTypePrimitive(t1) && isTypePrimitive(t2) && !isTypeEquivalent(t1, t2)) {

    throw new Error('invalid constraint')

  } else if (isTypeRec(t1) && isTypeRec(t2)) {

    if (Object.keys((t1 as sml.Rec).body).length !== Object.keys((t2 as sml.Rec).body).length) {
      throw new Error('invalid constraint')
    }

    const t1Body = Object.entries((t1 as sml.Rec).body)
    const t2Body = Object.entries((t2 as sml.Rec).body)

    for (let i = 0; i < t1Body.length; i++) {
      addConstraint(t1Body[i][1], t2Body[i][1], cenv)
    }

    return

  } else if (isTypeLis(t1) && isTypeLis(t2)) {

    addConstraint((t1 as sml.Lis).body, (t2 as sml.Lis).body, cenv)
    return

  } else if (isTypeFun(t1) && isTypeFun(t2)) {

    addConstraint((t1 as sml.Fun).par, (t2 as sml.Fun).par, cenv)
    addConstraint((t1 as sml.Fun).ret, (t2 as sml.Fun).ret, cenv)
    return

  } else if (isTypePoly(t1) || isTypePoly(t2)) {

    cenv.push([t1, t2])
    return

  }

  throw new Error('invalid constraint')
}

function solveTypeConstraint(t: sml.Type, cenv: ConstraintEnvironment): sml.Type {
  if (isTypePoly(t)) {

    return solveConstraintEquations(t, cenv)

  } else if (isTypePrimitive(t)) {

    return t

  } else if (isTypeRec(t)) {

    for (let [key, value] of Object.entries((t as sml.Rec).body)) {
      ;(t as sml.Rec).body[key] = solveTypeConstraint(value, cenv)
    }
    return t

  } else if (isTypeLis(t)) {

    ;(t as sml.Lis).body = solveTypeConstraint((t as sml.Lis).body, cenv)
    return t

  } else if (isTypeFun(t)) {

    ;(t as sml.Fun).par = solveTypeConstraint((t as sml.Fun).par, cenv)
    ;(t as sml.Fun).ret = solveTypeConstraint((t as sml.Fun).ret, cenv)
    return t

  }

  throw new Error('not supported yet')
}

function solveConstraintEquations(t: sml.Poly, cenv: ConstraintEnvironment): sml.Type {
  const cons: Array<sml.Type> = []

  for (const c of cenv) {
    if (isTypeEquivalent(t, c[0])) {
      cons.push(c[1])
    } else if (isTypeEquivalent(t, c[1])) {
      cons.push(c[0])
    }
  }

  if (cons.length === 0) {
    return t
  }

  // Avoid infinite recursion
  const renv: ConstraintEnvironment = []
  for (const c of cenv) {
    // this is wrong, need to check whether the type is "inside" or not, not equivalence check
    if (!isTypeEquivalent(t, c[0]) && !isTypeEquivalent(t, c[1])) {
      renv.push([c[0], c[1]])
    }
  }

  let prim = undefined

  for (let i = 0; i < cons.length; i++) {
    const res = solveTypeConstraint(cons[i], renv)
    cons[i] = res

    if (isTypePrimitive(cons[i])) {
      if (!prim) {
        prim = cons[i]
      } else if (prim && !isTypeEquivalent(prim, cons[i])) {
        throw new Error('constraints cannot be solved')
      }
    }
  }

  const res = prim ? prim : cons[0]

  for (let i = 1; i < cons.length; i++) {
    if (!isTypeSimilar(res, cons[i])) {
      throw new Error(`constraints cannot be solved: ${cenv}`)
    }
  }

  return res
}

function isTypeEquivalent(t1: sml.Type, t2: sml.Type): boolean {
  if (isTypePoly(t1) && isTypePoly(t2)) {

    return t1.name === t2.name

  } else if (isTypePrimitive(t1) && isTypePrimitive(t2)) {

    return t1.name === t2.name

  } else if (isTypeRec(t1) && isTypeRec(t2)) {

    if (Object.keys((t1 as sml.Rec).body).length !== Object.keys((t2 as sml.Rec).body).length) {
      return false
    }

    ;(t1 as sml.Rec).body = Object.keys((t1 as sml.Rec).body)
      .sort()
      .reduce((obj, key) => {
        obj[key] = (t1 as sml.Rec).body[key]
        return obj
      }, {})
  
    ;(t2 as sml.Rec).body = Object.keys((t2 as sml.Rec).body)
      .sort()
      .reduce((obj, key) => {
        obj[key] = (t2 as sml.Rec).body[key]
        return obj
      }, {})

    const t1Body = Object.entries((t1 as sml.Rec).body)
    const t2Body = Object.entries((t2 as sml.Rec).body)

    for (let i = 0; i < t1Body.length; i++) {
      if (t1Body[i][0] !== t2Body[i][0]) {
        return false
      }
    }

    for (let i = 0; i < t1Body.length; i++) {
      if (!isTypeEquivalent(t1Body[i][1], t2Body[i][1])) {
        return false
      }
    }
    
    return true

  } else if (isTypeLis(t1) && isTypeLis(t2)) {

    const t1Body = (t1 as sml.Lis).body
    const t2Body = (t2 as sml.Lis).body

    return isTypeEquivalent(t1Body, t2Body)

  } else if (isTypeFun(t1) && isTypeFun(t2)) {

    const t1Par = (t1 as sml.Fun).par
    const t2Par = (t2 as sml.Fun).par

    const t1Ret = (t1 as sml.Fun).ret
    const t2Ret = (t2 as sml.Fun).ret

    return isTypeEquivalent(t1Par, t2Par) && isTypeEquivalent(t1Ret, t2Ret)

  }

  return false
}

function isTypeSimilar(t1: sml.Type, t2: sml.Type): boolean {
  if (isTypePoly(t1) || isTypePoly(t2)) {

    return true

  } else if (isTypePrimitive(t1) && isTypePrimitive(t2)) {

    return t1.name === t2.name

  } else if (isTypeRec(t1) && isTypeRec(t2)) {

    if (Object.keys((t1 as sml.Rec).body).length !== Object.keys((t2 as sml.Rec).body).length) {
      return false
    }

    ;(t1 as sml.Rec).body = Object.keys((t1 as sml.Rec).body)
      .sort()
      .reduce((obj, key) => {
        obj[key] = (t1 as sml.Rec).body[key]
        return obj
      }, {})
  
    ;(t2 as sml.Rec).body = Object.keys((t2 as sml.Rec).body)
      .sort()
      .reduce((obj, key) => {
        obj[key] = (t2 as sml.Rec).body[key]
        return obj
      }, {})

    const t1Body = Object.entries((t1 as sml.Rec).body)
    const t2Body = Object.entries((t2 as sml.Rec).body)

    for (let i = 0; i < t1Body.length; i++) {
      if (t1Body[i][0] !== t2Body[i][0]) {
        return false
      }
    }

    for (let i = 0; i < t1Body.length; i++) {
      if (!isTypeSimilar(t1Body[i][1], t2Body[i][1])) {
        return false
      }
    }
    
    return true

  } else if (isTypeLis(t1) && isTypeLis(t2)) {

    const t1Body = (t1 as sml.Lis).body
    const t2Body = (t2 as sml.Lis).body

    return isTypeSimilar(t1Body, t2Body)

  } else if (isTypeFun(t1) && isTypeFun(t2)) {

    const t1Par = (t1 as sml.Fun).par
    const t2Par = (t2 as sml.Fun).par

    const t1Ret = (t1 as sml.Fun).ret
    const t2Ret = (t2 as sml.Fun).ret

    return isTypeSimilar(t1Par, t2Par) && isTypeSimilar(t1Ret, t2Ret)

  }

  return false
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

/* *******************************
 * Utilities for polymorphic types
 * *******************************/

let freshType = 0

function getFreshType(): string {
  return "'" + (freshType++).toString()
}

function reassignFreshTypes(t: sml.Type): sml.Type {
  const poly: Array<string> = scanPolyTypes(t)

  const mapping = {}

  for (const p of poly) {
    if (!mapping.hasOwnProperty(p)) {
      mapping[p] = getFreshType()
    }
  }

  return assignTypes(t, mapping)
}

function prettifyType(t: sml.Type) {
  const poly: Array<string> = scanPolyTypes(t)
  const alpha: Array<string> = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const mapping = {}

  let idx = 0
  for (const p of poly) {
    if (!mapping.hasOwnProperty(p)) {
      mapping[p] = "'" + alpha[idx++]
    }
  }

  return assignTypes(t, mapping)
}

function scanPolyTypes(t: sml.Type): Array<string> {
  const poly = []

  if (isTypePoly(t)) {
    poly.push(t.name)
  } else if (isTypeRec(t)) {
    for (const [_, value] of Object.entries((t as sml.Rec).body)) {
      poly.push(...scanPolyTypes(value))
    }
  } else if (isTypeLis(t)) {
    poly.push(...scanPolyTypes((t as sml.Lis).body))
  } else if (isTypeFun(t)) {
    poly.push(...scanPolyTypes((t as sml.Fun).par))
    poly.push(...scanPolyTypes((t as sml.Fun).ret))
  }

  return poly.sort()
}

function assignTypes(t: sml.Type, mapping: Object): sml.Type {
  if (isTypePoly(t)) {
    t.name = mapping[t.name]
  } else if (isTypeRec(t)) {
    for (const [key, value] of Object.entries((t as sml.Rec).body)) {
      ;(t as sml.Rec).body[key] = assignTypes(value, mapping)
    }
  } else if (isTypeLis(t)) {
    ;(t as sml.Lis).body = assignTypes((t as sml.Lis).body, mapping)
  } else if (isTypeFun(t)) {
    ;(t as sml.Fun).par = assignTypes((t as sml.Fun).par, mapping)
    ;(t as sml.Fun).ret = assignTypes((t as sml.Fun).ret, mapping)
  }
  return t
}

function infer(node: sml.Node, cenv?: ConstraintEnvironment): sml.Type {

  if (node.tag === 'SequenceDeclaration') {

    for (let i = 0; i < node.declarations.length; i++) {
      infer(node.declarations[i])
    }
    node.type = node.declarations[node.declarations.length - 1].type
    return node.type

  } else if (node.tag === 'ValueDeclaration') {

    node.type = infer(node.value)
    node.type = prettifyType(node.type)
    bind(node.name, node.type, E)
    return node.type

  } else if (node.tag === 'ExpressionDeclaration') {

    node.type = infer(node.value)
    node.type = prettifyType(node.type)
    bind('it', node.type, E)
    return node.type

  } else if (node.tag === 'FunctionDeclaration') {

    // sketchy
    bind(node.name, { name: 'function' , par: { name: 'undefined'}, ret: { name: 'undefined' }}, E)
    extend(E)
    node.type = infer(node.lambda)  // or use constraint solving instead?
    E.pop()
    bind(node.name, node.type, E)
    return node.type

  } else if (node.tag === 'LambdaExpression') {

    for (const v of node.fv) {
      // sketchy
      bind(v, infer({ tag: 'Identifier', type: { name: 'undefined' }, name: v }), E)
    }
    node.type = infer(node.matching)
    return node.type

  } else if (node.tag === 'Matching') {

    if (node.rules.length === 1) {

      node.type = infer(node.rules[0])
      return node.type

    } else {

      const C: ConstraintEnvironment = []

      const mType = infer(node.rules[0])
      for (let i = 0; i < node.rules.length; i++) {
        const rType = infer(node.rules[i])
        addConstraint(mType, rType, C)
      }

      solveTypeConstraint(mType, C)

      node.type = mType
      return node.type

    }

  } else if (node.tag === 'Matchingrule') {

    node.pat.type = infer(node.pat)
    node.exp.type = infer(node.exp)
    node.type = { name: 'function', par: node.pat.type, ret: node.exp.type }
    return node.type

  } else if (node.tag === 'PatternConstant') {

    return node.type

  } else if (node.tag === 'PatternIdentifier') {

    // sketchy
    bind(node.name, { name: 'undefined' }, E)
    node.type = lookup(node.name, E)
    return node.type

  } else if (node.tag === 'PatternRecord') {

    const bodyType = {}
    for (const [key, value] of Object.entries(node.aliases)) {
      bodyType[key] = infer(value)
    }
    node.type = { name: 'record', body: bodyType }
    return node.type

  } else if (node.tag === 'PatternInfix') {

    throw new Error('not supported yet')

  } else if (node.tag === 'ConditionalExpression') {

    let predType = infer(node.pred)
    let consType = infer(node.cons)
    let altType = infer(node.alt)

    const C: ConstraintEnvironment = []
    addConstraint(predType, { name: 'bool' }, C)
    addConstraint(consType, altType, C)

    predType = solveTypeConstraint(predType, C)
    consType = solveTypeConstraint(consType, C)
    altType = solveTypeConstraint(altType, C)

    node.type = consType
    return node.type

  } else if (node.tag === 'InfixApplicationExpression') {

    let funType: sml.Type = reassignFreshTypes(lookup(node.operator, E))

    let parType: sml.Type = (funType as sml.Fun).par
    let argType: sml.Type = { name: 'record', body: { 1: infer(node.left), 2: infer(node.right) } }

    const C: ConstraintEnvironment = []
    addConstraint(parType, argType, C)

    parType = solveTypeConstraint(parType, C)
    argType = solveTypeConstraint(argType, C)

    let retType: sml.Type = (funType as sml.Fun).ret
    retType = solveTypeConstraint(retType, C)

    node.type = retType
    return node.type

  } else if (node.tag === 'PrefixApplicationExpression') {
    
  } else if (node.tag === 'Record') {

    const bodyType = {}
    for (const [key, value] of Object.entries(node.items)) {
      bodyType[key] = infer(value)
    }
    node.type = { name: 'record', body: bodyType }
    return node.type

  } else if (node.tag === 'RecordSelector') {
    
    if (!node.record) {
      throw new Error('no record to be selected')
    }

    node.type = (infer(node.record) as sml.Rec).body[node.label]
    return node.type

  } else if (node.tag === 'List') {

    if (node.items.length === 0) {

      node.type = { name: 'list', body: { name: getFreshType() }}
      return node.type

    } else {

      const C: ConstraintEnvironment = []

      let bodyType = infer(node.items[0])
      for (let i = 1; i < node.items.length; i++) {
        const itemType = infer(node.items[i])
        addConstraint(bodyType, itemType, C)
      }
  
      bodyType = solveTypeConstraint(bodyType, C)

      node.type = { name: 'list', body: bodyType }
      return node.type

    }

  } else if (node.tag === 'Constant') {

    return node.type

  } else if (node.tag === 'Identifier') {

    node.type = lookup(node.name, E)
    return node.type

  }

  throw new Error('not supported yet')
}

export function typechecker(program: sml.Program, context: Context): sml.Program {
  program.type = infer(program.body)
  console.log(JSON.stringify(program.body, null, 2))
  return program
}
