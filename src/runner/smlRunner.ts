import { json } from 'stream/consumers'

import { IOptions, Result } from '..'
import { CannotFindModuleError } from '../errors/localImportErrors'
import { evaluate } from '../interpreter/interpreter'
import { hoistAndMergeImports } from '../localImports/transformers/hoistAndMergeImports'
import { removeExports } from '../localImports/transformers/removeExports'
import { removeNonSourceModuleImports } from '../localImports/transformers/removeNonSourceModuleImports'
import { parse } from '../parser/parser'
import { PreemptiveScheduler } from '../schedulers'
import * as sml from '../sml/types'
import { Context, Scheduler, Variant } from '../types'
import { validateAndAnnotate } from '../validator/validator'
import { determineVariant, resolvedErrorPromise } from './utils'

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

function runInterpreter(program: sml.Program, context: Context, options: IOptions): Result {
  // runTypeChecker()
  // runEvaluator()
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
