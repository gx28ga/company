/*
* @Author: lee
* @Date:   2016-01-23 10:37:01
* @Last Modified by:   lee
* @Last Modified time: 2016-01-23 19:16:49
*/

'use strict';

routerApp
/*开发环境*/
        .filter('isOnLine', function() {
            return function() {
                var isOnLine = true;//fasle=静态调试；true=开发模式
                return isOnLine;
            }
        })
/*清空缓存*/
        .filter('清空缓存', function($localStorage) {
            return function() {
                delete $localStorage.pathUrl;
                delete $localStorage.user;
                //////////////////////////// Add by Weijingchao 2017-05-24 Start ///////////////////////////
                delete $localStorage.uid;
                //////////////////////////// Add by Weijingchao 2017-05-24 End   ///////////////////////////
                ///////////对应存管账户 Start//////////////
                delete $localStorage.isRas;
                ///////////对应存管账户 End  //////////////
            }
        })
/*开发环境*/
        .filter('isLinWidth', function() {
            return function(width) {
                // return 'width:'+width+'%';
                return 'WIDTH:50%';
            }
        })

/*当前登录状态*/
        .filter('isRegister', function($localStorage, $filter) {

            return function(name) {
                var obj = {};
                obj.register = false;
                obj.user={};
                if($localStorage.user != undefined){
                    obj.register = true;
                    if ($localStorage.user.realName == '' || $localStorage.user.realName == undefined || $localStorage.user.realName == null) {
                        $localStorage.user.userName = '亲爱的用户';
                    } else {
                        $localStorage.user.userName = $localStorage.user.realName;
                    }
                    obj.user = $localStorage.user;
                }else{
                    obj.register = false;
                    obj.user.userName = '亲爱的用户';
                }
                return obj;
            }
        })

/*判断login头部*/
        .filter('isLoginPage', function($rootScope) {
            return function(name) {
                if($rootScope.title == "login"){
                    return true;
                }else{ return false;}
            }
        })

/*判断isHome*/
        .filter('isHome', function($rootScope) {
            return function(name) {
                if($rootScope.activeNav == 'home'){
                    return true;
                }else{ return false;}
            }
        })

 /*根据用户状态提示跳转页面方向*/
        .filter('提示跳转', function(ngDialog) {
            return function(templateurl,scope) {
                ngDialog.open({
                        template : templateurl,
                        scope : scope,
                        closeByDocument : true,
                        plain : false
                });
                // return  dialog;
            };
        })

/*新手灵活宝-投资确认弹窗*/
        .filter('投资确认弹窗-新手宝', function(ngDialog) {
            return function(scope) {
                ngDialog.open({
                        template : '../main/js/ng/dialog/invest-dialognew.html',
                        scope : scope,
                        closeByDocument : true,
                        plain : false
                });
                // return  dialog;
            };
        })
/*投资确认弹窗*/
        .filter('投资确认弹窗', function(ngDialog) {
            return function(scope) {
                ngDialog.open({
                        template : '../main/js/ng/dialog/invest-dialog.html',
                        scope : scope,
                        closeByDocument : true,
                        plain : false
                });
                // return  dialog;
            };
        })
/*投资确认弹窗*/
        .filter('自动投标弹窗', function(ngDialog) {
            return function(scope) {
                ngDialog.open({
                        template : '../main/js/ng/dialog/autoTb-dialog.html',
                        scope : scope,
                        closeByDocument : true,
                        plain : false
                });
                // return  dialog;
            };
        })
        /*投资确认弹窗*/
        .filter('弹窗', function(ngDialog) {
            return function(scope,tpl) {
                ngDialog.open({
                        template : tpl,
                        scope : scope,
                        closeByDocument : true,
                        plain : false
                });
            };
        })

