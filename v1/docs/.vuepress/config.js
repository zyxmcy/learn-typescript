module.exports = {
    includeLevel: [2, 3],
    title: 'TypeScript4 文档',
    description: 'TypeScript ',
    base: '/learn-typescript/',
    theme: 'reco',
      // ...
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-katex'))
    }
  },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: '关阳尧晨的 JavaScript 博客',
                items: [
                    { text: 'Github', link: 'https://github.com/?utm_source=gold_browser_extension'},
                    { text: 'Gitee', link: 'https://juejin.cn/user/712139234359182/posts'}
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/ConditionalTypes',
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "/handbook/ConditionalTypes" },
                { title: "泛型", path: "/handbook/Generics/Generics.md" }
              ]
            },
            {
                title: "英语",
                path: '/zsb/zsbEnglish/allEnglish',
                collapsable: false, // 不折叠
                children: [
                    { title: "all-3800", path: "/zsb/zsbEnglish/allEnglish" },
                    { title: "重点单词", path: "/zsb/zsbEnglish/key_point/emphasis.md" }
                ]
            },
            {
                title: "数学",
                path: '/zsb/zsbMath/gongshi',
                collapsable: false, // 不折叠
                children: [
                    { title: "公式", path: "/zsb/zsbMath/gongshi" }
                ]
            }
          ]
    }
}

