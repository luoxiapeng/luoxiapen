# res

## res.setHeader()

```js
// 设置响应头部
const server = http.createServer((req, res) => {
  // 设置内容类型为text/plain，编码方式为utf-8
  res.setHeader('Content-Type', 'text/plain; charset=utf8')
  // 返回响应并设置返回的内容
  res.end('Hello World!')
})
```

![](https://user-gold-cdn.xitu.io/2019/9/7/16d0b2fc0ad5ec6d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## res.writeHead()

```js
// 设置响应状态码
const server = http.createServer((req, res) => {
  // 设置响应状态码为404
  res.writeHead(404)
  // 返回响应并设置返回的内容
  res.end('Hello World!')
})
```

![](https://user-gold-cdn.xitu.io/2019/9/7/16d0b349365de8b6?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