/*充值提现弹窗*/
        .filter('充值提现弹窗', function(ngDialog,$state,$localStorage) {//../js/ng/dialog/success-dialog.html
            return function(scope) {
                scope.status = $localStorage.dialogStatus;
                scope.type = $localStorage.dialogType;
                scope.msg = $localStorage.dialogMsg;
                switch(scope.status) {
                    case 'success':
                        scope.text = '成功';
                        break;
                    case 'ing':
                        scope.text = '处理中';
                        break;
                    case 'error':
                        scope.text = '失败';
                        break;
                }
                scope.closeDialog = function(bool) {
                    ngDialog.closeAll();
                    if(!bool){
                        if (scope.type === '充值') {
                            if (scope.status == 'success' ||  scope.status == 'ing') {
                                $state.go('main.myAccount.recharge',null,{
                                    reload:true
                                });
                            } else if (scope.status == 'error') {
                                if (scope.recharge.errorCode != '1003') {
                                    $state.go('main.myAccount.recharge',null,{
                                        reload:true
                                    });
                                }
                            }
                            scope.isSubmit = false;
                        } else if (scope.type === '提现') {
                            $state.go('main.myAccount.Withdraw',null,{
                                reload:true
                            });
                        }
                    }
                };
                ngDialog.open({
                    template: '../main/js/ng/dialog/success-dialog.html',
                    scope: scope,
                    closeByDocument: false,
                    // plain : true,
                    showClose: false
                });
                // return  dialog;
            };
        })
/*充值弹窗*/
        .filter('充值弹窗', function(ngDialog) {
            return function(scope) {
                ngDialog.open({
                        template : '../main/js/ng/dialog/recharge-dialog.html',
                        scope : scope,
                        closeByDocument : false,
                        plain : false,
                        /*preCloseCallback : function () {
                            location.reload();
                        }*/
                        preCloseCallback : function (doReload) {
                            if (doReload != undefined && !doReload) return;
                            location.reload();
                        }
                });
                // return  dialog;
            };
        })
/*充值弹窗*/
        .filter('图片放大弹窗', function(ngDialog) {
            return function(scope) {
                ngDialog.open({
                        template : '../main/js/ng/dialog/bigimg-dialog.html',
                        scope : scope,
                        closeByDocument : false,
                        plain : false,
                });
                // return  dialog;
            };
        })
/*存管账户开户/激活提交结果弹窗*/
    .filter('存管账户操作结果弹窗', function(ngDialog) {
        return function(scope) {
            ngDialog.open({
                template : '../main/js/ng/dialog/escrowAccount-result.html',
                scope : scope,
                closeByDocument : false,
                plain : false,
                controller: function ($scope) {
                    $scope.onMainBtnClick = function () {
                        $scope.closeThisDialog(false);
                        setTimeout(function() {scope.result.onMainBtnClick();}, 600);
                    };
                },
                preCloseCallback : function (value) {
                    if (value === false) return;
                    setTimeout(function() {scope.result.onClose();}, 600);
                }
            });
        };
    })
    /*存管账户升级提示弹窗*/
    .filter('存管账户升级提示弹窗', function(ngDialog) {
        return function(scope) {
            ngDialog.open({
                template : '../main/js/ng/dialog/escrowAccount-upgrade.html',
                scope : scope,
                closeByDocument : false,
                plain : false,
                controller: function ($scope) {
                    $scope.onAbout = function () {
                        scope.forwarder.onAbout();
                        $scope.closeThisDialog();
                    };
                    $scope.onActivate = function () {
                        scope.forwarder.onActivate();
                        $scope.closeThisDialog();
                    };
                }/*,
                preCloseCallback : function (value) {
                    if (value === false) return;
                    scope.result.onClose();
                }*/
            });
        };
    })
    /*存管账户提现结果弹窗*/
    .filter('存管账户提现结果弹窗', function(ngDialog) {
        return function(scope) {
            ngDialog.open({
                template : '../main/js/ng/dialog/escrowAccount-withdrawResult.html',
                scope : scope,
                closeByDocument : false,
                plain : false,
                controller: function ($scope) {
                    $scope.onMainBtnClick = function () {
                        scope.result.onMainBtnClick();
                        $scope.closeThisDialog(false);
                    };
                },
                preCloseCallback : function (value) {
                    if (value === false) return;
                    scope.result.onClose();
                }
            });
        };
    })
