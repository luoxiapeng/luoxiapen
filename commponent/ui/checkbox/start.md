# checkbox 组件

## 基本结构

```html
<template>
  <label class="mv-checkbox">
    <span class="mv-checkbox__input">
      <span class="mv-checkbox__inner"></span>
      <input type="checkbox" class="mv-checkbox__original" />
    </span>
    <span class="mv-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
```

样式

```scss
.mv-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .mv-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .mv-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: '';
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .mv-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .mv-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
```

## 选中的样式

```scss
.mv-checkbox.is-checked {
  .mv-checkbox__input {
    .mv-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .mv-checkbox__label {
    color: #409eff;
  }
}
```

## 接收 props 数据

```js
value: {
  type: Boolean,
  default: false
},
name: {
  type: String,
  default: ''
},
label: {
  type: String,
  default: ''
}

```

## 控制 checked 样式

- 控制 label

```html
<span class="mv-checkbox__label">
  <slot></slot>
  <template v-if="!$slots.default">{{label}}</template>
</span>
```

- 提供 model 计算属性

```js
model: {
  get () {
    return this.value
  },
  set (value) {
    this.$emit('input', value)
  }
}

```

- 判断是否选中

```js
<label class="mv-checkbox" :class="{'is-checked': value}">

```
