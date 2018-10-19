/**
 * desc: 品牌部相关活动
 * created by bo.peng 2018/6/20.
 * email:spion@qq.com
 */
module.exports = function( req, res , router){
    if(req.params.id =="hopeLibrary.html"){//希望工程图书室--专题活动
        require('./hopeLibrary.js')(req,res);
    }else if(req.params.id =="noRun.html"){//p2p不跑路
        require('./noRun.js')(req,res);
    }
};
