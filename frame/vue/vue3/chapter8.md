# computed

`computed()` 用来创建计算属性，`computed()` 函数的返回值是一个 ref 的实例。使用 computed 之前需要按需导入：

```js
import { computed } from '@vue/composition-api'
```

## 创建只读的计算属性

在调用 computed() 函数期间，传入一个 function 函数，可以得到一个只读的计算属性，示例代码如下：

```js
// 创建一个 ref 响应式数据
const count = ref(1)

// 根据 count 的值，创建一个响应式的计算属性 plusOne
// 它会根据依赖的 ref 自动计算并返回一个新的 ref
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 输出 2
plusOne.value++ // error
```

## 创建可读可写的计算属性

在调用 computed() 函数期间，传入一个包含 get 和 set 函数的对象，可以得到一个可读可写的计算属性，示例代码如下：

```js
// 创建一个 ref 响应式数据
const count = ref(1)

// 创建一个 computed 计算属性
const plusOne = computed({
  // 取值函数
  get: () => count.value + 1,
  // 赋值函数
  set: val => {
    count.value = val - 1
  }
})

// 为计算属性赋值的操作，会触发 set 函数
plusOne.value = 9
// 触发 set 函数后，count 的值会被更新
console.log(count.value) // 输出 8
```
