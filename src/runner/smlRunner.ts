import { Result } from '..'
import { evaluate } from '../interpreter/interpreter'
import { parse } from '../parser/parser'
import * as sml from '../sml/nodes'
import { Context } from '../types'
import { resolvedErrorPromise } from './utils'

function runEvaluator(program: sml.Program, context: Context): string {
  return evaluate(program, context)
}

function runInterpreter(program: sml.Program, context: Context): Promise<Result> {
  console.log('Interpreter is running...')

  // runTypeChecker(program, context)
  const evaluation = runEvaluator(program, context)
  console.log(evaluation)

  return new Promise((resolve, _reject) =>
    resolve({ status: 'finished', context: context, value: evaluation })
  )
}

export function smlRunner(code: string | undefined, context: Context): Promise<Result> {
  if (!code) {
    return resolvedErrorPromise
  }

  const program = parse(code, context).sml as sml.Program
  if (!program) {
    return new Promise((resolve, _reject) => resolve({ status: 'error' }))
  }

  return runInterpreter(program, context)
}
