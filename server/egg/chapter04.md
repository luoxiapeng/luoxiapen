# 解决 egg.js 的跨域问题

## 安装 egg-cors

`egg-cors`模块是专门用来解决 egg.js 跨域问题的，只要简单的配置就可以完成跨域的设置，但是跨域一定要谨慎设置，很多安全问题，都是通过跨域进行攻击的。

安装我们使用`yarn add`进行安装，命令如下：

```shell
yarn add egg-cors
```

安装时间根据自己的网络状况不同，有所不同。我用了大概 10 秒钟左右。

## 配置 config/plugin.js 文件

在安装完成后需要对/service/config/plugin.js 文件进行修改，加入 egg-cors 模块即可。

```shell
exports.cors: {
    enable: true,
    package: 'egg-cors'
}
```

## 配置 config.default.js

在配置完成 plugin.js 文件以后，还需要设置 config.default.js 文件。这个文件主要设置的是允许什么域名和请求方法可以进行跨域访问。配置代码如下。

```js
config.security = {
  csrf: {
    enable: false
  },
  domainWhiteList: ['*']
}
config.cors = {
  origin: '*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
}
```

如果你只想让 http://localhost:3000 来进行接口方案，就可以设置成下面的代码。

```js
config.security = {
  csrf: { enable: false },
  domainWhiteList: ['*']
}
config.cors = {
  origin: 'http://localhost:3000', //只允许这个域进行访问接口
  credentials: true, // 开启认证
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
}
```

设置完成后，就可以在浏览器中进行预览了，如果能正常访问，说明跨域访问已经设置成功了。
