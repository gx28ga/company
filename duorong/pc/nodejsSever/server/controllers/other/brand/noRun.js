/**
 * describe
 * Created by wangCuiqing
 * Date: 2018/6/27
 */
const async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../../common/global'),
    T = require('../../common/tool'),
    fs = require('fs');

let obj = {
    title : '多融财富--同心共进，携手前行'
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
    require("../../common/writeHTML")(res,obj,'./other/brand/noRun.njk','../www/other/brand/noRun.html');
};