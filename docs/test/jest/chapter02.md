# Jest 小试身手

我们已经安装好了基本 Jest 测试环境，现在就可以小试伸手，这节课我们就来写第一个单元测试的例子。

## 编写 dabaojian.test.js 文件

这个文件就是用来测试 dabaojian.js 文件的，Jest 会自动找对应的 test 作为测试文件，所以我们这里也使用了.test 文件名。

先来看两个必须会的方法：

- test 方法：Jest 封装的测试方法，一般填写两个参数，描述和测试方法
- expect 方法 ：预期方法，就是你调用了什么方法，传递了什么参数，得到的预期是什么(代码中详细讲解)。

当然我们在编写测试代码前，用 require 引入要测试的文件。

```js
const dabaojian = require('./dabaojian.js')
const { baojian1, baojian2 } = dabaojian
```

引入之后，就可以用 test 和 expect 方法进行测试了。具体代码如下：

```js
const dabaojian = require('./dabaojian.js')
const { baojian1, baojian2 } = dabaojian

test('保健1 300元', () => {
  expect(baojian1(300)).toBe('至尊享受')
})

test('保健2  2000元', () => {
  expect(baojian2(2000)).toBe('双人服务')
})
```

## 如何进行测试

要进行测试，我们可以打开 package.json 文件，然后把里边的 scripts 标签的值修改为 jest.

```js
{
  "name": "jesttest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^24.8.0"
  }
}
```

然后 VSCode 的终端窗口中输入 yarn test 或者 npm run test，就可以进行测试了
