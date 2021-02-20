# 函数和数组

## 对象的函数解构

我们在前后端分离时，后端经常返回来 JSON 格式的数据，前端的美好愿望是直接把这个 JSON 格式数据当作参数，传递到函数内部进行处理。ES6 就为我们提供了这样的解构赋值。

```js
let json = {
  a: 'dmz',
  b: '代码仔'
}
function fun({ a, b = 'dmz' }) {
  console.log(a, b)
}
fun(json)
```

是不是感觉方便了很多，我们再也不用一个个传递参数了。

## 数组的函数解构

函数能解构 JSON，那解构我们的数组就更不在话下了，我们看下边的代码。我们声明一个数组，然后写一个方法，最后用…进行解构赋值。

```js
let arr = ['dmz', '代码仔', '免费教程']
function fun(a, b, c) {
  console.log(a, b, c)
}

fun(...arr)
```

这种方法其实在前面的课程中已经学过了，这里我们就当复习了。

## in 的用法

in 是用来判断对象或者数组中是否存在某个值的。我们先来看一下用 in 如何判断对象里是否有某个值。

对象判断

```js
let obj = {
  a: 'dmz',
  b: '代码仔'
}
console.log('a' in obj) //true
```

## 数组判断

先来看一下 ES5 判断的弊端，以前会使用 length 属性进行判断，为 0 表示没有数组元素。但是这并不准确，或者说真实开发中有弊端。

```js
let arr = [, , , , ,]
console.log(arr.length) //5
```

上边的代码输出了 5，但是数组中其实全是空值，这就是一个坑啊。那用 ES6 的 in 就可以解决这个问题。

```js
let arr = [, , , , ,]
console.log(0 in arr) //false

let arr1 = ['dmz', '代码仔']
console.log(0 in arr1) // true
```

# 数组的遍历方法

## forEach

```js
let arr = ['dmz', '代码仔', '前端教程']
arr.forEach((val, index) => console.log(index, val))
```

forEach 循环的特点是会自动省略为空的数组元素，相当于直接给我们筛空了。当是有时候也会给我们帮倒忙。

## filter

```js
let arr = ['dmz', '代码仔', '前端教程']
arr.filter(x => console.log(x))
```

这种方法在 Vue 实战里我讲过，他其实也有循环的功能，这里我们在复习一遍。

## some

```js
let arr = ['dmz', '代码仔', '前端教程']
arr.some(x => console.log(x))
```

## map

```js
let arr = ['dmz', '代码仔', '前端教程']
console.log(arr.map(x => 'web'))
```

map 在这里起到一个替换的作用，这个我们后续课程会详细讲解。

数组转换字符串 在开发中我们经常会碰到把数组输出成字符串的形式，我们今天学两种方法，你要注意两种方法的区别。

## join()方法

```js
let arr = ['dmz', '代码仔', '前端教程']
console.log(arr.join('|'))
```

join()方法就是在数组元素中间，加了一些间隔，开发中很有用处。

- toString()方法

```js
let arr = ['dmz', '代码仔', '前端教程']
console.log(arr.toString())
```

转换时只是是用逗号隔开了。
