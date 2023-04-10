// import * as lodash from 'lodash'
// import { Context } from '../types'
// import * as sml from './nodes'

// const typeOfInfixOperator = {
//   '+': {
//     name: 'function',
//     par: [
//       { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
//       { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } }
//     ],
//     ret: [{ name: 'int' }, { name: 'real' }]
//   },
//   '-': {
//     name: 'function',
//     par: [
//       { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
//       { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } }
//     ],
//     ret: [{ name: 'int' }, { name: 'real' }]
//   },
//   '*': {
//     name: 'function',
//     par: [
//       { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
//       { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } }
//     ],
//     ret: [{ name: 'int' }, { name: 'real' }]
//   },
//   '/': {
//     name: 'function',
//     par: [
//       { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
//       { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } }
//     ],
//     ret: [{ name: 'int' }, { name: 'real' }]
//   },
//   '<': {
//     name: 'function',
//     par: [
//       { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
//       { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } },
//       { name: 'record', body: { 1: { name: 'char' }, 2: { name: 'char' } } },
//       { name: 'record', body: { 1: { name: 'string' }, 2: { name: 'string' } } }
//     ],
//     ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
//   },
//   '>': {
//     name: 'function',
//     par: [
//       { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
//       { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } },
//       { name: 'record', body: { 1: { name: 'char' }, 2: { name: 'char' } } },
//       { name: 'record', body: { 1: { name: 'string' }, 2: { name: 'string' } } }
//     ],
//     ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
//   },
//   '=': {
//     name: 'function',
//     par: [
//       { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
//       { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } },
//       { name: 'record', body: { 1: { name: 'char' }, 2: { name: 'char' } } },
//       { name: 'record', body: { 1: { name: 'string' }, 2: { name: 'string' } } }
//     ],
//     ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
//   },
//   '<=': {
//     name: 'function',
//     par: [
//       { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
//       { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } },
//       { name: 'record', body: { 1: { name: 'char' }, 2: { name: 'char' } } },
//       { name: 'record', body: { 1: { name: 'string' }, 2: { name: 'string' } } }
//     ],
//     ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
//   },
//   '>=': {
//     name: 'function',
//     par: [
//       { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
//       { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } },
//       { name: 'record', body: { 1: { name: 'char' }, 2: { name: 'char' } } },
//       { name: 'record', body: { 1: { name: 'string' }, 2: { name: 'string' } } }
//     ],
//     ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
//   },
//   '<>': {
//     name: 'function',
//     par: [
//       { name: 'record', body: { 1: { name: 'int' }, 2: { name: 'int' } } },
//       { name: 'record', body: { 1: { name: 'real' }, 2: { name: 'real' } } },
//       { name: 'record', body: { 1: { name: 'char' }, 2: { name: 'char' } } },
//       { name: 'record', body: { 1: { name: 'string' }, 2: { name: 'string' } } }
//     ],
//     ret: [{ name: 'bool' }, { name: 'bool' }, { name: 'bool' }, { name: 'bool' }]
//   },
//   '^': {
//     name: 'function',
//     par: [{ name: 'record', body: { 1: { name: 'string' }, 2: { name: 'string' } } }],
//     ret: [{ name: 'string' }]
//   },
//   '::': {
//     name: 'function',
//     par: [
//       { name: 'record', body: { 1: { name: "'a" }, 2: { name: 'list', body: { name: "'a" } } } }
//     ],
//     ret: [{ name: 'list', body: { name: "'a" } }]
//   },
//   andalso: {
//     name: 'function',
//     par: [{ name: 'record', body: { 1: { name: 'bool' }, 2: { name: 'bool' } } }],
//     ret: [{ name: 'bool' }]
//   },
//   orelse: {
//     name: 'function',
//     par: [{ name: 'record', body: { 1: { name: 'bool' }, 2: { name: 'bool' } } }],
//     ret: [{ name: 'bool' }]
//   }
// }

// /* ************
//  * environments
//  * ************/

// // Frames are objects that map symbols (strings) to values.

// const GLOBAL_FRAME = {}

// // Populate global frame with infix operators
// for (const key in typeOfInfixOperator) {
//   GLOBAL_FRAME[key] = typeOfInfixOperator[key]
// }

// const GLOBAL_ENVIRONMENT = [GLOBAL_FRAME]

// function lookup(name: string, env: Array<Object>): sml.Type | undefined {
//   for (let i = env.length - 1; i >= 0; i--) {
//     const frame = env[i]
//     if (frame.hasOwnProperty(name)) {
//       return frame[name]
//     }
//   }
//   return undefined
// }

// function bind(name: string, value: sml.Type, env: Array<Object>) {
//   const frame = env[env.length - 1]
//   frame[name] = value
// }

