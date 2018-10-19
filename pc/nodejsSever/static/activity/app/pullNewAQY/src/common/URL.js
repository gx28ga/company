const http = ''
module.exports = {
    userIsNew : http+'/existMobilePhone', //判断用户是否已注册
    sendMsg : http+'/sendRegMsg', //获取短息验证码
    subReg : http+'/reg', //注册
    sendAward : http+'/activity/operation/send-award.do',
    isHaveChance : http+'/activity/operation/is-have-chance.do',
    investRank:  http+'/welcome-the-new/invest-rank.do',
    regAndInvestCount:  http+'/index/regAndInvestCount.do' 
}