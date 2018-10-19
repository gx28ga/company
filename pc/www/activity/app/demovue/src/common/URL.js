const http = ''
module.exports = {
    status : http+'/activity/tycoon-settled/status.do', //活动状态
    commissionRecord : http+"/recommend/getDrRecommendOrder.do",//我的佣金
    MonthlyTask : http+"/recommend/getDrRecommendTask.do",//每月任务
    waitingLevel :http+"/recommend/getDrRecommendConfig.do",//待收等级
    hesitory: http+"/activity/myRecommend.do",//首月返现的好友
      MyFriend: http+"/activity/v1/myRecommend.do"//我的好友
}
