# Vite 对 TypeScript、CSS 和 JSON 的支持

## Vite 中如何使用 TypeScript

其实在 Vite 中使用 TypeScript 非常简单，只要在`<script>`标签中加入 lang=ts 就可以了。

```js
<script lang='ts'>//....any</script>
```

打开根目录下/src 文件夹的 App.vue 文件，在`<script>`标签中加入 TypeScript 的支持。然后声明一个 TypeScript 中显示声明的变量 jspang,在 mounted()声明周期钩子函数中进行输出变量，如果能输出，说明现在已经可以支持 TypeScript 了

```js
<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
const jspang:string = 'jspang.com'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted(){
    console.log(jspang)
  }
}
</script>
```

写完后，打开终端 ctrl+~打开终端，输入 yarn dev 或 npm run dev 进行查看。打开网页浏览器的 console(控制台)，看输出结果，能正常输出，证明现在已经可以使用 TypeScript 了。

## 支持 CSS 直接引入

Vite 是支持 CSS 直接引入的，也就是说我们在.vue 文件中，可以直接使用 import 进行引入。比如下面这种形式。

```js
import './assets/app.css'
```

我们在这里作一个小例子，把页面背景色编程红色。在 assets 文件夹中新建一个 app.css 的文件，然后写入代码。

```css
body {
  background-color: red !important;
}
```

要记得加入!important，为了防止 css 冲突。写完后打开 App.vue 直接使用 import 引入 CSS，就可以生效的。

```js
import './assets/app.css'
```

如果一切正常，浏览器会直接热更新，把页面的背景颜色变成红色。

## 支持 JSON 文件直接引入

Vite 不仅支持样式文件（css）,还支持 JSON 文件的引入。方法和引入 CSS 一样。

在 assets 里，新建一个 jspang.json 文件，然后写入一些代码，什么代码都可以，只要符合 JSON 格式就可以。我写的代码如下。

```js
{
    "name": "代码仔",
    "website": "dmz.com"
}
```

然后直接使用 import 进行引入。

```js
import data from './assets/jspang.json'
//....
export default {
  name: 'App',
  //...
  mounted() {
    console.log(data.name)
  }
}
```
