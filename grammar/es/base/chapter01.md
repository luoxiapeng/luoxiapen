# 开发环境搭建

工欲善其事，必先利其器。所以我们第 1 节就是搭建一个基本的 ES6 开发环境。现在的 Chrome 浏览器已经支持 ES6 了，但是有些低版本的浏览器还是不支持 ES6 的语法，这就需要我们把 ES6 的语法自动的转变成 ES5 的语法。如果你听过我 Vue 课程的话，应该知道 Webpack 是有自动编译转换能力的，除了 Webpack 自动编译，我们还可以用 Babel 来完成。这节课我们就使用 Babel 把 ES6 编译成 ES5。

建立工程目录：先建立一个项目的工程目录，并在目录下边建立两个文件夹：src 和 dist

- src：书写 ES6 代码的文件夹，写的 js 程序都放在这里。
- dist：利用 Babel 编译成的 ES5 代码的文件夹，在 HTML 页面需要引入的时这里的 js 文件。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title></title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="./dist/index.js"></script>
  </head>
  <body>
    Hello ECMA Script 6
  </body>
</html>
```

需要注意的是在引入 js 文件时，引入的是 dist 目录下的文件。

```js
<script src='./dist/index.js'></script>
```

## 编写 index.js

在 src 目录下，新建 index.js 文件。这个文件很简单，我们只作一个 a 变量的声明，并用 console.log()打印出来。

```js
let a = 1
console.log(a)
```

我们用了 let 声明，这里 let 是 ES6 的一种声明方式，接下来我们需要把这个 ES6 的语法文件自动编程成 ES5 的语法文件。
