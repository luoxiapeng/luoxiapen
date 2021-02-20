# 异步代码的测试方法-3 不存在接口的测试方法

在工作中有时候会测试异步接口不存在的需求（虽然不多，但这里有坑），比如有些后台需求不允许前台访问时，这时候就会返回 404（页面不存在），这时候在测试时也存在一些坑，所以单独拿出来给大家讲一下。

## 编写异步代码

继续打开 fetchData.test.js 文件，然后编写测试代码如下，注意这个地址是不存在的，也就是返回 404。

```js
export const fetchThreeData = () => {
  return axios.get('http://a.dmz.com/jestTest_error.json')
}
```

## 编写测试代码

这时候可能很多小伙伴说测试 404 直接用 catch 就可以了，很简单，然后代码写成了这样

```js
test('FetchThreeData 测试', () => {
  return fetchThreeData().catch(e => {
    //console.log(e.toString())
    expect(e.toString().indexOf('404') > -1).toBe(true)
  })
})
```

但这样是错误的，比如现在我们把异步请求代码改正确后，我们再走一下测试，还是可以通过测试的。 现在把网址改成正确的:

```js
http://a.dmz.com/jestTest.json
```

那这是为什么那？因为测试用例使用了 catch 方法，也就是说只有出现异常的时候才会走这个方法，而现在没有出现异常，就不会走这个测试方法，Jest 就默认这个用例通过了测试。

这个也算是一个坑，想改这个坑也非常简单，只要使用 expect.assertions(1)就可以了，这个代码的意思是“断言，必须需要执行一次 expect 方法才可以通过测试”。

修改过后的代码就变成了这个样子

```js
test('FetchThreeData 测试', () => {
  expect.assertions(1) // 断言，必须执行一次expect
  return fetchThreeData().catch(e => {
    expect(e.toString().indexOf('404') > -1).toBe(true)
  })
})
```

这时候测试用例就无法正常通过测试了，因为此时我们的地址是存在并正确返回结果的。我们需要改成错误的地址，才能通过测试。

> http://a.dmz.com/jestTest_error.json

我们会了正常的，也会了不正常的测试方法，组合起来用就会让测试变的强大的多，比如测试正常的时候是如何的，碰到不正常，应该是如何的。这也基本组成了我们异步测试的基本结构，就是不仅要测试正常情况，正常流程的代码，也要测试异常情况和突发情况下的代码健壮性。这节课就先到这里，下节课我们继续学习。
