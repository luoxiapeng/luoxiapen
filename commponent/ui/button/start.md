# button 组件

## 前置知识

```js
组件通讯
组件插槽
props校验
```

## 参数支持

| 参数名   | 参数描述                                              | 参数类型 | 默认值  |
| -------- | ----------------------------------------------------- | -------- | ------- |
| type     | 按钮类型(primary / success / warning / danger / info) | string   | default |
| plain    | 是否是朴素按钮                                        | boolean  | false   |
| round    | 是否是圆角按钮                                        | boolean  | false   |
| circle   | 是否是圆形按钮                                        | boolean  | false   |
| disabled | 是否禁用按钮                                          | boolean  | false   |
| icon     | 图标类名                                              | string   | 无      |

## 事件支持

| 事件名 | 事件描述 |
| ------ | -------- |
| click  | 点击事件 |

## 基本结构

```html
<template>
  <button class="mv-button">
    <span><slot></slot></span>
  </button>
</template>
```

样式

```scss
.mv-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
```

## type 属性

结构

```html
<button class="mv-button" :class="[`mv-button--${type}`]"></button>
```

js

```js
props: {
  type: {
    type: String,
    default: 'default'
  }
},
```

样式

```scss
.mv-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.mv-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.mv-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.mv-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.mv-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}
```

## plain 属性

```scss
// 朴素的按钮
.mv-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.mv-button--primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.mv-button--success.is-plain {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.mv-button--info.is-plain {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.mv-button--warning.is-plain {
  color: #e6a23c;
  background: #fdf6ec;
  border-color: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.mv-button--danger.is-plain {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
```

## round 属性

```scss
.mv-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
```

## circle 属性

```scss
// 原形按钮
.mv-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
```

## icon 的支持

在 main.js 中引入字体图标文件

```js
import './assets/fonts/font.scss'
```

结构

```html
<i :class="icon" v-if="icon"></i> <slot></slot>
```

js

```js
icon: {
  type: String,
  default: ''
}
```

样式

```scss
// 按钮后的文本
.mv-button [class*='mv-icon-'] + span {
  margin-left: 5px;
}
```

## 禁用按钮

- props

```js
disabled: Boolean
```

- 结构

```js
  <button class="mv-button" :class="[`mv-button--${type}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled
    }]"
    :disabled="disabled"
    @click="handleClick"
  >
```

- 样式

```scss
// 禁用
.mv-button.is-disabled,
.mv-button.is-disabled:focus,
.mv-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.mv-button.is-disabled,
.mv-button.is-disabled:focus,
.mv-button.is-disabled:hover {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.mv-button--primary.is-disabled,
.mv-button--primary.is-disabled:active,
.mv-button--primary.is-disabled:focus,
.mv-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.mv-button--success.is-disabled,
.mv-button--success.is-disabled:active,
.mv-button--success.is-disabled:focus,
.mv-button--success.is-disabled:hover {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.mv-button--info.is-disabled,
.mv-button--info.is-disabled:active,
.mv-button--info.is-disabled:focus,
.mv-button--info.is-disabled:hover {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.mv-button--warning.is-disabled,
.mv-button--warning.is-disabled:active,
.mv-button--warning.is-disabled:focus,
.mv-button--warning.is-disabled:hover {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.mv-button--danger.is-disabled,
.mv-button--danger.is-disabled:active,
.mv-button--danger.is-disabled:focus,
.mv-button--danger.is-disabled:hover {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}
```

## click 事件支持

结构

```html
@click="handleClick"
```

js

```js
methods: {
  handleClick (e) {
    this.$emit('click', e)
  }
}
```
