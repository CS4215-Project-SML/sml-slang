import { evaluate } from '../interpreter/interpreter'
import { parse } from '../parser/parser'
import * as sml from '../sml/types'

interface Finished {
  status: 'finished'
}

interface Error {
  status: 'error'
}

type Result = Finished | Error

function runEvaluator(program: sml.Program) {
  return evaluate(program)
}

function runInterpreter(program: sml.Program): Result {
  console.log('Interpreter is running...')
  // runTypeChecker(program, context)
  runEvaluator(program)
  return { status: 'finished' }
}

export function smlRunner(code: string): Result {
  const program: sml.Program | undefined = parse(code)
  if (!program) {
    return { status: 'error' }
  }

  console.log(JSON.stringify(program))
  return runInterpreter(program)
}
