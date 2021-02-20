# querystring

## querystring - 解析 url 模块，多用于获得 post 请求参数

```js

url 需要先引入再使用

    const querystring = require('querystring')
```

## querystring.parse(str)

```js
// 获得前端发送的post请求的参数
const paramsStr = 'username=admin&password=123'
console.log(querystring.parse(paramsStr))
/* 输出
 * {
 *  username: 'admin',
 *  password: '123'
 * }
 */
```
