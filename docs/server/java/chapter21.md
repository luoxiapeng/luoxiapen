# 多态

- extends 继承或者 implements 实现，是多态性的前提

例如：小明是一个学生，但是同时也是一个人

- 代码当中体现多态性，其实就是一句话：父类引用指向子类对象
- 格式：
  ````java
  父类的名称 对象名=new 子类名称()
        或者接口名称 对象名= new 实现类的名称
      ```
  示例：
  ````

## Multi

```java
package demo04;

public class Multi {
    public static void main(String[] args) {
        // 使用多态的写法
        // 左侧父类的引用，指向右侧子类的对象
        Fu obj=new Zi();

        obj.method();
        obj.methodFu();
    }
}

```

## Fu

```java
package demo04;

public class Fu {
    public void method(){
        System.out.println("我是父类方法");
    }
    public  void methodFu(){
        System.out.println("我是父类的方法2");
    }
}

```

## Zi

```java
package demo04;

public class Zi extends Fu {
    @Override
    public void method() {
        System.out.println("我是子类的方法");
    }
}

```

## 访问成员变量的两种方式

- 直接通过对象名称访问成员变量：看等号的左边是谁，那就优先用谁，没有就继续往上找
- 间接通过成员方法访问成员变量：该方法属于谁，优先用谁，没有则向上找（子类没有覆盖重写那就使用父，如果进行覆盖重写那就使用子）

```java
 Fu obj = new Zi() //优先找Fu的，没有的化再找子的

 System.out.println(obj.num)
```

在多态的代码当中，成员方法的访问规则是：

- 看 new 的是谁，就优先用谁，没有就向上找
- 口诀：编译看左边，运行看右边 (除静态方法)

对比：

成员变量：编译看左边，运行还看左边

成员方法：编译看左边，运行看右边

多态的好处：

无论右边 new 的时候换成哪个子类对象，对左边来说，没有区别
