(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{761:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nginx-服务启动、停止、重启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-服务启动、停止、重启"}},[s._v("#")]),s._v(" Nginx 服务启动、停止、重启")]),s._v(" "),t("p",[s._v("经过前 3 节的学习，已经安装好了 nginx，在维护的时候，我们作的最多的操作就是 Nginx 的启动、重启和停止。这节课我们就把 Nginx 的这些最常用操作讲一下。")]),s._v(" "),t("h2",{attrs:{id:"启动-nginx-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-nginx-服务"}},[s._v("#")]),s._v(" 启动 Nginx 服务")]),s._v(" "),t("p",[s._v("默认的情况下，Nginx 是不会自动启动的，需要我们手动进行启动，当然启动 Nginx 的方法也不是单一的。")]),s._v(" "),t("h2",{attrs:{id:"nginx-直接启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-直接启动"}},[s._v("#")]),s._v(" nginx 直接启动")]),s._v(" "),t("p",[s._v("在 CentOS7.4 版本里（低版本是不行的），是可以直接直接使用"),t("code",[s._v("nginx")]),s._v("启动服务的。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("nginx\n")])])]),t("h2",{attrs:{id:"使用-systemctl-命令启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-systemctl-命令启动"}},[s._v("#")]),s._v(" 使用 systemctl 命令启动")]),s._v(" "),t("p",[s._v("还可以使用个 Linux 的命令进行启动，我一般都是采用这种方法进行使用。因为这种方法无论启动什么服务，都是一样的，只是换一下服务的名字（不用增加额外的记忆点）。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("    systemctl start nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service\n")])])]),t("p",[s._v("输入命令后，没有任何提示，那我们如何知道 Nginx 服务已经启动了哪？可以使用 Linux 的组合命令，进行查询服务的运行状况。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("    ps aux "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" grep nginx\n")])])]),t("p",[s._v("如果启动成功会出现如下图片中类似的结果。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://jspang.com/static/upload/20181010/UnbGynSf4ZkthKJDfdxcobjf.png",alt:"alt"}})]),s._v(" "),t("p",[s._v("有这三条记录，说明我们 Nginx 被正常开启了。")]),s._v(" "),t("h2",{attrs:{id:"停止-nginx-服务的四种方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止-nginx-服务的四种方法"}},[s._v("#")]),s._v(" 停止 Nginx 服务的四种方法")]),s._v(" "),t("p",[s._v("停止 Nginx 方法有很多种，可以根据需求采用不一样的方法，我们一个一个说明。")]),s._v(" "),t("ul",[t("li",[s._v("立即停止服务")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("  nginx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s stop\n")])])]),t("p",[s._v("这种方法比较强硬，无论进程是否在工作，都直接停止进程。")]),s._v(" "),t("ul",[t("li",[s._v("从容停止服务")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("  nginx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s quit\n")])])]),t("p",[s._v("这种方法较 stop 相比就比较温和一些了，需要进程完成当前工作后再停止。")]),s._v(" "),t("ul",[t("li",[s._v("killall 方法杀死进程")])]),s._v(" "),t("p",[s._v("这种方法也是比较野蛮的，我们直接杀死进程，但是在上面使用没有效果时，我们用这种方法还是比较好的。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("    killall nginx\n"),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" systemctl 停止\n"),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("`js\n  systemctl stop nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service\n")])])]),t("h2",{attrs:{id:"重启-nginx-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启-nginx-服务"}},[s._v("#")]),s._v(" 重启 Nginx 服务")]),s._v(" "),t("p",[s._v("有时候我们需要重启 Nginx 服务，这时候可以使用下面的命令。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("    systemctl restart nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service\n")])])]),t("h2",{attrs:{id:"重新载入配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重新载入配置文件"}},[s._v("#")]),s._v(" 重新载入配置文件")]),s._v(" "),t("p",[s._v("在重新编写或者修改 Nginx 的配置文件后，都需要作一下重新载入，这时候可以用 Nginx 给的命令。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("    nginx "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s reload\n")])])]),t("h2",{attrs:{id:"查看端口号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看端口号"}},[s._v("#")]),s._v(" 查看端口号")]),s._v(" "),t("p",[s._v("在默认情况下，Nginx 启动后会监听 80 端口，从而提供 HTTP 访问，如果 80 端口已经被占用则会启动失败。我么可以使用"),t("code",[s._v("netstat -tlnp")]),s._v("命令查看端口号的占用情况。")]),s._v(" "),t("p",[s._v("**总结:**这节课的内容虽然简单，但都是我们在工作中经常使用的，希望小伙伴们多多联系，我把课程分的如此细致，一个主要的原因也是希望可以方便在工作中进行查阅。")]),s._v(" "),t("hr")])}),[],!1,null,null,null);t.default=e.exports}}]);