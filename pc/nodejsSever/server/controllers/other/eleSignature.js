const async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../common/global'),
    T = require('../common/tool'),
    fs = require('fs');

let obj = {
    title : '多融财富-e签宝，电子签章正式上线'
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
    require("../common/writeHTML")(res,obj,'./other/eleSignature.njk','../www/other/eleSignature.html');
};