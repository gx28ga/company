/**
 * 风险测评相关接口
 * created by wangcuiqing 2018/4/13
 *
 */
let URLS = require("./URLS");
module.exports = {
    riskEvaluation:URLS.PC+ "/memberSetting/riskEvaluation.do",//风险测评
    riskUrl:URLS.PC+"/accountIndex/myRiskLevel.do"//是否进行评级
};
