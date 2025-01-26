navigator对象记录了浏览器自身的相关信息

用于**检测浏览器的版本及平台**
比如：如果浏览器是苹果版本，则跳转到移动端页面

~~~javascript

    !(function () {
      const userAgent = navigator.userAgent
      // 验证是否为Android或iPhone
      const android = userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)
      const iphone = userAgent.match(/(iPhone\sOS)\s([\d_]+)/)
      // 如果是Android或iPhone，则跳转至移动站点
      if (android || iphone) {
        location.href = 'http://m.itcast.cn'
      }
    })()

~~~

!的功能是表示前面的 function是一个整体，后面的第二个小括号也是一个整体