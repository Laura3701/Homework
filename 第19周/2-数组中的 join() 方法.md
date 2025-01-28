join() 方法用于把数组中的所有元素**转化为一个字符串**

join() 括号里的参数是分隔符，如果括号里是空字符串''，则所有元素之间都没有任何字符，是连在一起的

~~~javascript

  const arr = ['red', 'blue', 'pink']

  const newArr = arr.map(function (ele, index) {
    return ele + '颜色'
  })
  
  console.log(newArr.join()) // 字符串，小括号为空则逗号分隔
  // red颜色,blue颜色,pink颜色

~~~