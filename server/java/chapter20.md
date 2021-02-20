# 接口

## interface

接口就是一种公共的规范标准，只要符合规范标准，就可以大家通用

- 接口就是多个类的公共规范
- 接口是一种引用类型，最重要的内容就是其中的：抽象方法

定义一个接口规范：

```java
 public interface 接口名称{

 }
```

如果 java7，那么接口中可以包含的内容有：

- 常量
- 抽象方法

如果 java8，还可以额外包含有：

- 常量
- 抽象方法
- 默认方法
- 静态方法

如果 java9，话可以包含额外

- 常量
- 抽象方法
- 默认方法
- 静态方法
- 私有方法

在任何版本，接口都能定义抽象方法：

注意：

- 接口当中的抽象方法，修饰符必须是固定的关键字 public abstract
- 这两个关键字修饰符，可以省略
- 方法的三要素可以随意定义

```java
public interface MyInterfaceAbstract{
    //这是一个抽象方法

    public abstract void methodAbs1();

    <!--这也是-->
    public void methodAbs2();

    <!--这样也是-->
    abstract methodAbs3();

    <!--这样也是抽象方法-->
    void methodAbs4();
}
```

接口使用步骤：

- 接口不能直接使用，必须有一个实现类来实现该接口
- 格式：

  ```java
   public class 实现类名称 implements 接口{

   }
  ```

- 接口实现类必须覆盖重写(实现)接口所有的抽象方法。
- 实现：去掉 abstract 关键字，加上方法体大括号
- 创建实现类对象，进行使用

从 java 8 开始，接口允许定义默认方法。

格式：

```java
public default 返回值类型 方法名称(参数列表){

}
```

作用：

- 往接口中添加抽象方法，如果在子类继承了不实现就会报错，所以用默认方法不会影响到之前的逻辑
- 接口的默认方法，可以通过实现类对象所调用
- 可以被实现类进行覆盖重写

解决的问题就是可以用来做接口升级的时候。

示例：

## MyInterfaceAbstract

```java
package demo02;

public interface MyInterfaceAbstract {
    public abstract void InterfaceAbs();
    abstract void InterfaceAbs1();
    void InterfaceAbs2();
   //添加默认方法，默认方法会被继承下去
    public default  void methodDefault(){
        System.out.println("我是默认抽象方法");

    }
}

```

## MyInterfaceAbstractImpl

```java
package demo02;

public class MyInterfaceAbstractImpl implements MyInterfaceAbstract {

    @Override
    public void InterfaceAbs() {
        System.out.println("这是第一个");

    }

    @Override
    public void InterfaceAbs1() {
        System.out.println("这是第二个");

    }

    @Override
    public void InterfaceAbs2() {
        System.out.println("这是第三个");

    }

    @Override
    public void methodDefault() {
        System.out.println("覆盖重写接口的默认方法");
    }
}

```

## InterfaceDemo

```java
package demo02;

public class InterfaceDemo {
    public static void main(String[] args) {
        MyInterfaceAbstractImpl impl=new MyInterfaceAbstractImpl();
        impl.InterfaceAbs();
        impl.InterfaceAbs1();
        impl.InterfaceAbs2();
//        可以直接调用
        impl.methodDefault();
    }
}

```

注意：

从 java8 开始，接口可以用 static 来定义的方法

格式：

```java
public static 返回值类型 方法名称(参数列表){

}
提示：就是将abstract或者default换成static即可，带上方法体。
```

- 不能通过接口实现类的对象来调用接口当中的静态方法
- 静态永远跟类有关系跟对象没有关系

正确用法：

接口名称.静态方法名(参数)

示例：

## StaticInterface

```java
package demo03;

public interface StaticInterface {
    public static void getMethod(){
        System.out.println("我是接口里面的静态方法");
    }
}
```

## StaticInterfaceImp

```java
package demo03;

public class StaticInterfaceImp implements StaticInterface {


}

```

## StaticDemo

```java
package demo03;

public class StaticDemo {
    public static void main(String[] args) {
        StaticInterfaceImp Imp=new StaticInterfaceImp();
        //错误的写法
//        Imp.getMethod();
        // 正确的写法
        StaticInterface.getMethod();

    }
}

```

## 默认方法私有化

- 我们需要抽取一个公共方法，用来解决两个默认方法之间重复代码问题
- 但是我们这个公共方法不应该让实现类使用，应该是私有化

解决方案：

从 java9 开始，允许定义私有方法

1. 普通私有方法，解决多个默认方法之间的重复代码

```java
格式：
  private 返回值类型 方法名称(参数列表){

  }
```

2. 静态私有方法：解决多个静态方法之间的重复代码

```java
 格式：
 private static 返回值类型 方法名称(参数列表){}
```

## 成员变量

从接口当中可以定义“成员变量”，但是必须使用 public static final 三个关键字进行修饰，
从效果上看，这其实就是接口的常量,一但使用 final 关键字进行修饰，说明不可改变

注意事项：

1. 接口当中的常量，可以省略 public static final 注意：不写也是照样这样
2. 接口当中的常量定义了就一定要赋值
3. 接口中的常量的名称，使用完全大写的字母，用下划线进行分割(推荐用写法)

格式：

```java
public static final 数据类型 常量名称=数据值;
```

```java
 public Interface MyInterfaceConst{
   //这其实就是一个常量，一旦赋值，不可以修改

   public static final int NUM_OF_MY_CLASS=12;

 }
```

小结：

接口的内容：

从 java9+版本开始

- 成员变量其实是常量，格式：[piblic][static][final]数据类型 常量名称=数据值;
  注意：

- 常量必须进行赋值，而且一旦赋值就不能改变
- 常量名称完全大写，用下划线进行分割

- 接口中最重要的就是抽象方法,格式：

  - [public] [abstract]返回值类型 方法名称(参数列表)
  - 注意：实现类必须覆盖重写接口所有的抽象方法，除非实现类是抽象类

- 从 java8 开始，接口里允许定义默认方法，格式

  - [public]default 返回值类型 方法名称(参数列表){方法体}
  - 注意：默认方法也可以被覆盖重写

- 从 java9 开始，接口里允许定义私有方法，格式

  - 普通私有方法：private 返回值 方法名称(参数列表){方法体}
  - 静态私有方法：private static 返回值类型 方法名称(参数列表){方法体}
  - 注意：private 的方法只有接口自己才能使用，不能被实现类或者别人所调用

## 使用接口的注意事项

- 接口不能有静态代码块或者构造方法
- 一个类的直接父类是唯一的，但是一个类可以同时实现多个接口

格式：

```java
 public class MyInterfaceImal implements MyInterfaceA,MyInterfaceB{

 }
```

- 如果实现类中存在重名的实现方法，值需要写一次就行了
- 如果实现类没有覆盖重写所有抽象方法，那么类就是抽象类
- 如果实现类实现多个接口中，如果多个接口的默认方法冲突了就需要覆盖重写
- 一个类如果直接父类当中的方法，和接口的默认类冲突，他会优先使用父类的方法 （继承优先与实现）

## 类与接口的关系

- 类与类之间是单继承关系，直接父类只有一个
- 类与接口之间是多实现的，一个类可以实现多个接口
- 接口与接口之间是继承关系

注意：

- 多个父接口当中的抽象方法如果重复，没关系
- 多个父接口当中的默认方法如果重复，那么子类必须经洗默认方法重写，而且必须带着`default`关键字
