# 数组

JSON 的数组格式就是为了前端快速的把 JSON 转换成数组的一种格式，我们先来看一下 JSON 的数组格式怎么写。

```js
let json = {
  0: 'dmz',
  1: '代码仔',
  2: '大胖逼逼叨',
  length: 3
}

let arr = Array.from(json)
console.log(arr)``
```

实际开发中这种方法还是比较常用的，毕竟节省了我们代码行数，也让我们的程序更清晰。

## Array.of()方法

它负责把一堆文本或者变量转换成数组。在开发中我们经常拿到了一个类似数组的字符串，需要使用 eval 来进行转换，如果你一个老手程序员都知道 eval 的效率是很低的，它会拖慢我们的程序。这时候我们就可以使用 Array.of 方法。我们看下边的代码把一堆数字转换成数组并打印在控制台上：

```js
let arr = Array.of(3, 4, 5, 6)
console.log(arr)
```

当然它不仅可以转换数字，字符串也是可以转换的，看下边的代码：

```js
let arr = Array.of('代码仔', 'dmz', '大胖逼逼叨')
console.log(arr)
```

## find( )实例方法

所谓的实例方法就是并不是以 Array 对象开始的，而是必须有一个已经存在的数组，然后使用的方法，这就是实例方法（不理解请看下边的代码，再和上边的代码进行比对，你会有所顿悟）。这里的 find 方法是从数组中查找。在 find 方法中我们需要传入一个匿名函数，函数需要传入三个参数：

- value：表示当前查找的值。
- index：表示当前查找的数组索引。
- arr：表示当前数组。

在函数中如果找到符合条件的数组元素就进行 return，并停止查找。你可以拷贝下边的代码进行测试，就会知道 find 作用。

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(
  arr.find(function (value, index, arr) {
    return value > 5
  })
)
```

控制台输出了 6，说明找到了符合条件的值，并进行返回了，如果找不到会显示 undefined。

# ES6 中新增的数组知识

## fill( )实例方法

fill()也是一个实例方法，它的作用是把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。

```js
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.fill('dmz', 2, 5)
console.log(arr)
```

上边的代码是把数组从第二位到第五位用 dmz 进行填充。

# 数组的遍历

## for…of 循环

这种形式比 ES5 的 for 循环要简单而且高效。先来看一个最简单的 for…of 循环

```js
let arr = ['dmz', '代码仔', '大胖逼逼叨']

for (let item of arr) {
  console.log(item)
}
```

for…of 数组索引:有时候开发中是需要数组的索引的，那我们可以使用下面的代码输出数组索引。

```js
let arr = ['dmz', '代码仔', '大胖逼逼叨']
for (let index of arr.keys()) {
  console.log(index)
}
```

可以看到这时的控制台就输出了 0,1,2，也就是数组的索引。

## 同时输出数组的内容和索引

我们用 entries()这个实例方法，配合我们的 for…of 循环就可以同时输出内容和索引了。

```js
let arr = ['dmz', '代码仔', '大胖逼逼叨']
for (let [index, val] of arr.entries()) {
  console.log(index + ':' + val)
}
```

## entries( )实例方法

entries()实例方式生成的是 Iterator 形式的数组，那这种形式的好处就是可以让我们在需要时用 next()手动跳转到下一个值。我们来看下面的代码：

```js
let arr = ['dmz', '代码仔', '大胖逼逼叨']
let list = arr.entries()
console.log(list.next().value)
console.log(list.next().value)
console.log(list.next().value)
```

总结：我们通过两节课讲了 ES6 对数组的扩展，数组在我们的实际开发中是特别重要的，几乎我每天都要编写数组的操作代码，所以这节课一定要在听完之后自己敲一遍代码。

# ES6 中的箭头函数和扩展

写一个函数，进行一个加法计算。

```js
function add(a, b) {
  return a + b
}
console.log(add(1, 2))
```

我们声明了一个 add 函数，然后传入 a 和 b 两个值，返回 a+b 的值。 然后我们在控制台打印了这个函数的返回结果，这里是 3.

默认值

在 ES6 中给我们增加了默认值的操作，我们修改上边的代码，可以看到现在只需要传递一个参数也是可以正常运行的。

```js
function add(a, b = 1) {
  return a + b
}
console.log(add(1))
```

## 主动抛出错误

在使用 Vue 的框架中，可以经常看到框架主动抛出一些错误，比如 v-for 必须有:key 值。那尤大神是如何做到的那？其实很简单，ES6 中我们直接用 throw new Error( xxxx ),就可以抛出错误。

```js
function add(a, b = 1) {
  if (a == 0) {
    throw new Error('This is error')
  }
  return a + b
}

console.log(add(0))
```
