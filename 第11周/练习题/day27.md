###### 131. 输出什么？

```
const emojis = ["🥑", ["✨", "✨", ["🍕", "🍕"]]];

console.log(emojis.flat(1));
```

- A: `['🥑', ['✨', '✨', ['🍕', '🍕']]]`
- B: `['🥑', '✨', '✨', ['🍕', '🍕']]`
- C: `['🥑', ['✨', '✨', '🍕', '🍕']]`
- D: `['🥑', '✨', '✨', '🍕', '🍕']`

###### 132. 输出什么？

```
class Counter {
	constructor() {
		this.count = 0;
	}

	increment() {
		this.count++;
	}
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
```



- A: `0`
- B: `1`
- C: `2`
- D: `3`

###### 133. 输出什么？

```
const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
	myPromise.then(res => res).then(res => console.log(res));
	setTimeout(() => console.log("Timeout!"), 0);
	console.log("Last line!");
}

async function funcTwo() {
	const res = await myPromise;
	console.log(await res);
	setTimeout(() => console.log("Timeout!"), 0);
	console.log("Last line!");
}

funcOne();
funcTwo();
```

- A: `Promise! Last line! Promise! Last line! Last line! Promise!`
- B: `Last line! Timeout! Promise! Last line! Timeout! Promise!`
- C: `Promise! Last line! Last line! Promise! Timeout! Timeout!`
- D: `Last line! Promise! Promise! Last line! Timeout! Timeout!`

###### 134. 我们怎样才能在 `index.js` 中调用 `sum.js?` 中的 `sum`？

```
// sum.js
export default function sum(x) {
	return x + x;
}

// index.js
import * as sum from "./sum";
```



- A: `sum(4)`
- B: `sum.sum(4)`
- C: `sum.default(4)`
- D: 默认导出不用 `*` 来导入，只能具名导出

###### 135. 输出什么？

```
const handler = {
	set: () => console.log("Added a new property!"),
	get: () => console.log("Accessed a property!")
};

const person = new Proxy({}, handler);

person.name = "Lydia";
person.name;
```



- A: `Added a new property!`
- B: `Accessed a property!`
- C: `Added a new property!` `Accessed a property!`
- D: 没有任何输出

