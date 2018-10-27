/**
 * 我的帐户
 * created by bo.peng 2018/4/13
 * email:spion@qq.com
 */
module.exports = {
    //充值
    RECHARGE : "/recharge/index.do",
    //去充值，并获取相关信息，进入第三方充值。v2.0
    GET_RECHARGE_INFO : "/v4/app/crush/get-api-info.do",
    V1 : { //v1.0相关接口
        //去充值 v1.0
        PAY : "/v3/app/crush/pay.do",
        //发送短信验证
        SEND_MSG : "/v3/app/crush/send-sms.do",
        //重置交易密码发送短信验证码
        SEND_TRANSACATION_CODE:"/memberSetting/sendForgetTpwdCode.do",
        //重置交易密码接口
        UPDATETRANSACTIONPWD:"/memberSetting/updateTpwdBySms.do"
    },
    //提现
    WITHDRAW_CASH : "/v2/carry/carry.do",
    //提现
    WITHDRAWALS : "/withdrawals/index.do",
    //添加修改收货地址
    UPDATE_ADDRESS : "/memberSetting/updateMemberNowAddress.do",
    //交易对账
    TRANSITION:"/assetRecord/index.do",
    //我的优惠券
    MYCOUPON : "/activity/index.do",
    //我的投资记录
    MYINVEST_CENTER : "/investCenter/newProductList.do",
    //重置提现密码
    SET_WITHDRAWALSPWD:"/v2/member/change/carry-password.do",
};
