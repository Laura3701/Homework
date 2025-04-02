// import logo from './logo.svg'
// import './App.css'

// import { useState } from 'react'

// function App() {
//   let [count, setCount] = useState(0)

//   const handleClick = () => {
//     setCount(count + 1)
//   }

//   // 修改对象状态
//   // useState({name: 'Jack'}) 这是传入一个对象的意思
//   // const [form, setForm] 这是对象的解构，form 是对象，setForm是修改对象的方法
//   const [form, setForm] = useState({ name: 'Jack' })

//   const changeForm = () => {
//     setForm({
//       ...form,
//       name: 'Tom'
//     })
//   }


//   return (
//     <div className="App">
//       <button onClick={handleClick}>{count}</button>
//       <button onClick={changeForm}>{form.name}</button>
//     </div>
//   )
// }



// React 组件的样式
// 先导入样式文件
import './index.css'


const style = {
  color: 'red',
  fontSize: '50px'
}

function App() {
  return (
    <div>
      {/* 行内样式 */}
      <span style={style}>This is a span</span>
      {/* className 类名改变样式 */}
      <span className="foo">This is a span</span>
    </div>
  )
}

export default App
