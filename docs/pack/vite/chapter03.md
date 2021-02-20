# Vite 搭建 React 开发环境

Vite 开发的初中虽然是为了搭配 Vue3.x 的，但是它也是可以支持其他框架的。比如工作中经常使用的 react。这节就简单说说如何使用 vite 初始化 React 项目。

## 搭建 React 项目

这里有个小坑，就是你要自己手动先建立好目录，比如在 D:/Code/目录下，新创建一个文件夹，比如叫做 React-vite。

我们这里使用 VSCode 打开项目目录，然后打开 VSCode 的终端，输出下面的命令。

```js
npm init vite-app --template react
npm install
```

等待项目的依赖包安装完成后，就可以使用 npm run dev 来预览项目了。其实也非常简单。小伙伴遇到的坑就是要先建立目录，然后进入目录再执行 npm init 命令。
