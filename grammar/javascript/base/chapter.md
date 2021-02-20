# 递归函数

```js
function loop(x) {
  if (x >= 10)
    // "x >= 10" 是退出条件（等同于 "!(x < 10)"）
    return
  // 做些什么
  loop(x + 1) // 递归调用
}
loop(0)
```
