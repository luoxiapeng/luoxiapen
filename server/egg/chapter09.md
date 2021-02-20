# Egg 配置白名单

## 安装

```js
  yarn add egg-origin
```

## 中间件 middleware

origin.js

```js
/**
   【自定义允许跨域】：Access-Control-Allow-Origin
 */
'use strict'

module.exports = options => {
  const { whiteList } = options
  /**
   * 如果传入的不是数组，直接抛出错误
   *  */
  if (!Array.isArray(whiteList)) {
    throw Error('---------跨域白名单必须设置为数组----------')
  }

  return async function setOrigin(ctx, next) {
    // 当前访问的域名
    const { origin } = ctx.request.header
    // 如果设置成 '*'，就给访问的域名设置允许跨域
    if (whiteList.indexOf('*') > -1) {
      ctx.response.set('Access-Control-Allow-Origin', origin)
    } else if (whiteList.indexOf(origin) > -1) {
      ctx.response.set('Access-Control-Allow-Origin', origin)
    }
    await next()
  }
}
```

配置 config：

config.default.js

```js
// 请求方法可以进行跨域访问
config.cors = {
  origin: 'http://localhost:3020', // 只允许这个域进行访问接口
  credentials: true, // 开启认证
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
}
//配置白名单，只要在数组内都可以访问
config.origin = {
  whiteList: ['http://localhost:3010', 'http://localhost:3020']
}
```
