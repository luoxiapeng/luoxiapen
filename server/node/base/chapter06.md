# url

## url - 解析 url 模块，多用于获得 get 请求的参数

url 需要先引入再使用

```js
const url = require('url')
// 请求url可以通过req对象获得
const server = http.createServer((req, res) => {
  // 请求地址url
  console.log(req.url)
  res.end()
})
```

## url.parse(urlString\[, parseQueryString\])

```js
// 获取前端发送的get请求的参数
// 第一个参数为url，第二个参数为是否将参数由字符串转换为对象
const urlString = 'localhost:3000?username=admin&password=123'
// 重点看query参数，query参数是前端发送的参数
console.log(url.parse(urlString).query)
// 输出 username=admin&password=123

console.log(url.parse(urlString, true).query)
/* 输出
 * {
 *  username: 'admin',
 *  password: '123'
 * }
 */
```
