import test from 'ava'
import curry from '@earthtone/tiny-curry'
import { map } from './_fixtures'
import { compose } from '../compose'

test('is a function', assert => {
  assert.deepEqual(typeof compose, 'function')
  assert.deepEqual(compose.length, 0)
})

test('performs right-to-left function composition', assert => {
  const multiply = curry((a, b) => a * b)
  //  f :: (String, Number?) -> ([Number] -> [Number])
  const f = compose(map, multiply, parseInt)

  assert.deepEqual(f('10')([1, 2, 3]), [10, 20, 30])
  assert.deepEqual(f('10', 2)([1, 2, 3]), [2, 4, 6])
})

test('can be applied to one argument', assert => {
  const fn = (a, b, c) => [a, b, c]
  const g = compose(fn)
  assert.deepEqual(g(1, 2, 3), [1, 2, 3])
})
