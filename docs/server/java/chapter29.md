# 异常

## 异常注意事项 finally 有 return

如果 finally 有 return 永远返回 finally 中的结果

子父类的异常：

- 如果父类抛出了多个异常，子类重写父类方法时，抛出和父类相同的异常或者是父类异常的子类或者不抛出异常
- 父类方法没有抛出异常，子类重写父类该方法时也不可抛出异常，此时子类产生该异常，只能捕获处理，不能声明抛出

```java
 public class Fu{
     public void show01() thorws NullPointerException,ClassCastException{}
     public void show02() thorws IndexOutOfBoundsException{}
 }
 class zi extends Fu{
     // 子类重写父类方法时，抛出和父类相同的异常
      public void show01() thorws NullPointerException,ClassCastException{

     }
     //子类重写父类时，抛出父类异常的子类
     public void show02() thorws ArrayIndexOutOfBoundsException{}
 }
```

## 自定义异常

自定义异常类：自定义一个业务逻辑异常 RegisterException 一个注册异常类

格式： public class xxxException extends Exception | RuntimeException{
添加一个空参数的构造方法
添加一个带异常信息的构造方法
}

注意：

- 自定义异常类一般都市一 Exception 结尾，说明该类是一个异常类
- 自定义异常类，必须继承 Exception 或者 RuntimeException
  继承 Excetion：那么自定义的异常类就是一个编译期异常，如果方法内部抛出了编译期异常，就必须处理这个异常，那么 throws，那么 try...catch
  继承 RuntimeException：那么自定义的异常类就是一个运行期异常，无需处理，交给虚拟机处理（中断处理）

```java
 public class RegisterException extends Exception{
     // 添加一个空参数的构造方法

     public RegisterException(){
       super();

     }
     // 添加一个带异常信息的构造方法，查看源码发现，所有的异常类都会有一个带异常信息的构造方法，方法内部会调用父类带异常信息的构造方法，让父类来处理这个异常信息

     public RegisterException(String message){
       super(message);

     }


 }
```

## 自定义异常的练习

要求：我们模拟注意操作，如果用户名已存在，则抛出异常并提示：亲，该用户已经被注册

分析：

1.使用数组保存已经注册过的用户名（数据库） 2.使用 scanner 获取用户的输入的注册的用户名（前端页面） 3.定一个方法，对用户输入的中的注册的用户名进行判断
