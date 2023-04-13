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
  runTest('fun-1-1.sml', "val f = fn : int * 'a * int -> int")
  runTest('fun-1-2.sml', "val compose = fn : ('a -> 'b) * ('b -> 'c) -> 'a -> 'c")
  runTest('fun-1-3.sml', 'val add_one_then_double = fn : int -> int')
  runTest('fun-1-4.sml', 'val it = 22 : int')
  runTest('fun-2-1.sml', 'val f = fn : int -> int')
  runTest('fun-2-2.sml', 'val z = "hehe" : string')
  runTest('fun-2-3.sml', 'val it = 21 : int')
  runTest('fun-3-1.sml', 'val x = 10 : int')
  runTest('fun-3-2.sml', 'val it = true : bool')
  runTest('fun-4-1.sml', "val f = fn : ('a * 'b -> 'c) * 'a * 'b -> 'c")
  runTest('fun-4-2.sml', 'val it = 2 : int')
  runTest('fun-5-1.sml', 'val f = fn : int * int -> int')
  runTest('fun-5-2.sml', 'val it = 3 : int')
})

describe('curry tests', () => {
  runTest('curry-1-1.sml', 'val add = fn : int -> int -> int')
  runTest('curry-1-2.sml', 'val it = 23 : int')
  runTest('curry-2-1.sml', "val twice = fn : ('a -> 'a) -> 'a -> 'a")
  runTest(
    'curry-2-2.sml',
    "val increase_repeater = fn : (('a -> 'b) -> 'b -> 'c) -> ('a -> 'b) -> 'a -> 'c"
  )
  runTest('curry-2-3.sml', "val thrice = fn : ('a -> 'a) -> 'a -> 'a")
  runTest('curry-2-4.sml', 'val add_one = fn : int -> int')
  runTest('curry-2-5.sml', 'val add_three = fn : int -> int')
  runTest('curry-2-6.sml', 'val it = 3 : int')
})

describe('recursive tests', () => {
  runTest('rec-1-1.sml', 'val fac = fn : int -> int')
  runTest('rec-1-2.sml', 'val it = 120 : int')
  runTest('rec-2-1.sml', "val get_len = fn : 'a list -> int")
  runTest('rec-2-2.sml', 'val it = 3 : int')
  runTest('rec-2-3.sml', 'val it = 3 : int')
  runTest('rec-3-1.sml', 'val fib = fn : int -> int')
  runTest('rec-3-2.sml', 'val it = 55 : int')
})

describe('pattern tests', () => {
  runTest('pat-1-1.sml', 'val x = [(1,2),(3,4),(5,6)] : (int * int) list')
  runTest('pat-1-2.sml', 'val add_first = fn : (int * int) list -> int')
  runTest('pat-1-3.sml', 'val it = 3 : int')
  runTest(
    'pat-2-1.sml',
    'val person = {name="nyan",dob=(12,12,1988)} : {name:string, dob:int * int * int}'
  )
  runTest('pat-2-2.sml', "val get_year = fn : {name:'a, dob:'b * 'c * 'd} -> 'd")
  runTest('pat-2-3.sml', 'val it = 1988 : int')
})

describe('tail call test', () => {
  runTest('tail-1-1.sml', 'val fac_iter = fn : int * int -> int')
  runTest('tail-1-2.sml', 'val it = 120 : int')
  runTest('tail-2-1.sml', 'val fac = fn : int -> int')
  runTest('tail-2-2.sml', 'val it = 120 : int')
  runTest('tail-3-1.sml', 'val fac = fn : int -> int')
  runTest('tail-3-2.sml', 'val it = 120 : int')
})

describe('list tests', () => {
  runTest('list-1-1.sml', "val mp = fn 'a list * ('a -> 'b) -> 'b list")
  runTest('list-1-2.sml', 'val it = [2,3,4] : int list')
})
