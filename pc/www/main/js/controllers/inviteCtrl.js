mainModule.controller('inviteCtrl', ['$rootScope','$scope','$location','$localStorage','$filter','resourceService',function($rootScope,$scope,$location,$localStorage,$filter,resourceService) {
	$rootScope.title = '邀请小伙伴，理财更轻松';
	if ($('#share-script').length) {
		window.location.reload();
	}
	if ($('#invite-script').length) {
		$('#invite-script').remove();
	}
	if($location.$$search.toFrom != undefined || $location.$$search.recommCode!= undefined){
		$localStorage.webFormPath = $location.$$search;
	};
	$scope.login = 0;
	if (!$filter('isRegister')().register) {
		$scope.login = 0;
		window._bd_share_config = {
			"common":{
				"bdSnsKey":{},
				"bdText":"亲，知名国企控股的多融财富送钱了。银票&商票，无条件承兑，更有10万体验金+首投翻倍！https://www.duorongcf.com/zhuce?recommCode=",
				"bdMini":"2",
				"bdMiniList":[],
				"bdPic":"",
				"bdStyle":"0",
				"bdSize":"32",
				"bdUrl": "https://www.duorongcf.com/zhuce?recommCode="
			},
			"share":{}
		};
		if ($('#invite-script').length) {
			$('#invite-script').remove();
		}
		with(document)0[$('<script id="invite-script" src="static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)+'"></script>').appendTo('body')];
	} else {
		$scope.login = 1;
	}

	$scope.gotoPageLogin = function() {
		$filter("跳转页面")('denLu','activity.invite','dl');
	};

	$scope.scrollBot = function() {
		$(window).scrollTop(1000+$('.list-wrap').height());
	};

	if($localStorage.user != undefined){
		resourceService.queryPost($scope,$filter('交互接口对照表')('Home主数据'),{},'首页主数据');
	}

	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type) {
			case '首页主数据':
				if (data.success) {
					$localStorage.user = data.map;
				}
			break;
			case "好友互推列表":
				if (data.success) {
					$scope.user = data.map;
					if ($scope.user.list.length == 0) {
						$scope.nolist = true;
					} else {
						$scope.nolist = false;
					}
					window._bd_share_config = {
						"common":{
							"bdSnsKey":{},
							"bdText":"亲，知名国企控股的多融财富送钱了。银票&商票，无条件承兑，更有10万体验金+首投翻倍！https://www.duorongcf.com/zhuce?recommCode=" + $scope.user.recommendCode,
							"bdMini":"2",
							"bdMiniList":[],
							"bdPic":"",
							"bdStyle":"0",
							"bdSize":"32",
							"bdUrl": "https://www.duorongcf.com/zhuce?recommCode=" + $scope.user.recommendCode
						},
						"share":{}
					};
					if ($('#invite-script').length) {
						$('#invite-script').remove();
					}
					with(document)0[$('<script id="invite-script" src="static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)+'"></script>').appendTo('body')];
				} else {
					
				}
				break;
		}
	});
	if ($scope.login == 1) {
		resourceService.queryPost($scope, $filter('交互接口对照表')('好友互推列表'),{pageOn:1,pageSize:5},'好友互推列表');
	}

	$scope.copy = function() {
		if ($scope.login == 0) {
			$filter("跳转页面")('denLu','activity.invite','dl');
			return;
		}
		$('#mycopy').select(); // 选择对象
		document.execCommand("Copy"); // 执行浏览器复制命令
		alert("已复制好，可贴粘。");
	};

	var mySwiper = new Swiper('.swiper-container', {
        // nextButton: '.partners .swiper-button-next',
        // prevButton: '.partners .swiper-button-prev',
        slidesPerView: 6,
        paginationClickable: true
    });
	$('.partners .swiper-button-prev').on('click', function(e){
		e.preventDefault();
		mySwiper.swipePrev();
	});
	$('.partners .swiper-button-next').on('click', function(e){
		e.preventDefault();
		mySwiper.swipeNext();
	});

}])