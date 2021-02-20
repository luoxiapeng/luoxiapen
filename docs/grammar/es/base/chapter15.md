# class 类

我们在 ES5 中经常使用方法或者对象去模拟类的使用，虽然可以实现功能，但是代码并不优雅，ES6 为我们提供了类的使用。需要注意的是我们在写类的时候和 ES5 中的对象和构造函数要区分开来，不要学混了。

## 类的声明

先声明一个最简单的 coder 类，类里只有一个 name 方法，方法中打印出传递的参数。

```js
class coder {
  name(val) {
    console.log(val)
  }
}
```

## 类的使用

我们已经声明了一个类，并在类里声明了 name 方法，现在要实例化类，并使用类中的方法。

```js
class Coder {
  name(val) {
    console.log(val)
  }
}

let dmz = new Coder()
dmz.name('dmz')
```

类的多方法声明

```js
class Coder {
  name(val) {
    console.log(val)
    return val
  }
  skill(val) {
    console.log(this.name('dmz') + ':' + 'Skill:' + val)
  }
}

let dmz = new Coder()
dmz.name('dmz')
dmz.skill('web')
```

这里需要注意的是两个方法中间不要写逗号了，还有这里的 this 指类本身，还有要注意 return 的用法。

## 类的传参

在类的参数传递中我们用 constructor( )进行传参。传递参数后可以直接使用 this.xxx 进行调用。

```js
class Coder {
  name(val) {
    console.log(val)
    return val
  }
  skill(val) {
    console.log(this.name('dmz') + ':' + 'Skill:' + val)
  }

  constructor(a, b) {
    this.a = a
    this.b = b
  }

  add() {
    return this.a + this.b
  }
}

let dmz = new Coder(1, 2)
console.log(dmz.add())
```

我们用 constructor 来约定了传递参数，然后用作了一个 add 方法，把参数相加。这和以前我们的传递方法有些不一样，所以需要小伙伴们多注意下。

## class 的继承

如果你学过 java，一定知道类的一大特点就是继承。ES6 中也就继承，在这里我们简单的看看继承的用法。

```js
class htmler extends Coder {}

let pang = new htmler()
pang.name('代码仔')
```

声明一个 htmler 的新类并继承 Coder 类，htmler 新类里边为空，这时候我们实例化新类，并调用里边的 name 方法。结果也是可以调用到的。

## 模块化操作

在 ES5 中我们要进行模块华操作需要引入第三方类库，随着前后端分离，前端的业务日渐复杂，ES6 为我们增加了模块话操作。模块化操作主要包括两个方面。

- export :负责进行模块化，也是模块的输出。
- import : 负责把模块引，也是模块的引入操作。

## export 的用法

export 可以让我们把变量，函数，对象进行模块话，提供外部调用接口，让外部进行引用。先来看个最简单的例子，把一个变量模块化。我们新建一个 temp.js 文件，然后在文件中输出一个模块变量。

```js
export var a = 'dmz'
```

然后可以在 index.js 中以 import 的形式引入。

```js
import { a } from './temp.js'
console.log(a)
```

这就是一个最简单的模块的输出和引入。

## 多变量的输出

这里声明了 3 个变量，需要把这 3 个变量都进行模块化输出，这时候我们给他们包装成对象就可以了。

```js
var a = 'dmz'
var b = '代码仔'
var c = 'web'

export { a, b, c }
```

函数的模块化输出

```js
export function add(a, b) {
  return a + b
}
```

as 的用法 有些时候我们并不想暴露模块里边的变量名称，而给模块起一个更语义话的名称，这时候我们就可以使用 as 来操作。

```js
var a = 'dmz'
var b = '代码仔'
var c = 'web'

export { x as a, y as b, z as c }
```

export default 的使用 加上 default 相当是一个默认的入口。在一个文件里 export default 只能有一个。我们来对比一下 export 和 export default 的区别

1.export

```js
export var a = 'dmz'

export function add(a, b) {
  return a + b
}
```

对应的导入方式

```js
import {a,add} form './temp';//也可以分开写
```

2.export defalut

```js
 export default var a='dmz';
```

对应的引入方式

```js
import str from './temp'
```

ES6 的模块化不能直接在浏览器中预览，必须要使用 Babel 进行编译之后正常看到结果。这节课讲完我们 ES6 的课程就算结束了，你可能觉的没有书上的内容多，那是因为很多东西都归到了 ES7 中。甚至连 Babel 都不能很好的转换，这些知识我就不给大家讲解了。另外如果你想继续深入学习，可以搜索阮一峰大神的 ES6 在线图书。
