/*新闻列表*/
mainModule.controller('newsCtrl', ['$rootScope','$scope','$location','$localStorage','$filter','resourceService', function($rootScope,$scope,$location,$localStorage,$filter,resourceService) {
	$rootScope.title = '公司新闻,资讯_行业新闻-多融财富';
	$rootScope.keywords = '公司新闻,公司资讯,行业新闻,最新资讯';
	$rootScope.description = '你想了解多融财富的理财产品吗？你想知道多融财富公司资讯吗？投资者可以通过多融财富的公司新闻栏目来了解本公司的产品以及理财知识。在这里，投资者可以快速了解到产品的最新信息以及投资市场的行情。';
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
		proId:2
	},'新闻列表');

	$scope.onXWclick = function(item) {
		$localStorage.newsId = item.artiId;
		$filter('跳转页面')('type','main.jt.GSXW','main.jt.XWXQ',item,'多融新闻',{name:'多融新闻',url:'main.jt.GSXW'});
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
		obj.proId = 2; 
		obj.pageOn = pageOn; 
		obj.pageSize = 10;
		resourceService.queryPost($scope,$filter('交互接口对照表')('新闻列表'),obj,'新闻列表');
	};
}]);
