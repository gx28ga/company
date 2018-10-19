
/*新闻列表*/
mainModule.controller('gsdtCtrl', ['$rootScope','$scope','$location','$localStorage','$filter','resourceService', function($rootScope,$scope,$location,$localStorage,$filter,resourceService) {
	$rootScope.title = '公司动态,活动-多融财富';
	$rootScope.keywords = '公司动态,公司活动';
	$rootScope.description = '你了解多融财富吗？你知道多融财富是干什么的吗？如果投资者想了解多融财富的活动，可以在公司动态栏目了解到公司参与的活动，还会有一些平台维护的通知。';
	$scope.$on('resourceService_GET_JSON.MYEVENT', function(event, data, type) {
			$scope.menuItems = data.result;
	});
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type) {
			case "新闻列表":
				if (data.success) {
					$scope.news = data.map.page.rows;
					$scope.bill = data.map.page;
					$scope.bill.pages = [];
					for(var i=0;i<parseInt($scope.bill.totalPage);i++){
						$scope.bill.pages[i]=i+1;
					};
				} else {
				}
				break;
		};
	});
	resourceService.queryPost($scope, $filter('交互接口对照表')('新闻列表'),{
		pageOn:1,
		pageSize:10,
		proId:1
	},'新闻列表');

	$scope.onXWclick = function(item) {
		$localStorage.newsId = item.artiId;
		$filter('跳转页面')('type','main.jt.GSDT','main.jt.XWXQ',item,'多融新闻',{name:'多融新闻',url:'main.jt.GSDT'});
	};
	$scope.onClickPage=function (type,pageNum,listtype) {
		switch(type){
			case "beforPage":
				if($scope.bill.pageOn > 1){$scope.bill.pageOn -=1;goPage($scope.order,$scope.bill.pageOn);};
			break;
			case "currentPage":
				$scope.bill.pageOn = pageNum;goPage($scope.order,$scope.bill.pageOn);
			break;
			case "nextPage":
				if($scope.bill.pageOn < $scope.bill.pages.length){$scope.bill.pageOn +=1;goPage($scope.order,$scope.bill.pageOn);};
			break;
		};
	}
	function goPage(order,pageOn,type) {
		// 翻页
		var obj = {}
		obj.proId = 1; 
		obj.pageOn = pageOn; 
		obj.pageSize = 10;
		if (type != undefined) {
			obj.type = type;
		}
		resourceService.queryPost($scope,$filter('交互接口对照表')('新闻列表'),obj,'新闻列表');
	};
}]);
