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
                    '国庆获取数据': '../../activity/indexGQ.do',  //----改这里的值
                    'end' : 'end'
                };

                return portUrlMap[name];
            }
        })

//这里开始写自己的东西
routerApp.controller('guoqingCtrl', ['$scope','$location','$filter','resourceService',function($scope,$location,$filter,resourceService) {
	$scope.aloneRuleShow=false;//初始化弹窗不显示

	$scope.lotteryDrawSuccess=true;//初始化渠道用户获取成功
	// $scope.lotteryDraw.success=true;


//判断H5环境下用户有没有登录
	$scope.wap = getUrlParam('wap');
	if(getUrlParam('uid')!=''){
		$scope.uid = getUrlParam('uid');
	}

//拿到后台返回的数据需要干什么，都写在这里，
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,eObj) {
		switch(eObj) {
			case "国庆获取数据":   //这里改值 ， 就是定义的接口名字

			$scope.list = data.map;
			//是渠道用户， 弹窗
             $scope.aloneQdShow=!data.success;
             $scope.tag=[];
             //$scope.list.investTotal=10000000000;

             //实时投资总额
             var texter="";
             texter +=$scope.list.investTotal;
             var arr=texter.split('');
             var length=9-arr.length;
             for(var i =0;i<length;i++){
             	arr.unshift(0);
             }
             $scope.investTotalTexts=arr.map(function(e){
             	return {name:e};
             });
             //--------------over

             	//不是渠道用户， 处理数据
             	//实时投资滚动
				var timer=null;
				if ($scope.list.investList.length > 2) {
					var commonHeight = $('.user-info .my-list').height()/2;
					clearInterval(timer);
					timer = setInterval(function() {
						$('.user-info .my-list').animate({'margin-top':'-' + commonHeight + 'px'},500,function() {
								var $clone = $('.user-info .my-list tr').eq(0);
								$('.user-info .my-list tr').eq(0).remove();
								$clone.appendTo('.user-info .my-list');
								$('.user-info .my-list').css('margin-top',0);
						});
					}, 3000);
				}

				//集字排行榜滚动
				var timer=null;
				if ($scope.list.ranking.length > 5) {
					var commonHeight = $('.font-band .my-band').height()/5;
					clearInterval(timer);
					timer = setInterval(function() {
						$('.font-band .my-band').animate({'margin-top':'-' + commonHeight + 'px'},500,function() {
								var $clone = $('.font-band .my-band tr').eq(0);
								$('.font-band .my-band tr').eq(0).remove();
								$clone.appendTo('.font-band .my-band');
								$('.font-band .my-list').css('margin-top',0);
						});
					}, 3000);
				}

				//现金红包奖励区间
				if($scope.list.investTotal<25000000){
					$('.cash-bag ul li').removeClass('active');
				}else if(25000000<$scope.list.investTotal && $scope.list.investTotal<50000000){
					$('.cash-bag ul li:eq(0)').addClass('active').siblings().removeClass('active');
				}else if(50000000<$scope.list.investTotal && $scope.list.investTotal<100000000){
					$('.cash-bag ul li:eq(1)').addClass('active').siblings().removeClass('active');;
				}else if($scope.list.investTotal>100000000){
					$('.cash-bag ul li:eq(2)').addClass('active').siblings().removeClass('active');;
				}

				/*var duo=23;
				var rong=24;
				var cai=25;
				var fu=26;*/
				//判断如果id没登陆，获取不到自己的集字也不会报错
				// var str='';
				// if($scope.list.word != undefined){
				// 	str=$scope.list.word.giftName;
				// }

				//集字排行榜


				// //console.log(str.indexOf('24'));  我的集字
				// if(str.indexOf('23')>=0){
				// 	$('.my-font .my-list span:eq(0)').removeClass('duo').addClass('duoyellow').parent('li').attr('class','active').find('i').html('已获得');
				// }else if(str.indexOf('24')>=0){
				// 	$('.my-font .my-list span:eq(1)').removeClass('rong').addClass('rongyellow').parent('li').attr('class','active').find('i').html('已获得');
				// }else if(str.indexOf('25')>=0){
				// 	$('.my-font .my-list span:eq(2)').removeClass('cai').addClass('caiyellow').parent('li').attr('class','active').find('i').html('已获得');
				// }
			break;
		}
	});

	//向后台取数据，定义名字     需要传uid就传，不传就为{};
resourceService.queryPost($scope,$filter('交互接口对照表')('国庆获取数据'),{
	uid:$scope.uid
},'国庆获取数据');


	function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
	var end='';
	var start='';




	// 根据传的值 确定弹哪个框， 不同的框定义不同变量
	// 弹出为true,则定义初始化为false;
	$scope.aloneGfShow=false;
	$scope.aloneJzShow=false;
$scope.aloneRuleShow=false;
$scope.onHelp = function (type) {

		switch(type) {
			case "关闭":
				$scope.aloneGfShow=false;
				$scope.aloneJzShow=false;
			break;
			case "瓜分投资规则":
				$scope.aloneGfShow=true;
			break;
			case "集字规则":
				$scope.aloneJzShow=true;
			break;
			case "未登录跳转":
				console.log(dd);
			break;

		}
	}
}])