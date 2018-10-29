module.exports = function( req, res , router){
    if(req.params.id == "publicitySec.html"){//下载页
        require("./publicitySec.js")(req, res);
    }else if(req.params.id=="socialService7th.html"){//第七届公益节专题
        require("./socialService7th.js")(req,res);
    }else if(req.params.id=="fiveBillion.html"){//第七届公益节专题
        require("./fiveBillion.js")(req,res);
    }
};
