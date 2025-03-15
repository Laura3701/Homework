* 数据类型
* 类型判断
* 作用域与闭包
* this指向问题
* for 循环
* while
* switch case
* 三元运算符
* 逻辑运算符 &&  和 ｜｜****
* 数组
* 对象相关
* 函数（函数传参），箭头函数，函数返回值
* 构造函数
* setTimeout, setInterval
* 字符串相关的方法
* var,const,let 区别

## 数组

```
// 会修改原数组的方法
const mutatingMethods = () => {
    let arr = [1, 2, 3];
  
    arr.push(4);        // 末尾添加 [1,2,3,4]
    arr.pop();          // 移除末尾 [1,2,3]
    arr.unshift(0);     // 开头添加 [0,1,2,3]
    arr.shift();        // 移除开头 [1,2,3]
    arr.splice(1, 1, 5) // 替换元素 [1,5,3] <mcsymbol name="Array.splice" filename="array_methods.js" path="/Users/shelby/project/Homework/array_methods.js" startline="9" type="function"></mcsymbol>
    arr.sort();         // 排序（注意数值排序需要自定义比较函数）
};
```

```
// 返回新数组的方法
const newArrayMethods = () => {
    const arr = [1, 2, 3];
  
    const sliced = arr.slice(1, 3);    // [2,3]
    const mapped = arr.map(x => x * 2); // [2,4,6]
    const filtered = arr.filter(x => x > 1); // [2,3]
    const concated = arr.concat([4,5]); // [1,2,3,4,5]
};
```

方法类型 方法列表 修改原数组

push/pop/shift/unshift/splice/sort/reverse/fill/copyWithin 返回新数组

slice/map/filter/concat/flat/flatMap/from/of 遍历检测

forEach/every/some/find/findIndex/findLast/findLastIndex 累计计算

reduce/reduceRight
建议重点关注 splice/slice 的区别、 map/filter/reduce 的组合使用，以及 ES6 新增的 find/findIndex

# JavaScript 对象核心知识点

### 属性描述符（重点补充）

```javascript:%2FUsers%2Fshelby%2Fproject%2FHomework%2Fobject_properties.js
const obj = { name: 'Alice' };

// 完整属性配置
Object.defineProperty(obj, 'age', {
    value: 28,
    writable: false,      // 不可修改
    enumerable: true,     // 可枚举
    configurable: false   // 不可删除且不可重新配置
});

// 批量定义属性
Object.defineProperties(obj, {
    gender: { value: 'female' },
    [Symbol('id')]: { value: 123 } // Symbol 类型属性
});
```

字符串方
