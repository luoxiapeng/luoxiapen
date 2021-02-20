# 命名冲突

当同一个闭包作用域下两个参数或者变量同名时，就会产生命名冲突。更近的作用域有更高的优先权，所以最近的优先级最高，最远的优先级最低。这就是作用域链。链的第一个元素就是最里面的作用域，最后一个元素便是最外层的作用域。

```js
function outside() {
  var x = 5
  function inside(x) {
    return x * 2
  }
  return inside
}

outside()(10) // returns 20 instead of 10
```
