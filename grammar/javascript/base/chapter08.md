# Map 对象

一个 Map 对象就是一个简单的键值对映射集合，可以按照数据插入时的顺序遍历所有的元素。

你可以使用 for...of 循环来得到所有的[key, value]。

```js
var sayings = new Map()
sayings.set('dog', 'woof')
sayings.set('cat', 'meow')
sayings.set('elephant', 'toot')
sayings.size // 3
sayings.get('fox') // undefined
sayings.has('bird') // false
sayings.delete('dog')
sayings.has('dog') // false

for (var [key, value] of sayings) {
  console.log(key + ' goes ' + value)
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear()
sayings.size // 0
```

## Object 和 Map 的比较

一般地，objects 会被用于将字符串类型映射到数值。Object 允许设置键值对、根据键获取值、删除键、检测某个键是否存在。而 Map 具有更多的优势。

- Object 的键均为 Strings 类型，在 Map 里键可以是任意类型。
- 必须手动计算 Object 的尺寸，但是可以很容易地获取使用 Map 的尺寸。
- Map 的遍历遵循元素的插入顺序。
- Object 有原型，所以映射中有一些缺省的键。（可以用 map = Object.create(null) 回避）。

这三条提示可以帮你决定用 Map 还是 Object：

- 如果键在运行时才能知道，或者所有的键类型相同，所有的值类型相同，那就使用 Map。
- 如果需要将原始值存储为键，则使用 Map，因为 Object 将每个键视为字符串，不管它是一个数字值、布尔值还是任何其他原始值。
- 如果需要对个别元素进行操作，使用 Object。

## WeakMap 对象

WeakMap 对象也是键值对的集合。它的键必须是对象类型，值可以是任意类型。它的键被弱保持，也就是说，当其键所指对象没有其他地方引用的时候，它会被 GC 回收掉。WeakMap 提供的接口与 Map 相同。

与 Map 对象不同的是，WeakMap 的键是不可枚举的。不提供列出其键的方法。列表是否存在取决于垃圾回收器的状态，是不可预知的。

WeakMap 对象的一个用例是存储一个对象的私有数据或隐藏实施细节。Nick Fitzgerald 的博文"Hiding Implementation Details with ECMAScript 6 WeakMaps"提供了一个例子。对象内部的私有数据和方法被存储在 WeakMap 类型的 privates 变量中。所有暴露出的原型和情况都是公开的，而其他内容都是外界不可访问的，因为模块并未导出 privates 对象。

```js
const privates = new WeakMap()

function Public() {
  const me = {
    // Private data goes here
  }
  privates.set(this, me)
}

Public.prototype.method = function () {
  const me = privates.get(this)
  // Do stuff with private data in `me`...
}

module.exports = Public
```

## 集合

## Set 对象

Set 对象是一组值的集合，这些值是不重复的，可以按照添加顺序来遍历。

```js
var mySet = new Set()
mySet.add(1)
mySet.add('some text')
mySet.add('foo')

mySet.has(1) // true
mySet.delete('foo')
mySet.size // 2

for (let item of mySet) console.log(item)
// 1
// "some text"
```

## 数组和集合的转换

可以使用`Array.from`或展开操作符来完成集合到数组的转换。同样，`Set`的构造器接受`数组`作为参数，可以完成从`Array`到`Set`的转换。需要重申的是，`Set`对象中的值不重复，所以数组转换为集合时，所有重复值将会被删除。

```js
Array.from(mySet)
;[...mySet2]

mySet2 = new Set([1, 2, 3, 4])
```

## Array 和 Set 的对比

一般情况下，在 JavaScript 中使用数组来存储一组元素，而新的集合对象有这些优势：

- 数组中用于判断元素是否存在的 indexOf 函数效率低下。
- Set 对象允许根据值删除元素，而数组中必须使用基于下标的 splice 方法。
- 数组的 indexOf 方法无法找到 NaN 值。
- Set 对象存储不重复的值，所以不需要手动处理包含重复值的情况。

## WeakSet 对象

WeakSet 对象是一组对象的集合。WeakSet 中的对象不重复且不可枚举。

与 Set 对象的主要区别有：

- WeakSets 中的值必须是对象类型，不可以是别的类型
- WeakSet 的“weak”指的是，对集合中的对象，如果不存在其他引用，那么该对象将可被垃圾回收。于是不存在一个当前可用对象组成的列表，所以 WeakSets 不可枚举
- WeakSet 的用例很有限，比如使用 DOM 元素作为键来追踪它们而不必担心内存泄漏。

## Map 的键和 Set 的值的等值判断

Map 的键和 Set 的值的等值判断都基于 same-value-zero algorithm：

- 判断使用与===相似的规则。
- -0 和+0 相等。
- NaN 与自身相等（与===有所不同）。

