规则：

#### 1. 简单数据类型的修改规则

状态不可变，在React种，状态呗认为是只读的，应该*替换它而不是修改它*，直接修改状态不能引发视图更新

~~~javascript
const handleClick = () => {
  // 里面不能写 count++
  // 而要写：
  setCount(count + 1)
}

~~~

#### 2. 复杂数据类型的修改规则（对象）

需要传给set方法一个*全新的对象*来进行修改

~~~javascript
const [form, setForm] = useState({
  name: 'jack'
})

const handleChangeName = () => {
  setForm({
    ...form, // 展开运算符展开form
    name:'john' // 修改其中的一个属性
  })
}

~~~