# 迭代器和生成器

从简单的 for 循环到 map() 和 filter()。迭代器和生成器将迭代的概念直接带入核心语言，并提供了一种机制来自定义 for...of 循环的行为。

- 迭代协议
- for...of
- function\* 和 Generator
- yield 和 yield\*

## 迭代器

迭代器是一个对象，它定义一个序列，并在终止时可能返回一个返回值

迭代器是通过使用 next() 方法实现 Iterator protocol 的任何一个对象，该方法返回具有两个属性的对象： value，这是序列中的 next 值；和 done ，

迭代到序列中的最后一个值，则它为 true 。如果 value 和 done 一起存在

迭代一个迭代器被称为消耗了这个迭代器，因为它通常只能执行一次。 在产生终止值之后，对 next（）的额外调用应该继续返回{done：true}。

最常见的迭代器是 Array 迭代器，它只是按顺序返回关联数组中的每个值

```js
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start
  let iterationCount = 0

  const rangeIterator = {
    next: function () {
      let result
      if (nextIndex < end) {
        result = { value: nextIndex, done: false }
        nextIndex += step
        iterationCount++
        return result
      }
      return { value: iterationCount, done: true }
    }
  }
  return rangeIterator
}
```

使用这个迭代器看起来像这样：

```js
let it = makeRangeIterator(1, 10, 2)

let result = it.next()
while (!result.done) {
  console.log(result.value) // 1 3 5 7 9
  result = it.next()
}

console.log('Iterated over sequence of size: ', result.value) // 5
```

## 生成器函数

- 生成器函数使用 function\*语法编写
- 生成器函数不执行任何代码，而是返回一种称为 Generator 的迭代器
- 生成器的下一个方法消耗值时，Generator 函数将执行，直到遇到 yield 关键字

```js
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i
  }
}
var a = makeRangeIterator(1, 10, 2)
a.next() // {value: 1, done: false}
a.next() // {value: 3, done: false}
a.next() // {value: 5, done: false}
a.next() // {value: 7, done: false}
a.next() // {value: 9, done: false}
a.next() // {value: undefined, done: true}
```

## 可迭代对象

- 比如在 for...of 中会循环哪些值
- 如 Array 或 Map 拥有默认的迭代行为，而其他类型（比如 Object）则没有。
- 一个对象必须实现 @@iterator 方法，这意味着这个对象（或其原型链中的任意一个对象）必须具有一个带 Symbol.iterator 键（key）的属性。
- 只能迭代一次的 Iterables（例如 Generators）通常从它们的@@iterator 方法中返回它本身，其中那些可以多次迭代的方法必须在每次调用@@iterator 时返回一个新的迭代器。

## 自定义的可迭代对象

```js
var myIterable = {
  *[Symbol.iterator]() {
    yield 1
    yield 2
    yield 3
  }
}

for (let value of myIterable) {
  console.log(value)
}
// 1
// 2
// 3

// 或者

;[...myIterable] // [1, 2, 3]
```

## 内置可迭代对象

String、Array、TypedArray、Map 和 Set 都是内置可迭代对象，因为它们的原型对象都拥有一个 Symbol.iterator 方法。

## 用于可迭代对象的语法

一些语句和表达式专用于可迭代对象，例如 for-of 循环，展开语法，yield\* 和 解构赋值。

```js
for (let value of ['a', 'b', 'c']) {
  console.log(value)
}
// "a"
// "b"
// "c"

;[...'abc'] // ["a", "b", "c"]

function* gen() {
  yield* ['a', 'b', 'c']
}

gen().next() // { value: "a", done: false }
;[a, b, c] = new Set(['a', 'b', 'c'])
a // "a"
```

## 高级生成器

生成器会按需计算它们的产生值，这使得它们能够有效的表示一个计算成本很高的序列，甚至是如上所示的一个无限序列。

The next() 方法也接受一个参数用于修改生成器内部状态。传递给 next() 的参数值会被 yield 接收。要注意的是，传给第一个 next() 的值会被忽略。

下面的是斐波那契数列生成器，它使用了 next(x) 来重新启动序列：

```js
function* fibonacci() {
  var fn1 = 0
  var fn2 = 1
  while (true) {
    var current = fn1
    fn1 = fn2
    fn2 = current + fn1
    var reset = yield current
    if (reset) {
      fn1 = 0
      fn2 = 1
    }
  }
}

var sequence = fibonacci()
console.log(sequence.next().value) // 0
console.log(sequence.next().value) // 1
console.log(sequence.next().value) // 1
console.log(sequence.next().value) // 2
console.log(sequence.next().value) // 3
console.log(sequence.next().value) // 5
console.log(sequence.next().value) // 8
console.log(sequence.next(true).value) // 0
console.log(sequence.next().value) // 1
console.log(sequence.next().value) // 1
console.log(sequence.next().value) // 2
```

你可以通过调用其 throw() 方法强制生成器抛出异常，并传递应该抛出的异常值。这个异常将从当前挂起的生成器的上下文中抛出，就好像当前挂起的 yield 是一个 throw value 语句。

如果在抛出的异常处理期间没有遇到 yield，则异常将通过调用 throw() 向上传播，对 next() 的后续调用将导致 done 属性为 true。

生成器具有 return(value) 方法，返回给定的值并完成生成器本身。
