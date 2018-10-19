/**
 * 协议接口
 * Created by wangcuiqing on 2018/3/27.
 */
const http='http://pc-test.duorongcf.com';
module.exports={
    borrow:http+'/agreement/borrow.do',//借款协议
    product:http+'/agreement/product.do',//权益转让及受让协议
    entrust:http+'/http_entrust',//委托协议
    transfer:http+'/agreement/transfer.do',//债权转让协议
}
