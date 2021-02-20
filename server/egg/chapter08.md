# Egg + svg-captcha 实现验证码功能

大致的流程就是：

![](//upload-images.jianshu.io/upload_images/6724368-d5b6e5ecb37c5137.png?imageMogr2/auto-orient/strip|imageView2/2/w/857/format/webp)

验证码实现流程

## router 部分：

```js
module.exports = app => {
  const { router, controller } = app
  router.get('/api/verify', app.controller.base.verify) // 验证码
}
```

## Controller 部分：

```js
const Controller = require('egg').Controller
class BaseController extends Controller {
  async verify() {
    const { ctx } = this
    let captcha = await this.service.tools.captcha() // 服务里面的方法
    ctx.response.type = 'image/svg+xml' // 知道你个返回的类型
    ctx.body = captcha.data // 返回一张图片
  }
}

module.exports = BaseController
```

## Service 部分

```js
const Service = require('egg').Service
const svgCaptcha = require('svg-captcha')

class ToolsService extends Service {
  // 产生验证码
  async captcha() {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 40,
      bacground: '#cc9966'
    })
    this.ctx.session.code = captcha.text
    return captcha
  }
}

module.exports = ToolsService
```
