# 属性及方法

## 全局属性及方法

### \_\_dirname

```js
// 当前文件所在的目录的路径
console.log(__dirname)
// 输出 E:\demo\node
```

### \_\_filename

```js
// 当前文件的路径
console.log(__filename)
// 输出 E:\demo\node\node\global.js
```

## http - 操作网络请求

```js

http 模块需要先引入再使用

    const http = require('http')
```

### 创建一个服务器并监听一个端口

```js
// 创建一个http server对象，用于监听某个端口，制作一个服务器
const server = http.createServer((req, res) => {
  // 返回响应并设置返回的内容
  res.end('Hello World!')
})
// 监听3000端口
server.listen(3000)
// 此时在浏览器中访问localhost:3000即可看到返回的内容
```

![](https://user-gold-cdn.xitu.io/2019/9/7/16d0b24d54125ff5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### http.createServer 参数中的 req 对象

req（request）对象是 http 的请求对象，是 http.IncomingMessage 的实例，我们可以在 req 对象中获得请求头部，请求体中的参数等信息。

### http.createServer 参数中的 res 对象

res（response）对象是 http 的响应对象，是 http.ServerResoponse 的实例，我们可以通过 res 的方法设置响应信息。

#### res.write()

```js
// 写入响应内容
const server = http.createServer((req, res) => {
  // 设置返回的内容
  res.write('Hello World!')
  // 返回响应
  res.end()
})
```

![](https://user-gold-cdn.xitu.io/2019/9/7/16d0b24d54125ff5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
