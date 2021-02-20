# template refs

通过 ref() 还可以引用页面上的元素或组件。

## 元素的引用

```jsx
<template>
  <div>
    <h3 ref="h3Ref">TemplateRefOne</h3>
  </div>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'

export default {
  setup() {
    // 创建一个 DOM 引用
    const h3Ref = ref(null)

    // 在 DOM 首次加载完毕之后，才能获取到元素的引用
    onMounted(() => {
      // 为 dom 元素设置字体颜色
      // h3Ref.value 是原生DOM对象
      h3Ref.value.style.color = 'red'
    })

    // 把创建的引用 return 出去
    return {
      h3Ref
    }
  }
}
</script>
```

## 组件的引用

TemplateRefOne.vue 中的示例代码如下：

```jsx
<template>
  <div>
    <h3>TemplateRefOne</h3>

    <!-- 4. 点击按钮展示子组件的 count 值 -->
    <button @click="showNumber">获取TemplateRefTwo中的count值</button>

    <hr />
    <!-- 3. 为组件添加 ref 引用 -->
    <TemplateRefTwo ref="comRef" />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import TemplateRefTwo from './TemplateRefTwo'

export default {
  setup() {
    // 1. 创建一个组件的 ref 引用
    const comRef = ref(null)

    // 5. 展示子组件中 count 的值
    const showNumber = () => {
      console.log(comRef.value.count)
    }

    // 2. 把创建的引用 return 出去
    return {
      comRef,
      showNumber
    }
  },
  components: {
    TemplateRefTwo
  }
}
</script>
```

TemplateRefTwo.vue 中的示例代码：

```jsx
<template>
  <div>
    <h5>TemplateRefTwo --- {{count}}</h5>
    <!-- 3. 点击按钮，让 count 值自增 +1 -->
    <button @click="count+=1">+1</button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    // 1. 定义响应式的数据
    const count = ref(0)

    // 2. 把响应式数据 return 给 Template 使用
    return {
      count
    }
  }
}
</script>
```

## createComponent

> 这个函数不是必须的，除非你想要完美结合 TypeScript 提供的类型推断来进行项目的开发。

这个函数仅仅提供了类型推断，方便在结合 TypeScript 书写代码时，能为 setup() 中的 props 提供完整的类型推断。

```jsx
import { createComponent } from 'vue'

export default createComponent({
  props: {
    foo: String
  },
  setup(props) {
    props.foo // <- type: string
  }
})
```
