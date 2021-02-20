# 异步代码的测试方法-2 直接返回 promise

## 编写异步代码

打开的 fetchData.js 文件

```js
export const fetchTwoData = () => {
  return axios.get('http://a.dmz.com/jestTest.json')
}
```

从代码中可以看出，我们直接只用了 Return 返回了异步请求的 promise 值，这样的方法在实际工作中也经常使用，所以我们是有必要学习一下的，而且这里也是有坑的。 这些坑可能新手掉进去就很难趴出来。

## 编写测试代码

打开 fetchData.test.js 文件，然后新写一个测试用例，在写之前记得先把 fetchTwoData 方法引过来

```js
import { fetchData, fetchTwoData } from './fetchData.js'
```

引入之后，编写测试用例，代码如下:

```js
test('FetchTwoData 测试', () => {
  return fetchTwoData().then(response => {
    expect(response.data).toEqual({
      success: true
    })
  })
})
```

这部分代码需要注意的是要使用 return 才能测试成功，这个坑我学习的时候也踩到了，所以给大家说一下，希望大家不要踩坑。
