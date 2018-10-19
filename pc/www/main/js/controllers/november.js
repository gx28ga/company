


// mainModule
/*开发环境*/
       /* .filter('isOnLine', function() {
            return function() {
                var isOnLine = true;//fasle=静态调试；true=开发模式
                return isOnLine;
            }
        })
         .filter('交互接口对照表', function() {

            return function(name) {
                var portUrlMap = {

                    'CP181十一月下旬活动投资数据': '../../activity/getAnnualInvestSumByParam.do',
                    'end' : 'end'
                };

                return portUrlMap[name];
            }
        })*/


mainModule.controller('novemberCtrl', ['$rootScope','$scope','$location','$localStorage','$filter','resourceService',function($rootScope,$scope,$location,$localStorage,$filter,resourceService) {
	$rootScope.title = '天冷了，来个肾7补补身';
	if($location.$$search.toFrom != undefined || $location.$$search.recommCode!= undefined){
		$localStorage.webFormPath = $location.$$search;
	};
	$scope.login = 0;
	$scope.prizeList=false;
	$scope.investList=false;

	var banner = $('.banner') ,
		bannerbg = banner.find('.giftAll');
	function setBg(){
		var hash = new Date().getTime();
		banner.css({background:'url(../images/november-banner.png?'+hash+')'})
		banner.css('background-position','center center');
		bannerbg.css({background:'url(../images/nov-giftAll.gif?'+hash+')'})
		bannerbg.css('background-position','center center');

	}
	setBg();

	var lampbg = banner.find('.lamp') , onOff=true;
	function autoLamp(){
	　　time = setInterval(function(){
	　　    onOff = !onOff;
			lampbg.css('background-image','url('+(onOff?'../images/nov-lamp.png':'../images/nov-lampb.png')+')');
	　　},500);
	}
	autoLamp();

	function titleDown(){
		setTimeout(function(){
			$('.prize-wrapper h2').addClass('animated bounceInDown')
	　　},1000);
	}
	titleDown();

	function moreDown(){
		setTimeout(function(){
			$('.phoneBox .more').addClass('animated bounceInLeft')
	　　},2000);
	}
	moreDown();


		function imgGoUp(){
		setTimeout(function(){
			$('.modeA .prizea').addClass('goUp');
			$('.modeB .prizeb').addClass('goUp');
			$('.modeC .prizec').addClass('goUp');
			$('.modeD .prized').addClass('goUp');
			$('.modeE .prizee').addClass('goUp');
			$('.modeF .prizef').addClass('goUp');
	　　},4500);
	}
	imgGoUp();

	function getData(){
		if (!$filter('isRegister')().register) {
			$scope.login = 0;
			resourceService.queryPost($scope,$filter('交互接口对照表')('票据列表'),{
				order: 0,
				pageOn: 1,
				pageSize: 10,
				type: 2,
				statuses: [5],
				deadline:90
			},'90天票据列表');
		} else {
			$scope.login = 1;
			resourceService.queryPost($scope,$filter('交互接口对照表')('CP181十一月下旬活动投资数据'),{
				uid:$scope.uid,
			},'投资数据');
			resourceService.queryPost($scope,$filter('交互接口对照表')('票据列表'),{
				order: 0,
				pageOn: 1,
				pageSize: 10,
				type: 2,
				statuses: [5],
				deadline:90
			},'90天票据列表');

		}
	}
	getData();










	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type) {
			case '投资数据':
			if (data.success) {
				$scope.dataInfo = data.map;
				// $scope.userInvest = data.map.annualInvestAmount;
			var final = $scope.userInvest = data.map.annualInvestAmount;
			$scope.prize = null;
			$scope.prizeNext = null;
			var data=['京东E卡100元','京东E卡100元','京东E卡200元','京东E卡500元','京东E卡1000元','京东E卡1500元','Apple WATCH (38mm)',
			'Apple/苹果 iPad Air 2 (32G)','Apple iPad mini 4  32G','Apple iPhone 7 32G','Apple iPhone 7 Plus 128G'];

			$scope.difference = 0;

			if(Number(final) >=0 && Number(final) <5000){
				$scope.prizeNext = '京东E卡100元';
				$scope.difference= 5000 - final;
			}else if( Number(final) >= 5000 && Number(final) < 9100 ){
				$scope.prize = '京东E卡100元';
				$scope.prizeNext = '京东E卡200元';
				$scope.difference= 9100 - final;
			}else if( Number(final) >= 9100 && Number(final) < 21000){
				$scope.prize = '京东E卡200元';
				$scope.prizeNext = '京东E卡500元';
				$scope.difference= 21000 - final;
			}else if( Number(final) >= 21000 && Number(final) < 40000){
				$scope.prize = '京东E卡500元';
				$scope.prizeNext = '京东E卡1000元';
				$scope.difference= 40000 - final;
			}else if( Number(final) >= 40000 && Number(final) < 54000){
				$scope.prize = '京东E卡1000元';
				$scope.prizeNext = '京东E卡1500元';
				$scope.difference= 54000 - final;
			}else if( Number(final) >= 54000 && Number(final) < 74000){
				$scope.prize = '京东E卡1500元';
				$scope.prizeNext = 'Apple WATCH (38mm)';
				$scope.difference= 74000 - final;
			}else if( Number(final) >= 74000 && Number(final) < 100000){
				$scope.prize = 'Apple WATCH (38mm)';
				$scope.prizeNext = ' Apple iPad Air 2  32G';
				$scope.difference= 100000 - final;
			}else if( Number(final) >= 100000 && Number(final) < 127000){
				$scope.prize = ' Apple iPad Air 2  32G';
				$scope.prizeNext = 'Apple iPad mini 4  32G';
				$scope.difference= 127000 - final;
			}else if( Number(final) >= 127000 && Number(final) < 180000){
				$scope.prize = 'Apple iPad mini 4  32G';
				$scope.prizeNext = 'Apple iPhone 7 32G';
				$scope.difference= 180000 - final;
			}else if( Number(final) >= 180000 && Number(final) < 250000){
				$scope.prize = 'Apple iPhone 7 32G';
				$scope.prizeNext = 'Apple iPhone 7 Plus 128G';
				$scope.difference= 250000 - final;
			}else if( Number(final) >= 250000){
				$scope.prize = 'Apple iPhone 7 Plus 128G';
			}
				// console.log($scope.userInvest);
				// console.log($scope.prize);
				// console.log($scope.prizeNext);
			}

			break;

			case '90天票据列表':
				if(data.success){
				$scope.proList = data.map;
				$scope.listDatas = data.map.page.rows;
				}

			break;
		}
	});
    /*所有的点击事件*/
    $scope.onClick=function(name){
         switch(name){
            case '奖品清单弹框':
				$scope.prizeList=true;
				$('.prize-tan').show();
				setTimeout(function(){
					$('.prize-tan').find('.tan').removeClass('closeMode').addClass('openMode');
				});

            break;
            case '关闭奖品清单':
				// $scope.prizeList=false;
					$('.prize-tan').find('.tan').removeClass('openMode').addClass('closeMode');
					setTimeout(function(){
				    // $scope.investList=false;
				    	$('.prize-tan').hide();
				},500);

            break;
            case '投资列表弹框':
				$scope.investList=true;
				$('.investPro-tan').show();
				setTimeout(function(){
					$('.investPro-tan').find('.tan').removeClass('closeMode').addClass('openMode');
				});
            break;
            case '关闭投资列表弹框':
					$('.investPro-tan').find('.tan').removeClass('openMode').addClass('closeMode');
					setTimeout(function(){
				    	// $scope.investList=false;
				    	$('.investPro-tan').hide();
					},500);
					getData();

            break;
            case '登录':
				$filter("跳转页面")('denLu','activity.november','dl');
            break;

        };
    };
	var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        paginationClickable: true,
        loop: true
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