/**
    当点击投资时要判断当前用登录状态并决定页面跳转到哪里
*/
        .filter('clickTouZiGotoWhere', function($localStorage,$filter,communicationService,$state) {

            return function(scope,myUrl) {
                var url;
                scope.msg={};
                if($filter('isRegister')().register){//如果已登录
                    url=myUrl;
                }else{//未登录
                    communicationService.setTagPage('denLu','main.home');
                    url = 'main.loginPage';
                };
                 $state.go(url);
            }
        })

/*跳转去登录*/
        .filter('跳转页面', function($rootScope,communicationService,$state,$localStorage) {
            /*
                type:登录或注册状态,
                path:出自,
                url：要去,
                item：产品信息,
                pathMenu,按钮名
                activeText：按钮选择的状态name:上级按钮名url:子集按钮路径
            */
            return function(type,path,url,item,pathMenu,activeText) {

                if(item != undefined){
                    $localStorage.product = item;
                    communicationService.setProduct(item);
                };
                $localStorage.pathObj =[{pathName:'首页',url:'/mainhome'}];
                if(pathMenu != undefined || pathMenu != null){
                    $localStorage.pathObj.push(pathMenu);
                }
                $localStorage.pathUrl = path;

                // 跳转到我的账户里边左边栏显示
                if (activeText == undefined) {
                    $localStorage.activeText = {name:'我的账户',url:'main.myAccount.accountHome'};
                } else {
                    $rootScope.$broadcast('myEvent.WHDR_Ctrl',activeText);
                    $localStorage.activeText = activeText;
                }
                communicationService.setTagPage(type,path);
                if(item != undefined){
                     $state.go(url,item.id);
                }else{
                     $state.go(url);
                };
            }
        })
/*跳回上一页*/
        .filter('跳回上一页', function($localStorage,$state) {

            return function(type,path) {
                if ($localStorage.pathUrl != undefined) {
                    if($localStorage.product!=undefined){
                    	if($localStorage.pathUrl=="main.billDetail"){ //去静态页
		                    window.location.href = "/billDetail/billDetal_html_"+$localStorage.UrlParam.id+".html"
	                    }else{
		                    $state.go($localStorage.pathUrl,$localStorage.UrlParam)
	                    }
                    }else{
                        $state.go($localStorage.pathUrl);
                    }
                }else{
                    $state.go('main.home');
                }
            }
        })
/* 数字转为两位小数 */
        .filter('changeTwoDecimal', function() {

            return function(x) {
                var f_x = parseFloat(x);
                if (isNaN(f_x)) {
                    return;
                }
                var f_x = Math.round(x * 100) / 100;
                var s_x = f_x.toString();
                var pos_decimal = s_x.indexOf('.');
                if (pos_decimal < 0) {
                    pos_decimal = s_x.length;
                    s_x += '.';
                }
                while (s_x.length <= pos_decimal + 2) {
                    s_x += '0';
                }
                if (s_x == '0.00') {
                    return '';
                }
                return s_x;
            }
        })

/*跳回上一页*/
        .filter('60秒倒计时', function($timeout) {

            return function(scope,timeNum) {
                scope.nowTimer = '';
                var timer;
                var nowTimer = timeNum;
                if(scope.isSubMin){
                    setTimerOut();
                }
                function setTimerOut() {
                    timer = $timeout(
                        function() {
                            if(nowTimer <= 0 ){
                                scope.nowTimer='';
                                scope.disabledPhoneBtn = false;
                                scope.isSubMin = true;
                                scope.isGetVoice = false;
                                scope.isGetCode = false;
                                if(scope.changeIMGCode != undefined){
                                    scope.changeIMGCode();
                                };
                            }else{
                                if (scope.isvoice) {
                                    scope.isSubMin = false;
                                }
                                nowTimer-=1;
                                scope.nowTimer = nowTimer + 's ';
                                setTimerOut();
                            }
                        },
                        1000
                    );
                };
                scope.stop=function(){
                    nowTimer = 0;
                    scope.isGetVoice = false;
                };
            }
        })
