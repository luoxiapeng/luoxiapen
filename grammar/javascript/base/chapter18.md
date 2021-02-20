# 箭头函数

箭头函数表达式（也称胖箭头函数）相比函数表达式具有较短的语法并以词法的方式绑定 this。箭头函数总是匿名的。另见 hacks.mozilla.org 的博文：“深度了解 ES6：箭头函数”

```js
var a = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium']

var a2 = a.map(function (s) {
  return s.length
})

console.log(a2) // logs [ 8, 6, 7, 9 ]

var a3 = a.map(s => s.length)

console.log(a3) // logs [ 8, 6, 7, 9 ]
```
