# arguments

函数的实际参数会被保存在一个类似数组的 arguments 对象中。在函数内，你可以按如下方式找出传入的参数：

> arguments[i]

其中 i 是参数的序数编号（译注：数组索引），以 0 开始。所以第一个传来的参数会是 arguments[0]。参数的数量由 arguments.length 表示。

使用 arguments 对象，你可以处理比声明的更多的参数来调用函数。这在你事先不知道会需要将多少参数传递给函数时十分有用。你可以用 arguments.length 来获得实际传递给函数的参数的数量，然后用 arguments 对象来取得每个参数。

例如，设想有一个用来连接字符串的函数。唯一事先确定的参数是在连接后的字符串中用来分隔各个连接部分的字符（译注：比如例子里的分号“；”）。该函数定义如下：

```js
function myConcat(separator) {
  var result = '' // 把值初始化成一个字符串，这样就可以用来保存字符串了！！
  var i
  // iterate through arguments
  for (i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator
  }
  return result
}
```

注意：arguments 变量只是 ”类数组对象“，并不是一个数组。称其为类数组对象是说它有一个索引编号和 length 属性。尽管如此，它并不拥有全部的 Array 对象的操作方法。
