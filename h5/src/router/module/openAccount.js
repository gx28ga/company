/**
 * 开户相关
 * created by bo.peng 2018/4/26
 * email:spion@qq.com
 */
module.exports={
    path: "openAccount",
    component: {template: '<router-view></router-view>'},
    children: [
        {//开户
            path: "",
            component: () => import('../../module/openAccount')
        },
        {//个货开户
            path: "personal",
            component: () => import('../../module/openAccount/personal')
        },
        {//开通银行存管提示
            path: "openBrank",
            component: () => import('../../module/openAccount/openBrank')
        },
        {//开户，授权，结果页
            path: "result",
            //onlyOpen 开户成功没有授权 例如：/result?url=rechargeFaile
            //openSuccess 开户成功
            //openFaile 开户失败
            //powerFaile 授权失败
            //powerSuccess 授权成功
            component: () => import('../../module/openAccount/result')
        },
    ]
}
