/**
 * describe 帮助中心
 * Created by wangCuiqing
 * Date: 2018/5/6
 */
module.exports={
    path:"/help",
    component: {template: '<router-view></router-view>'},
    children:[
        {
            path:"home",//帮助中心首页
            component:() => import("../../module/help")
        },
        {
            path:"register",//注册步骤
            component:() => import("../../module/help/register")
        },
        {
            path:"openStep",//开户步骤
            component:() => import("../../module/help/openStep")
        },
        {
            path:"rechargeStep",//充值步骤
            component:() => import("../../module/help/rechargeStep")
        },
        {
            path:"investStep",//投资步骤
            component:() => import("../../module/help/investStep")
        },
        {
            path:"withdrawStep",//提现步骤
            component:() => import("../../module/help/withdrawStep")
        },
        {
            path:"explain",//名词解释
            component:() => import("../../module/help/explain")
        },
        {
            path:"question",//更多问题
            component:() => import("../../module/help/question")
        },
    ]
}
