# Jest 中的四个钩子函数

## 大宝剑程序和测试方法

在根目录下新建一个文件，起名为 newBaoJian.js，然后在文件中写入下面的代码，代码详细内容我会在视频中进行讲解。

```js
export default class NewBaoJian {
  gongzhu(number) {
    this.user = number == 1 ? '大脚' : '刘英'
  }
  anjiao() {
    this.fuwu = this.user + '走进房间为你_足疗'
  }
  anmo() {
    this.fuwu = this.user + '走进房间为你_按摩'
  }
}
```

测试的方法，我们也可以这样写保证是正确的。

```js
import NewBaoJian from './newBaoJian'

const baojian = new NewBaoJian()

test('测试 大脚足浴  方法', () => {
  baojian.gongzhu(1)
  baojian.anjiao()
  console.log(baojian.fuwu)
  expect(baojian.fuwu).toEqual('大脚走进房间为你_足疗')
})

test('测试 刘英按摩  方法', () => {
  baojian.gongzhu(2)
  baojian.anmo()
  console.log(baojian.fuwu)
  expect(baojian.fuwu).toEqual('刘英走进房间为你_按摩')
})
```

## beforeAll()钩子函数

beforeAll()钩子函数的意思是在所有测试用例之前进行执行。

比如我们写一个这样的测试用例。

```js
beforeAll(() => {
  console.log('吃完饭后，走进了红浪漫洗浴')
})
```

写完后，保存文件，会自动执行测试。这时候可以在控制台看到吃完饭后，走进了红浪漫洗浴,最新执行啦。执行之后可以看到这句话最先执行了。然后才走下面的测试用例。

## afterAll()钩子函数

afterAll()钩子函数是在完成所有测试用例之后才执行的函数。

```js
afterAll(() => {
  console.log('有钱人的生活就是这么的枯燥且寂寞')
})
```

保存后，可以在控制台看到 afterAll 是最后执行的。这个用于测试都完成后调用某个方法。

## beforeEach()钩子函数

beforeEach()钩子函数，是在每个测试用例前都会执行一次的钩子函数，比如我们写如下代码。

```js
beforeEach(() => {
  console.log('给了300元钱后......')
})
```

保存后可以看到，每个测试用例执行之前都会先执行一下这个函数。

## afterEach()钩子函数

afterEach()钩子函数，是在每次测试用例完成测试之后执行一次的钩子函数，比如下面的代码。

```js
afterEach(() => {
  console.log('完成后，我心满意足的坐在沙发上！！！')
})
```

在工作中最常用的四个钩子函数就是这四个函数了，我这里举了一个简单且生动的例子，希望可以帮助小伙伴理解。为了小伙伴们学习方便，在下面我给出全部代码。

```js
import NewBaoJian from './newBaoJian'

const baojian = new NewBaoJian()

beforeAll(() => {
  console.log('吃完饭后，走进了红浪漫洗浴')
})

beforeEach(() => {
  console.log('给了300元钱后......')
})

test('测试 大脚足浴  方法', () => {
  baojian.gongzhu(1)
  baojian.anjiao()
  console.log(baojian.fuwu)
  expect(baojian.fuwu).toEqual('大脚走进房间为你_足疗')
})

test('测试 刘英按摩  方法', () => {
  baojian.gongzhu(2)
  baojian.anmo()
  console.log(baojian.fuwu)
  expect(baojian.fuwu).toEqual('刘英走进房间为你_按摩')
})

afterEach(() => {
  console.log('完成后，我心满意足的坐在沙发上！！！')
})

afterAll(() => {
  console.log('有钱人的生活就是这么的枯燥且寂寞')
})
```
