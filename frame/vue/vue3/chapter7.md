# toRefs

toRefs() 函数可以将 reactive() 创建出来的响应式对象，转换为普通的对象，只不过，这个对象上的每个属性节点，都是 ref() 类型的响应式数据，最常见的应用场景如下：

```js
import { toRefs } from '@vue/composition-api'

setup() {
    // 定义响应式数据对象
    const state = reactive({
      count: 0
    })

    // 定义页面上可用的事件处理函数
    const increment = () => {
      state.count++
    }

    // 在 setup 中返回一个对象供页面使用
    // 这个对象中可以包含响应式的数据，也可以包含事件处理函数
    return {
      // 将 state 上的每个属性，都转化为 ref 形式的响应式数据
      ...toRefs(state),
      // 自增的事件处理函数
      increment
    }
}

```
