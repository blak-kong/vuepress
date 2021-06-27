<font size=4>
>这里结合ES5.1的变量声明方式var和function理解

## 变量提升

在 JavaScript 中，创建一个变量，会分为两个步骤。

第一步声明，第二步定义。

- `var` 的变量提升会初始化，并绑定到`this`：
  - var 在预解释的时候，会首先把变量声明，但是并不会定义
  - function 在预解释的时候，会首先把函数声明同时加定义
  - 在全局作用域下，使用 var 和 function 声明的变量会给 window 增加属性

```
console.log(test) // 不会报错

var test; // 声明
test = 1; // 定义（赋值）
```

- `let/const` 的变量提升不会初始化（会造成暂时性死区），并绑定作用域的上下文：

  - 在一个作用域的上下文中，同样的变量名，只能声明一次，再次声明不被允许；
  - 在不同作用域的上下文中，可以再次声明，进行覆盖；
  - 与当前作用域的上下文绑定，不会给 window 增加属性。

```javascript
let x = "global";
(function () {
  // 外层作用域已经定义，却报引用错误 ReferenceError（划注意）
  console.log(x); // Uncaught ReferenceError: x is not defined
  let x = 1; // 当此行不存在，则不会报错。（请使用node测试，浏览器有缓存）
})();
```

- `let`和`const`的区别
  - `let` 声明的变量可以再次赋值。
  - `const` 声明的变量会绑定内存空间，不允许再次赋值（变更指向的内存地址）。

## JavaScript 中的作用域

JavaScript 中没有块级作用域，只有函数作用域和全局作用域。

let 和 const 的特殊，主要在于，和作用域的上下文绑定。

### for 循环中的作用域：

for 循环有一个特别之处，设置变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。

```javascript
for (let i = 0; i < 3; i++) {
  let i = "abc"; // 这里和for()中是不同作用域，所以可以 `let i`
  console.log(i);
}
//abc
//abc
//abc
```
