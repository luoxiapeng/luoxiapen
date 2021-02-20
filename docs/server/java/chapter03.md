# 运算符

运算符用来计算数据的符号，数据可以是常量，也可以是变量

- 算数运算符
  > +,-,\*,/,%,++,--

+有连接作用，将一个字符串和其他数据连接起来

+遇到字符串，变成连接符号

+任何类型只要和字符串+，所有的数据都会变成字符串 1+“”

例如：`System.out.println("5+5="+5+5) //“5+5=55”`

在 java 中整数用除法运算怎么算都算不到小数

如： `int i=100`
`int j=9`

     `System.out.println(i/j)` 得到的是11

++前后差别：

```java
 a=1
 a++ , ++a

 符号写在前面，还是后面，在变量自己独立计算的时候，没有区别

 但是，要是参与了其他运算，有区别：

 放在后面就后算，再将i赋值
 放在前面就是先算自己，再赋值

 int i=5
 int j=i++;
 System.out.println(i);//6
 System.out.println(j);//5
```

- 赋值运算符

  =，+=，-=，\*=，/=，%=

- 比较运算符

==,!=, <,>,>=,<=

比较结果只有两种，boolean 类

- 逻辑运算符

&(与),|(或) , ^(异或) ,!(非) ,&&(短路与),||(短路或)

> & 一边是 false，运算结果就是 false

> |:一边是 true，运算结果就是 true

> ^:两边得一样就是 true，否者就是 false

> !：!true=false !false=true

> &&:短路与，一边是 false，另外一遍就不运行

> ||：短路或，一边是 true，另外一边不运行

- 三元运算符

布尔表达式?结果 1：结果