/*跳回上一页　　　*/
        .filter('300秒倒计时', function($timeout) {

            return function(scope,timeNum,isOverBool) {
                scope.nowTimer = '';
                var timer;
                var nowTimer = timeNum;
                // var isOverBool=true;
                if(isOverBool){
                    setTimerOut();
                }
                function setTimerOut() {
                    timer = $timeout(
                        function() {
                            if(isOverBool){
                                if(nowTimer <= 0 ){
                                    scope.nowTimer='短信验证失效';
                                    scope.isDisabledPhoneMsg =true;
                                    scope.disabledPhoneBtn = true;
                                    if(scope.changeIMGCode != undefined){
                                        scope.changeIMGCode();
                                    };

                                }else{
                                    nowTimer -=1;
                                    setTimerOut();
                                }
                            }
                        },
                        1000
                    );
                };
                scope.stopmsmTimerout=function(){
                    isOverBool = false;
                };
            }
        })

/*跳回上一页*/
        .filter('6秒倒计时自动跳转', function($timeout,$filter) {

            return function(scope,timeNum) {
                scope.nowTimerGoto = '';
                var nowTimer = timeNum;
                setTimerOut();
                var isBool = true;
                scope.stopTimerout=function(){
                    isBool = false;
                };
                function setTimerOut() {
                    var timer = $timeout(
                        function() {
                            if(nowTimer <= 0 ){
                                if(isBool){
                                    $filter('跳转页面')('','main.home','main.home');
                                }
                            }else{
                                nowTimer-=1;
                                scope.nowTimerGoto = nowTimer + 's ';
                                setTimerOut();
                            }
                        },
                        1000
                    );
                };
            }
        })

/*路由状态*/
        .filter('isLogin', function($rootScope,$location,communicationService) {

            return function(scope) {
                switch($location.$$url){
                    case "/main/loginPage":
                        if( communicationService.getTagPage().url == undefined){
                            communicationService.setTagPage('denLu','main.home');
                        };
                        $rootScope.title="多融财富欢迎您！";
                        $rootScope.isLoginPage = true;
                    break;
                    case "/main/resetPasswd":
                        $rootScope.title="修改密码";
                        $rootScope.isLoginPage = true;
                    break;
                    case "/main/tradepasswdSet":
                        $rootScope.title="实名认证";
                        $rootScope.isLoginPage = true;
                    break;
                    case "/main/bankBillList":
                        scope.path=[{pathName:'首页',url:'/main/home'},{pathName:'票据安选',url:'/main/bankBillList'}];
                        $rootScope.title="多融-票据安选";
                        $rootScope.isLoginPage = false;
                    break;
                    case "/main/YbankBillList":
                        scope.path=[{pathName:'首页',url:'/main/home'},{pathName:'票据优选',url:'/main/YbankBillList'}];
                        $rootScope.title="多融-票据优选";
                        $rootScope.isLoginPage = false;
                    break;
                    case "/main/billDetail":
                        scope.path=[{pathName:'首页',url:'/main/home'},{pathName:'票据优选',url:'/main/YbankBillList'}];
                        $rootScope.title="多融-票据详情";
                        $rootScope.isLoginPage = false;
                    break;
                    case "/main/myAccountaccountHome":
                        $rootScope.title="多融-我的资产";
                        $rootScope.isLoginPage = false;
                    break;
                    case "/main/Home":
                        $rootScope.isHome = true;
                    break;
                    default :
                        $rootScope.isLoginPage = false;
                    break;
                }
            }
        })
