var routerApp = angular.module('someApp', [
    'ui.router'
    ,'loginModule'
    ,'ngDialog'
    ,'ngResource'
    ,'mainModule'
    ,'ui.bootstrap'
    ,'ngAnimate'
    ,'angularCSS'
    // ,'investListModule'
    ]);
routerApp.run(function($rootScope, $state, $stateParams,$location,$http,$templateCache,$filter,resourceService,$localStorage){
        // console.log(BizQQWPA);
        // BizQQWPA.addCustom();
        $rootScope.$state = $state;
        $rootScope.webPath = '/';
        $rootScope.hrefUrl = '';
        $rootScope.v = 'v2.0.1';
        $rootScope.$stateParams = $stateParams;
        $rootScope.maskHidde = false;
        $rootScope.$on('LOGIN_DEL_X-REQU',function(){
            delete $http.defaults.headers.common['X-Requested-With'];
        });
        $rootScope.$on('LOGIN_OUT',function(event,url){
            delete $localStorage.user;
            $templateCache.remove(url);
            resourceService.queryPost($rootScope,$filter('交互接口对照表')('退出接口'),{},'退出');
            if($localStorage.pathUrl != undefined){
                var pth = $localStorage.pathUrl.replace('/','').replace('mainmyAccount', 'main.myAccount.')
            }else{
              $localStorage.pathUrl = pth = 'main.home';
            }
            if(pth.indexOf('main.myAccount')){
                $filter("跳转页面")('denLu',$localStorage.pathUrl,$localStorage.pathUrl);
            }else if(pth.indexOf('main.newDetail')){
            }else if(pth.indexOf('newFriend')){
            }else{
                $filter("跳转页面")('denLu',$localStorage.pathUrl,'dl');
            }

            $rootScope.maskHidde = false;
        });
    });

