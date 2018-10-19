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
                    'cp079获取投资数据': '../../activity/indexGQ.do',
                    'gq': '../../activity/indexGQ.do',
                    'end' : 'end'
                };

                return portUrlMap[name];
            }
        })

/* cp079 */
routerApp.controller('summerCtrl', ['$scope','$location','$filter','resourceService',function($scope,$location,$filter,resourceService) {
	$scope.aloneRuleShow = false;
 resourceService.queryPost($scope, $filter('交互接口对照表')('cp079获取投资数据'), {
                        uid:$scope.uid
                    },{name:'抽中的奖品'});
	$scope.wap = getUrlParam('wap');
	if(getUrlParam('uid')!=''){
		$scope.uid = getUrlParam('uid');
	}
	$scope.listLs=[];


	function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
	var end='';
	var start='';
	var zDate=[
		{strTitle:'7月4日--7月10日',dateNum:4,startDate:'2016-07-04 00:00:00',endDate:'2016-07-10 23:59:59'},
		{strTitle:'7月11日--7月17日',dateNum:11,startDate:'2016-07-11 00:00:00',endDate:'2016-07-17 23:59:59'},
		{strTitle:'7月18日--7月24日',dateNum:18,startDate:'2016-07-18 00:00:00',endDate:'2016-07-24 23:59:59'},
		{strTitle:'7月25日--7月31日',dateNum:25,startDate:'2016-07-25 00:00:00',endDate:'2016-07-31 23:59:59'}
	];
	var dDate=[];
	for (var i = 4; i <= 31; i++) {
		var obj={};
		obj.strTitle='7月'+i+'日';
		obj.dateNum = i;
		obj.startDate='2016-07-'+i+' 00:00:00';
		obj.endDate='2016-07-'+i+' 23:59:59';
		dDate.push(obj);
	};


	if($location.$$search.toFrom != undefined || $location.$$search.recommCode!= undefined){
		$localStorage.webFormPath = $location.$$search;
	};
	getStartEnd(true,15,'获取投资数据');
	/*
		活动页面主数据
	*/
	function getStartEnd(bool,topNum,type){
		if(bool){
		//当日
			start= $filter('date')(new Date(),"yyyy-MM-dd 00:00:00");
			$scope.end= end= $filter('date')(new Date(),"yyyy-MM-dd HH:mm:ss");

		}else{
		//本周
			var dayDate= new Date().getDate();
			if(dayDate>=4&&dayDate<=10){
				start=zDate[0].startDate;
				end=zDate[0].endDate;
			}else
			if(dayDate>=11&&dayDate<=18){
				start=zDate[1].startDate;
				end=zDate[1].endDate;
			}else if(dayDate>=18&&dayDate<=25){
				start=zDate[2].startDate;
				end=zDate[2].endDate;
			}else{
				start=zDate[3].startDate;
				end=zDate[3].endDate;
			}
			}
		resourceService.queryPost($scope,$filter('交互接口对照表')('cp079获取投资数据'),
		{
			type:1,
			uid:$scope.uid,
			topNum:topNum,
			startDate:start,
			endDate:end
		},
		type);
	}

/*
	排行榜记录
*/
	var dlodingBool=true;
	var zlodingBool=true;
	function getStartDates(bool,topNum,type){
		var nowdate = new Date().getDate();
		var mm= new Date().getMonth()+1;
		if(bool){
		//当日
			if(dlodingBool){
				dlodingBool=false;
				// $scope.dDatetitle=dDate[$scope.dpageNum-1].strTitle;
				for (var i = 0; i < dDate.length; i++) {
					if(dDate[i].dateNum < nowdate && mm !=8){
						resourceService.queryPost($scope,$filter('交互接口对照表')('cp079获取投资数据'),
						{
							type:1,
							uid:$scope.uid,
							topNum:topNum,
							startDate:dDate[i].startDate,
							endDate:dDate[i].endDate
						},type);
					}
					if(mm==8){
						resourceService.queryPost($scope,$filter('交互接口对照表')('cp079获取投资数据'),
						{
							type:1,
							uid:$scope.uid,
							topNum:topNum,
							startDate:dDate[i].startDate,
							endDate:dDate[i].endDate
						},type);
					}
				}
			}
		}else{
		//本周
			if(zlodingBool){
				zlodingBool=false;
				var arr =[];
				if(nowdate>=11&&nowdate<=18){
					arr.push(zDate[0]);
				}else if(nowdate>=18&&dayDate<=25){
					arr.push(zDate[0]);
					arr.push(zDate[1]);
				}else if(nowdate>=25&&dayDate<=31){
					arr.push(zDate[0]);
					arr.push(zDate[1]);
					arr.push(zDate[2]);
				}else if(mm == 8){
					arr=zDate;
				}
				for (var i = 0; i < arr.length; i++) {

					resourceService.queryPost($scope,$filter('交互接口对照表')('cp079获取投资数据'),
					{
						type:1,
						uid:$scope.uid,
						topNum:topNum,
						startDate:arr[i].startDate,
						endDate:arr[i].endDate
					},type);
				}
			}
		}
	};


	$scope.onResat=function(bool){
		getStartEnd(bool,15,'获取投资数据');
	};
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type) {
			case "获取投资数据":
				$scope.redbagFlag = data.flag;
				$scope.phList = data.map;
				clearInterval(timer);
				if (data.map.investList.length > 9) {
					timer = setInterval(function() {
						$('.my-list').animate({'margin-top':'-' + commonHeight + 'px'},500,function() {
								var $clone = $('.my-list tr').eq(0);
								$('.my-list tr').eq(0).remove();
								$clone.appendTo('.my-list');
								$('.my-list').css('margin-top',0);
						});
					}, 3000);
				}
			break;
		}
	});
	var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        paginationClickable: true
    });


    var nogiftarr = [1,2,3],
		commonHeight = $('.show-list').height()/5,
		timer;

    /*选择*/
	$scope.onClick = function (bool) {
		$scope.flag = bool;
		getStartEnd(bool,15,'获取投资数据');
	};
	$scope.onHelp = function (type) {
		$scope.aloneRuleShow=false;
		switch(type) {
			case "关闭":
				$scope.aloneRuleShow=false;
				$scope.hdTitle=null;
				$scope.hdText=null;
			break;
			case "活动说明":
				$scope.hdTitle='单标王 活动说明';
				$scope.hdText='活动期内，单个产品累计投资总额最高的用户，奖励58元红包；如发生多名用户累计投资总额相同时，则以最后一笔投资时间为准并决定获奖排名，先投先得；奖励将在投资成功后的工作日内发放。';
				$scope.hdText1=null;
			break;
			case "周活动说明":
				$scope.hdTitle='周排行榜 活动说明';
				$scope.hdText='1.	活动期内7月4日--7月10日、7月11日--7月17日、7月18日--7月24日、7月25日--7月31日，每周累计投资总额最高的前8名用户可获得奖品（参考奖品列表）。如遇到多名用户累计投资总额相同时，则以最后一笔投资时间为准并决定获奖排名，先投的用户将获此奖，后投的用户则延顺下一个奖项；平台将实时更新累计投资总额前20名用户的排名情况；'
				$scope.hdText1='2.	平台在7月11日、18日、25日、8月1日公布上一周的获奖名单，客服在公布后的3个工作日内联系获奖用户，核对用户信息和奖品信息并发放奖品；若3个工作日未能取得联系，则视为该用户放弃本次获奖资格；奖品的邮寄地址仅限中国大陆快递公司可覆盖区域，寄出后客服会告知快递单号。';
			break;
			case "日活动说明":
				$scope.hdTitle='日排行榜 活动说明';
				$scope.hdText='活动期内，每日累计投资总额最高的前3名用户，分别奖励68元、38元、18元红包；如发生多名用户累计投资总额相同时，则以最后一笔投资时间为准并决定获奖排名，先投先得；奖励将在榜单公布后的1-2个工作日内发放。';
				$scope.hdText1=null;
			break;
		}
	};

}])