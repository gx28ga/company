window.newYearRegister = function(getScript,$scope,$rootscope,$filter,resourceService,$timeout,$location,$localStorage,$state){ 
	$rootscope.title = '摇金币，换豪礼  双旦狂欢季';
	getScript(['vendor/jquery.SuperSlide.2.1.1.js'],function(){
		function slider(){
			$(".cooperation").slide({
				mainCell:".swiper-img ul",
				effect:"leftLoop",
				interTime : 3000,
				autoPlay:true,
				vis : 6,
				prevCell : '.left-btn',
				nextCell : '.right-btn'
			});
		};
		slider();
	})
	$scope.isNewAlert=false;
	$scope.isNewBackAlert=false;
	$scope.onClick=function (name) {
		switch(name){
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
				$scope.isNewAlert=false;
			break;
		};
	};
	if($location.$$search.toFrom != undefined || $location.$$search.recommCode!= undefined){
		$localStorage.webFormPath = $location.$$search;
	}; 
	/*注册*/
	$scope.userLogin = {};
	$scope.login = {};
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
	$scope.isGetVoice = false;
	var $userphone = $('#userphone'),
		$imgcode = $('#imgcode');
	$scope.clickInput=function (type,event,isLogin,tegForm,isvoice) {
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
					resourceService.queryPost($scope,$filter('交互接口对照表')('校验图片验证码'),{
						picCode: $scope.login.picCode,
						mobilephone: $scope.login.mobilephone,
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
		if(isZhuCeSubmin){
			isZhuCeSubmin=false;

			resourceService.queryPost($scope,$filter('交互接口对照表')('立即注册'),$scope.login,{name:'注册',tegForm:tegForm});
		}
	};
	/*焦点进入与离开*/
	$scope.blurID = function(code,tegForm) {
		if(!tegForm.mobilephone.$error.required && !tegForm.mobilephone.$error.minlength && !tegForm.mobilephone.$error.pattern) {
			resourceService.queryPost($scope,$filter('交互接口对照表')('注册验证手机号'),{
				mobilephone:$scope.login.mobilephone
			},{name:'注册验证手机号',tegForm:tegForm});
		};
	};
	$scope.gotoLoginPage = function (type) {
		switch(type){
			case "帮助中心"://我的资产
				$localStorage.showQA = false;
				$filter('跳转页面')('','main.home','main.jt.help','帮助中心',null,{name:'帮助中心',url:'main.jt.help'});
			break;
			case "理财课堂"://我的资产
				$filter('跳转页面')('','main.home','main.jt.LCZS','帮助中心',null,{name:'帮助中心',url:'main.jt.LCZS'});
			break;
			case "新手指引"://我的资产
				$filter('跳转页面')('','main.home','main.jt.XSZY','帮助中心',null,{name:'帮助中心',url:'main.jt.XSZY'});
			break;

			case "关于我们"://我的资产
				$filter('跳转页面')('','main.home','main.jt.DRGK','关于多融',null,{name:'关于多融',url:'main.jt.DRGK'});
			break;
			case "多融概况"://我的资产
				$filter('跳转页面')('','main.home','main.jt.DRGK','关于多融',null,{name:'关于多融',url:'main.jt.DRGK'});
			break;
			case "法律法规"://我的资产
				$filter('跳转页面')('','main.home','main.jt.FLFG','关于多融',null,{name:'关于多融',url:'main.jt.FLFG'});
			break;
			case "联系我们"://我的资产
				$filter('跳转页面')('','main.home','main.jt.LXWM','LXWM',null,{name:'关于多融',url:'main.jt.LXWM'});
			break;
			
			case "投资安全"://我的资产
				$filter('跳转页面')('','main.home','main.jt.AQBZ','安全保障',null,{name:'安全保障',url:'main.jt.AQBZ'});
			break;
			default:
				$filter("跳转页面")(type,'main.home','dl');
			break;
		};
	};
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event, data, type) {
		switch(type.name){
			case '注册验证手机号':
				if(data.success){
					if (data.map.exists) {//已有用户名
						type.tegForm.mobilephone.$error.serverError = data.map.exists;
						$scope.serverErrorCode=8888;
					}else{
						type.tegForm.mobilephone.$error.serverError = data.map.exists;
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
					$state.go('main.myAccount.myCoupon');
				}else{
					$scope.serverErrorCode=data.errorCode;
					switch(data.errorCode){
						case '1001': 
							type.tegForm.smsCode.$error.serverError = true;
							// changeIMG();
						break;
						case '1002': 
							type.tegForm.smsCode.$error.serverError = true;
						break;
						case '1003': 
							type.tegForm.mobilephone.$error.serverError = true;
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
							type.tegForm.mobilephone.$error.serverError = true;
						break;
						case '1008': 
							type.tegForm.recommPhone.$error.serverError = true;
						break;
					};
				};
			break;
		};
	});
	getScript(['activity/app/newYear/src/js/draw.js'],function(){
		var d = new draw({
            element : $('.prize') , //元素
            ul : $('.prize ul'),
            child : $('.prize ul li'),
            length : 3,
            oneBtn : $('.startbtn,.yaobtn') , //玩一次按钮
            oneBtnCallback : function(){ // 回掉
                setTimeout(function(){
                    d.getDraw(4);
                }, 1000);
            },
            tenBtn : $(''),  //玩十次按钮
            tenBtnCallback : function(){// 回掉
                setTimeout(function(){
                    d.getDraw(5 , true); //5为最后一次的中奖 ， 第二个为10次抽奖
                }, 1000);
            },
            callback : function(){ //中奖弹窗
                $scope.isNewAlert = true;
            	$scope.$apply();
            },
            showMoeny: false,
        });
	})
	// 推广页的方法
	$scope.focusMobile = function() {
		// $('#mobilephone').focus();
		$state.go('zhuce');
	};
}