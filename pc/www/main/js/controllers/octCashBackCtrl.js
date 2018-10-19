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

        //   调后台接口文档
         .filter('交互接口对照表', function() {

            return function(name) {
                var portUrlMap = {

                    /* guoqing  */
                    '十月返现': '../../activity/getInvestTopData.do',  //----改这里的值
                    'end' : 'end'
                };

                return portUrlMap[name];
            }
        })

//这里开始写自己的东西
routerApp.controller('octCashBackCtrl', ['$scope','$location','$filter','resourceService',function($scope,$location,$filter,resourceService) {

	$scope.aloneQdShow=false;

			// var xx = getUrlParam('upgrade');
   //          var wap = getUrlParam('wap');
   //          $scope.wap=false;
   //          if(wap){
   //              $scope.wap=true;
   //          }
   //          if(xx >=0){
   //              $scope.update = true;
   //          }else{
   //              $scope.update = false;
   //          }

   //          if (getUrlParam('uid') == '' || getUrlParam('uid') == undefined) {
   //              $scope.uid = false;
   //          } else {
   //              $scope.login = true;
   //              $scope.uid = getUrlParam('uid');
   //              apiAll();
   //          }


	function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }

//判断H5环境下用户有没有登录
	$scope.wap = getUrlParam('wap');
	if(getUrlParam('uid')!=''){
		$scope.uid = getUrlParam('uid');
	}

//拿到后台返回的数据需要干什么，都写在这里，
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,eObj) {
		switch(eObj) {
			case "十月返现":   //这里改值 ， 就是定义的接口名字

			// $scope.list = data.map;
			//是渠道用户， 弹窗
             if(data.map.isJoin==undefined){
             	$scope.aloneQdShow=false;
             }else if(data.map.isJoin){
             	$scope.aloneQdShow=false;
             }else if(!data.map.isJoin){
             	$scope.aloneQdShow=true;
             }

             $scope.investTotal=data.map.memberInvest;
			break;
		}
	});
	//向后台取数据，定义名字     需要传uid就传，不传就为{};
resourceService.queryPost($scope,$filter('交互接口对照表')('十月返现'),{
	uid:$scope.uid,
	topNum:1
},'十月返现');




}])