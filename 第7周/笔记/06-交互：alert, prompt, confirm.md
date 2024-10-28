### 交互：alert、prompt 和 confirm

与用户交互的函数：`alert`，`prompt` 和`confirm`

####1. alert

显示一条信息，并等待用户按下 “OK”

~~~javascript
alert("Hello");
~~~

弹出的这个带有信息的小窗口被称为 **模态窗**

“modal” 意味着用户不能与页面的其他部分（例如点击其他按钮等）进行交互，直到他们处理完窗口

在上面示例这种情况下 —— 直到用户点击“确定”按钮，都无法进行其他操作

#### 2. prompt

`prompt` 函数接收两个参数：

~~~javascript
result = prompt(title, [default]);
~~~

`title`

显示给用户的文本

`default`

<u>可选的</u>第二个参数，指定 input 框的初始值

- `prompt` 将返回用户在 `input` 框内输入的文本
- 如果用户取消了输入，则返回 `null`

~~~javascript
let age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!
~~~

注意：

IE 浏览器会提供默认值

第二个参数是可选的。但是如果不提供的话，Internet Explorer 会把 `"undefined"` 插入到 prompt。

####3. confirm

#####3.1 样式

`confirm` 函数显示一个模态窗口，带有：

- `question` 
- 确定和取消两个按钮

#####3.2 语法

(实际应用中 question 需要声明 或设定具体的值，比如字符串)

~~~javascript
result = confirm(question);
~~~

例：

~~~javascript
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // 如果“确定”按钮被按下，则显示 true
~~~

#### 总结

#####3 个浏览器的特定函数

- `alert`显示信息。
- `prompt` 显示信息要求用户输入文本。点击确定返回文本，点击取消或按下 Esc 键返回 null。
- `confirm`显示信息等待用户点击确定或取消。点击确定返回 `true`，点击取消或按下 Esc 键返回 `false`。

模态窗口的位置和外观不能修改