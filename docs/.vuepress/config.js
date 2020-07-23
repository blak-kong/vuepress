
module.exports = {
    title: '前端技术文档',
    description: '手写源码系列！深入系列！',
    // head: [
    //     ['link', {
    //         rel: 'icon',
    //         href: `/favicon.ico`
    //     }]
    // ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          {
            text: '前端',
            items: [
              { text: 'javascript', link: '/frontend/javascript/01-初级.md' },
              { text: 'html', link: '/frontend/javascript/01-DOM.md' },
              { text: 'css', link: '/frontend/javascript/01-布局.md' },
              { text: '构建工具', link: '/frontend/构建工具/01-Gulp.md' },
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
        sidebarDepth: 2,
        // sidebar: {
        //   '/frontend/javascript/': [
        //     '初级',
        //     '中级',
        //     '高级',
        //     '函数式',
        //     '手写api',
        //     'ES6', 
        //     'ES7+',
        //     'Promise迷你书学习',
        //   ],
        //   // '/frontend/': [
        //   //   '/frontend/javascript/',
        //   //   '/frontend/html/',
        //   //   '/frontend/css/'
        //   // ],
        // },
    },
    plugins: {
      "vuepress-plugin-auto-sidebar": {
      }
    }
}

