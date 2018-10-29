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
    title:"法律声明_多融财富理财项目_p2p线上投资理财平台_上海银砖金融-多融财富"
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
    require("../../common/writeHTML")(res,obj,'./other/protocol/lawProtocol.njk','../www/other/protocol/lawProtocol.html');
};
