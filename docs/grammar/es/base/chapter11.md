# Symbol

我们通过场景应用的方式学习 Symbol，它的意思是全局标记。我们先看看它的声明方式。

## 声明 Symbol

我们先来回顾一下我们的数据类型，在最后在看看 Symbol 如何声明，并进行一个数据类型的判断。

```js
var a = new String()
var b = new Number()
var c = new Boolean()
var d = new Array()
var e = new Object()
var f = Symbol()
console.log(typeof d)
```

## symbol 的打印

我们先声明一个 Symbol，然后我们在控制台输出一下。

```js
var g = Symbol('dmz')
console.log(g)
console.log(g.toString())
```

这时候我们仔细看控制台是有区别的，没有 toString 的是红字，toString 的是黑字。

## Symbol 在对象中的应用

看一下如何用 Symbol 构建对象的 Key，并调用和赋值。

```js
var dmz = Symbol()
var obj = {
  [dmz]: '代码仔'
}
console.log(obj[dmz])
obj[dmz] = 'web'
console.log(obj[dmz])
```

## Symbol 对象元素的保护作用

在对象中有很多值，但是循环输出时，并不希望全部输出，那我们就可以使用 Symbol 进行保护。

没有进行保护的写法：

```js
var obj = { name: 'dmz', skill: 'web', age: 18 }
for (let item in obj) {
  console.log(obj[item])
}
```

现在我不想别人知道我的年龄，这时候我就可以使用 Symbol 来进行循环保护。

```js
let obj = { name: 'dmz', skill: 'web' }
let age = Symbol()
obj[age] = 18
for (let item in obj) {
  console.log(obj[item])
}
console.log(obj)
```
