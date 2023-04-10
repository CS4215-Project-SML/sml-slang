import { Result } from '..'
import { evaluate } from '../interpreter/interpreter'
import { parse } from '../parser/parser'
import { analyzeProgram } from '../sml/fv'
import * as sml from '../sml/nodes'
import { typechecker } from '../sml/typechecker'
import { Context } from '../types'
import { resolvedErrorPromise } from './utils'
import { RuntimeError, TypeError } from '../sml/error'

function runTypechecker(program: sml.Program, context: Context): sml.Program {
  return typechecker(program, context)
}

function runFreeVariableAnalyzer(program: sml.Program, context: Context) {
  return analyzeProgram(program, context)
}

function runEvaluator(program: sml.Program, context: Context): string {
  return evaluate(program, context)
}

async function runInterpreter(program: sml.Program, context: Context): Promise<Result> {
  try {
    console.log('Free variable analyzer is running...')
    runFreeVariableAnalyzer(program, context)

    console.log('Type-checker is running...')
    runTypechecker(program, context)

    console.log('Interpreter is running...')
    const evaluation = runEvaluator(program, context)
    console.log(evaluation)

    return { status: 'finished', context: context, value: evaluation }
  } catch (e) {
    if (e instanceof RuntimeError || e instanceof TypeError) {
      context.smlErrors.push(e)
    }

    console.log(e)

    return { status: 'error' }
  }
}

export async function smlRunner(code: string | undefined, context: Context): Promise<Result> {
  if (!code) {
    return resolvedErrorPromise
  }

  try {
    const program = parse(code, context).sml as sml.Program
    return runInterpreter(program, context)
  } catch (e) {
    console.log(e)

    return { status: 'error' }
  }
}
