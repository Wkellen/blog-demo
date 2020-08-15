module.exports = {
    title: 'W-kellen的博客',
    description: "don't stop",
    base: '/blog-demo/',
    // dest: './dist',

    themeConfig: {
        nav: [
            {
                text: '首页', link: '/'
            },
            {
                text: '前端基础',
                items: [
                    { text: 'HTML', link: '/web/html/' },
                    { text: 'css', link: '/web/css/' },
                    { text: 'HTML5', link: '/web/H5/' },
                    { text: 'CSS3', link: '/web/C3/' },
                ]
            },
            {
                text: 'js',
                items: [
                    {
                        text: 'js基础', link: '/JavaScript/js/'
                    },
                    {
                        text: '进阶', link: '/JavaScript/up/'
                    },
                    {
                        text: 'ES6', link: '/JavaScript/es6/'
                    }

                ]
            },
            {
                text: 'vue', link: '/vue/'
            },

            {
                text: '优秀博客',
                items: [
                    {
                        text: '张鑫旭-鑫空间-鑫生活', link: 'https://www.zhangxinxu.com/'
                    }
                ]
            },

        ],
        // 自动生成侧边栏
        sidebar: 'auto',
        sidebarDepth: 2, // 侧边栏显示2级
    }


}

