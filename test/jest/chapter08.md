# 异步代码的测试方法-1 回调函数式

## 编写异步代码

现在要作的事情是用 axios 远程的请求我博客的数据。要使用 axios 就需要先进行安装，直接使用 npm 或 yarn 进行安装就可以了。

npm 安装方法

```js
npm install axios@0.19.0 --save
```

yarn 安装方法

```js
yarn add axioss@0.19.0
```

根据你的网络环境，安装速度会有所不同，但一般都会很快，也不会遇到什么难搞的事情。安装完成后，可以打开 package.json 看一下安装结果和版本，我这里使用的是 0.19.0(如果你是其它版本，可能这个方法会出错，所以你最好和我使用一样的版本)。

因为异步请求，就需要一个远程的文件，代码仔为了方便你学习，提供如下远程地址(远程地址随时可能失效)。

```js
http://a.dmz.com/jestTest.json
```

安装好 axios 以后，在项目根目录下面，新建一个文件 fetchData.js 文件，然后编写代码如下：

```js
import axios from 'axios'

export const fetchData = fn => {
  axios.get('http://a.dmz.com/jestTest.json').then(response => {
    fn(response.data)
  })
}
```

这是我们最经常使用的一种异步请求方法的形式，所以我们想来看看这种形式的测试代码如何编写

## 编写测试方法

有了这个文件，接下来就可以写测试文件 fetchData.test.js.在项目根目录下，新建一个 fetchData.test.js 文件，然后编写下面的代码。

```js
import { fetchData } from './fetchData.js'

test('fetchData 测试', () => {
  fetchData(data => {
    expect(data).toEqual({
      success: true
    })
  })
})
```

注意这样写是由问题的，因为方法还没有等到回调，我们的结果已经完成了，所以这时候你对于没测试完，只是方法可用，就返回了测试结果，这种结果是不保证正确的。

比如现在我们把请求的地址后边加一个 1,这时候才测试，依然是正确的。

```js
axios.get('http://a.dmz.com/jestTest1.json').then(response => {
  fn(response.data)
})
```

所以我们必须加入一个 done 方法，保证我们的回调已经完成了，这时候我们表示测试完成。

```js
import { fetchData } from './fetchData.js'

test('fetchData 测试', done => {
  fetchData(data => {
    expect(data).toEqual({
      success: true
    })
    done()
  })
})
```

这时候我们的测试代码才能保证测试准确无误的完成，所以你在工作中处理异步函数的时候，一定要注意这种异步函数的形式如何来进行测试。
