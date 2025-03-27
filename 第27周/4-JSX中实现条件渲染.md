#### 1. 什么是条件渲染
根据不同情况显示不同的渲染结果。比如登录时，如果是 true 则显示 Jack, 如果是 false 则显示已登录

#### 2. 语法
在 React 中，可以通过 逻辑运算符&& 以及 三元表达式 实现基础的条件渲染

  - 逻辑运算符 && 用于控制一个元素的显示
  {flag && <span>this is span</span>}
  如果 flag 为 true 则显示 span，如果为 flase，则不显示 span

  - 三元运算符用于控制两个元素的显示
  {loading? <span>loading...</span> : <span> this is span</span>}
  如果为 true, 则显示第一个，否则显示第二个