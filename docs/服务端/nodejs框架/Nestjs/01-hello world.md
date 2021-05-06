# Hello World! NEST.JS!

Nestjs 是一个开源的 node 服务端框架。

Nestjs 官方文档在 gihtub 开源维护，中文文档地址：https://docs.nestjs.cn/

## 介绍

Nest 是一个用于构建高效，可扩展的 Node.js 服务器端应用程序的框架。

它使用渐进式 JavaScript，使用 TypeScript 构建（保留与纯 JavaScript 的兼容性），并结合了 OOP（面向对象编程），FP（功能编程）和 FRP（功能反应编程）的元素。

在底层，Nest 使用强大的 HTTP Server 框架，如 Express（默认）和 Fastify。

Nest 在这些框架之上提供了一定程度的抽象，同时也将其 API 直接暴露给开发人员。这样可以轻松使用每个平台的无数第三方模块。

## 哲学

近年来，感谢 Node.js，JavaScript 已成为前端和后端应用程序的网络“通用语言”。这产生了令人敬畏的项目，如 `Angular`，`React` 和 `Vue`，它们提高了开发人员的工作效率，并能够构建快速，可测试和可扩展的前端应用程序。**然而，虽然 Node（和服务器端 `JavaScript` ）存在大量优秀的库，帮助器和工具，但它们都没有有效地解决主要问题 - 架构。**

Nest 提供了一个开箱即用的应用程序架构，允许开发人员和团队创建高度可测试，可扩展，松散耦合且易于维护的应用程序。

## 安装

首先，您可以使用 Nest CLI 构建项目，也可以克隆启动项目（两者都会产生相同的结果）。

要使用 Nest CLI 构建项目，请运行以下命令。这将创建一个新的项目目录，并生成 Nest 核心文件和支持模块，为您的项目创建传统的基础结构。建议初学者使用 Nest CLI 创建新项目。我们将在第一步继续使用这种方法。

### CLI 安装

```
npm i -g @nestjs/cli
nest new project-name
```

### 使用 Git 安装

```
git clone https://github.com/nestjs/typescript-starter.git project
cd project
npm install
npm run start
```

## CLI 生成文件介绍

使用 CLI 将创建 project 目录， 安装 node 模块和一些其他样板文件，并将创建一个 src 目录，目录中包含几个核心文件。

```
src
├── app.controller.ts
├── app.module.ts
└── main.ts
```

| 文件              | 说明                                                          |
| ----------------- | ------------------------------------------------------------- |
| app.controller.ts | 带有单个路由的基本控制器示例。                                |
| app.module.ts     | 应用程序的根模块。                                            |
| main.ts           | 应用程序入口文件。它使用 NestFactory 用来创建 Nest 应用实例。 |

**需要注意，nestjs 的路由是 controller 里面的**

`main.ts` 包含一个异步函数，它负责引导我们的应用程序：

```javascript
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

要创建一个 Nest 应用实例，我们使用了 NestFactory 核心类。

NestFactory 暴露了一些静态方法用于创建应用实例。 create() 方法返回一个实现 INestApplication 接口的对象, 并提供一组可用的方法, 在后面的章节中将对此进行详细描述。

在上面的 main.ts 示例中，我们只是启动 HTTP 服务器，它允许应用程序等待入站 HTTP 请求。

请注意，使用 Nest CLI 搭建的项目会创建一个初始项目结构，我们鼓励开发人员将每个模块保存在自己的专用目录中。
