# Jest 中的匹配器（上）

## 前期准备

在开始课程前，我们在项目跟目录下新建一个 matchers.test.js 文件，这个文件用来专门讲解匹配器。然后在文件中写入下面的代码。

```js
test('测试007号技师的匹配', () => {
  expect('007号技师').toBe('007号技师')
})
```

写完后使用 yarn test 来进行测试。我们可以知道，这个不是完全相等的，引用地址不同，所以测试应该是 FAIL。结果跟我们想象是一直的，通过这小段代码，你可以很清楚的知道 toBe()匹配器的作用了吧。

## toEqual()匹配器

那你说我想让上面的测试结果是正确的，这时候我需要使用什么匹配器那？那就是使用 toEqual()匹配器。可以把它理解成只要内容相等，就可以通过测试，比如修改代码如下:

```js
test('测试严格相等', () => {
  const a = { number: '007' }
  expect(a).toEqual({ number: '007' })
})
```

所以说当你不严格匹配但要求值相等时时就可以使用 toEqual（）匹配器。

## toBeNul()匹配器

toBeNul()匹配器只匹配 null 值，需要注意的是不匹配 undefined 的值。我们复制上面的代码，然后把代码修改成如下形式：

```js
test('toBeNull测试', () => {
  const a = null
  expect(a).toBeNull()
})
```

但是如果我们把 a 的值改为 undefined，测试用例就通过不了啦。

## toBeDefined()匹配器

toBeDefined()匹配器的意思是只要定义过了，都可以匹配成功，例如下面的代码：

```js
test('toBeDefined测试', () => {
  const a = 'dmz'
  expect(a).toBeDefined()
})
```

这里需要注意的是，我给一个 null 值也是可以通过测试的。

## toBeTruthy()匹配器

这个是 true 和 false 匹配器，就相当于判断真假的。比如说写下面这样一段代码:

```js
test('toBeTruthy 测试', () => {
  const a = 0
  expect(a).toBeTruthy()
})
```

这样测试就过不去了，因为这里的 0，如果判断真假时，就是 false，所以无法通过。同样道理 null 也是无法通过的。 但是我们给个 1 或者 dmz 字符串，就可以通过测试了。

## toBeFalsy()匹配器

有真就有假，跟 toBeTruthy()对应的就是 toBeFalsy,这个匹配器只要是返回的 false 就可以通过测试。

```js
test('toBeFalsy 测试', () => {
  const a = 0
  expect(a).toBeFalsy()
})
```
