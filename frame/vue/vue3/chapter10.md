# LifeCycle Hooks

新版的生命周期函数，可以按需导入到组件中，且只能在 setup() 函数中使用，代码示例如下：

```js
import { onMounted, onUpdated, onUnmounted } from '@vue/composition-api'

const MyComponent = {
  setup() {
    onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
  }
}
```

下面的列表，是 vue 2.x 的生命周期函数与新版 Composition API 之间的映射关系：

- beforeCreate -> use setup()

- created -> use setup()

- beforeMount -> onBeforeMount

- mounted -> onMounted

- beforeUpdate -> onBeforeUpdate

- updated -> onUpdated

- beforeDestroy -> onBeforeUnmount

- destroyed -> onUnmounted

- errorCaptured -> onErrorCaptured
