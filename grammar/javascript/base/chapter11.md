# 代理

在 ECMAScript 6 中引入的 Proxy 对象可以拦截某些操作并实现自定义行为。例如获取一个对象上的属性：

```js
let handler = {
  get: function (target, name) {
    return name in target ? target[name] : 42
  }
}

let p = new Proxy({}, handler)
p.a = 1

console.log(p.a, p.b) // 1, 42
```

Proxy 对象定义了一个目标（这里是一个空对象）和一个实现了 get 陷阱的 handle 对象。这里，代理的对象在获取未定义的属性时不会返回 undefined，而是返回 42
