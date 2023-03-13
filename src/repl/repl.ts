#!/usr/bin/env node

import { createContext } from '../index'
import { smlRunner } from '../runner/smlRunner'
import { Variant } from '../types'

function startRepl(useRepl: boolean, code: string) {
  const context = createContext(Variant.DEFAULT, undefined, undefined)

  smlRunner(code, context).then(res => {
    // TODO: implement REPL
  })
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
