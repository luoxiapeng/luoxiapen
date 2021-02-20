# 参数

## 默认参数

定默认参数的一般策略是在函数的主体中测试参数值是否为 undefined，如果是则赋予这个参数一个默认值。如果在下面的例子中，调用函数时没有实参传递给 b，那么它的值就是 undefined，于是计算 a\*b 得到、函数返回的是 NaN。但是，在下面的例子中，这个已经被第二行获取处理：

```js
function multiply(a, b) {
  b = typeof b !== 'undefined' ? b : 1

  return a * b
}

multiply(5) // 5
```

```js
function multiply(a, b = 1) {
  return a * b
}

multiply(5) // 5
```

## 剩余参数

剩余参数语法允许将不确定数量的参数表示为数组。在下面的例子中，使用剩余参数收集从第二个到最后参数。然后，我们将这个数组的每一个数与第一个参数相乘。这个例子是使用了一个箭头函数，这将在下一节介绍。

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(x => multiplier * x)
}

var arr = multiply(2, 1, 2, 3)
console.log(arr) // [2, 4, 6]
```
