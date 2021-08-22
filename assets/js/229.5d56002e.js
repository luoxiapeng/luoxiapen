(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{589:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nginx-基本配置文件详讲"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-基本配置文件详讲"}},[t._v("#")]),t._v(" Nginx 基本配置文件详讲")]),t._v(" "),a("p",[t._v("现在 Nginx 已经顺利安装完成了，之后的任务就是要学习配置和使用它了。个人是比较享受这个过程的，这就好像有一匹充满野性的汗血宝马，你现在要做的就是驯服它。无论是结果和 过程都那么美好。")]),t._v(" "),a("h2",{attrs:{id:"查看-nginx-的安装目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-nginx-的安装目录"}},[t._v("#")]),t._v(" 查看 Nginx 的安装目录")]),t._v(" "),a("p",[t._v("在使用"),a("code",[t._v("yum")]),t._v("安装完 Nginx 后，需要知道系统中多了那些文件，它们都安装到了那里。可以使用下面的命令进行查看：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    rpm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ql nginx\n")])])]),a("p",[t._v("rpm 是 linux 的 rpm 包管理工具，-q 代表询问模式，-l 代表返回列表，这样我们就可以找到 nginx 的所有安装位置了。")]),t._v(" "),a("p",[t._v("列表列出的内容还是比较多的，我们尽量给大家进行讲解，我们这节先来看看重要的文件。")]),t._v(" "),a("h2",{attrs:{id:"nginx-conf-文件解读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-conf-文件解读"}},[t._v("#")]),t._v(" nginx.conf 文件解读")]),t._v(" "),a("p",[t._v("nginx.conf 文件是 Nginx 总配置文件，在我们搭建服务器时经常调整的文件。")]),t._v(" "),a("p",[t._v("进入 etc/nginx 目录下，然后用 vim 进行打开")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx\n    vim nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("conf\n")])])]),a("p",[t._v("下面是文件的详细注释，我几乎把每一句都进行了注释，你可以根据你的需要来进行配置。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    运行用户，默认即是nginx，可以不进行设置\n    user  nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Nginx进程，一般设置为和"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CPU")]),t._v("核数一样\n    worker_processes  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    错误日志存放目录\n    error_log  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log warn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    #进程pid存放位置\n    pid        "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("run"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n    events "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        worker_connections  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 单个后台进程的最大并发数\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n    http "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        include       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   #文件扩展名与类型映射表\n        default_type  application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("octet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  #默认文件类型\n        #设置日志模式\n        log_format  main  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$remote_addr - $remote_user [$time_local] \"$request\" '")]),t._v("\n                          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$status $body_bytes_sent \"$http_referer\" '")]),t._v("\n                          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'"$http_user_agent" "$http_x_forwarded_for"\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        access_log  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("access"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log  main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   #nginx访问日志存放位置\n\n        sendfile        on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   #开启高效传输模式\n        #tcp_nopush     on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    #减少网络报文段的数量\n\n        keepalive_timeout  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  #保持连接的时间，也叫超时时间\n\n        #gzip  on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  #开启gzip压缩\n\n        include "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*.conf; #包含的子配置项位置和文件\n")])])])]),a("p",[a("strong",[t._v("default.conf 配置项讲解")]),t._v(" 我们看到最后有一个子文件的配置项，那我们打开这个 include 子文件配置项看一下里边都有些什么内容。")]),t._v(" "),a("p",[t._v("进入 conf.d 目录，然后使用"),a("code",[t._v("vim default.conf")]),t._v("进行查看。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   #配置监听端口\n        server_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//配置域名")]),t._v("\n\n        #charset koi8"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        #access_log  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("access"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log  main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     #服务默认启动目录\n            index  index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    #默认访问文件\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        #error_page  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404.")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   # 配置"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v("页面\n\n        # redirect server error pages to the "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" page "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n        #\n        error_page   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   #错误状态码的显示页面，配置后需要重启\n        location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        # proxy the "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PHP")]),t._v(" scripts to Apache listening on "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n        #\n        #location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        #    proxy_pass   http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        #"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        # pass the "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PHP")]),t._v(" scripts to FastCGI server listening on "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v("\n        #\n        #location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" \\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        #    root           html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        #    fastcgi_pass   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        #    fastcgi_index  index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        #    fastcgi_param  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SCRIPT_FILENAME")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("scripts$fastcgi_script_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        #    include        fastcgi_params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        #"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        # deny access to "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htaccess files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" Apache's document root\n        # concurs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" nginx's one\n        #\n        #location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ht "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        #    deny  all"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        #"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("明白了这些配置项，我们知道我们的服务目录放在了"),a("code",[t._v("/usr/share/nginx/html")]),t._v("下，可以使用命令进入看一下目录下的文件。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" / usr / share / nginx / html\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\n")])])]),a("p",[t._v("可以看到目录下面有两个文件，50x.html 和 index.html。我们可以使用 vim 进行编辑。")]),t._v(" "),a("p",[t._v("学到这里，其实可以预想到，我们的 nginx 服务器已经可以为 html 提供服务器了。我们可以打开浏览器，访问 ip 地址试一试。")]),t._v(" "),a("h2",{attrs:{id:"阿里云的安全组配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里云的安全组配置"}},[t._v("#")]),t._v(" 阿里云的安全组配置")]),t._v(" "),a("p",[t._v("如果你使用的是阿里云，记得到 ECS 实例一下打开端口。")]),t._v(" "),a("p",[t._v("步骤如下：")]),t._v(" "),a("ol",[a("li",[t._v("进入阿里云控制台，并找到 ECS 实例。")]),t._v(" "),a("li",[t._v("点击实例后边的“更多”")]),t._v(" "),a("li",[t._v("点击“网络和安全组” ，再点击“安全组配置”")]),t._v(" "),a("li",[t._v("右上角添加“安全组配置”")]),t._v(" "),a("li",[t._v("进行 80 端口的设置，具体设置如图就好。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://jspang.com/static/upload/20181009/N3bF8FMGxljMydjEdTztVw7g.png",alt:"alt"}})]),t._v(" "),a("p",[t._v("到这里我们就可以浏览到程序的页面了。本节就到这里，看到如下图片页面，说明你都配置成功了。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://jspang.com/static/upload/20181009/J_qLKrvR7WHBcmCbWauHKK78.png",alt:"alt"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);