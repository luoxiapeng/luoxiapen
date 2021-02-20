# 对象的转型

- 对象的向上转型，其实就是多态的写法：

  ```java
  格式： 父类名称 对象名=new 子类名称(); Animal animal =new Cat（）;
  含义：右侧创建一个子类对象，把他当作父类来看代使用。 创建了一只猫，当作动物看代，没有问题
  注意事项：向上转型一定是安全的，从小范围转向大范围，从小范围的猫，转向大范围的动物

  类似：
  double num=100；// 正确 int->double 自动类型转换
  ```

- 对象的向下转型，其实是一个还原的动作。

  ```java
   格式：子类名称 对象名=(子类名称) 父类对象；
   含义：将父类对象，[还原]成为本来的子类对象

   Animal animal=new Cat() //本来是猫，向上转型成为动物

   Cat cat=(Cat) animal; //本来就是猫，已经被当动物了，还原回来就成为本身的猫
   cat.catchMouse();//猫里面的特有的抓老鼠的方法

   注意事项：
    - 必须保证对象本来创建的时候，就是猫，才能向下转型为猫
    - 如果对象创建的时候本来就不是猫，非要向下转型为猫，就会报错，（classCastException）

    类似：

     int num= (int) 10.0;// 可以

     int num=(int)10.5; //不可以，精度损失
  ```

## instanceof

如何知道一个父类引用的对象，本来是什么子类？

格式：

- 对象 instanceof 类名称
- 这将会得到一个 boolean 值结果，也就是判断前面的对象能不能当作后面类型的实例

```java
 if(animal instanceof Dog){
     Dog dog=(Dog) animal;
     dog.watchHouse();
 }
```

## final

- 意思就是最终的不可以改变的（常量）

常见四种用法

- 可以用来修饰一个类
- 修饰一个方法
- 修饰一个局部变量
- 修饰一个成员变量

当 final 关键字用来修饰一个类的时候，不能被子类继承

格式：

```java
 public final class 名称{

 }

```

含义：当前这个类不能有任何子类（太监类）

注意：一个类如果是 final 的，那么其中所有的成员方法进行覆盖重写

## 修饰一个方法

当 final 关键字用来修饰一个方法的时候，这个方法就是最终方法，也就是不能被覆盖重写

格式:

```java
修饰符 final 返回值类型 方法名称(参数列表){}
```

注意事项：

对于类，方法来说，abstract 关键字和 final 关键字不能同时使用，因为矛盾

## final 修饰局部变量

```java
 final int num=1000; //一次赋值终身不变，不允许改变
```

## final 修饰成员变量

对于成员变量来说，如果使用 final 关键字修饰，那么这个变量也照样不 vi 按

- 由于成员变量具有默认值，所有用来 final 之后必须手动赋值，不会再给默认值
- 对于 final 的成员变量，要么使用直接赋值，要么通过构造法方法进行赋值，二者选其一
- 必须保证类当中所有重载的构造方法，都最终会对 final 的成员变量进行赋值

```java
 public clas Person{
     private final String name;
     public Person(){
         name="关晓彤"
     }
     public Person(String name){
         this.name=name
     }
     public String getName(){
         return name;
     }
 }
```

## 权限修饰符

>                         public > protercted >default >private

- 同一个类（我自己）： yes yes yes yes
- 同一个包（我邻居）： yes yes yes no
- 同一个包子类（我儿子）：yes yes no no
- 不同包非子类（陌生人）：yes no no no

注意：defalut 不是关键字，而是不写

## 内部类

- 如果一个事物的内部包含另外一个事物，那么这就是一个类包含另外一个类

分类：

- 成员内部类
- 局部内部类

成员内部类的定义格式：

```java
 修饰符 class 外部类名称{
     修饰符 class 内部类名称{

     }
 }

```

注意：内用外，随意访问，外用内，需要内部类对象

```java
 public class Body{ // 外部类

    private String name="哈哈";

     public class Heart{ //内部类方法


         System.out.println(name)
     }
 }
```

如何使用成员内部类，有两种方式：

1. 间接方式：在外部类的方法中，使用内部类，然后 main 只是调用一下外部类的方法
2. 直接方式：公式： 类名称.内部类名称 对象名=new 外部类名称().new 内部类名称

## 匿名内部类

- 带具体实现的 父类或者父接口的 匿名的 子类对象
- 匿名内部类必须继承一个父类或者实现一个父接口。

格式：

```java
new 父类名或者接口名(){
    // 方法重写
    @Override
    public void method() {
    // 执行语句

    }

};

```

例子：

```java
public abstract class FlyAble{
  public abstract void fly();
}
```

```java
public class InnerDemo {
public static void main(String[] args) {
    /*
      1.等号右边:是匿名内部类，定义并创建该接口的子类对象
      2.等号左边:是多态赋值,接口类型引用指向子类对象
    */
    FlyAble f = new FlyAble(){
        public void fly() {
            System.out.println("我飞了~~~");
        }

    };
    //调用 fly方法,执行重写后的方法
    f.fly();
    }
}
```

## class 作为成员变量

在定义一个类 Role（游戏角色）时，代码如下：

```java
class Role {
    int id; // 角色id
    int blood; // 生命值
    String name; // 角色名称

}
```

```java
class Weapon {
    String name；// 武器名称
    int hurt； // 伤害值
}
```

```java
class Armour {
    String name；// 装备名称
    int protect；// 防御值
}
```
