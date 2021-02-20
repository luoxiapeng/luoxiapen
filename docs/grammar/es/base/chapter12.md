# Set 和 WeakSet 数据结构

## Set 的声明

Set 和 Array 的区别是 Set 不允许内部有重复的值，如果有只显示一个，相当于去重。虽然 Set 很像数组，但是他不是数组。

追加 add：

在使用 Array 的时候，可以用 push 进行追加值，那 Set 稍有不同，它用更语义化的 add 进行追加。

```js
let setArr = new Set(['dmz', '代码仔', 'web', 'dmz'])
console.log(setArr) //Set {"dmz", "代码仔", "web"}

setArr.add('前端职场')
console.log(setArr)
```

## 删除 delete

```js
let setArr = new Set(['dmz', '代码仔', 'web', 'dmz'])
console.log(setArr) //Set {"dmz", "代码仔", "web"}

setArr.add('前端职场')
console.log(setArr) //Set {"dmz", "代码仔", "web", "前端职场"}

setArr.delete('前端职场')
console.log(setArr) //Set {"dmz", "代码仔", "web"}
```

## 查找 has

用 has 进行值的查找，返回的是 true 或者 false。

```js
let setArr = new Set(['dmz', '代码仔', 'web', 'dmz'])
console.log(setArr) //Set {"dmz", "代码仔", "web"}
console.log(setArr.has('dmz')) //true
```

## 删除 clear

```js
let setArr = new Set(['dmz', '代码仔', 'web', 'dmz'])
console.log(setArr) //Set {"dmz", "代码仔", "web"}
setArr.clear()
console.log(setArray) //true
```

## set 的循环 for…of…循环

```js
let setArr = new Set(['dmz', '代码仔', 'web', 'dmz'])
for (let item of setArr) {
  console.log(item)
}
```

## size 属性

size 属性可以获得 Set 值的数量

```js
let setArr = new Set(['dmz', '代码仔', 'web', 'dmz'])
for (let item of setArr) {
  console.log(item)
}

console.log(setArr.size)
```

## forEach 循环

```js
let setArr = new Set(['dmz', '代码仔', 'web', 'dmz'])
setArr.forEach(value => console.log(value))
```

## WeakSet 的声明

这里需要注意的是，如果你直接在 new 的时候就放入值，将报错。

WeakSet 里边的值也是不允许重复的，我们来测试一下。

```js
let weakObj = new WeakSet()
let obj = { a: 'dmz', b: '代码仔' }
let obj1 = obj
weakObj.add(obj)
weakObj.add(obj1)
console.log(weakObj)
```

> 总结：在实际开发中 Set 用的比较多，WeakSet 用的并不多，但是他对传入值必须是对象作了很好的判断，我们灵活应用还是有一定的用处的。

## map 数据结构

## Json 和 map 格式的对比

map 的效率和灵活性更好
先来写一个 JSON，这里我们用对象进行模拟操作。

```js
let json = {
  name: 'dmz',
  skill: 'web'
}
console.log(json.name)
```

但是这种反应的速度要低于数组和 map 结构。而且 Map 的灵活性要更好，你可以把它看成一种特殊的键值对，但你的 key 可以设置成数组，值也可以设置成字符串，让它不规律对应起来。

```js
let json = {
  name: 'dmz',
  skill: 'web'
}
console.log(json.name)

var map = new Map()
map.set(json, 'iam')
console.log(map)
```

当然也可 key 字符串，value 是对象。我们调换一下位置，依然是符合 map 的数据结构规范的。

```js
map.set('dmz', json)
console.log(map)
```

## map 的增删查

上边我们已经会为 map 增加值了，就是用我们的 set 方法，这里我就不重复讲解了。直接看如何取出我们的值。

## 取值 get

现在取 json 对应的值。

```js
console.log(map.get(json))
```

## 删除 delete

```js
map.delete(json)
console.log(map)
```

## size 属性

```js
console.log(map.size)
```

## 查找是否存在 has

```js
consolec.log(map.has('dmz'))
```

## 清楚所有元素 clear

```js
map.clear()
```

> 总结：map 在现在开发中已经经常使用，它的灵活性和高效性是我们喜欢的。开发中试着去使用 map 吧，你一定会喜欢上它的。
