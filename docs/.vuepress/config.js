
module.exports = {
    title: '前端技术文档',
    description: '手写源码系列！深入系列！',
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          {
            text: 'javascript',
            items: [
              { text: 'JavaScript运行机制', link: '/JavaScript/JavaScript运行机制/01-javascript引擎.md' },
              { text: '手写api', link: '/javascript/手写api/01-Promise.md' },
              { text: 'ES6+', link: '/javascript/ES6+/01-let 和 const.md' },
              { text: '构建工具', link: '/构建工具/01-Gulp.md' },
            ]
          },
          {
            text: '构建工具',
            items: [
              { text: 'webpack', link: '/javascript/webpack.md' },
              { text: 'gulp', link: '/javascript/gulp.md' }
            ]
          },
          { text: '博客', link: 'https://www.lzwlook.fun' },
        ],
        // 添加侧边栏
        // sidebar: ['/', '/javascript', '/算法','设计模式','构建工具'],
        // sidebarDepth: 2,
        sidebar: {
          '/JavaScript/JavaScript运行机制/': [
            '执行上下文',
            'js栈和变量对象',
            'js内存空间',
            'js内存机制',
            'js内存泄露',
            '事件循环'
          ],
          // '/frontend/': [
          //   '/frontend/javascript/',
          //   '/frontend/html/',
          //   '/frontend/css/'
          // ],
        },
    },
    plugins: {
      "vuepress-plugin-auto-sidebar": {} // 自动生成
    }
}

