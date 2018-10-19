async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../common/global'),
    T = require('../common/tool'),
    fs = require('fs');
let obj={
    title : '多融财富-企业回访'
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
    const requst = require('../common/request');
    require("../common/writeHTML")(res,obj,'./about/QYHF.njk','../www/about/QYHF.html');
};
