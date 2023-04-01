import * as sml from './nodes'
import { Context } from '../types'

type Environment = Array<Set<string>>

function newEnvironment(): Environment {
  return [new Set()]
}

function addName(name: string, E: Environment) {
  const lastFrame = E[E.length - 1]
  lastFrame.add(name)
}

function extend(E: Environment) {
  E.push(new Set<string>())
}

function restore(E: Environment) {
  E.pop()
}

function isFreeVariable(name: string, E: Environment): boolean {
  return !E[E.length - 1].has(name)
}

function analyzeFreeVariables(node: sml.Node, E: Environment, fv: Set<string>) {
  switch (node.tag) {
    case 'SequenceDeclaration':
      for (const declaration of node.declarations) {
        const newFv = new Set<string>()
        analyzeFreeVariables(declaration, E, newFv)

        newFv.forEach(name => fv.add(name))
      }
      break
    case 'ValueDeclaration':
      addName(node.name, E)
      break
    case 'FunctionDeclaration':
      addName(node.name, E)
      analyzeFreeVariables(node.lambda, E, fv)
      break
    case 'ExpressionDeclaration':
      analyzeFreeVariables(node.value, E, fv)
      break
    case 'Identifier':
      if (isFreeVariable(node.name, E)) {
        fv.add(node.name)
      }
      break
    case 'ConditionalExpression':
      analyzeFreeVariables(node.pred, E, fv)
      analyzeFreeVariables(node.alt, E, fv)
      analyzeFreeVariables(node.cons, E, fv)
      break
    case 'PrefixApplicationExpression':
      analyzeFreeVariables(node.operand, E, fv)
      analyzeFreeVariables(node.operator, E, fv)
      break
    case 'InfixApplicationExpression':
      analyzeFreeVariables(node.left, E, fv)
      analyzeFreeVariables(node.right, E, fv)
      break
    case 'LambdaExpression':
      analyzeFreeVariables(node.matching, E, fv)
      node.fv = Array.from(fv)
      break
    case 'LetExpression':
      extend(E)
      analyzeFreeVariables(node.dec, E, fv)
      analyzeFreeVariables(node.exp, E, fv)
      restore(E)
      break
    case 'PatternIdentifier':
      addName(node.name, E)
      break
    case 'PatternRecord':
      for (const alias of Object.values(node.aliases) as Array<sml.Pattern>) {
        analyzeFreeVariables(alias, E, fv)
      }
      break
    case 'PatternInfix':
      analyzeFreeVariables(node.left, E, fv)
      analyzeFreeVariables(node.right, E, fv)
      break
    case 'Matching':
      for (const rule of node.rules) {
        analyzeFreeVariables(rule, E, fv)
      }
      break
    case 'Matchingrule':
      extend(E)
      analyzeFreeVariables(node.pat, E, fv)
      analyzeFreeVariables(node.exp, E, fv)
      restore(E)
      break
    case 'List':
      for (const element of node.items) {
        analyzeFreeVariables(element, E, fv)
      }
      break
    case 'Record':
      for (const element of Object.values(node.items)) {
        // Assumption: element is of type sml.Node
        analyzeFreeVariables(element, E, fv)
      }
      break
    case 'PatternConstant':
    // fall through
    case 'Constant':
    // fall through
    case 'RecordSelector':
      break
    default:
      throw new Error(`FV analyzer does not support tag ${node.tag}.`)
  }
}

export function analyzeProgram(program: sml.Program, context: Context) {
  analyzeFreeVariables(program.body, newEnvironment(), new Set())
  return program
}
