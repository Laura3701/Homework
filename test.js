const HEIGHT = 100;
const WIDTH = 200;

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let v = arr.at(0)

// console.log(v);

// concat
// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// let arr2 = [11,12,13,14,15,16,17,18,19,20];

// let arr = arr1.concat(arr2);
// console.log(arr);

// 合并数组
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);


// map 和 forEach 的区别

// let arr = [1,2,3,4, ,6,7,8,,10];

// let arr1 = arr.map((item,index) => {
//     return item * 2;
// })

// console.log(arr1);

// some , every
/* 返回 */
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let v = arr.some(item => item > 8)
// console.log(v);

// let v = arr.every(item => item > 0)
// console.log(v); // boolean

// find  findIndex findLast findLastIndex
// let v = arr.find(item => item > 20);
// let v = arr.findIndex(item => item > 4);
// let v = arr.findIndex(item => item > 20);
// console.log(v);

// let arr1 = [1,2,3,4,5,6,7,8,9,10];
// let v = arr1.findLastIndex(item => item > 5)
// let v = arr1.findLast(item => item < 3)

// console.log(v)


// filter 返回一个数组

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let arr1 = arr.filter(item => item > 5);
// arr1.push(11);
// console.log(arr1);

// reduce

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let v = arr.reduce((pre,cur) => {
//     return pre + cur;
// })
// console.log(v);


// flat
// let arr = [
//     [
//         [1, 2, 3],
//     ],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// let arr1 = arr.flat(infinity);
// console.log(arr1);

// reverse/fill/copyWithin

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.reverse();
// console.log(arr);

// console.log(arr);
// let arr = [1, 2, 3]
// arr.fill('a', 1, 3);
// console.log(arr);

// let arr = [1]

// arr.fill('a', 1, 2);

// console.log(arr);

// let arr = [1, 2, 4, 4]
// arr.copyWithin(0, 3);
// console.log(arr);

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }
// let v = Object.entries(obj);
// console.log(v);

// delete obj.a;

// console.log(obj);


// 返回一个布尔值
// let v = obj.hasOwnProperty('a');
// console.log(v);

// assign

// let obj1 = {
//     a: 1,
//     b: 2,
//     c: 3,
// }

// let obj2 = {
//     a: 'a',
//     e: 5,
//     f: 6,
// }

// let v = Object.assign(obj1, obj2);
// console.log(v);


/*  */

// const deepCopy = JSON.parse(JSON.stringify(obj));

/* 字符串的方法 */


// let obj1 = {
//     a: 1,
//     b: 2,
//     c: 3,
//     "231-123": '12312312'
// }
// let newObj = {}


// // newObj.a = obj1.a;
// // newObj.b = obj1.b;
// // newObj.c = obj1.c;

// for (let key in obj1) {
//     // newObj[key] = obj1[key];
//     console.log(obj1[key]);

// }


// 字符串的方法
let str = 'abcde';
// let v = str.split('1');
// console.log(v);

// let v = str.slice(1, 3);
// console.log(v);
// console.log(str);

// let s = str.substring(1, 3);
// console.log(s);
// console.log(str);

// let s = str.toUpperCase();
// console.log(s);

// let v = s.toLocaleLowerCase();
// console.log(v);

// let arr = [1, 2, 3, 4]

// for (let i = 0; i < arr.length; i++) {

//     switch (i) {
//         case 0:
//             console.log('我是第一个', i)
//         // break

//         case 1:
//             console.log('我是第二个', i)
//             break

//         case 2:
//             console.log('我是第三个', i)
//             break

//         case 3:
//             console.log('我是第四个', i)
//             break;
//         default:
//             console.log('我是默认')
//             break;
//     }

// }





// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }

// let fruit = 'apple'

// const bag = {
//     [fruit]: 5,
// }

// console.log(bag.fruit);

// let v = setInterval(function () {
//     console.log('v')
// }, 1000)

// console.log(v);

// clearInterval(v)


function one() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('我是第1个');
        }, 4000);
        setTimeout(() => {
            reject('我是第2个');
        }, 1000);
    });
}

function two() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('我是第3个');
        }, 500);
        setTimeout(() => {
            reject('我是第4个');
        }, 5000);
    });
}

// all

Promise.all([one(), two()]).then((res) => {
    console.log('成功', res);
}).catch((err) => {
    console.log("失败", err);
})





// two().then(res => {
//     console.log('成功', res);
// }).catch(err => {
//     console.log("失败", err);
// })