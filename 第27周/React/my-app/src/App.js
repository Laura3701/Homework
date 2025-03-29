// App.js 是项目的根组件，被引入到 index.js 中，然后渲染到页面上
// APP ->index.js ->public里面的index.html（root）

// import logo from './logo.svg';
// import './App.css';
// const count = 100
// function getName() {
//   return 'Jack'
// }
// function App() {
//   return (
//     <div className="App">
//       this is App
//       {/* 1. 使用引号传递字符串 */}
//       {'this is string'}

//       {/* 2. 识别 JS变量 */}
//       {count}

//       {/* 3. 函数调用，显示的是函数的返回值！ */}
//       {getName()}

//       {/* 3.1 方法调用，提问：这个写法不熟悉！ */}
//       {/* 解释：new 一个 Date 对象，它有一个方法是 getDate() */}
//       {new Date().getDate()}

//       {/* 4. 使用 JS对象 */}
//       {/*外层是识别表达式的语法，内层是识别对象的结构 */}
//       {/* 提问：这里不是修改的属性吗？为什么是对象？ */}
//       <div style={{ color: 'red' }}>this is div</div>
//     </div>
//   )
// }


// // 1. 列表渲染

// const list = [
//   { id: 1001, name: 'vue' },
//   { id: 1002, name: 'React' },
//   { id: 1003, name: 'Angular' }
// ]

// function App() {
//   return (
//     <div className="App" >
//       this is App
//       {/* 渲染列表 */}
//       <ul>
//         {/* item是数组里的每一个对象 .name 是每个对象对应的名字 */}
//         {/* 只要遍历渲染，就需要通过一个key绑定 */}
//         {list.map(item => <li key={item.id}>{item.name}</li>)}
//       </ul>
//     </div>
//   )
// }



// // 2. 条件渲染
// // 要先声明 isLogin
// const isLogin = true

// function App() {
//   return (
//     <div className="App">
//       {/* 逻辑与 && */}
//       {isLogin && <span>this is App</span>}

//       {/* 三元运算 */}
//       {isLogin ? <span>Jack</span> : <span>loading...</span>}
//     </div>
//   )
// }




// // 3. 复杂的条件渲染

// // 定义文章类型
// const ariticleType = 1 // 0 1 3 分别代表无图、单图、三图

// // 定义核心函数（根据文章类型返回不同的JSX模板）
// function getArticleTem() {
//   if (ariticleType === 0) {
//     return <div>无图</div>
//   } else if (ariticleType === 1) {
//     return <div>单图</div>
//   } else {
//     return <div>三图</div>
//   }
// }


// // 通过调用函数，根据不同的 article赋值 渲染不同的模板
// function App() {
//   return (
//     <div className="App">
//       {getArticleTem()}
//     </div>
//   )
// }




// 4. react中的事件绑定
// 什么事件 on后面就写什么名字
// function App() {
// // 1. 基础绑定
// const handleClick = () => {
//   console.log('button被点击了')
// }

// // 2. 增加一个事件参数e，箭头函数的括号里要写e
// const handleClick = (e) => {
//   console.log('button被点击了', e)
// }

// // 3. 传递自定义参数
// const handleClick = (name) => {
//   console.log('button被点击了', name)
// }

// //4. e 和 自定义参数同时传
// //注意 箭头函数的括号里要写参数！！！！！！
//   const handleClick = (name, e) => {
//     console.log('button被点击了', name, e)
//   }
//   return (
//     <div className="App">
//       <button onClick={(e) => handleClick('jack', e)}>click me</button>
//     </div>
//   )
// }




// 组件
// 1. 定义一个组件
// function Button() {
//   // 业务逻辑
//   return <button>click me</button>
// }

// // 箭头函数的写法
// const Button = () => {
//   // 业务逻辑
//   return <button>click me</button>
// }



// function App() {
//   return (
//     <div className="App">
//       {/* 渲染组件的两种方式 */}

//       {/* 1. 自闭和 */}
//       <Button />
//       {/* 2. 成对标签，注意这里 Button 首字母要大写！*/}
//       <Button></Button>
//     </div>
//   )
// }





// useState 实现一个计数器按钮
// useState函数来自于 React内部，所以要先导入才能使用

import { useState } from 'react'
function App() {
  // 1. 调用useState添加一个状态变量
  // 下面是数组的解构赋值的写法, 第一个count是状态变量，第二个setCount是修改状态变量的方法
  const [count, setCount] = useState(0)

  // 2. 点击事件回调
  const handleClick = () => {
    // 作用：
    // 1. 用传入的新值修改 count
    // 2. 重新使用新的 count 渲染 UI
    setCount(count + 1) // 点击一次加1
  }
  return (
    <div className="App">
      {/* 绑定事件的方式是 onClick={handleClick}*/}
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}

// 为什么不能导出两个？不是 defult 也不可以
export default App
