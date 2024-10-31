### JavaScript 特性

#### 1. 代码结构

语句用分号分隔：

`alert``(``'Hello'``)``;` `alert``(``'World'``)``;`

通常，换行符也被视为分隔符，因此下面的例子也能正常运行：

`alert``(``'Hello'``)`
`alert``(``'World'``)`

这就是所谓的「自动分号插入」。但有时它不起作用，例如：

`alert``(``"There will be an error after this message"``)`

`[``1``,` `2``]``.``forEach```(alert)`

函数声明、循环后，不需要加分号

#### 2. 严格模式

为了完全启用现代 JavaScript 的所有特性，我们应该在脚本顶部写上 `"use strict"`

~~~javascript
'use strict';

...
~~~

#### 3. 变量

可以使用以下方式声明变量：

- `let`
- `const`（不变的，不能被改变）
- `var`（旧式的）

变量里储存数据

有 8 种数据类型：

- `number` — 可以是浮点数，也可以是整数，
- `bigint` — 用于任意长度的整数，
- `string` — 字符串类型，
- `boolean` — 逻辑值：`true/false`，
- `null` — 具有单个值 `null` 的类型，表示“空”或“不存在”，
- `undefined` — 具有单个值 `undefined` 的类型，表示“未分配（未定义）”，
- `object` 和 `symbol`

`typeof` 运算符返回值的类型，但有两个例外：

```
typeof null == "object" // JavaScript 编程语言的设计错误
typeof function(){} == "function" // 函数被特殊对待
```

#### 4. 交互

PROMPT

提出一个问题 `question`，并返回访问者输入的内容，如果他按下「取消」则返回 `null`。

CONFIRM

提出一个问题 `question`，并建议用户在“确定”和“取消”之间进行选择。选择结果以 `true/false` 形式返回。

ALERT

输出一个消息 `message`。

这些函数都会产生 **模态框**，它们会暂停代码执行并阻止访问者与页面的其他部分进行交互，直到用户做出回答为止。

举例：

~~~javascript
let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true
~~~

#### 5. 运算符

#####5.1 算数运算符

取余运算符 `%` 和幂运算符 `**`

二进制加号 `+` 可以连接字符串。如果任何一个操作数是一个字符串，那么另一个操作数也将被转换为字符串：

~~~javascript
alert( '1' + 2 ); // '12'，字符串
alert( 1 + '2' ); // '12'，字符串
~~~

##### 5.2 赋值

简单的赋值：`a = b` 和合并了其他操作的赋值：`a *= 2`。

##### 5.3 三元运算符

唯一具有三个参数的操作：`cond ? resultA : resultB`。如果 `cond` 为真，则返回 `resultA`，否则返回 `resultB`。

##### 5.4 逻辑运算符

逻辑与 `&&` 和或 `||` 执行短路运算，然后返回运算停止处的值（`true`/`false` 不是必须的）。逻辑非 `!` 将操作数转换为布尔值并返回其相反的值。

##### 5.5 比较运算符

对不同类型的值进行相等检查时，运算符 `==` 会将不同类型的值转换为数字（除了 `null` 和 `undefined`，它们彼此相等而没有其他情况），所以下面的例子是相等的：

~~~javascript
alert( 0 == false ); // true
alert( 0 == '' ); // true
~~~

其他比较也将转换为数字。

严格相等运算符 `===` 不会进行转换：不同的类型总是指不同的值。

值 `null` 和 `undefined` 是特殊的：它们只在 `==` 下相等，且不相等于其他任何值。

大于/小于比较，在比较字符串时，会按照<u>字符顺序</u>逐个字符地进行比较。其他类型则被转换为数字。

#### 6. 循环

3种类型：

~~~javascript
// 1
while (condition) {
  ...
}

// 2
do {
  ...
} while (condition);

// 3
for(let i = 0; i < 10; i++) {
  ...
}
~~~

- 在 `for(let...)` 循环内部声明的变量，只在该循环内可见。但我们也可以省略 `let` 并重用已有的变量。
- 指令 `break/continue` 允许退出整个循环/当前迭代。使用标签来打破嵌套循环。

#### 7. "switch" 结构

可以替代多个 `if`

它内部使用 `===`（严格相等）进行比较。

~~~javascript
let age = prompt('Your age?', 18);

switch (age) {
  case 18:
    alert("Won't work"); // prompt 的结果是一个字符串，而不是数字
    break;

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}
~~~



#### 8. 函数

三种在 JavaScript 中创建函数的方式：

##### 8.1 函数声明

主代码流中的函数

~~~javascript
function sum(a, b) {
  let result = a + b;

  return result;
}
~~~

##### 8.2 函数表达式

表达式上下文中的函数

~~~javascript
let sum = function(a, b) {
  let result = a + b;

  return result;
}
~~~

##### 8.3 箭头函数

~~~javascript
// 表达式在右侧
let sum = (a, b) => a + b;

// 或带 {...} 的多行语法，此处需要 return：
let sum = (a, b) => {
  // ...
  return a + b;
}

// 没有参数
let sayHi = () => alert("Hello");

// 有一个参数
let double = n => n * 2;
~~~

- 函数可能具有局部变量：在函数内部声明的变量，或在其参数列表中。这类变量只在函数内部可见。
- 参数可以有默认值：`function sum(a = 1, b = 2) {...}`。
- 函数总是返回一些东西。如果没有 `return` 语句，那么返回的结果是 `undefined`。