// import statusData from '../../../../../../../../../../mock-server/status.json';
// import isVipData from '../../../../../../../../../../mock-server/vip-check.json';
// import couponData from '../../../../../../../../../../mock-server/coupon.json';
// import homeData from '../../../../../../../../../../mock-server/home-data.json';
// import grabData from '../../../../../../../../../../mock-server/grab.json';
//
// const mockdata = {
//     7200 : statusData,
//     7201 : couponData,
//     7202 : isVipData,
//     7204 : homeData,
//     7208 : grabData,
// };
// let requestService = function(url, params, callAfter) {
//     let jsondata = mockdata[url];
//     let howlong = {
//         7200 : 1000,
//         7201 : 2000,
//         7202 : 1000,
//         7204 : 2000,
//         7208 : 2500,
//     };
//     if (jsondata) {
//         setTimeout(() =>{
//             callAfter(jsondata);
//         }, howlong[url]);
//     }
// };
let requestService = function(url, params, callAfter) {
    T.ajax({
        url: url,
        data: params,
        callback: true,
        success: function(_data) {
            if (!_data.success && !_data.errorMsg) {
                let Pop = require('../pop/index.js');
                let pop = new Pop({
                    title: '&nbsp;',
                    content: "操作失败，请联系客服！",
                    okBtn: true,
                    cancelBtn: false,
                    timing: 'rotate3d',
                    //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                    okTxt: '确定',
                });
                return false;
            }
            callAfter(_data);
        }
    });
};
module.exports = {
    requestService : requestService,

    // httpStatus : 7200, //活动状态
    // httpCoupon : 7201,    //券数据
    // httpParticipate : 7202, //渠道用户
    // httpMyData : 7204,  //我的券数据
    // httpTake : 7208, //抢券 or VIP领券

    httpStatus : '/activity/voucher/status.do', //活动状态
    httpCoupon : '/activity/voucher/coupons.do',    //券数据
    httpParticipate : '/activity/voucher/participate.do', //渠道用户
    httpMyData : '/activity/voucher/my_coupon.do',  //我的券数据
    httpTake : '/activity/voucher/sec_kill.do', //抢券 or VIP领券
}
