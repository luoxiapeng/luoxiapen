(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{434:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"正则表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[s._v("#")]),s._v(" 正则表达式")]),s._v(" "),t("p",[s._v("JavaScript 中，正则表达式也是对象。这些模式被用于 RegExp 的 exec 和 test 方法, 以及 String 的 match、matchAll、replace、search 和 split 方法。本章介绍 JavaScript 正则表达式。")]),s._v(" "),t("p",[s._v("使用一个正则表达式字面量，其由包含在斜杠之间的模式组成，如下所示：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" re "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("ab+c")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),s._v("\n")])])]),t("p",[s._v("正则表达式字面量为正则表达式提供了脚本加载后的编译。当正则表达式保持不变时，使用此方法可获得更好的性能。")]),s._v(" "),t("blockquote",[t("p",[s._v("调用 RegExp 对象的构造函数")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" re "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RegExp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ab+c'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("正则表达式模式是由简单的字符所构成的./abc/；或者是简单和特殊字符的组合，比如 "),t("code",[s._v("/ab*c/")]),s._v(" 或 "),t("code",[s._v("/Chapter")]),s._v(" "),t("code",[s._v("(\\d+)\\.\\d*/")]),s._v("。最后的例子中用到了括号，它在正则表达式中常用作记忆设备。")]),s._v(" "),t("p",[s._v('简单模式是由你想直接找到的字符构成。比如，/abc/ 这个模式就能且仅能匹配 "abc" 字符按照顺序同时出现的情况。例如在 "Hi, do you know your abc\'s?" 和 "The latest airplane designs evolved from slabcraft." 中会匹配成功。在上述两个例子中，匹配的子字符串是 "abc"。但是在 "Grab crab" 中会匹配失败，因为它虽然包含子字符串 "ab c"，但并不是准确的 "abc"。')]),s._v(" "),t("h2",{attrs:{id:"使用特殊字符-ab-c-匹配一个范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用特殊字符-ab-c-匹配一个范围"}},[s._v("#")]),s._v(" 使用特殊字符(/ab*c/匹配一个范围)")]),s._v(" "),t("p",[s._v('比如寻找一个或多个 "b"，或者寻找空格，这时可以在模式中使用特殊字符。比如，你可以使用 /ab*c/ 去匹配一个单独的 "a" 后面跟了零个或者多个 "b"，同时后面跟着 "c" 的字符串：*的意思是前一项出现零次或者多次。在字符串 "cbbabbbbcdebc" 中，这个模式匹配了子字符串 "abbbbc"。')]),s._v(" "),t("ul",[t("li",[t("p",[s._v("断言（Assertions）表示一个匹配在某些条件下发生。断言包含先行断言、后行断言和条件表达式。")])]),s._v(" "),t("li",[t("p",[s._v("边界（Boundaries）\n表示行和单词的开始和结尾。")])]),s._v(" "),t("li",[t("p",[s._v("字符类别（Character Classes）\n区分不同类型的字符，例如区分字母和数字。")])]),s._v(" "),t("li",[t("p",[s._v("组和范围（Groups and Ranges）\n表示表达式字符的分组和范围。")])]),s._v(" "),t("li",[t("p",[s._v("量词（Quantifiers）\n表示匹配的字符或表达式的数量。")])]),s._v(" "),t("li",[t("p",[s._v("Unicode 属性转义（Unicode Property Escapes）基于 unicode 字符属性区分字符。例如大写和小写字母、数学符号和标点")])])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" text "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'A quick fox'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" regexpLastWord "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\w+$")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regexpLastWord"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// expected output: Array ["fox"]')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" regexpWords "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\b\\w+\\b")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regexpWords"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// expected output: Array ["A", "quick", "fox"]')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" regexpFoxQuality "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\w+(?= fox)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("regexpFoxQuality"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// expected output: Array ["quick"]')]),s._v("\n")])])]),t("p",[t("code",[s._v("\\")])]),s._v(" "),t("p",[s._v("依照下列规则匹配：")]),s._v(" "),t("p",[s._v('在非特殊字符之前的反斜杠表示下一个字符是特殊字符，不能按照字面理解。例如，前面没有 "" 的 "b" 通常匹配小写字母 "b"，即字符会被作为字面理解，无论它出现在哪里。但如果前面加了 ""，它将不再匹配任何字符，而是表示一个字符边界。')]),s._v(" "),t("p",[s._v('在特殊字符之前的反斜杠表示下一个字符不是特殊字符，应该按照字面理解。详情请参阅下文中的 "转义（Escaping）" 部分。')]),s._v(" "),t("p",[s._v('如果你想将字符串传递给 RegExp 构造函数，不要忘记在字符串字面量中反斜杠是转义字符。所以为了在模式中添加一个反斜杠，你需要在字符串字面量中转义它。/[a-z]\\s/i 和 new RegExp("[a-z]\\s", "i") 创建了相同的正则表达式：一个用于搜索后面紧跟着空白字符（\\s 可看后文）并且在 a-z 范围内的任意字符的表达式。为了通过字符串字面量给 RegExp 构造函数创建包含反斜杠的表达式，你需要在字符串级别和表达式级别都对它进行转义。例如 /[a-z]:\\/i 和 new RegExp("[a-z]:\\\\","i") 会创建相同的表达式，即匹配类似 "C:" 字符串。')]),s._v(" "),t("p",[t("code",[s._v("^")])]),s._v(" "),t("p",[s._v("匹配输入的开始。如果多行标志被设置为 true，那么也匹配换行符后紧跟的位置。")]),s._v(" "),t("p",[s._v("例如，/^A/ 并不会匹配 \"an A\" 中的 'A'，但是会匹配 \"An E\" 中的 'A'。")]),s._v(" "),t("p",[s._v("当 '^' 作为第一个字符出现在一个字符集合模式时，它将会有不同的含义。反向字符集合 一节有详细介绍和示例。")]),s._v(" "),t("p",[t("code",[s._v("$")])]),s._v(" "),t("p",[s._v("匹配输入的结束。如果多行标示被设置为 true，那么也匹配换行符前的位置。")]),s._v(" "),t("p",[s._v("例如，/t$/ 并不会匹配 \"eater\" 中的 't'，但是会匹配 \"eat\" 中的 't'。")]),s._v(" "),t("p",[t("code",[s._v("*")])]),s._v(" "),t("p",[s._v("匹配前一个表达式 0 次或多次。等价于 {0,}。")]),s._v(" "),t("p",[s._v('例如，/bo*/ 会匹配 "A ghost boooooed" 中的 \'booooo\' 和 "A bird warbled" 中的 \'b\'，但是在 "A goat grunted" 中不会匹配任何内容。')]),s._v(" "),t("p",[t("code",[s._v("+")])]),s._v(" "),t("p",[s._v('例如，/a+/ 会匹配 "candy" 中的 \'a\' 和 "caaaaaaandy" 中所有的 \'a\'，但是在 "cndy" 中不会匹配任何内容。')]),s._v(" "),t("p",[t("code",[s._v("?")])]),s._v(" "),t("p",[s._v("例如，/e?le?/ 匹配 \"angel\" 中的 'el'、\"angle\" 中的 'le' 以及 \"oslo' 中的 'l'。")]),s._v(" "),t("p",[t("code",[s._v(".")])]),s._v(" "),t("p",[s._v("/.n/ 将会匹配 \"nay, an apple is on the tree\" 中的 'an' 和 'on'，但是不会匹配 'nay'。")]),s._v(" "),t("p",[t("code",[s._v("\\d")])]),s._v(" "),t("p",[s._v("匹配一个数字。等价于[0-9]。")]),s._v(" "),t("p",[s._v("例如， /\\d/ 或者 /[0-9]/ 匹配\"B2 is the suite number.\"中的'2'。")]),s._v(" "),t("p",[t("code",[s._v("\\D")])]),s._v(" "),t("p",[s._v("匹配一个非数字字符。等价于[^0-9]。")]),s._v(" "),t("p",[s._v("例如， /\\D/ 或者 /[^0-9]/ 匹配\"B2 is the suite number.\"中的'B' 。")]),s._v(" "),t("p",[t("code",[s._v("\\w")])]),s._v(" "),t("p",[s._v("例如, /\\w/ 匹配 \"apple,\" 中的 'a'，\"$5.28,\"中的 '5' 和 \"3D.\" 中的 '3'。")]),s._v(" "),t("h2",{attrs:{id:"使用正则表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用正则表达式"}},[s._v("#")]),s._v(" 使用正则表达式")]),s._v(" "),t("p",[s._v("正则表达式可以被用于 RegExp 的 exec 和 test 方法以及 String 的 match、replace、search 和 split 方法。这些方法在 JavaScript 手册中有详细的解释。")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("exec")]),s._v(" 一个在字符串中执行查找匹配的 RegExp 方法，它返回一个数组（未匹配到则返回 null）。")]),s._v(" "),t("li",[t("code",[s._v("test")]),s._v(" 一个在字符串中测试是否匹配的 RegExp 方法，它返回 true 或 false。")]),s._v(" "),t("li",[t("code",[s._v("match")]),s._v(" 一个在字符串中执行查找匹配的 String 方法，它返回一个数组，在未匹配到时会返回 null。")]),s._v(" "),t("li",[t("code",[s._v("matchAll")]),s._v(" 一个在字符串中执行查找所有匹配的 String 方法，它返回一个迭代器（iterator）。")]),s._v(" "),t("li",[t("code",[s._v("search")]),s._v(" 一个在字符串中测试匹配的 String 方法，它返回匹配到的位置索引，或者在失败时返回-1。")]),s._v(" "),t("li",[t("code",[s._v("replace")]),s._v(" 一个在字符串中执行查找匹配的 String 方法，并且使用替换字符串替换掉匹配到的子字符串。")]),s._v(" "),t("li",[t("code",[s._v("split")]),s._v(" 一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的 String 方法。")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" myRe "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RegExp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'d(b+)d'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'g'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" myArray "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" myRe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cdbbdbsbz'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h2",{attrs:{id:"正则表达式执行后的返回信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式执行后的返回信息"}},[s._v("#")]),s._v(" 正则表达式执行后的返回信息")]),s._v(" "),t("h2",{attrs:{id:"myarray"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myarray"}},[s._v("#")]),s._v(" myArray")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("index")]),s._v(" 在输入的字符串中匹配到的以 0 开始的索引值。")]),s._v(" "),t("li",[t("code",[s._v("input")]),s._v(" 初始字符串。")]),s._v(" "),t("li",[t("code",[s._v("[0]")]),s._v(' 匹配到的所有字符串（并不是匹配后记住的字符串）。注：原文"The last matched characters."，应该是原版错误。匹配到的最终字符。')])]),s._v(" "),t("h2",{attrs:{id:"myre"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myre"}},[s._v("#")]),s._v(" myRe")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("lastIndex")]),s._v(" 下一个匹配的索引值。（这个属性只有在使用 g 参数时可用在 通过参数进行高级搜索 一节有详细的描述.)")]),s._v(" "),t("li",[t("code",[s._v("source")]),s._v("模式文本。在正则表达式创建时更新，不执行。")])]),s._v(" "),t("p",[s._v("正则表达式创建一个没有分配给变量的对象初始化容器。如果你这样做，那么，每一次使用时都好比在使用一个新的正则表达式。因为这个原因，如果你使用这个未分配给一个变量的正则表达式，你将在随后不能访问这个正则表达式的属性。例如，假如你有如下脚本：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" myRe "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("d(b+)d")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" myArray "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" myRe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cdbbdbsbz"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The value of lastIndex is "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" myRe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lastIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n这个脚本输出如下：\n\nThe value "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" lastIndex is "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])])]),t("p",[s._v("然而，如果你有如下脚本：")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" myArray "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("d(b+)d")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cdbbdbsbz"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"The value of lastIndex is "')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("d(b+)d")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lastIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nThe value "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" lastIndex is "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])])]),t("p",[s._v("当发生/d(b+)d/g 使用两个不同状态的正则表达式对象，lastIndex 属性会得到不同的值。如果你需要访问一个正则表达式的属性，则需要创建一个对象初始化生成器，你应该首先把它赋值给一个变量。")]),s._v(" "),t("p",[s._v("在匹配到的替换文本中，脚本使用替代的$ 1,$ 2 表示第一个和第二个括号的子字符串匹配。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" re "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("(\\w+)\\s(\\w+)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" str "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"John Smith"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" newstr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("re"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"$2, $1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("newstr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n这个表达式输出 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Smith, John"')]),s._v("。\n")])])]),t("h2",{attrs:{id:"通过标志进行高级搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过标志进行高级搜索"}},[s._v("#")]),s._v(" 通过标志进行高级搜索")]),s._v(" "),t("ul",[t("li",[s._v("g 全局搜索。")]),s._v(" "),t("li",[s._v("i 不区分大小写搜索。")]),s._v(" "),t("li",[s._v("m 多行搜索。")]),s._v(" "),t("li",[s._v("s 允许 . 匹配换行符。")]),s._v(" "),t("li",[s._v("u 使用 unicode 码的模式进行匹配。")]),s._v(" "),t("li",[s._v("y 执行“粘性”搜索,匹配从目标字符串的当前位置开始，可以使用 y 标志")])]),s._v(" "),t("p",[s._v("为了在正则表达式中包含标志，请使用以下语法：")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("var re = /pattern/flags;")])])]),s._v(" "),t("p",[s._v("或者")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v('var re = new RegExp("pattern", "flags");')])])]),s._v(" "),t("p",[s._v("re = /\\w+\\s/g 将创建一个查找一个或多个字符后有一个空格的正则表达式，或者组合起来像此要求的字符串。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" re "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("\\w+\\s")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("g")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" str "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fee fi fo fum'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" myArray "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("match")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("re"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("myArray"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["fee ", "fi ", "fo "]')]),s._v("\n")])])]),t("p",[s._v('这段代码将输出 ["fee ", "fi ", "fo "]。在这个例子中，你可以将：')]),s._v(" "),t("blockquote",[t("p",[s._v("var re = /\\w+\\s/g;")])]),s._v(" "),t("p",[s._v("替换成：")]),s._v(" "),t("blockquote",[t("p",[s._v('var re = new RegExp("\\w+\\s", "g");')])]),s._v(" "),t("p",[s._v("使用.exec()方法时，与'g'标志关联的行为是不同的。 （“class”和“argument”的作用相反：在.match()的情况下，字符串类（或数据类型）拥有该方法，而正则表达式只是一个参数，而在.exec()的情况下，它是拥有该方法的正则表达式，其中字符串是参数。对比 str.match(re)与 re.exec(str) ), 'g'标志与.exec()方法一起使用获得迭代进展。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" xArray\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xArray "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" re"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("exec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xArray"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// produces:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["fee ", index: 0, input: "fee fi fo fum"]')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["fi ", index: 4, input: "fee fi fo fum"]')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ["fo ", index: 7, input: "fee fi fo fum"]')]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);