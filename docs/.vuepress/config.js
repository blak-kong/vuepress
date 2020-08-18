module.exports = {
  title: "前端技术文档",
  description: "手写源码系列！深入系列！",
  dest: "./docs/.vuepress/dist",
  ga: "",
  evergreen: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/Home/目录.md" },
      {
        text: "javascript",
        items: [
          {
            text: "JavaScript基础知识",
            link: "/JavaScript/JavaScript基础知识/01-this.md",
          },
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
          { text: "构建工具", link: "/构建工具/01-Gulp.md" },
        ],
      },
      {
        text: "构建工具",
        items: [
          { text: "webpack", link: "/构建工具/webpack4/01-如何学习webpack.md" },
        ],
      },
      {
        text: "推荐博客",
        items: [
          {
            text: "前端博客-冴羽",
            link: "https://github.com/mqyqingfeng/Blog",
          },
        ],
      },
      { text: "blak-kong", link: "https://www.lzwlook.fun" },
    ],
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {}, // 自动生成
  },
};
