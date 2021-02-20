# 线程

## 多线程

并发：指两个或者多个事件在同一个时间段发生。

并行：指两个或者多个事件在同一个时刻发生。

## 线程与进程

进程：是指一个内存中运行的应用程序，每个进程都有一个独立的内存空间，一个应用程序可以同时运行多个进程，进程也是程序的一次执行过程，是系统运行程序的基本单位；系统运行一个程序是一个进程从创建，运行到消亡的过程

线程：线程是进程中的一个执行单位，负责当前进程中程序的执行，一个进程中至少有一个线程。一个进程中是可以有多个线程的，这个应用程序也可以称之为多线程程序

## Thread 类

构造方法：

- public Thread():分配一个心的线程对象
- public Thread(String name):分配一个指定名字的新的线程对象
- public Thread(Runnable target):分配 i 一个带有指标目标的新的线程对象
- public Thread(Runnable target,String name):分配一个带有指定目标的线程对象并指定名字

常用方法：

- getName():获取当前线程对象
- start():分配一个带有指定目标新的线程对象
- run():此线程要执行的任务在此处定义代码
- sleep(long millis):使用当前正在执行的线程以指定的毫秒数暂停
- currentThread():返回对当前正在执行的线程对象的引用

设置线程的名称

- setName(名字)
- 创建一个带参数的构造方法，参数传递线程的名称，调用父类的带参数构造方法，把线程名称传递给父类让父类 Thread 给子类起一个名字

```java
  // MyThread 是自己写的一个class
  MyThread mt= new MyThread();
  mt.setName("小强")
  mt.satrt();
```

创建多线程的第二种方式：

定义一个 Runnable 接口来实现类，并且重写该接口的 run()方法，该 run()方法的方法体同样是该线程执行体。

创建 Runnable 并且实现的实例，并以此实例作为 Thread 的 target 来创建 Thread 对象，该 Thread 对象才是真正的线程对象

调用线程对象的 start()方法来启用

步骤：

- 创建一个 Runnable 实现方法
- 设置线程任务
- 创建一个 Runnable 接口的实现类
- 创建 Thread 类对象，构造方法中传递 Runnable 接口的实现类对象
- 调用 Thread 类类中的 start 方法，开启新的线程执行 run 方法

好处：

- 避免单线程的局限性，一个类只能继承一个类，类继承了 Thread 类就不能继承其他类，实现了 Runnable 接口，还可以继承其他的类，实现其他接口
- 增持了程序的扩展性，降低了程序的耦合性
- 实现 Runnable 接口的方式，把设置线程任务和开启新线程进行了分离（解耦）
- 实现类中，重写了 run 方法：用来设置线程任务
- 创建 Thread 类对象，调用 start 方法：用来开启新的线程

```java
public class MyRunnable implements Runnable{
    @Override
    public void run(){
        for(int i = 0;i<20;i++){
            System.out.println(Thread.currentThread().getName()+""+i);
        }
    }
}
```

```java
public sattic void main(String[] args){
    MyRunnable mr=new MyRunnable();
    Thread t= new Thread(mr);
    t.start();
}
```

匿名内部类方式实现线程的创建

- 使用线程的匿名内部类方式，可以方便的实现每个线程执行不同的线程任务操作
- 使用匿名内部类的方式实现 Runnable 接口，重新 Runnable 接口中的 run 方法

作用：简化代码，子类继承父类，重写父类的方法，创建子类对象合一步完成，把实现类接口，重写接口中的方法，创建实现对象合成一部完成

格式 new 父类/接口(){}

```java
 new Thread(){
     @Override
     public void run(){
         for(int i=0;i<20;i++){
             System.out.println(Thread.currentThread().getName()+"->"+i)
         }
     }.start();
     <!--线程接口-->

     Runnable r= new Runnable(){
         @Override
         public void run(){
                 for(int i=0;i<20;i++){
                 System.out.println(Thread.currentThread().getName()+"->"程序员")
             }
         }
       };
       new Thread(r).start();

        //或者
        new Thread(new Runnable(){
         @Override
         public void run(){
                 for(int i=0;i<20;i++){
                 System.out.println(Thread.currentThread().getName()+"->"程序员")
             }
         }
       }).satrt();

     }
 }
```

线程安全问题：

- 单线程是不会出现线程安全问题的
- 多线访问了共享的数据就会出现安全问题

解决线程安全问题：

- 同步代码块
- 同步方法
- 锁机制

同步代码块：synchronized 关键字可以用于方法中的某个区块中，表示只对这个区块的资源进行互斥访问

```java
 synchronized(同步锁){
   // 可能会出现线程安全问题的代码（访问了共享数据的代码）

 }
```

注意：

- 通过代码块中的锁对象，可以使用任意的对象
- 但是必须保证多个线程使用的锁对象是同一个
- 锁对象作用：把同步代码块锁住，只让一个线程子啊同步代码块中执行

同步锁：对象的同步锁只是一个概念，可以想象为在对象上标记了一个锁，也叫对象监视器

- 锁对象可以是任意类型
- 多个线程对象要使用同一把锁
  总结：同步中的线程，没有执行完毕不会释放锁，同步外的线程没有锁

## 同步方法

- 把访问了贡献数据的代码抽取出来，放在同步方法

```java
private int ticket=100;
@Override
public void run(){
    while(true){
        payTicket();
    }
}
public synchronized void payTicket(){
  if(ticket>0){
      try{
        Thread.sleep(10);
      }catch(InterruptedException e){
          e.printStackTrace();
      }
  }
  System.out.println(Thread.currentThread().getName()+"-->正在卖第"+ticket+"张票")
  ticket--;

}
```

同步方法也会把方法内部的代码锁住
