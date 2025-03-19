#### 1. 控制子民的方向：方法是 flex-direction
属性是 row, column  (行和列) 以及反向排列 row-reverse, column-reverse 

#### 2. 子民的换行：方法是 flex-wrap
属性是 nowrap, wrap, wrap-reverse(从最下面一行开始，从左往右的顺序排列，然后顺延到倒数第二行，依然从左往右排列)

#### 3. 子民之间的排列：
（1）横轴方向的排列 方法是 justify-content
    属性是 flex-start, flex-end, center, space-between(贴边), space-around
（2）纵轴方向的排列 方法是 align-items
    属性是 flex-start, flex-end, center, baseline(以所有参与排列的元素中的第一个为基准线进行排列), stretch(某个样式没有设置高度时会自动撑满)

#### 4. 子民太多会形成多行，行与行之间的排列分布：方法是 align-content
属性是 flex-start, flex-end, center, space-between, space-around, stretch