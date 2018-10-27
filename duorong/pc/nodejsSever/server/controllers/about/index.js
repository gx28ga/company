module.exports = function( req, res , router){
	if(req.params.id =="NEWS.html"){//公司新闻
		require("./news.js")(req, res);
	}else if(req.params.id=="DRGK.html"){//公司简介
		require("./drgk.js")(req, res);
	}else if(req.params.id=="AQBZ.html"){//安全保障
        require("./guarantee.js")(req,res);
    }else if(req.params.id=="LXWM.html"){//联系我们
        require("./contactus.js")(req,res);
    }else if(req.params.id=="YYBG.html"){//运营报告
         require("./report_month.js")(req,res);
    }/*else if(req.params.id==""){//新闻详情页
        require("./content.js")(req,res);
    }*/else if(req.params.id=="GSDT.html"){//公司动态
        require("./GSDT.js")(req,res);
    }else if(req.params.id=="QYHF.html"){//企业回访
        require("./QYHF.js")(req,res);
    }
};
