const http = '';
module.exports = {
    // httpStatusCurrent : http + '/v1/current/product/info.do', //是否活期新手
    // httpStatusTime : http + '/detail', //票据详情 - 是否定期新手
    httpNoviceStatus : http + '/expose/m-ivt.do', //新手状态
    httpTimeProduct : http + '/indexProduct',   //商品列表 - 定期新手专享产品信息


  // httpStatusCurrent : 'http://192.168.0.97:8080/v1/current/product/info.do', //是否活期新手
  // httpStatusTime : 'http://192.168.0.97:8080', //票据详情 - 是否定期新手
}
