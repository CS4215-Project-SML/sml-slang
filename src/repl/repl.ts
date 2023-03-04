#!/usr/bin/env node
// import { start } from 'repl' // 'repl' here refers to the module named 'repl' in index.d.ts
// import { inspect } from 'util'

import { createContext, IOptions } from '../index'
import { smlRunner } from '../runner/smlRunner'
import { Variant } from '../types'
// import { ExecutionMethod, Variant } from '../types'

function startRepl(useRepl: boolean, code: string) {
  const context = createContext(Variant.DEFAULT, undefined, undefined)
  const options: Partial<IOptions> = {
    scheduler: 'preemptive',
    executionMethod: 'interpreter',
    variant: Variant.DEFAULT
  }

  const res = smlRunner(code, context, options)

  if (res.status === 'finished') {
    console.dir(res.value, { depth: null })
    if (!useRepl) {
      return
    }
    // TODO: implement REPL
  }
}

function main() {
  const opt = require('node-getopt')
    .create([
      ['h', 'help', 'display this help'],
      ['e', 'eval', 'disable REPL, only display the output of evaluation']
    ])
    .bindHelp()
    .setHelp('Usage: sml-slang [PROGRAM_STRING] [OPTION]\n\n[[OPTIONS]]')
    .parseSystem()

  const useRepl = !opt.options.e
  const code = opt.argv[0] ?? ''

  startRepl(useRepl, code)
}

main()
