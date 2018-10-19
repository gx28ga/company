/*注册*/
mainModule.controller('zhuceCtrl', [ '$scope',
	'$rootScope',
	'$http',
	'$state',
	'$stateParams',
	'$localStorage',
	'$location',
	'resourceService',
	'communicationService',
	'$filter',

	function($scope,
		$rootScope,
		$http,
		$state,
		$stateParams,
		$localStorage,
		$location,
		resourceService,
		communicationService,
		$filter) {
	if($location.$$search.toFrom != undefined || $location.$$search.recommCode!= undefined){
		$localStorage.webFormPath = $location.$$search;
	};
	/*注册*/
	$scope.userLogin = {};
	$scope.login = {};
	$scope.login1 = {};
	if($localStorage.webFormPath !=undefined){
		if($localStorage.webFormPath.recommCode != undefined){
			$scope.login.recommPhone = $localStorage.webFormPath.recommCode;
		};
		if($localStorage.webFormPath.toFrom != undefined){
			$scope.login.toFrom = $localStorage.webFormPath.toFrom;
		};
	};
	$scope.login.checkbox = true;
	$scope.isDisabledPhoneMsg=true;
	$scope.isSubMin = true;
	$scope.isShowReferee = false;

	$scope.isRuleAlert=false;
	$scope.isNewAlert=false;
	$scope.isNewBackAlert=false;

	var isZhuCeSubmin = true;
	var changeIMG = function (event) {//换图片验证码
		if(event != undefined){
			event.currentTarget.src += '?'+ new Date().getTime();
		}else{
			if($('.img-box img')[0]!= undefined){
				$('.img-box img')[0].src += '?'+ new Date().getTime();
			};
		};
	};
	changeIMG();
	$scope.onClickReferee=function () {
		if($scope.isShowReferee){
			$scope.isShowReferee = false;
		}else{
			$scope.isShowReferee = true;
		};
	};



$scope.onClick=function (name) {
		switch(name){
			case '活动规则':
				$scope.isRuleAlert=true;
			break;
			case '关闭活动规则':
				$scope.isRuleAlert=false;
			break;
			case '新人专享注册':
				$scope.isNewAlert=true;
				$scope.isNewBackAlert=false;
			break;
			case '关闭新人专享注册':
				$scope.isNewAlert=false;
				$scope.isNewBackAlert=true;
			break;
			case '关闭再给新人一次机会':
				$scope.isNewBackAlert=false;
			break;
		};
	};



	$scope.isGetVoice = false;
	var $userphone = $('#userphone'),
		$imgcode = $('#imgcode');
	$scope.clickInput=function (type,event,isLogin,tegForm,isvoice,clickName) {
		switch(type){
			case 'changePic': $scope.userLogin.picCode=null; changePicEvent = event; changeIMG(changePicEvent);	break;
			case 'phonecodeMSG':
				if ($userphone.val() == '') {
					$userphone.focus();
					return;
				} else if ($imgcode.val() == '') {
					$imgcode.focus();
					return;
				}
				if($scope.isSubMin){
					if (!isvoice && parseInt($scope.nowTimer) > 0) {
						return;
					}
					var $this = $(event.currentTarget);
					if ($this.hasClass('getcode-disabled')) {
						return;
					}
					$scope.isGetCode = true;
					$scope.voiceRepeat = false;
					$scope.isvoice = isvoice;
					var loginForm={};
						if(clickName=='zhuCe1'){
							loginForm=$scope.login1
						}else{
							loginForm=$scope.login
						}
					_hmt.push(['_trackEvent', 'YZM', 'click', 'zhuceYZM']);
					resourceService.queryPost($scope,$filter('交互接口对照表')('校验图片验证码'),{
						picCode: loginForm.picCode,
						mobilePhone: loginForm.mobilePhone,
						type: isvoice + 1
					},{name:'获取验证码',tegForm:tegForm,isvoice: isvoice,nowTimer: $scope.nowTimer});
					// if ($scope.nowTimer <= 0 || $scope.nowTimer == undefined) {
					// 	$filter('60秒倒计时')($scope,60);
					// }
				};
			break;
		};
	};
	$scope.LoginClick = function(clickName,tegForm) {
		var loginForm={};
		if(clickName=='zhuCe1'){
			loginForm=$scope.login1
		}else{
			loginForm=$scope.login
		}
		if(isZhuCeSubmin){
			isZhuCeSubmin=false;
			_hmt.push(['_trackEvent', 'zhuce', 'click', 'zhuceBtn']);
			resourceService.queryPost($scope,$filter('交互接口对照表')('立即注册'),loginForm,{name:'注册',tegForm:tegForm});
		}
	};
	/*焦点进入与离开*/
	$scope.blurID = function(code,tegForm,clickName) {
		var loginPhone='';
		if(clickName=='phone'){
			loginPhone=$scope.login1.mobilePhone
		}else{
			loginPhone=$scope.login.mobilePhone
		}
		if(!tegForm.mobilePhone.$error.required && !tegForm.mobilePhone.$error.minlength && !tegForm.mobilePhone.$error.pattern) {
			resourceService.queryPost($scope,$filter('交互接口对照表')('注册验证手机号'),{
				mobilePhone:loginPhone
			},{name:'注册验证手机号',tegForm:tegForm});
		};
	};
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event, data, type) {

		switch(type.name){
			case '注册验证手机号':
				if(data.success){
					if (data.map.exists) {//已有用户名
						type.tegForm.mobilePhone.$error.serverError = data.map.exists;
						$scope.serverErrorCode=8888;
					}else{
						type.tegForm.mobilePhone.$error.serverError = data.map.exists;
					};
				};
			break;
			case '获取验证码':
				if(data.success){
					$scope.isShowPhoneError = !data.success;
					$scope.isDisabledPhoneMsg = false;
					if (type.isvoice) {
						$scope.isGetVoice = true;
					} else {
						$scope.isGetVoice = false;
					}
					if (parseInt(type.nowTimer) <= 0 || type.nowTimer == undefined || type.nowTimer == '') {
						$filter('60秒倒计时')($scope,60);
					}
				}else{
					$scope.isShowPhoneError = !data.success;
					$scope.isDisabledPhoneMsg = true;
					// $scope.stop();
					$scope.serverErrorCode=data.errorCode;
					$scope.isGetCode = false;
					switch(data.errorCode){
						case '1001':
							type.tegForm.picCode.$error.serverError = true;
							// changeIMG();
						break;
						case '1002':
							type.tegForm.picCode.$error.serverError = true;
						break;
						case '1003':
							type.tegForm.smsCode.$error.serverError = true;
						break;
						case '8888':
							$scope.voiceRepeat = true;
					};
				};
			break;
			case '注册':
				if($scope.stop != undefined){
					$scope.stop();
				}
				isZhuCeSubmin = true;
				if (data.success) {
					$localStorage.webFormPath = {};
					$localStorage.user = data;
					// $state.go('main.tradepasswdSet');
					$state.go('main.createEscrowAccount');
				}else{
					$scope.serverErrorCode=data.errorCode;
					changeIMG();
					switch(data.errorCode){
						case '1001':
							type.tegForm.smsCode.$error.serverError = true;
							// changeIMG();
						break;
						case '1002':
							type.tegForm.smsCode.$error.serverError = true;
						break;
						case '1003':
							type.tegForm.mobilePhone.$error.serverError = true;
						break;
						case '1004':
							type.tegForm.picCode.$error.serverError = true;
						break;
						case '1005':
							type.tegForm.passWord.$error.serverError = true;
						break;
						case '1006':
							type.tegForm.checkbox.$error.serverError = true;
						break;
						case '1007':
							type.tegForm.mobilePhone.$error.serverError = true;
						break;
						case '1008':
							type.tegForm.recommPhone.$error.serverError = true;
						break;
					};
				};
			break;
		};
	});

	// 推广页的方法
	$scope.focusMobile = function() {
		// $('#mobilephone').focus();
		$state.go('zhuce');
	};
}])
