#### 两种注册事件的区别

1. 传统on注册
（1）同一个对象，后面注册的事件**会覆盖**前面的事件（同名事件）
（2）只有冒泡，没有捕获
（3）解绑方式：使用 null 覆盖

~~~javascript
// 绑定事件
btn.onclick = function () {
  alert('点击了')
}

// 解绑事件
btn.onclick = null
~~~

2. 事件监听注册
（1）语法：.addEventListener(事件类型，事件处理函数，是否使用捕获)
（2）后面注册的事件**不会覆盖**前面的
（3）第三个参数是用来确定是冒泡还是捕获
    - true 是捕获，从大到小，由外向内执行
    - 默认的 flase 是冒泡，从小到大，由内向外执行
（4）解绑方式：.removeEventListener('事件类型',函数,[捕获/冒泡])
（5）**匿名函数无法解绑**

~~~javascript
function fn() {
  alert('点击了')
}

// 绑定事件
btn.addEventListener('click', fn)
// 解绑事件
btn.removeEventListener('click', fn)
~~~

#### 两种鼠标经过事件的区别
- mouseover and mouseout 有冒泡效果
- mouseenter and mouseleave 没有冒泡效果（推荐）

事件冒泡是指当一个元素触发了某个事件，该事件会从被触发的元素开始逐层向上冒泡到父元素，直到达到文档树的根节点。 

也就是说，事件会先在最内层的元素上触发，然后逐级向外传递，依次触发**每个父级元素的相同事件**。 

要阻止事件冒泡，可以使用事件对象的`stopPropagation()`方法。

补充：mouseover的使用场景
如果想要鼠标经过触发事件，并且要事件委托，就要用 mouseover，因为需要从子元素到父元素的冒泡

