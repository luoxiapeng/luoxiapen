# 数组容器

语法：`int[] x=new int[100]`

描述：容器的概念

定义数组容器：

- 定义数组容器，要素，强制数据类型的语言
- 定义数据类型，大小，就是存储数据的大小
- 数组是一个容器：存储到数据中的数据都有自己的索引（角标）
- 数组的属性，就是数组的长度，属性的名字 length

定义数据的公式： 数据类型[] 变量名 =new 数据类型[存储元素的个数]

```java
public class ArrayDemo{
    public static vodi main(String[] args){
        int x;
        x=new int[100]
    }
}
```

数据都存在堆中，每一个内存都有自己的一个地址;

x:应用类型，保存在栈内，实质上是内存中的地址
这个地址是标识堆的，指向堆上可以操作堆的。

## 定义数组并且赋值

new 后面的中括号[]中不允许写任何内容,写了就编译失败

```java
 int[] arr=new int[]{1,2,3,4,5,6,7,8};
```

定义数组，最方便最简单（推荐）

```java
 int[] arr2={1,2,3,4,5,6}
```

## 数组赋值

数组的操作，使用索引，对数组进行元素赋值

```java
 int[] arr=new int[5]
 arr[1]=3
```

## 数组遍历

将所有的数组元素都换取

```java
public class ArrayDemo_03{
  public static void main(String[]  args){
      int[] arr={2,1,2,1,3,5,6,7,7}
      for(int i=0;i<=arr.length-1;i++){
          System.out.println(arr[i])
      }
  }

}
```

数组操作中，常见的两个异常

- 数组的索引越界
- 空指针异常

```java
public class ArrayDemo_03{
  public static void main(String[]  args){
      int[] arr={2,1,2}
      System.out.println(arr[3])//异常超出了

      //空指针
      int[] arr2={1,5,8};
      System.out.println(arr2[2]);
      arr=null;
  }

}
```

## 二维数组

定义

`int[][] arr={{1,4},{3,4,5},{0,9}}`

## 方法

实现某个功能的方法

方法的定义格式：
修饰符：返回值类型，方法的名字（参数列表......）

方法的功能主体：

循环，判断，变量，比较，运算

修饰符： 固定写法 public static
返回值类型： 方法在运算后，结果的数据类型
方法名：自定义名字，满足标识符规范，方法名字首字符小写，后面每个单词首字母大写
参数列表：方法的运算过程中，是否有未知的数据
return：方法的返回，将计算的结果返回

5,6 是实参，调用者都是实参

w,h 是形参

```java
 public class MethodDemo{
     public static void main(String[] args){
      int area= getArea(5,6)
      System.out.println(area)
     }
     要求：计算长方形的面积
     定义方法解决这个要求
     分析方法：
      1.明确方法计算后的结果数据类型
      2.定义计算过程中，有没有未知数据，宽和长

     public static int getArea(int w,int h){
         //实现方法的功能主体

         return w*h;

     }
 }
```
