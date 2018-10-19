/**
 * 发现
 * created by bo.peng 2018/4/26
 * email:spion@qq.com
 */
module.exports={
    path: '/find',
    component: {template: '<router-view></router-view>'},
    children: [
        {
            path: '',
            component: () => import('../../module/find'),
            meta : {
                keepAlive : true
            },
        },
        {//新闻
            path: 'newsList',
            component: () => import('../../module/find/newList')
        },
        {//新闻详情
            path: 'newsDetail',
            component: () => import('../../module/find/newDetail')
        }
    ]
}
