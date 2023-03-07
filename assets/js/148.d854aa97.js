(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{435:function(v,_,o){"use strict";o.r(_);var l=o(1),t=Object(l.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"垃圾回收"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[v._v("#")]),v._v(" 垃圾回收")]),v._v(" "),_("p",[v._v("垃圾数据\n从“GC Roots”对象出发，遍历 GC Root 中的所有对象，如果通过 GC Roots 没有遍历到的对象，则这些对象便是垃圾数据。V8 会有专门的垃圾回收器来回收这些垃圾数据。")]),v._v(" "),_("p",[v._v("##垃圾回收算法\n垃圾回收大致可以分为以下几个步骤：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("第一步，通过 GC Root 标记空间中活动对象和非活动对象。目前 V8 采用的可访问性（reachability）算法来判断堆中的对象是否是活动对象。具体地讲，这个算法是将一些 GC Root 作为初始存活的对象的集合，从 GC Roots 对象出发，遍历 GC Root 中的所有对象：")])]),v._v(" "),_("li",[_("p",[v._v("全局的 window 对象（位于每个 iframe 中）；")])]),v._v(" "),_("li",[_("p",[v._v("文档 DOM 树，由可以通过遍历文档到达的所有原生 DOM 节点组成；\n存放栈上变量。")])]),v._v(" "),_("li",[_("p",[v._v("通过 GC Root 遍历到的对象，我们就认为该对象是可访问的（reachable），那么必须保证这些对象应该在内存中保留，我们也称可访问的对象为活动对象；")])]),v._v(" "),_("li",[_("p",[v._v("通过 GC Roots 没有遍历到的对象，则是不可访问的（unreachable），那么这些不可访问的对象就可能被回收，我们称不可访问的对象为非活动对象。")])]),v._v(" "),_("li",[_("p",[v._v("在浏览器环境中，GC Root 有很多，通常包括了以下几种 (但是不止于这几种)：")]),v._v(" "),_("ul",[_("li",[v._v("第二步，回收非活动对象所占据的内存。其实就是在所有的标记完成之后，统一清理内存中所有被标记为可回收的对象。")]),v._v(" "),_("li",[v._v("第三步，做内存整理。一般来说，频繁回收对象后，内存中就会存在大量不连续空间，我们把这些不连续的内存空间称为内存碎片。当内存中出现了大量的内存碎片之后，如果需要分配较大的连续内存时，就有可能出现内存不足的情况，所以最后一步需要整理这些内存碎片。但这步其实是可选的，因为有的垃圾回收器不会产生内存碎片(比如副垃圾回收器)。\n##垃圾回收\nV8 依据代际假说，将堆内存划分为新生代和老生代两个区域，新生代中存放的是生存时间短的对象，老生代中存放生存时间久的对象。代际假说有两个特点：")])])]),v._v(" "),_("li",[_("p",[v._v("第一个是大部分对象都是“朝生夕死”的，也就是说大部分对象在内存中存活的时间很短，比如函数内部声明的变量，或者块级作用域中的变量，当函数或者代码块执行结束时，作用域中定义的变量就会被销毁。因此这一类对象一经分配内存，很快就变得不可访问；")])]),v._v(" "),_("li",[_("p",[v._v("第二个是不死的对象，会活得更久，比如全局的 window、DOM、Web API 等对象。")])]),v._v(" "),_("li",[_("p",[v._v("为了提升垃圾回收的效率，V8 设置了两个垃圾回收器，主垃圾回收器和副垃圾回收器。")])]),v._v(" "),_("li",[_("p",[v._v("主垃圾回收器主要负责老生代中的垃圾回收。除了新生代中晋升的对象，一些大的对象会直接被分配到老生代里。")])]),v._v(" "),_("li",[_("p",[v._v("老生代中的对象有两个特点：一个是对象占用空间大；另一个是对象存活时间长。")])]),v._v(" "),_("li",[_("p",[v._v("这种角色翻转的操作还能让新生代中的这两块区域无限重复使用下去。")])]),v._v(" "),_("li",[_("p",[v._v("副垃圾回收器每次执行清理操作时，都需要将存活的对象从对象区域复制到空闲区域，复制操作需要时间成本，如果新生区空间设置得太大了，那么每次清理的时间就会过久，所以为了执行效率，一般新生区的空间会被设置得比较小。")])]),v._v(" "),_("li",[_("p",[v._v("副垃圾回收器还会采用对象晋升策略，也就是移动那些经过两次垃圾回收依然还存活的对象到老生代中。")])]),v._v(" "),_("li",[_("p",[v._v("主垃圾回收器负责收集老生代中的垃圾数据，副垃圾回收器负责收集新生代中的垃圾数据。")])]),v._v(" "),_("li",[_("p",[v._v("副垃圾回收器采用了 Scavenge 算法，是把新生代空间对半划分为两个区域（有些地方也称作 From 和 To 空间），一半是对象区域，一半是空闲区域。新的数据都分配在对象区域，等待对象区域快分配满的时候，垃圾回收器便执行垃圾回收操作，之后将存活的对象从对象区域拷贝到空闲区域，并将两个区域互换。")])]),v._v(" "),_("li",[_("p",[v._v("主垃圾回收器回收器主要负责老生代中的垃圾数据的回收操作，会经历标记、清除和整理过程。")])])])])}),[],!1,null,null,null);_.default=t.exports}}]);