/**
 * 用户中心
 * created by bo.peng 2018/4/26
 * email:spion@qq.com
 */
module.exports={
    path: "/myAccount",
    component: {template: '<router-view></router-view>'},
    children: [
        {path: '', redirect: 'home'},
        {path: 'home', component: () => import('../../module/myAccount')},
        {
            path: 'result',
            //充值失败 rechargeFaile 例如 /result?url=rechargeFaile
            //充值成功 rechargeSuccess
            //提现失败 withdrawFaile
            //提现成功 withdrawSuccess
            //解绑成功 openBindSuccess
            //解绑失败 openBindFaile
            //绑卡失败 bindCardFaile
            //绑卡成功 bindCardSuccess
            //修改密码失败changePasswordFaile
            //修改密码成功 changePasswordSuccess
            //修改电话成功 changePhoneSuccess
            //修改电话号码失败 changePhoneFaile
            component: () => import('../../module/myAccount/result')
        },
        {//设置
            path: "setting",
            component: {template: '<router-view></router-view>'},
            children: [
                {path: '', redirect: 'home'},
                {//设置
                    path: "home",//设置
                    component: () => import("../../module/myAccount/setting")
                },
                {//设置登录密码
                    path: "resetTransactionPwd",//设置
                    component: () => import("../../module/myAccount/setting/resetTransactionPwd")
                },
            ]
        },
        {
            path: "userInfo",//用户信息
            component: {template: '<router-view></router-view>'},
            children: [
                {path: '', redirect: 'home'},
                {//用户信息
                    path: "home",//用户信息
                    component: () => import("../../module/myAccount/userInfo")
                },
                {//VIP等级
					path : "vip",
					component: () => import("../../module/myAccount/userInfo/vip")
				},
                {//我的银行卡
                    path : "bank",
                    component: () => import("../../module/myAccount/userInfo/bank")
                },
                {//收货地址
                    path : "address",
                    component: () => import("../../module/myAccount/userInfo/address")
                },
            ]
        },
        {
            path:'inviteFriend',//邀请好友
            component: {template: '<router-view></router-view>'},
            children: [
                {path: '', redirect: 'home'},
                {//每日佣金
                    path: "home",//每日佣金
                    component: () => import("../../module/myAccount/inviteFriend")
                },
                {//邀请好友首月返现
                    path: "firstMonthReturn",//邀请好友首月返现
                    component: () => import("../../module/myAccount/inviteFriend/firstMonthReturn")
                },
                {//邀请好友每月任务
                    path: "task",//邀请好友每月任务
                    component: () => import("../../module/myAccount/inviteFriend/task")
                },
                {//邀请好友攻略
                    path: "strategy",//邀请好友攻略
                    component: () => import("../../module/myAccount/inviteFriend/strategy")
                },
                {//邀请好友等级
                    path: "level",//邀请好友等级
                    component: () => import("../../module/myAccount/inviteFriend/level")
                },
                {//邀请奖励记录
                    path: "taskRecord",//邀请奖励记录
                    component: () => import("../../module/myAccount/inviteFriend/taskRecord")
                },
            ]
        },
        {
            path: "riskEvaluation",//风险测评
            component: () => import('../../module/myAccount/riskEvaluation')
        },
        {
          path:"transaction",//交易对账
          component:()=>import("../../module/myAccount/transactionReconciliation")
        },
        {
          path:"calendar",//回款日历
          component:()=>import("../../module/myAccount/calendar")
        },
        {//充值
            path: "recharge",
            component: {template: '<router-view></router-view>'},
            children: [
                {path: '', redirect: 'home'},
                {//充值首页
                    path: "home",
                    component: () => import("../../module/myAccount/recharge")
                },
                {//充值确认页 v1.0
                    path: "rechargeInfo",
                    component: () => import("../../module/myAccount/recharge/rechargeInfo")
                },
            ]
        },
        {//提现
            path: "withdrawCash",
            component:()=>import("../../module/myAccount/withdrawCash")
        },
        {//密码相关
            path : "pwd",
            component: {template: '<router-view></router-view>'},
            children: [
                {path: '', redirect: 'home'},
                {//首页
                    path: "home",
                    component: () => import("../../module/myAccount/pwd")
                },
                {//交易密码
                    path: "transaction",
                    component: () => import("../../module/myAccount/pwd/transaction")
                },
            ]
        },
        {//优惠券
            path : "myCoupon",
            component: {template: '<router-view></router-view>'},
            children: [
                {path: '', redirect: 'home'},
                {//首页
                    path: "home",
                    component: () => import("../../module/myAccount/myCoupon")
                },
                {//历史优惠券
                    path: "history",
                    component: () => import("../../module/myAccount/myCoupon/history")
                },
            ]
        },
        {//我的投资记录
            path : "myInverst",
            component: {template: '<router-view></router-view>'},
            children: [
                {path: '', redirect: 'home'},
                {//首页
                    path: "home",
                    component: () => import("../../module/myAccount/myInverst")
                },
                {//投资历史
                    path: "history",
                    component: () => import("../../module/myAccount/myInverst/history")
                },
                {//详情
                    path: "detail",
                    component: () => import("../../module/myAccount/myInverst/detail")
                },
            ]
        },
        {//意见反馈
            path:"feedBack",
            component:()=>import("../../module/myAccount/feedBack")
        },
        {//帮助中心
            path:"help",
            redirect : "/myAccount/feedBack"
        }
    ]
};
