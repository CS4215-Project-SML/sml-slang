#!/usr/bin/env node

import { smlRunner } from '../runner/runner'

function startRepl(useRepl: boolean, code: string) {
  const res = smlRunner(code)

  if (res.status === 'finished') {
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
