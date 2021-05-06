---
title: 安装运行webpack
---

## 本地安装

当前最新的 webpack 版本是：

> v4.44.0

要安装最新版本或特定版本，请运行以下命令之一：

```
npm install --save-dev webpack   # 最新稳定版
npm install --save-dev webpack@<version> # 指定版本
```

如果你使用 webpack 4+ 版本，你还需要安装 CLI。

```
npm install --save-dev webpack-cli
```

对于大多数项目，我们建议本地安装。

这可以使我们在引入破坏式变更(breaking change)的依赖时，更容易分别升级项目。

通常，webpack 通过运行一个或多个 npm scripts，会在本地 node_modules 目录中查找安装的 webpack：

```
// package.json
"scripts": {
    "start": "webpack --config webpack.config.js" # 运行 webpack 命令
}
```

当你在本地安装 webpack 后，你能够从 node_modules/.bin/webpack 访问它的 bin 版本。

> 这里的含义是可以通过 npm run start，自动执行脚本
