# 异步代码的测试方法-4async...await

写异步测试用例时我使用了 return 的形式，这只是其中的一种方法，还有另一种方法，就是使用 async...await...的这种语法形式来写测试用例。两种语法没有好坏之分，就看自己习惯和容易理解那种方法。

## 编写异步请求代码

还是在上节课的文件 fetchData.js 中，编写一个新的方法，代码如下：

```js
export const fetchFourData = () => {
  return axios.get('http://a.dmz.com/jestTest.json')
}
```

注意，这时候地址是正确的，也就是可以正常返回结果的。

## async...await 编写测试代码

这时候我们的代码使用 async....await...的形式，这里我们还使用了 resolves 用于把现有对象转换成 Promise 对象，然后使用 Jest 中的 toMatchObject 进行匹配对象中的属性。

```js
test('FetchFourData 测试', async () => {
  //resolves把现有对象转换成Promise对象，
  //toMatchObject 匹配对象中的属性
  await expect(fetchFourData()).resolves.toMatchObject({
    data: {
      success: true
    }
  })
})
```

写完上面的代码就可以出正确的结果了，但是这种方法还是有点抽象的，需要用 resolves 转换一下。有没有简单方法，答案是肯定的。我们可以把上面的测试方法写成这样。

```js
test('FetchFourData 测试', async () => {
  const response = await fetchFourData()
  expect(response.data).toEqual({
    success: true
  })
})
```

这就是用 async...await...来进行异步代码测试
