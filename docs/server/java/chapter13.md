# ArrayList

ArrayList 集合的长度可以随意变化

对于 ArrayList 来说，有一个尖括号<E>代表泛型

注意：泛型只能是引用类型，不是基本类型

注意事项：

对于 ArrayList 集合来说，直接打印得到的不是地址值，而是内容

API:

```java
 ArrayList当中的常用方法有：

  public boolean add(E e):向集合当中添加元素，参数的类型和泛型一致。

  publci E get(int index):从集合当中获取元素，参数是索引编号，返回值就是对应位置的元素

  public int size():获取集合的尺寸长度，返回值是集合包含的元素个数

  public int remove(int index):从集合删除元素
```

格式：

```java
  ArrayList<String> list=new ArrayList<>()

```

例子：

```java
 ArrayList<String> list=new ArrayList<>()

 list.add("高圆圆")

 list.get(0)

 list.size()

 list.remove(0)

```

定义 ArrayList 的基本数据类型，必须使用基本类对应的包装类

基本类型 包装类型（引用类型，包装类都位于 java.lang 包下）

buyte Byte

short Short

int Interger

long Long

float Float

double Double

char character

boolean Boolean

java.lang.String 类代表字符串

API 当中说：Java 程序中所有的字符串字面量（如"abc"）都作为此类的实例实现

其实就是说，程序当中所有的双引号字符串，都是 String 类的对象（就算没有 new 也照样是）

字符串的特点：

1. 字符串的内容用不可变

2. 正式因为字符串不可改变，所有字符串可以共享使用

3. 字符串效果相当于 char[]字符数组，但是底层原理是 byte[] 字节数组

创建字符串常见的 3+1 种方式：

三种构造方法

- publci String() 创建一个空字符串，不包含任何内容
- public String(char[] array):根据字符数组的内容，来船舰对应的字符串
- public String(byte[] array):根据字节数组内容，来创建对应的字符串
- 不管你 new 不 new 直接创建就是字符串对象 String str='Hello'

```java
String str1 =new String()

char[] charArray={'A','B','C'}

String str2= new String(cahrArray)

byte b=byteArray={97,98,99}


```
