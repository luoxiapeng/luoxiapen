# 发布到 npm 与 github

## 发布到 github

## 发布到 npm

[https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93](https://cli.vuejs.org/zh/guide/build-targets.html#库)

- 在 scripts 中新增一条 打包命令

```js
"lib": "vue-cli-service build --target lib packages/index.js"

```

- 发布到 npm

修改 package.json 文件

```js
"private": false,
"main": "dist/itcast-ui.umd.min.js",
"author": {
  "name": "胡聪聪"
},

```

增加 ``.npmignore`文件

```js
# 忽略目录
examples/
packages/
public/

# 忽略指定文件
vue.config.js
babel.config.js
*.map

```

- npm 发布

```js
npm login
npm publish

```
