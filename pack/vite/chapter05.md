# Vite 中 SASS 使用和 JSX 支持

工作中使用 SASS 编写样式也是常见的。SCSS 算是一种预处理器(per-Processors),Vite 对这种预处理器支持只是在最新的浏览器中（比如 Chrome）,所以它推荐你使用原生的 CSS。但有的小伙伴就是想使用 SASS,那就来看看这篇文章吧。

## 安装 SASS 支持

想使用 SASS 需要安装对应的处理，可以使用 npm 或 yarn 进行安装。我这里使用 yarn 进行安装。

```js
yarn add -D sass
```

安装需要等待一会，才会安装完成。你完全可以去冲一杯咖啡。

## 在 App.vue 里边写 sass 样式

安装完 sass 之后，我们打开/src 目录下的 App.vue 文件，先在`<template>`部分加入下面的代码。

```html
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!--加入的代码...start-->
  <h1 class="name">jspang.com</h1>
  <!--加入的代码...end-->
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>
```

然后在`<script>`标签下加入`<style>`标签，便签属性加 lang="scss"。具体代码如下：

```css
<style lang="scss">
  .name{
    color:green;
  }
</style>
```

写完后，打开控制台，输入 yarn dev,来测试一下结果。如果一切正常，应该在页面显示出绿色字体 dmz.com.

## 对 JSX 的支持

Vite 对 JSX 也是可以支持的，JSX 最早应该是学 React 时候接触到的，这里我们看看如何在 Vue3 里进行使用。

直接在 src 目录中，新建一个 App.jsx 文件，写一段支持 JSX 的代码。

```js
function App() {
  return <h1>JSPang.com</h1>
}
export default App
```

再修改 main.js 中的 import 代码，去掉原来对 App.vue 的引用，加入对 App.jsx 的引用就可以了。

```js
import { createApp } from 'vue'
import App from './App.jsx'
import './index.css'

createApp(App).mount('#app')
```

再看一下浏览器，你会发现 JSX 代码也是可以使用的。

你也可以再编写一个子组件，然后进行使用 ，比如在 App.jsx 中，再加入下面的代码。

```js
function Child() {
    return (<p>我是代码仔</p>);
}
}
```

然后再修改上面的代码，引入子组件(`<Child/>`),注意需要在外边加一层标签。这里给出 App.jsx 全部代码，方便你学习。

```js
function App() {
  return (
    <>
      <h1>JSPang.com</h1>
      <Child />
    </>
  )
}
function Child() {
  return <p>我是技术胖</p>
}
export default App
```

写完后，就可以到浏览器中查看结果了。

## 关于 Vite 生成模板 VSCode 中报错的问题

这个是小伙伴问我的一个问题，Vite 生成的 App.vue 这个代码，在 VSCode 标签中，会有红色波浪线的报错，这个如何解决?错误入下图。

<img src="https://newimg.jspang.com/Vite_error1.png"/>

这个问题虽然不影响开发，但是对于强迫症，是不允许 VSCode 上有红波浪线出现的，看到就心烦，看到就不爽。其实这个问题很好解决。只要加一个最外层的标签就可以解决。我这里最外层加了`<div>`标签。

```js
<template>
  <div>
    <img alt='Vue logo' src='./assets/logo.png' />
    <h1 class='name'>jspang.com</h1>
    <HelloWorld msg='Hello Vue 3.0 + Vite' />
  </div>
</template>
```
