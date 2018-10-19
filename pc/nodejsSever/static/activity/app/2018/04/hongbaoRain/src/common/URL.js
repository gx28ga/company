// import statusData from '../../../../../../../../mock-server/status.json';
// import isVipData from '../../../../../../../../mock-server/vip-check.json';
// import chanceData from '../../../../../../../../mock-server/chance.json';
// import playData from '../../../../../../../../mock-server/play.json';
// import recordData from '../../../../../../../../mock-server/record.json';
// import signData from '../../../../../../../../mock-server/sign.json';
// import rankData from '../../../../../../../../mock-server/rank.json';
//
// import statusData from '../../mock-server/status.json';
// import isVipData from '../../mock-server/vip-check.json';
// import chanceData from '../../mock-server/chance.json';
// import playData from '../../mock-server/play.json';
// import recordData from '../../mock-server/record.json';
// import signData from '../../mock-server/sign.json';
// import rankData from '../../mock-server/rank.json';
// import dailyData from '../../mock-server/daily.json';
// //
// const mockdata = {
//     7200 : statusData,
//     7201 : isVipData,
//     7207 : chanceData,
//     7206 : playData,
//     7205 : recordData,
//     7209 : signData,
//     7211 : rankData,
//     7212 : dailyData
// };
// let requestService = function(url, params, callAfter) {
//     let jsondata = mockdata[url];
//     let howlong = {
//         7200 : 1000,
//         7201 : 1000,
//         7207 : 1000,
//         7206 : 3000,
//         7205 : 3000,
//         7209 : 3000,
//         7211 : 2000,
//         7212 : 1000
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

    httpStatus : '/activity/1804/status.do', //活动状态
    httpParticipate : '/activity/1804/participate.do', //渠道用户
    httpChance: '/activity/1804/chance.do',  //剩余机会
    httpPlay: '/activity/1804/game.do',    //提交游戏结果
    httpMyGift : '/activity/1804/gift_record.do',  //我的礼物
    httpGetSign : '/activity/1804/game_init.do', //获取签名
    httpRank : '/activity/1804/rank.do',   //总排名
    httpDaily : '/activity/1804/rank_day.do',   //排名

    // httpStatus : 7200, //活动状态
    // httpParticipate : 7201, //渠道用户
    // httpChance: 7207,  //剩余机会
    // httpPlay: 7206,    //提交游戏结果
    // httpMyGift : 7205,  //我的礼物
    // httpGetSign : 7209, //获取签名
    // httpRank : 7211,   //总排名
    // httpDaily : 7212    //当天排名
}
