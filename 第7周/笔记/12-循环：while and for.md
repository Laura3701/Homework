### 循环：while 和 for

#### 1. while 循环

语法：

~~~javascript
while (condition) {
  // 循环体
}
~~~

当 `condition` 为真时，执行循环体的 `code`

任何表达式或变量都可以是循环条件，而不仅仅是比较。

在 `while` 中的循环条件 condition 会被计算，计算结果会被转化为布尔值。

~~~javascript
let i = 3;
while (i) { // 当 i 变成 0 时，条件为假，循环终止
  alert( i );
  i--;
}
~~~

单行循环体不需要大括号

~~~javascript
let i = 3;
while (i) alert(i--);
~~~

#### 2. do...while 循环

`do..while` 可以将条件移至循环体 **下面**：

不管条件是否为真，循环体 **至少执行一次**

~~~javascript
do {
  // 循环体
} while (condition);
~~~

#### 3. "for"循环

最常使用的循环形式

#####3.1 语法

~~~javascript
for (begin; condition; step) {
  // ……循环体……
}
~~~

#####3.2 i 用于计数的内联变量

这里“计数”变量 i， 是 “内联”变量，只在循环中生效

~~~javascript
for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // 错误，没有这个变量。
~~~

#####3.3 省略语句段

~~~javascript
let i = 0; // 我们已经声明了 i 并对它进行了赋值

for (; i < 3; i++) { // 不再需要 "begin" 语句段
  alert( i ); // 0, 1, 2
}
~~~

~~~javascript
let i = 0;

// 移除 i++
for (; i < 3;) {
  alert( i++ );
}
~~~

~~~javascript
// 删除所有内容，从而创建一个无限循环
// 两个分号必须存在

for (;;) {
  // 无限循环
}
~~~

####4. 跳出循环

通常条件为假时，循环会终止。

- `break`: 结束当前循环，直接跳到 alert


~~~javascript
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
~~~

- `continue`：`break` 的“轻量版”，停止当前循环

  使用 `continue` 来只输出奇数：

~~~javascript
for (let i = 0; i < 10; i++) {

  // 如果为真，跳过循环体的剩余部分，即alert的部分。
  // 也就是说，如果能被2整除，就不alert，因为被continue掉了。
  // 如果不能被2整除，也就是奇数的情况，才alert。
  // 这样alert出的都是奇数
  
  if (i % 2 == 0) continue;

  alert(i); // 1，然后 3，5，7，9
}
~~~

break 和 continue 不能应用于三元运算符

~~~javascript
(i > 5) ? alert(i) : continue; // continue 不允许在这个位置
~~~

#### 5. break / continue 标签

需要从多层嵌套的循环中跳出来

下述代码中我们的循环使用了 `i` 和 `j`，从 `(0,0)` 到 `(3,3)` 提示坐标 `(i, j)`：

~~~javascript
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // 如果我想从这里退出并直接执行 alert('Done!')
  }
}

alert('Done!');
~~~

我们需要提供一种方法，以在用户取消输入时来停止这个过程

在 `input` 之后的普通 `break` 会打破内部循环

标签可以实现！

**标签** 是在循环之前带有冒号的标识符：

~~~javascript
labelName: for (...) {
  ...
}
~~~

`break <labelName>` 语句跳出循环至标签处：

~~~javascript
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // 如果是空字符串或被取消，则中断并跳出这两个循环。
    if (!input) break outer; // (*)

    // 用得到的值做些事……
  }
}

alert('Done!');
~~~

- 上述代码中，`break outer` 向上寻找名为 `outer` 的标签并跳出当前循环。

  因此，控制权直接从 `(*)` 转至 `alert('Done!')`。


- `continue` 指令也可以与标签一起使用。在这种情况下，执行跳转到标记循环的下一次迭代。
- `break` 指令必须在代码块内。
- `continue` 只有在循环内部才可行。

**总结：**

- `while` —— 每次迭代之前都要检查条件。
- `do..while` —— 每次迭代后都要检查条件。
- `for (;;)` —— 每次迭代之前都要检查条件，可以使用其他设置。

**用法：**

- 通常使用 `while(true)` 来构造“无限”循环，可以通过 `break` 指令来终止。
- 不想在当前迭代中做任何事，并且想要转移至下一次迭代，那么可以使用 `continue` 
- 标签是 `break/continue` 跳出嵌套循环以转到外部的唯一方法





