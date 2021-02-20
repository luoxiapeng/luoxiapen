# Promise 对象

回调函数

例如

createAudioFileAsync() 的示例

```js
// 成功的回调函数
function successCallback(result) {
  console.log('音频文件创建成功: ' + result)
}

// 失败的回调函数
function failureCallback(error) {
  console.log('音频文件创建失败: ' + error)
}

createAudioFileAsync(audioSettings, successCallback, failureCallback)
```

最新的方式就是返回一个 promise 对象，使得你可以将你的回调函数绑定在该 Promise 上：

如果函数 createAudioFileAsync() 被重写为返回 Promise 对象的形式，就可以像这样简单地使用：

```js
const promise = createAudioFileAsync(audioSettings)
promise.then(successCallback, failureCallback)
```

间写

```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback)
```

## 链式调用

续执行两个或者多个异步操作是一个常见的需求，在上一个操作执行成功之后，开始下一个的操作，并带着上一步操作所返回的结果。我们可以通过创造一个 Promise 链来实现这种需求。

见证奇迹的时刻：then() 函数会返回一个全新的 Promise，和原来的不同：

```js
const promise = doSomething()
const promise2 = promise.then(successCallback, failureCallback)
```

或者

```js
const promise2 = doSomething().then(successCallback, failureCallback)
```

会导致经典的回调地狱：

```js
doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (finalResult) {
          console.log('Got the final result: ' + finalResult)
        },
        failureCallback
      )
    },
    failureCallback
  )
}, failureCallback)
```

Promise 上代替以往的做法，形成一个

```js
doSomething()
  .then(function (result) {
    return doSomethingElse(result)
  })
  .then(function (newResult) {
    return doThirdThing(newResult)
  })
  .then(function (finalResult) {
    console.log('Got the final result: ' + finalResult)
  })
  .catch(failureCallback)
```

## Catch 的后续链式操作

有可能会在一个回调失败之后继续使用链式操作，即 使用一个 catch，这对于在链式操作中抛出一个失败之后，再次进行新的操作很有用。请阅读下面的例子：

```js
new Promise((resolve, reject) => {
  console.log('初始化')

  resolve()
})
  .then(() => {
    throw new Error('有哪里不对了')

    console.log('执行「这个」”')
  })
  .catch(() => {
    console.log('执行「那个」')
  })
  .then(() => {
    console.log('执行「这个」，无论前面发生了什么')
  })
```

在 ECMAScript 2017 标准的 async/await 语法糖中，这种同步形式代码的对称性得到了极致的体现：

```js
async function foo() {
  try {
    let result = await doSomething()
    let newResult = await doSomethingElse(result)
    let finalResult = await doThirdThing(newResult)
    console.log(`Got the final result: ${finalResult}`)
  } catch (error) {
    failureCallback(error)
  }
}
```

## 组合

`Promise.resolve() `和 `Promise.reject()` 是手动创建一个已经 resolve 或者 reject 的 Promise 快捷方法。它们有时很有用
。

`Promise.all()`和 `Promise.race() `是并行运行异步操作的两个组合式工具。

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  /* use result1, result2 and result3 */
})
```

可以使用一些聪明的 JavaScript 写法实现时序组合：

```js
;[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then(result3 => {
    /* use result3 */
  })
```

通常，我们递归调用一个由异步函数组成的数组时相当于一个 Promise 链：

```js
Promise.resolve().then(func1).then(func2).then(func3)
```

我们也可以写成可复用的函数形式，这在函数式编程中极为普遍：

```js
const applyAsync = (acc, val) => acc.then(val)
const composeAsync = (...funcs) => x => funcs.reduce(applyAsync, Promise.resolve(x))
```

composeAsync() 函数将会接受任意数量的函数作为其参数，并返回一个新的函数，该函数接受一个通过 composition pipeline 传入的初始值。这对我们来说非常有益，因为任一函数可以是异步或同步的，它们能被保证按顺序执行：

```js
const transformData = composeAsync(func1, func2, func3)
const result3 = transformData(data)
```

ECMAScript 2017 标准中, 时序组合可以通过使用 async/await 而变得更简单：

```js
let result
for (const f of [func1, func2, func3]) {
  result = await f(result)
}
/* use last result (i.e. result3) */
```
