/* 协议 */
mainModule.controller('protocolCtrl', ['$rootScope','$scope','$filter','resourceService','$localStorage','$location', function($rootScope,$scope,$filter,resourceService,$localStorage,$location) {
	$scope.ids={};

	if($location.$$search.pid != undefined && $location.$$search.uid != undefined && $location.$$search.investId != undefined) {
		$scope.idLength = true;
		$scope.ids = $location.$$search;
	} else {
		if($localStorage.inProfitProductList != undefined){
			$scope.idLength = true;
			$scope.ids.pid=$localStorage.inProfitProductList[$location.$$search.idx].pid
			$scope.ids.uid=$localStorage.inProfitProductList[$location.$$search.idx].uid
			$scope.ids.investId= $localStorage.inProfitProductList[$location.$$search.idx].id
		}else{
			$scope.idLength = false;
		}
	}
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type) {
			case "权益转让及受让协议":
				if (data.success) {
					$scope.info = data.map;
				} else {
				}
				 var ua = navigator.userAgent,
                uaLower = ua.toLowerCase(),
                IS_IPAD = ua.match(/iPad/i) != null,
                IS_IPHONE = !IS_IPAD && ((ua.match(/iPhone/i) != null) || (ua.match(/iPod/i) != null)),
                IS_IOS = IS_IPAD || IS_IPHONE,
                IS_ANDROID = !IS_IOS && ua.match(/android/i) != null,
                IS_MOBILE = IS_IOS || IS_ANDROID ;

        if(IS_ANDROID){
          window.localStorage.setItem("mapinfo",JSON.stringify($scope.info));
            window.location.href = '/main/html/protocol/mobile/qy.html';
        }
				break;
		};
	});
	if ($scope.ids.pid != undefined && $scope.ids.uid != undefined && $scope.ids.investId != undefined) {
		resourceService.queryPost($scope,$filter('交互接口对照表')('权益转让及受让协议'),$scope.ids,'权益转让及受让协议');
	}
}]);