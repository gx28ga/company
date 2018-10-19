module.exports = function (app,env) {
    let express = require('express'),
        compress = require('compression'),
        router = express.Router();

    //首页
    const home = require("../controllers/home");
    router.get('/', (req, res)=>{home(req, res);});
    //end首页

	//定期理财
	const dqlicai = require("../controllers/licai/dq.js");
	router.get('/dq', (req, res)=>{dqlicai(req, res , env);});
	//定期理财

    //标的详情
    const billDetal = require("../controllers/billDetail");
	billDetal();
    //end标的详情
    
	//定期理财
	const pjlicai = require("../controllers/licai/pj.js");
	router.get('/pj', (req, res)=>{pjlicai(req, res , env);});
	//定期理财

	//关于我们
	const about = require("../controllers/about");
	router.get('/about/:id', (req, res)=>{about(req, res , env);});
	//end关于我们
    
    //帮助中心
    const help = require("../controllers/help/index.js");
    router.get('/help/:id', (req, res)=>{help(req, res , router);});
    //end帮助中心

	//其他常用页面（eg: 宣传页）
	const other = require("../controllers/other/index.js");
    router.get("/other/:id",(req,res)=>{other(req,res,router);});
    //end其他常用页面（eg: 宣传页）

	//活动页面相关
	/*const activity = require("../controllers/activity/index.js");
	router.get("/activity/:id",(req,res)=>{other(req,res,router);});*/
	//end活动页面相关
     
    //新闻详情
    const news = require("../controllers/about/content.js");
     router.get("/news",(req,res)=>{news(req,res)});
    //新闻详情end

    //协议页面
    const protocol=require("../controllers/other/protocol/index.js");
    router.get("/other/protocol/:id",(req,res)=>{protocol(req,res,router);});
    //end协议页面

    // 品牌部相关活动
    const brand=require("../controllers/other/brand/index.js");
    router.get("/other/brand/:id",(req,res)=>{brand(req,res,router);});
    //end品牌部相关活动

    //pc活动页面 eg:publicitySec
    const avtivity=require("../controllers/activity/index.js");
    router.get("/activity/:id",(req,res)=>{avtivity(req,res,router);});
    //end  pc活动页面

    //网站导航
    const guide = require("../controllers/guide/index.js");
    router.get("/guide",(req,res)=>{guide(req,res)});
    //网站导航end
    /*下载浏览器*/
    router.get('/browser',(req, res)=>{require("../controllers/browser")(req, res);});
    /*end 下载浏览器*/


    setInterval(function(){
        home();
        dqlicai();
	    pjlicai();
        billDetal();
        news();
    },1000*60*3);
    app.use('/', router);
    app.use(compress());
    app.use(express.static('../www'));

    app.use(function(request,response,next){
        let req = require('../controllers/common/request');
        req(request,response);
        //next();
    });
};
