module.exports = function( req, res , router){
    if(req.params.id =="zhuceProtocol.html"){//注册协议
        require('./zhuceProtocol.js')(req,res); 
    }else if(req.params.id =="termsProtocol.html"){//定向委托投资协议
        require('./termsProtocol.js')(req,res); 
    }else if(req.params.id =="currentProtocol.html"){//定向委托投资协议新手宝
         require('./currentProtocol.js')(req,res);  
    }else if(req.params.id =="qyProtocol.html"){//权益转让及受让协议
        require('./qyProtocol.js')(req,res); 
    }else if(req.params.id =="baoliProtocol.html"){//应收账款收益权转让及回购协议
        require('./baoliProtocol.js')(req,res); 
    }else if(req.params.id =="entrustProtocol.html"){//委托协议
        require('./entrustProtocol.js')(req,res); 
    }else if(req.params.id =="loanProtocol.html"){//借款协议
        require('./loanProtocol.js')(req,res); 
    }else if(req.params.id =="transferProtocol.html"){//债权转让协议
        require("./transferProtocol.js")(req,res);
    }else if(req.params.id=="fwProtocol.html"){//投资服务协议
        require("./fwProtocol.js")(req,res);
    }else if(req.params.id='companyLoan.html'){//企业借款协议
        require("./companyLoan.js")(req,res);
    }
};
