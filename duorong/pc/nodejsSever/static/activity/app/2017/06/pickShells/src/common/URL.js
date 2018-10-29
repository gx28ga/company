const http = '';
// const http = 'http://www.duorongcf.com'
module.exports = {
  httpStatus : http+'/activity/pick-up-shells/status.do', //活动状态
  httpWinner : http+'/activity/pick-up-shells/rank.do', //中奖名单
  httpParticipate : http+'/activity/pick-up-shells/participate.do', //渠道用户
  httpUserData : http+'/activity/pick-up-shells/wealth-and-lottery.do', //用户财富及奖品信息
  httpExchangeRecord : http+'/activity/pick-up-shells/prize-record.do',  //用户兑奖记录
  httpExchangeRequest : http+'/activity/pick-up-shells/get-prize.do', //兑换请求


  // httpStatus : 'http://192.168.0.72:7750', //活动状态
  // httpWinner : 'http://192.168.0.72:7751', //中奖名单
  // httpParticipate : 'http://192.168.0.72:7752', //渠道用户
  // httpUserData : 'http://192.168.0.72:7753', //用户财富及奖品信息
  // httpExchangeRecord : 'http://192.168.0.72:7754',  //用户兑奖记录
  // httpExchangeRequest : 'http://192.168.0.72:7755', //兑换请求
}
