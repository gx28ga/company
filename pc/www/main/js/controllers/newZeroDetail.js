/*lee 产品详情页*/
mainModule.controller('newZeroDetailCtrl', ['$rootScope','$scope', '$state', '$localStorage', 'resourceService','$filter','communicationService','$timeout','$location','ngDialog','$element','MAIN_MENU',function($rootScope,$scope, $state, $localStorage,resourceService,$filter,communicationService,$timeout,$location,ngDialog,$element,MAINMENU) {
	$filter('isLogin')($scope);
	$(window).scrollTop(0);
	MAINMENU.menuname('bill','menu');
	$scope.path = $localStorage.pathObj;
	$scope.title = '票据详情';
	$scope.portName = '投资记录';
	$scope.playSound=true;
	$scope.amount = 0;
	$scope.isShowIntroduce=true;
	$scope.isShowGuarantee=false;
	$scope.isShowInvest=false;
	$scope.isShowShouyi=false;
	$scope.isFinish = false;
	$scope.page={};
	$scope.page.pageOn=1;
	$scope.page.pageSize=10;
    delete $localStorage.inProfitProductList;
    $scope.redbag = false;
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
	// 未设置交易密码时--去安全认证页面设置
	$scope.setTradeCode = function() {
		ngDialog.closeAll();
		$filter('跳转页面')('','main.myAccount.recharge','main.myAccount.security','setTradeCode',null,{name:'账户管理',url:'main.myAccount.security'});
	};
    $scope.showPastList = false;
    $scope.investListPast = [];
    $scope.isNumCash=true;
	var isSubmin=true;
	var balance;
	var max=0;
	var maxItem={};

// $scope.page.totalPage = 50;
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type){
			case '新手灵活宝':
				if(data.success) {
					$scope.currentInfo = data.map.currentInfo;
				}
			break;
			case '新手灵活宝-投资记录':
				if (data.success) {
					$scope.page.pageOn = data.map.page.pageOn;
					$scope.pages = [];
					$scope.page.totalPage = data.map.page.totalPage;
					for(var i=0;i<parseInt(data.map.page.totalPage);i++){
						$scope.pages[i]=i+1;
					};
					$scope.recordList = data.map.page.rows;
				}
			break;
			case "新手灵活宝-确认投资":
				isSubmin = true;
				$scope.isShowOver=false;
				$scope.success = data.success;
				$scope.product.tpwd=null;
				$scope.redbag = false;
				if(data.success){
					if (data.flag) {
						$scope.redbag = true;
					} else {
						$scope.redbag = false;
					}
					$scope.pText = '恭喜您！投资成功！';
					$scope.statusCode = 'success';
					$scope.investTime = data.map.investTime;
					resourceService.queryPost($scope,$filter('交互接口对照表')('新手灵活宝'),{},'新手灵活宝');
					$scope.product.nowNum = null;
					$scope.nextInvestTime=data.map.investTime+86400000;
					$scope.threeInvestTime=$scope.nextInvestTime+86400000;
				}else{
					$scope.statusCode = 'error';
                    $scope.pText = data.errorMsg ;
					$scope.redbag = false;
				}
			break;
		};
	});

	$scope.selTYJ=false;
    $scope.onSelTyj = function (item) {
    	// 选体验金
    	for (var i = 0; i < $scope.tyjCoupons.length; i++) {
    		$scope.tyjCoupons[i].tyjCouponBool=false;
    	}
    	item.tyjCouponBool=true;
    	if($scope.product.nowNum<item.enableAmount){
    		$scope.product.nowNum=item.enableAmount;
    	}
    	$scope.TYJ=item;
    	if(item.enableAmount < $scope.product.nowNum){
    		$scope.selTYJ = true;
    	}
    };
    $scope.closeDialog = function(bool) {
		ngDialog.closeAll();
	};
	var $win = $(window);
	$win.on('load resize scroll', function() {
    	$('.mask-imgs').height($win.height()).width($win.width());
        $('.mask-imgs li').height($win.height()).width($win.width());
        $('.mask-imgs li img').css('max-height',$win.height()).css('max-width',$win.width());
    });

	//controller里对应的处理函数
	function renderFinish(){
    	if ($('.img-detail .imgs li').length <= 3) {
    		$('.img-detail .imgs ul').addClass('center-img');
    		$('.bill-turn-right').addClass('displaybtn');
    	}
		$('.bill-turn-left').addClass('displaybtn');
    	var lastindex = $('.img-detail .imgs li').length - 3;
		var mySwiper = new Swiper('.swiper-container', {
	        slidesPerView: 3,
	        paginationClickable: true,
	        loop: false
	    });

		$('.bill-turn-left').on('click', function(e){
			if ($('.bill-turn-left').hasClass('displaybtn')) {
				return;
			}
			e.preventDefault();
			mySwiper.swipePrev();
			$('.bill-turn-right').removeClass('displaybtn');
			if(mySwiper.slides[0].isActive()) {
				$('.bill-turn-left').addClass('displaybtn');
			} else {
				$('.bill-turn-left').removeClass('displaybtn');
			}
		});
	};
	$scope.$on('renderFi',renderFinish);
	// 忘记交易密码--去安全认证页面找回
	$scope.forgetTradeCode = function() {
		ngDialog.closeAll();
		$filter('跳转页面')('','main.myAccount.withdraw','main.myAccount.security','forgetTradeCode',null,{name:'账户管理',url:'main.myAccount.security'});
	};
	function goPage() {
	    var obj={};
        obj.pageOn =  $scope.page.pageOn;
        obj.pageSize = $scope.page.pageSize;
        resourceService.queryPost($scope,$filter('交互接口对照表')('新手灵活宝-投资记录'),obj,'新手灵活宝-投资记录');
	};
	$scope.onClick=function (type,event,num) {
		switch(type){
      		case "beforePage":
				if($scope.page.pageOn > 1){$scope.page.pageOn -=1;goPage()};
			break;
			case "currentPage":
				$scope.page.pageOn = event;goPage();
			break;
			case "nextPage":
				if($scope.page.pageOn < $scope.pages.length){$scope.page.pageOn +=1;goPage()};
			break;
			case "cut":
				if (parseInt($scope.product.nowNum) > parseInt($scope.currentInfo.leastPurchaseAmount)) {
					$scope.product.nowNum = parseInt($scope.product.nowNum);
					$scope.currentInfo.leastPurchaseAmount = parseInt($scope.currentInfo.leastPurchaseAmount);
					if($scope.product.nowNum < $scope.currentInfo.leastPurchaseAmount){
						$scope.product.nowNum = $scope.currentInfo.leastPurchaseAmount;
					}else{
						$scope.product.nowNum -= $scope.currentInfo.increasedAmount;
					}
				}
			break;
			case "add":
				if (parseInt($scope.product.nowNum) < parseInt($scope.currentInfo.maxPurchaseAmount) ){
					$scope.product.nowNum = parseInt($scope.product.nowNum);
					if($scope.product.nowNum > $scope.currentInfo.maxPurchaseAmount){
						$scope.product.nowNum = $scope.currentInfo.maxPurchaseAmount;
					}else{
						$scope.product.nowNum += $scope.currentInfo.increasedAmount;
					}
				}
			break;
			case "keyUpBalance":
					$scope.product.nowNum = parseInt($scope.product.nowNum);
					$scope.isNumCash=false;
					if(angular.equals($scope.product.nowNum,NaN)){
						$scope.isHideNowNum = true;
						$scope.product.nowNum = 0
						$scope.currentInfo.balance = balance;
					}else{
						$scope.isHideNowNum = false;
					};
					if($scope.product.nowNum > $scope.currentInfo.maxPurchaseAmount){
						$scope.product.nowNum = $scope.currentInfo.maxPurchaseAmount;
					}
					if(($scope.product.nowNum - $scope.currentInfo.leastPurchaseAmount)%$scope.currentInfo.increasedAmount != 0 ){
						$scope.product.nowNum -= ($scope.product.nowNum - $scope.currentInfo.leastPurchaseAmount)%$scope.currentInfo.increasedAmount;
					}
			break;
			case "项目介绍":
				change(event);
				$scope.isShowIntroduce=true;
				$scope.isShowGuarantee=false;
				$scope.isShowInvest=false;
			break;
			case "本息保障":
				change(event);
				$scope.isShowIntroduce=false;
				$scope.isShowGuarantee=true;
				$scope.isShowInvest=false;
			break;
			case "投资记录":
				change(event);
				$scope.isShowIntroduce=false;
				$scope.isShowGuarantee=false;
				$scope.isShowInvest=true;

				resourceService.queryPost($scope,$filter('交互接口对照表')('新手灵活宝-投资记录'),{
					pageOn:1,
					pageSize:10
				},'新手灵活宝-投资记录');
			break;
			case "立即投资":
				if ($localStorage.isRas == false) {
                    var forwarder = {
                        onAbout : function () {
                            window.open('/activitys/huaruiBank', '_blank');
                        },
                        onActivate : function () {
                            $state.go('main.createEscrowAccount');
                        }
                    };
                    $scope.forwarder = forwarder;
                    $filter('存管账户升级提示弹窗')($scope);
					return false;
				}
				$scope.isShowOver = true;
				$filter('投资确认弹窗-新手宝')($scope);
			break;
			case "登录":
				$filter("跳转页面")('denLu','main.newZeroDetail','dl');
			break;
			case "确认投资":
				if(isSubmin){
					isSubmin=false;
					var obj = {};
					obj.password = $scope.product.tpwd;
					obj.amount = $scope.product.nowNum;
					resourceService.queryPost($scope,$filter('交互接口对照表')('新手灵活宝-确认投资'),obj,'新手灵活宝-确认投资');
				}
			break;
		};
	};
	/*菜单切换*/
	var beforEvent=null;
	function change(event) {
		if(beforEvent == null){
			beforEvent = event.currentTarget;
			if(event.currentTarget.className == 'actived'){

			}else{
				event.currentTarget.parentNode.children[0].className='';
				event.currentTarget.className = 'actived';
			};
		}else if(beforEvent == event.currentTarget){

		}else{
			event.currentTarget.className = 'actived';
			beforEvent.className = '';
			beforEvent = event.currentTarget;
		};
	};
	/*×××××菜单切换结束××××××××××*/
	resourceService.queryPost($scope,$filter('交互接口对照表')('新手灵活宝'),{},'新手灵活宝');
	
    ///////////对应升级存管账户 Start/////////////
    $scope.onRecharge = function () {
        if ($localStorage.isRas == true) {
            $state.go('main.myAccount.recharge');
        } else {
            var forwarder = {
                onAbout : function () {
                    window.open('/activitys/huaruiBank', '_blank');
                },
                onActivate : function () {
                    $state.go('main.createEscrowAccount');
                }
            };
            $scope.forwarder = forwarder;
            $filter('存管账户升级提示弹窗')($scope);
        }
    };
    ///////////对应升级存管账户 End  /////////////
}])
