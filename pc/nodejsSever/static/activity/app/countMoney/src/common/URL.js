const http = ''
module.exports = {
    status : http+'/activity/counting-money/status.do', //活动状态
    participate : http+'/activity/counting-money/participate.do', //渠道用户
    getlucky : http+'/activity/counting-money/chance.do', //获得机会数
    backprize : http+'/activity/counting-money/counting-to-prize.do', //获得数钞票的金额 ，返回随机奖品 ；
    prize : http+'/activity/counting-money/counting-to-more.do', //积分奖品及用户可获得奖品
    prizelist : http+'/activity/counting-money/counting-rank.do' //积分排行榜及奖品信息
}