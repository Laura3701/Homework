history 对象的作用是管理历史记录，用于浏览器的后退和前进

history对象的方法：

1.` history.back()`

2. `history.forward()`

3. `history.go(参数)`
  参数如果是 1，则前进 1 个页面，如果是 -1 ，则后退一个页面

4. 书写思路：

  （1）先在 HTML 中写一个后退按钮
  （2）然后在 JS 中获取按钮
  （3）给按钮注册点击事件，事件的方法中写：`history.back()`
      如果写：`history.go(-1)`也是一样的效果
      这个点击事件的意思是 click 按钮之后，就 back()