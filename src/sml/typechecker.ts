import * as lodash from 'lodash'
import { Context } from '../types'
import * as sml from './nodes'
import * as utils from './utils'
import { TypeError } from './error'

const builtinIdentifiers = ['nil']

const typeOfBuiltins = {
  'nil': {
    name: 'list',
    body: { name: "'a" }
  },
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
  '=': {
    name: 'function',
    par: [
      { name: 'record', body: { 1: { name: "'a" }, 2: { name: "'a" } } }
    ],
    ret: [{ name: 'bool' }]
  },
  '<>': {
    name: 'function',
    par: [
      { name: 'record', body: { 1: { name: "'a" }, 2: { name: "'a" } } }
    ],
    ret: [{ name: 'bool' }]
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

    throw new Error('constraint given is invalid')

  } else if (isTypeRec(t1) && isTypeRec(t2)) {

    if (Object.keys((t1 as sml.Rec).body).length !== Object.keys((t2 as sml.Rec).body).length) {
      throw new Error('constraint given is invalid')
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

    addConstraint((t1 as sml.Fun).par[0], (t2 as sml.Fun).par[0], cenv)
    addConstraint((t1 as sml.Fun).ret[0], (t2 as sml.Fun).ret[0], cenv)
    return

  } else if (isTypePoly(t1) || isTypePoly(t2)) {

    cenv.push([t1, t2])
    return

  }

  throw new Error('constraint given is invalid')
}

// Maps polymorphic types to their reduced (solved) forms
const R: Object = {}

function reduceType(t: sml.Type): sml.Type {
  if (isTypePoly(t)) {
    // Avoid cylic reduction
    const reds = new Set()
    reds.add(t.name)
    while (R.hasOwnProperty(t.name)) {
      const red = R[t.name]
      if (reds.has(red.name)) {
        break
      }
      reds.add(red.name)
      t = red
      if (!isTypePoly(t)) {
        break
      }
    }
    if (!isTypePoly(t)) {
      return reduceType(t)
    }
  } else if (isTypeRec(t)) {
    for (const [key, value] of Object.entries((t as sml.Rec).body)) {
      ;(t as sml.Rec).body[key] = reduceType(value)
    }
  } else if (isTypeLis(t)) {
    ;(t as sml.Lis).body = reduceType((t as sml.Lis).body)
  } else if (isTypeFun(t)) {
    ;(t as sml.Fun).par[0] = reduceType((t as sml.Fun).par[0])
    ;(t as sml.Fun).ret[0] = reduceType((t as sml.Fun).ret[0])
  }

  return t
}

function solveTypeConstraint(t: sml.Type, cenv: ConstraintEnvironment): sml.Type {
  if (isTypePoly(t)) {
    const res = reduceType(solveConstraintEquations(t, cenv))
    if (!isTypeEquivalent(t, res)) {
      // possibility of overwrite?
      R[t.name] = res
    }
    return res
  } else if (isTypeRec(t)) {
    for (const [key, value] of Object.entries((t as sml.Rec).body)) {
      ;(t as sml.Rec).body[key] = solveTypeConstraint(value, cenv)
    }
  } else if (isTypeLis(t)) {
    ;(t as sml.Lis).body = solveTypeConstraint((t as sml.Lis).body, cenv)
  } else if (isTypeFun(t)) {
    ;(t as sml.Fun).par[0] = solveTypeConstraint((t as sml.Fun).par[0], cenv)
    ;(t as sml.Fun).ret[0] = solveTypeConstraint((t as sml.Fun).ret[0], cenv)
  }
  return t
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
    if (!isTypeReferencedIn(t, c[0]) && !isTypeReferencedIn(t, c[1])) {
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
        throw new Error('constraint equations cannot be solved')
      }
    }
  }

  const res = prim ? prim : cons[0]

  for (let i = 1; i < cons.length; i++) {
    if (!isTypePoly(res) && !isTypePoly(cons[i]) && !isTypeEquivalent(res, cons[i])) {
      throw new Error('constraint equations cannot be solved')
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

    const t1Par = (t1 as sml.Fun).par[0]
    const t2Par = (t2 as sml.Fun).par[0]

    const t1Ret = (t1 as sml.Fun).ret[0]
    const t2Ret = (t2 as sml.Fun).ret[0]

    return isTypeEquivalent(t1Par, t2Par) && isTypeEquivalent(t1Ret, t2Ret)

  }

  return false
}

