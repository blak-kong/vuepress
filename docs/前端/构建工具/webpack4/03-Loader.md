---
title: loader
---

webpack 一般情况下只能处理 js 文件，但 webpack 允许用户通过安装配置 loader，获得预处理文件的能力。

这允许你打包除 JavaScript 之外的任何静态资源。你可以使用 Node.js 来很简单地编写自己的 loader。

一个常见的应用场景是使用 css-loader ，在 webpack 中处理 css 文件。

```javascript
const path = require("path");

module.exports = {
  // JavaScript 执行入口文件
  entry: "./main.js",
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: "bundle.js",
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, "./dist"),
  },
  module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/,
        use: ["style-loader", "css-loader?minimize"], // loader加载解析顺序，从右到左
      },
    ],
  },
};
```

loader 可以看作具有文件转换功能的翻译员，配置里的 module.rules 数组配置了一组规则，告诉 Webpack 在遇到哪些文件时使用哪些 Loader 去加载和转换。

如上配置告诉 Webpack 在遇到以 .css 结尾的文件时先使用 css-loader 读取 CSS 文件，再交给 style-loader 把 CSS 内容注入到 JavaScript 里。

在配置 Loader 时需要注意的是：

- use 属性的值需要是一个由 Loader 名称组成的数组，Loader 的执行顺序是由后到前的；
- 每一个 Loader 都可以通过 URL querystring 的方式传入参数，例如 css-loader?minimize 中的 minimize 告诉 css-loader 要开启 CSS 压缩。

对于热门的开源 loader，我们可以去对应的官方文档查找更多具体用法。例如 [css-loader 主页](https://github.com/webpack-contrib/css-loader)

在重新执行 Webpack 构建前要先安装新引入的 Loader：

> npm i -D style-loader css-loader

安装成功后重新执行构建时，你会发现 bundle.js 文件被更新了，里面注入了在 main.css 中写的 CSS，而不是会额外生成一个 CSS 文件。

但是重新刷新 index.html 网页时将会发现 Hello,Webpack 居中了，样式生效了！ 也许你会对此感到奇怪，第一次看到 CSS 被写在了 JavaScript 里！

这其实都是 style-loader 的功劳，它的工作原理大概是把 CSS 内容用 JavaScript 里的字符串存储起来， 在网页执行 JavaScript 时通过 DOM 操作动态地往 HTML head 标签里插入 HTML style 标签。

也许你认为这样做会导致 JavaScript 文件变大并导致加载网页时间变长，想让 Webpack 单独输出 CSS 文件。

我们可以使用 Plugin ，通过 Webpack Plugin 机制来实现。

## loader 对象属性配置

给 Loader 传入属性的方式除了有 querystring 外，还可以通过 Object 传入，以上的 Loader 配置可以修改为如下：

```javascript
use: [
  "style-loader",
  {
    loader: "css-loader",
    options: {
      minimize: true,
    },
  },
];
```

除了在 webpack.config.js 配置文件中配置 Loader 外，还可以在源码中指定用什么 Loader 去处理文件。

以加载 CSS 文件为例，修改上面例子中的 main.js 如下：

> require('style-loader!css-loader?minimize!./main.css');

这样就能指定对 ./main.css 这个文件先采用 css-loader 再采用 style-loader 转换。
