import { IOptions, Result } from '..'
import { evaluate } from '../interpreter/interpreter'
import { parse } from '../parser/parser'
import * as sml from '../sml/types'
import { Context, Variant } from '../types'
import { determineVariant } from './utils'

const DEFAULT_SML_OPTIONS: IOptions = {
  scheduler: 'preemptive',
  steps: 1000,
  stepLimit: 1000,
  executionMethod: 'interpreter',
  variant: Variant.DEFAULT,
  originalMaxExecTime: 1000,
  useSubst: false,
  isPrelude: false,
  throwInfiniteLoops: true
}

function runEvaluator(program: sml.Program, context: Context) {
  return evaluate(program, context)
}

function runInterpreter(program: sml.Program, context: Context, options: IOptions): Result {
  console.log('Interpreter is running...')
  // runTypeChecker(program, context)
  runEvaluator(program, context)
  return { status: 'error' }
}

export function smlRunner(code: string, context: Context, options: Partial<IOptions> = {}): Result {
  const theOptions: IOptions = { ...DEFAULT_SML_OPTIONS, ...options }
  context.variant = determineVariant(context, options)
  context.errors = []

  const program: sml.Program | undefined = parse(code, context)
  if (!program) {
    return { status: 'error' }
  }

  console.log(JSON.stringify(program))
  return runInterpreter(program, context, theOptions)
}
