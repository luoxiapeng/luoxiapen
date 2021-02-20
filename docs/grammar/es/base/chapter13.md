# Proxy 进行预处理

如果你学过我的 Vue 的课程，一定会知道钩子函数，那如果你刚接触我的博客，并没有学习 Vue，那我这里给你简单解释一下什么是钩子函数。当我们在操作一个对象或者方法时会有几种动作，比如：在运行函数前初始化一些数据，在改变对象值后做一些善后处理。这些都算钩子函数，Proxy 的存在就可以让我们给函数加上这样的钩子函数，你也可以理解为在执行方法前预处理一些代码。你可以简单的理解为他是函数或者对象的生命周期。

Proxy 的应用可以使函数更加强大，业务逻辑更加清楚，而且在编写自己的框架或者通用组件时非常好用。Proxy 涉及的内容非常多，那这里我就带你入门并且介绍给你后续的学习方法。

在学习新知识之前，先来回顾一下定义对象的方法。

```js
var obj = {
  add: function (val) {
    return val + 10
  },
  name: 'I am dmz'
}
console.log(obj.add(100))
console.log(obj.name)
```

声明了一个 obj 对象，增加了一个对象方法 add 和一个对象属性 name，然后在控制台进行了打印。

## 声明 Proxy

我们用 new 的方法对 Proxy 进行声明。可以看一下声明 Proxy 的基本形式。

```js
new Proxy（{},{}）;
```

需要注意的是这里是两个花括号，第一个花括号就相当于我们方法的主体，后边的花括号就是 Proxy 代理处理区域，相当于我们写钩子函数的地方。

现在把上边的 obj 对象改成我们的 Proxy 形式。

```js
var pro = new Proxy(
  {
    add: function (val) {
      return val + 10
    },
    name: 'I am dmz'
  },
  {
    get: function (target, key, property) {
      console.log('come in Get')
      return target[key]
    }
  }
)

console.log(pro.name)
```

可以在控制台看到结果，先输出了 come in Get。相当于在方法调用前的钩子函数。

## get 属性

get 属性是在你得到某对象属性值时预处理的方法，他接受三个参数

- target：得到的目标值
- key：目标的 key 值，相当于对象的属性
- property：这个不太常用，用法还在研究中，还请大神指教。

## \*set 属性

set 属性是值你要改变 Proxy 属性值时，进行的预先处理。它接收四个参数。

- target:目标值。
- key：目标的 Key 值。
- value：要改变的值。
- receiver：改变前的原始值。

```js
var pro = new Proxy(
  {
    add: function (val) {
      return val + 10
    },
    name: 'I am dmz'
  },
  {
    get: function (target, key) {
      console.log('come in Get')
      return target[key]
    },
    set: function (target, key, value, receiver) {
      console.log(`    setting ${key} = ${value}`)
      return (target[key] = value)
    }
  }
)

console.log(pro.name)
pro.name = '代码仔'
console.log(pro.name)
```

## apply 的使用

apply 的作用是调用内部的方法，它使用在方法体是一个匿名函数时。看下边的代码。

```js
get = function () {
  return 'I am dmz'
}
var handler = {
  apply(target, ctx, args) {
    console.log('do apply')
    return Reflect.apply(...arguments)
  }
}

var pro = new Proxy(target, handler)

console.log(pro())
```

其实 proxy 的知识是非常多的，这里我建议看阮一峰大神的《ES6》。我这里只能算是入门课程，俗话说得好：“师傅领进门，修行靠个人”，那我们下节课见了。