## 使用对象

## 对象和属性

一个 javascript 对象有很多属性。一个对象的属性可以被解释成一个附加到对象上的变量。对象的属性和普通的 javascript 变量基本没什么区别，仅仅是属性属于某个对象。

> objectName.propertyName

和其他 javascript 变量一样，对象的名字(可以是普通的变量)和属性的名字都是大小写敏感的。你可以在定义一个属性的时候就给它赋值。例如，我们创建一个 myCar 的对象然后给他三个属性，make，model，year。具体如下所示：

```js
var myCar = new Object()
myCar.make = 'Ford'
myCar.model = 'Mustang'
myCar.year = 1969
```

对象中未赋值的属性的值为 undefined（而不是 null）

> myCar.noProperty; // undefined

JavaScript 对象的属性也可以通过方括号访问或者设置（更多信息查看 property accessors）. 对象有时也被叫作关联数组, 因为每个属性都有一个用于访问它的字符串值。例如，你可以按如下方式访问 myCar 对象的属性：

```js
myCar['make'] = 'Ford'
myCar['model'] = 'Mustang'
myCar['year'] = 1969
```

可以被转换为字符串的任何类型，包括空字符串。然而，一个属性的名称如果不是一个有效的 JavaScript 标识符（例如，一个由空格或连字符，或者以数字开头的属性名），就只能通过方括号标记访问。

```js
/ 同时创建四个变量，用逗号分隔
var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";

console.log(myObj);
```

请注意，方括号中的所有键都将转换为字符串类型，因为 JavaScript 中的对象只能使用 String 类型作为键类型。 例如，在上面的代码中，当将键 obj 添加到 myObj 时，JavaScript 将调用 obj.toString()方法，并将此结果字符串用作新键。

你也可以通过存储在变量中的字符串来访问属性

```js
var propertyName = 'make'
myCar[propertyName] = 'Ford'

propertyName = 'model'
myCar[propertyName] = 'Mustang'
```

你可以在 for...in 语句中使用方括号标记以枚举一个对象的所有属性。为了展示它如何工作，下面的函数当你将对象及其名称作为参数传入时，显示对象的属性：

```js
function showProps(obj, objName) {
  var result = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
```

因而，对于函数调用 showProps(myCar, "myCar") 将返回以下值：

```js
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969
```

## 枚举一个对象的所有属性

从 ECMAScript 5 开始，有三种原生的方法用于列出或枚举对象的属性:

- `for...in` 循环
  该方法依次访问一个对象及其原型链中所有可枚举的属性。

- Object.keys(o)
  该方法返回一个对象 o 自身包含（不包括原型中）的所有属性的名称的数组。

- Object.getOwnPropertyNames(o)
  该方法返回一个数组，它包含了对象 o 所有拥有的属性（无论是否可枚举）的名称。

在 ECMAScript 5 之前，没有原生的方法枚举一个对象的所有属性。然而，可以通过以下函数完成：

```js
function listAllProperties(o) {
  var objectToInspect
  var result = []

  for (objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect))
  }

  return result
}
```

## 创建新对象

new 操作符初始化对象

## 使用构造函数

作为另一种方式，你可以通过两步来创建对象：

- 通过创建一个构造函数来定义对象的类型。首字母大写是非常普遍而且很恰当的惯用法。
- 通过 new 创建对象实例。

```js
function Car(make, model, year) {
  this.make = make
  this.model = model
  this.year = year
}
```

注意通过使用 this 将传入函数的值赋给对象的属性。
现在你可以象这样创建一个 mycar 对象：

> var mycar = new Car("Eagle", "Talon TSi", 1993);

该创建了 mycar 并且将指定的值赋给它的属性。因而 mycar.make 的值是字符串 "Eagle"， mycar.year 的值是整数 1993，依此类推。

> var kenscar = new Car("Nissan", "300ZX", 1992);

> var vpgscar = new Car("Mazda", "Miata", 1990);

一个对象的属性值可以是另一个对象。例如，假设你按如下方式定义了 person 对象:

```js
function Person(name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex
}
```

然后按如下方式创建了两个 person 实例:

```js
var rand = new Person('Rand McKinnon', 33, 'M')
var ken = new Person('Ken Jones', 39, 'M')
```

那么，你可以重写 car 的定义以包含一个拥有它的 owner 属性，如：

```js
function Car(make, model, year, owner) {
  this.make = make
  this.model = model
  this.year = year
  this.owner = owner
}
```

你可以按如下方式创建新对象：

```js
var car1 = new Car('Eagle', 'Talon TSi', 1993, rand)
var car2 = new Car('Nissan', '300ZX', 1992, ken)
```

## 使用 Object.create 方法

对象也可以用 Object.create() 方法创建。该方法非常有用，因为它允许你为创建的对象选择其原型对象，而不用定义一个构造函数。

