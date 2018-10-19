const http = '';
module.exports = {
    httpStatus : http + '/activity/july/status.do', //活动状态
    httpBoxNum : http + '/activity/july/case_num.do', //宝箱数量
    httpParticipate : http + '/activity/july/participate.do', //渠道用户
    httpPrizeList : http + '/activity/july/case_record.do', //奖品列表
    httpPrizeInfo : http + '/activity/july/case_info.do', //奖品内容


  // httpStatus : 'http://192.168.0.72:7700', //活动状态
  // httpBoxNum : 'http://192.168.0.72:7701', //宝箱数量
  // httpParticipate : 'http://192.168.0.72:7702', //渠道用户
  // httpPrizeList : 'http://192.168.0.72:7703', //奖品列表
  // httpPrizeInfo : 'http://192.168.0.72:7704', //奖品内容
}
