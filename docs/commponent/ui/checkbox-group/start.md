# checkbox-group 组件

使用 checkbox-group 组件包裹 checkbox

## 结构

```html
<template>
  <div class="mv-checkbox-group">
    <slot></slot>
  </div>
</template>
```

- 提供 provide

```js
props: {
  value: {
    type: Array,
    default: function () {
      return []
    }
  }
},
provide () {
  return {
    CheckboxGroup: this
  }
}

```

## 修改 checkbox

- 接收 inject

```js
inject: {
  CheckboxGroup: {
    default: ''
  }
},

```

- 修改

```js
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        if (this.isGroup) {
          // 修改value属性
          console.log(value, this.label)
          this.CheckboxGroup.$emit('input', value)
        } else {
          this.$emit('input', value)
        }
      }
    },
isGroup () {
    return !!this.CheckboxGroup
  },
  isChecked () {
    // 判断是否选中
    // console.log(this.model)
    if (this.isGroup) {
      return this.model.includes(this.label)
    } else {
      return this.model
    }
  }

```
