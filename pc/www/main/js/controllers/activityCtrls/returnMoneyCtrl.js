mainModule.controller('returnMoneyCtrl', ['$rootScope','$scope','resourceService','$filter',function($rootScope,$scope,resourceService,$filter) {
	$rootScope.title = '投资返现，不上封顶';
	if (!$filter('isRegister')().register) {
		$scope.login = 0;
	} else {
		$scope.login = 1;
		resourceService.queryPost($scope,$filter('交互接口对照表')('cp079获取投资数据'),{
			uid:$scope.uid,
			topNum:1
		},'获取投资数据');
	}
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type) {
			case "获取投资数据":
				if(data.success){
					$scope.isJoin = !data.map.isJoin;
					$scope.info = data.map;
				}
			break;
		}
	});
}])