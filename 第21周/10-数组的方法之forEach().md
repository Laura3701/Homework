forEach() 用于调用数组的每个元素，并将元素传递给回调函数

使用场景：
遍历数组的每个元素，**适用于遍历数组对象**

提问：为什么适用于遍历数组对象？？？

只遍历，不返回值，**map()有返回值, forEach()没有**

也就是如果把 arr 赋值给一个新的数组 newArr，就算在 arr 的 function 里面写了return，也 log 不出 newArr，*因为 arr 没有返回值，所以 newArr 是 undefined*

**所以没有返回值的意思是：赋值给变量后，log该变量会显示undefined**