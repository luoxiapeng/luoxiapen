# watch

watch() 函数用来监视某些数据项的变化，从而触发某些特定的操作，使用之前需要按需导入：

```js
import { watch } from '@vue/composition-api'
```

## 基本用法

```js
const count = ref(0)

// 定义 watch，只要 count 值变化，就会触发 watch 回调
// watch 会在创建时会自动调用一次
watch(() => console.log(count.value))
// 输出 0

setTimeout(() => {
  count.value++
  // 输出 1
}, 1000)
```

## 监视指定的数据源

监视 reactive 类型的数据源：

```js
// 定义数据源
const state = reactive({ count: 0 })
// 监视 state.count 这个数据节点的变化
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
)
```

监视 ref 类型的数据源：

```js
// 定义数据源
const count = ref(0)
// 指定要监视的数据源
watch(count, (count, prevCount) => {
  /* ... */
})
```

## 监视多个数据源

监视 reactive 类型的数据源：

```js
const state = reactive({ count: 0, name: 'zs' })

watch(
  [() => state.count, () => state.name], // Object.values(toRefs(state)),
  ([count, name], [prevCount, prevName]) => {
    console.log(count) // 新的 count 值
    console.log(name) // 新的 name 值
    console.log('------------')
    console.log(prevCount) // 旧的 count 值
    console.log(prevName) // 新的 name 值
  },
  {
    lazy: true // 在 watch 被创建的时候，不执行回调函数中的代码
  }
)

setTimeout(() => {
  state.count++
  state.name = 'ls'
}, 1000)
```

监视 ref 类型的数据源：

```js
const count = ref(0)
const name = ref('zs')

watch(
  [count, name], // 需要被监视的多个 ref 数据源
  ([count, name], [prevCount, prevName]) => {
    console.log(count)
    console.log(name)
    console.log('-------------')
    console.log(prevCount)
    console.log(prevName)
  },
  {
    lazy: true
  }
)

setTimeout(() => {
  count.value++
  name.value = 'xiaomaolv'
}, 1000)
```

## 清除监视

在 setup() 函数内创建的 watch 监视，会在当前组件被销毁的时候自动停止。如果想要明确地停止某个监视，可以调用 watch() 函数的返回值即可，语法如下：

```js
// 创建监视，并得到 停止函数
const stop = watch(() => {
  /* ... */
})

// 调用停止函数，清除对应的监视
stop()
```

## 在 watch 中清除无效的异步任务

有时候，当被 watch 监视的值发生变化时，或 watch 本身被 stop 之后，我们期望能够清除那些无效的异步任务，此时，watch 回调函数中提供了一个 cleanup registrator function 来执行清除的工作。这个清除函数会在如下情况下被调用：

- watch 被重复执行了
- watch 被强制 stop 了

Template 中的代码示例如下：

```js
/* template 中的代码 */ <input type='text' v-model='keywords' />
```

Script 中的代码示例如下：

```js
// 定义响应式数据 keywords
const keywords = ref('')

// 异步任务：打印用户输入的关键词
const asyncPrint = val => {
  // 延时 1 秒后打印
  return setTimeout(() => {
    console.log(val)
  }, 1000)
}

// 定义 watch 监听
watch(
  keywords,
  (keywords, prevKeywords, onCleanup) => {
    // 执行异步任务，并得到关闭异步任务的 timerId
    const timerId = asyncPrint(keywords)

    // 如果 watch 监听被重复执行了，则会先清除上次未完成的异步任务
    onCleanup(() => clearTimeout(timerId))
  },
  // watch 刚被创建的时候不执行
  { lazy: true }
)

// 把 template 中需要的数据 return 出去
return {
  keywords
}
```
