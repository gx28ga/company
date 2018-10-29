/**
 * describe
 * Created by ChenYongJu
 * Date: 2018/6/19
 */
async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../../common/global'),
    T = require('../../common/tool'),
    fs = require('fs');
let obj={
    title:"风险揭示函_法律法规_银砖金融理财收益多少_p2p理财收益率,排名-多融财富"
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
    require("../../common/writeHTML")(res,obj,'./other/protocol/riskProtocol.njk','../www/other/protocol/riskProtocol.html');
};
