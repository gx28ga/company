const http = ''
module.exports = {
    userIsNew : http+'/existMobilePhone', //判断用户是否已注册
    sendMsg : http+'/sendRegMsg', //获取短息验证码
    subReg : http+'/reg', //注册
}