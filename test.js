import test from 'ava'
import fn from './'

test('one pi difference in radian format should be opposite', t => {
  t.true(fn(0, Math.PI))
})

test('argument order should not be important', t => {
  t.true(fn(Math.PI, 0))
})

test('uneven multiples of pi difference in radian format should be opposite', t => {
  t.true(fn(0, 5 * Math.PI))
  t.true(fn(13 * Math.PI, 2 * Math.PI))
})

test('negative angles should also work', t => {
  t.true(fn(-2 * Math.PI, 5 * Math.PI))
  t.false(fn(-2 * Math.PI, 2 * Math.PI))
})

test('default tolerance should be <= 0.1', t => {
  t.true(fn(-2 * Math.PI, (5 * Math.PI) + 0.1))
  t.false(fn(0, Math.PI - 0.2))
  t.false(fn(0, (2 * Math.PI) - 0.101))
})

test('calculation in degree should work', t => {
  const opts = {isDegree: true}
  t.true(fn(0, 5 * 180, opts))
  t.true(fn(13 * 180, 2 * 180, opts))
  t.true(fn(-2 * 180, 5 * 180, opts))
  t.false(fn(-2 * 180, 2 * 180, opts))
  t.true(fn(-2 * 180, (5 * 180) + 0.1, opts))
  t.false(fn(-2 * 180, (5 * 180) - 0.11, opts))
})
