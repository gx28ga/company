window.libao = function( obj ){
	obj.$css.add('../css/stylesheets/bootstrap-sass-3.3.7/pop.css');
	obj.$css.add('/activity/web/common/libao/screen.css');

	var pop = obj.$uibModal.open({
		animation: true,
		windowClass : 'libaoSuper',
		ariaLabelledBy: 'modal-title',
		ariaDescribedBy: 'modal-body',
		templateUrl: '/activity/web/common/libao/bigLibao.html',
		//controller: 'ModalInstanceCtrl',
		//controllerAs: '$ctrl',
		size: 'lg',
		//appendTo: $('body'),
		controller : function($scope,$css,$filter,resourceService,$timeout,$location,$localStorage,$state,$uibModalInstance){
			
			$timeout(function(){
				$('.topText p').each(function(i){
					if(i==0){
						$(this).html(obj.title.h1);
					}
					if(i==1){
						$(this).html(obj.title.h2);
					}
					if(i==2){
						$(this).html(obj.title.h3);
					}
				})
			});

			/*注册*/
			$scope.userLogin = {};
			$scope.login = {};

			$scope.isGetVoice = false;
			var $userphone = $('#userphone'),
				$imgcode = $('#imgcode');

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

			$scope.close = function(){
				$uibModalInstance.dismiss('cancel');
				obj.closeCallback && obj.closeCallback();
			}
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
							$uibModalInstance.dismiss('cancel');
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
	  	
		}
		/*resolve: {
			items: function () {
				return $ctrl.items;
			}
		}*/
	});
}