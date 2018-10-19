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

                    /* 端午节活动 */
                    '领券信息': '../../activity/isParticipationActivity.do',

                    'end' : 'end'
                };
                
                return portUrlMap[name];
            }
        }) 

/* 端午节 */
routerApp.controller('financialCtrl', ['$scope','$location','$filter','resourceService',function($scope,$location,$filter,resourceService) {
	
    var xx = getUrlParam('upgrade');
    var wap = getUrlParam('wap');
    $scope.wap=false;
    if(wap){
    	$scope.wap=true;
    }
    if(xx >=0){
    	$scope.update = true;
    }else{
    	$scope.update = false;
    }

	if (getUrlParam('uid') == '' || getUrlParam('uid') == undefined) {
		$scope.login = false;
		$scope.redBagText = '立即抢钱';
	} else {
		$scope.login = true;
		resourceService.queryPost($scope,$filter('交互接口对照表')('领券信息'),{type:1,uid:Number(getUrlParam('uid'))},'领券信息');
	}

	function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }

	$scope.showBtn = false;

	$scope.redbagFlag = false;
	$scope.getRed = false;
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type) {
			case "领券信息":
				$scope.redbagFlag = data.flag;
				if(data.flag) {
					$scope.redBagText = '立即使用';
					$scope.getRed = true;
				} else {
					$scope.redBagText = '立即抢钱';
					$scope.getRed = false;
				}
			break;
		}
	});

	$scope.day = 0;
	$scope.hour = 0;
	$scope.minute = 0;
	$scope.second = 0;

	var $time = $('.time');

	$scope.getRTime = function() { 
		var EndTime= new Date('2016/6/11 10:00:00'); //截止时间 
		var NowTime = new Date(); 
		var t =EndTime.getTime() - NowTime.getTime(); 
		$scope.$apply(function() {
			$scope.day=Math.floor(t/1000/60/60/24); 
			$scope.hour=Math.floor(t/1000/60/60%24); 
			$scope.minute=Math.floor(t/1000/60%60); 
			$scope.second=Math.floor(t/1000%60);
		});
		if ($scope.day <= 0 && $scope.hour <= 0 && $scope.minute <= 0 && $scope.second <= 0) {
			clearInterval(timer);
			$scope.$apply(function() {
				$scope.showBtn = true;
			});
		}
	} 
	var timer = setInterval($scope.getRTime,1000);
}])