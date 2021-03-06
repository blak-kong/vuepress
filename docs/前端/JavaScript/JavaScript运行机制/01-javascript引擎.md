---
title: JavaScript引擎
---

## JavaScript 引擎是什么？

JavaScript 引擎是一种用于将我们的代码转换为机器可读语言的引擎。

如果没有 JavaScript 引擎，你编写的代码对计算机来说简直是一堆“胡言乱语”。

不仅仅是 JavaScript，其他所有编程语言都需要一个类似的引擎，来将这些“胡言乱语”转换成对计算机有意义的语言。

## JavaScript 引擎的组成部分有哪些？

1、编译器。主要工作是将源代码编译成抽象语法树，然后在某些引擎中还包含将抽象语法树转换成字节码。

2、解释器。在某些引擎中，解释器主要是接受字节码，解释执行这个字节码，然后也依赖来及回收机制等。

3、JIT 工具。一个能够 JIT 的工具，将字节码或者抽象语法树转换成本地代码，当然它也需要依赖牢记垃圾回收器和分析工具（profiler）。它们负责垃圾回收和收集引擎中的信息，帮助改善引擎的性能和功效。

## JavaScript 引擎是如何工作的？

JavaScript 的工作形式取决于是什么引擎。目前比较常用的 JavaScript 引擎有两个：WebKit 的 JavaScriptCore 和 Google 的 V8 引擎。

这两个引擎处理代码的方式是不同的。

### JavaScriptCore

JavaScriptCore： 源代码 =》 抽象语法树 =》 字节码 =》 执行

1、词法分析，将源代码分解成一系列具有明确含义的符号或字符串（分词）；

2、用词法分析器分析这些符号，将其构建成抽象语法树；

3、解析器生成字节码（让编译器可以理解）；

4、4 个 JIT（Just-In-Time）进程参与进来，分析和执行解析器所生成的字节码。

5、执行代码

### V8

谷歌的 V8 引擎，用 C++编写，也编译和执行 JavaScript 源代码、处理内存分配、垃圾收集剩余物。

V8 引擎并不将抽象语法树转变成字节码或者其它中间表示，没有像 Java 一样的虚拟机或者字节码解释器。

这么做主要是为了减少这抽象语法树到字节码的转换时间，这一切都在网页加载时候完成，虽然可以提高优化的可能，但是这些分析可能带来巨大的时间浪费。

## javascript 引擎如何学习？

目前关于 javascript 引擎，并没有可以系统学习的教程。

若是想要学习 javascript 底层，比较简单的可以看 ECMAScript 的标准文档。

[读懂 ECMAScript 规格 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2015/11/ecmascript-specification.html)

而直接看 javascript 引擎的源码，则更加困难一些。

[如何开始学习 V8 - 前端进阶 - SegmentFault 思否](https://segmentfault.com/a/1190000010818979)

如果你熟悉 JavaScript 但是不太了解 c++，你也许想从 `V8/src/js` 部分开始，这部分都是用 JavaScript 编写的，而且在都在这个目录下。

代码中大部分都是按照 EcmaScript 规范实现的。

选择一个函数然后查找其规范。

改变或删除部分代码，测试为什么测试失败，违反了规范中哪一步说明？

在 `V8/test`, 尤其是 `V8/test/mjsunit` 中有大量的 `JavaScript` 代码。

## 为什么要把引擎的章节放在最前面？

作为学习者，我们需要对 javascript 的运行环境有一个基本了解。

javascript 是动态脚本语言，但并不是只能运行在浏览器写网页，也不是只能运行在 nodejs，它的能力依赖于执行它的引擎环境。

同时对于部分高级 api，如 ES3、ES5、ES6 的差异。为何部分 api 会有浏览器兼容性支持问题，也是因为那是运行环境不同导致。

**现代的 JavaScript 是一种“安全”语言。它不提供对内存或 CPU 的底层访问，因为它最初是为浏览器创建的，不需要这些功能。**

**因此 JavaScript 的能力很大程度上依赖于它执行的环境。**

## 现代 javascript

[想要更多了解 JavaScript，推荐《现代 JavaScript 教程》](https://zh.javascript.info/intro)
