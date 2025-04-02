1. 行内样式（不推荐）

外层大括号是为了识别里面的对象

~~~javascript
<div style = {{ color: 'red', fontSize: '50px' }}>This is div</div>
// 效果：文字颜色为红色, 注意fontSize是驼峰的写法
~~~

2. class 类名控制

  - 先创建一个 index.css

    ~~~javascript
    .foo {
      color: 'red';
    }
    ~~~

  - 然后在 App.js 中引入 index.css
    import './index.js'

    ~~~javascript
    function App (){
      return (
        <div>
          <span className = 'foo'>This is a span</span>
        </div>
      )
    }
    ~~~