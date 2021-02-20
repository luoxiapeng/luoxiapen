# form 组件

基本结构

```html
<template>
  <div class="mv-form">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'mvForm',
    provide() {
      return {
        Form: this
      }
    },
    props: {
      model: {
        type: Object,
        required: true
      },
      labelWidth: {
        type: String,
        default: '80px'
      }
    }
  }
</script>

<style></style>
```
