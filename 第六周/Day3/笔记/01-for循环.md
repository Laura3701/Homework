### for 循环

####1. 基本使用

#####1.1 语法

```javascript
for (变量起始值；终止条件，变量变化量) {
  // 循环体
}
```

#####1.2 循环数组

```javascript
  for (let i = 0; i <= arr.length - 1; i++) {
      console.log(arr[i])
    }
```

#####1.3 退出循环：

continue：退出本次循环

break：退出全部循环

#####1.4 了解：

- while(true) 构造无限循环，需要使用 break 退出循环

```javascript
while (true) {
      let str = prompt('你爱我吗')
      // 退出条件 爱
      if (str === '爱') {
        break
      }
    }
```

- for(;;) 也可以构造无限循环，同样需要使用 break 退出循环

#####1.5 for 和 while 用哪个？

- 明确循环次数，用 for（遍历数组）；
- 不确定循环次数，用while



#### 2. 循环嵌套

 外面的执行1次，里面要执行所有次；再回到外层执行1次，再到里面

