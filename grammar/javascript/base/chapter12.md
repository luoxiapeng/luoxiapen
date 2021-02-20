# 术语

在讨论代理的功能时会用到以下术语。

- handler 包含陷阱的占位符对象
- traps 提供属性访问的方法。这类似于操作系统中陷阱的概念
- target 代理虚拟化的对象。它通常用作代理的存储后端。根据目标验证关于对象不可扩展性或不可配置属性的不变量（保持不变的语义）。
- invariants 实现自定义操作时保持不变的语义称为不变量。如果你违反处理程序的不变量，则会抛出一个 TypeError。

## Handler / trap

- handler.getPrototypeOf()

```js
getPrototypeOf方法一定返回一个对象或null

如果 target 不可扩展，Object.getPrototypeOf(proxy) 必须返回和 Object.getPrototypeOf(target)一样的值。

Object.getPrototypeOf()
Reflect.getPrototypeOf()
__proto__
Object.prototype.isPrototypeOf()
instanceof


handler.getPrototypeOf() 是一个代理（Proxy）方法，当读取代理对象的原型时，该方法就会被调用。

const monster1 = {
  eyeCount: 4
};

const monsterPrototype = {
  eyeCount : 2
};

const handler = {
  getPrototypeOf(target) {
    return monsterPrototype;
  }
};

const proxy1 = new Proxy(monster1, handler);

console.log(Object.getPrototypeOf(proxy1) === monsterPrototype);
// expected output: true

console.log(Object.getPrototypeOf(proxy1).eyeCount);
// expected output: 2
```

- handler.setPrototypeOf()

```js
如果 target 不可扩展，prototype 参数必须与Object.getPrototypeOf(target)的值相同。

Object.setPrototypeOf()
Reflect.setPrototypeOf()

handler.setPrototypeOf() 方法主要用来拦截 Object.setPrototypeOf().

var p = new Proxy(target, {
  setPrototypeOf: function(target, prototype) {
  }
});

以下参数传递给 setPrototypeOf 方法

target： 被拦截目标对象.

prototype： 对象新原型或为null

返回值

- 如果成功修改了[[Prototype]], setPrototypeOf 方法返回 true,否则返回 false.


```

- handler.isExtensible()

```js
Object.isExtensible(proxy) 必须返回和Object.isExtensible(target)一样的值。

Object.isExtensible()
Reflect.isExtensible()

// New objects are extensible.
var empty = {};
Reflect.isExtensible(empty); // === true

// ...but that can be changed.
Reflect.preventExtensions(empty);
Reflect.isExtensible(empty); // === false

// Sealed objects are by definition non-extensible.
var sealed = Object.seal({});
Reflect.isExtensible(sealed); // === false

// Frozen objects are also by definition non-extensible.
var frozen = Object.freeze({});
Reflect.isExtensible(frozen); // === false


与 Object.isExtensible() 的不同点

如果该方法的第一个参数不是一个对象（原始值），那么将造成一个 TypeError 异常。对于 Object.isExtensible()，非对象的第一个参数会被强制转换为一个对象。

Reflect.isExtensible(1);
// TypeError: 1 is not an object

Object.isExtensible(1);
// false
```

- handler.preventExtensions()

```js
 如果Object.isExtensible(proxy) 值为 false，Object.preventExtensions(proxy) 只返回true。

 Object.preventExtensions()
Reflect.preventExtensions()

<!--例子-->
const monster1 = {
  canEvolve: true
};

const handler1 = {
  preventExtensions(target) {
    target.canEvolve = false;
    Object.preventExtensions(target);
    return true;
  }
};

const proxy1 = new Proxy(monster1, handler1);

console.log(monster1.canEvolve);
// expected output: true

Object.preventExtensions(proxy1);

console.log(monster1.canEvolve);
// expected output: false
```

- handler.defineProperty()

