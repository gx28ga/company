/**
 * describe 积分商城接口
 * Created by wangCuiqing
 * Date: 2018/5/2
 */
let URLS = require("./URLS");
module.exports = {
    //积分商城首页
    INDEX : URLS.PCTEST +"/cmall/member/account.do",
    //兑换记录
    CHANGRECORD:URLS.PCTEST+"/cmall/member/exchange-log.do",
    //积分明细
    POINTLOG:URLS.PCTEST+"/cmall/member/points-log.do",
    //积分兑换
    PRODUCTEXCHANGE:URLS.PCTEST+"/cmall/member/product-exchange.do",
    //商品详情
    PRODUCTINFO:URLS.PCTEST+"/cmall/member/product/info.do",
    //任务中心
    TASKLIST:URLS.PCTEST+"/cmall/member/task-list.do"
};
