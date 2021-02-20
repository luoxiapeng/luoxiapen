# 钩子函数的作用域

- 钩子函数在父级分组可作用域子集，类似继承
- 钩子函数同级分组作用域互不干扰，各起作用
- 先执行外部的钩子函数，再执行内部的钩子函数

## 钩子函数在父级分组可作用域子集

为了更好的说明钩子函数的作用域，现在我们把程序的最外层加入一个 describe，其实不加这个，系统默认也是有这个的，只是不那么直观。

在 newBaoJian.test.js 文件中加入 describe,代码如下：

```js
import NewBaoJian from './newBaoJian'

const baojian = new NewBaoJian()

describe('最外层分组', () => {
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
})
```

写完后你在控制台运行 yarn test，可以看到 console.log 的顺序和结果并没有改变。并且每一个 beforeEach 和 afterEach 也都在每一个测试用例的前后执行了。这就是我们说的第一条钩子函数在父级分组可作用域子集，类似继承

## 钩子函数同级分组作用域互不干扰

现在“大脚”和“刘英”都希望在服务客人后有小费，但是价格不同。这时候就可以在两个同级的 describe 中分别加入不同的 afterEach，比如大脚要 30 元小费，刘英要 50 元小费。

```js
afterEach(() => {
  console.log('------大脚，你服务的很好，给你30元小费')
})

afterEach(() => {
  console.log('------刘英，你服务的很好，给你50元小费')
})
```

为了看的清楚，你可以暂时注释掉外层的四个钩子函数。这时候输出的结果就变成了。

```js
  console.log newBaoJian.test.js:27
    大脚走进房间为你_足疗

  console.log newBaoJian.test.js:41
    ------大脚，你服务的很好，给你30元小费

  console.log newBaoJian.test.js:35
    大脚走进房间为你_泰式保健

  console.log newBaoJian.test.js:41
    ------大脚，你服务的很好，给你30元小费

  console.log newBaoJian.test.js:52
    刘英走进房间为你_按摩

  console.log newBaoJian.test.js:64
    ------刘英，你服务的很好，给你50元小费

  console.log newBaoJian.test.js:59
    刘英走进房间为你_宫廷御疗

  console.log newBaoJian.test.js:64
    ------刘英，你服务的很好，给你50元小费
```

这个案例也说明了钩子函数在同级的 describe 分组里是互不干扰的。如果你说不好记忆，我这里再形象一点，举一个生活中的例子。

> 比如你有一个弟弟或者哥哥，意思你们是兄弟两个人，那你们的父母都是你们的父母，他们管理你们两个谁都好使，因为是长辈管教子辈。而你们长大了，各自娶了媳妇，你们兄弟两个的媳妇就不弄混了，自己就是自己的。

道理虽然粗鄙，但是能帮你更好的理解就好。

## 先执行外部的钩子函数

红浪漫现在又出了新的政策，原来都在大厅，现在却推出了包房服务。但是无论你要进入那个包房，你都必须先进入红浪漫洗浴。也就是说钩子函数要有个先后执行的关系。这个关系就是外部先执行，内部后执行。

现在把已经注释的外层的 beforeAll 钩子函数注释去掉，然后在 describe 中加入 beforeAll 钩子函数。

```js
beforeAll(() => {
  console.log('------然后走进了666号包房')
})
```

这时候你再看“控制台”的结果，就变成了下面的样子。

```js
  console.log newBaoJian.test.js:15
   吃完饭后，走进了红浪漫洗浴

  console.log newBaoJian.test.js:25
    ------然后走进了666号包房

  console.log newBaoJian.test.js:31
    大脚走进房间为你_足疗

  console.log newBaoJian.test.js:45
    ------大脚，你服务的很好，给你30元小费
```

这时候为你让你看的清楚，我再第一个 test 测试用例这里加入一个 only，加入后，其它的用例都会 skipped 掉，只执行这一个。

```js
test.only('测试 大脚足浴  方法', () => {
  baojian.gongzhu(1)
  baojian.anjiao()
  console.log(baojian.fuwu)
  expect(baojian.fuwu).toEqual('大脚走进房间为你_足疗')
})
```

这个例子正好说明了，外部的钩子函数先执行，下级的分组后执行，也就是执行顺序是“由外到内”的.only 的使用在工作中也是经常使用的，因为有时候测试用例很多，不好调试，就可以使用 only 的形式单独调试。
