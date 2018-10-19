// import statusData from '../../../../../../../../mock-server/status.json';
// import dailyData from '../../../../../../../../mock-server/daily.json';
// import finalData from '../../../../../../../../mock-server/final.json';

// import statusData from '../../mock-server/status.json';
// import dailyData from '../../mock-server/daily.json';
// import finalData from '../../mock-server/final.json';
// import weeklyData from '../../mock-server/weekly.json';
// const mockdata = {
//     7200 : statusData,
//     7201 : dailyData,
//     7202 : finalData,
//     7203 : weeklyData
// };
// let requestService = function(url, params, callAfter) {
//     let jsondata = mockdata[url];
//     let howlong = {
//         7200 : 1000,
//         7201 : 5000,
//         7202 : 4000,
//         7203 : 2000
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

    httpStatus : '/activity/05/rank/status.do', //活动状态
    httpDaily : '/activity/05/rank/day.do', //每日排名数据
    httpFinal : '/activity/05/rank/sum.do', //总排名数据
    httpWeekly : '/activity/05/rank/week.do', //周排名数据

    // httpStatus : 7200, //活动状态
    // httpDaily : 7201, //每日排名数据
    // httpFinal : 7202, //总排名数据
    // httpWeekly : 7203, //周排名数据
}
