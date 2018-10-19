module.exports = function( req, res , router){
    if(req.params.id == "downloadApp.html"){//下载页
        require("./downloadApp.js")(req, res);
    /*}else if(req.params.id =="escrowAccount.html") {//银行存管操作指南
       require('./escrowAccount.js')(req, res);*/
    }else if(req.params.id =="thankGuest.html") {//客户答谢会
       require('./thankGuest.js')(req, res);
    }else if(req.params.id =="zhongjianerju.html") {//对中建二局业务进行回访及实地考察
	    require('./zhongjianerju.js')(req, res);
    }else if(req.params.id =="pjspecial.html") {//票据专题--商票银票的介绍
       require('./pjspecial.js')(req, res);
    }else if(req.params.id =="CP157-gqSpecial.html") {//国企发布会------中商沪深战略控股多融财富
       require('./CP157-gqSpecial.js')(req, res);
    }else if(req.params.id =="noviceOnlyEnjoy.html") {//新手专享 ------ 活期上线后新手专享宣传页
       require('./noviceOnlyEnjoy.js')(req, res);
    }else if(req.params.id =="midautumnInter.html") {//品牌部  ---------  中秋访老
       require('./midautumnInter.js')(req, res);
    }else if(req.params.id =="eleSignature.html") {//e签宝
        require('./eleSignature.js')(req, res);
    }else if(req.params.id =="friend.html") {//邀请好友宣传页面
        require('./friend.js')(req, res);
    }else if(req.params.id =="inviteFriend.html") {//邀请好友宣传页面
        require('./inviteFriend.js')(req, res);
    }else if(req.params.id =="escrowAdv.html") {//银行存管宣传页面
        require('./escrowAdv.js')(req, res);
    }else if(req.params.id =="guhuaDafuweng.html") {//固话大富翁----pc宣传页
        require('./guhuaDafuweng.js')(req, res);
    }else if(req.params.id =="zhongjianerjuhuifang.html") {//对中建二局业务二次回访
        require('./zhongjianerjuhuifang.js')(req, res);
    }else if(req.params.id =="zhongjianerju_chongqing.html") {//对中建二局业务二次回访
        require('./zhongjianerju_chongqing.js')(req, res);
    }else if(req.params.id=="openWinter.html"){//青海暖冬计划
        require("./openWinter.js")(req,res);
    }else if(req.params.id=="sense.html"){//最具社会责任感企业奖
        require("./sense.js")(req,res);
    }else if(req.params.id=="powerfulShareholders.html"){//国资+上市  强大股东背景
        require("./powerfulShareholders.js")(req,res);
    }else if(req.params.id=="recordSchedule.html"){//备案进度披露
        require("./recordSchedule.js")(req,res);
    }
};
