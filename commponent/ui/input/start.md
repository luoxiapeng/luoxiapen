# input 组件

## 参数支持

| 参数名称      | 参数描述                  | 参数类型 | 默认值 |
| ------------- | ------------------------- | -------- | ------ |
| placeholder   | 占位符                    | string   | 无     |
| type          | 文本框类型(text/password) | string   | text   |
| disabled      | 禁用                      | boolean  | false  |
| clearable     | 是否显示清空按钮          | boolean  | false  |
| show-password | 是否显示密码切换按钮      | boolean  | false  |
| name          | name 属性                 | string   | 无     |

## 事件支持

| 事件名称 | 事件描述       |
| -------- | -------------- |
| blur     | 失去焦点事件   |
| change   | 内容改变事件   |
| focus    | 获取的焦点事件 |

## 基本结构

节本结构

```html
<template>
  <div class="mv-input">
    <input type="text" class="mv-input__inner" />
  </div>
</template>
```

样式

```scss
.mv-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .mv-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
  }
}
```

## props 处理 placeholde, type,name

- placeholer

```html
<input type="text" class="mv-input__inner" :placeholder="placeholder" />
```

```js
  props: {
    placeholder: {
      type: String,
      default: ''
    }
  }
```

- type 属性-密码框

```html
<input class="mv-input__inner" :placeholder="placeholder" :type="type" :disabled="disabled" />
```

```js
    type: {
      type: String,
      default: 'text'
    },
```

## 禁用按钮-disabled

结构

```html
<div class="mv-input">
  <input class="mv-input__inner" :class="{'is-disabled': disabled}" :placeholder="placeholder" :type="type" :disabled="disabled" />
</div>
```

js

```js
    disabled: {
      type: Boolean,
      default: false
    }
```

样式

```html
&.is-disabled { background-color: #f5f7fa; border-color: #e4e7ed; color: #c0c4cc; cursor: not-allowed; }
```

## v-model 语法糖

- v-model 语法糖

```js
给普通表单元素元素使用v-model
<input type="text" v-model="mes">
<input v-bind:value="mes"  v-on:input="mes= $event.target.value"/>

给组件使用v-model指令,实质上相当于给组件传递了value属性以及监听了input事件
<mv-input v-model="msg">
等价与
<mv-input v-bind:value="mes"  v-on:input="mes= arguments[0]"/>
```

- html 结构

```html
<div class="mv-input">
  <input class="mv-input__inner" :class="{'is-disabled': disabled}" :placeholder="placeholder" :type="type" :disabled="disabled" :value="value" @input="handleInput" />
</div>
```

js

```js

props: {
  value: [String, Number]
},
methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
```

## clearable 与 show-password 处理

如果给 input 组件传入 clearable 属性，会显示一个清空的按钮，如果传入 show-password，则会显示一个用于切换密码显示的处理

- 基本结构

```html
<span class="mv-input__suffix">
  <i class="mv-input__icon mv-icon-circle-close"></i>
  <i class="mv-input__icon mv-icon-view"></i>
</span>
```

- props 接收

```js
clearable: {
  type: Boolean,
  default: false
},
showPassword: {
  type: Boolean,
  default: false
}
```

- 控制按钮显示和隐藏

```html
<span class="mv-input__suffix">
  <i class="mv-input__icon mv-icon-circle-close" v-if="clearable"></i>
  <i class="mv-input__icon mv-icon-view" v-if="showPassword"></i>
</span>
```

样式

```scss
.mv-input--suffix {
  .mv-input__inner {
    padding-right: 30px;
  }
  .mv-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
```

- 控制`mv-input--suffix`的类名

```html
<div class="mv-input" :class="{'mv-input--suffix': this.clearable || this.showPassword}">
  <span class="mv-input__suffix" v-if="this.clearable || this.showPassword"></span>
</div>
```

- 使用计算属性优化

```js
computed: {
  showSuffix () {
    return this.clearable || this.showPassword
  }
}
```

- 注册事件-清空内容和切换密码显示

```js
    clear () {
      // console.log('123')
      this.$emit('input', '')
    }
```

- 控制密码显示

```js
data () {
  return {
    // 是否显示密码
    passwordVisible: false
  }
},

<input
  class="mv-input__inner"
  :class="{'is-disabled': disabled}"
  :placeholder="placeholder"
  :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
  :name="name"
  :disabled="disabled"
  :value="value"
  @input="handleInput"
  ref="input"
>

handlePasswordVisible () {
  // 切换type类型
  this.passwordVisible = !this.passwordVisible
}
```

## 其他常见事件的支持

```js
    handleFocus (e) {
      this.$emit('focus', e)
    },
    handleBlur (e) {
      this.$emit('blur', e)
    },
    handleChange (e) {
      this.$emit('change', e.target.value)
    }
```
