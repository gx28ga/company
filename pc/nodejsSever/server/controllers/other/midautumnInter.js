const async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../common/global'),
    T = require('../common/tool'),
    fs = require('fs');

let obj = {
    title : '多融财富-2017情暖中秋'
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
    require("../common/writeHTML")(res,obj,'./other/midautumnInter.njk','../www/other/midautumnInter.html');
};