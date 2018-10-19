async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../common/global'),
    T = require('../common/tool'),
    fs = require('fs');
const imghttp = 'https://www.duorongcf.com/images/home-partners';
const imgsrc='https://www.duorongcf.com/main/activity/web/insurance/images'
let obj={
    title:"安全保障_多融财富票据理财_投资理财产品_p2p网贷平台投资靠谱吗,可靠吗-多融财富",
    keywords:"安全保障,多融财富票据理财,投资理财产品,p2p投资靠谱吗,p2p投资可靠吗,p2p网贷平台可靠吗",
    description:"p2p投资靠谱吗？p2p网贷平台可靠吗？这是很多投资者都想咨询的问题，很多投资者想通过多融财富票据理财来获取一定的收益，但是不知道选择哪种投资理财产品，也担心投资有风险。投资者不必担心，多融财富背靠大型国有企业，拥有强大财力支撑，资金通过第三方平台监管，严格风控，零逾期，同时还有凯曼律所提供法律支持，能为投资者的理财提供安全保障。",
    partnerImg:[//合作单位
      {linkPath: imghttp+'/a.png'},
        {linkPath: imghttp+'/b.png'},
        {linkPath: imghttp+'/c.png'},
        {linkPath: imghttp+'/d.png'},
        {linkPath: imghttp+'/e.png'},
        {linkPath: imghttp+'/f.png'},
        {linkPath: imghttp+'/g.png'},
        {linkPath: imghttp+'/h.png'},
        {linkPath: imghttp+'/i.png'},
        {linkPath: imghttp+'/j.png'},
        {linkPath: imghttp+'/l.png'},
        {linkPath: imghttp+'/m.png'},
        {linkPath: imghttp+'/n.png'}
    ],
       honorImg:[//公司荣誉
        {linkPath: imgsrc+'/zu1.png'},
        {linkPath: imgsrc+'/zu2.png'},
        {linkPath: imgsrc+'/zu3.png'},
        {linkPath: imgsrc+'/zu4.png'},
        {linkPath: imgsrc+'/zu5.png'},
        {linkPath: imgsrc+'/zu6.png'},
        {linkPath: imgsrc+'/zu7.png'},
        {linkPath: imgsrc+'/zu8.png'}
    ]
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
     require("../common/writeHTML")(res,obj,'./about/AQBZ.njk','../www/about/AQBZ.html');
};
