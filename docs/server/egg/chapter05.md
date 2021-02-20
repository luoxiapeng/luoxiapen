# config 目录修改配置

## config.default.js

```js
/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1574127028894_396'

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }
  // 配置数据库
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '123456',
      // database
      database: 'react_blog'
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false
  }
  // 配置所有域名允许跨域请求
  config.security = {
    csrf: { enable: false },
    domainWhiteList: ['*']
  }
  // 请求方法可以进行跨域访问
  config.cors = {
    origin: 'http://localhost:3010', // 只允许这个域进行访问接口
    credentials: true, // 开启认证
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  }
  // 修改config/config.default.js
  config.static = {
    prefix: '/',
    dir: process.cwd() + '/public'
  }
  // 修改config/config.default.js
  config.rundir = process.cwd() + '/run'

  return {
    ...config,
    ...userConfig
  }
}
```

## config.prod.js

```js
/* eslint valid-jsdoc: "off" */

'use strict'

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1574127028894_396'

  // add your middleware config here
  config.middleware = []

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  }
  // 配置数据库
  config.mysql = {
    // database configuration
    client: {
      // host
      host: '172.21.180.111',
      // port
      port: '3306',
      // username
      user: 'react_blog',
      // password
      password: 'yudJZZCAUi9lHHa5mlP3',
      // database
      database: 'react_blog'
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false
  }
  // 配置所有域名允许跨域请求
  config.security = {
    csrf: { enable: false },
    domainWhiteList: ['*']
  }
  // 请求方法可以进行跨域访问
  config.cors = {
    origin: 'http://admin.zemys.top',
    credentials: true, // 允许Cook可以跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  }
  // 修改config/config.default.js
  config.static = {
    prefix: '/',
    dir: process.cwd() + '/public'
  }
  // 修改config/config.default.js
  config.rundir = process.cwd() + '/run'

  return {
    ...config,
    ...userConfig
  }
}
```

## package.json

```js
"scripts": {
	"start":"egg-scripts start --daemon --port 8081",
	"dev":"egg-bin dev --port 8081",
	"test":"egg-scripts start --env=test --daemon --port 8081"
}
```

使用不同的启动方式调用不同的`config`文件（`config.{env}.js`）。
注：
`egg-scripts start` 默认以`prod`即生产模式启动，官方文档有提到。调用`config.prod.js`文件
设置`env`参数可切换环境。`–env=test`即为测试环境，调用`config.test.js`文件
