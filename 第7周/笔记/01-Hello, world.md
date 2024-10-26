### Hello, world

#### 1. script 标签

将 JavaScript 程序插入到 HTML 文档的任何位置

```javascript
  <script>
    alert('Hello, world!');
  </script>
```

#### 2. 外部脚本

通过 `src` 特性（attribute）添加到 HTML 文件中

~~~javascript
<script src="/path/to/script.js"></script>
~~~

####3. src 的绝对路径和相对路径

- 绝对路径 

~~~javascript
<script src="/path/to/script.js"></script>
~~~

~~~javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
~~~

- 相对路径 

`src="./script.js" `- 表示当前文件夹中的 `"script.js"` 文件

####4. 补充：关于目录

. 当前目录

.. 上一层目录

####5. 注意：`src` 特性 和 `script` 标签内容 冲突

一个单独的 `<script>` 标签不能同时有 `src` 特性和内部包裹的代码。

~~~javascript
<script src="file.js">
  alert(1); // 此内容会被忽略，因为设定了 src
</script>
~~~

必须分开写：

~~~javascript
<script src="file.js"></script>
<script>
  alert(1);
</script>
~~~











