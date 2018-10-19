// import statusData from '../../../../../../../../../../mock-server/status.json';
// import isVipData from '../../../../../../../../../../mock-server/vip-check.json';
// import myData from '../../../../../../../../../../mock-server/myData.json';
//
// const mockdata = {
//     7200 : statusData,
//     7201 : isVipData,
//     7202 : myData
// };
// let requestService = function(url, params, callAfter) {
//     let jsondata = mockdata[url];
//     let howlong = {
//         7200 : 1000,
//         7201 : 2000,
//         7202 : 2500
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
    // httpParticipate : 7201, //渠道用户
    // httpMyData : 7202,  //我的数据

    httpStatus : '/buy-more-give-more/status.do', //活动状态
    httpParticipate : '/buy-more-give-more/participate.do', //渠道用户
    httpMyData : '/buy-more-give-more/info.do',  //我的数据
}
