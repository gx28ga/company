/**
 * 登录相关接口
 * created by bo.peng 2018/4/13
 * email:spion@qq.com
 */
module.exports ={
    //判断是否开通帐号或需要去注册
    GET_PHONE_STATUS : "/register/existMobilePhone.do",
    //找回密码 发关短信功能
    GETPWD_SEND_CODE : "/memberSetting/forgetPwdSmsCode.do",
    //更改登录密码
    UUPDATE_LOGIN_PWD : "/memberSetting/updateLoginPassWord.do",
    //注册新用户
    REGISTER : "/register/reg.do",
    //注册时的 验证码 图片
    VALIDATE_CODE : "/login/validateCode.do",
    //注册时发送短信
    SEND_REG_MSG : "/register/sendRegMsg.do",
    //登录
    LOGIN : "/login/doLogin.do",
};
