## egg-mysql 模块安装

如果要在 egg.js 中使用 mysql 数据库，那需要先进行安装 egg-mysql 模块，这个模块你可以使用 npm 或者 yarn 来进行安装。

npm 安装命令如下:

```shell
npm i egg-mysql --save
```

yarn 安装命令如下:

```shell
yarn add egg-mysql
```

这个的等待大概要 1 分钟，具体要根据你自己的网速确定，请耐心等待安装完成。安装完成可以到 package.json 中看一下，是否有这个文件。我安装的版本是 3.0.0 版本。你学的时候，这个版本可能所有变化。

#### 进行插件配置

在安装完成以后，还不能正常使用，egg.js 要求我们对于外部模块在 plugin.js 中进行配置。配置方法如下：

文件/server/config/plugin.js

```js
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
}
```

这个配置完，也就说明 egg.js 可以支持 mysql 数据库的使用和连接了。

全部代码如下:

```js
'use strict';

//配置插件
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
}
```

以后还会多次配置这个文件，所以我们这里要对这个 config.js 有所印象，他的左右就是配置 egg.js 项目的。

#### 数据库连接配置

这个配置时，你要先确认你已经有一台安装 mysql 的服务器或者是主机，当然你也可以在自己的开发机上进行安装，因为我使用的 php Study 这个集成开发环境（作 php 用的）。所以我的机器上是安装的。

打开/config/config.default.js 文件，作下面的配置（这段配置你可以在https://www.npmjs.com/ 网址中找到这个配置）

```js
exports.mysql = {
  // database configuration
  client: {
    // host
    host: 'mysql.com',
    // port
    port: '3306',
    // username
    user: 'test_user',
    // password
    password: 'test_password',
    // database
    database: 'test',
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};

```

这时候你需要根据你的环境，修改对应的参数，主要的就是 host、user、password 和 database（每个数据库配置不同，所以这个每个人都不同）。 我的是这样的，但是你不一定完全跟我一样。

```js
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
      password: '12345678',
      // database
      database: 'react_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
```

这个配置完成后，就可以连接到数据库了。

# 创建数据库

现在我们还没有数据库，所以需要先建立数据库，直接使用 PhP Study 里的 SQL_Front5.3 来管理数据，如果你没有安装需要安装一下，安装完成后点后面的管理按钮，就可以管理了。（这个过程看视频吧）

1.输入你数据库的用户名和密码，然后点击进入。 2. 进入后新建一个数据库 react_blog，这个名字你可以自己起 3. 新建一个表 blog_content,字段就是 title、type、introduce 和 content 4. 随便写条数据进去，这个自由发挥吧 5. 这样数据库的准备就写好了，接下来需要验证一下，数据库是否已经连接上了。

## 使用 get 进行表的查询

打开上节课写的/app/controller/defalut/home.js 文件，改写 index 方法。

```js
'use strict';

const Controller = require('egg').Controller

class HomeController extends Controller{

    async index(){
        //获取用户表的数据

        let result = await this.app.mysql.get("blog_content",{})
        console.log(result)
        this.ctx.body=result
    }


}

module.exports = HomeController
```

改写后，在浏览器中输入http://127.0.0.1:7001/default/index.如果能在控制台打印出结果和页面中显示结果，说明数据库已经连接成功了。这节课主要讲解了egg.js中mysql数据的连接方式，下节课我们简单的介绍一下数据库的增删改查操作。
