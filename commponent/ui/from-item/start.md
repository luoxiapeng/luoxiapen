# form-item 组件

基本结构

```html
<template>
  <div class="mv-form-item">
    <label class="mv-form-item__label" :style="labelStyle">{{label}}</label>
    <div class="mv-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mvFormItem',
    props: {
      label: {
        type: String,
        default: ''
      }
    },
    inject: ['Form'],
    computed: {
      labelStyle() {
        return {
          width: this.Form.labelWidth
        }
      }
    }
  }
</script>

<style lang="scss">
  .mv-form-item {
    margin-bottom: 25px;
    .mv-form-item__label {
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .mv-form-item__content {
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidden;
    }
  }
</style>
```
