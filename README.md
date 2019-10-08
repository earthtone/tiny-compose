# Tiny Compose

A pair of tiny compose and pipe functions in JavaScript.

---

### Usage

Use the `compose` function to compose right-to-left.

```js
import { compose } from '@earthtone/tiny-compose'
import { curry } from '@earthtone/tiny-curry'

const map = curry((fn, data) => data.map(fn))
const multiply = curry((a, b) => a * b)

const multiplyListBy = compose(
  map,
  multiply,
  parseInt
)

const multiplyListByTen = multiplyListBy('10')

console.log(multiplyListByTen([1, 2, 3])) // -> [10, 20, 30]
```

Use the `pipe` function to compose left-to-right.

```js
import { pipe } from '@earthtone/tiny-compose'
import { curry } from '@earthtone/tiny-curry'

const map = curry((fn, data) => data.map(fn))
const multiply = curry((a, b) => a * b)

const multiplyListBy = pipe(
  parseInt,
  multiply,
  map
)

const multiplyListByTen = multiplyListBy('10')

console.log(multiplyListByTen([1, 2, 3])) // -> [10, 20, 30]
```

# Tiny Compose

A pair of tiny compose and pipe functions in JavaScript.

---

### Usage

Use the `compose` function to compose right-to-left.

```js
import { compose } from '@earthtone/tiny-compose'
import { curry } from '@earthtone/tiny-curry'

const map = curry((fn, data) => data.map(fn))
const multiply = curry((a, b) => a * b)

const multiplyListBy = compose(
  map,
  multiply,
  parseInt
)

const multiplyListByTen = multiplyListBy('10')

console.log(multiplyListByTen([1, 2, 3])) // -> [10, 20, 30]
```

Use the `pipe` function to compose left-to-right.

```js
import { pipe } from '@earthtone/tiny-compose'
import { curry } from '@earthtone/tiny-curry'

const map = curry((fn, data) => data.map(fn))
const multiply = curry((a, b) => a * b)

const multiplyListBy = pipe(
  parseInt,
  multiply,
  map
)

const multiplyListByTen = multiplyListBy('10')

console.log(multiplyListByTen([1, 2, 3])) // -> [10, 20, 30]
```
