### "switch" 语句

`switch` 语句可以替代多个 `if` 判断。

####1. 语法：

至少一个 case 和 一个可选的 default

~~~javascript
switch(X) {
  case 'value1': // if (x === 'value1')
    ... 
    break
    
    case 'value2': // if (x === 'value2')
    ...
    break
    
    deault:
    ...
    break 
}
~~~

- 比较 `x` 值与第一个 `case`（也就是 `value1`）是否严格相等，然后比较第二个 `case`（`value2`）以此类推。

- 如果相等，`switch` 语句就执行相应 `case` 下的代码块，直到遇到最靠近的 `break`

  例：

  ~~~javascript
  let a = 2 + 2;

  switch (a) {
    case 3:
      alert( 'Too small' );
      break;
    case 4:
      alert( 'Exactly!' );
      break;
    case 5:
      alert( 'Too big' );
      break;
    default:
      alert( "I don't know such values" );
  }
  ~~~

<u>将 `a` 的值与 `case` 后的值进行比较</u>

第一个 `case` 后的值为 `3` 匹配失败。所以 alert( 'Too small' ) 不执行！

然后比较 `4`。匹配，所以从 `case 4` 开始执行直到遇到最近的 `break`。

**如果没有 break，程序将不经过任何检查就会继续执行下一个 case。**

#### 2. 参数

 switch 后面的括号里，和 case 后面，可以放任何表达式

比如：

~~~javascript
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("this runs, because +a is 1, exactly equals b+1");
    break;

  default:
    alert("this doesn't run");
  
  // 这里 +a 返回 1
  // 这个值跟 case 中 b + 1 相比较，然后执行对应的代码。
~~~

#### 3. "case" 分组

如果我们想让 `case 3` 和 `case 5` 执行同样的代码：

~~~javascript
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) 下面这两个 case 被分在一组
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
~~~

`switch/case` 有通过 case 进行“分组”的能力，其实是 switch 语句没有 `break` 时的副作用。

因为没有 `break`，`case 3` 会从 `(*)` 行执行到 `case 5`。

注意：

#### 4. 类型很重要

switch 后面括号里的值，和 case 后面的值，是严格相等