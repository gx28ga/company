/*lee 我的消息*/
mainModule.controller('accountMymsgWrapCtrl', ['$rootScope','$scope','$filter','resourceService',function($rootScope,$scope,$filter,resourceService) {
	$rootScope.$broadcast('myEvent.WHDR_Ctrl',{name:'消息中心',url:'main.myAccount.myMsg'});
	$scope.page = {
		type: 1,
		pageSize: 5,
		pageOn: 1
	};
	$scope.isActive = 1;
	$rootScope.title = '我的消息-多融财富';
	$rootScope.activeNav = 'account';
	resourceService.queryPost($scope,$filter('交互接口对照表')('我的消息'),$scope.page,'我的消息');
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type){
			case "我的消息":
				if(data.success){
					$scope.msg = data.map;
				}else{
				}
			break;
			case "消息列表":
				if(data.success){
					$scope.page.pageOn = data.map.page.pageOn;
					$scope.pages = [];
					$scope.page.totalPage = data.map.page.totalPage;
					for(var i=0;i<parseInt(data.map.page.totalPage);i++){
						$scope.pages[i]=i+1;
					};
					$scope.myMsgList = data.map.page.rows;
				}else{
				}
			break;
		};
	});
	$scope.onClick = function(type,item){
		switch(type) {
			case "beforePage":
				if($scope.page.pageOn > 1){$scope.page.pageOn -=1;goPage();};
			break;
			case "currentPage":
				$scope.page.pageOn = item; goPage();
			break;
			case "nextPage":
				if($scope.page.pageOn < $scope.pages.length){$scope.page.pageOn +=1;goPage();};
			break;
		}
	};
	$scope.goPG = function(){
		goPage();
	};

	function goPage() {
		$scope.page.type = $scope.isActive;
		resourceService.queryPost($scope,$filter('交互接口对照表')('消息列表'),$scope.page,'消息列表');
	};
}])