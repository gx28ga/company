/**
 * Created by kaifa on 2017/12/11.
 */
async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../common/global'),
    T = require('../common/tool'),
    fs = require('fs');
let obj={
    title : '多融财富-暖冬计划让孩子温暖过冬'
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
    require("../common/writeHTML")(res,obj,'./other/openWinter.njk','../www/other/openWinter.html');
};
