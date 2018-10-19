/**
 * 邀请好友相关接口
 * Created by wangCuiQing on 2018/4/13.
 */
let URLS = require("./URLS");
module.exports = {
    //邀请好友首月返现
    HISTORYFRIEND : URLS.PCTEST2 + "/activity/myRecommend.do",
    //每日佣金
    COMMISSIONRECORD : URLS.PCTEST2 + "/recommend/getDrRecommendOrder.do",
    //每月任务
    MONTHLYTASK : URLS.PCTEST2 + "/recommend/getDrRecommendTask.do",
    //待收等级
    WAITINGLEVEL : URLS.PCTEST2 + "/recommend/getDrRecommendConfig.do",
    //我的好友
    MYFRIEND : URLS.PCTEST2 + "/activity/v1/myRecommend.do",
};
