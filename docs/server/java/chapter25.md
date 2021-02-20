# 哈希值存储的数据结构

哈希值：一个十进制的证书，由系统随机给出（就是对象的地址值，是一个逻辑地址，是模拟出来的地址，不是数据实际存储的物理地址）

在 Object 类有一个方法，可以获取对象的布尔值

```java
 Person p1=new Person();
 int h1=p1.hashCode();
 Person p2=new Person();
 int h2=p2.hashCode();
 Sytem.out.println(p1==p2);//false
```

String 类的哈希值：String 类冲洗 Object 类的哈希值

```java
 String s1= new String("abc");
 String s2=new String("abc");
 System.out.println(s1.hashCode());
 System.out.println(s2.hashCode());


```

## 哈希表

HashSet 集合存储数据结构

jdk1.8 版本之前 哈希表=数组+链表

jdk1.8 版本之后：

- 哈希表=数据+链表
- 哈希表=数组+红黑树(提高查询速度)

## 特点：

- 速度快

## HashSet 存储自定义类型元素

set 集合报错元素唯一：
存储的元素必须重写 hashCode 和 equals 方法

## LinkedHashSet

LinkedHashSet 集合 extends HashSet 集合

LinkedHashSet 集合的特点

- 底层是一个哈希表（数组+链表/红黑树）+链表：多了一挑链表（记录元素存储顺序），保证元素有序

## 可变参数

JDK1.5 之后出现的新特性

使用前提：

- 当方法的参数列表数据类型已经确定，但是参数的个数不确定，就可以使用可变参数
- 使用格式：定义方法使用 修饰符 返回值类型 方法名（数据类型...变量名）{}
- 可变参数的原理：1.可变参数底层是一个数组，根据传递的参数个数不同，会传递不同长度的数组，类存储这些参数。 2. 传丢参数的个数可以为多个

```java
 定义计算（0-n）整数和的方法
 已知：计算整数和，数据类型已经确定int
 但是参数的个数不确定，不知道要计算几个整数的和，就可以使用可变参数
 add();就会创建一个长度为0的数组，new int[0]
 public static int add(int...arr){
     System.out.println(arr);//打印的是一个地址值

     定义一个初始化的变量，记录求和

     int sum =0;
     for(int i:arr){
         sum+=arr[i]
     }
     return sum;
  }
```

注意事项：

- 一个方法的参数列表，只能有一个可变参数
- 如果方法的参数有多个，那么可变参数必须写在参数列表的末尾

可变参数的特殊写法：

```java
 public static void method(Object...obj){

 }
```
