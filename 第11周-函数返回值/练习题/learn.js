/* var 变量提升 */

// var a

// function getName() {
//   console.log("jack")
// }

// console.log(a);

// let a = 'jack'



// console.log(a)
// var a = "hi word"

// console.log('222')


/* const let */

// var a
// console.log(a)
// a = "hi word"



// function getName() {
//   console.log("jack")
// }

// getName()

// let sayHi = function() {
//   console.log('222')
// }

function handleData (arr = [], flag) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }

  // 注意这里全等
  // 提问：不传递参数的情况怎么写？
  if (flag === true) {
    return sum
  }

  if (flag === false) {
    return sum / arr.length
  }

}

// 怎么把用户输入的内容变成数组？
// let newArr = []
// newArr = newArr.push(newArr[i])
// let re = handleData(newArr, false)

let re = handleData([1, 2])
console.log(re)