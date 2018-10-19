async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../common/global'),
    T = require('../common/tool'),
    fs = require('fs');
let obj={
    title:"运营报告_银砖金融理财收益多少_p2p理财收益率,排名-多融财富",
    keywords:"运营报告,银砖金融理财收益多少,p2p理财收益率,p2p理财收益排名",
    description:"银砖金融理财收益多少？投资者要想知道银砖金融理财收益情况以及整个p2p平台的收益率和排名，还需要结合运营报告来看，截止2017年2月28日，累积教育金额达到140050640000元，累计赚取收益12861371元，累计注册用户242887人，其中男性占有投资比例63.2%，女性占有36.8%。",
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
     require("../common/writeHTML")(res,obj,'./about/YYBGmonth.njk','../www/about/YYBG.html');
};
