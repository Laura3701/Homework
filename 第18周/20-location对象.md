`window.location` window 可省略

location也是一个对象，是window里面的对象，包含了 **URL地址**

#### 一、location对象的属性

  1. `location.href` 获得当前页面的链接，如果给其赋值，则是跳转

    通过**给 location.href 赋值一个新的网址，来改变窗口的地址，实现页面跳转**，比如：
    `location.href = 'http://www.baidu.com'`使得窗口的地址变为百度

  2. `location.search` 获取地址中？后面的部分
    （注册时输入的用户名、密码会显示在？后面）

  3. `location.hash` 获取地址中 # 后面的部分
    （切换页面的不同栏目，不跳转页面，只切换部分内容，#后面的值发生变化）

      ~~~javascript
      <a href = '#/my'>我的</a> // console.log(location.hash)是 #/my
      <a href = '#/friend'>关注</a>
      <a href = '#/download'>下载</a>
      ~~~

#### 二、location对象的方法

  `location.reload()` 刷新当前页面

  应用：
  
  - 页面上有一个按钮，作用是点击按钮刷新页面

  - 在 js 中获取按钮，然后给按钮注册点击事件

  - 事件的 function 里面写 location.reload(true)

  - true 表示强制刷新，等于 control + F5，意思是不从本地取数据，而是在线获得数据


