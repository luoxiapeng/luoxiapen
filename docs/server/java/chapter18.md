# 面向对象的继承性

继承主要解决的问题就是：共性抽取（子类（派生类）去继承父类（基类，超类））

继承的特点：

- 子类可以拥有父类的内容
- 子类还可以拥有父类的方法

在继承的关系中，子类就是一个父类，也可以说，子类可以被当作父类看待

## extends 关键字

```java
 public class Teacher extends Employee{

 }
```

在父子类的继承关系当中，如果成员变量重名，怎创建子类对象时，访问有两种方式：

- 直接用过子类对象访问成员变量：等号左边是谁，就优先谁，没有就往上找
- 简洁通过成员方法访问成员变量：方法属于谁，就优先用谁，没有就向上找

## 区分三种变量重名

- 局部变量：直接写
- 本类的成员变量:this.本类
- 父类的成员变量：super.父类方法或者变量

在父子类中的继承关系中，创建子类对象，访问成员方法的规则：

- 创建的对象是谁，就优先用谁，如果没有就向上找

## override(方法重写)

概念：在继承关系当中，方法的名称一样，参数列表也一样

重写(override):方法的名称一样，参数列表[也一样]。覆盖，覆写.

重载(overload):方法名称一样，参数列表不一样

方法的覆盖重写注意事项：

- 方法的名字相同
- @Override 重写，覆盖重写，没有@Override 重写,帮助检测，这个就算不写，只要满足要求，也是正确的方法覆盖重写
- 子类的返回值必须小于等于方法的返回值范围：前提是：java.lang.Object 类是所有类的公共最高父类，java.lang.String 就是 Object 的子类
- 子类方法的权限大于等于父类的权限修饰符:public > protected > private
  > defalut 不是关键字 default，所以留空

设计原则：

- 对于已经投入使用的类，尽量不要进行修改，推荐定义一个新类去覆盖修改

```java
 public class Dome extends Dome2{

    public static void main(String args[]){

    }
    @Override
    public void show(){
      <!--获取父类的show方法-->
       super.show()


    }
 }
```

继承关系：

- 子类构造方法当中有一个默认隐含“super()”调用，所以一定先调用父类钩爪，后执行子类构造

  > 子类 super();就是默认去调用父类重载构造

- super 的父类构造调用，必须是子类构造方法的第一个语句，不能第一个子类构造调用多次 super 构造
- 子类必须调用父类构造方法，不写则会赠送 super(),super 仅能写一个

```java
public Fu(){
 System.out.println("父类无参构造")

}
 public Fu(int num){
     System.out.println("父类有参构造")
 }
```

- 可以通过 super 来初始化调用父类并且传递参数

```java
public Zi(){
    // super();//调用父类无参构造方法
    super(20);//调用父类有参构造方法

}

```

## super 关键字的用法有三种

- 在子类的成员变量中，访问父类的成员变量
- 在子类的成员变量中，访问父类的成员方法
- 在子类的构造方法中，访问父类的构造方法

## this

用来访问本类内容

- 在本类的成员方法中，访问本类的成员变量
- 在本类成远方法，访问本类的另外一个成员方法
- 在本类的构造方法中，访问本类的另在一个构造方法

注意：

- this(...)调用也必须是构造方法的第一个语句,唯一一个

```java
public class Zi extents Fu{

    int num=20;

    public Zi(){
        this(123);
    }
    public Zi(int n){
        this(1,2)

    }
    //支持这种写法
    public Zi(int n,int m){
      this.Zi();//不支持这样

    }
    public void showNum(){
        int num=10;
        Sytem.out.println(num);//局部变量
        Sytem.out.println(this.num);//本类的成员变量
        Sytem.out.println(super.num);//父类的成员变量

    }
}
```

java 语言是单继承的，一个类的直接父类只有唯一一个

```java
 class D extends A,C{}这种为错误的写法
```

java 语言可以多级继承

```java
 class A{}
 class B extends A{}
 class C extends B{}
```

一个子类的直接父类是唯一的，但是一个父类可以拥有很多个子类。可以有很多个兄弟姐妹

```java
 class A{}
 class B extends A{}
 class C extends A{}
```
