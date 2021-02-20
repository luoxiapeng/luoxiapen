# provide & inject

provide() 和 inject() 可以实现嵌套组件之间的数据传递。这两个函数只能在 setup() 函数中使用。父级组件中使用 provide() 函数向下传递数据；子级组件中使用 inject() 获取上层传递过来的数据。

## 共享普通数据

```jsx
<template>
  <div id="app">
    <h1>App 根组件</h1>
    <hr />
    <LevelOne />
  </div>
</template>

<script>
import LevelOne from './components/LevelOne'
// 1. 按需导入 provide
import { provide } from '@vue/composition-api'

export default {
  name: 'app',
  setup() {
    // 2. App 根组件作为父级组件，通过 provide 函数向子级组件共享数据（不限层级）
    //    provide('要共享的数据名称', 被共享的数据)
    provide('globalColor', 'red')
  },
  components: {
    LevelOne
  }
}
</script>
```

LevelOne.vue 组件：

```jsx
<template>
  <div>
    <!-- 4. 通过属性绑定，为标签设置字体颜色 -->
    <h3 :style="{color: themeColor}">Level One</h3>
    <hr />
    <LevelTwo />
  </div>
</template>

<script>
import LevelTwo from './LevelTwo'
// 1. 按需导入 inject
import { inject } from '@vue/composition-api'

export default {
  setup() {
    // 2. 调用 inject 函数时，通过指定的数据名称，获取到父级共享的数据
    const themeColor = inject('globalColor')

    // 3. 把接收到的共享数据 return 给 Template 使用
    return {
      themeColor
    }
  },
  components: {
    LevelTwo
  }
}
</script>
```

LevelTwo.vue 组件：

```jsx
<template>
  <div>
    <!-- 4. 通过属性绑定，为标签设置字体颜色 -->
    <h5 :style="{color: themeColor}">Level Two</h5>
  </div>
</template>

<script>
// 1. 按需导入 inject
import { inject } from '@vue/composition-api'

export default {
  setup() {
    // 2. 调用 inject 函数时，通过指定的数据名称，获取到父级共享的数据
    const themeColor = inject('globalColor')

    // 3. 把接收到的共享数据 return 给 Template 使用
    return {
      themeColor
    }
  }
}
</script>

```

## 共享 ref 响应式数据

如下代码实现了点按钮切换主题颜色的功能，主要修改了 App.vue 组件中的代码，LevelOne.vue 和 LevelTwo.vue 中的代码不受任何改变：

```jsx
<template>
  <div id="app">
    <h1>App 根组件</h1>

    <!-- 点击 App.vue 中的按钮，切换子组件中文字的颜色 -->
    <button @click="themeColor='red'">红色</button>
    <button @click="themeColor='blue'">蓝色</button>
    <button @click="themeColor='orange'">橘黄色</button>

    <hr />
    <LevelOne />
  </div>
</template>

<script>
import LevelOne from './components/LevelOne'
import { provide, ref } from '@vue/composition-api'

export default {
  name: 'app',
  setup() {
    // 定义 ref 响应式数据
    const themeColor = ref('red')

    // 把 ref 数据通过 provide 提供的子组件使用
    provide('globalColor', themeColor)

    // setup 中 return 数据供当前组件的 Template 使用
    return {
      themeColor
    }
  },
  components: {
    LevelOne
  }
}
</script>

```
