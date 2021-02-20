# 数字对象

-` Number.MAX_VALUE` 可表示的最大值

- `Number.MIN_VALUE `可表示的最小值
- `Number.NaN` 特指”非数字“
- `Number.NEGATIVE_INFINITY` 特指“负无穷”;在溢出时返回
- `Number.POSITIVE_INFINITY` 特指“正无穷”;在溢出时返回
- `Number.EPSILON `表示 1 和比最接近 1 且大于 1 的最小 Number 之间的差别
- `Number.MIN_SAFE_INTEGER` JavaScript 最小安全整数.
- `Number.MAX_SAFE_INTEGER` JavaScript 最大安全整数.

## 数字的方法

- `Number.parseFloat()` 把字符串参数解析成浮点数，
  和全局方法 `parseFloat() `作用一致.
- `Number.parseInt()` 把字符串解析成特定基数对应的整型数字，和全局方法 parseInt() 作用一致. -` Number.isFinite()` 判断传递的值是否为有限数字。
- `Number.isInteger()` 判断传递的值是否为整数。
- `Number.isNaN()` 判断传递的值是否为 NaN. More robust version of the original global isNaN().
- `Number.isSafeInteger()` 判断传递的值是否为安全整数。

## 数字类型原型上的一些方法

- `toExponential()` 返回一个数字的指数形式的字符串，形如：1.23e+2 -`toFixed()` 返回指定小数位数的表示形式，var a=123,b=a.toFixed(2)//b="123.00"
- `toPrecision()` 返回一个指定精度的数字。如下例子中，a=123 中，3 会由于精度限制消失 var a=123,b=a.toPrecision(2)//b="1.2e+2"

## 数学对象（Math）

- Math.PI // π

同理，标准数学函数也是 Math 的方法。 这些包括三角函数 ​​，对数，指数，和其他函数。比方说你想使用三角函数 sin， 你可以这么写：

- Math.sin(1.56)

## Math 的方法

> abs() 绝对值

> sin(), cos(), tan() 标准三角函数;参数为弧度

> asin(), acos(), atan(), atan2() 反三角函数; 返回值为弧度

> sinh(), cosh(), tanh() 双曲三角函数; 返回值为弧度.

> asinh(), acosh(), atanh() 反双曲三角函数;返回值为弧度.

> pow(), exp(), expm1(), log10(), log1p(), log2() 指数与对数函数

> floor(), ceil() 返回最大/最小整数小于/大于或等于参数

> min(), max() 返回一个以逗号间隔的数字参数列表中的较小或较大值(分别地)

> random() 返回 0 和 1 之间的随机数。

> round(), fround(), trunc(), 四舍五入和截断函数

> sqrt(), cbrt(), hypot() 平方根，立方根，平方参数的和的平方根
> 两个参数平方和的平方根

> sign() 数字的符号, 说明数字是否为正、负、零。

> clz32(),imul()在 32 位 2 进制表示中，开头的 0 的数量.返回传入的两个参数相乘结果的类 C 的 32 位表现形式
