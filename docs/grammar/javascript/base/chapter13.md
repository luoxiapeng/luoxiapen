# 反射

Reflect 是一个内置对象，它提供了可拦截 JavaScript 操作的方法。该方法和代理句柄类似，但 Reflect 方法并不是一个函数对象。

Reflect 有助于将默认操作从处理程序转发到目标。

以 Reflect.has() 为例，你可以将 in 运算符作为函数：

```js
Reflect.has(Object, 'assign') // true
```

## 更好的 apply 函数

在 ES5 中，我们通常使用 Function.prototype.apply() 方法调用一个具有给定 this 值和 arguments 数组（或类数组对象）的函数。

> Function.prototype.apply.call(Math.floor, undefined, [1.75]);

使用 Reflect.apply，这变得不那么冗长和容易理解：

```js
Reflect.apply(Math.floor, undefined, [1.75])
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111])
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index
// 4

Reflect.apply(''.charAt, 'ponies', [3])
// "i"
```

# 检查属性定义是否成功

检查属性定义是否成功
使用 Object.defineProperty，如果成功返回一个对象，否则抛出一个 TypeError，你将使用 try...catch 块来捕获定义属性时发生的任何错误。因为 Reflect.defineProperty 返回一个布尔值表示的成功状态，你可以在这里使用 if...else 块：

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```
