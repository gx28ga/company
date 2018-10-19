
/* si 提现 */
mainModule.controller('withdrawCtrl', ['$rootScope','$scope','$filter','resourceService','ngDialog','$localStorage', '$state', 'myAccountDataService' ,function($rootScope,$scope,$filter,resourceService,ngDialog,$localStorage, $state, myAccountDataService) {
    if (!$localStorage.hasOwnProperty('uid')) {
        $state.go('dl');
        return false;
    }
    /*if ($localStorage.isRas == false) {
        if ($localStorage.accuntHome.bankVerify <= 0) {
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
        $state.go('main.myAccount.accountHome');
        return false;
    }*/
    if ($localStorage.isRas == false) {
        $state.go('main.myAccount.accountHome');
        if ($localStorage.accuntHome.bankVerify <= 0) {
            setTimeout(function(){$rootScope.$broadcast('NEED_SHOW_UPGRADE_ESCROW_ACCOUNT_DIALOG');}, 300);
        }
        return false;
    }
	$localStorage.dialogType = '提现';
	$rootScope.title = '提现-多融财富';
	$rootScope.activeNav = 'account';
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type) {
			
			case "提现数据":
				if (data.success) {
					$scope.user = data.map;
					if (data.map.isChargeFlag) {
						// $scope.user.cost = 2;
                        $scope.user.cost = 3;
					} else {
						$scope.user.cost = 0;
					}
				} else {
					var errorMsg = $filter('提现数据error信息')(data.errorCode);
					$.qTip({
						'type': false,
						'text': errorMsg
					});
				}
				break;
		}
	});

	// onblur将金额保留两位小数
	$scope.setAmount = function(event) {
		$scope.user.cash=$filter('isNumber2')($scope.user.cash,undefined,1);
	};

	// 未绑定银行卡时--去安全认证页面绑定
	$scope.bindBank = function() {
		// $scope.$broadcast('myEvent.WHDR_Ctrl','账户管理');
		$filter('跳转页面')('','main.myAccount.withdraw','main.myAccount.security','bindBank',null,{name:'账户管理',url:'main.myAccount.security'});
	};

	// 未设置交易密码时--去安全认证页面设置
	$scope.setTradeCode = function() {
		$filter('跳转页面')('','main.myAccount.withdraw','main.myAccount.security','setTradeCode',null,{name:'账户管理',url:'main.myAccount.security'});
	};

	// 忘记交易密码--去安全认证页面找回
	$scope.forgetTradeCode = function() {
		// $rootScope.$emit('myEvent.WHDR_Ctrl','账户管理');
		ngDialog.closeAll();
		$filter('跳转页面')('','main.myAccount.withdraw','main.myAccount.security','forgetTradeCode',null,{name:'账户管理',url:'main.myAccount.security'});
	};

	// 提交表单
	$scope.submitForm = function(valid) {
		if (!valid || $scope.isSubmit) {
			return;
		}
		$scope.isSubmit = true;
		$.ajax({
		    url: $filter('交互接口对照表')('提现'),
            dataType: 'json',
            method: 'post',
            beforeSend: function(request) {
                request.setRequestHeader("Content-Type", "application/json;charset=UTF8");
                request.setRequestHeader("Accept", "application/json, text/plain, */*");
            },
            data: JSON.stringify({amount: $scope.user.cash}),
            async: false,
            success: function (data) {
                if (data.success) {
                    var $hiddenForm = $('#hiddenFormWithdraw')[0];
                    $('.mchnt_cd',$hiddenForm).val(data.map.requestData.mchnt_cd);
                    $('.mchnt_txn_ssn',$hiddenForm).val(data.map.requestData.mchnt_txn_ssn);
                    $('.login_id',$hiddenForm).val(data.map.requestData.login_id);
                    $('.amt',$hiddenForm).val(data.map.requestData.amt);
                    $('.page_notify_url',$hiddenForm).val(data.map.requestData.page_notify_url);
                    // $('.back_notify_url',$hiddenForm).val(data.map.requestData.back_notify_url);
                    $('.signature',$hiddenForm).val(data.map.requestData.signature);
                    $hiddenForm.action = data.map.requestUrl;
                    $hiddenForm.method = 'POST';
                    $hiddenForm.submit();
                    var result = {
                        success: false,
                        waiting: true,
                        title: '处理中',
                        detail: '请稍等...',
                        mainBtnName: '关 闭',
                        onMainBtnClick : function () {
                            //do nothing
                            location.reload();
                        },
                        onClose : function () {
                            //do nothing
                            location.reload();
                        }
                    }
                    $scope.result = result;
                    $filter('存管账户操作结果弹窗')($scope);
                    var doChk = setInterval(function() {
                        var params = {serialNumber: data.map.requestData.mchnt_txn_ssn};
                        myAccountDataService.getWithdrawResult(params).then(function (result) {
                            if (!result.success) {
                                ngDialog.closeAll(false);
                                clearInterval(doChk);
                                var reason = '系统异常，请联系客服。';
                                if (result.hasOwnProperty('errorMsg')){
                                    reason = result.errorMsg;
                                }
                                var result = {
                                    success: false,
                                    title: '提现失败',
                                    detail: '失败原因： ' + reason,
                                    mainBtnName: '确 定',
                                    onMainBtnClick : function () {
                                        //do nothing
                                        location.reload();
                                    },
                                    onClose : function () {
                                        //do nothing
                                        location.reload();
                                    }
                                }
                                $scope.result = result;
                                $filter('存管账户操作结果弹窗')($scope);
                            } else {
                                if (!result.map.finished) {
                                    return false;
                                }
                                clearInterval(doChk);
                                ngDialog.closeAll(false);
                                var params = {
                                    success: true,
                                    withdrawAmt: result.map.amount,
                                    receivedAmt: result.map.lastAmount,
                                    onMainBtnClick : function () {
                                        //do nothing
                                        $state.go('main.myAccount.accountHome');
                                    },
                                    onClose : function () {
                                        //do nothing
                                        $state.go('main.myAccount.accountHome');
                                    }
                                }
                                $scope.result = params;
                                $filter('存管账户提现结果弹窗')($scope);
                            }
                        }, function (err) {

                        });
                    }, 2000);
                } else {
                    var reason = '请联系客服。';
                    if (data.hasOwnProperty('errorMsg')) {
                        reason = data.errorMsg;
                    }
                    var result = {
                        success: false,
                        title: '提现失败',
                        detail: '失败原因：' + reason,
                        mainBtnName: '关 闭',
                        onMainBtnClick : function () {
                            location.reload();
                        },
                        onClose : function () {
                            location.reload();
                        }
                    }
                    $scope.result = result;
                    $filter('存管账户操作结果弹窗')($scope);
                }
            },
            error: function () {

            }
        });
	};
	$('#qx').click(function(){
		$('#noCityId').hide();
	})
	$('#ws').click(function(){
		$filter('跳转页面')('','main.myAccount.withdraw','main.myAccount.security','bindBank',null,{name:'账户管理',url:'main.myAccount.security'});
	})
	resourceService.queryPost($scope, $filter('交互接口对照表')('提现数据'),{},'提现数据');

}]);