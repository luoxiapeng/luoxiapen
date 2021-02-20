# 字符串

## 字符串的常量池

引用类型（存的是地址）和基础类型是不一样的

String 定义的一样都存在同一个常量池

- 对于引用类型来说 === 是地址值的比较
- 对于基本类型是对常量池的比较

```java
  String str="abc"
  String str1="abc"

  char[] charArray={'a','b','c'}

  String str2=new String(charArray)

  str=== str1 (true)

  str=== str2(false)

```

## 两个字符串的比较

- pulic boolean equals (Obj obj) 参数可以是任何对象，只有参数是一个字符串并且内容相同的才会给 true，否则返回 false
- 备注：任何对象都能用 Object 比较
- equeals 方法具有对称性，也就是说 a.equeal(b)和 b.equals(a)效果是一样的
- 如果比较双方一个常量一个变量，推荐把常量字符串写在前面
- 推荐："abc".equals(str) 不推荐:str.equals("abc")
- public boolean equalsIgnoreCase(String str);忽略大小写，进行内容比较,值区分英文的大小写，不区分中文

```java
  String str="abc"
  String str1="abc"

  str.equals(str1) //ture
  "abc".equals(str1)//true

  推荐写法："abc".equals(str1)//true
  不推荐写法：
  String str5=null;
  "str5".equals("abc")//不推荐，报错，会出现空指针异常NullPointerException


  ---------

  String strA ="Java"
  String strB="java"

  strA.equalsIgnoreCase(strB) //true

```

## String 常用方法

- public int length():获取字符串的长度
- public String cancat(String str) :将当前字符串和参数字符串拼接成为返回值新的字符串
- public char charAt(int index):获取支付索引位置的单个字符串
- public int indexOf(String str):查找参数字符串再本字符串当中首次出现索引位置，如果没有返回-1 值

```java
 String str1='Hello';
 String str2="World"
 String str3= str1.concat(str2)
```

字符串的截取：

- public String substring(int index):截取从参数位置一直到字符串的未尾，返回新字符串
- public String substring(int begin ,int end)：截取 begin 开始，一直到 end 结束，中间字符串

下面这种写法，字符串的内容仍然没有改变的，下面有两个字符串："Hello","Java"

StrA 当中保存的是地址值:

本来地址是 Hello 的 0x666

后来地址变成 Java 的 0X999

```java
 String strA="Hello";
 StrA="Java"
```

## 字符串转换

- public char[] toCharArray():将当前字符串拆分成为字符串数组
- public byte[] getBytes():获取当前字符串底层的字节数组
- public String replace(CharSequence oldString,CharSequence newString):将所有出现的老字符串替换为新的
  - CharSequence：可以接受字符串

## 分割字符串的方法

- public String [] split(String regex) :按照参数的规则，将字符串切分为若干部分

## static

如果一个成员变量使用 static 关键字修饰那么他就不属于这个对象自己，而是属于所在类，多个对象共享一份数据

修饰方法：

一旦使用 static 修饰成员方法，那么这就成为静态方法，静态方法不属于对象，而是属于类

对于静态方法，可以通过对象名进行调用，也可以直接通过类名称来调用

无论是成员变量，还是成员方法，如果有 static，都推荐使用类名称进行调用

推荐写法：类.方法名称()

```java
 public static void getMethod()

 类.getMethod()
```

注意：

- 静态只能直接访问静态的，不能直接访问非静态的

```java
 int num;
 static int numStatic;
 <!--成员方法-：可以直接访问静态方法和非静态->
 public void method(){

 }
 静态方法不能访问非静态，因为是先有静态，再有非静态的

 public static void method1(){

 }

```
