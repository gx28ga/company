// import statusData from '../../../../../../../../mock-server/status.json';
// import isVipData from '../../../../../../../../mock-server/vip-check.json';
// import chanceData from '../../../../../../../../mock-server/chance.json';
// import drawData from '../../../../../../../../mock-server/draw.json';
// import rankData from '../../../../../../../../mock-server/rank.json';
// import countData from '../../../../../../../../mock-server/count.json';
// import recordData from '../../../../../../../../mock-server/record.json';
// import xchgData from '../../../../../../../../mock-server/xchg.json';
// import signData from '../../../../../../../../mock-server/sign.json';
// const mockdata = {
//     7200 : statusData,
//     7201 : isVipData,
//     7207 : chanceData,
//     7206 : drawData,
//     7203 : rankData,
//     7204 : countData,
//     7205 : recordData,
//     7208 : xchgData,
//     7209 : signData
// };
// let requestService = function(url, params, callAfter) {
//     let jsondata = mockdata[url];
//     let howlong = {
//         7200 : 1000,
//         7201 : 1000,
//         7207 : 1000,
//         7206 : 0,
//         7203 : 3000,
//         7204 : 5000,
//         7205 : 3000,
//         7208 : 0,
//         7209 : 3000
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

    httpStatus : "/activity/february/work/status.do", //活动状态
    httpParticipate : "/activity/february/work/participate.do", //渠道用户
    httpChance: "/activity/february/work/chance.do",  //剩余机会
    httpDraw: "/activity/february/work/draw.do",    //红包奖品
    httpRank : "/activity/february/work/rank.do", //排名
    httpCount : "/activity/february/work/game.do",  //提交游戏结果
    httpMyGift : "/activity/february/work/my_record.do",  //我的礼物
    httpXchg : "/activity/february/work/exchange.do",    //兑换奖品
    httpGetSign : "/activity/february/work/game_init.do", //获取签名

    // httpStatus : 7200, //活动状态
    // httpParticipate : 7201, //渠道用户
    // httpChance: 7207,  //剩余机会
    // httpDraw: 7206,    //红包奖品
    // httpRank : 7203, //排名
    // httpCount : 7204,  //提交游戏结果
    // httpMyGift : 7205,  //我的礼物
    // httpXchg : 7208,    //兑换奖品
    // httpGetSign : 7209, //获取签名
}
