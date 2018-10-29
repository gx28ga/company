/**
 * 协议页面
 * created by bo.peng 2018/4/26
 * email:spion@qq.com
 */
module.exports={
    path: "/protocol/:id",
    component: () => import("../../module/protocol")
    //enroll  注册协议   例如 /protocol/enroll
    //invest  投资服务协议
    //loan  借款协议
    //terms  定向委托投资协议
    //transfer  权益转让及受让协议
    //income  应收账款收益权转让及回购协议
    //entrust  委托协议
    //assignment  债权转让协议
    //companyLoan  业贷协议
    //openAccount  开户存管协议 v1.0
};
