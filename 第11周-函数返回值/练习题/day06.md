###### 26. JavaScript 全局执行上下文为你做了两件事：全局对象和 this 关键字。

- A: 对
- B: 错
- C: 看情况



###### 27. 输出是什么？

```
for (let i = 1; i < 5; i++) {
  if (i === 3) continue
  console.log(i)
}
```

- A: `1` `2`
- B: `1` `2` `3`
- C: `1` `2` `4`
- D: `1` `3` `4`



###### 28. 输出是什么？

```
String.prototype.giveLydiaPizza = () => {
  return 'Just give Lydia pizza already!'
}

const name = 'Lydia'

name.giveLydiaPizza()
```

- A: `"Just give Lydia pizza already!"`
- B: `TypeError: not a function`
- C: `SyntaxError`
- D: `undefined`



###### 29. 输出是什么？

```
const a = {}
const b = { key: 'b' }
const c = { key: 'c' }

a[b] = 123
a[c] = 456

console.log(a[b])
```

- A: `123`
- B: `456`
- C: `undefined`
- D: `ReferenceError`



###### 30. 输出是什么？

```
const foo = () => console.log('First')
const bar = () => setTimeout(() => console.log('Second'))
const baz = () => console.log('Third')

bar()
foo()
baz()
```

- A: `First` `Second` `Third`
- B: `First` `Third` `Second`
- C: `Second` `First` `Third`
- D: `Second` `Third` `First`



