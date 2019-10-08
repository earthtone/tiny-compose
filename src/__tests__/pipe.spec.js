import test from 'ava'
import curry from '@earthtone/tiny-curry'
import { map } from './_fixtures'
import { pipe } from '../pipe'

test('is a function', assert => {
  assert.deepEqual(typeof pipe, 'function')
  assert.deepEqual(pipe.length, 0)
})

test('performs left-to-right function composition', assert => {
  const multiply = curry((a, b) => a * b)
  //  f :: (String, Number?) -> ([Number] -> [Number])
  const f = pipe(parseInt, multiply, map)

  assert.deepEqual(f('10')([1, 2, 3]), [10, 20, 30])
  assert.deepEqual(f('10', 2)([1, 2, 3]), [2, 4, 6])
})

test('can be applied to one argument', assert => {
  const fn = (a, b, c) => [a, b, c]
  const g = pipe(fn)
  assert.deepEqual(g(1, 2, 3), [1, 2, 3])
})
