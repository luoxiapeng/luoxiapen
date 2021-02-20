# radio 组件

## 前置知识点

```js
radio的基本使用
```

## 参数支持

| 参数名称 | 参数描述          | 参数类型            | 默认值 |
| -------- | ----------------- | ------------------- | ------ |
| v-model  | 双向绑定          | 布尔类型            | false  |
| label    | 单选框的 value 值 | string，num,boolean | ''     |
| name     | name 属性         | string              |        |

## 基本结构

- html 结构

```html
<template>
  <label class="mv-radio">
    <span class="mv-radio__input">
      <span class="mv-radio__inner"></span>
      <input class="mv-radio__original" type="radio" />
    </span>
    <span class="mv-radio__label"> 我是label </span>
  </label>
</template>
```

- 样式

```scss
.mv-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .mv-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .mv-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .mv-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .mv-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
```

## 选中的样式

```js
.mv-radio.is-checked {
  .mv-radio__input {
    .mv-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after {
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .mv-radio__label {
    color: #409eff;
  }
}
```

## label 与插槽的处理

- props 接收

```js
props: {
  label: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
}
```

- 处理插槽

```html
<span class="mv-radio__label">
  <slot></slot>
  <!-- 如果没有插槽内容，那么label就是内容 -->
  <template v-if="!$slots.default">{{label}}</template>
</span>
```

## v-model 处理

- 接收 props 数据

```js
name: {
  type: String,
  default: ''
},
value: {
  type: [String, Boolean, Number],
  default: ''
}
```

- 结构

```html
<input class="mv-radio__original" type="radio" :name="name" value="label" v-model="model" />
```

- 提供计算属性

```html
computed: { model: { get () { return this.value }, set (value) { this.$emit('input', value) } } },
```

- 控制选中样式

```html
<label class="mv-radio" :class="{'is-checked': model === label}"></label>
```
