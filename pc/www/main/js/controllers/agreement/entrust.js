window.entrust = function ($scope,$rootScope,$filter,resourceService,$timeout,$resource,$location,$localStorage,getScript) {
   //pid=2535&uid=202808&investId=90774
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
	if ($scope.ids.pid != undefined && $scope.ids.uid != undefined && $scope.ids.investId != undefined) {
		$.ajax({
	        url: '/http_entrust',
	        type: "post",
	        dataType: "json",
	        async: false,
	        contentType: "application/json;charset=UTF-8",
	        data: JSON.stringify({"pid": $scope.ids.pid, "uid": $scope.ids.uid, "investId": $scope.ids.investId}),
	        success: function (data) {
	        	$scope.entrustInfo = data.map;
	        	$scope.$apply();
	        }
	   })
	}
 
	$scope.$apply();
}