// import statusData from '../../../../../../../../mock-server/status.json';
// import isVipData from '../../../../../../../../mock-server/vip-check.json';
// import chanceData from '../../../../../../../../mock-server/chance.json';
// import rankData from '../../../../../../../../mock-server/rank.json';
// import playData from '../../../../../../../../mock-server/play.json';
// import recordData from '../../../../../../../../mock-server/record.json';
// import signData from '../../../../../../../../mock-server/sign.json';
// const mockdata = {
//     7200 : statusData,
//     7201 : isVipData,
//     7207 : chanceData,
//     7203 : rankData,
//     7204 : playData,
//     7205 : recordData,
//     7209 : signData
// };
// let requestService = function(url, params, callAfter) {
//     let jsondata = mockdata[url];
//     let howlong = {
//         7200 : 1000,
//         7201 : 1000,
//         7207 : 1000,
//         7203 : 1000,
//         7204 : 1000,
//         7205 : 1000,
//         7209 : 1000
//     };
//     if (jsondata) {
//         setTimeout(() =>{
//             callAfter(jsondata);
//         }, howlong[url]);
//     }
// };
// let tempReqSvc = function(url, params, callAfter) {
//     T.ajax({
//         url: url,
//         data: params,
//         callback: true,
//         success: function(_data) {
//             if (!_data.success && !_data.errorMsg) {
//                 let Pop = require('../pop/index.js');
//                 let pop = new Pop({
//                     title: '&nbsp;',
//                     content: "操作失败，请联系客服！",
//                     okBtn: true,
//                     cancelBtn: false,
//                     timing: 'rotate3d',
//                     //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
//                     okTxt: '确定',
//                 });
//                 return false;
//             }
//             callAfter(_data);
//         }
//     });
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
    // tempReqSvc : tempReqSvc,
    requestService : requestService,

    httpStatus : '/activity/vow/status.do', //活动状态
    httpParticipate : '/activity/vow/participate.do', //渠道用户
    httpChance: '/activity/vow/chance.do',  //剩余机会
    httpRank : '/activity/vow/rank.do', //许愿排名
    httpPlay : '/activity/vow/game.do',  //许愿结果
    httpMyGift : '/activity/vow/my_record.do',  //我的奖品

    // httpStatus : 7200, //活动状态
    // httpParticipate : 7201, //渠道用户
    // httpChance: 7207,  //剩余机会
    // httpRank : 7203, //许愿排名
    // httpPlay : 7204,  //提交游戏结果
    // httpMyGift : 7205,  //我的礼物
}
