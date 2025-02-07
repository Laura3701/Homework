map() 用于遍历数组处理数据，并**返回新的数组**，也就是用来**迭代数组**

**为了得到数据才会使用 map，不仅是为了遍历**

map 也称为**映射**，指的是元素之间的**对应关系**

map有**返回值**，forEach没有返回值

~~~javascript

  const arr = ['red', 'blue', 'pink']

  const newArr = arr.map(function (ele, index) {
    return ele + '颜色'
  })

  console.log(newArr) // 自动遍历并添加 '颜色'
  //  ['red颜色', 'blue颜色', 'pink颜色']

~~~
