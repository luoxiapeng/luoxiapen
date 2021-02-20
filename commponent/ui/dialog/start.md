# dialog 组件

## 前置知识

```js
vue过渡与动画
sync修饰符
具名插槽与v - slot指令
```

## 参数支持

| 参数名  | 参数描述                            | 参数类型 | 默认值 |
| ------- | ----------------------------------- | -------- | ------ |
| title   | 对话框标题                          | string   | 提示   |
| width   | 宽度                                | string   | 50%    |
| top     | 与顶部的距离                        | string   | 15vh   |
| visible | 是否显示 dialog（支持 sync 修饰符） | boolean  | false  |

## 事件支持

| 事件名 | 事件描述         |
| ------ | ---------------- |
| opened | 模态框显示的事件 |
| closed | 模态框关闭的事件 |

## 插槽说明

| 插槽名称 | 插槽描述            |
| -------- | ------------------- |
| default  | dialog 的内容       |
| title    | dialog 的标题       |
| footer   | dialog 的底部操作区 |

## 基本结构

结构

```html
<template>
  <div class="mv-dialog__wrapper">
    <div class="mv-dialog">
      <div class="mv-dialog__header">
        <span class="mv-dialog__title">提示</span>
        <button class="mv-dialog__headerbtn">
          <i class="mv-icon-close"></i>
        </button>
      </div>
      <div class="mv-dialog__body">
        <span>这是一段信息</span>
      </div>
      <div class="mv-dialog__footer">
        <mv-button>取消</mv-button>
        <mv-button type="primary">确定</mv-button>
      </div>
    </div>
  </div>
</template>
```

样式

```scss
.mv-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);

  .mv-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &__header {
      padding: 20px 20px 10px;
      .mv-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .mv-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }

    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .mv-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
```

## title 属性

> title 属性既支持传入 title 属性，也只是传入 title 插槽

结构

```html
<slot name="title">
  <span class="mv-dialog__title">{{title}}</span>
</slot>
```

js

```js
props: {
  title: {
    type: String,
    default: '提示'
  }
}
```

## width 属性与 top 属性

结构

```html
<div class="mv-dialog" :style="style"></div>
```

js

```js
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      tpye: String,
      default: '15vh'
    }
  },
  computed: {
    style () {
      return {
        width: this.width,
        marginTop: this.top
      }
    }
  }
```

## 内容插槽

```html
<div class="mv-dialog__body">
  <!-- 默认插槽 -->
  <slot></slot>
</div>
```

## 底部插槽

```html
<div class="mv-dialog__footer" v-if="$slots.footer">
  <slot name="footer"></slot>
</div>
```

## 控制显示与隐藏

结构

```html
<div class="mv-dialog__wrapper" v-show="visible"></div>
```

点击遮罩层关闭

```html
<div class="mv-dialog__wrapper" v-show="visible" @click.self="handleClose"></div>
```

点击关闭按钮关闭

```html
<button class="mv-dialog__headerbtn" @click="handleClose"></button>
```

关闭处理

```js
handleClose () {
this.$emit('update:visible', false)
}
```

## 动画处理

结构

```html
<transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave"></transition>
```

样式

```scss
.dialog-fade-enter-active {
  animation: dialog-fade-in 0.4s;
}

.dialog-fade-leave-active {
  animation: dialog-fade-out 0.4s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
```

js

```js
afterEnter () {
  this.$emit('opened')
},
afterLeave () {
  this.$emit('closed')
}
```