// function extend(env: Array<Object>): number {
//   return env.push({})
// }

// const E: Array<Object> = GLOBAL_ENVIRONMENT

// function infer(node: sml.Node): sml.Type {
//   if (node.tag === 'ExpressionDeclaration') {
//     node.type = infer(node.value)
//     bind('it', node.type, E)
//     return node.type
//   } else if (node.tag === 'ValueDeclaration') {
//     node.type = infer(node.value)
//     bind(node.name, node.type, E)
//     return node.type
//   } else if (node.tag === 'FunctionDeclaration') {
//     console.log(JSON.stringify(node, null, 2))
//     bind(node.name, { name: 'function', par: [], ret: [] }, E)
//     extend(E)
//     node.type = infer(node.lambda)
//     E.pop()
//     bind(node.name, node.type, E)
//     console.log('FD')
//     console.log(JSON.stringify(node, null, 2))
//     console.log(E)
//     return node.type
//   } else if (node.tag === 'SequenceDeclaration') {
//     for (let i = 0; i < node.declarations.length; i++) {
//       infer(node.declarations[i])
//     }

//     node.type = node.declarations[node.declarations.length - 1].type
//     return node.type
//   } else if (node.tag === 'LambdaExpression') {
//     console.log('L')
//     for (const v of node.fv) {
//       console.log(v)
//       bind(v, infer({ tag: 'Identifier', type: { name: 'undefined' }, name: v }), E)
//     }

//     node.type = infer(node.matching)
//     return node.type
//   } else if (node.tag === 'Matching') {
//     console.log('M')
//     const mType = infer(node.rules[0])
//     for (let i = 1; i < node.rules.length; i++) {
//       const rType = infer(node.rules[i])
//       if (!isTypeMatch(mType, rType, [{}])) {
//         throw new Error('clauses do not agree with function result type')
//       }
//     }

//     node.type = mType
//     return node.type
//   } else if (node.tag === 'Matchingrule') {
//     console.log('R')
//     node.pat.type = infer(node.pat)
//     node.exp.type = infer(node.exp)
//     node.pat.type = decayPatternType(node.pat)
//     node.type = { name: 'function', par: [node.pat.type], ret: [node.exp.type] }
//     return node.type
//   } else if (node.tag === 'PatternConstant') {
//     return node.type
//   } else if (node.tag === 'PatternIdentifier') {
//     console.log('P')
//     bind(node.name, { name: 'undefined' }, E)
//     node.type = lookup(node.name, E)!
//     return node.type
//   } else if (node.tag === 'PatternRecord') {
//     console.log('R')
//     const recordType = {}
//     for (const [key, value] of Object.entries(node.aliases)) {
//       recordType[key] = infer(value)
//     }
//     node.type = { name: 'record', body: recordType }
//     return node.type
//   } else if (node.tag === 'PatternInfix') {
//     console.log('PINFIX')
//     const bodyType = infer(node.left)
//     const infixType = { name: 'list', body: bodyType }
//     bind((node.right as sml.PatternIdentifier).name, infixType, E)
//     ;(node.right as sml.PatternIdentifier).type = lookup(
//       (node.right as sml.PatternIdentifier).name,
//       E
//     )!
//     node.type = infixType
//     return node.type
//   } else if (node.tag === 'ConditionalExpression') {
//     const predType = infer(node.pred)
//     if (!isTypeBool(predType)) {
//       throw new Error('test expression in if is not of type bool')
//     }

//     const consType = infer(node.cons)
//     const altType = infer(node.alt)

//     const [matchable, _] = isTypeMatch(consType, altType, [{}])
//     if (matchable) {
//       node.type = matchable
//       return node.type
//     }

//     throw new Error('types of if branches do not agree')
//   } else if (node.tag === 'PrefixApplicationExpression') {
//     console.log(node)
//     const funType = infer(node.operator) as sml.Fun
//     const operandType = infer(node.operand)

//     console.log('JSON')
//     console.log(JSON.stringify(E, null, 2))

//     // Hacky implementation to handle recursive function
//     if (lodash.isEqual(funType, { name: 'function', par: [], ret: [] })) {
//       node.type = { name: 'undefined' }
//       return node.type
//     }

//     node.type = isWellTyped(funType, operandType)
//     return node.type
//   } else if (node.tag === 'InfixApplicationExpression') {
//     console.log('I')
//     console.log(JSON.stringify(node, null, 2))
//     console.log(E)

//     const funType = lookup(node.operator, E) as sml.Fun
//     const operandType = { name: 'record', body: { 1: infer(node.left), 2: infer(node.right) } }

//     console.log(funType)
//     console.log(operandType)

//     node.type = isWellTyped(funType, operandType)

//     console.log(node.type)

