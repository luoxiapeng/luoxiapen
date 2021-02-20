# 面向对象

特征：封装，继承，多态

如果不用 new 对象去实例化。如果第一次赋值了，第二次访问会保留对应的值

```java
 Study s=new Study();
 s.name="张三";
 s.age=18;

 Study t=s;
```

当一个对象作为参数，传递到方法当中时，其实传递的是一个地址值

```java
public class void main(String[] args){
    Phone one=new Phone();
    one.brand="苹果";
    one.price=833.0;
    one.color="土豪金";
    method(one);//传递进去的参数就是地址值
}
public static void method(Phone param){
    System.out.println(param.name)
}
```

```java
public class void main(String[] args){
    Phone two=getPhone();

}
public static void getPhone(){
    Phone one=new Phone();
    one.brand="苹果";
    one.price=833.0;
    one.color="土豪金";
    return one;
}
```

## 局部变量和成员变量有什么不一样

1. 定义的位置不一样
2. 局部变量：在方法的内部
3. 成员变量：在方法的外部，直接写在类当中

作用范围不一样：

局部变量：只有方法当中才可以使用

成员变量：整个类全都可以通用

默认值不一样：

局部变量：没有默认值，如果要想使用，必须手动赋值

成员变量：如果没有赋值，会有默认值，规则和数组一样

内存的位置不一样：

局部变量：位于栈内存

成员变量：位于堆内存

生命周期不一样：

局部变量：随着方法进栈而诞生，随着方法而被销毁

成员变量：跟着对象创建而诞生，随着对象被垃圾回收而消失

## 封装性

1. 方法就是一种封装
2. 关键字 private 也是一种封装
3. 封装就是将一些细节信息隐藏起来，对于外界不可见

找到最大值

```java
public class void main(String[] args){
    int[] array={5,2,3,1,4,78}
    int max=getMax(array);
    System.out.println("最大值："+max)

}
public static void getMax( int[] array){
   int max=array[0];
   for(int i=1;i<array.length;i++){
       if(aray[i]>max){
           max=array[i]
       }
   }
   return max;
}
```

## private

定义一个 person 类时，无法阻止不合理的数字被设置进来

解决方案：用 private 关键字将需要保护的成员变量进行修饰

一旦使用了 privare 超出本类之外就不能直接访问

```java
public class Person{
    String name;
    private int age;
    public void show(){
        System.out.println("我叫"+name+"年龄"+age)
    }
    <!--间接访问-->
    public void setAge(int num){
        age=num
    }
    public int getAge(){
        return age;
    }
}
```

当方法的局部变量和类的成员变量的时候，就根据就近原则有限使用局部变量

如果需要访问本类的成员变量，需要使用格式

```java
public class Person{
    String name;

    public void SayHello(String name){
        System.out.println("名字"+name)
    }
}
```
