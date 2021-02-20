# setup

`setup()` 函数是 vue3 中，专门为组件提供的新属性。它为我们使用 vue3 的 Composition API 新特性提供了统一的入口。

## 执行时机

setup 函数会在 beforeCreate 之后、created 之前执行

## 接收 props 数据

- 在 props 中定义当前组件允许外界传递过来的参数名称：

```js
props: {
  p1: String
}
```

- 通过 setup 函数的第一个形参，接收 props 数据：

```js
setup(props) {
    console.log(props.p1)
}
```

## context

setup 函数的第二个形参是一个上下文对象，这个上下文对象中包含了一些有用的属性，这些属性在 vue 2.x 中需要通过 this 才能访问到，在 vue 3.x 中，它们的访问方式如下：

```js
const MyComponent = {
  setup(props, context) {
    context.attrs
    context.slots
    context.parent
    context.root
    context.emit
    context.refs
  }
}
```

> 注意：在 setup() 函数中无法访问到 this
