const http = '';
// const http = 'http://www.duorongcf.com'
module.exports = {
  httpStatus : http+'/activity/apr-exchange/status.do', //活动状态
  httpParticipate : http+'/activity/apr-exchange/participate.do', //渠道用户
  httpUserMsg : http+'/activity/apr-exchange/user-message.do', //用户财富及奖品信息
  httpGetPrize : http+'/activity/apr-exchange/get-prize.do',  //用户奖品兑换
  httpSetContact : http+'/activity/apr-exchange/contact-save.do', //保存联系方式
  // httpStatus : 'http://127.0.0.1:7719', //活动状态
  // httpParticipate : 'http://127.0.0.1:7720', //渠道用户
  // httpUserMsg : 'http://127.0.0.1:7718', //用户财富及奖品信息
}
