# radio-group 组件

使用 radio 组件的缺点，需要给每个组件都绑定 v-mode,可以使用 radio-group 包裹

## 前置知识

```js
provide与inject
```

## 基本结构

结构

```html
<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>
```

数据

```html
export default { name: 'mvRadioGroup', provide () { return { RadioGroup: this } }, props: { value: null } }
```

## 修改 radio 组件

- 接收 inject

```js
inject: {
  RadioGroup: {
    default: ''
  }
},

```

- 计算属性判断是否包裹在 group 中

```js
// 判断包裹在group中
isGroup () {
  return !!this.RadioGroup
}

```

- 修改代码

```js
model: {
  get () {
    return this.isGroup ? this.RadioGroup.value : this.value
  },
  set (value) {
    this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
  }
}

```
