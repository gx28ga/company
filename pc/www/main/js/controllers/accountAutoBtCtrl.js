/*lee 我的账户*/
mainModule.controller('accountAutoBtCtrl', ['$rootScope','$scope', '$state', '$localStorage', 'resourceService','$filter','ngDialog','$location',function($rootScope,$scope, $state, $localStorage,resourceService,$filter,ngDialog,$location) {
	$filter('isLogin')($scope);
	$rootScope.title='我的账户-自动投标';
	$scope.autoTb = {};
	$scope.autoTb.useCoupon=1;
	$scope.tunOff=true;
	$scope.deadlineError=false;
$scope.minDeadline = '7';
$localStorage.pathUrl='main.myAccount.autoTb';
	$scope.selItemsMin=[
		{ code:7,cnvalue:'7天' },
		{ code:30,cnvalue:'30天' },
		{ code:90,cnvalue:'90天' }
	];
	$scope.selItemsMax=[
		{ code:7,cnvalue:'7天' },
		{ code:30,cnvalue:'30天' },
		{ code:90,cnvalue:'90天' },
		{ code:3650,cnvalue:'无限' }
	];
	$scope.autoTb.minDeadline=$scope.selItemsMin[0];
	$scope.autoTb.maxDeadline=$scope.selItemsMax[1];
	$rootScope.$broadcast('myEvent.WHDR_Ctrl',{"name":"自动投标","url":"main.myAccount.autoTb"});

function isEmptyObject( obj ) {
    for ( var name in obj ) {
        return false;
    }
    return true;
}
$scope.closeForm=true;
	$scope.onClickToBillDetail=function (name,code) {
		switch(name){
			case 'submin':
				$scope.autoTb.onOff=1;
				$scope.autoTb.minDeadline = $scope.autoTb.minDeadline.code;
				$scope.autoTb.maxDeadline = $scope.autoTb.maxDeadline.code;
				resourceService.queryPost($scope, $filter('交互接口对照表')('修改自动投标配置'),$scope.autoTb,'修改自动投标配置');
			break;
			case '修改submin':
				$scope.autoTb.minDeadline = $scope.autoTb.minDeadline.code;
				$scope.autoTb.maxDeadline = $scope.autoTb.maxDeadline.code;
				resourceService.queryPost($scope, $filter('交互接口对照表')('修改自动投标配置'),$scope.autoTb,'修改自动投标配置');
			break;
			case '单标投资金额':
				if(($scope.autoTb.amount*1) % 100 != 0 && isEmptyObject(code.$error)){
					$scope.stateListAmountError= '金额需100的倍数';
				}else{
					$scope.stateListAmountError = $filter('投资金额验证')(code);
				}
			break;
			case '账户保留余额':
				if(($scope.autoTb.amount*1)>0&&($scope.autoTb.amount*1) % 100 != 0 && code.$error.required == undefined){
					$scope.stateListAmountError= '金额需100的倍数';
				}else{
					$scope.stateListBalanceError = $filter('投资金额验证')(code);
				}
			break;
			case '关闭':
				ngDialog.closeAll();
			break;
			case '开启':
				if($scope.closeForm){
					$scope.closeForm=false;
					$scope.autoTb.onOff=0;
				}else{
					$scope.closeForm=true;
					$scope.autoTb.onOff=1;
				}
			break;
			case '期限':
				$scope.deadlineError = $scope.autoTb.maxDeadline.code<$scope.autoTb.minDeadline.code;
			break;
			default:
			break;
		};
	};


	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type){
			case '自动投标数据加载成功后':
					if(isEmptyObject(data.map)){
						$scope.tunOff=true;
					}else{
						$scope.tunOff=false;
						$scope.autoTb = data.map.conf;
						for (var i = 0; i < $scope.selItemsMin.length; i++) {
							if($scope.selItemsMin[i].code == $scope.autoTb.minDeadline){
								$scope.autoTb.minDeadline=$scope.selItemsMin[i];
							}
						}
						for (var i = 0; i < $scope.selItemsMax.length; i++) {
							if($scope.selItemsMax[i].code == $scope.autoTb.maxDeadline){
								$scope.autoTb.maxDeadline=$scope.selItemsMax[i];
							}
						}
						if($scope.autoTb.onOff==0){
							$scope.tunOff=true;
						}else{
							$scope.tunOff=false;
						}
					}
				break;
			case "修改自动投标配置":
				if(data.success){
					$filter('自动投标弹窗')($scope);
					if($scope.tunOff){
						$scope.okText='恭喜你投标配置启用成功，次日生效!'
					}
					if(!$scope.tunOff){
						$scope.okText='恭喜你投标配置修改成功，次日生效!'
					}
					if(!$scope.closeForm){
						$scope.okText='关闭自动投标，立即生效!'
					}
					$scope.errorCode=null;
				}else{
					$filter('自动投标弹窗')($scope);
					$scope.errorCode=data.errorCode;
				};
				for (var i = 0; i < $scope.selItemsMin.length; i++) {
							if($scope.selItemsMin[i].code == $scope.autoTb.minDeadline){
								$scope.autoTb.minDeadline=$scope.selItemsMin[i];
							}
						}
						for (var i = 0; i < $scope.selItemsMax.length; i++) {
							if($scope.selItemsMax[i].code == $scope.autoTb.maxDeadline){
								$scope.autoTb.maxDeadline=$scope.selItemsMax[i];
							}
						}
						if($scope.autoTb.onOff==0){
							$scope.tunOff=true;
						}else{
							$scope.tunOff=false;
						}
				break;
		};
	});
	/*
		初始化回填自动投标表单
	*/
	if($filter('isRegister')().register){//登录状态
		resourceService.queryPost($scope,$filter('交互接口对照表')('自动投标'),{},'自动投标数据加载成功后');
	}else{//未登录状态
		$state.go('dl');
	}
	/**
		修改启用自动投标配置：
			单笔投资额	amount
			最小期限	minDeadline
			最大期限	maxDeadline
			使用优惠券	useCoupon
			是否打开	onOff
			交易密码	tpwd
	*/
}])