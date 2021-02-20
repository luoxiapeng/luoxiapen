# 引用类型

### Scanner 类

- 引用数据类型的使用格式 数据类型 变量名=new 数据类型()
- Scanner 类

定义引用类型变量，和基本类型变量的区别

int a=1;

格式 ：类型 变量名 = new 类型()

作用：在命令行中，接受键盘的输入

使用步骤：

- 导入包,指明文件类所在的文件夹
- 公式，创建 Scanner 类型变量
- 变量，使用 Scanner 类的功能，完成键盘输入

```java
   import java.util.Scanner;

   public class ScannerDemo{
      public static void main(String[] args){
          Scanner sc=new Scanner(System.in)
          //功能：nextInt() 接收键盘输入，保证输入的是整数
          int i=sc.nextInt();
          System.out.println(i);

          next() 输入下一次的值
           int j=sc.next()
      }
   }

```

## 随机数类 Random

- nextInt() 随机生成整数 范围随便指定
- nextDouble()随机生成浮点数，范围 0.0-1.0 之间固定的

```java
 import java.util.Random;
 public class RandomDemo{
     public static void main(String[] args){
         Random ran = new RanDom();
         int i=ran.nextInt(10);
         System.out.println(i)
     }
 }
```
