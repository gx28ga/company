mainModule.controller('doubleTwelveCtrl', ['$rootScope','$scope','$filter','resourceService','$timeout', function($rootScope,$scope,$filter,resourceService,$timeout) {
	$rootScope.title = '加息标与金蛋齐飞';
	$scope.login = false;
	if (!$filter('isRegister')().register) {
		$scope.login = false;
	} else {
		$scope.login = true;
	}
	$(".snow-canvas").snow();
	var $window = $(window)
	$window.on('load scroll', function() {
        var scrollTop = $window.scrollTop();
        if(scrollTop > 2300) {
            $(".gift").addClass('giftD')
        } 
        if(scrollTop > 1600) {
        	$timeout(function(){
	            $(".prizeone").addClass('cur');
            },300)
        	$timeout(function(){
	            $(".prizetwo").addClass('cur2');
            },1300)
        	$timeout(function(){
	            $(".prizethree").addClass('cur3');
            },2300)
        	$timeout(function(){
	            $(".prizefour").addClass('cur4');
            },3300)
        	$timeout(function(){
	            $(".prizefive").addClass('cur5');
            },4300)
        	$timeout(function(){
	            $(".prizesix").addClass('cur6');
            },5300)
        	$timeout(function(){
	            $(".prizeseven").addClass('cur7');
            },6300)
        } 
    });
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
	$scope.shuaxin = function(){
		resourceService.queryPost($scope,$filter('交互接口对照表')('获取抽奖次数'),{},'获取抽奖次数');
		resourceService.queryPost($scope,$filter('交互接口对照表')('抽奖记录'),{},'抽奖记录');
	};
	$scope.shuaxin();
	$(document).mouseenter(function(){
		$scope.shuaxin();
	})
	var timer = 0;
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type) {
			case '获取抽奖次数':
				$scope.countInfo = data.map;
			break;
			case '抽奖记录':
				if(data.success){
					$scope.myList = data.map.list;
					$scope.allList = data.map.allList;
					if ($scope.allList.length > 6) {
						clearInterval($rootScope.listTimer);
						$rootScope.listTimer = setInterval(function() {
							$('.person-list ul').animate({'margin-top':'-40px'},500,function() {
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
						}, 3000);
					}
				}
			break;
		}
	});
	jQuery(".over").mCustomScrollbar({
		theme:"yellow", //主题颜色  
        scrollButtons:{  
            enable:false //是否使用上下滚动按钮  
        },  
        autoHideScrollbar: true, //是否自动隐藏滚动条  
        scrollInertia :0,//滚动延迟  
        horizontalScroll : false,//水平滚动条  
        callbacks:{  
            onScroll: function(){alert(1)} //滚动完成后触发事件  
        }  
	});
	var defulat = [
		{
			left : 23 , 
			top : -160
		},
		{
			left : 376 , 
			top : -160
		},
		{
			left : 728 , 
			top : -160
		}
	];
	var Tool = {
		init : function(){
			Tool.eggEffect();
		}
		,eggEffect : function(){
			var li = $(".egg_list li") , 
				hammer = $("#hammer");
			li.data({za:true});

			li.each(function( i ){
				$(this).hover(function() {
					if($(this).data('za')){
						 hammer.show().css({
						 	left:defulat[i].left+'px',
						 	top:defulat[i].top+'px'
						});
					}
			    }).mouseout(function(){
			    	hammer.hide();
			    }).click(function(){
			    	Tool.eggStart($(this));
			    	Tool.eggClick($(this));
			    })
			})
		}
		,eggClick : function(obj) {
	        $(".hammer").animate({
	            "top": obj.position().top - 25,
	            "left": obj.position().left + 125
	        }, 30, function() {
	            $(".hammer").hide();
	            setTimeout(function(){
	            	$scope.$apply(function(){
	            		if(!$filter('isRegister')().register){
	            			$scope.noLogin = true;
	            		}else{
				            if($scope.countInfo.count == 0){
				            	if($scope.countInfo.lotteryCount == 5){//五次机会全部用完
				            		$scope.allUsed=true;
				            	}else if($scope.countInfo.lotteryCount < 5){//还有1-5次获得中奖的机会
				            		$scope.haiYouJH=true;
				            	}
				            }else if($scope.countInfo.count > 0){
				            	resourceService.queryPost($scope,$filter('交互接口对照表')('抽奖'),{},'抽奖');
				            	$scope.ZJL = true;
				            	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
									switch(type) {
										case '抽奖':
											if(data.success){
												$scope.prizeName = data.map.name;
											}
										break;
									}
								});
				            }
			            }
	            	})
	            }, 300);
	        });
		}
		,eggStart : function( obj ){
			obj.addClass("current");
			setTimeout(function(){
				Tool.eggRestart(obj);
			}, 200);
		}
		,eggRestart : function( obj ){
			obj.removeClass("current");
		}
	}
	Tool.init();
	$scope.ZJL = false;
	$scope.onClick = function( name ){
		switch(name){
			case '我的奖品':
				$scope.shuaxin();
				$scope.ZJL = false;
				$scope.JPLB = true;
			break;
			case '砸中了':
				$scope.ZJL = true;
			break;
			case '关闭弹框':
				$scope.ZJL = false;
				$scope.allPrize = false;
				$scope.JPLB = false;
				$scope.haiYouJH = false;
				$scope.allUsed = false;
				$scope.noLogin = false;
				$scope.shuaxin();
			break;
			case '查看全部奖品':
				$scope.shuaxin();
				$scope.allPrize = true;
			break;
			case '登录':
				$filter("跳转页面")('denLu','activity.doubleTwelve','dl');
			break;
		}
	}
	$scope.HDStatus = null;
	timeInit(null,{prev:'2016/11/25',start:'2016/12/06',end:'2016/12/20',getTime:false},function(){
	    $scope.HDStatus = 1;
	},function(){
	    $scope.HDStatus = 2;
	},function(){
	    $scope.HDStatus = 3;
	});
}]);