# Vite 配置文件设置别名

这篇文章主要讲 Vite 配置文件中别名设置的坑。

Vite 的配置文件叫做 vite.config.js,需要建在项目的根目录下。这里边的配置项还是非常多的，配置文件这东西，你看文档就应该能明白，没有什么算法，类似 key-value 值的形式，没什么好讲的。

需要特别说明的就是别名的设置，有点小坑，需要根大家说明白。所以我们单独拿出来讲。

先来演示一下文档中的说法，也就是错误的做法。在 vite.config.js 中写入下面的别名配置。

```js
export default {
  alias: {
    '@': './src'
  }
}
```

然后在 App.vue 文件中，把引用目录修改一下。

```js
import HelloWorld from '@/components/HelloWorld.vue'
import '@/assets/app.css'
```

这个在 Github 上也有很多人提出了这个错误。尤大神已经表态这是一个 Bug，但是他提出了解决方案。方案如下。

现在 vite.config.js 中的别名前后都加一个/线，还需要对 resolve 进行结构，具体代码如下。

```js
const { resolve } = require('path')
export default {
  alias: {
    '/@/': resolve(__dirname, 'src')
  }
}
```

这样写应该可以了吧？其实还是不行的，我们可以用 yarn dev 来测试一下。直接报下面的错误。

```js
[vite] Failed to resolve module import "@/components/HelloWorld.vue". (imported by /@/App.vue)
[vite] Failed to resolve module import "@/assets/app.css". (imported by /@/App.vue)
```

你还需要修改引入方式，在 App.vue 中也需要用配置的别名，即/@/,所以引入的代码如下。

```js
import HelloWorld from '/@/components/HelloWorld.vue'
import '/@/assets/app.css'
```

这样就可以了。你也许会觉的很麻烦，这个算是一个 Bug，我也是掉进坑里一段时间，才爬出来。
