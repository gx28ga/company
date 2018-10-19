function getNavcurrent( $rootScope , name ){
 	if('main.jt.guarantee'==name){
    	$rootScope.selMenu = 'guarantee';
    }else if((name.search(/^main\.jt/)>-1 || name.search(/^main\.report/)>-1) && (name.search(/^main\.jt2/)<0)){ //关于我们 及 关于我们子集
    	$rootScope.selMenu = 'DRGK';
    }else{
    	$rootScope.selMenu = null;
    }
}

/*静态页面主控*/
mainModule.controller('jtMenuCtrl', ['$rootScope','$scope','$location','$localStorage','$filter','resourceService','$stateParams', '$state', function($rootScope,$scope,$location,$localStorage,$filter,resourceService,$stateParams,$state) {
	$rootScope.selMenu = $stateParams.menuName;
	getNavcurrent($rootScope,$state.current.name)
	$rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
       getNavcurrent($rootScope,toState.name)
    })
	var jsonUrl='/main/data/helpMenu1.json';
	$rootScope.activeNav = 'aboutus';
	resourceService.getJsonServer($scope,jsonUrl,{},'静态文本_菜单');
	$scope.$on('resourceService_GET_JSON.MYEVENT', function(event, data, type) {
		switch(type) {
			case "静态文本_菜单":
				$scope.menuItems = data.result;
			break;
		}
	});
	if($localStorage.activeText !=undefined){
		$scope.curUrl = $localStorage.activeText.url;
		$scope.activeText = $localStorage.activeText.name;
	}else
	{
		$scope.curUrl = $location.$$url.replace('/','').replace('main/jt/help', 'main.jt.');
		$scope.activeText = $scope.activeText = '关于我们';
	};
}]);