routerApp.factory('httpInterceptor', [ '$q', '$injector','$rootScope',function($q, $injector,$rootScope) {



    var httpInterceptor = {
        'responseError' : function(response) {
            return $q.reject("response",response);
        },
        'response' : function(response){
            if(response.headers("sessionstatus")=="timeout" ){
                if(response.config.url  != "Login" && response.config.url !="user/toLogin"){
                    $rootScope.$emit("LOGIN_OUT",response.config.url);
                    return false;
                }
            }
            return response;
        },
        'request' : function(config) {
            if(config.url != "Login" && config.url !="user/toLogin" && config.url !="/user/findWhiteCollarApartmentByUserName"){
                config.headers['X-Requested-With']="XMLHttpRequest";
            }
            return config;
        },
        'requestError' : function(config){
            return $q.reject(config);
        }
    };
return httpInterceptor;
}]);
routerApp.config([ '$httpProvider','$stateProvider','$urlRouterProvider','$sceProvider','$locationProvider',function($httpProvider,$stateProvider, $urlRouterProvider,$sceProvider,$locationProvider){
    $httpProvider.interceptors.push('httpInterceptor');
    function getScript(url, callback, charset , b){
        var head = document.getElementsByTagName("head")[0] || doc.documentElement;
        $.each(url,function(i){
            var script = document.createElement("script");
            if ( charset ) {script.charset = charset;}
            script.src = this;
            script.onload = script.onreadystatechange = function() {
                if ( !this.readyState ||
                    this.readyState === "loaded" || this.readyState === "complete" ) {
                    callback(i);

                script.onload = script.onreadystatechange = null;
            }
        };

        head.insertBefore( script, head.firstChild );
        })
    }
    // $sceProvider.enabled(false);
    $locationProvider.html5Mode(true);
    /*if (window.history && window.history.pushState) {
        $locationProvider.html5Mode(true);
    }else {
        window.location.hash = '/'  // IE 9 FIX            
        $locationProvider.html5Mode(false);
    }*/
    $urlRouterProvider.otherwise('/main/home');//mainwelcome maintradepasswdSet
    var sta='/main/';
    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: sta + 'html/main.html'
        })
        .state('404', {
            url: '/404',
            templateUrl: sta + 'html/404.html'
        })
        // .state('main.test', {
        //     url: 'test',
        //     templateUrl: sta + 'html/serverTest.html'
        // })
        // .state('main.loginPage', {
        //     url: 'loginPage',
        //     templateUrl: sta + 'html/loginPage.html'
        // })
        /*登录*/
        .state('dl', {
            url: '/dl',
            css:[sta + 'css/stylesheets/dl.css'],
            templateUrl: sta + 'html/login/dl.html'
        })
        /*注册*/
        .state('zhuce', {
            url: '/zhuce?recommPhone&toFrom',
            templateUrl: sta + 'html/login/zc.html'
        })
        /*推广页优化*/
        .state('publicitySec', {
            url: '/publicitySec',
            templateUrl: sta + 'html/activity/CP167.html'
        })
         /*市场双旦推广页*/
    // .state('publicity', {
    //     url: '/publicity',
    //     templateUrl: sta + 'activity/web/newYearRegister/newYearRegister.html'
    // })
        /*蜘蛛网*/
        /*.state('spider', {
            url: '/spider',
            templateUrl: sta + 'html/login/spider.html'
        })*/
        /* 找回密码 */
        .state('main.resetPasswd', {
            url: '/resetPasswd',
            templateUrl: sta + 'html/reset-passwd.html'
        })
        /*实名认证*/
        .state('main.tradepasswdSet', {
            url: '/tradepasswdSet',
            templateUrl:sta +  'html/tradepasswd-set.html'
        })
        /*存管账户开户激活*/
        .state('main.createEscrowAccount', {
            url: '/createEscrowAccount',
            template: '<create-escrow-account></create-escrow-account>'
        })
        /*.state('main.home', {
            url: '/home',
            templateUrl: sta + 'html/newhome.html'
        })*/
        .state('main.home', {
            url: '/home',
            css:[sta + 'style/stylesheets/hover.css'],
            templateUrl: sta + 'html/home.html',
            controller : function(){
                location.href=location.origin;
            }
        })
        /*产品安选列表页*/
        .state('main.bankBillList', {
            url: '/bankBillList',
            templateUrl:sta +  'html/bill-list-new.html'
        })
        /*定期产品列表页*/ 
          /*.state('main.bankBillList2', {
            url: '/bankBillList2',
            css:[sta +'css/stylesheets/billList.css'],
            templateUrl:sta +  'html/bill-list-new2.html',
        })*/
        /*新手灵活宝*/
        .state('main.newZeroDetail', {
            url: '/newZeroDetail',
            templateUrl: sta + 'html/newzero-detail.html'
        })
        /*产品详情页*/
        .state('main.billDetail', {
            url: '/billDetail?id&coupon&Interest&double',
            
            templateUrl: sta + 'html/bill-detail.html'
        })
        /*定期产品详情页*/
        /* .state('main.billDetail2', {
            url: '/billDetail2?id&coupon&Interest&double',
            css:[sta + 'css/stylesheets/billDetail2.css'],
            templateUrl: sta + 'html/bill-detail2.html'
        })*/
        /*CPA产品页   专享标*/
        .state('main.newDetail', {
            url: '/newDetail',
            templateUrl: sta + 'html/new-detail.html'
        })
        /*我的资产框架*/
        .state('main.myAccount', {
            url: '/myAccount',
            templateUrl: sta + 'html/my-account.html'
        })
        /*我的资产首页*/
        .state('main.myAccount.accountHome', {
            url: '/accountHome',
            templateUrl: sta + 'html/account-home.html'
        }) 
        // 投资人风险测评
        .state('main.myAccount.riskEvaluation', {
            url: '/riskEvaluation',
            css:[sta+"css/stylesheets/riskEvaluation.css"],
            templateUrl: sta + 'html/account-riskEvaluation.html'
        })
          /*积分商城-首页*/
        .state('main.pointMall', {
            url: '/pointMall',
            css:[sta + 'css/stylesheets/pointMall.css', sta + 'style/stylesheets/hover.css'],
            // templateUrl: sta + 'html/pointMall.html'
            template: '<point-mall-home></point-mall-home>'
        })
        /* 积分商城-商品详情页*/
        .state('main.pointMallGoodsInfo', {
            url: '/pointMallGoodsInfo/{goodsType}/{goodsId}',
            css:[sta + 'css/stylesheets/pointMall.css', sta + 'style/stylesheets/hover.css'],
            // templateUrl: sta + 'html/pointMall.html'
            template: '<point-mall-goods-info></point-mall-goods-info>'
        })
        /* 积分商城-积分明细 */
        .state('main.pointMallPointRecords', {
            url: '/pointMallPointRecords/{type}',
            css:[sta + 'css/stylesheets/pointMall.css', sta + 'style/stylesheets/hover.css'],
            template: '<point-mall-point-records></point-mall-point-records>'
        })
        /* 积分商城-积分说明 */
        .state('main.pointMallRemark', {
            url : '/pointMallRemark',
            css:[sta + 'css/stylesheets/pointMall.css', sta + 'style/stylesheets/hover.css'],
            template : '<point-mall-remark></point-mall-remark>'
        })
        /*CP138-自动投标需求v1.0-20160906*/
        /*.state('main.myAccount.autoTb', {
            url: '/autoTb',
            templateUrl: sta + 'html/account-autoTb.html'
        })*/
        /*我的投资*/
        .state('main.myAccount.myInvest', {
            url: '/myInvest',
            templateUrl: sta + 'html/account-myInvest.html'
        })
        /*资产记录*/
        .state('main.myAccount.myAssets', {
            url: '/myAssets',
            templateUrl: sta + 'html/account-myAssets.html'
        })
        /*资金管理-充值*/
        .state('main.myAccount.recharge', {
            url: '/recharge',
            templateUrl: sta + 'html/account-recharge.html'
        })
        /*资金管理-充值*/
        .state('main.myAccount.rechargeSuccess', {
            url: '/rechargeSuccess',
            templateUrl: sta + 'html/account-recharge-success.html'
        })
        /*资金管理-提现*/
        .state('main.myAccount.Withdraw', {
            url: '/Withdraw',
            templateUrl: sta + 'html/account-Withdraw.html'
        })
        /*账户管理-个人中心*/
        .state('main.myAccount.person', {
            url: '/person',
            templateUrl: sta + 'html/account-person.html'
        })
        /*账户管理-安全认证*/
        .state('main.myAccount.security', {
            url: '/security',
            css:[sta+'css/stylesheets/dl.css'],
            templateUrl: sta + 'html/account-security.html'
        })
        /*账户管理-银行卡*/
        .state('main.myAccount.bankCard', {
            url: '/bankCard',
            templateUrl: sta + 'html/account-bankCard.html'
        })
        /*优惠券-我的优惠券*/
        .state('main.myAccount.myCoupon', {
            url: '/myCoupon',
            templateUrl: sta + 'html/account-myCoupon.html'
        })
         /*消息-我的消息*/
        .state('main.myAccount.myMsg', {
            url: '/myMsg',
            templateUrl: sta + 'html/account-myMsg.html'
        })
          /*任务-我的任务*/
        .state('main.myAccount.myTask', {
            url: '/myTask',
            css:[sta + 'css/stylesheets/myTask.css'],
            templateUrl: sta + 'html/account-myTask.html'
        })
        /*我的好友*/
        .state('main.myAccount.myFriend', {
            url: '/myFriend',
            css:[sta + 'css/stylesheets/myFriend.css',sta + 'css/stylesheets/bootstrap-sass-3.3.7/calendar.css'],
            templateUrl: sta + 'html/account-friend.html'
        })
        /*会员等级说明*/
        .state('main.myAccount.vipAbout', {
            url: '/vipAbout',
            // templateUrl: sta + 'html/account-vipAbout.html'
            template: '<account-vip-about></account-vip-about>'
        })
        /*帮助*/
        .state('main.jt', {
            url: '/jt',
            templateUrl: sta + 'html/jt.html'
        })
        /*多融概况*/
        .state('main.jt.DRGK', {
            url: '/DRGK?(menuName)',
            templateUrl: sta + 'html/jt/DRGK.html'
        })
        /*联系我们*/
        // .state('main.jt.LXWM', {//已上线
        //     url: '/LXWM',
        //     templateUrl: sta + 'html/jt/LXWM.html'
        // })
        /* 安全保障 */
        // .state('main.jt.AQBZ', {
        //     url: '/AQBZ',
        //     templateUrl: sta + 'html/jt/AQBZ.html'
        // })
        /*公司新闻*/
        .state('main.jt.GSXW', {
            url: '/GSXW?newId',
            templateUrl: sta + 'html/jt/GSXW.html'
        })
        /*WQQ----管理团队*/
        .state('main.jt.GLTD', {
            url: '/GLTD?newId',
            templateUrl: sta + 'html/jt/GLTD.html'
        })
        /*公司新闻详情*/
        .state('main.jt.XWXQ', {
            url: '/XWXQ?newId&t',
            templateUrl: sta + 'html/jt/XWXQ.html'
        })
        /*公司动态*/
        .state('main.jt.GSDT', {
            url: '/GSDT',
            templateUrl: sta + 'html/jt/GSDT.html'
        })
         /*多融财富投资服务协议*/
        .state('fw', {//app链接还没替换
            url: '/fw',
            templateUrl: sta + 'html/protocol/fw.html'
        })
        /*多融财富注册协议*/
        .state('zc', {//app链接还没替换
            url: '/zc',
            templateUrl: sta + 'html/protocol/zc.html'
        })
        /*上海华瑞银行在线资金存管三方协议*/
        .state('cgxy', {//app链接还没替换
            url: '/cgxy',
            templateUrl: sta + 'html/protocol/cgxy.html'
        })
        /*权益转让及受让协议*/
        .state('qy', {//app链接还没替换
            url: '/qy?idx&pid&uid&investId',
            templateUrl: sta + 'html/protocol/qy.html'
        })
        /*借款协议*///app链接还没替换
        .state('loan', {
            url: '/loan?idx&pid&uid&investId',
            templateUrl: sta + 'html/protocol/loan.html'
        })
        /*多融新手宝-定向委托投资协议*/
        .state('current', {//app链接还没替换
            url: '/current?idx&pid&uid&investId',
            templateUrl: sta + 'html/protocol/current.html'
        })
        /*委托协议*/
        .state('entrust', {//app链接还没替换
            url: '/entrust?idx&pid&uid&investId',
            templateUrl: sta + 'html/protocol/entrust.html',
            controller : ['$scope','$rootScope','$filter','resourceService','$timeout','$resource','$location','$localStorage',function($scope,$rootScope,$filter,resourceService,$timeout,$resource,$location,$localStorage){
                getScript([sta + 'js/controllers/agreement/entrust.js'],function(){
                    entrust($scope,$rootScope,$filter,resourceService,$timeout,$resource,$location,$localStorage);
                })
            }]
        })
        /*债权转让协议*/
        .state('mytransfer', {//app链接还没替换
            url: '/mytransfer?idx&pid&uid&investId',
            templateUrl: sta + 'html/protocol/transfer.html'
        })
        /*应收账款转让回购协议*/
        .state('baoli', {//app链接还没替换
            url: '/baoli?idx&pid&uid&investId',
            templateUrl: sta + 'html/protocol/baoli.html'
        })
        /*定期产品协议*/
         .state('terms', {//app链接还没替换
            url: '/terms?idx&pid&uid&investId',
            templateUrl: sta + 'html/protocol/terms.html'
        })
        /*注册送礼      已废弃
        .state('doublegift', {
            url: '/doublegift',
            templateUrl: sta + 'html/activity/doublegift.html'
        })*/
        /*注册引导页*/
        // .state('newGuide', {
        //     url: '/newGuide',
        //     templateUrl: sta + 'html/activity/newGuide.html'
        // })
        /*国企战略入股-pc 废弃
        .state('backgroundInfo', {
            url: '/backgroundInfo',
            templateUrl: sta + 'html/activity/background-info.html'
        })*/
        /*  废弃
        .state('send', {
            url: '/send',
            templateUrl: sta + 'html/activity/send.html'
        })*/
        /*安全保障 */
      /*  .state('main.jt.guarantee', {
            url: '/guarantee?(menuName)',
            templateUrl: sta + 'html/guarantee.html'
        })*/
        /*CP66-PC推广着陆页           已废弃
        .state('CP66', {
            url: '/CP66',
            templateUrl: sta + 'html/activity/CP66.html'
        })*/
        /*cp067运营日报*/
        // .state('main.jt.wqqReport', {
        //     url: '/wqqReport',
        //     templateUrl: sta + 'html/activity/wqqReport.html'
        // })
        /*cp254视频链接*/
         .state('main.pcVideo', {
            url: '/pcVideo',
             css:[sta + 'css/stylesheets/pcVideo.css'],
            templateUrl: sta + 'html/pcVideo.html'
        })


        /*CP178-11月运营报告v1.0-20161212----PC*/
        .state('main.jt.201611', {
            url: '/201611',
            templateUrl: sta + 'html/report/201611.html'
        })
        /*CP178-10月运营报告v1.0-20161104----PC*/
        .state('main.jt.201610', {
            url: '/201610',
            templateUrl: sta + 'html/report/201610.html'
        })

        /*CP159-9月运营报告v1.0-20161008 ---PC*/
        .state('main.jt.201609', {
            url: '/201609',
            templateUrl: sta + 'html/report/201609.html'
        })
        /*CP067-8月运营报告---PC*/
        .state('main.jt.201608', {
            url: '/201608',
            templateUrl: sta + 'html/report/201608.html'
        })


        /*活动*/
        .state('activity', {
            url: '/activity',
            templateUrl: sta + 'html/activity/activity.html'
        })


        /*邀请好友          废弃
        .state('activity.invite', {
            url: '/invite',
            templateUrl: sta + 'html/activity/invite.html'
        })*/
        /*CP170-双十一 活动 pc           废弃
        .state('activity.olympiad', {
            url: '/olympiad',
            templateUrl: sta + 'html/activity/olympiad.html'
        })*/

        /*CP142-中秋活动 pc              废弃
        .state('activity.moonFestival', {
            url: '/moonFestival',
            templateUrl: sta + 'html/activity/zhongqiu.html'
        })*/
        /*CP161-十月返现活动             废弃
        .state('activity.returnMoney', {
            url: '/returnMoney',
            templateUrl: sta + 'html/activity/returnMoney.html'
        })*/
        /*CP181-十一月下旬活动v1.0-20161109               废弃
        .state('activity.november', {
            url: '/november',
            templateUrl: sta + 'html/activity/november.html'
        })*/
        
        /*CP192-银行监管      已废弃，代码未删除*/
        /*.state('main.bankRegulators', {
            url: '/bankRegulators',
            templateUrl: sta + 'html/activity/web/bankRegulators.html',
            css: sta + 'css/activity/web/stylesheets/bankRegulators.css'
        })*/


        /*积分兑换奖品升级   已废弃    
        .state('activity.newPrizes', {
            url: '/newPrizes',
            templateUrl: sta + 'html/activity/web/newPrizes.html',
            css: sta + 'css/activity/web/stylesheets/thankGuest.css'
        })*/
       
}]);
