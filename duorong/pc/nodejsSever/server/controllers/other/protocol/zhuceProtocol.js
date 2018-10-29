async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../../common/global'),
    T = require('../../common/tool'),
    fs = require('fs');
let obj={
    title:"多融财富理财项目_p2p线上投资理财平台_上海银砖金融-多融财富",
    keywords:"多融财富,多融财富理财,投资理财平台,线上理财,p2p理财平台,多融财富理财项目,银砖金融,上海银砖",
    description:"多融财富是上海银砖投资控股集团旗下互联网金融平台,背靠大型国有企业，专注于国企供应链金融，基于银行与国企承兑汇票，为投资者提供票据安选、票据优选等投资品,100元起投,7天至6月投资期间任选,收益率9.00%-13%,所有资产由银行与国企承兑，安全可靠。"
};
Object.assign(obj,global.static);
module.exports = function( req, res , env){
        require("../../common/writeHTML")(res,obj,'./other/protocol/zhuceProtocol.njk','../www/other/protocol/zhuceProtocol.html');
};
