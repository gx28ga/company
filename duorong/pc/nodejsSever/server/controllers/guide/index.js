const async = require('async');

let obj = {
    title : '多融财富--快速导航',
    list:[
        {"firstT":"理财·票据",
            "secondT":
                [
                    {"secondName":"理财产品","borderC":"border1","child":
                        [
                            // {"linkName":"新手宝","url":"/billDetail/newhand.html","active":false},
                            {"linkName":"新手专享","url":"/dq","active":true},
                            {"linkName":"定期理财","url":"/dq","active":false},
                            {"linkName":"P2P理财","url":"/pj","active":false}
                        ]
                    }
                ]
        },
        {"firstT":"多融·资讯",
            "secondT":
                [
                    {"secondName":"简介","borderC":"border2","child":
                        [
                            {"linkName":"信息披露","url":"/about/DRGK.html","active":false},
                            {"linkName":"公司新闻","url":"/main/jt/GSXW","active":true},
                            {"linkName":"公司动态","url":"/main/jt/GSDT","active":false},
                            {"linkName":"运营报告","url":"/about/YYBG.html?201710","active":false},
                            {"linkName":"联系我们","url":"/about/LXWM.html","active":false},
                        ]
                    },
                    {"secondName":"理财通","borderC":"border3","child":
                        [
                            {"linkName":"开户指南","url":"/other/escrowAccount.html","active":false},
                            {"linkName":"常见问题","url":"/help/CJWT.html","active":false},
                            {"linkName":"理财课堂","url":"/help/LCKT.html","active":false},
                            {"linkName":"新手指引","url":"/help/XSZY.html","active":true},
                            {"linkName":"免责声明","url":"/help/MZSM.html","active":false},
                            {"linkName":"银联开通","url":"/help/YLKT.html","active":false},
                        ]
                    },
                    {"secondName":"安心理财","borderC":"border4","child":
                        [
                            {"linkName":"国资委下属","url":"/other/CP157-gqSpecial.html","active":false},
                            {"linkName":"安全保障","url":"/about/AQBZ.html","active":true},
                            {"linkName":"票据专题","url":"/other/pjspecial.html","active":false},
                            {"linkName":"企业回访","url":"/about/QYHF.html","active":false}
                        ]
                    }
                ]
        },
        {"firstT":"手机·客户端",
            "secondT":
                [
                    {"secondName":"客户端","borderC":"border6","child":
                        [
                            {"linkName":"多融财富App","url":"/other/downloadApp.html","active":false}
                        ]
                    }
                ]
        },
    ]

};
Object.assign(obj,global.static);

module.exports = function( req, res , env){
    require("../common/writeHTML")(res,obj,'guide/index.njk','../www/guide/index.html');
};

