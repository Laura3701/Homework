### null 空类型

~~~javascript
let obj = null

console.log(obj) // null
~~~



**null 和 undefined 区别**

1. undefined 表示没有赋值
2. null 表示赋值了，但是内容为空
3. null 是用来作为对象的值，只是内容为空

~~~javascript
console.log(undefined + 1) // NaN

console.log(null + 1) // 1
~~~

