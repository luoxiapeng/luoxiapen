# 封装成 UI 组件库

## 目录调整

- 根目录创建两个文件夹`packages`和`examples`

```js
packages: 用于存放所有的组件
examples: 用于进行测试, 把src改成examples
```

- 把 components 中所有的组件放入到 packages 中

- 把 fonts 放到 packages 中

- 删除原来的 src 目录

## vue.config.js 配置

新增`vue.config.js`配置

```js
const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
```

- 统一导出 packages 中所有的组件

```js
// 统一导出
// 导入颜色选择器组件
import Button from './button'
import Dialog from './dialog'
import Input from './input'
import Checkbox from './checkbox'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'
import CheckboxGroup from './checkbox-group'
import Form from './form'
import FormItem from './form-item'
import './fonts/font.scss'

// 存储组件列表
const components = [Button, Dialog, Input, Checkbox, Radio, RadioGroup, Switch, CheckboxGroup, Form, FormItem]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default {
  install
}
```

## 测试

在 examples 中的 main.js 中进行导入测试

```js
import Vue from 'vue'
import App from './App.vue'

import HeimaUI from '../packages'

Vue.use(HeimaUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
```
