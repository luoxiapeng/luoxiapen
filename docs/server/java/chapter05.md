# 循环判断

## while 循环语

```java
while(条件语句){
  循环体

}

例子：

public class WhildDemo{
    public static main (String[] args){
        int x=1;
        while(x<=4){
          System.out.println(i);
          i++;
        }
    }
}
```

## for 循环

```java
 public class ForDemo{
    public static main (String[] args){
         for(int i=0;i<=10;i++){
            System.out.println(i);
         }
     }
   }

 }
```

## do-while 循环

特点:无条件先执行一次

```java
 public class DoWhileDemo{
    public static main (String[] args){
        int i=0;
        do{

            System.out.println(i);
            i++;
        }while(i<5)
     }
   }

 }
```

## 无限循环（死循环）

```java
 public class WhileForDemo{
    public static main (Str ing[] args){
        // whild形式的死循环
        while(true){

        }
        //for形式的死循环
        for(;true;){

        }
     }
   }

 }
```

## break

作用： 作用于循环中，终止循环的作用，结束整个循环体

```java
 public class BreakDemo{
    public static main (Str ing[] args){
       int x=1;
       while(true){
           if(x>=3){
             break;

           }
           x++;
       }
     }
   }

 }
```

```java
 public class BreakDemo_01{
    public static main (Str ing[] args){
      a:for(int i=0;i<2;i++){
          System.out.print("j="+j)
          break a;//可以结束外循环，如果不加上就直接结束当前循环
      }
      System.out.println("i="+i);
     }
   }

 }
```

## continue

作用：在循环中，终止本次循环，开始下次循环

```java
 public class Continue_01{
    public static main (Str ing[] args){
      for(int i=0;i<=10;i++){
          if(i%2==0){
              continue;
          }
          System.out.println(i);
      }
     }
   }

 }

```

## switch

switch 语句的表达式的数据类型可是有要求的

JDK1.0-1.4 数据类型接受 byte short int char
JDK 1.5 接受 byte short int char enum(枚举)
JDK 1.7 以上 byte short int char enum(枚举) String

case 穿透性：多个值

```java
switch(表达式){
    case 常量1：
        要执行的语句
     break;

     case 常量2：
        要执行的语句
     break;

     case 常量3：
        要执行的语句
     break;

     defalult:
        要执行的语句
     break;
}
```

```java
case 后面如果没有break可以直接往下执行

public class SwitchDemo{
    public static void main(String[] args){
      int x=1;
      switch(x){
        case 1:
        case 2:
        case 3：
        case 4:
        case 5:
          System.out.println('工作日');
          break;
        case 6:
        case 7:
           System.out.println('休息日');
           break;
        default：
          System.out.println('不知道什么');
          break;

      }

    }
}
```

```java
public class SwitchDemo{
    public static void main(String[] args){
      int x=1;
      switch(x){
        case 1:
          System.out.println('星期一');
          break;
        case 2:
          System.out.println('星期二');
          break;
        case 3:
          System.out.println('星期三');
          break;
        case 4:
          System.out.println('星期四');
          break;
        default：
          System.out.println('不知道星期几');
          break;

      }

    }
}
```
