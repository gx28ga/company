async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../common/global'),
    T = require('../common/tool'),
    fs = require('fs');
const imghttp = 'https://www.duorongcf.com/images/home-partners';
const imgsrc='https://www.duorongcf.com/main/activity/web/insurance/images'
let obj={
    title:"联系我们,多融财富,电话,地址-多融财富",
    keywords:"联系我们,联系多融财富,联系电话,联系地址",
    description:"你知道多融财富在哪里吗？如果你想来公司咨询投资信息或者想了解更多的投资产品，可以联系我们，我们的联系通电话是021-80312696，公司地址：上海市虹口区四川北路859号中信广场41楼，当然你还可以关注我们的公众号，能随时了解新的投资信息。",
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
     require("../common/writeHTML")(res,obj,'./about/LXWM.njk','../www/about/LXWM.html');
};