```js
Object.defineProperty()
Reflect.defineProperty()

handler.defineProperty() 用于拦截对对象的 Object.defineProperty() 操作。

var p = new Proxy(target, {
  defineProperty: function(target, property, descriptor) {
  }
});
参数:下列参数将会被传递给 defineProperty 方法。 this 绑定在 handler 对象上。

target:目标对象。
property:待检索其描述的属性名.
descriptor:待定义或修改的属性的描述符。

返回值:

defineProperty 方法必须以一个 Boolean 返回，表示定义该属性的操作成功与否

handler.defineProperty() 用于拦截对对象的 Object.defineProperty() 操作。

handler.defineProperty() 用于拦截对对象的 Object.defineProperty() 操作。

拦截

如果一个属性在目标对象中存在对应的属性，那么 Object.defineProperty(target, prop, descriptor) 将不会抛出异常。

在严格模式下， false 作为 handler.defineProperty 方法的返回值的话将会抛出 TypeError 异常

Object.defineProperty() 操作：
var p = new Proxy({}, {
  defineProperty: function(target, prop, descriptor) {
    console.log('called: ' + prop);
    return true;
  }
});

var desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, 'a', desc); // "called: a"

当调用 Object.defineProperty() 或者 Reflect.defineProperty()，传递给 defineProperty 的 descriptor   有一个限制 - 只有以下属性才有用，非标准的属性将会被无视 :

- enumerable
- configurable
- writable
- value
- get
- set

var p = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    console.log(descriptor);
    return Reflect.defineProperty(target, prop, descriptor);
  }
});

Object.defineProperty(p, 'name', {
  value: 'proxy',
  type: 'custom'
});  // { value: 'proxy' }

```

- handler.has()

```js
const handler1 = {
  has(target, key) {
    if (key[0] === '_') {
      return false
    }
    return key in target
  }
}

const monster1 = {
  _secret: 'easily scared',
  eyeCount: 4
}

const proxy1 = new Proxy(monster1, handler1)
console.log('eyeCount' in proxy1)
// expected output: true

console.log('_secret' in proxy1)
// expected output: false

console.log('_secret' in monster1)
// expected output: true
```

-handler.get() 方法用于拦截对象的读取属性操作。

```js
var p = new Proxy(target, {
  get: function(target, property, receiver) {
  }

 参数:

 target:目标对象
 property:被获取的属性名
 receiver:Proxy或者继承Proxy的对象

返回：

get方法可以返回任何值。


```

- handler.set() 方法用于拦截设置属性值的操作

```js
function Monster() {
  this.eyeCount = 4
}

const handler1 = {
  set(obj, prop, value) {
    if (prop === 'eyeCount' && value % 2 !== 0) {
      console.log('Monsters must have an even number of eyes')
    } else {
      return Reflect.set(...arguments)
    }
  }
}

const monster1 = new Monster()
const proxy1 = new Proxy(monster1, handler1)
proxy1.eyeCount = 1
// expected output: "Monsters must have an even number of eyes"

console.log(proxy1.eyeCount)
// expected output: 4
```

- handler.deleteProperty() 方法用于拦截对对象属性的 delete 操作。

```js
var p = new Proxy(target, {
  deleteProperty: function(target, property) {
  }
});

参数:

 deleteProperty 方法将会接受以下参数。 this 被绑定在 handler上。
 target:目标对象。
 property:待删除的属性名

返回值:
deleteProperty 必须返回一个 Boolean 类型的值，表示了该属性是否被成功删除。

例子：

var p = new Proxy({}, {
  deleteProperty: function(target, prop) {
    console.log('called: ' + prop);
    return true;
  }
});

delete p.a; // "called: a"

```

- handler.ownKeys() 方法用于拦截 Reflect.ownKeys().