//     return node.type
//   } else if (node.tag === 'Record') {
//     const recordType = {}
//     for (const [key, value] of Object.entries(node.items)) {
//       recordType[key] = infer(value)
//     }
//     node.type = { name: 'record', body: recordType }
//     return node.type
//   } else if (node.tag === 'RecordSelector') {
//     node.type = (infer(node.record!) as sml.Rec).body[node.label]
//     return node.type
//   } else if (node.tag === 'List') {
//     if (node.items.length === 0) {
//       node.type = { name: 'list', body: { name: "'a" } }
//       return node.type
//     } else {
//       const bodyType = infer(node.items[0])
//       for (let i = 1; i < node.items.length; i++) {
//         const itemType = infer(node.items[i])
//         if (!isTypeMatch(bodyType, itemType, [{}])) {
//           throw new Error('operator and operand do not agree [type mismatch]')
//         }
//       }

//       node.type = { name: 'list', body: bodyType }
//       return node.type
//     }
//     ;``
//   } else if (node.tag === 'Identifier') {
//     const defined = lookup(node.name, E)
//     if (defined) {
//       node.type = defined
//       return node.type
//     }

//     throw new Error('undefined')
//   } else if (node.tag === 'Constant') {
//     return node.type
//   }

//   throw new Error('bruh')
//   // return node.type
// }

// export function typechecker(program: sml.Program, context: Context): sml.Program {
//   program.type = infer(program.body)
//   console.log(program)
//   return program
// }

// function isWellTyped(operatorType: sml.Fun, operandType: sml.Type): sml.Type {
//   for (let i = 0; i < operatorType.par.length; i++) {
//     const [parType, env] = isTypeMatch(operatorType.par[i], operandType, [{}])
//     if (parType) {
//       const retType = decayType(operatorType.ret[i], env)
//       return retType
//     }
//   }

//   throw new Error('operator and operand do not agree [type mismatch]')
// }

// function isTypeMatch(
//   t1: sml.Type,
//   t2: sml.Type,
//   env: Array<Object>
// ): [sml.Type | undefined, Array<Object>] {
//   t1 = decayType(t1, env)
//   t2 = decayType(t2, env)

//   if (isTypeUnd(t1) && isTypeUnd(t2)) {
//     return [undefined, env]
//   } else if (isTypeUnd(t1)) {
//     bind(t1.name, t2, env)
//     t1.name = t2.name
//     return [t1, env]
//   } else if (isTypeUnd(t2)) {
//     bind(t2.name, t1, env)
//     t2.name = t1.name
//     return [t2, env]
//   } else if (isTypePoly(t1) && isTypePoly(t2)) {
//     // probably need revision
//     if (t1.name === t2.name) {
//       return [t1, env]
//     }
//     return [undefined, env]
//   } else if (isTypePoly(t1)) {
//     if (isTypePrimitive(t2)) {
//       bind(t1.name, t2, env)
//       t1.name = t2.name
//       return [t1, env]
//     }
//     return [undefined, env]
//   } else if (isTypePoly(t2)) {
//     if (isTypePrimitive(t1)) {
//       bind(t2.name, t1, env)
//       t2.name = t2.name
//       return [t1, env]
//     }
//     return [undefined, env]
//   } else if (isTypeRec(t1) && isTypeRec(t2)) {
//     // The length of the body is different
//     if (Object.keys((t1 as sml.Rec).body).length !== Object.keys((t2 as sml.Rec).body).length) {
//       return [undefined, env]
//     }

//     // Sort the body
//     ;(t1 as sml.Rec).body = Object.keys((t1 as sml.Rec).body)
//       .sort()
//       .reduce((obj, key) => {
//         obj[key] = (t1 as sml.Rec).body[key]
//         return obj
//       }, {})

//     // Sort the body
//     ;(t2 as sml.Rec).body = Object.keys((t2 as sml.Rec).body)
//       .sort()
//       .reduce((obj, key) => {
//         obj[key] = (t2 as sml.Rec).body[key]
//         return obj
//       }, {})

//     const t1Body = Object.entries((t1 as sml.Rec).body)
//     const t2Body = Object.entries((t2 as sml.Rec).body)

//     // Check if any of the keys are different
//     for (let i = 0; i < t1Body.length; i++) {
//       if (t1Body[i][0] !== t2Body[i][0]) {
//         return [undefined, env]
//       }
//     }

//     for (let i = 0; i < t1Body.length; i++) {
//       const [matchable, _] = isTypeMatch(t1Body[i][1], t2Body[i][1], env)
//       if (!matchable) {
//         return [undefined, env]
//       }
//     }

//     return [t1, env]
//   } else if (isTypeLis(t1) && isTypeLis(t2)) {
//     const t1Body = (t1 as sml.Lis).body
//     const t2Body = (t2 as sml.Lis).body

