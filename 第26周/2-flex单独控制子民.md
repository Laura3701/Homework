#### 1. 单独控制每一个子民的排列顺序：order
order: 1； order: 8
数字越小 越往前排列

#### 2. 子民太少，如何分配剩余空间: flex-grow
分配比例以flex-grow的值进行划分，比如 1：1 就是等比分配，分到同样的长度
如果是2：1 就是第一个子民分到的长度是第二个的两倍，这样写：
flex-grow: 2; flex-grow: 1

#### 3. 子民太多，每个子民如何收缩空间：flex-shrink
<!-- shrink 这个不太懂 -->

#### 4. 单独设置某个子民的位置：align-self
auto, flex-start, flex-end, center, baseline, stretch