/**路由状态*/
        // .filter('isHome', function($rootScope,$location,communicationService) {

        //     return function(scope) {
        //         switch($location.$$url){
        //             case "/main/home":
        //                 $rootScope.isHome = true;
        //             break;
        //             default :
        //                 $rootScope.isHome = false;
        //             break;
        //         }
        //     }
        // })

/*接口对照表*/
 .filter('交互接口对照表-', function() {

            return function(name) {
                var src = '/main/';
                var portUrlMap = {
                    '登录接口' : "/login/doLogin",

                    /*登录注册*/
                    '修改用户手机验证':'/login/forgetPwdSmsCode',

                    /*首页Home*/
                    'Home主数据' : src+'data/TEST/testHomeDatas.json',
                    '产品列表' :src+'data/TEST/testBillListDatas.json',
                    '注册成交人数' :src+'data/TEST/testUpdate.json',
                    '公司新闻' : src+'data/news.json',
                    /*票据优选*/
                    '票据安选列表' :src+'data/TEST/testBillListDatas.json',

                    /*产品详情页*/
                    '票据详情投资记录' :src+'data/TEST/testInvestListDatas.json',
                    '票据详情账户信息' :src+'data/TEST/testBillAccountDatas.json',

                    /*我的资产首页*/
                    '我的资产首页数据' :src+'data/TEST/myAccunt.json',

                    /*实名认证*/

                    'test' : 'product/listAx',

                    /* 身份认证 */
                    '身份认证': '',

                    /* 安全认证 */
                    '安全认证数据':src+'data/TEST/testSecurity.json',
                    '安全认证实名认证表单提交': '',
                    '安全认证原始密码验证': ''
                };

                return portUrlMap[name];
            }
        })
