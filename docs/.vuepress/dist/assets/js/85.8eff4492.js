(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{272:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hello-world-nest-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-nest-js"}},[t._v("#")]),t._v(" Hello World! NEST.JS!")]),t._v(" "),a("p",[t._v("Nestjs 是一个开源的 node 服务端框架。")]),t._v(" "),a("p",[t._v("Nestjs 官方文档在 gihtub 开源维护，中文文档地址：https://docs.nestjs.cn/")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("Nest 是一个用于构建高效，可扩展的 Node.js 服务器端应用程序的框架。")]),t._v(" "),a("p",[t._v("它使用渐进式 JavaScript，使用 TypeScript 构建（保留与纯 JavaScript 的兼容性），并结合了 OOP（面向对象编程），FP（功能编程）和 FRP（功能反应编程）的元素。")]),t._v(" "),a("p",[t._v("在底层，Nest 使用强大的 HTTP Server 框架，如 Express（默认）和 Fastify。")]),t._v(" "),a("p",[t._v("Nest 在这些框架之上提供了一定程度的抽象，同时也将其 API 直接暴露给开发人员。这样可以轻松使用每个平台的无数第三方模块。")]),t._v(" "),a("h2",{attrs:{id:"哲学"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#哲学"}},[t._v("#")]),t._v(" 哲学")]),t._v(" "),a("p",[t._v("近年来，感谢 Node.js，JavaScript 已成为前端和后端应用程序的网络“通用语言”。这产生了令人敬畏的项目，如 "),a("code",[t._v("Angular")]),t._v("，"),a("code",[t._v("React")]),t._v(" 和 "),a("code",[t._v("Vue")]),t._v("，它们提高了开发人员的工作效率，并能够构建快速，可测试和可扩展的前端应用程序。"),a("strong",[t._v("然而，虽然 Node（和服务器端 "),a("code",[t._v("JavaScript")]),t._v(" ）存在大量优秀的库，帮助器和工具，但它们都没有有效地解决主要问题 - 架构。")])]),t._v(" "),a("p",[t._v("Nest 提供了一个开箱即用的应用程序架构，允许开发人员和团队创建高度可测试，可扩展，松散耦合且易于维护的应用程序。")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("首先，您可以使用 Nest CLI 构建项目，也可以克隆启动项目（两者都会产生相同的结果）。")]),t._v(" "),a("p",[t._v("要使用 Nest CLI 构建项目，请运行以下命令。这将创建一个新的项目目录，并生成 Nest 核心文件和支持模块，为您的项目创建传统的基础结构。建议初学者使用 Nest CLI 创建新项目。我们将在第一步继续使用这种方法。")]),t._v(" "),a("h3",{attrs:{id:"cli-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-安装"}},[t._v("#")]),t._v(" CLI 安装")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm i -g @nestjs/cli\nnest new project-name\n")])])]),a("h3",{attrs:{id:"使用-git-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-git-安装"}},[t._v("#")]),t._v(" 使用 Git 安装")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clone https://github.com/nestjs/typescript-starter.git project\ncd project\nnpm install\nnpm run start\n")])])]),a("h2",{attrs:{id:"cli-生成文件介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-生成文件介绍"}},[t._v("#")]),t._v(" CLI 生成文件介绍")]),t._v(" "),a("p",[t._v("使用 CLI 将创建 project 目录， 安装 node 模块和一些其他样板文件，并将创建一个 src 目录，目录中包含几个核心文件。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("src\n├── app.controller.ts\n├── app.module.ts\n└── main.ts\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("文件")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("app.controller.ts")]),t._v(" "),a("td",[t._v("带有单个路由的基本控制器示例。")])]),t._v(" "),a("tr",[a("td",[t._v("app.module.ts")]),t._v(" "),a("td",[t._v("应用程序的根模块。")])]),t._v(" "),a("tr",[a("td",[t._v("main.ts")]),t._v(" "),a("td",[t._v("应用程序入口文件。它使用 NestFactory 用来创建 Nest 应用实例。")])])])]),t._v(" "),a("p",[a("strong",[t._v("需要注意，nestjs 的路由是 controller 里面的")])]),t._v(" "),a("p",[a("code",[t._v("main.ts")]),t._v(" 包含一个异步函数，它负责引导我们的应用程序：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" NestFactory "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@nestjs/core"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AppModule "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./app.module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bootstrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" NestFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AppModule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bootstrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("要创建一个 Nest 应用实例，我们使用了 NestFactory 核心类。")]),t._v(" "),a("p",[t._v("NestFactory 暴露了一些静态方法用于创建应用实例。 create() 方法返回一个实现 INestApplication 接口的对象, 并提供一组可用的方法, 在后面的章节中将对此进行详细描述。")]),t._v(" "),a("p",[t._v("在上面的 main.ts 示例中，我们只是启动 HTTP 服务器，它允许应用程序等待入站 HTTP 请求。")]),t._v(" "),a("p",[t._v("请注意，使用 Nest CLI 搭建的项目会创建一个初始项目结构，我们鼓励开发人员将每个模块保存在自己的专用目录中。")])])}),[],!1,null,null,null);s.default=n.exports}}]);