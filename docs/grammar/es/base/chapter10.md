# 对象

对象对于 Javascript 是非常重要的。在 ES6 中对象有了很多新特性。

- 对象赋值

ES6 允许把声明的变量直接赋值给对象，我们看下面的例子。

```js
let name = 'dmz'
let skill = 'web'
var obj = { name, skill }
console.log(obj) //Object {name: "dmz", skill: "web"}
```

## 对象 Key 值构建

有时候我们会在后台取出 key 值，而不是我们前台定义好的，这时候我们如何构建我们的 key 值那。比如我们在后台取了一个 key 值，然后可以用\[ \] 的形式，进行对象的构建。

```js
let key = 'skill'
var obj = {
  [key]: 'web'
}
console.log(obj.skill)
```

## 自定义对象方法

对象方法就是把兑现中的属性，用匿名函数的形式编程方法。这个在以前就有应用，我们这里只是简单的复习一下。

```js
var obj = {
  add: function (a, b) {
    return a + b
  }
}
console.log(obj.add(1, 2)) //3
```

## Object.is( ) 对象比较

对象的比较方法,以前进行对象值的比较，经常使用===来判断，比如下面的代码：

```js
var obj1 = { name: 'dmz' }
var obj2 = { name: 'dmz' }
console.log(obj1.name === obj2.name) //true
```

那 ES6 为我们提供了 is 方法进行对比。

```js
var obj1 = { name: 'dmz' }
var obj2 = { name: 'dmz' }
console.log(obj1.name === obj2.name) //true
console.log(Object.is(obj1.name, obj2.name)) //true
```

区分=== 和 is 方法的区别是什么，看下面的代码输出结果

```js
console.log(+0 === -0) //true
console.log(NaN === NaN) //false
console.log(Object.is(+0, -0)) //false
console.log(Object.is(NaN, NaN)) //true
```

这太诡异了，我要怎么记忆，那代码仔在这里告诉你一个小妙招，===为同值相等，is()为严格相等。

## Object.assign( )合并对象

操作数组时我们经常使用数组合并，那对象也有合并方法，那就是 assgin( )。看一下啊具体的用法。

```js
var a = { a: 'dmz' }
var b = { b: '代码仔' }
var c = { c: 'web' }
let d = Object.assign(a, b, c)
console.log(d)
```

记得学完了练习一下啊，因为基础知识的点是非常杂的，你不练习很快就忘记了。
