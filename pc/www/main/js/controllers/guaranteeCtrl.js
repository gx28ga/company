

/* 安全保障 */
mainModule.controller('guaranteeCtrl', ['$rootScope','$scope','$location','$localStorage','$filter','resourceService',function($rootScope,$scope,$location,$localStorage,$filter,resourceService) {
	$rootScope.title = '安全保障_多融财富票据理财_投资理财产品_p2p网贷平台投资靠谱吗,可靠吗-多融财富';
    $rootScope.keywords='安全保障,多融财富票据理财,投资理财产品,p2p投资靠谱吗,p2p投资可靠吗,p2p网贷平台可靠吗';
    $rootScope.description='p2p投资靠谱吗？p2p网贷平台可靠吗？这是很多投资者都想咨询的问题，很多投资者想通过多融财富票据理财来获取一定的收益，但是不知道选择哪种投资理财产品，也担心投资有风险。投资者不必担心，多融财富背靠大型国有企业，拥有强大财力支撑，资金通过第三方平台监管，严格风控，零逾期，同时还有凯曼律所提供法律支持，能为投资者的理财提供安全保障。'
	if($location.$$search.toFrom != undefined || $location.$$search.recommCode!= undefined){
		$localStorage.webFormPath = $location.$$search;
	};
	if($location.$$search.menuName != undefined){
		var obj={};
		obj.name=$location.$$search.menuName;
		$rootScope.$broadcast('myEvent.WHDR_Ctrl',obj);
    }
	if (!$filter('isRegister')().register) {
		$scope.login = false;
	} else {
		$scope.login = true;
	}
	$rootScope.activeNav = 'help';
	/*退出*/
	$scope.userOut = function (event) {
		$filter('清空缓存')();
		resourceService.queryPost($scope,$filter('交互接口对照表')('退出接口'),{},'退出');

		if($location.$$url.indexOf('myAccount') != -1){
			$filter("跳转页面")('denLu','main.myAccount.accountHome','dl');
		};
	};
	$scope.gotoLoginPage = function() {
		$filter("clickTouZiGotoWhere")($scope,'main.myAccount.accountHome');
	};

	var mySwiper = new Swiper('.swiper-container', {
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

	var $win = $(window);
	$win.on('load resize scroll', function() {
    	$('.mask-imgs').height($win.height()).width($win.width());
        $('.mask-imgs li').height($win.height()).width($win.width());
        $('.mask-imgs li img').css('max-height',$win.height()).css('max-width',$win.width());
    });

	var mySwiper2 = new Swiper('.mask-imgs-box', {
		slidesPerView: 1,
        paginationClickable: true
    });
	$('.guarantee td img').on('click', function() {
    	var index = $(this).parents('td').index();
    	if(!mySwiper2.browser.ie8) {
	    	mySwiper2.swipeTo(index, 1000, false);
	    }
    	$('.mask-imgs1').addClass('show-mask');
    });

    var mySwiper3 = new Swiper('.mask-imgs-box2', {
		slidesPerView: 1,
        paginationClickable: true
    });
	$('.contract img').on('click', function() {
    	var index = $(this).index();
    	if(!mySwiper3.browser.ie8) {
	    	mySwiper3.swipeTo(index, 1000, false);
	    }
    	$('.mask-imgs2').addClass('show-mask');
    });
    
    $('.mask-imgs .close').on('click', function() {
    	$(this).parents('.mask-imgs').removeClass('show-mask');
    });
}])
