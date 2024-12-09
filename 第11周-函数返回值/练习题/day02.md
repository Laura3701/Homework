###### 6. 输出是什么？

```
let c = { greeting: 'Hey!' }
let d

d = c
c.greeting = 'Hello'
console.log(d.greeting)
```

- A: `Hello`
- B: `undefined`
- C: `ReferenceError`
- D: `TypeError`



###### 7. 输出是什么？

```
let a = 3
let b = new Number(3)
let c = 3

console.log(a == b)
console.log(a === b)
console.log(b === c)
```

- A: `true` `false` `true`
- B: `false` `false` `true`
- C: `true` `false` `false`
- D: `false` `true` `true`



###### 8. 输出是什么？

```
class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor
    return this.newColor
  }

  constructor({ newColor = 'green' } = {}) {
    this.newColor = newColor
  }
}

const freddie = new Chameleon({ newColor: 'purple' })
freddie.colorChange('orange')
```

- A: `orange`
- B: `purple`
- C: `green`
- D: `TypeError`



###### 9. 输出是什么？B

```
let greeting
greetign = {} // Typo!
console.log(greetign)
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`



###### 10. 当我们这么做时，会发生什么？

```
function bark() {
  console.log('Woof!')
}

bark.animal = 'dog'
```

- A: 正常运行!
- B: `SyntaxError`. 你不能通过这种方式给函数增加属性。
- C: `undefined`
- D: `ReferenceError`