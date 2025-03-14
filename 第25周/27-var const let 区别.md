#### 1. var

  1. 可以重复声明同一个名字的变量
    var num = 1
    var num = 2

  2. var 声明的变量，可以先使用再声明。原理是 var 有变量提升，即使在后面才声明，也会被系统默认放到前面声明。（提升的只是变量，赋值没有被提升）
    console.log(num) // undefined
    var num = 1

#### 2. let

  1. 不能用 let 声明同一个名字的变量两次

  2. let 变量提升不会显示 undefined，而是会报错



#### 3. const

  1. const 声明的是常量，也就是不能被重新赋值。这是跟 let 的区别，let 是可以用于给变量重新赋值的


