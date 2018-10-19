/**
 * 更新 升级 相关
 * created by bo.peng 2018/4/26
 * email:spion@qq.com
 */
module.exports={
    path: "update",
    component: {template: '<router-view></router-view>'},
    meta : {
        keepAlive : true
    },
    children: [
        {
            path: '',
            component: () => import('../../module/update'),
        },
        {//产品信息
            path: 'upgrade',
            component: () => import('../../module/update/upgrade')
        },
        {//安装app
            path: 'install',
            component: () => import('../../module/update/install')
        }
    ]
}
