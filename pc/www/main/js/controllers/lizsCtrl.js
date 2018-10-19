/* 静态页面_安全保障 */
mainModule.controller('aqbzCtrl', ['$rootScope','$scope','$location', function($rootScope,$scope,$location) {
	$rootScope.title = '安全保障-多融财富';
	if($location.$$search.menuName != undefined){
		var obj={};
		obj.name=$location.$$search.menuName;
		$rootScope.$broadcast('myEvent.WHDR_Ctrl',obj);
    }
}]);
/* 静态页面_多融概况 */
mainModule.controller('drgkCtrl', ['$rootScope','$scope','$location', function($rootScope,$scope,$location) {
	$rootScope.title = '公司简介_介绍,历程,文化-多融财富';
    $rootScope.keywords = '公司简介,公司介绍,公司历程,公司文化';
    $rootScope.description = '多融财富是上海银砖金融信息服务有限公司旗下互联网一个金融理财平台，多融财富风控团队由国内互联网金融企业创始人以及专业的金融服务机构管理层组成，具有丰富的金融产品研发与运营经验。多融财富一直专注“互联网+资产管理”的模式，解决银行、国企、上市公司等企业机构的资产管理问题。';
	if($location.$$search.menuName != undefined){
		var obj={};
		obj.name=$location.$$search.menuName;
		$rootScope.$broadcast('myEvent.WHDR_Ctrl',obj);
    }
    var mySwiper1 = new Swiper('.honor-box .swiper-container', {
        slidesPerView: 4,
        paginationClickable: true,
        loop: true
    });
	$('.honor-box .home-icons-prev').on('click', function(e){
		e.preventDefault();
		mySwiper1.swipePrev();
	});
	$('.honor-box .home-icons-next').on('click', function(e){
		e.preventDefault();
		mySwiper1.swipeNext();
	});
	var mySwiper2 = new Swiper('.partner-box .swiper-container', {
        slidesPerView: 4,
        paginationClickable: true,
        loop: true
    });
	$('.partner-box .home-icons-prev').on('click', function(e){
		e.preventDefault();
		mySwiper2.swipePrev();
	});
	$('.partner-box .home-icons-next').on('click', function(e){
		e.preventDefault();
		mySwiper2.swipeNext();
	});
}]);

/* 静态页面_联系我们 */
mainModule.controller('lxwmCtrl', ['$rootScope','$scope', function($rootScope,$scope) {
    $rootScope.title = '联系我们,多融财富,电话,地址-多融财富';
	$rootScope.keywords = '联系我们,联系多融财富,联系电话,联系地址';
    $rootScope.description='你知道多融财富在哪里吗？如果你想来公司咨询投资信息或者想了解更多的投资产品，可以联系我们，我们的联系通电话是021-80312696，公司地址：上海市虹口区四川北路859号中信广场41楼，当然你还可以关注我们的公众号，能随时了解新的投资信息。'
}]);
