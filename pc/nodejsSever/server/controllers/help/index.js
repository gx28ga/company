module.exports = function( req, res , router){
    if(req.params.id == "LCKT.html"){//帮助中心--理财课堂
        require("./LCKT.js")(req, res);
    }else if(req.params.id == "XSZY.html"){//帮助中心--新手指引
        require("./XSZY.js")(req, res);
    }else if(req.params.id == "MZSM.html"){//帮助中心--免责声明
        require("./MZSM.js")(req, res);
    }else if(req.params.id == "YLKT.html"){//帮助中心--银联开通
        require("./YLKT.js")(req, res);
    }else{//帮助中心--常见问题
	    require("./CJWT.js")(req, res);
    }
};

