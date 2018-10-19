/*lee 我的账户*/
mainModule.controller('AccountaccountHomeCtrl', ['$timeout','$rootScope','$scope', '$state', '$localStorage', 'resourceService','$filter','ngDialog', 'myAccountDataService', function($timeout,$rootScope,$scope, $state, $localStorage,resourceService,$filter,ngDialog, myAccountDataService) {
	$scope.vip = false;
    $scope.isCanBillNew = false;
	$filter('isLogin')($scope);
	if (!$filter('isRegister')().register ) {
		$state.go('dl');
		return;
	}
	$scope.user={};
	$scope.user.product = [];
	$rootScope.title='我的账户-多融财富';
	$rootScope.activeNav = 'account';
    $scope.zhaunchusuccess = true;
    $scope.isShowRisk=false;//风险测评弹框
	$localStorage.activeText = {name:'我的账户',url:'main.main.myAccount.accountHome'};
	$rootScope.$broadcast('myEvent.WHDR_Ctrl',{"name":"我的账户","url":"main.myAccount.accountHome"});

	////////////////////对应升级存管账户 Start/////////////////////////
    $scope.isRas = $localStorage.isRas;
    ////////////////////对应升级存管账户 End  /////////////////////////
    ////////////////////对应升级存管账户 Start/////////////////////////
    $scope.$on('NEED_SHOW_UPGRADE_ESCROW_ACCOUNT_DIALOG', function () {
        $scope.onClickRecharge();
    });
    ////////////////////对应升级存管账户 End  /////////////////////////

	$.tips({
		scope : $scope,
		left : -30,
		top: 10,
		element : '.account-home-wrap'
	});
	//页面加载后显示一下用户当前经验值tip
	setTimeout(function() {
         function getElementLeft(element) {
            var actualLeft = element.offsetLeft;
            var current = element.offsetParent;

            while (current !== null) {
                actualLeft += current.offsetLeft;
                current = current.offsetParent;
            }

            return actualLeft + 60;
        }

        function getElementTop(element) {
            var actualTop = element.offsetTop;
            var current = element.offsetParent;

            while (current !== null) {
                actualTop += current.offsetTop;
                current = current.offsetParent;
            }

            return actualTop + 18;
        }
        var tipOwner = document.getElementsByClassName('progress-current')[0];
        var tipCtrl = document.getElementById('current-experience');
        if (tipCtrl && tipCtrl.style.display != 'block') {
            tipCtrl.style.display = 'block';
            tipCtrl.style.opacity = "1";
            tipCtrl.style.top = getElementTop(tipOwner) + 'px';
            tipCtrl.style.left = getElementLeft(tipOwner) + 'px';
            setTimeout(function () {
                if (tipCtrl && tipCtrl.style.display == 'block') {
                    tipCtrl.style.display = 'none';
                    tipCtrl.style.opacity = "0";
                }
            }, 5000);
        }
     }, 1000);

	$scope.showUserExperience = function (evt) {
        var tipCtrl = document.getElementById('current-experience');
        tipCtrl.style.display = 'block';
        tipCtrl.style.opacity = "1";
        tipCtrl.style.top = evt.clientY + 'px';
        tipCtrl.style.left = evt.clientX + 'px';
        setTimeout(function () {
            if (tipCtrl.style.display == 'block') {
                tipCtrl.style.display += 'none';
                tipCtrl.style.opacity = "0";
            }
        }, 2000);
    };
	//显示vip
	$scope.goto =function( item ){ //产品推荐
		if(item.type!=5){
	        $state.go('main.billDetail',{ id: item.id });
	    }
	}
    $scope.zctan = false;
	$scope.onClick = function(type,item){
		switch(type) {
            case "sureOut":
                resourceService.queryPost($scope, $filter('交互接口对照表')('新手灵活宝-赎回'),{
                    password:$scope.user.jymm,
                },'新手灵活宝-赎回');
            break;
            case "iknow":
                $('.hqBillTan2').animate({'left':'-500px'},1000);
                $timeout(function(){
                    $('.hqBillTan2').css({'display': 'none'});
                    $scope.zctan = false;
                    $scope.user.jymm = '';
                },1000)
            break;
            case "close":
                $('.hqBillTan').animate({'left':'-500px'},1000);
                $('.hqBillTan2').animate({'left':'-500px'},1000);
                $timeout(function(){
                    $scope.zctan = false;
                    $scope.user.jymm = '';
                },1000)
			break;
            case "forgetWord":
                $scope.zctan = false;
                $filter('跳转页面')('','main.myAccount.withdraw','main.myAccount.security','forgetTradeCode',null,{name:'账户管理',url:'main.myAccount.security'});
            break;
            case "转出":
                $scope.zctan = true;
		    break;
        }
	};

	$scope.onClickRecharge = function () {
        if ($localStorage.isRas == true) {
            $state.go('main.myAccount.recharge');
        } else {
            var forwarder = {
                onAbout : function () {
                    // $state.go('activitys.huaruiBank');
                    window.open('/activitys/huaruiBank', '_blank');
                },
                onActivate : function () {
                    $state.go('main.createEscrowAccount');
                }
            };
            $scope.forwarder = forwarder;
            $filter('存管账户升级提示弹窗')($scope);
        }
    };

    $scope.onClickWithdraw = function () {
        if ($localStorage.isRas == true) {
            $state.go('main.myAccount.Withdraw');
        } else {
            var forwarder = {
                onAbout : function () {
                    // $state.go('activitys.huaruiBank');
                    window.open('/activitys/huaruiBank', '_blank');
                },
                onActivate : function () {
                    $state.go('main.createEscrowAccount');
                }
            };
            $scope.forwarder = forwarder;
            $filter('存管账户升级提示弹窗')($scope);
        }
    };
 

    //风险测评弹框类型显示判断
    $scope.showRiskEvaluation=function(){
         //风险测评偏好start
   
                if(angular.isObject($scope.accuntHome)){
                     $scope.rrr= $scope.accuntHome.isRisk;
                      if($scope.rrr == 1){
                     $scope.isShowRisk=true;
                    $scope.riskEvaluationType='保守型';
                }else if($scope.rrr ==2){
                    $scope.isShowRisk=true;
                    $scope.riskEvaluationType='积极型';
                }else if($scope.rrr == 3){
                    $scope.isShowRisk=true;
                    $scope.riskEvaluationType='稳健型';
                     }
                }
                //风险测评偏好end
    }
    $scope.closeRiskEvaluation=function(){
        $scope.isShowRisk=false;
    }
    //风险测评弹框类型显示判断
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type){
            case '新手灵活宝-赎回':
                if(data.success) {
                    $scope.zhaunchusuccess = true;
                    $('.hqBillTan').animate({'left':'-500px'},1000);
                    $timeout(function(){
                        $('.hqBillTan').css({'display': 'none'});
                        $('.hqBillTan2').css({'display': 'block'})
                    },1000)
                    $scope.currentInfo.redeemStatus = 1;
                    $scope.currentInfo.predictTime = data.map.date.date;//1502263336196
                }else{
                    $scope.zhaunchusuccess = false;
                    $('.hqBillTan').animate({'left':'-500px'},1000);
                    $timeout(function(){
                        $('.hqBillTan').css({'display': 'none'});
                        $('.hqBillTan2').css({'display': 'block'})
                    },1000)
                    $scope.error = data.errorMsg;
                }
            break;
            case '新手灵活宝-账户首页':
                if(data.success) {
                    $scope.currentInfo = data.map.current;
                }
            break;
			case '用户信息':
				if (data.success) {
					$localStorage.user = data.map;
                    /* ####################积分商城变更点################### Start */
                    // 取得用户积分信息
                    var url = $filter('交互接口对照表')('积分商城 + 个人积分') + '?uid=' + $localStorage.uid;
                    resourceService.getJsonServer($scope, url, {}, '积分商城信息');
                    /* ####################积分商城变更点################### End */
                    //获取会员等级数据
                    myAccountDataService.getVipMapData().then(function (resp) {
                        //设置vip经验值
                        $scope.lastExpVal = $scope.nextExpVal = $scope.currentVipVal = -1;
                        $scope.currentExpVal = 0;
                        /*if (resp.hasOwnProperty('result') && resp.result.hasOwnProperty('experiencePoints')) {
                            var mapArr = resp.result.vipConfigVOList;
                            var myExpVal = $scope.currentExpVal = resp.result.experiencePoints;
                            for (var i = 0; i < mapArr.length; i++) {
                                if (mapArr[i].experienceMin > myExpVal) {
                                    $scope.lastExpVal = i === 0 ? 0 : mapArr[i - 1].experienceMin;
                                    $scope.nextExpVal = mapArr[i].experienceMin;
                                    $scope.lastVipVal = i === 0 ? 0 : mapArr[i - 1].viplevel;
                                    $scope.lastVipName = i === 0 ? '' : mapArr[i - 1].vipName;
                                    $scope.currentVipVal = $scope.lastVipVal;
                                    $scope.nextVipVal = mapArr[i].viplevel;
                                    $scope.nextVipName = mapArr[i].vipName;
                                    break;
                                }
                            }
                            if ($scope.lastVipVal === -1) {
                                var lastIndex = mapArr.length - 1;
                                $scope.lastExpVal = mapArr[lastIndex].experienceMin;
                                $scope.lastVipVal = mapArr[lastIndex].viplevel;
                                $scope.lastVipName = mapArr[lastIndex].vipName;
                                $scope.currentVipVal = $scope.lastVipVal;
                            }
                        }*/
                        if (resp.hasOwnProperty('result') && resp.result.hasOwnProperty('experiencePoints')) {
                            var mapArr = resp.result.vipConfigVOList;
                            $scope.currentExpVal = resp.result.experiencePoints;
                            var myVipVal = $scope.currentVipVal = resp.result.viplevel;
                            if (myVipVal < mapArr[0].viplevel) {
                            	$scope.lastExpVal = 0;
                            	$scope.lastVipName = '';
                            	$scope.nextExpVal = mapArr[0].experienceMin;
                            	$scope.nextVipName = mapArr[0].vipName;
							} else {
                                for (var i = 0; i < mapArr.length; i++) {
                                    if (mapArr[i].viplevel == myVipVal) {
                                    	if (mapArr.length ==  i + 1) {
                                    		$scope.lastExpVal = mapArr[i].experienceMin;
                                    		$scope.lastVipName = mapArr[i].vipName;
										} else {
                                            $scope.lastExpVal = mapArr[i].experienceMin;
                                            $scope.lastVipName = mapArr[i].vipName;
                                            // $scope.nextExpVal = mapArr[i + 1].experienceMin;
                                            $scope.nextExpVal = mapArr[i].experienceMax;
                                            $scope.nextVipName = mapArr[i + 1].vipName;
										}
                                        break;
                                    }
                                }
							}
                        }
                        //设置经验进度条
                        var pcnt = '0';
                        if ($scope.nextExpVal > 0 && $scope.currentExpVal >= $scope.nextExpVal || $scope.nextExpVal < 0 && $scope.currentExpVal >= $scope.lastExpVal) {
                            pcnt = '100%';
                        } else if ($scope.currentExpVal <= $scope.lastExpVal) {
                        	//do nothing
						} else {
                            pcnt = ($scope.currentExpVal - $scope.lastExpVal) * 100 / ($scope.nextExpVal - $scope.lastExpVal);
                            pcnt += '%';
						}
                        document.getElementsByClassName('progress-current')[0].style.width = pcnt;
                    }, function (err) {

                    });
				}
				break;
			case "资产首页":
				// $rootScope.accuntHome =$localStorage.accuntHome =$scope.accuntHome = data.map;
				$localStorage.accuntHome = $scope.accuntHome = data.map;
				$scope.investList = data.map.investList;
				$scope.infoList = data.map.infoList;
				$scope.fundsRecord = data.map.fundsRecord;
                   //积分显示
                if(angular.isObject($scope.accuntHome)){     
                     $scope.rrr= $scope.accuntHome.isRisk;
                      if($scope.rrr == 1){
                    $scope.riskEvaluationType='保守型';
                }else if($scope.rrr ==2){
                    $scope.riskEvaluationType='积极型';
                }else if($scope.rrr == 3){
                    $scope.riskEvaluationType='稳健型';
                     }
                }
                //积分显示
               

				if($scope.accuntHome.bankVerify==1){
					resourceService.queryPost($scope,$filter('交互接口对照表')('公告'),{
						proId:18
					},'公告');
				}else if($scope.accuntHome.bankVerify==0){
					resourceService.queryPost($scope,$filter('交互接口对照表')('公告'),{
						proId:17
					},'公告');
				}
				if($localStorage.isRas == false && $scope.accuntHome.bankVerify > 0) {
					var forwarder = {
						onAbout : function () {
							// $state.go('activitys.huaruiBank');
                            window.open('/activitys/huaruiBank', '_blank');
                        },
                        onActivate : function () {
							$state.go('main.createEscrowAccount');
                        }
					};
					$scope.forwarder = forwarder;
					$filter('存管账户升级提示弹窗')($scope);
				}
				//////////////////////////////PC前端优化需求 - 投资中的产品去除‘已到期’产品 Start /////////////////////////////////////
                $scope.myInvesting = [];
				for (var i = 0; i < $scope.investList.length; i++) {
				    if ($scope.myInvesting.length >= 4) break;
				    if ($scope.investList[i].status != 3) {
				        $scope.myInvesting.push($scope.investList[i]);
                    }
                }
                //////////////////////////////PC前端优化需求 - 投资中的产品去除‘已到期’产品 Start /////////////////////////////////////
			break;
			case "我的账户新手":
				$localStorage.product=$scope.newhand = data.map.newhand;
			break;
			case "公告":
				if(data.success){
					if(data.map.notice!=undefined){
						$scope.GGContents = data.map.notice.summaryContents;
					}
				}
			break;
		};
	});


	//监听取得用户积分
    $scope.$on('resourceService_GET_JSON.MYEVENT', function(event,data,type) {
        switch (type) {
            case '积分商城信息':
                if (data.success) {
                    $scope.user.pointValue = data.map.result.points;
                    /*if (!$localStorage.hasOwnProperty('pointMallInfo')) {
                        $localStorage.pointMallInfo = [];
                    }
                    $localStorage.pointMallInfo[$localStorage.uid] = data;*/
                }
            break;
        }
    });
	resourceService.queryPost($scope,$filter('交互接口对照表')('产品列表'),{},'我的账户新手');
    resourceService.queryPost($scope, $filter('交互接口对照表')('我的资产首页数据'),{},'资产首页');
    resourceService.queryPost($scope, $filter('交互接口对照表')('新手灵活宝-账户首页'),{},'新手灵活宝-账户首页');
	// 用户信息
	if($localStorage.user != undefined){
		resourceService.queryPost($scope,$filter('交互接口对照表')('Home主数据'),{},'用户信息');
	}
}])
