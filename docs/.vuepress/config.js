module.exports = {
  title: "前端技术文档",
  description: "手写源码系列！深入系列！",
  dest: "./docs/.vuepress/dist",
  ga: "",
  evergreen: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "javascript",
        items: [
          {
            text: "JavaScript运行机制",
            link: "/JavaScript/JavaScript运行机制/01-javascript引擎.md",
          },
          {
            text: "函数",
            link: "/JavaScript/函数/01-定义函数的方式.md",
          },
          {
            text: "函数式编程",
            link: "/JavaScript/函数式编程/01-函数式入门.md",
          },
          { text: "手写api", link: "/javascript/手写api/01-Promise.md" },
          { text: "ES6+", link: "/javascript/ES6+/01-let 和 const.md" },
          { text: "构建工具", link: "/构建工具/01-Gulp.md" },
        ],
      },
      {
        text: "构建工具",
        items: [
          { text: "webpack", link: "/404/404.md" },
          { text: "gulp", link: "/404/404.md" },
        ],
      },
      { text: "博客", link: "https://www.lzwlook.fun" },
    ],
    // 添加侧边栏
    // sidebar: ['/', '/javascript', '/算法','设计模式','构建工具'],
    // sidebarDepth: 2,
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {}, // 自动生成
  },
};
