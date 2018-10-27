const async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../common/global'),
    T = require('../common/tool'),
    fs = require('fs');

let obj = {
    title : '新手指引_新人操作-多融财富',
    keywords : '新手指引,新人操作',
    description : '作为多融财富的一名新手该如何投资呢？如果投资者不知道如何进行操作，可以在新手指引页面查看相关信息，此页面会为新人呈现详细的操作流程，让投资者快速了解、掌握投资流程。',
};
Object.assign(obj,global.static);

module.exports = function( req, res , env){
    Object.assign(obj,{ });

    res.render('./help/XSZY',obj);
    let minify = require('html-minifier').minify ,
        content = minify(
            nunjucks.render('./help/XSZY.njk',obj),
            {
                removeComments: true,
                collapseWhitespace: true,
                minifyJS:true,
                minifyCSS:true
            }
        );
    fs.writeFileSync('../www/help/XSZY.html', content);
};

