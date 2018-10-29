/**
 * 登录
 * created by bo.peng 2018/4/26
 * email:spion@qq.com
 */
module.exports = {
    path: '/login',
    component: {template: '<router-view></router-view>'},
    children: [
        {path: '', component: () => import('../../module/login')},
        {//登录
            path: 'signin',
            component: () => import('../../module/login/signin')
        },
        {//注册
            path: 'reg',
            component: () => import('../../module/login/reg')
        },
        {//找回密码
            path: 'getPwd',
            component: () => import('../../module/login/getPwd')
        }
    ]
}
