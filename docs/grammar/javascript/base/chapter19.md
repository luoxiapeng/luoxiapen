# 预定义函数

JavaScript 语言有好些个顶级的内建函数：

## eval()

`eval()`方法会对一串字符串形式的`JavaScrip`t 代码字符求值。

## uneval()

`uneval()`方法创建的一个 Object 的源代码的字符串表示。

## isFinite()

`isFinite()`函数判断传入的值是否是有限的数值。 如果需要的话，其参数首先被转换为一个数值。

## isNaN()

`isNaN()`函数判断一个值是否是 NaN。注意：isNaN 函数内部的强制转换规则十分有趣； 另一个可供选择的是 ECMAScript 6 中定义 Number.isNaN() , 或者使用 `typeof`来判断数值类型。

## parseFloat()

`parseFloat()` 函数解析字符串参数，并返回一个浮点数。

## parseInt()

`parseInt() `函数解析字符串参数，并返回指定的基数（基础数学中的数制）的整数。

## decodeURI()

`decodeURI()` 函数对先前经过 encodeURI 函数或者其他类似方法编码过的字符串进行解码。

## decodeURIComponent()

`decodeURIComponent()`方法对先前经过`encodeURIComponent`函数或者其他类似方法编码过的字符串进行解码。

## encodeURI()

`encodeURI()`方法通过用以一个，两个，三个或四个转义序列表示字符的 UTF-8 编码替换统一资源标识符（URI）的某些字符来进行编码（每个字符对应四个转义序列，这四个序列组了两个”替代“字符）。

## encodeURIComponent()

`encodeURIComponent()` 方法通过用以一个，两个，三个或四个转义序列表示字符的 UTF-8 编码替换统一资源标识符（URI）的每个字符来进行编码（每个字符对应四个转义序列，这四个序列组了两个”替代“字符）。

## escape()

已废弃的 `escape()` 方法计算生成一个新的字符串，其中的某些字符已被替换为十六进制转义序列。使用 `encodeURI`或者`encodeURIComponent`替代本方法。

## unescape()

已废弃的 `unescape()` 方法计算生成一个新的字符串，其中的十六进制转义序列将被其表示的字符替换。上述的转义序列就像`escape`里介绍的一样。因为 `unescape` 已经废弃，建议使用`decodeURI()`或者`decodeURIComponent` 替代本方法。
