var mainModule = angular.module('mainModule', [ 'ngStorage' ]);
/*后台接口测试*/
mainModule.controller('serverTestCtrl', [ '$scope', '$rootScope', '$http', '$state', '$stateParams', '$localStorage','$location', 'resourceService','communicationService','$filter',function($scope, $rootScope, $http, $state, $stateParams, $localStorage,$location,resourceService,communicationService,$filter) {
	$rootScope.title="test";
	resourceService.queryPost($scope,$filter('交互接口对照表')('后台测试用'),{},'后台测试');
		$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
			switch(type){
				case "后台测试":
					if(data.success){
						$scope.test = data;
					}
				break;
			};
		});
}])


/*mian*/
mainModule.controller('mainCtrl', [ '$scope', '$rootScope', '$http', '$state', '$stateParams', '$localStorage','$location', 'resourceService','communicationService','$filter',function($scope, $rootScope, $http, $state, $stateParams, $localStorage,$location,resourceService,communicationService,$filter) {

	$scope.version='test 0.01';
	function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
	$rootScope.$on('$viewContentLoaded',function(event, toState, toParams, fromState, fromParams){
			$rootScope.isHome=false;
			$('body').animate({scrollTop:0},300);
			setTimeout(function(){
				var obj = {} , href = window.location.href;
				if(href.indexOf('dl')>-1 || href.indexOf('zhuce')>-1){
					return;
				}
				if( href.indexOf('bankBillList')>-1 ){
					$localStorage.pathUrl = 'main.bankBillList';
				}else if(href.indexOf('billDetail')>-1){
					$localStorage.pathUrl = 'main.billDetail';
					coupon = getUrlParam('coupon')||'';
					Interest = getUrlParam('Interest')||'';
					double = getUrlParam('double')||'';
					id = $localStorage.product.id;
					if(coupon=='' && Interest=='' && double =='' ){
						obj = {id:id};
					}else{
						obj = {id:id,coupon:coupon,Interest:Interest,double:double}
					}

					$localStorage.UrlParam = obj;
				}else if(href.indexOf('XSZY')>-1){
					$localStorage.pathUrl = 'main.jt2.XSZY';
				}else if(href.indexOf('AQBZ')>-1){
					$localStorage.pathUrl = 'main.jt.AQBZ';
				}else if(href.indexOf('DRGK')>-1){
					$localStorage.pathUrl = 'main.jt.DRGK';
				}else if(href.indexOf('accountHome')>-1){
					$localStorage.pathUrl = 'main.myAccount.accountHome';
				}else{
					$localStorage.UrlParam ={};
					$localStorage.pathUrl = 'main.home';
				}
			},300)
 	});
	$scope.state=$state.current.name;
	$rootScope.title="多融财富—专注大型国企供应链金融的互联网金融平台";
	$filter('isLogin')($scope);

	function setTime( demo  ,t  , callback ){
		demo.css({'transition-duration':t})
		demo.css({'-moz-transition-duration':t})
		demo.css({'-ms-transition-duration':t})
		demo.css({'-o-transition-duration':t})
		demo.css({'-webkit-transition-duration':t});
		if(callback){
			setTimeout(callback,(parseInt(t)+20));
		}
	}
	var clearTime = 0;
	$(window).scroll(function(){ //头部导航滚动效果
		try{
			var head = $('.header-wrapper') ,
				transition = head.find('.transition')
				height = head.height()+head.offset().top ,
				scrollTop = $(document).scrollTop();
			clearTimeout(clearTime);
			if(scrollTop>height){
				clearTime = setTimeout(function(){
					setTime(transition,'0s',function(){
						setTime(transition,'1s',function(){
							transition.addClass('hover');
						})
					})
					transition.addClass('fixed');
				},200)
			}else{
				transition.removeClass('fixed hover');
				/*clearTime = setTimeout(function(){
					transition.removeClass('hover');
					setTimeout(function(){
						transition.removeClass('fixed');
					},1050)
				},200);*/
			}
		}catch(e){
			
		}

	});

	$rootScope.activeNav = 'home';
	$rootScope.listFlag = false;
	$rootScope.listTimer = null;
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type){
			case "资产首页":
				if(data.success){
					$filter("clickTouZiGotoWhere")($scope,'main.myAccount.accountHome');
				}
			break;
		};
	});
	$scope.gotoTop = function() {
        $('html,body').animate({scrollTop: 0}, 300);
	};
	$scope.$on('MAIN_MENU.MYEVENT', function(event,name,type) {
		$rootScope.activeNav =name;
	});
	var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
	$scope.gotoLoginPage = function (type,event) {
		$rootScope.activeNav =type;
		switch(type){
			case "AX"://安选
				$scope.$broadcast('main.TOList',{},'安选');
				$filter("跳转页面")(type,'main.home','main.bankBillList');
			break;
			case "home"://
				$rootScope.activeNav ='home';
			break;
			case "新手指引"://优选
				localtion.href = "/html/XSZY.html";
			break;
			case "安全保障"://优选
				$filter('跳转页面')('','main.home','main.jt.AQBZ','安全保障',null,{name:'安全保障',url:'main.jt.AQBZ'});
			break;
			case "myAccount"://我的资产
				// resourceService.queryPost($scope,$filter('交互接口对照表')('我的资产首页数据'),{},'资产首页');
				$filter("clickTouZiGotoWhere")($scope,'main.myAccount.accountHome');
			break;
			case "帮助中心"://我的资产
				$localStorage.showQA = false;
				localtion.href = "/html/CJWT.html";
			break;
			case "理财课堂"://我的资产
				localtion.href = "/html/LCKT.html";
			break;
			case "新手指引"://我的资产
				localtion.href = "/html/XSZY.html";
			break;

			case "关于我们"://我的资产
				$filter('跳转页面')('','main.home','main.jt.DRGK','关于多融',null,{name:'关于多融',url:'main.jt.DRGK'});
			break;
			case "多融概况"://我的资产
				$filter('跳转页面')('','main.home','main.jt.DRGK','关于多融',null,{name:'关于多融',url:'main.jt.DRGK'});
			break;
			case "法律法规"://我的资产
				localtion.href = "/html/MZSM.html";
			break;
			case "联系我们"://我的资产
				$filter('跳转页面')('','main.home','main.jt.LXWM','LXWM',null,{name:'关于多融',url:'main.jt.LXWM'});
			break;

			case "投资安全"://我的资产
				$filter('跳转页面')('','main.home','main.jt.AQBZ','安全保障',null,{name:'安全保障',url:'main.jt.AQBZ'});
			break;
			default:
				$filter("跳转页面")(type,'main.home','dl');
			break;
		};
	};
/*退出*/
	$scope.userOut = function (event) {
		$filter('清空缓存')();
		resourceService.queryPost($scope,$filter('交互接口对照表')('退出接口'),{},'退出');

		if($location.$$url.indexOf('myAccount') != -1){
			$filter("跳转页面")('denLu','main.myAccount.accountHome','dl');
		};
	};
	var obj ={'pageOn':2,'pageSize':10,'order':0,'type':2};



}])


/* si 404页面 */
mainModule.controller('falseCtrl', ['$scope', function($scope) {
	$('.false-wrapper').height($(window).height());
}]);
// 图片弹窗
mainModule.controller('bigimgDialogCtrl', ['$rootScope','$scope','$filter','$location','$localStorage',function($rootScope,$scope,$filter,$location,$localStorage) {
	$scope.bigimgType = $localStorage.bigimgType;
}]);













