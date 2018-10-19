// import statusData from '../../../../../../../../../../mock-server/status.json';
// import isVipData from '../../../../../../../../../../mock-server/vip-check.json';
// import chanceData from '../../../../../../../../../../mock-server/chance.json';
// import playData from '../../../../../../../../../../mock-server/play.json';
// import recordData from '../../../../../../../../../../mock-server/record.json';
// import rankData from '../../../../../../../../../../mock-server/rank.json';
// import gameData from '../../../../../../../../../../mock-server/game.json';
// import betData from '../../../../../../../../../../mock-server/bet.json';
// import myGuessData from '../../../../../../../../../../mock-server/my-guess.json';
// import myCardData from '../../../../../../../../../../mock-server/my-card.json';
// import xchgData from '../../../../../../../../../../mock-server/xchg.json';
//
// const mockdata = {
//     7200 : statusData,
//     7201 : isVipData,
//     7207 : chanceData,
//     7206 : playData,
//     7205 : recordData,
//     7211 : rankData,
//     7213 : gameData,
//     7214 : betData,
//     7215 : myGuessData,
//     7216 : myCardData,
//     7217 : xchgData,
// };
// let requestService = function(url, params, callAfter) {
//     let jsondata = mockdata[url];
//     let howlong = {
//         7200 : 1000,
//         7201 : 1000,
//         7207 : 1000,
//         7206 : 1000,
//         7205 : 3000,
//         7211 : 2000,
//         7213 : 2500,
//         7214 : 2500,
//         7215 : 2500,
//         7216 : 2500,
//         7217 : 2500
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

    httpStatus : '/activity/world-cup/status.do', //活动状态
    httpParticipate : '/activity/world-cup/participate.do', //渠道用户
    httpChance: '/activity/world-cup/user-message.do',  //剩余机会
    httpDraw: '/activity/world-cup/lottery-draw.do',    //提交游戏结果
    httpMyGift : '/activity/world-cup/user-all-prize.do',  //我的礼物
    httpRank : '/activity/world-cup/card-rank.do',   //总排名
    httpGame : '/activity/world-cup/get-can-guess.do',    //比赛列表
    httpBet : '/activity/world-cup/do-guess.do',     //投注竞猜
    httpMyGuess : '/activity/world-cup/get-user-guess.do', //我的竞猜
    httpMyCard: '/activity/world-cup/user-card.do',   //我的卡片
    httpXchg: '/activity/world-cup/prize-exchange.do',     //转换卡片

    // httpStatus : 7200, //活动状态
    // httpParticipate : 7201, //渠道用户
    // httpChance: 7207,  //剩余机会
    // httpDraw: 7206,    //提交游戏结果
    // httpMyGift : 7205,  //我的礼物
    // httpRank : 7211,   //总排名
    // httpGame : 7213,    //比赛列表
    // httpBet : 7214,     //投注竞猜
    // httpMyGuess : 7215, //我的竞猜
    // httpMyCard: 7216,   //我的卡片
    // httpXchg: 7217,     //转换卡片
}