```js
const monster1 = {
  _age: 111,
  [Symbol('secret')]: 'I am scared!',
  eyeCount: 4
}

const handler1 = {
  ownKeys (target) {
    return Reflect.ownKeys(target)
  }
}

const proxy1 = new Proxy(monster1, handler1);

for (let key of Object.keys(proxy1)) {
  console.log(key);
  // expected output: "_age"
  // expected output: "eyeCount"
}

语法：

var p = new Proxy(target, {
  ownKeys: function(target) {
  }
});

参数：
下面的参数被传递给ownKeys。this被绑定在handler上。

target：目标对象.

返回值：
ownKeys 方法必须返回一个可枚举对象.

描述：

handler.ownKeys() 方法用于拦截 Reflect.ownKeys().

拦截：

该拦截器可以拦截以下操作::

Object.getOwnPropertyNames()
Object.getOwnPropertySymbols()
Object.keys()
Reflect.ownKeys()


例子：
var p = new Proxy({}, {
  ownKeys: function(target) {
    console.log('called');
    return ['a', 'b', 'c'];
  }
});

console.log(Object.getOwnPropertyNames(p)); // "called"
                                            // [ 'a', 'b', 'c' ]

```

- handler.apply() 方法用于拦截函数的调用

```js
function sum(a, b) {
  return a + b;
}

const handler = {
  apply: function(target, thisArg, argumentsList) {
    console.log(`Calculate sum: ${argumentsList}`);
    // expected output: "Calculate sum: 1,2"

    return target(argumentsList[0], argumentsList[1]) * 10;
  }
};

const proxy1 = new Proxy(sum, handler);

console.log(sum(1, 2));
// expected output: 3
console.log(proxy1(1, 2));
// expected output: 30


语法：

var p = new Proxy(target, {
  apply: function(target, thisArg, argumentsList) {
  }
});

以下是传递给apply方法的参数，this上下文绑定在handler对象上.

target：目标对象（函数）。

thisArg：被调用时的上下文对象。

argumentsList：被调用时的参数数组。

返回值：
apply方法可以返回任何值


handler.apply 方法用于拦截函数的调用。

var p = new Proxy(function() {}, {
  apply: function(target, thisArg, argumentsList) {
    console.log('called: ' + argumentsList.join(', '));
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  }
});

console.log(p(1, 2, 3)); // "called: 1, 2, 3"

```

- handler.construct() 方法用于拦截 new 操作符. 为了使 new 操作符在生成的 Proxy 对象上生效，用于初始化代理的目标对象自身必须具有[[Construct]]内部方法（即 new target 必须是有效的）。

```js
function monster1(disposition) {
  this.disposition = disposition;
}

const handler1 = {
  construct(target, args) {
    console.log('monster1 constructor called');
    // expected output: "monster1 constructor called"

    return new target(...args);
  }
};

const proxy1 = new Proxy(monster1, handler1);

console.log(new proxy1('fierce').disposition);
// expected output: "fierce"


语法:
var p = new Proxy(target, {
  construct: function(target, argumentsList, newTarget) {
  }
});

参数:

下面的参数将会传递给construct方法，this绑定在handler上。

target:目标对象。

argumentsList: constructor的参数列表。

newTarget:最初被调用的构造函数，就上面的例子而言是p。

返回值:

construct 方法必须返回一个对象。

描述：

handler.construct() 方法用于拦截 new操作符

拦截:

该拦截器可以拦截以下操作:

new proxy(...args)
Reflect.construct()

例子：
var p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    console.log('called: ' + argumentsList.join(', '));
    return { value: argumentsList[0] * 10 };
  }
});

console.log(new p(1).value); // "called: 1"
                             // 10

```

## 撤销 Proxy

Proxy.revocable() 方法被用来创建可撤销的 Proxy 对象。这意味着 proxy 可以通过 revoke 函数来撤销，并且关闭代理。此后，代理上的任意的操作都会导致 TypeError。

```js
var revocable = Proxy.revocable(
  {},
  {
    get: function (target, name) {
      return '[[' + name + ']]'
    }
  }
)
var proxy = revocable.proxy
console.log(proxy.foo) // "[[foo]]"

revocable.revoke()

console.log(proxy.foo) // TypeError is thrown
proxy.foo = 1 // TypeError again
delete proxy.foo // still TypeError
typeof proxy // "object", typeof doesn't trigger any trap
```
