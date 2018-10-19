/**
 * 用户信息相关
 * created by bo.peng 2018/4/13
 * email:spion@qq.com
 */
let URLS = require("./URLS");
module.exports = {
    //用户帐户首页 相关数据
    USER_ACCOUNT_INFO : "/accountIndex/info.do",
    //个人信息，手机号等
    PERSONAL_INFO : "/memberSetting/index.do",
    //等级特权
    LEVEL_INFO:URLS.PCTEST+"/cmall/member/vip.do",
    //消息记录
    MESSAGE_LOG:"/messageCenter/getMessage.do",
    //消息标注为已读
    MESSAGE_READ:"/messageCenter/updateUnReadMsg.do",
    //消息详情
    MESSAGEDETAIL:"/messageCenter/carouselNotice/info.do"
};
