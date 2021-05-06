module.exports = {
  title: "《我的学习笔记》",
  description: "积跬步，至千里！",
  dest: "./docs/.vuepress/dist",
  ga: "",
  evergreen: true,
  themeConfig: {
    nav: [
      { text: "Home", link: "/前端/Home/目录.md" },
      {
        text: "CSS",
        items: [{ text: "页面布局", link: "/前端/CSS/01-index.md" }],
      },
      {
        text: "javascript",
        items: [
          {
            text: "JavaScript基础知识",
            link: "/前端/JavaScript/JavaScript基础知识/01-this.md",
          },
          {
            text: "JavaScript运行机制",
            link: "/前端/JavaScript/JavaScript运行机制/01-javascript引擎.md",
          },
          {
            text: "函数",
            link: "/前端/JavaScript/函数/01-定义函数的方式.md",
          },
          {
            text: "函数式编程",
            link: "/前端/JavaScript/函数式编程/01-函数式入门.md",
          },
          { text: "手写api", link: "/前端/javascript/手写api/01-Promise.md" },
        ],
      },
      {
        text: "构建工具",
        items: [
          { text: "Gulp4+", link: "/前端/构建工具/Glup4/01-Gulp.md" },
          { text: "Webpack4+", link: "/前端/构建工具/Webpack4/01-Webpack.md" },
        ],
      },
      {
        text: "其他",
        items: [{ text: "计算机基础", link: "/计算机/计算机科学/01-Index.md" }],
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
