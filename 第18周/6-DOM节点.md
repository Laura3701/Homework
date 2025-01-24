#### 1. 什么是 DOM 节点

  DOM树里面每一个内容都称为节点

#### 2. DMO 节点类型

- 元素节点：所有标签，比如 <div>，<html>是最大的根节点，<body>也是节点

- 属性节点：所有属性，比如 href，id 和 class 也是属性节点

- 文本节点：比如 <div> 里面的字

- 其他

**元素节点最重要！（标签）**

#### 3. 元素节点的关系

通过关系查找节点

- 父节点：parentNode 属性，返回最近一级的父节点，找不到返回 null

  ~~~javascript
  // 查找父节点
  子元素.parentNode 
  ~~~


- 子节点

  `childNodes` 获得所有子节点，包括文本节点（空格、换行）等

  **`children`属性（重点）**
      - 仅仅获得*元素*节点
      - 返回的是*伪数组*，所以就算 ul 里面只有一个 li，也要写 `ul.children[0]`（查找子节点）
`
  ~~~javascript
  // 查找子节点，这里查找的是 ul中的第一个 li
  ul.children[0]

  // 删除子节点
  ul.removeChild(ul.children[0])

  // 子节点插入到父元素的最后，这里把 li 插入到 ul 的最后
  ul.appendChild(li)

  // 插入到父元素中某个子元素的前面
  // 父元素.insertBefore(要插入的元素， 在那个元素前面)
  ul.insertBefore(li, ul.children[0])
  ~~~

- 兄弟节点

  `nextElementSibling`属性，查找**下一个**兄弟节点

  `previousElementSibling`属性，查找**上一个**兄弟节点
