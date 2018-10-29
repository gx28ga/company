/**
 * 我的帐户中心
 * created by bo.peng 2018/5/10
 * email:spion@qq.com
 */
import jump from "./index";
let obj = {} , _catch = {},
setFn = (url,name,item)=>{
    if(item){
        _catch = {};
    }
    _catch[name] = function(obj){
        jump.isLogin().goLogin({
            callback : ()=>{
                if(((name === "recharge" || name === "withdrawCash") && !jump.self.openBank())){
                    return;
                }
                jump.go(url,obj);
            }
        })
    };
    if(item){
        if(!obj[item]) obj[item] = {};
        Object.assign(obj[item],_catch);
    }else{
        Object.assign(obj,_catch);
    }
};
[
    "home",//个人中心
    "setting",//帐户设置
    {resetTransactionPwd:"/setting/resetTransactionPwd"},//重置登录密码
    "recharge", //充值
    "withdrawCash", //提现
    {rechargeInfo:"/recharge/rechargeInfo"},
    "riskEvaluation",//账户风险测评
    "transaction",//交易对账
    "feedBack",//意见反馈
    "calendar",//回款日历
].forEach(key=>{
    if(typeof key === "object"){
        for(let item in key){
            setFn("/myAccount"+key[item],item);
        }
    }else{
        setFn("/myAccount/"+key,key);
    }
});
[//userInfo相关
    "vip",//vip信息
    "bank",//bank信息
    "address",//收货地址
].forEach(key=>{
    setFn("/myAccount/userInfo/"+key,key,"userInfo");
});
[//优惠券
    "home",
    "history",//历史
].forEach(key=>{
    setFn("/myAccount/myCoupon/"+key,key,"myCoupon");
});
[//我的投资记录
    "home",
    "history",//历史
    "detail",//详情
].forEach(key=>{
    setFn("/myAccount/myInverst/"+key,key,"myInverst");
});
[//密码相关
    "home",
    "transaction",//交易密码
].forEach(key=>{
    setFn("/myAccount/pwd/"+key,key,"pwd");
});
[//邀请好友相关
    "firstMonthReturn",//邀请好友投资返现
    "dailyCommission",//每日佣金
    "task",//任务
    "strategy",//攻略
    "level",//等级
    "taskRecord",//邀请奖励记录
].forEach(key=>{
    if(key==="dailyCommission"){//首页
        setFn("/myAccount/inviteFriend/",key,"inviteFriend");
    }else{
        setFn("/myAccount/inviteFriend/"+key,key,"inviteFriend");
    }
});
export default obj;
