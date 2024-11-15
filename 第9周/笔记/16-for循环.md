### for循环

#### 1. 语法

~~~javascript
for (变化起始量；终止条件；变量变化量) {
  // 循环体
}
  // 必须加 分号，否则当一行代码看
~~~

说明：

let i = 1只执行一次

判断 1是否 <= 3，判断条件为真

打印输出

变量自增

再判断 i 是否 <= 3

此时 i 是 2，条件为真，打印输出

i++ 变量再次自增

...

#### 2. for 循环 - 遍历数组

**遍历：点名**

要把数组中的每一项打印出来，不能直接`console.log(arr)`，因为这样写的话，每个数据都是连在一起的，就像在数组中一样。要把数据分开显示，需要`console.log(arr[i])` 才能打印到里面具体的值。

如果用 `document.write(arr)`, 页面显示的每个数据之间是有逗号的，就像在数组中一样；而 `document.write(arr[i])` 这样写，数据间就没有逗号了。



#### 3. for 循环 - 退出循环

~~~javascript
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    continue 
  }
  console.log(i)
} 

// continue：退出本次循环，本次循环中 continue下面的语句不执行，也就是不 log, 直接回到 i++，把 i变成 4

// 但是循环外的语句还是会执行，也就是说 for 大括号后面的还是继续执行，不受 continue 的影响

// 如果是 break, 直接跳到大括号外去执行；而 continue 是 回到 i++
~~~

了解：

**无限循环：**

1. while(true), 需要使用 break 退出循环
2. for(; ;), 同样需要使用 break 退出循环



#### 4. for 和 while 的区别

- 明确循环次数，用 for，比如数组（`arr.length` 是确定的）
- 不明确循环次数，使用 while