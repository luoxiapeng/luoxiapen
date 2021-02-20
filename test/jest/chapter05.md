#  Jest中的匹配器（中）

## 开启自动测试

每次修改测试用例，我们都手动输入yarn test ，这显得很lower。可以通过配置package.json文件来设置。修改如下：

```js
{
  "name": "jesttest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest --watchAll",
    "coverage":"jest --coverage"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^24.8.0"
  }
}
```
修改保存后，我们在终端再次运行yarn test,这时候测试一次后，它并没有结束，而是等待测试文件的变化，变化后就会自动进行测试。

## toBeGreaterThan()匹配器

这个是用来作数字比较的，大于什么数值，只要大于传入的数值，就可以通过测试。我们来写一段代码来看一下。

```js
test('toBeGreaterThan匹配器',()=>{
    const count = 10
    expect(count).toBeGreaterThan(9)
})
```
## toBeLessThan()匹配器

toBeLessThan跟toBeGreaterThan相对应的，就是少于一个数字时，就可以通过测试。代码如下:

```js
test('toBeLessThan匹配器',()=>{
    const count = 10
    expect(count).toBeLessThan(11)
})
```

10比11小，所以测试用例顺利通过。

##  toBeGreaterThanOrEqual()匹配器

当测试结果数据大于等于期待数字时，可以通过测试。比如下面的代码是没办法通过测试的。


```js
test('toBeGreaterThan匹配器',()=>{
    const count = 10
    expect(count).toBeGreaterThan(10)
})

```
但是我们使用了toBeGreaterThanOrEqual()就可以通过测试。

```js
test('toBeGreaterThanOrEqual匹配器',()=>{
    const count = 10
    expect(count).toBeGreaterThanOrEqual(10)
})

```
## toBeLessThanOrEqual()匹配器

这个跟toBeGreaterThanOrEqual()相对应，所以就不做过多的介绍了。

## toBeCloseTo()匹配器

这个是可以自动消除JavaScript浮点精度错误的匹配器，举个例子，比如我们让0.1和0.2相加，这时候js得到的值应该是0.30000000000004,所以如果用toEqual()匹配器，测试用例会通过不了测试的。

比如我们把测试用例写成这样，就不会通过:

```js
test('toEqual匹配器',()=>{
    const one = 0.1
    const two = 0.2
    expect(one + two).toEqual(0.3)
})
```
这时候我们就需要使用toBeCloseTo()匹配器，可以顺利通过测试,代码如下：

```js

test('toBeCloseTo匹配器',()=>{
    const one = 0.1
    const two = 0.2
    expect(one + two).toBeCloseTo(0.3)
})
```

这样就可以顺利通过测试了，这就是它的作用。

