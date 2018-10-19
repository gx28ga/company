/**
 * 开户
 * created by bo.peng 2018/4/13
 * email:spion@qq.com
 */
let URLS = require("./URLS");
module.exports={
    //个人开户 首页
    PERSONAL_INDEX : URLS.PC+"/personal-loan/list/citys.do",
    //个人开户 发送短信
    PERSONAL_SEND_CODE : URLS.PC+"/personal-loan/send-msg.do",
    //开通个人 开户
    OPEN_PERSONAL : URLS.PC+"/personal-loan/personal-loan.do",
    //开通个人账户2.0
    OPEN_PERSONAL2: "/personal-loan/v3/open.do",
    //用户开户
    OPEN_USER_ACCOUNT : "/memberSetting/v3/open.do",
    //授权管理
    MEMBER_SETTING : "/memberSetting/auth.do",
    //选择银行
    BANK_INFO  : "/bankInformation/getDrBankInformationList.do",
    //开户
    OPEN_MEMBER : "/memberSetting/new/open.do"
};
