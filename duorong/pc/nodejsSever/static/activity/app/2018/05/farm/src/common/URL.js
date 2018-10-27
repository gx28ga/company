// import statusData from '../../../../../../../../mock-server/status.json';
// import isVipData from '../../../../../../../../mock-server/vip-check.json';
// import chanceData from '../../../../../../../../mock-server/chance.json';
// import playData from '../../../../../../../../mock-server/play.json';
// import recordData from '../../../../../../../../mock-server/record.json';
// import xchgData from '../../../../../../../../mock-server/xchg.json';
// import rankData from '../../../../../../../../mock-server/rank.json';
// const mockdata = {
//     7200 : statusData,
//     7201 : isVipData,
//     7207 : chanceData,
//     7206 : playData,
//     7205 : recordData,
//     7208 : xchgData,
//     7211 : rankData
// };
// let requestService = function(url, params, callAfter) {
//     let jsondata = mockdata[url];
//     let howlong = {
//         7200 : 1000,
//         7201 : 1000,
//         7207 : 1000,
//         7206 : 3000,
//         7205 : 3000,
//         7208 : 0,
//         7211 : 2000
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

    httpStatus : '/activity/1805/status.do', //活动状态
    httpParticipate : '/activity/1805/participate.do', //渠道用户
    httpChance: '/activity/1805/chance.do',  //剩余机会
    httpPlay: '/activity/1805/game.do',    //提交游戏结果
    httpMyGift : '/activity/1805/gift_record.do',  //我的礼物
    httpXchg : '/activity/1805/convert.do',    //兑换奖品
    httpRank : '/activity/1805/rank.do',   //总排名

    // httpStatus : 7200, //活动状态
    // httpParticipate : 7201, //渠道用户
    // httpChance: 7207,  //剩余机会
    // httpPlay: 7206,    //提交游戏结果
    // httpMyGift : 7205,  //我的礼物
    // httpXchg : 7208,    //兑换奖品
    // httpRank : 7211,   //总排名
}
