# JsBridge App 与 H5 之间的通讯

近些年，移动端普及化越来越高，开发过程中选用 Native 还是 H5 一直是热门话题。Native 和 H5 都有着各自的优缺点，为了满足业务的需要，公司实际项目的开发过程中往往会融合两者进行 Hybrid 开发。Native 和 H5 分处两地，看起来无法联系，那么如何才能让双方协同实现功能呢？

这时我们想到了 Codova ，Codova 提供了一组与设备相关的 API，是早期 JS 调用原生代码来实现原生功能的常用方案。不过 JSBridge 真正在国内广泛应用是由于移动互联网的盛行。

JSBridge 是一种 JS 实现的 Bridge，连接着桥两端的 Native 和 H5。它在 APP 内方便地让 Native 调用 JS，JS 调用 Native ，是双向通信的通道。JSBridge 主要提供了 JS 调用 Native 代码的能力，实现原生功能如查看本地相册、打开摄像头、指纹支付等。

## JSBridge 的双向通信原理

- JS 调用 Native

JS 调用 Native 的实现方式较多，主要有拦截 URL Scheme 、重写 prompt 、注入 API 等方法。

拦截 URL Scheme
Android 和 iOS 都可以通过拦截 URL Scheme 并解析 scheme 来决定是否进行对应的 Native 代码逻辑处理。
