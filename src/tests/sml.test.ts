import * as fs from 'fs'
import * as path from 'path'
import { smlRunner } from '../runner/smlRunner'
import { Variant } from '../types'
import createContext from '../createContext'
import { Finished } from '../types'

const testcasePath = path.resolve(__dirname, 'tc')

async function runFile(filename: string) {
  const context = createContext(Variant.DEFAULT, undefined, undefined)
  const code = fs.readFileSync(path.resolve(testcasePath, filename), 'utf-8')
  return await smlRunner(code, context)
}

function runTest(filename: string, expected: string) {
  test(filename, async () => {
    const result = (await runFile(filename)) as Finished

    expect(result.status).toBe('finished')
    expect(result.value).toBe(expected)
  })
}

describe('function tests', () => {
  runTest('fun-1.sml', 'val it = 22 : int')
  runTest('fun-2.sml', 'val it = 21 : int')
  runTest('fun-3.sml', 'val x = 10 : int')
  runTest('fun-4.sml', 'val it = 2 : int')
  runTest('curry-1.sml', 'val it = 23 : int')
})

describe('recursive tests', () => {
  runTest('rec-1.sml', 'val it = 120 : int')
  runTest('rec-2.sml', 'val it = 3 : int')
})

describe('pattern tests', () => {
  runTest('pat-1.sml', 'val it = 3 : int')
  runTest('pat-2.sml', 'val it = 1988 : int')
})

describe('tail call test', () => {
  runTest('tail-1.sml', 'val it = 120 : int')
  runTest('tail-2.sml', 'val it = 120 : int')
  runTest('tail-3.sml', 'val it = 120 : int')
})
