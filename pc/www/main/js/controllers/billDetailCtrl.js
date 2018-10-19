
/*lee 产品详情页*/
mainModule.controller('billDetailCtrl', ['$rootScope','$scope', '$state', '$localStorage', 'resourceService','$filter','communicationService','$timeout','$location','ngDialog','$element','MAIN_MENU',function($rootScope,$scope, $state, $localStorage,resourceService,$filter,communicationService,$timeout,$location,ngDialog,$element,MAINMENU) {
	$filter('isLogin')($scope);
	$(window).scrollTop(0);
	MAINMENU.menuname('bill','menu');
	$scope.product = $localStorage.product;
	$scope.path = $localStorage.pathObj;
	$scope.title = '票据详情';
	$scope.portName = '投资记录';
	$scope.playSound=true;
	$scope.amount = 0;
	$scope.isShowIntroduce=true;
	$scope.isShowGuarantee=false;
	$scope.isShowInvest=false;
	$scope.ischufa=false;
	$scope.isShowShouyi=false;
	$scope.isFinish = false;
	$scope.bill= {};
    $scope.bill.pageOn = 1;
    $scope.bill.pageSize = 5;
    $scope.getThis = true;
    delete $localStorage.inProfitProductList;
    $scope.redbag = false;
    // delete $localStorage.protocolIds;
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


	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type){
			/* 武倩倩新手宝 case '新手体验标-判断是否可投':
				if(data.success) {
					$('#newBillbtn').css({background: "#fc763f" });
                    $('#newBillbtn').html("使用10000元体验金");
					$scope.isCanBillNew = true;
				}else if(data.errorCode == '1016'){
					$('#newBillbtn').css({background: "#bbbbbb" });
                    $('#newBillbtn').html("已投资");
					$scope.isCanBillNew = false;
				}
			break;
			case '新手体验标-投资':
				if(data.success) {
					$scope.isShowTS = true;
				}
			break;*/
			case '投资记录':
				if (data.success) {
					$scope.investList = data.map.page.rows;
					$scope.allUserNum = data.map.page.rows.length;
					$scope.bill = data.map.page;
					$scope.bill.pages = [];
					for(var i=0;i<parseInt($scope.bill.totalPage);i++){
						$scope.bill.pages[i]=i+1;
					};
				}
			break;
			case '续投资记录':
				if (data.success) {
					$scope.investListPast = data.map.page.rows;
					$scope.allUserNumPast = data.map.page.rows.length;
					$scope.billPast = data.map.page;
					$scope.totalPast = data.map.page.total;
					$scope.billPast.pages = [];
					for(var i=0;i<parseInt($scope.billPast.totalPage);i++){
						$scope.billPast.pages[i]=i+1;
					};
				}
			break;
			case '用户信息':
				if (data.success) {
					$localStorage.user = data.map;
				}
			break;
			case '新手标体验金':
				if (data.success) {
					$scope.tyjCoupons = data.map.list;
					if($scope.tyjCoupons.length>0){
						$scope.TYJ={};
						$scope.TYJ=$scope.tyjCoupons[0];
						var maxNum = Math.max.apply(Math,[$scope.tyjCoupons[0].amount,$scope.tyjCoupons[1].amount,$scope.tyjCoupons[2].amount]);
						for (var i = 0; i < $scope.tyjCoupons.length; i++) {
							if(maxNum == $scope.tyjCoupons[i].amount){
								$scope.tyjCoupons[i].tyjCouponBool = true;
								if($scope.tyjCoupons[i]){
									//首投

								}
							}else{
								$scope.tyjCoupons[i].tyjCouponBool =false;
							}
						};
						$scope.product.nowNum=$scope.tyjCoupons[0].enableAmount;
					}
				}
			break;
			case "票据详情":
				$localStorage.product = $scope.product = data.map.info;
				$scope.extendInfos = data.map.extendInfos;
				$scope.repair = data.map.repair;
				$scope.newHands = data.map.newHands;//wqq-接口新增字段--是否新手
				$scope.expireDate=data.map.info.expireDate;
				if($scope.repair != undefined){// 补标
					switch($scope.repair.type){
						case 1://=返现
							$scope.repairIsFanxian=true;
						break;
						case 2://=加息
							$scope.repairIsFanxian=false;
						break;
					};
				};

				if (data.map.projectList != undefined ) {
					if(data.map.projectList.length != 0){
						$scope.projectList = data.map.projectList;
						$scope.projectListData = true;
					}
				} else {
					$scope.projectListData = false;
				}
				if ($scope.product.fid != undefined) {
					$scope.showPast = true;
					resourceService.queryPost($scope,$filter('交互接口对照表')('投资记录'),{
						pid: $scope.product.fid,
						pageOn:1,
						pageSize:10
					},'续投资记录');
				} else {
					$scope.showPast = false;
				}
				if (data.map.info.type == 1){
					$rootScope.title = '新手标-多融财富';

					if($localStorage.user != undefined){
						resourceService.queryPost($scope,$filter('交互接口对照表')('用户可用优惠券'),{
							pid : $scope.product.id,
							amount:$scope.product.nowNum
						},'新手标体验金');
					}
				} else if (data.map.info.type == 2) {
					$scope.goPage($scope);
					$rootScope.title = '票据安选-多融财富';
				} else if (data.map.info.type == 3) {
					$scope.goPage($scope);
					$rootScope.title = '票据优选-多融财富';
				} else if(data.map.info.type == 5){//保理产品
					$scope.goPage($scope);
				}
				$scope.XQ = data.map;
				$scope.pics = data.map.picList;
				$scope.file=data.map.filePicList;//文件
				$scope.table=data.map.extendTableList;//表格
				$scope.doc=data.map.fileDocList;//文档

				if(data.map.funds != undefined){
					$scope.account={};
					$scope.account = data.map.funds;//用户资金
					balance = $scope.account.balance;
					if($scope.account.investAmount <= 0 && $scope.product.type == 1){
						$scope.isNewGay = true;
					}else{
						$scope.isNewGay = false;
					};
				}else{
					delete $localStorage.user;
				}
					$scope.product = data.map.info;
					var borrower = $filter('截取段落')($scope.product.borrower);
					var introduce = $filter('截取段落')($scope.product.introduce);
					var repaySource = $filter('截取段落')($scope.product.repaySource);
					var windMeasure = $filter('截取段落')($scope.product.windMeasure);
					$scope.product.borrower = borrower;
					$scope.product.introduce = introduce;
					$scope.product.repaySource = repaySource;
					$scope.product.windMeasure = windMeasure;
					// $scope.product.nowNum = $scope.product.leastaAmount;
					if($scope.product.establish != undefined){
						var date3 = $scope.product.establish - Date.parse(new Date());

						var day = Math.floor(date3/(24*3600*1000));
						var hh= Math.floor(date3/(3600*1000));
						if(day > 0){
							$scope.nowTimer = day+'天';
							// $scope.isFinish = true;
						}else
						if(day == 0&& hh > 1){
							$scope.nowTimer = hh+'小时';
							// $scope.isFinish = true;
							$scope.isBuTimer = true;
						}else
						if(day == 0&& hh < 1){
							$scope.nowTimer = '1小时内'
							// $scope.isFinish = true;
						}else
						if(hh < 0){
							$scope.nowTimer ='已结束';
							$scope.isFinish = true;
						}
					}else{
						$scope.nowTimer ='已结束';
						$scope.isFinish = true;
					};
				// if($filter('isRegister')().register&&$scope.product.isRepair==1&& $scope.isBuTimer == true&& $scope.product.surplusAmount <= 2000 ){
				if($filter('isRegister')().register&&$scope.product.isRepair==1&& $scope.repair != undefined){
  					$scope.ischufa=true;
				}
				if($scope.product.isRepair==1&& $scope.repair != undefined){
  					$scope.ischufaNoLogin=true;
				}
				// if($scope.product.isRepair!=1||$scope.isBuTimer == false||$scope.product.surplusAmount > 2000 ){
				if($scope.product.isRepair!=1||$scope.repair == undefined ){
  					$scope.ischufa=false;
				}
				if($scope.repair !=undefined){
					// if($scope.product.isRepair==1 && $scope.isBuTimer == true &&  $scope.product.surplusAmount <= 2000 && $scope.repair.type == 1){
					if($scope.product.isRepair==1 && $scope.repair.type == 1){
	  					$scope.isShowShouyi=true;
					}
				}
			break;
			case "关闭立即投资":
				$scope.isShowOver=false;
			break;
			case "确认投资":
				isSubmin = true;
				$scope.isShowOver=false;
				$scope.success = data.success;
				if(data.map&&data.map.cmallResult){
					$scope.task=data.map.cmallResult;//任务
				}
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
					resourceService.queryPost($scope,$filter('交互接口对照表')('票据详情'),{id: $scope.product.id},'票据详情');
					// if($scope.product.type!=1&&$scope.product.nowNum>=1000){//不是新手并且>=1000元才可抽字
					// 	resourceService.queryPost($scope,$filter('交互接口对照表')('国庆活动-投资抽字'),{},'国庆活动-投资抽字');
					// }
					$scope.investTime = data.map.investTime;
					$scope.nextInvestTime=data.map.investTime+86400000;
				}else{
					if (data.errorCode == '2001') {
						$scope.showForgetPwd = true;
					} else {
						$scope.showForgetPwd = false;
					}
					$scope.statusCode = $filter('确认投资服务器Error')(data.errorCode).classCode;
					// $scope.pText = $filter('确认投资服务器Error')(data.errorCode).text;
                    $scope.pText = data.errorCode == '6666' ? data.errorMsg : $filter('确认投资服务器Error')(data.errorCode).text;
					$scope.redbag = false;
				}
			break;
			// case "国庆活动-投资抽字":
			// 	if(data.success){
			// 		$scope.redbag = true;
			// 		$scope.success = true;
			// 		$scope.isShowOver = false;
			// 		$scope.data = data
			// 	}else{

			// 	}
			// break;
			case "用户可用优惠券":
				$scope.hb=null;
				max=0;
				if(data.success){
					$scope.HBList=[];
					$scope.QList=[];
					$scope.VIPList=[];
					$scope.ZSQList=[];
					$scope.FBQList=[];
					$scope.fristInvest=data.map;



					$scope.clickBox = true;
					for (var i = 0; i < data.map.list.length; i++) {
						switch(data.map.list[i].type){
							case 1://返现券
								data.map.list[i].sel=false;
								$scope.HBList.push(data.map.list[i]);
								getMaxCoupon(data.map.list[i].amount,'HBList',data.map.list[i]);
							break;
							case 2://加息
								data.map.list[i].sel=false;
								if(data.map.list[i].source==4){
									$scope.VIPList.push(data.map.list[i]);
									getMaxCoupon(data.map.list[i].raisedRates/100 / 365 * $scope.product.nowNum * $scope.product.deadline,'VIPList',data.map.list[i]);
								}else{
									if(data.map.list[i].maxProductDeadline!=0){
										$scope.ZSQList.push(data.map.list[i]);
										getMaxCoupon(data.map.list[i].raisedRates/100 / 365 * $scope.product.nowNum * $scope.product.deadline,'ZSQList',data.map.list[i]);
									}
									if(data.map.list[i].maxProductDeadline==0){
										$scope.QList.push(data.map.list[i]);
										getMaxCoupon(data.map.list[i].raisedRates/100 / 365 * $scope.product.nowNum * $scope.product.deadline,'QList',data.map.list[i]);
									}
								}
							break;
							case 4://翻倍券
								data.map.list[i].sel=false;
								if(data.map.list[i].source==0){
									$scope.FBQList.unshift(data.map.list[i]);
								}else{
									$scope.FBQList.push(data.map.list[i])
								}
								getMaxCoupon(($scope.product.rate/100 / 365 * $scope.product.nowNum * $scope.product.deadline) * data.map.list[i].multiple,'FBQList',data.map.list[i]);
							break;
						};

					}


					// if($scope.HBList.length>0){
					// 	$scope.clickBox=0;
					// }else if($scope.FBQList.length>0){
					// 	$scope.clickBox=2;
					// }else if($scope.QList.length>0){
					// 	$scope.clickBox=1;
					// }else{
					// 	$scope.clickBox=999;
					// };

					/*推荐优惠券过滤-特殊处理*/
					function getMaxCoupon(num,name,item){
						if(num>max){
							max=num;
							Qtrget = item;
							Qtrget.selName=name;
						}
					};
					if(Qtrget != null){
						switch(Qtrget.selName){
							case 'VIPList':
								$scope.clickBox=0;
							break;
							case 'HBList':
								$scope.clickBox=1;
							break;
							case 'QList':
								$scope.clickBox=2;
							break;
							case 'ZSQList':
								$scope.clickBox=3;
							break;
							case 'FBQList':
								$scope.clickBox=4;
							break;
						};
						Qtrget.sel=true;
					}else{

					}
					$scope.hb = Qtrget;
					// 推荐优惠券结束
					$scope.isShowOver = true;
					// $filter('投资确认弹窗')($scope);

					var coupon = getUrlParam('coupon'),
						Interest = getUrlParam('Interest'),
						double = getUrlParam('double') ,
						cpstartTime = 20161116 ,
						cpendTie = 20161130;

					$scope.cp181 = false; //是否在立即投资弹窗中显示 投资不使用加息券、红包券，即有机会获得肾7哟
					$scope.cp181Activity = false; //是否参加活动

					if(coupon=='false'){ //活动 2016年11月15日-11月30日
						$scope.HBList=[];
					}
					if(Interest =='false'){
						$scope.QList=[];
					}
					if(double =='false'){
						$scope.FBQList=[];
					}
					if(coupon!='false'||Interest !='false'||double !='false'){  //正常页面进来
						if($scope.product.deadline>=90){
							var oDate = new Date(), //实例一个时间对象；
								year = oDate.getFullYear(),
								month = oDate.getMonth()+1,
								date = oDate.getDate(),
								nowtime;
							month = month>9?month:'0'+month;
							date = date>9?date:'0'+month;

							nowtime = String(year)+String(month)+String(date);
							if(nowtime>=cpstartTime && nowtime<=cpendTie){
								$scope.cp181 = true;
							}
						}
					}else{
						$scope.cp181Activity = true;
						if($scope.hb){
							$scope.hb.type = null;
						}
					}
				}else{
				}
                // $filter('投资确认弹窗')($scope);
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

    $('.explain').on('mouseover', function() {
    	$(this).addClass('showexplain');
    }).on('mouseout', function() {
    	$(this).removeClass('showexplain');
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
		$('.bill-turn-right').on('click', function(e){
			if ($('.bill-turn-right').hasClass('displaybtn')) {
				return;
			}
			e.preventDefault();
			mySwiper.swipeNext();
			$('.bill-turn-left').removeClass('displaybtn');
			if(mySwiper.slides[lastindex].isActive()) {
				$('.bill-turn-right').addClass('displaybtn');
			} else {
				$('.bill-turn-right').removeClass('displaybtn');
			}
		});

		var mySwiper1 = new Swiper('.swiper-container1', {
			slidesPerView: 1,
	        paginationClickable: true
	    });

	    $('.img-detail .imgs li').on('click', function() {
	    	var index = $(this).index();
	    	if(!mySwiper1.browser.ie8) {
	    		mySwiper1.swipeTo(index, 1000, false);
	    	}
	    	// mySwiper1.swipeTo(index, 1000, false);
	    	$('.mask-imgs').eq(0).addClass('show-mask');
	    });
	};
	$scope.$on('renderFi',renderFinish);
    $('.mask-imgs .close').on('click', function() {
    	$(this).parents('.mask-imgs').removeClass('show-mask');
    });
	var mySwiper2 = new Swiper('.swiper-container2', {
		slidesPerView: 1,
        paginationClickable: true
    });
    /*补标说明*/
    $(".bubiaoBox").on('mousemove',function(){
    	$('.NNSM').css("display","block");
    })
    $(".bubiaoBox").on('mouseout',function(){
    	$('.NNSM').css("display","none");
    })
	$scope.onClickPastPage=function (type,pageNum,listtype) {
        switch(type){
            case "beforPage":
                if($scope.billPast.pageOn > 1){$scope.billPast.pageOn -=1;$scope.goPagePast($scope);};
            break;
            case "currentPage":
                $scope.billPast.pageOn = pageNum;$scope.goPagePast($scope);
            break;
            case "nextPage":
                if($scope.billPast.pageOn < $scope.billPast.pages.length){$scope.billPast.pageOn +=1;$scope.goPagePast($scope);};
            break;
        };
    };

    $scope.goPagePast = function (scope) {
        var obj={};
        obj.pageOn =  scope.billPast.pageOn;
        obj.pageSize = 10;
        obj.pid = scope.product.fid;
        resourceService.queryPost($scope,$filter('交互接口对照表')('投资记录'),obj,'续投资记录');
    };

	// 忘记交易密码--去安全认证页面找回
	$scope.forgetTradeCode = function() {
		ngDialog.closeAll();
		$filter('跳转页面')('','main.myAccount.withdraw','main.myAccount.security','forgetTradeCode',null,{name:'账户管理',url:'main.myAccount.security'});
	};


	/*倒计时结束*/
	/*加减金额*/
	$scope.winterest = 0;
	var Qtrget=null;
	// $scope.isShowShouyiDisabled=true;

	$scope.onClick=function (type,event,num) {
		switch(type){
			case "newbill":
				if($scope.isCanBillNew&&$scope.getThis){
					resourceService.queryPost($scope,$filter('交互接口对照表')('新手体验标-投资'),{},'新手体验标-投资');
					$scope.getThis = false;
				}
				if($localStorage.user == undefined){
					$state.go("dl");
				}
			break;
			case "补标":
				$scope.product.nowNum = parseInt($scope.product.surplusAmount);/*点击补标后输入框*/
				// $scope.isShowShouyiDisabled=false;
			break;
			case "cut":
				if (parseInt($scope.product.nowNum) > parseInt($scope.product.leastaAmount)) {
					$scope.product.nowNum = parseInt($scope.product.nowNum);
					$scope.product.leastaAmount = parseInt($scope.product.leastaAmount);
					if($scope.product.nowNum < $scope.product.leastaAmount){
						$scope.product.nowNum = $scope.product.leastaAmount;
					}else{
						$scope.product.nowNum -= $scope.product.increasAmount;
					}
				}
			break;
			case "add":
				if (parseInt($scope.product.nowNum) < $scope.product.maxAmount) {
					$scope.product.nowNum = parseInt($scope.product.nowNum);
					// $scope.account.balance = $scope.account.balance;
					if($scope.product.nowNum > $scope.product.maxAmount){
						$scope.product.nowNum = $scope.product.maxAmount;
					}else{
						$scope.product.nowNum += $scope.product.increasAmount;
					}
				}
			break;
			case "keyUpBalance":
					$scope.product.nowNum = parseInt($scope.product.nowNum);
					$scope.isNumCash=false;
					// $scope.account.balance = $scope.account.balance;
					if(angular.equals($scope.product.nowNum,NaN)){
						$scope.isHideNowNum = true;
						$scope.product.nowNum = 0
						$scope.account.balance = balance;
					}else{
						$scope.isHideNowNum = false;
					};
					if($scope.product.nowNum > $scope.product.maxAmount){
						$scope.product.nowNum = $scope.product.maxAmount;
					}
					if(($scope.product.nowNum - $scope.product.leastaAmount)%$scope.product.increasAmount != 0 ){
						$scope.product.nowNum -= ($scope.product.nowNum - $scope.product.leastaAmount)%$scope.product.increasAmount;
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
				$('.guarantee img').on('click', function() {
			    	var index = $(this).parents('td').index();
			    	if(!mySwiper2.browser.ie8) {
				    	mySwiper2.swipeTo(index, 1000, false);
				    }
			    	$('.mask-imgs').eq(1).addClass('show-mask');
			    });
			break;
			case "投资记录":
				change(event);
				$scope.isShowIntroduce=false;
				$scope.isShowGuarantee=false;
				$scope.isShowInvest=true;

			break;
			// case "关闭立即投资":
			// 	$scope.isShowOver = true;

			// break;

			case "立即投资":
				//如果未开通存管账户，弹出升级提示窗口
				if ($localStorage.isRas == false) {
                    var forwarder = {
                        onAbout : function () {
                            // $state.go('activitys.huaruiBank');
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
				// Qtrget=null;
				// $scope.hb=Qtrget;
				$scope.isShowOver = true;
				/*是否补标成立*/
				if($scope.product.surplusAmount == $scope.product.nowNum && $scope.repair != undefined){
					$scope.ischufa =true;
				}else{
					$scope.ischufa =false;
				}
				if($scope.product.type!=1){
					resourceService.queryPost($scope,$filter('交互接口对照表')('用户可用优惠券'),{
						pid : $scope.product.id,
						amount:$scope.product.nowNum
					},'用户可用优惠券');
				};
				$filter('投资确认弹窗')($scope);
			break;
			case "登录":
				$filter("跳转页面")('denLu','main.billDetail','dl');
			break;
			case "确认投资":
				if(isSubmin){
					isSubmin=false;
					var obj = {};
					obj.pid = $scope.product.id;
					obj.tpwd = $scope.product.tpwd;
					obj.amount = $scope.product.nowNum;

					if(Qtrget!=null){
						obj.fid = Qtrget.id;
					}else if ($scope.isNewGay) {
						obj.fid = $scope.TYJ.id;
					}
					/*else if ($scope.fristInvest.investCount==0&&$scope.FBQList.length>0) {
						obj.fid = $scope.FBQList[0].id;
					}*/

					if($scope.cp181Activity){
						obj.fid=null;
					};
					resourceService.queryPost($scope,$filter('交互接口对照表')('确认投资'),obj,'确认投资');
				}
			break;
			case "返回":
				$scope.isShowOver = true;
			break;
			case "券":
				$scope.hb = event;
				if(Qtrget == null){
					event.sel=true;
					Qtrget=event;
				}else if(Qtrget == event){
					if(Qtrget.sel){
						event.sel=false;
						Qtrget=null;
						$scope.hb = null;
					}else{
						event.sel=true;
						Qtrget=event;
					};
				}else{
					event.sel=true;
					Qtrget.sel=false;
					Qtrget=event;
				}
				$scope.isShowOver = true;
			break;
		};
	};
	$scope.goPage = function (scope) {
        var obj={};
        obj.pageOn =  scope.bill.pageOn;
        obj.pageSize = scope.bill.pageSize;
        obj.pid = scope.product.id;
        resourceService.queryPost($scope,$filter('交互接口对照表')(scope.portName),obj,scope.portName);
     };
	/*更换加息券*/
	function changeQuan(item) {
		// body...
		switch(item.type){
			case 2:
			break;
			case 3:
			break;
		};
	}
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
	if ($location.$$search.id == 2) {
		resourceService.queryPost($scope,$filter('交互接口对照表')('票据详情'),{id: 2,type: 1},'票据详情');
	} else {
		if($location.$$search.id != undefined){
			$localStorage.pathUrl = 'main.bankBillList';
			resourceService.queryPost($scope,$filter('交互接口对照表')('票据详情'),$location.$$search,'票据详情');
		}else{
			if ($scope.product!= undefined) {
				resourceService.queryPost($scope,$filter('交互接口对照表')('票据详情'),$scope.product,'票据详情');
			}else{
				// $state.go('main.bankBillList');
			}
		}
	}
	if($localStorage.user != undefined){
		resourceService.queryPost($scope,$filter('交互接口对照表')('Home主数据'),{},'用户信息');
	}else{
		$('#newBillbtn').html("请登录");
	}
	//武倩倩 新手宝需求   resourceService.queryPost($scope,$filter('交互接口对照表')('新手体验标-判断是否可投'),{},'新手体验标-判断是否可投');
	$.tips({ //提示文字
        scope : $scope,
        left : -130,
        top: 15,
        element : '.bill-detail-wrap'
    })

    ///////////对应升级存管账户 Start/////////////
    $scope.onRecharge = function () {
        if ($localStorage.isRas == true) {
            $state.go('main.myAccount.recharge');
        } else {
            var forwarder = {
                onAbout : function () {
                    // $state.go('activitys.huaruiBank');
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
