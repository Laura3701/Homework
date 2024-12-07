###### 1. 输出是什么？A

<!-- 标记 -->
var let const 区别
```
function sayHi() {
  console.log(name)
  console.log(age)
  var name = 'Lydia'
  let age = 21
}

sayHi()
```

- A: `Lydia` 和 `undefined`
- B: `Lydia` 和 `ReferenceError`
- C: `ReferenceError` 和 `21`
- D: `undefined` 和 `ReferenceError`



###### 2. 输出是什么？

```
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)
}
```

- A: `0 1 2` 和 `0 1 2`
- B: `0 1 2` 和 `3 3 3`
- C: `3 3 3` 和 `0 1 2`



###### 3. 输出是什么？

```
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perimeter: () => 2 * Math.PI * this.radius
}

shape.diameter()
shape.perimeter()
```

- A: `20` and `62.83185307179586`
- B: `20` and `NaN`
- C: `20` and `63`
- D: `NaN` and `63`



###### 4. 输出是什么？A

```
+true;
!"Lydia";
```

- A: `1` and `false`
- B: `false` and `NaN`
- C: `false` and `false`



###### 5. 哪一个是正确的？

```
const bird = {
  size: 'small'
}

const mouse = {
  name: 'Mickey',
  small: true
}
```

- A: `mouse.bird.size`是无效的
- B: `mouse[bird.size]`是无效的
- C: `mouse[bird["size"]]`是无效的
- D: 以上三个选项都是有效的