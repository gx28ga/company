/*首页*/
mainModule.controller('homeCtrl', [ '$rootScope','$scope', '$state', '$localStorage', 'resourceService','communicationService','$filter','$document','$timeout','$location','$animate','$interval',function($rootScope,$scope, $state, $localStorage,resourceService,communicationService,$filter,$document,$timeout,$location,$animate,$interval) {
	$filter('isLogin')($scope);
	// $filter('isHome')($rootScope);
	// resourceService.queryPost($scope,$filter('交互接口对照表')('国庆获取数据'),{},'国庆获取数据');
	$scope.showSummary=true;
	$rootScope.activeNav = 'home';
	if($localStorage.user != undefined){$scope.user = $localStorage.user;};
	$rootScope.title="多融财富—专注大型国企供应链金融的互联网金融平台";
	$scope.updateBargain={register:'',successfulTrade:''};

	$rootScope.isHome=true;

	// BizQQWPA.addCustom();
	// console.log(BizQQWPA);
	$scope.myInterval = 5000;
         // 轮播图数据初始化
    var slides = $scope.slides = [];
          // 添加轮播图源
    // 浏览器判定
    var browser = navigator.appName;
    var b_version = navigator.appVersion;
    var version = b_version.split(";");
    var trim_Version;
    if(version[1]!=undefined){
    	trim_Version = version[1].replace(/[ ]/g,"");
    }else{
    	trim_Version = version[0].replace(/[ ]/g,"");
    }
    if (browser == "Microsoft Internet Explorer" && trim_Version=="MSIE8.0") {
        $rootScope.isI8 = true;
        $('#video-wrap').html('<embed src="https://www.duorongcf.com/media/duorong2.webm" width="340" autostart="false" loop="false" hidden="no"/>');
    } else {
        $rootScope.isI8 = false;
        $('#video-wrap').html('<video preload="none" src="https://www.duorongcf.com/media/duorong2.webm" width="340" controls="controls"/></video>');
    	$('#video-wrap').css({'background':'url(/images/honor6.png)','height': '191px','width': '340px'});
    }
	$scope.setHotbar = function(pert) {
    	var bar = new ProgressBar.SemiCircle(container, {
		  strokeWidth: 5,
		  easing: 'easeInOut',
		  duration: 1400,
		  color: '#ffca68',
		  trailColor: '#edeeeb',
		  trailWidth: 5,
		  svgStyle: null
		});
		bar.animate(pert/100);
	};
	var barlist = [];
	$scope.setListbar = function() {
    	barlist[0] = new ProgressBar.SemiCircle(container0, {
		  strokeWidth: 5,
		  easing: 'easeInOut',
		  duration: 1400,
		  color: '#ffca68',
		  trailColor: '#edeeeb',
		  trailWidth: 5,
		  svgStyle: null
		});
		barlist[0].animate($scope.listDatas[0].pert/100);
		barlist[1] = new ProgressBar.SemiCircle(container1, {
		  strokeWidth: 5,
		  easing: 'easeInOut',
		  duration: 1400,
		  color: '#ffca68',
		  trailColor: '#edeeeb',
		  trailWidth: 5,
		  svgStyle: null
		});
		barlist[1].animate($scope.listDatas[1].pert/100);
		barlist[2] = new ProgressBar.SemiCircle(container2, {
		  strokeWidth: 5,
		  easing: 'easeInOut',
		  duration: 1400,
		  color: '#ffca68',
		  trailColor: '#edeeeb',
		  trailWidth: 5,
		  svgStyle: null
		});
		barlist[2].animate($scope.listDatas[2].pert/100);
	};
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type){
			case "产品列表":

				$scope.listDatas = data.map.otherPro;
				$scope.listDatas.push({});
				$scope.newUser = data.map.newhand;
				$scope.hotSales = data.map.mainPush;
				// $scope.hotSales.length = 1;
			break;
			case "首页主数据":
				$scope.user = data.map;
				if (data.map.realName == '' || data.map.realName == undefined) {
					$scope.user.userName = '亲爱的用户';
				} else {
					$scope.user.userName = data.map.realName;
				}
				$localStorage.user = $scope.user;
			break;
			case "注册成交人数":
				$scope.updateBargain = data.map;
			break;
			case "投资统计数据":
				if (data.success) {
					$scope.investTotal = data.map;
				}
			break;
			case "实时投资记录":
				if (data.success) {
					$scope.investList = data.map.page.rows;
				}
			break;
			case "公司新闻":
				if(data.map.urgentNotice[0] != undefined){
					$localStorage.summaryContents = $scope.summaryContents = data.map.urgentNotice[0].summaryContents;
					$localStorage.summaryTime = $scope.summaryTime = data.map.urgentNotice[0].create_time;
				}
				$scope.urgentNotice = data.map.urgentNotice;
				$scope.nowTimer=11;
				function setTimerOut() {
                    var timer = $timeout(
                        function() {
                            if($scope.nowTimer <= 0 ){
                            	// $scope.showSummary = false;
                            }else{
                                $scope.nowTimer-=1;
                                setTimerOut();
                            }
                        },
                        1000
                    );
                };
				setTimerOut();
				$scope.news = data.map.notice;
				$scope.helps = data.map.questions;
				$scope.notice = data.map.notice;
				//公司新闻----title   id   img
				$scope.newsTitle = data.map.news[0];
			break;
		};
	});

	/*立即投资*/
	$scope.onclickTouzi =  function(type,item) {
		switch(type){
			case "xinShou":
				$filter('跳转页面')(type,'main.home','main.billDetail',item);
			break;
			case "热销":
				$filter('跳转页面')(type,'main.home','main.billDetail',item);
			break;
			case "新闻":
				$filter('跳转页面')(type,'main.home','main.jt.GSXW',item,'多融新闻',{name:'多融新闻',url:'main.guarantee'});
			break;
		};
	};

	if($localStorage.user != undefined){
		resourceService.queryPost($scope,$filter('交互接口对照表')('Home主数据'),{},'首页主数据');
	}

	resourceService.queryPost($scope,$filter('交互接口对照表')('产品列表'),{},'产品列表');
	resourceService.queryPost($scope,$filter('交互接口对照表')('公司新闻'),{},'公司新闻');
	resourceService.queryPost($scope,$filter('交互接口对照表')('投资统计数据'),{},'投资统计数据');
	resourceService.queryPost($scope,$filter('交互接口对照表')('实时投资记录'),{},'实时投资记录');

	$scope.balanceShowType='隐藏';
	$scope.showBalance=true;
	$scope.onClickBalanceShow=function(event){
		if(event.target.innerText == '隐藏'){$scope.showBalance=false;$scope.balanceShowType='显示账户余额';}else{$scope.showBalance=true;$scope.balanceShowType='隐藏';};
	};
	/*退出*/
	$scope.userOut = function (type) {
		$filter('清空缓存')();
		resourceService.queryPost($scope,$filter('交互接口对照表')('退出接口'),{},'退出');
	};


	/*点击登录注册*/
	$scope.gotoLoginPage = function (type) {
		$filter("跳转页面")(type,'main.home','dl');
	};

	var $window = $(window),
		$up = $('.float-window .up');
	$window.on('load scroll', function() {
        var winHeight = $window.height(),
            scrollTop = $window.scrollTop();
        if(scrollTop > winHeight/2) {
            $up.show();
        } else {
            $up.hide();
        }
    });
	$scope.gotoTop = function() {
        $('html,body').animate({scrollTop: 0}, 300);
	};

	var $featureImg = $('.feature-box li img');
	$featureImg.on('mouseover', function() {
		$(this).stop().animate({'margin-top':'-59px'},200);
	}).on('mouseout', function() {
		$(this).stop().animate({'margin-top':0},200);
	});

	var $investRecordBoxUl = $('.invest-record-box ul');

	clearInterval($rootScope.listTimer);
	$rootScope.listTimer = setInterval(function() {
		$('.invest-record-box ul').animate({'margin-top':'-40px'},500,function() {
			var $this = $(this),
				$li0 = $this.find('li').eq(0),
				$li1 = $this.find('li').eq(1),
				$li2 = $this.find('li').eq(2),
				$li3 = $this.find('li').eq(3),
				$li4 = $this.find('li').eq(4),
				$li5 = $this.find('li').eq(5);
			$li0.appendTo($this);
			$li1.appendTo($this);
			$li2.appendTo($this);
			$li3.appendTo($this);
			$li4.appendTo($this);
			$li5.appendTo($this);
			$this.css('margin-top',0);
		});
	}, 6000);
	$('.invest-record-box .con').on('mouseenter', function() {
		clearInterval($rootScope.listTimer);
	}).on('mouseleave', function() {
		clearInterval($rootScope.listTimer);
		$rootScope.listTimer = setInterval(function() {
			$('.invest-record-box ul').animate({'margin-top':'-40px'},500,function() {
				var $this = $(this),
					$li0 = $this.find('li').eq(0),
					$li1 = $this.find('li').eq(1),
					$li2 = $this.find('li').eq(2),
					$li3 = $this.find('li').eq(3),
					$li4 = $this.find('li').eq(4),
					$li5 = $this.find('li').eq(5);
				$li0.appendTo($this);
				$li1.appendTo($this);
				$li2.appendTo($this);
				$li3.appendTo($this);
				$li4.appendTo($this);
				$li5.appendTo($this);
				$this.css('margin-top',0);
			});
		}, 6000);
	});
	var mySwiper1 = new Swiper('.honor-wrap .swiper-container', {
        slidesPerView: 3,
        paginationClickable: true,
        loop: true
    });
	$('.honor-wrap .home-icons-prev').on('click', function(e){
		e.preventDefault();
		mySwiper1.swipePrev();
	});
	$('.honor-wrap .home-icons-next').on('click', function(e){
		e.preventDefault();
		mySwiper1.swipeNext();
	});
	var mySwiper2 = new Swiper('.partner-box .swiper-container', {
        slidesPerView: 6,
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

}])
