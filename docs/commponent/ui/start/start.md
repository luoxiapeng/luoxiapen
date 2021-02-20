# 基本介绍

- 涉及知识点

```js
vue基础语法
组件基本语法
组件通讯(sync, provide, inject)
插槽的使用
props校验
过渡与动画处理
计算属性与监听属性
v - model语法糖
vue插件机制
npm发布
```

- 组件库

```js
掌握组件封装的语法和技巧
学会造轮子，了解element-ui组件库的实现原理
搭建和积累自己的组件库。
```

- 学习前提

```
属于vue的进阶课程，所以要求
1. 有一定的vue基础，懂vue的基本语法
2. 熟悉ES6的一些常见语法
3. 对vue感兴趣。
```

## 效果演示

- 初始化 vue 项目

```
vue create demo
```

- 安装组件库

```js
yarn add mview-ui
```

- 全局导入

```js
import MviewUI from 'mview-ui'
import 'mview-ui/lib/mview-ui.css'

Vue.use(MviewUI)
```

- 使用组件

```html
<template>
  <div id="app">
    <mv-button type="success" @click="visible=true">显示登录框</mv-button>
    <mv-dialog title="用户登录" :visible.sync="visible" width="30%">
      <mv-form :model="model" label-width="80px">
        <mv-form-item label="用户名">
          <mv-input v-model="model.username" placeholder="请输入用户名" clearable></mv-input>
        </mv-form-item>
        <mv-form-item label="用户密码">
          <mv-input v-model="model.password" placeholder="请输入用户密码" show-password></mv-input>
        </mv-form-item>
        <mv-form-item label="即时配送">
          <mv-switch v-model="model.soon" active-color="green" inactive-color="red"></mv-switch>
        </mv-form-item>
        <mv-form-item label="爱好">
          <mv-checkbox-group v-model="model.hobby">
            <mv-checkbox label="篮球"></mv-checkbox>
            <mv-checkbox label="足球"></mv-checkbox>
            <mv-checkbox label="乒乓球"></mv-checkbox>
          </mv-checkbox-group>
        </mv-form-item>
        <mv-form-item label="性别">
          <mv-radio-group v-model="model.gender">
            <mv-radio label="1">男</mv-radio>
            <mv-radio label="0">女</mv-radio>
          </mv-radio-group>
        </mv-form-item>
      </mv-form>
      <template v-slot:footer>
        <mv-button type="primary" @click="login">登录</mv-button>
        <mv-button @click="visible=false">取消</mv-button>
      </template>
    </mv-dialog>
  </div>
</template>
```
