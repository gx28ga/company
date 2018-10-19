/*登录*/
mainModule.controller('dlCtrl', [ '$scope', '$rootScope', '$http','$timeout' ,'$state', '$stateParams', '$localStorage','$location', 'resourceService','communicationService','$filter',function($scope, $rootScope, $http,$timeout, $state, $stateParams, $localStorage,$location,resourceService,communicationService,$filter) {
	$scope.userLogin = {};
	$rootScope.title="我的账户_会员登录_账号登录-多融财富";
	$rootScope.keywords="我的账户,会员登录,账号登录";
	$rootScope.description="通过登录我的账户，投资者可以直接进行投资，但是有必要提醒各位投资者，在设置密码时，千万不要使用简单的密码，避免他人破解而损失自己的利益。";
	$scope.isShow=false;
	var isDenLuSubmin = true;
	var changePicEvent;
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
	$rootScope.showMaskCoupon = false;
	$scope.gotoLoginPage = function (type) {
		switch(type){
			case "帮助中心"://我的资产
				$localStorage.showQA = false;
				$filter('跳转页面')('','main.home','main.jt2.help','帮助中心',null,{name:'帮助中心',url:'main.jt2.help'});
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
	$scope.LoginClick = function(clickName,tegForm) {
		switch(clickName){
			case 'denLu':
				if(isDenLuSubmin){//防重复提交
					// changeIMG(changePicEvent);
					isDenLuSubmin = false;
					resourceService.queryPost($scope,$filter('交互接口对照表')('登录接口'),$scope.userLogin,{name:'用户登录',tegForm:tegForm});					
				};
			break;
		};
	};
	$scope.clickInput=function (type,event,isLogin,tegForm) {
		switch(type){
			case 'changePic': $scope.userLogin.picCode=null; changePicEvent = event; changeIMG(changePicEvent);	break;
		};
	};

	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event, data, type) {
		switch(type.name){
			case '用户登录':
				isDenLuSubmin = true;
				if(data.success){
					localStorage.setItem('userInfo',JSON.stringify(data.map));
					$scope.isPicYanZhen = false;
					$localStorage.user = {};
					$localStorage.loginNum=0;
					$localStorage.uid=data.map.uid;
					///////////对应存管账户 Start//////////////
					$localStorage.isRas = data.map.isRas;
                    // $localStorage.isRas = false;
                    ///////////对应存管账户 End  //////////////
					$scope.result=data.map.cmallResult.taskAwardList;//经验信息
					$scope.tips=data.map.cmallResult.tips;//提示语
					/*$timeout(function(){
						$scope.isShow=true;
					},100);*/
					//当有标志之后
					if(data.map.cmallResult.hasFinishedTasks){
						$scope.isShow=true;
					}else{
						$scope.isShow=false;
						$filter('跳回上一页')();
					}
					 // $scope.isShow=true;
					
					//$filter('跳回上一页')();//跳转页面
					if (data.flag) {
						$rootScope.showMaskCoupon = true;
						$('.mask-coupon').css('display','block');
					} else {
						$rootScope.showMaskCoupon = false;
					}
					$localStorage.uid = data.map.uid;
				}else{
					$scope.serverErrorCode = data.errorCode;
					$localStorage.loginNum++;
					if(data.errorCode == 1002 ){
						$scope.picShowError = true;
						type.tegForm.picCode.$error.serverError = true;
					}else{
						type.tegForm.userName.$error.serverError = true;
					};
					changeIMG();
					if($localStorage.loginNum > 2 || data.errorCode == 1002 || data.map.loginErrorNums > 2){
						$scope.isPicYanZhen = true;
					};
				}
			break;
		};
	});
		$scope.close=function(){//
		$filter('跳回上一页')();
	};
	$scope.tiao=function(){
		$filter('跳转页面')("","main.home","main.pointMall");//跳转到积分兑换
	}
}])
