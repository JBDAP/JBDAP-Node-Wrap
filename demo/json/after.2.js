// 测试 after 指令
module.exports = {
    commands: [
        {
            name: 'blogInfo',
            type: 'entity',
            target: 'Blog',
            query: {
                where: {
                    id: 1
                }
            },
            after: {
                name: 'updateViews',
                type: 'function',
                target: 'update_blog_views',
                data: '$'
            }
        }
    ]
}