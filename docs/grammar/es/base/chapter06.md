# 数字操作

## 二进制和八进制

二进制和八进制数字的声明并不是 ES6 的特性，我们只是做一个常识性的回顾，因为很多新人小伙伴会把他们当成字符串或者不知道是什么，所以这算是赠送的知识点。

## 二进制声明

二进制的英文单词是 Binary,二进制的开始是 0（零），然后第二个位置是 b（注意这里大小写都可以实现），然后跟上二进制的值就可以了。

```js
let binary = 0b010101
console.log(binary)
```

这时候浏览器的控制台显示出了 21。

## 八进制声明

八进制的英文单词是 Octal，也是以 0（零）开始的，然后第二个位置是 O（欧），然后跟上八进制的值就可以了。

```js
let b = 0o666
console.log(b)
```

这时候浏览器的控制台显示出了 438。

## 数字判断和转

数字验证 Number.isFinite( xx )

可以使用 Number.isFinite( )来进行数字验证，只要是数字，不论是浮点型还是整形都会返回 true，其他时候会返回 false。

```js
let a = 11 / 4
console.log(Number.isFinite(a)) //true
console.log(Number.isFinite('dmz')) //false
console.log(Number.isFinite(NaN)) //false
console.log(Number.isFinite(undefined)) //false
```

## NaN 验证

NaN 是特殊的非数字，可以使用 Number.isNaN()来进行验证。下边的代码控制台返回了 true。

```js
console.log(Number.isNaN(NaN))
```

## 判断是否为整数 Number.isInteger(xx)

```js
let a = 123.1
console.log(Number.isInteger(a)) //false
```

## 整数转换 Number.parseInt(xxx)和浮点型转换 Number.parseFloat(xxx)

```js
let a = '9.18'
console.log(Number.parseInt(a))
console.log(Number.parseFloat(a))
```

## 整数取值范围操作

整数的操作是有一个取值范围的，它的取值范围就是 2 的 53 次方。我们先用程序来看一下这个数字是什么.

```js
let a = Math.pow(2, 53) - 1
console.log(a) //9007199254740991
```

在我们计算时会经常超出这个值，所以我们要进行判断，ES6 提供了一个常数，叫做最大安全整数，以后就不需要我们计算了。

## 最大安全整数

```js
console.log(Number.MAX_SAFE_INTEGER)
```

## 最小安全整数

```js
console.log(Number.MIN_SAFE_INTEGER)
```

## 安全整数判断 isSafeInteger( )

```js
let a = Math.pow(2, 53) - 1
console.log(Number.isSafeInteger(a)) //false
```

这节课我们学习了 ES6 数字的操作，方法很多，很零散，需要经常复习或者实战中慢慢熟悉。
