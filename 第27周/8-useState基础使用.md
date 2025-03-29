#### 1. 什么是 useState
useState 是一个 React Hook 函数，它允许我们向组件添加一个*状态变量*，从而控制影响组件的渲染结果

#### 2. 状态变量
和普通JS变量不同的是，状态变量一旦发生变化，组件的视图UI也会跟着变化（*数据驱动视图*）

useState 用于创建状态变量

#### 3. useState语法

`const [count, setCount] = useState(0)`

  - useState 是一个函数，返回值是一个数组，也就是被赋值的这个数组

  - 数组中的第一个参数是*状态变量*，第二个参数是*set函数*，用于修改状态变量（通过调用函数来修改）

  - useState 后面的 0，是 count 的初始值