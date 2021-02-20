# reactive

reactive() 函数接收一个普通对象，返回一个响应式的数据对象。

## 基本语法

等价于 vue 2.x 中的 Vue.observable() 函数，vue 3.x 中提供了 reactive() 函数，用来创建响应式的数据对象，基本代码示例如下：

```js
import { reactive } from '@vue/composition-api'

// 创建响应式数据对象，得到的 state 类似于 vue 2.x 中 data() 返回的响应式对象
const state = reactive({ count: 0 })
```

## 定义响应式数据供 template 使用

1. 按需导入 reactive 函数：

```js
import { reactive } from '@vue/composition-api'
```

2. 在 setup() 函数中调用 reactive() 函数，创建响应式数据对象：

```js
setup() {
     // 创建响应式数据对象
    const state = reactive({count: 0})

     // setup 函数中将响应式数据对象 return 出去，供 template 使用
    return state
}
```

3. 在 template 中访问响应式数据：

```html
<p>当前的 count 值为：{{ count }}</p>
```