/*接口对照表*/
 .filter('交互接口对照表', function() {
            return function(name) {
                var portUrlMap = {
                    '登录接口' : "/doLogin",
                    // '登录接口' : "http://192.168.0.72:7762",
                    '退出接口' : "/exit",

                    /*登录注册*/
                    '注册验证手机号':'/existMobilePhone',
                    '校验图片验证码':'/sendRegMsg',
                    '立即注册':'/reg',
                    '修改用户密码-手机验证':'/forgetPwdSmsCode',
                    '修改用户密码-提交手机验证':'/validateSmsCode',
                    '修改用户密码-提交密码':'/updatePwd',

                    /*首页Home*/
                    'Home主数据' : '/indexMemberInfo',
                    '产品列表' :'/indexProduct',
                    'banner':'/banner',
                    '公司新闻' : '/indexArticle',
                    '投资统计数据': '/regAndInvestCount',
                    '实时投资记录': '/indexInvestLogs',

                    /*票据优选*/
                    '票据优选列表' :'/productList',

                    /*票据安选*/
                    '票据列表' :'/productList',
                    // '十一月下旬票据列表': 'product/productList.do',

                    /*产品详情页*/
                    '票据详情' :'/detail',
                    '确认投资' :'/invest',
                    '投资记录' :'/depositsHistory',


                    /*我的资产首页*/
                    '我的资产首页数据' :'/accountIndex/info.do',
                    // '我的资产首页数据' :'http://192.168.0.72:7761',
                    '会员等级数据' : '/cmall/member/vip.do',
                    '我的投资' :'/investStat',
                    '我的投资-收益中的产品' :'/investCenter/productList.do',
                    '自动投标' :'/autoInvest/autoInvestConf.do',
                    'CP181十一月下旬活动投资数据': '/activity/getAnnualInvestSumByParam.do',
                    '修改自动投标配置' :'/autoInvest/updateAutoInvestConf.do',
                    // '我的投资-已到期产品' :'expireProductList',

                    '我的投资-资产记录' :'/assetRecord',
                    '公告' :'/accountIndex/urgentNotice.do',


                    /*实名认证*/
                    'test' : '/listAx',

                    /* 身份认证 */
                    '身份认证': '/bankInfoVerify',
                    '身份认证获取短信验证码': '/sendBankMsg',

                    /* 存管账户开户认证 */
                    // '存管账户开户认证': 'http://192.168.0.72:7760',
                    '存管账户开户认证': '/memberSetting/open.do',

                    /* 未升级存管用户已绑卡信息 */
                    // '未升级存管用户已绑卡信息': 'http://192.168.0.72:7771',
                    '未升级存管用户已绑卡信息': '/v2/member/old-info.do',

                    /* 安全认证 */
                    // '安全认证数据': 'memberSetting',
                    '安全认证数据': '/memberSetting/index.do',
                    '安全认证修改登录密码': '/updateLoginPassWord',

                    /* 设置交易密码 */
                    '设置交易密码': '/setTpwd',

                    /* 修改交易密码 */
                    '修改交易密码': '/updateTpwd',

                    /* 找回交易密码获取短信验证码 */
                    '找回交易密码获取短信验证码': '/sendForgetTpwdCode',

                    /* 找回交易密码验证短信验证码 */
                    '找回交易密码验证短信验证码': '/validateTpwdCode',

                    /* 找回交易密码设置新交易密码 */
                    '找回交易密码设置新交易密码': '/updateTpwdBySms',

                   /* 添加或者修改收货地址*/
                    "添加或者修改收货地址":'/memberSetting/updateMemberNowAddress.do',
                    /*获取收货地址*/
                    "获取收货地址":'/memberSetting/getMemberAddress',

                    /* 重置存管提现密码 */
                    // '重置存管提现密码': 'http://192.168.0.72:7770',
                    '重置存管提现密码': '/v2/member/change/carry-password.do',

                    /* 充值提现数据 */
                    '充值数据': '/recharge/index.do',
                    // '充值数据': 'http://192.168.0.72:7766',
                    '提现数据': '/withdrawals/index.do',
                    // '提现数据': 'http://192.168.0.72:7763',

                    /* 充值 */
                    '创建订单': '/createPayOrder',
                    // '充值': 'goPay',
                    // '网银充值': 'http://192.168.0.72:7767',
                    '网银充值': '/v2/crush/online-bank.do',
                    // '快捷充值': 'http://192.168.0.72:7768',
            /**********************存管上线后快捷充值优化 2017-07-24 Start *************************************/
                    // '快捷充值': '/v2/crush/speedy.do',
                    '快捷充值': '/v3/pc/crush/pay.do',
            /**********************存管上线后快捷充值优化 2017-07-24 Start *************************************/
                    // '充值结果': 'http://192.168.0.72:7769',
                    '充值结果': '/v2/crush/heartbeat.do',
            /**********************存管上线后快捷充值优化 2017-07-24 Start *************************************/
                    // '充值获取验证码': 'sendRechargeSms',
                    '快捷充值获取验证码': '/v3/pc/crush/send-sms.do',
            /**********************存管上线后快捷充值优化 2017-07-24 End   *************************************/
                    // '网银充值': 'goJYTWYPay',
                    '充值成功数据': '/rechargeSuccess',

                    /* 提现 */
                    '提现': '/v2/carry/carry.do',
                    // '提现': 'http://192.168.0.72:7764',

                    /* 提现结果 */
                    // '提现结果': 'http://192.168.0.72:7765',
                    '提现结果': '/v2/carry/heartbeat.do',

                    /* 我的消息 */
                    '我的消息': '/myMessage',
                    '消息列表': '/getMessage',
                    '标记消息为已读': '/updateUnReadMsg',
                    
                    /*我的任务*/
                    '我的任务' :'/cmall/member/task-list-pc.do',
                    /* 个人中心 */
                    '个人中心': '/personInfo',

                    /* 优惠券 */
                    '用户可用优惠券': '/usable',
                    '我的优惠券': '/activity',

                   /* 首月返现好友 */
                    '首月返现好友': 'activity/myRecommend.do',
                    /*我的好友*/
                    '我的好友': 'activity/v1/myRecommend.do',
                    /*我的待收等级*/
                    '我的待收等级':'/recommend/getDrRecommendConfig.do',
                    /*每月任务*/
                    '每月任务':"/recommend/getDrRecommendTask.do",
                    /*我的佣金*/
                    '我的佣金':'/recommend/getDrRecommendOrder.do',
                    /* 新闻列表 */
                    '新闻列表': '/newsInformationList',
                    '新闻详情': '/newsDetails',

                    /* 权益转让及受让协议 */
                    '权益转让及受让协议': '/agreement',
                    /* 借款协议 */
                    '借款协议': '/borrow',
                    /* 债权转让协议 */
                    '债权转让协议': '/transfer',
                    /* 应收账款收益权转让及回购协议 */
                    "baoli" : '/borrow',

                    /* 520活动 */
                    '领券信息': '/isParticipationActivity',

                    /* 端午节活动 */
                    '端午节投资数据': '/getDwData',
                    '端午节抽奖': '/getLotteryGift',
                    /* cp079  */
                    'cp079获取投资数据': '/activity/getInvestTopData.do',
                    'cp183双十二获取抽奖次数': '/activity/queryCountFor12.do',
                    'cp183双十二获取抽奖': '/activity/getLotteryGift12.do',
                    'cp183双十二获取抽奖记录': '/activity/queryLotteryLogFor12.do',

                    /* 七夕节活动 */
                    // '七夕中奖名单': 'indexQX',
                    // '七夕我的奖品': 'lotteryList',
                    // '七夕抽奖': 'lotteryQX',

                    /* 国庆活动 */
                    // '国庆活动数据': 'activity/indexGQ.do',
                    // '国庆活动-投资抽字': 'activity/getLotteryGift.do',


                    '好友互推列表': '/recommend/myFriendInvest.do',
                    '获取抽奖次数': '/activity/queryCountFor12.do',
                    '抽奖': '/activity/getLotteryGift12.do',
                    '抽奖记录': '/activity/queryLotteryLogFor12.do',

                    '客服咨询': '/index/customerInquiry.do',
                    // '新手体验标-判断是否可投': 'activity/operation/is-have-chance.do',
                    // '新手体验标-投资': 'activity/operation/send-award.do',
                    '新手灵活宝': '/v1/current/product/info.do',
                    '新手灵活宝-投资记录': '/v1/current/purchase-Record.do',
                    '新手灵活宝-确认投资': '/v1/current/purchase.do',
                    '新手灵活宝-赎回': '/v1/current/redeem.do',
                    '新手灵活宝-账户首页': '/v1/current/user/info.do',
                    
                    'end' : 'end',

                    //积分商城
                    '积分商城 + 个人积分' : '/cmall/member/account.do',
                    '积分商城 - 兑换' : '/cmall/member/product-exchange.do',
                    '积分商城 - 兑换记录' : '/cmall/member/exchange-log.do',
                    '积分商城 - 积分明细' : '/cmall/member/points-log.do'
                    /*'积分商城 + 个人积分' : 'http://127.0.0.1:7730',
                    '积分商城 - 兑换' : 'http://127.0.0.1:7731',
                    '积分商城 - 兑换记录' : 'http://127.0.0.1:7732',
                    '积分商城 - 积分明细' : 'http://127.0.0.1:7733'*/
                };

                return portUrlMap[name];
            }
        })

/*静态json*/
 .filter('静态接口对照表', function() {

            return function(name) {
                var portUrlMap = {
                    '弹出框模板' : "/main/js/ng/dialog/msgGoLogin.html",
                    'end' : 'end'
                };

                return portUrlMap[name];
            }
        })

