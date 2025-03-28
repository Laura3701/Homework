React 基础事件绑定
语法： on + 事件名称 = {时间处理程序}，驼峰命名法

~~~javascript

function App (){
  const clickHandler = () => {
    console.log('按钮被点击了')
  }
  return (
    <button onClick={clickHandler}></button>
  )
}


~~~