//     const [matchable, _] = isTypeMatch(t1Body, t2Body, env)
//     if (matchable) {
//       return [t1, env]
//     }
//     return [undefined, env]
//   } else if (isTypeFun(t1) && isTypeFun(t2)) {
//     if ((t1 as sml.Fun).par.length !== (t2 as sml.Fun).par.length) {
//       return [undefined, env]
//     }

//     if ((t1 as sml.Fun).ret.length !== (t2 as sml.Fun).ret.length) {
//       return [undefined, env]
//     }

//     for (let i = 0; i < (t1 as sml.Fun).par.length; i++) {
//       const [parMatchable, _] = isTypeMatch((t1 as sml.Fun).par[i], (t1 as sml.Fun).par[i], env)
//       if (!parMatchable) {
//         return [undefined, env]
//       }

//       const [retMatchable, __] = isTypeMatch((t1 as sml.Fun).ret[i], (t1 as sml.Fun).ret[i], env)
//       if (!retMatchable) {
//         return [undefined, env]
//       }
//     }

//     return [t1, env]
//   } else if (isTypePrimitive(t1) && isTypePrimitive(t2)) {
//     return t1.name === t2.name ? [t1, env] : [undefined, env]
//   } else {
//     return [undefined, env]
//   }
// }

// function decayType(t: sml.Type, env: Array<Object>): sml.Type {
//   if (isTypeUnd(t)) {
//     const inferable = lookup(t.name, env)
//     if (inferable) {
//       t.name = inferable.name
//     }
//     return t
//   } else if (isTypePoly(t)) {
//     const inferable = lookup(t.name, env)
//     if (inferable) {
//       t.name = inferable.name
//     }
//     return t
//   } else if (isTypeRec(t)) {
//     for (let [key, value] of Object.entries((t as sml.Rec).body)) {
//       ;(t as sml.Rec).body[key] = decayType(value, env)
//     }
//     return t
//   } else if (isTypeLis(t)) {
//     ;(t as sml.Lis).body = decayType((t as sml.Lis).body, env)
//     return t
//   } else if (isTypeFun(t)) {
//     // Not sure if this implementation correct
//     for (let i = 0; i < (t as sml.Fun).par.length; i++) {
//       decayType((t as sml.Fun).par[i], env)
//       decayType((t as sml.Fun).ret[i], env)
//     }
//     return t
//   } else if (isTypePrimitive(t)) {
//     return t
//   }

//   throw new Error('decay error')
// }

// function isTypeInt(t: sml.Type) {
//   return t.name === 'int'
// }

// function isTypeReal(t: sml.Type) {
//   return t.name === 'real'
// }

// function isTypeBool(t: sml.Type) {
//   return t.name === 'bool'
// }

// function isTypeChar(t: sml.Type) {
//   return t.name === 'char'
// }

// function isTypeStr(t: sml.Type) {
//   return t.name === 'string'
// }

// function isTypeRec(t: sml.Type) {
//   return t.name === 'record'
// }

// function isTypeLis(t: sml.Type) {
//   return t.name === 'list'
// }

// function isTypeFun(t: sml.Type) {
//   return t.name === 'function'
// }

// function isTypePoly(t: sml.Type) {
//   return t.name.slice(0, 1) === "'"
// }

// function isTypePrimitive(t: sml.Type) {
//   return isTypeInt(t) || isTypeReal(t) || isTypeBool(t) || isTypeChar(t) || isTypeStr(t)
// }

// function isTypeUnd(t: sml.Type) {
//   return t.name === 'undefined'
// }

// function decayPatternType(pat: sml.Pattern): sml.Type {
//   if (pat.tag === 'PatternConstant') {
//     return pat.type
//   } else if (pat.tag === 'PatternIdentifier') {
//     const inferable = lookup(pat.name, E)
//     if (!inferable) {
//       throw new Error('type cannot be inferred')
//     }
//     pat.type = inferable
//     return pat.type
//   } else if (pat.tag === 'PatternRecord') {
//     const recordType = {}
//     for (const [key, value] of Object.entries(pat.aliases)) {
//       value.type = decayPatternType(value)
//       recordType[key] = value.type
//     }
//     pat.type = { name: 'record', body: recordType }
//     return pat.type
//   } else if (pat.tag === 'PatternInfix') {
//     pat.left.type = decayPatternType(pat.left)
//     const infixType = { name: 'list', body: pat.left.type }
//     bind((pat.right as sml.PatternIdentifier).name, infixType, E)
//     pat.right.type = lookup((pat.right as sml.PatternIdentifier).name, E)!
//     pat.type = infixType
//     return pat.type
//   }

//   throw new Error('invalid pattern')
// }
