
/* si 充值 */
mainModule.controller('rechargeCtrl', ['$rootScope','$scope','$filter','resourceService','ngDialog','$localStorage','$interval','$http', '$state', 'myAccountDataService', function($rootScope,$scope,$filter,resourceService,ngDialog,$localStorage,$interval,$http, $state, myAccountDataService) {
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
	$scope.isSubmit = false;
	$scope.user = {};
    /**********************存管上线后快捷充值优化 2017-07-21 Start *************************************/
    $scope.userbank = {};
    /**********************存管上线后快捷充值优化 2017-07-21 End   *************************************/
    /////////////升级存管账户删除 Start///////////////
	/*$scope.code = {};
	$scope.code.getCodeText = '点击获取验证码';*/
    /////////////升级存管账户删除 End  ///////////////
	$localStorage.dialogType = '充值';
	$rootScope.title = '充值-多融财富';
    $scope.payMethod = 0;
    $scope.rechargemore = 3;
    /////////////升级存管账户删除 Start///////////////
	/*$scope.tab = 1;
	$scope.online = {};
	$hiddenForm = $('#hiddenForm')[0];
	$rootScope.activeNav = 'account';

	// $scope.showAmount = true;
	$scope.orderSubmit = false;

	$scope.rechargemore = 3;

	$scope.pay = {
		payNum: ''
	};*/
	 /////////////升级存管账户删除 End  ///////////////

	var $amount = $('#amount');
    /////////////升级存管账户删除 Start///////////////
	/*$scope.tabRecharge = function(step) {
		if (!$filter('isRegister')().register) {
			return;
		}
		if(step == 1) {
			$scope.showAmount = true;
			$scope.orderSubmit = false;
		} else if (step == 2) {
			if ($('#amount').val() == '' || $('#amount').val() == undefined || $scope.amountIsTrue == false) {
				$('#amount').focus();
				if ($scope.amountIsTrue == true) {
					$scope.amountError = true;
				}
				// return;
			} else {
				if ($scope.orderSubmit == false) {
					$scope.orderSubmit = true;
					// resourceService.queryPost($scope, $filter('交互接口对照表')('创建订单'),{
					// 	amount: $scope.user.amount
					// },'创建订单');
					$scope.showAmount = false;
					// $scope.pay.payNum = data.map.payNum;
					$scope.orderSubmit = false;
				}
				// $scope.showAmount = false;
			}
		}
	};
	$scope.user.realFlag = true;*/
    /////////////升级存管账户删除 End  ///////////////

	// $scope.rechargemore = 1;
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type) {

			case "充值数据":
				if (data.success) {
					$scope.user = data.map;
                    /////////////升级存管账户 Start///////////////
					$scope.user.realFlag = true;
                    /////////////升级存管账户 End  ///////////////
					// $scope.quota = $scope.user.quota;
                    /////////////升级存管账户删除 Start///////////////
					/*$scope.quota = 5000000;
					if ($scope.user.bankCode == 6) {
						$scope.rechargemore = 3;
						$scope.changeTab(1);
					}
					if (data.map.realFlag) {
						$scope.bankCode = data.map.bankList[0].bankCode;
					}*/
                    /////////////升级存管账户删除 End  ///////////////
				} else {
					var errorMsg = $filter('充值数据error信息')(data.errorCode);
					$.qTip({
						'type': false,
						'text': errorMsg
					});
				}
				break;
            /**********************存管上线后快捷充值优化 2017-07-21 Start *************************************/
			case "提现数据":
				if (data.success) {
					$scope.userbank.banknoLast = data.map.bankNum;
					$scope.userbank.logoUrl = data.map.bankUrl;
				}
				break;
            /**********************存管上线后快捷充值优化 2017-07-21 End   *************************************/

				case "资产首页":
					$scope.accuntHome = data.map;
					if($scope.accuntHome.bankVerify==1){
						resourceService.queryPost($scope,$filter('交互接口对照表')('公告'),{
							proId:18
						},'公告');
					}else if($scope.accuntHome.bankVerify==0){
						resourceService.queryPost($scope,$filter('交互接口对照表')('公告'),{
							proId:17
						},'公告');
					}
					$scope.investList = data.map.investList;
					$scope.infoList = data.map.infoList;
					$scope.fundsRecord = data.map.fundsRecord;
                    /**********************存管上线后快捷充值优化 2017-07-24 Start *************************************/
                    $scope.mobilePhone = data.map.bankPhone;
                    /**********************存管上线后快捷充值优化 2017-07-24 End   *************************************/
				break;
				case "公告":
					$scope.GGContents = data.map.notice.summaryContents;
				break;
			// case "创建订单":
			// 	if (data.success) {
			// 		$scope.showAmount = false;
			// 		$scope.pay.payNum = data.map.payNum;
			// 		$scope.orderSubmit = false;
			// 	} else {
			// 		var errorMsg = $filter('创建订单error信息')(data.errorCode);
			// 		$.qTip({
			// 			'type': false,
			// 			'text': errorMsg
			// 		});
			// 		$scope.orderSubmit = false;
			// 	}
			// 	break;
			// case "充值获取验证码":
			// 	if (data.success) {
			// 		$.qTip({
			// 			'type': true,
			// 			'text': '短信发送成功'
			// 		});
			// 	} else {
			// 		var errorMsg = $filter('充值获取验证码error信息')(data.errorCode);
			// 		$.qTip({
			// 			'type': false,
			// 			'text': errorMsg
			// 		});
			// 	}
			// 	break;

            /////////////升级存管账户删除 Start///////////////
			/*case "充值":
				if (data.map != undefined && data.map.src != undefined) {
					$scope.gift = true;
				} else {
					$scope.gift = false;
				}
				if (data.success) {
					$localStorage.dialogStatus = 'success';
					$scope.rechargeSuccess = true;
					$localStorage.dialogMsg = '您已成功充值'+ $filter('currency')($scope.user.amount,'') +'元';
				} else {
					$scope.recharge = {};
					$scope.recharge.errorCode = data.errorCode;
					$localStorage.dialogMsg = $filter('充值error信息')(data.errorCode);
					if ($localStorage.dialogMsg == '处理中') {
						$localStorage.dialogStatus = 'ing';
						$localStorage.dialogMsg = '请稍后查询处理结果';
					} else {
						$localStorage.dialogStatus = 'error';
					}
				}
				if ($scope.gift == true && $scope.rechargeSuccess == true) {
					$scope.giftFlag = true;
				} else {
					$scope.giftFlag = false;
				}
				$filter('充值提现弹窗')($scope);
				// $scope.isSubmit = false;
				break;

			case "网银充值":
				if (data.success) {
					$scope.online = data.map;
					$('.tranCode',$hiddenForm).val(data.map.tranCode);
					$('.version',$hiddenForm).val(data.map.version);
					$('.charset',$hiddenForm).val(data.map.charset);
					$('.uaType',$hiddenForm).val(data.map.uaType);
					$('.merchantId',$hiddenForm).val(data.map.merchantId);
					$('.merOrderId',$hiddenForm).val(data.map.merOrderId);
					$('.merTranTime',$hiddenForm).val(data.map.merTranTime);
					$('.merUserId',$hiddenForm).val(data.map.merUserId);
					$('.orderDesc',$hiddenForm).val(data.map.orderDesc);
					$('.prodInfo',$hiddenForm).val(data.map.prodInfo);
					$('.tranAmt',$hiddenForm).val(data.map.tranAmt);
					$('.curType',$hiddenForm).val(data.map.curType);
					$('.payMode',$hiddenForm).val(data.map.payMode);
					$('.bankCode',$hiddenForm).val(data.map.bankCode);
					$('.bankCardType',$hiddenForm).val(data.map.bankCardType);
					$('.notifyUrl',$hiddenForm).val(data.map.notifyUrl);
					$('.backUrl',$hiddenForm).val(data.map.backUrl);
					$('.signType',$hiddenForm).val(data.map.signType);
					$('.sign',$hiddenForm).val(data.map.sign);
					$hiddenForm.action = data.map.url;
					// var data = new FormData($hiddenForm);

					// $.ajax({
					// 	url: data.map.url,
					// 	type: 'post',
					// 	data: $('#hiddenForm').serialize(),
					// 	success: function (data) {
					// 	}
					// });
					// window.open(data.map.url + '?' + $('#hiddenForm').serialize(),"_blank");
					 // var mya = $('<a href="'+ data.map.url + '?' + $('#hiddenForm').serialize() +'" target="_blank">test</a>').get(0);
					 // var mye = document.createEvent('MouseEvents');
					 // mye.initEvent('click', true, true);
					 // mya.dispatchEvent(mye);
					// $('#prevent').attr('href', data.map.url + '?' + $('#hiddenForm').serialize());
					// // var $prevent = $('<a id="prevent" style="display: none;" href="'+ data.map.url + '?' + $('#hiddenForm').serialize() +'" target="_blank"></a>').appendTo('body');
					// document.getElementById("prevent").click();
					// $filter('充值弹窗')($scope);
					// // $('#prevent').remove();

					$hiddenForm.submit();
					$filter('充值弹窗')($scope);
				} else {
					$localStorage.dialogMsg = $filter('网银充值error信息')(data.errorCode);
					$localStorage.dialogStatus = 'error';
					$filter('充值提现弹窗')($scope);
				}
				// $scope.isSubmit = false;
				break;*/
            /////////////升级存管账户删除 End  ///////////////
		}
	});

	$scope.inputting = false;
	var inputTimer;
	$('.amount').on('keyup change', function() {
		clearTimeout(inputTimer);
		inputTimer = setTimeout(function () {
			$(".amount").blur();
        }, 1000);
		$scope.$apply(function() {
			if ($scope.user.amount == '' || $scope.user.amount == undefined) {
				$scope.amountIsTrue = true;
			} else {
                var obj = $filter('rechargeLimit')($scope.user.amount,$scope.rechargemore,$scope.user.quota);
                /*if (obj.typemin == false || obj.typemax == false || $scope.user.amount < 3) {*/
                if (($scope.payMethod == 0 && (obj.typemin == false || obj.typemax == false)) || $scope.user.amount < 3) {
                    $scope.amountIsTrue = false;
                } else {
                    $scope.amountIsTrue = true;
				}
			}
		});
        $scope.amountIsTrue = false;
	});

	// onblur将金额保留两位小数
	$scope.setAmount = function() {
		$scope.user.amount = $filter('isNumber2')($scope.user.amount,undefined,1);
		if ($scope.user.amount < $scope.rechargemore) {
			$scope.amountIsTrue = false;
			// $scope.typemin = false;
            $scope.amountMsg = '充值金额至少为' + $scope.rechargemore + '元';
            return false;
        }
		// var obj = $filter('rechargeLimit')($scope.user.amount,$scope.rechargemore,$scope.quota);
        var obj = $filter('rechargeLimit')($scope.user.amount,$scope.rechargemore,$scope.user.quota);
		// obj.typemax = true;
		/*if (obj.typemin == false || obj.typemax == false) {*/
        if ($scope.payMethod == 0 && (obj.typemin == false || obj.typemax == false)) {
			$scope.amountIsTrue = false;
			if (obj.typemin == false) {
				$scope.typemin = false;
				$scope.amountMsg = '充值金额至少为' + $scope.rechargemore + '元';
			}
			if (obj.typemax == false) {
				$scope.typemax = false;
				// $scope.amountMsg = '单笔限额' + $filter('number')($scope.quota) + '元';
                $scope.amountMsg = '单笔限额' + $filter('number')($scope.user.quota) + '元';
			}
		} else {
			$scope.amountIsTrue = true;
			$scope.typemin = true;
			$scope.typemax = true;
			$scope.amountMsg = '';
		}
	};

    /////////////升级存管账户删除 Start///////////////
	// 未绑定银行卡时--去安全认证页面绑定
	/*$scope.bindBank = function() {
		$filter('跳转页面')('','main.myAccount.recharge','main.myAccount.security','setTruename',null,{name:'账户管理',url:'main.myAccount.security'});
	};

	// 未设置交易密码时--去安全认证页面设置
	$scope.setTradeCode = function() {
		$filter('跳转页面')('','main.myAccount.recharge','main.myAccount.security','setTradeCode',null,{name:'账户管理',url:'main.myAccount.security'});
	};

	// 忘记交易密码--去安全认证页面找回
	$scope.forgetTradeCode = function() {
		$filter('跳转页面')('','main.myAccount.recharge','main.myAccount.security','forgetTradeCode',null,{name:'账户管理',url:'main.myAccount.security'});
	};

	$scope.setAmountError = function() {
		$scope.amountError = false;
	};*/
    /////////////升级存管账户删除 End  ///////////////

    /////////////升级存管账户删除 Start///////////////
	/*$scope.chooseBank = function(code) {
		$scope.bankCode = code;
		if ($scope.isSubmit) {
			return;
		}
		$scope.isSubmit = true;
		resourceService.queryPost($scope, $filter('交互接口对照表')('网银充值'),{
			amount: $scope.user.amount,
			bankCode: $scope.bankCode
		},'网银充值');
	}

	$scope.isGetVoice = false;
	// 身份认证--获取短信验证码
	$scope.code.times = 59;
	$scope.voiceRepeat = false;
	$scope.getPhoneCode = function(entrance, event, item, isvoice) {
		$('.voice-box span').hide();
		var type = 1;
		
		if (!$filter('isRegister')().register) {
			return;
		}
		var $this = $(event.currentTarget);
		if ($this.hasClass('getcode-disabled')) {
			return;
		}
		$this.addClass('getcode-disabled');
		$scope.amountError = false;

		if (isvoice) {
			type = 2;
		} else {
			type = 1;
		}

		$.ajax({
			headers: { 
		        'Accept': 'application/json',
		        'Content-Type': 'application/json' 
		    },
			url: $filter('交互接口对照表')('充值获取验证码'),
			type: 'post',
			data: JSON.stringify({type: type,amount: $scope.user.amount}),
			dataType: 'json',
			success: function(data){
				if (data.success) {

					if (isvoice) {
						$scope.isGetVoice = true;
					} else {
						$scope.isGetVoice = false;
					}
					$scope.pay.payNum = data.map.payNum;

					// item.times = 59;
					if (!isvoice || (isvoice && !item.isGetCode)) {
						if (!isvoice) {
							item.isGetCode = true;
						}
						item.timer = $interval(function(){
							if (item.times == 0) {
								$interval.cancel(item.timer);
								// if (!isvoice) {
									item.getCodeText = '点击获取验证码';
								// } else {
									$scope.isGetVoice = false;
								// }
								item.isGetCode = false;
								item.times = 59;
								return;
							}
							// if (!isvoice) {
								item.getCodeText = item.times + 's重新获取';
							// }
							item.times --;
				        }, 1000);
					}
					$.qTip({
						'type': true,
						'text': '短信发送成功'
					});
				} else {
					var errorMsg = $filter('充值获取验证码error信息')(data.errorCode);
					if (data.errorCode == '8888') {
						$('.voice-box span').show();
					} else {
						$.qTip({
							'type': false,
							'text': errorMsg
						});
					}
					$this.removeClass('getcode-disabled');
				}
			}
		});
		
		// resourceService.queryPost($scope, $filter('交互接口对照表')('充值获取验证码'),{type},'充值获取验证码');
	};*/
    /////////////升级存管账户删除 End  ///////////////

    /////////////升级存管账户删除 Start///////////////
	// 切换方式
	/*$scope.changeTab = function(type) {
		switch(type) {
			case 1:
				$scope.tab = 1;
				// $scope.quota = $scope.user.quota;
				// if ($scope.user.bankCode == 6) {
				// 	$scope.rechargemore = 2;
				// } else {
				// 	$scope.rechargemore = 1;
				// }
				break;
			case 2:
				$scope.tab = 2;
				// $scope.quota = 500000;
				// $scope.rechargemore = 1;
				break;	
		}
		var obj = $filter('rechargeLimit')($scope.user.amount,$scope.rechargemore,$scope.quota);
		if (obj.typemin == false || obj.typemax == false) {
			$scope.amountIsTrue = false;
			if (obj.typemin == false) {
				$scope.typemin = false;
				$scope.amountMsg = '充值金额至少为' + $scope.rechargemore + '元';
			}
			if (obj.typemax == false) {
				$scope.typemax = false;
				$scope.amountMsg = '单笔限额' + $filter('number')($scope.quota) + '元';
			}
		} else {
			$scope.amountIsTrue = true;
			$scope.typemin = true;
			$scope.typemax = true;
			$scope.amountMsg = '';
		}

	}

	// 提交表单
	$scope.submitForm = function(valid) {
		if (!valid || $scope.isSubmit) {
			return;
		}
		$scope.isSubmit = true;
		resourceService.queryPost($scope, $filter('交互接口对照表')('充值'),{
			payNum: $scope.pay.payNum,
			smsCode: $scope.user.phonecode
		},'充值');
	};

	// 网银充值
	$scope.goWYPay = function() {

		if ($scope.isSubmit) {
			return;
		}
		$scope.isSubmit = true;
		resourceService.queryPost($scope, $filter('交互接口对照表')('网银充值'),{
			amount: $scope.user.amount,
			bankCode: $scope.bankCode
		},'网银充值');
	};*/
    /////////////升级存管账户删除 End  ///////////////
