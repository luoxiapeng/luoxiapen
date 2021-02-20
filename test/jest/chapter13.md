# Jest 中对测试用例进行分组

## 增加项目代码

打开 newBaoJian.js 文件，然后增加一个泰式保健和宫廷御疗，代码如下：

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

  taishi() {
    this.fuwu = this.user + '走进房间为你_泰式保健'
  }
  gongting() {
    this.fuwu = this.user + '走进房间为你_宫廷御疗'
  }
}
```

## 增加测试用例

接着上节课的测试用例 newBaojian.test.js 继续进行编写新的代码，代码如下：

```js
test('测试 大脚泰式保健  方法', () => {
  baojian.gongzhu(1)
  baojian.taishi()
  console.log(baojian.fuwu)
  expect(baojian.fuwu).toEqual('大脚走进房间为你_泰式保健')
})

test('测试 刘英宫廷御疗  方法', () => {
  baojian.gongzhu(2)
  baojian.gongting()
  console.log(baojian.fuwu)
  expect(baojian.fuwu).toEqual('刘英走进房间为你_宫廷御疗')
})
```

目前的全部测试用例代码如下：

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

test('测试 大脚泰式保健  方法', () => {
  baojian.gongzhu(1)
  baojian.taishi()
  console.log(baojian.fuwu)
  expect(baojian.fuwu).toEqual('大脚走进房间为你_泰式保健')
})

test('测试 刘英宫廷御疗  方法', () => {
  baojian.gongzhu(2)
  baojian.gongting()
  console.log(baojian.fuwu)
  expect(baojian.fuwu).toEqual('刘英走进房间为你_宫廷御疗')
})

afterEach(() => {
  console.log('完成后，我心满意足的坐在沙发上！！！')
})

afterAll(() => {
  console.log('有钱人的生活就是这么的枯燥且寂寞')
})
```

## 测试分组方法编写

随着项目的不断增多，我们是时候出个套餐服务了，毕竟每个人的精力有限，不可能全部的服务都享受一下。所以就需要进行分组。

那最原始的方法是，我们新建两个测试文件，把大脚的服务项放到一个测试文件里，把刘英的测试文件放到一个文件里去，这就形成了分组。

但这样分组显然是不够优雅的，毕竟我们需要测试的代码在一个文件里，我们的测试文件却分成了两个文件。

其实 Jest 为我们提供了一个分组的语法 describe(),这个方法接受两个参数，现在我们把大脚和刘英的测试用例用 describe()方法进行分开。代码如下:

```js
import NewBaoJian from './newBaoJian'

const baojian = new NewBaoJian()

beforeAll(() => {
  console.log('吃完饭后，走进了红浪漫洗浴')
})

beforeEach(() => {
  console.log('给了300元钱后......')
})

describe('大脚相关服务', () => {
  test('测试 大脚足浴  方法', () => {
    baojian.gongzhu(1)
    baojian.anjiao()
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual('大脚走进房间为你_足疗')
  })

  test('测试 大脚泰式保健  方法', () => {
    baojian.gongzhu(1)
    baojian.taishi()
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual('大脚走进房间为你_泰式保健')
  })
})

describe('刘英相关服务', () => {
  test('测试 刘英按摩  方法', () => {
    baojian.gongzhu(2)
    baojian.anmo()
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual('刘英走进房间为你_按摩')
  })

  test('测试 刘英宫廷御疗  方法', () => {
    baojian.gongzhu(2)
    baojian.gongting()
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual('刘英走进房间为你_宫廷御疗')
  })
})

afterEach(() => {
  console.log('完成后，我心满意足的坐在沙发上！！！')
})

afterAll(() => {
  console.log('有钱人的生活就是这么的枯燥且寂寞')
})
```

这时候我们结束一下测试，然后清一下屏幕，再进行测试，这时候你可以清楚看到代码是分组进行测试的。这样分组的好处实际就就是要让测试用例开起来更有层次感，也算为了下节课讲解生命周期的作用域作一个提前的铺垫。
