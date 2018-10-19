/**
 * describe
 * Created by wangCuiqing
 * Date: 2018/5/24
 */
async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../common/global'),
    T = require('../common/tool'),
    fs = require('fs');
let obj={
    title : '多融财富-合规进度披露'
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
    require("../common/writeHTML")(res,obj,'./other/recordSchedule.njk','../www/other/recordSchedule.html');
};