/**********************存管上线后快捷充值优化 2017-07-25 Start *************************************/
	$scope.isSubmitting = false;
/**********************存管上线后快捷充值优化 2017-07-25 End   *************************************/
	$scope.onClickNext = function () {
/**********************存管上线后快捷充值优化 2017-07-25 Start *************************************/
		if ($scope.isSubmitting) return;
/**********************存管上线后快捷充值优化 2017-07-25 End   *************************************/
/**********************存管上线后快捷充值优化 2017-07-24 Start *************************************/
		/*if ($scope.payMethod === 0) {	//快捷支付
            var params = {
                amt: $scope.user.amount
            };
			var reqUrl = $filter('交互接口对照表')('快捷充值');
            $.ajax({
                url: reqUrl,
                beforeSend: function(request) {
                    request.setRequestHeader("Content-Type", "application/json;charset=UTF8");
                    request.setRequestHeader("Accept", "application/json, text/plain, *!/!*");
                },
                type: 'post',
                dataType: 'json',
                data: JSON.stringify(params),
                async:false,//同步请求
                success: function (resp) {
                    if (!resp.success) {
                        var reason = '请联系客服。';
                        if (resp.hasOwnProperty('errorMsg')) {
                            reason = resp.errorMsg;
                        }
                        var result = {
                            success: false,
                            title: '充值失败',
                            detail: '失败原因：' + reason,
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
                    } else {
                        var $hiddenForm = $('#hiddenFormFast')[0];
                        $('.mchnt_cd',$hiddenForm).val(resp.map.requestData.mchnt_cd);
                        $('.mchnt_txn_ssn',$hiddenForm).val(resp.map.requestData.mchnt_txn_ssn);
                        $('.login_id',$hiddenForm).val(resp.map.requestData.login_id);
                        $('.amt',$hiddenForm).val(resp.map.requestData.amt);
                        $('.page_notify_url',$hiddenForm).val(resp.map.requestData.page_notify_url);
                        $('.back_notify_url',$hiddenForm).val(resp.map.requestData.back_notify_url);
                        $('.signature',$hiddenForm).val(resp.map.requestData.signature);
                        $hiddenForm.action = resp.map.requestUrl;
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
                            var params = {serialNumber: resp.map.requestData.mchnt_txn_ssn};
                            myAccountDataService.getRechargeResult(params).then(function (result) {
                                if (!result.success) {
                                    ngDialog.closeAll(false);
                                    clearInterval(doChk);
                                    var reason = '系统异常，请联系客服。';
                                    if (result.hasOwnProperty('errorMsg')){
                                        reason = result.errorMsg;
                                    }
                                    var params = {
                                        success: false,
                                        title: '充值失败',
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
                                    $scope.result = params;
                                    $filter('存管账户操作结果弹窗')($scope);
                                } else {
                                    if (!result.map.finished) {
                                        return false;
                                    }
                                    clearInterval(doChk);
                                    ngDialog.closeAll(false);
                                    var params = {
                                        success: true,
                                        title: '充值成功',
                                        detail: '充值金额： ',
                                        amount: result.map.amount,
                                        mainBtnName: '确 定',
                                        onMainBtnClick : function () {
                                            //do nothing
                                            $state.go('main.myAccount.myAssets');
                                        },
                                        onClose : function () {
                                            //do nothing
                                            $state.go('main.myAccount.myAssets');
                                        }
                                    }
                                    $scope.result = params;
                                    $filter('存管账户操作结果弹窗')($scope);
                                }
                            }, function (err) {

                            });
                        }, 2000);
                    }
                },
                error:function(){

                }
            });
		} else if ($scope.payMethod === 1) {	//网银支付*/
		if ($scope.payMethod == 0) {			//快捷支付
			$scope.isSubmitting = true;
			var params = {
				serialNum: $scope.serialNum,
				mobilePhone: document.getElementsByName('mobilePhone')[0].value,
                captcha: document.getElementsByName('vfycd')[0].value
			};
			myAccountDataService.fastRecharge(params).then(function (resp) {
				if (!resp.success) {
                    var reason = '请联系客服。';
                    if (resp.hasOwnProperty('errorMsg')) {
                        reason = resp.errorMsg;
                    }
                    var result = {
                        success: false,
                        title: '充值失败',
                        detail: '失败原因：' + reason,
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
				} else {
                    var params = {
                        success: true,
                        title: '充值成功',
                        detail: '充值金额： ',
                        amount: resp.map.amount,
                        mainBtnName: '确 定',
                        onMainBtnClick : function () {
                            //do nothing
                            $state.go('main.myAccount.myAssets');
                        },
                        onClose : function () {
                            //do nothing
                            $state.go('main.myAccount.myAssets');
                        }
                    }
                    $scope.result = params;
                    $filter('存管账户操作结果弹窗')($scope);
				}
				$scope.isSubmitting = false;
            }, function (err) {

            });
        } else if ($scope.payMethod === 1) {	//网银支付
/**********************存管上线后快捷充值优化 2017-07-24 End *************************************/
			var params = {
                amt: $scope.user.amount
			};
			var reqUrl = $filter('交互接口对照表')('网银充值');
			$.ajax({
				url: reqUrl,
                beforeSend: function(request) {
                    request.setRequestHeader("Content-Type", "application/json;charset=UTF8");
                    request.setRequestHeader("Accept", "application/json, text/plain, */*");
                },
                type: 'post',
                dataType: 'json',
                data: JSON.stringify(params),
                async:false,//同步请求
				success: function (resp) {
                    if (!resp.success) {
                        var reason = '请联系客服。';
                        if (resp.hasOwnProperty('errorMsg')) {
                            reason = resp.errorMsg;
                        }
                        var result = {
                            success: false,
                            title: '充值失败',
                            detail: '失败原因：' + reason,
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
                    } else {
                        var $hiddenForm = $('#hiddenFormNetbank')[0];
                        $('.mchnt_cd',$hiddenForm).val(resp.map.requestData.mchnt_cd);
                        $('.mchnt_txn_ssn',$hiddenForm).val(resp.map.requestData.mchnt_txn_ssn);
                        $('.login_id',$hiddenForm).val(resp.map.requestData.login_id);
                        $('.amt',$hiddenForm).val(resp.map.requestData.amt);
                        $('.page_notify_url',$hiddenForm).val(resp.map.requestData.page_notify_url);
                        $('.back_notify_url',$hiddenForm).val(resp.map.requestData.back_notify_url);
                        $('.signature',$hiddenForm).val(resp.map.requestData.signature);
                        $hiddenForm.action = resp.map.requestUrl;
                        $hiddenForm.method = 'POST';
                        $hiddenForm.submit();
                        $filter('充值弹窗')($scope);
                    }
                }
			});
		}
    };
    /**********************存管上线后快捷充值优化 2017-07-24 Start *************************************/
    var getVfycdItv;
    $scope.isGettingVfycd = false;
    $scope.onGetVfycd = function () {
    	if ($scope.isGettingVfycd) return;
    	$scope.isGettingVfycd = true;
    	var waitTime = 60;
    	var getBtn = document.getElementsByClassName('vfycd-btn')[0];
    	var amountInput = document.getElementsByName('amount')[0];
    	var innerHtmlBak = getBtn.innerHTML;
    	getBtn.className += ' inactive';
    	amountInput.setAttribute('readonly', '');
    	getVfycdItv = setInterval(function () {
			if (waitTime > 0) {
				getBtn.innerHTML = waitTime + '秒后可再获取';
				waitTime--;
			} else {
				$scope.isGettingVfycd = false;
				clearInterval(getVfycdItv);
				getBtn.innerHTML = innerHtmlBak;
				amountInput.removeAttribute('readonly');
				getBtn.className = getBtn.className.replace(' inactive', '');
			}
        }, 1000);
    	var postdata = {
    		amount: $scope.user.amount,
			mobilePhone: document.getElementsByName('mobilePhone')[0].value
		};
    	myAccountDataService.getRechargeVfycd(postdata).then(function (result) {
            if (!result.success || !result.map.serialNum) {
                var reason = '系统异常，请联系客服。';
                if (result.hasOwnProperty('errorMsg')){
                    reason = result.errorMsg;
                }
                var params = {
                    success: false,
                    title: '获取手机验证码失败',
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
                $scope.result = params;
                $filter('存管账户操作结果弹窗')($scope);
            } else {
                $scope.serialNum = result.map.serialNum;
                // alert('验证码已发送');
            }
        }, function (err) {

        })
    };
    /**********************存管上线后快捷充值优化 2017-07-24 End   *************************************/

	// resourceService.queryPost($scope, $filter('交互接口对照表')('充值数据'),{},'充值数据');
    resourceService.queryPost($scope, $filter('交互接口对照表')('充值数据'),{},'充值数据');
	resourceService.queryPost($scope, $filter('交互接口对照表')('我的资产首页数据'),{},'资产首页');
	/**********************存管上线后快捷充值优化 2017-07-21 Start *************************************/
    resourceService.queryPost($scope, $filter('交互接口对照表')('提现数据'),{},'提现数据');
    /**********************存管上线后快捷充值优化 2017-07-21 End   *************************************/
}]);