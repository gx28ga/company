var routerApp = angular.module('someApp', [
	'ngResource'
    ]);

/*
    username注意
    grid = 表格数据

 */

routerApp.factory(
		'resourceService', 
		['$resource', '$http','$filter',function($resource, $http,$filter) {
	return new resourceService($resource, $http,$filter);
}]);
/*缓存要跳转到页面名*/
routerApp.factory(
		'communicationService', 
		['$resource', '$http','$filter',function($resource, $http,$filter) {
	return new function(){
		var tag = {};
		/*路径*/
		this.setTagPage=function(name,url){
			tag.name=name;
			tag.url=url;
		};
		this.getTagPage=function(){
			return tag;
		};
		/*产品*/
		this.setProduct=function(item){	tag.product = item;}
		this.getProduct=function(){return tag.product;}
	};
}]);


function resourceService(resource, http , $filter) {
	var actions = {
		'query':{
            method:'GET'
        },
        'queryPost':{
        	method:'POST'
        	// headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'} 
        },
        'formGet':{
        	method:'GET',
        	async:false
        	// headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'} 
        }
    };
	//加载json模板页面
	this.getJsonServer = function(scope,url,data,type) {
		var queryResource = resource(url, {}, actions);
		queryResource.query(data, function(data) {
				scope.$broadcast('resourceService_GET_JSON.MYEVENT',data,type);
		}, function(error) {
		});
	};
		//查找
	this.queryPost = function(scope,url,data,type) {
				/*临时改变时间*/
				if ($filter('isOnLine')()) {
					var queryResource = resource(url, {}, actions);
					queryResource.queryPost(data, function(data) {
						if(data.success){
							scope.$broadcast('resourceService.QUERY_POST_MYEVENT',data,type);
						}else{
							if(data.errorCode == '9999'){
							}else{
								scope.$broadcast('resourceService.QUERY_POST_MYEVENT',data,type);
							}
						}

					}, function(error) {
						// $filter('服务器信息')(type, scope,'y');
					});
				}else{
					test(scope,url,data,type);
				};
	};
	
}
routerApp
/*开发环境*/
        .filter('isOnLine', function() {
            return function() {
                var isOnLine = true;//fasle=静态调试；true=开发模式
                return isOnLine;
            }
        }) 
         .filter('交互接口对照表', function() {

            return function(name) {
                var portUrlMap = {

                    /* cp079  */
                    '相约多融投资数据': '../../activity/getInvestTopData.do',
                    'end' : 'end'
                };
                
                return portUrlMap[name];
            }
        }) 

/* cp079 */
routerApp.controller('summerCtrl', ['$scope','$location','$filter','resourceService',function($scope,$location,$filter,resourceService) {
	$scope.isShowGZ = false;
	$scope.wap = getUrlParam('wap') == 'true' ? true : false;
	if(getUrlParam('uid')!='' && getUrlParam('uid')!= undefined){
		$scope.uid = getUrlParam('uid');
		$scope.isLogin = true;
	} else {
		$scope.isLogin = false;
	}

	function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }

	if($location.$$search.toFrom != undefined || $location.$$search.recommCode!= undefined){
		$localStorage.webFormPath = $location.$$search;
	};

	$scope.refresh = function() {
		resourceService.queryPost($scope,$filter('交互接口对照表')('相约多融投资数据'),{
			uid:$scope.uid,
			topNum:10
		},'相约多融投资数据');
	}
	$scope.refresh();
	
	$scope.onClick = function(type){
		switch(type) {
			case "查看活动规则":
				$scope.isShowGZ = true;
			break;
			case "关闭活动规则":
				$scope.isShowGZ = false;
			break;
		}
	};
	var commonHeight = $('.rank-table th').height()/0.78,
		timer;
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type) {
			case "相约多融投资数据":
			if (data.success) {
				$scope.phList = data.map;
				clearInterval(timer);
				if (data.map.investList.length > 5) {
					$('.show-list2').height(commonHeight*5);
					timer = setInterval(function() {
						$('.prizList').animate({'margin-top':'-' + commonHeight + 'px'},500,function() {
							var $clone = $('.prizList tr').eq(0);
							$('.prizList tr').eq(0).remove();
							$clone.appendTo('.prizList');
							$('.prizList').css('margin-top',0);
						});
					}, 3000);
				}
			}
			break;
		}
	});

}])