// Is type A referenced in type B?
function isTypeReferencedIn(a: sml.Type, b: sml.Type): boolean {
  if (isTypePoly(b)) {
    return isTypeEquivalent(a, b)
  } else if (isTypePrimitive(b)) {
    return isTypeEquivalent(a, b)
  } else if (isTypeRec(b)) {
    for (const [key, _] of Object.entries((b as sml.Rec).body)) {
      if (isTypeReferencedIn(a, (b as sml.Rec).body[key])) {
        return true
      }
    }
  } else if (isTypeLis(b)) {
    return isTypeReferencedIn(a, (b as sml.Lis).body)
  } else if (isTypeFun(b)) {
    return isTypeReferencedIn(a, (b as sml.Fun).par[0]) || isTypeReferencedIn(a, (b as sml.Fun).ret[0])
  }
  return false
}

let freshType = 0

function getFreshType(): string {
  return "'" + (freshType++).toString()
}

function reassignFreshType(t: sml.Type): sml.Type {
  const poly: Array<string> = scanPolyTypes(t)
  const mapping = {}

  for (const p of poly) {
    if (!mapping.hasOwnProperty(p)) {
      mapping[p] = getFreshType()
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
    poly.push(...scanPolyTypes((t as sml.Fun).par[0]))
    poly.push(...scanPolyTypes((t as sml.Fun).ret[0]))
  }

  return poly
}

function assignTypes(t: sml.Type, mapping: Object): sml.Type {
  if (isTypePoly(t)) {
    if (mapping.hasOwnProperty(t.name)) {
      t.name = mapping[t.name]
    }
  } else if (isTypeRec(t)) {
    for (const [key, value] of Object.entries((t as sml.Rec).body)) {
      ;(t as sml.Rec).body[key] = assignTypes(value, mapping)
    }
  } else if (isTypeLis(t)) {
    ;(t as sml.Lis).body = assignTypes((t as sml.Lis).body, mapping)
  } else if (isTypeFun(t)) {
    ;(t as sml.Fun).par[0] = assignTypes((t as sml.Fun).par[0], mapping)
    ;(t as sml.Fun).ret[0] = assignTypes((t as sml.Fun).ret[0], mapping)
  }
  return t
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

function isTypeUnd(t: sml.Type) {
  return t.name === 'undfined'
}


/* ******************
 * Static environment
 * ******************/

// Frames are objects that map identifiers to types.

type Frame = Object

type StaticEnvironment = Array<Frame>

const GLOBAL_FRAME: Frame = {}

// Populate global frame with infix operators
for (const key in typeOfBuiltins) {
  GLOBAL_FRAME[key] = typeOfBuiltins[key]
}

const GLOBAL_ENVIRONMENT: StaticEnvironment = [GLOBAL_FRAME]

function lookup(name: string, env: StaticEnvironment): sml.Type {
  for (let i = env.length - 1; i >= 0; i--) {
    const frame = env[i]
    if (frame.hasOwnProperty(name)) {
      return reduceType(frame[name])
    }
  }
  throw new TypeError(`unbound variable or constructor: ${name}`)
}

function bind(name: string, value: sml.Type, env: StaticEnvironment) {
  const frame = env[env.length - 1]
  frame[name] = reduceType(value)
}

function extend(env: StaticEnvironment): number {
  return env.push({})
}

const E: StaticEnvironment = GLOBAL_ENVIRONMENT


function infer(node: sml.Node): sml.Type {

  if (node.tag === 'SequenceDeclaration') {

    for (let i = 0; i < node.declarations.length; i++) {
      infer(node.declarations[i])
    }
    node.type = node.declarations[node.declarations.length - 1].type
    return node.type

  } else if (node.tag === 'ValueDeclaration') {

    node.type = infer(node.value)
    node.type.inferred = true
    bind(node.name, node.type, E)
    return node.type

  } else if (node.tag === 'ExpressionDeclaration') {

    node.type = infer(node.value)
    node.type.inferred = true
    bind('it', node.type, E)
    return node.type

  } else if (node.tag === 'FunctionDeclaration') {

    bind(node.name, { name: 'function' , par: [{ name: getFreshType() }], ret: [{ name: getFreshType() }] }, E)
    node.type = infer(node.lambda)
    node.type.inferred = true
    bind(node.name, node.type, E)
    return node.type

  } else if (node.tag === 'LetExpression') {

    extend(E)
    infer(node.dec)
    node.type = infer(node.exp)
    E.pop()
    return node.type

  } else if (node.tag === 'LambdaExpression') {

    node.type = infer(node.matching)
    return node.type

  } else if (node.tag === 'Matching') {

    if (node.rules.length === 1) {

      node.type = infer(node.rules[0])
      return node.type

    } else {

      const C: ConstraintEnvironment = []

      const mType = infer(node.rules[0])
      for (let i = 1; i < node.rules.length; i++) {
        const rType = infer(node.rules[i])
        addConstraint(mType, rType, C)
      }

      for (let i = 0; i < node.rules.length; i++) {
        node.rules[i].type = solveTypeConstraint(node.rules[i].type, C)
      }

      node.type = node.rules[0].type
      return node.type

    }

  } else if (node.tag === 'Matchingrule') {

    extend(E)
    node.pat.type = infer(node.pat)
    node.exp.type = infer(node.exp)
    node.pat.type = reduceType(node.pat.type)
    node.type = { name: 'function', par: [node.pat.type], ret: [node.exp.type] }
    E.pop()
    return node.type

  } else if (node.tag === 'PatternConstant') {

    return node.type

  } else if (node.tag === 'PatternIdentifier') {

    if (builtinIdentifiers.includes(node.name)) {
      node.type = reassignFreshType(lodash.cloneDeep(lookup(node.name, E)))
      return node.type
    }

    bind(node.name, { name: getFreshType() }, E)
    node.type = lookup(node.name, E)
    node.type.inferred = false
    return node.type

  } else if (node.tag === 'PatternRecord') {

    const bodyType = {}
    for (const [key, value] of Object.entries(node.aliases)) {
      bodyType[key] = infer(value)
    }
    node.type = { name: 'record', body: bodyType }
    return node.type

  } else if (node.tag === 'PatternInfix') {

    let leftType: sml.Type = infer(node.left)
    let rightType: sml.Type = infer(node.right)

    const C: ConstraintEnvironment = []
    addConstraint(rightType, { name: 'list', body: leftType }, C)
    leftType = solveTypeConstraint(leftType, C)
    rightType = solveTypeConstraint(rightType, C)

    node.type = rightType
    return node.type

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

    let argType: sml.Type = { name: 'record', body: { 1: infer(node.left), 2: infer(node.right) } }

    let funType = reassignFreshType(lodash.cloneDeep(lookup(node.operator, E))) as sml.Fun

    for (let i = 0; i < funType.par.length; i++) {
      try {
        let parType: sml.Type = funType.par[i]
        // let argType: sml.Type = { name: 'record', body: { 1: infer(node.left), 2: infer(node.right) } }

        const C: ConstraintEnvironment = []
        addConstraint(parType, argType, C)

        parType = solveTypeConstraint(parType, C)
        solveTypeConstraint(argType, C) // solve the constraints but don't mutate outer value

        let retType: sml.Type = solveTypeConstraint(funType.ret[i], C)

        node.type = retType
        return node.type
      } catch (e) {
        continue
      }
    }

    throw new TypeError(
      `operator and operand do not agree\n  operator domain: ${utils.prettifyType(
        utils.prettifyPoly(funType.par[0])
      )}\n  operand        : ${utils.prettifyType(utils.prettifyPoly(argType))}`
    , node.loc)

  } else if (node.tag === 'PrefixApplicationExpression') {

    let argType: sml.Type = infer(node.operand)

    let funType: sml.Type = infer(node.operator)

    if (!isTypeFun(funType)) {
      ;(funType as sml.Fun).name = 'function'
      ;(funType as sml.Fun).par = [argType]
      ;(funType as sml.Fun).ret = [{ name: getFreshType() }]
      node.type = (funType as sml.Fun).ret[0]
      return node.type
    }

    if (funType.inferred) {
      funType = reassignFreshType(lodash.cloneDeep(funType))
    }

    let parType: sml.Type = (funType as sml.Fun).par[0]

    try {

      const C: ConstraintEnvironment = []

      addConstraint(parType, argType, C)

      parType = solveTypeConstraint(parType, C)
      solveTypeConstraint(argType, C)

      let retType = solveTypeConstraint((funType as sml.Fun).ret[0], C)

      node.type = retType
      return node.type

    } catch (e) {

      throw new TypeError(
        `operator and operand do not agree\n  operator domain: ${utils.prettifyType(
          utils.prettifyPoly(parType)
        )}\n  operand        : ${utils.prettifyType(utils.prettifyPoly(argType))}`
      , node.loc)

    }

  } else if (node.tag === 'Record') {

    const bodyType = {}
    for (const [key, value] of Object.entries(node.items)) {
      bodyType[key] = infer(value)
    }
    node.type = { name: 'record', body: bodyType }
    return node.type

  } else if (node.tag === 'RecordSelector') {
    
    if (!node.record) {
      throw new TypeError('no record to be selected', node.loc)
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

    if (builtinIdentifiers.includes(node.name)) {
      node.type = reassignFreshType(lodash.cloneDeep(lookup(node.name, E)))
      return node.type
    }

    node.type = lookup(node.name, E)
    return node.type

  }

  throw new TypeError(`not supported yet: ${node.tag}`, node.loc)
}

export function typechecker(program: sml.Program, context: Context): sml.Program {
  program.type = infer(program.body)

  console.log('Type checking done')
  console.log('BBB')
  console.log(JSON.stringify(program.body, null, 2))
  console.log('EEE')
  console.log(JSON.stringify(E, null, 2))
  console.log('RRR')
  console.log(JSON.stringify(R, null, 2))

  return program
}
