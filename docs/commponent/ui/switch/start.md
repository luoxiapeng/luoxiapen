# switch 组件

## 参数支持

| 参数名称      | 参数描述             | 参数类型 | 默认值 |
| ------------- | -------------------- | -------- | ------ |
| v-model       | 双向绑定             | 布尔类型 | false  |
| name          | name 属性            | string   | text   |
| activeColor   | 自定义的激活的颜色   | string   |        |
| inactiveColor | 自定义的不激活的颜色 | string   |        |

## 事件支持

| 事件名称 | 事件描述            |
| -------- | ------------------- |
| change   | change 时触发的事件 |

## 基本结构

- 页面

```html
<template>
  <label class="mv-switch">
    <span class="mv-switch__core">
      <span class="mv-switch__button"></span>
    </span>
  </label>
</template>
```

- 样式

```scss
.mv-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .mv-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .mv-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
```

## v-mode 双向绑定

- 接收 value 值

```js
props: {
  value: {
    type: Boolean,
    default: false
  }
},
```

- 注册点击事件

```html
<div class="mv-switch" @click="handleClick"></div>
```

- 事件处理程序

```js
methods: {
  handleClick () {
    this.$emit('input', !this.value)
  }
}
```

- 选中样式

```scss
.mv-switch.is-checked {
  .mv-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .mv-switch__button {
      transform: translateX(20px);
    }
  }
}
```

- 控制选中样式

```html
<div class="mv-switch" @click="handleClick" :class="{'is-checked': value}"></div>
```

## 自定义颜色

在使用 switch 时，希望能够自定义开关的颜色

```html
<mv-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"> </mv-switch>
```

- props 接收

```js
activeColor: {
  type: String,
  default: ''
},
inactiveColor: {
  type: String,
  default: ''
}
```

- 封装设置颜色的方法

```js
setColor () {
  if (this.activeColor || this.inactiveColor) {
    let color = this.value ? this.activeColor : this.inactiveColor
    this.$refs.core.style.borderColor = color
    this.$refs.core.style.backgroundColor = color
  }
}
```

- 页面一进入调用

```js
mounted () {
  // 设置颜色
  this.setColor()
},
```

- 改变状态后调用

```js
async handleClick () {
  this.$emit('input', !this.value)
  // 改变input框的值
  await this.$nextTick()
  this.setColor()
},
```

## name 属性支持

用户在使用 switch 组件的时候，实质上是当成表单元素来使用的。因此可能会用到组件的 name 属性。**因此需要在 switch 组件中添加一个 checkbox，并且当值改变的时候，也需要设置 checkbox 的 value 值**

- 结构

```html
<input class="mv-switch__input" type="checkbox" />
```

- 样式

```scss
.mv-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
```

- name 属性的支持

```js
name: {
  type: String,
  default: ''
}
```

- 控制 checkbox 的值与 value 同步

```js
  mounted () {
    this.$refs.input.checked = this.value
  },
  methods: {
    async handleChange () {
      this.$emit('input', !this.value)
      // 修改checkbox的值
      await this.$nextTick()
      this.$refs.input.checked = this.value
    }
  }
```