```js
// Animal properties and method encapsulation
var Animal = {
  type: 'Invertebrates', // Default value of properties
  displayType: function () {
    // Method which will display type of Animal
    console.log(this.type)
  }
}

// Create new animal type called animal1
var animal1 = Object.create(Animal)
animal1.displayType() // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal)
fish.type = 'Fishes'
fish.displayType() // Output:Fishes
```

## 继承

所有的 JavaScript 对象继承于至少一个对象。被继承的对象被称作原型，并且继承的属性可通过构造函数的 prototype 对象找到。查看更多详细 Inheritance and the prototype chain

## 为对象类型定义属性

```js
Car.prototype.color = null
car1.color = 'black'
```

## 定义方法

一个方法 是关联到某个对象的函数，或者简单地说，一个方法是一个值为某个函数的对象属性。定义方法就像定义普通的函数，除了它们必须被赋给对象的某个属性。查看 method definitions 了解更多详情例如：

```js
objectName.methodname = function_name;

var myObj = {
  myMethod: function(params) {
    // ...do something
  }

  // 或者 这样写也可以

  myOtherMethod(params) {
    // ...do something else
  }
};
```

你可以在对象的上下文中象这样调用方法：

```js
object.methodname(params)
```

你可以在对象的构造函数中包含方法定义来为某个对象类型定义方法。例如，你可以为之前定义的 car 对象定义一个函数格式化并显示其属性：

```js
function displayCar() {
  var result = `A Beautiful ${this.year} ${this.make} ${this.model}`
  pretty_print(result)
}
```

## 通过 this 引用对象

JavaScript 有一个特殊的关键字 this，它可以在方法中使用以指代当前对象。例如，假设你有一个名为 validate 的函数，它根据给出的最大与最小值检查某个对象的 value 属性：

```js
function validate(obj, lowval, hival) {
  if (obj.value < lowval || obj.value > hival) {
    alert('Invalid Value!')
  }
}
```

然后，你可以在每个元素的 onchange 事件处理器中调用 validate，并通过 this 传入相应元素，代码如下：

```js
<input type="text" name="age" size="3"
  onChange="validate(this, 18, 99)">
```

## 定义 getters 与 setters

一个 getter 是一个获取某个特定属性的值的方法。一个 setter 是一个设定某个属性的值的方法。你可以为预定义的或用户定义的对象定义 getter 和 setter 以支持新增的属性。定义 getter 和 setter 的语法采用对象字面量语法。

下面例子描述了 getters 和 setters 是如何为用户定义的对象 o 工作的。

```js
var o = {
  a: 7,
  get b() {
    return this.a + 1
  },
  set c(x) {
    this.a = x / 2
  }
}

console.log(o.a) // 7
console.log(o.b) // 8
o.c = 50
console.log(o.a) // 25
```

o 对象的属性如下

- o.a — 数字
- o.b — 返回 o.a + 1 的 getter
- o.c — 由 o.c 的值所设置 o.a 值的 setter

## Object.defineProperty

定义属性 year 的 getter 和 setter：

```js
var d = Date.prototype
Object.defineProperty(d, 'year', {
  get: function () {
    return this.getFullYear()
  },
  set: function (y) {
    this.setFullYear(y)
  }
})
```

通过一个 Date 对象使用 getter 和 setter:

```js
var now = new Date()
console.log(now.year) // 2000
now.year = 2001 // 987617605170
console.log(now)
// Wed Apr 18 11:13:25 GMT-0700 (Pacific Daylight Time) 2001
```

## 删除属性

你可以用 delete 操作符删除一个不是继承而来的属性。下面的例子说明如何删除一个属性：

```js
//Creates a new object, myobj, with two properties, a and b.
var myobj = new Object()
myobj.a = 5
myobj.b = 12

//Removes the a property, leaving myobj with only the b property.
delete myobj.a
```

如果一个全局变量不是用 var 关键字声明的话，你也可以用 delete 删除它：

```js
g = 17
delete g
```

## 比较对象

在 JavaScript 中 objects 是一种引用类型。两个独立声明的对象永远也不会相等，即使他们有相同的属性，只有在比较一个对象和这个对象的引用时，才会返回 true.

```js
// 两个变量, 两个具有同样的属性、但不相同的对象
var fruit = { name: 'apple' }
var fruitbear = { name: 'apple' }

fruit == fruitbear // return false
fruit === fruitbear // return false
```

```js
// 两个变量, 同一个对象
var fruit = { name: 'apple' }
var fruitbear = fruit // 将fruit的对象引用(reference)赋值给 fruitbear
// 也称为将fruitbear“指向”fruit对象
// fruit与fruitbear都指向同样的对象
fruit == fruitbear // return true
fruit === fruitbear // return true
```
