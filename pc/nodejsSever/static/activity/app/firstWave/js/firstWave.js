var routerApp = angular.module('someApp', [
	'ngResource'
    ]);
routerApp.factory(
		'resourceService', 
		['$resource', '$http','$filter',function($resource, $http,$filter) {
	return new resourceService($resource, $http,$filter);
}]);
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
function setImgSize(){
    var  originWidth = 375
        ,ratio =$(window).width()/originWidth;
    $('.img-size').each(function(){
        var self = $(this);
        $.each(['height','width','left','right','bottom','top' , 'paddingTop' ,'lineHeight' , 'paddingLeft' , 'paddingRight' , 'paddingBottom','marginTop', 'marginLeft' , 'marginRight' , 'marginBottom'],function( i , str ){
            var num = self.attr('data-'+str); 
            if( num ){
                num = num*ratio/2+'px';
                self.css(str,num)
            }
        });
    });
}        	
routerApp.directive('repeatFinish',function(){
    return {
        link: function(scope,element,attr){
            setImgSize();
        }
    }
})
function resourceService(resource, http , $filter) {
	var actions = {
		'query':{
            method:'GET'
        },
        'queryPost':{
        	method:'POST'
        },
        'formGet':{
        	method:'GET',
        	async:false
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
routerApp.controller('firstWaveCtrl', ['$scope','$location','$filter','resourceService','$timeout','$http',function($scope,$location,$filter,resourceService,$timeout,$http) {
	function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
    $scope.http=window.location.origin;
    $scope.wap = getUrlParam('wap') == 'true' ? true : false;
	if (getUrlParam('uid') == '' || getUrlParam('uid') == undefined || getUrlParam('uid') == null) {
		$scope.login = false;
	} else {
		$scope.login = true;
	}
	if(getUrlParam('uid')!=''){
		$scope.uid = getUrlParam('uid');
	}
	$scope.parem = "uid="+$scope.uid+"&wap="+$scope.wap+"";
$scope.tan = []
$scope.gx = []
$scope.activity = { //初始化
	prvTime : '2017/01/06', //活动开始
	startTime : '2017/02/02',//活动结束
	endTime : '2017/02/10',//兑奖结束
	getPrize : '2017年1月30', //兑奖时间
	duihuanData: '2017年2月9日',
	status : 0 ,// 1活动进行中 2活动结束 3兑奖结束
	isrule : false , //规则
	isqudao : false , //渠道
	isZJ : false , //中奖啦
	isDJ : false , //兑奖恭喜
	isShouhuo : false , //收货信息
	isduoshou : false , //兑换提示
	isprize : false //我的奖品
}
timeInit({
	timeElem : null,
	prev : $scope.activity.prvTime,
	prevCallback : function(){
		$scope.activity.status = 1;
	},
	start : $scope.activity.startTime,
	startCallback : function(){
		$scope.activity.status = 2;
	},
	end : $scope.activity.endTime,
	endCallback : function(){
		$scope.activity.status = 3;
	},
	getTime : true
})
if($scope.activity.status == 0){
	setImgSize();
	$timeout(function(){
		$('.mask').css({display:'block'});
		$scope.activity.isqudao = true;
		$scope.tan = {top:'提示',btntext:'我知道了'};
		$timeout(function(){$(".qrdh-tan").addClass('cur');},50);
	},10)
	return;
}
	var getData = {
		activityStatus : function( fn ){
			$.ajax({
			    url : '/activity/status.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({uid:$scope.uid}),
			    success : function(data){
			    	if(data.success){
			    		$scope.activityTime = data.map;
			    		fn();
			    	}
			    }
			});
		},
		participate : function( fn ){
			$.ajax({
			    url : '/activity/participate.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({uid:$scope.uid}),
			    success : function(data){
					$scope.activity.isqudao = !data.flag;
			    	fn();
			    }
			});
		},
		allPrize : function( fn ){
			$.ajax({
			    url : '/activity/thxg/prizes.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({uid:$scope.uid,channel:'H5'}),
			    success : function(data){
					$scope.dataprize = data.map;
					$.each($scope.dataprize.prizes.cashCouponList,function(){
						this.imagePath = $scope.http+this.imagePath;
					})
					//debugger;
			    	fn(data);
			    }
			});
		},
		coinDetail : function( fn ){//我的奖品
			$.ajax({
			    url : '/activity/thxg/goldcoin-detail.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({uid:$scope.uid,incomeOrExpenses:'gotPrize'}),
			    success : function(data){
			    	if(data.success){
						$scope.coinDetail = data.map;
			    	}
			    	fn(data);
			    }
			});
		},
		memberRaffle : function( fn ){//用户抽奖
			$.ajax({
			    url : '/activity/thxg/member-raffle.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({uid:$scope.uid,channel:'H5'}),
			    success : function(data){
			    	fn(data);
			    }
			});
		},
		remainGoldcoin : function( fn ){//我的剩余钻石
			$.ajax({
			    url : '/activity/thxg/remain-goldcoin.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({uid:$scope.uid}),
			    success : function(data){
			    	if(data.success){
			    		$scope.surplusCoins = data.map.goldCoinCount;
			    		$scope.$apply();
			    	}
			    	fn(data);
			    }
			});
		}
	}
getData.activityStatus(function(){});
if($scope.login == true){
	getData.remainGoldcoin(function(){});//我的剩余钻石
	getData.participate(function(){//渠道
		if($scope.login == true){
			if($scope.activity.isqudao){
				setImgSize();
				$timeout(function(){$('.mask').css({display:'block'});$scope.activity.isqudao = true;$scope.$apply();},10)
				$scope.tan = {top:'提示',title:'敬请谅解！',btntext:'回到首页'};
				$timeout(function(){$(".qrdh-tan").addClass('cur');$scope.$apply();},50);
			}
		}
	});
}
getData.allPrize(function(){
	if($scope.login == false){//登录与非登录
		$('.myjh span,.myzs span').html('请<a href="http://app.duorongcf.com/dl">登录</a>后查看')
	}else{
		if($scope.activity.isqudao == false){
			$('.myjh span').html(''+$scope.dataprize.raffleChance+'次').addClass('islogin');
			$('.myzs span').html(''+$scope.dataprize.goldCoinCount+'').addClass('islogin');
		}
	}
});
$('.dhbtn').click(function(){
	if($scope.login == true){
		if($scope.activity.status == 1){
			getData.remainGoldcoin(function(){});//我的剩余钻石
			$.ajax({
			    url : '/activity/thxg/prizes.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({uid:$scope.uid,channel:'H5'}),
			    success : function(data){
			    	if(data.success){
						$scope.dataprize = data.map;
						$('.firstWave-wrapper').css({display:'none'});
						$('.firstWaveConvert-wrapper').css({display:'block',top:'0'});
						$.each($scope.dataprize.prizes.cashCouponList,function(){
							this.imagePath = $scope.http+this.imagePath;
						});
						setTimeout(function(){
							setImgSize();
						}, 800);
						$scope.$apply();
			    	}
			    }
			});
		}
		if($scope.activity.status == 2){
			$('.firstWaveEnd-wrapper').css({display:'none'})
			$('.firstWaveConvert-wrapper').css({display:'block'})
			getData.remainGoldcoin(function(){});//我的剩余钻石
			$.ajax({
			    url : '/activity/thxg/prizes.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({uid:$scope.uid,channel:'H5'}),
			    success : function(data){
			    	if(data.success){
						$scope.dataprize = data.map;
						$('.firstWave-wrapper').css({display:'none'});
						$('.firstWaveConvert-wrapper').css({display:'block',top:'0'});
						$.each($scope.dataprize.prizes.cashCouponList,function(){
							this.imagePath = $scope.http+this.imagePath;
						});
						setTimeout(function(){
							setImgSize();
						}, 800);
						$scope.$apply();
			    	}
			    }
			});
		}
		if($scope.activity.status == 3){
			$('.firstWaveConvert-wrapper').css({display:'none'})
			$timeout(function(){
				$('.mask2').css({display:'block'});
				$scope.activity.isdjend = true;
				$scope.tan = {top:'提示！',btntext:'登录'};
				$timeout(function(){$(".djend-tan").addClass('cur');},50);
			},10)
		}
	}else{
		$timeout(function(){
			$('.mask').css({display:'block'});
			$scope.activity.isqudao = true;
			$scope.tan = {top:'提示！',btntext:'登录'};
			$timeout(function(){$(".qrdh-tan").addClass('cur');$scope.apply();},50);
		},10)
	}
})
$('.gzbtn').click(function(){//活动规则
	$timeout(function(){
		$('.mask').css({display:'block'});
		setImgSize();
		$scope.activity.isrule = true;
		$timeout(function(){$(".rule-tan").addClass('cur');},50);
	},10)
})
$('.jpbtn').click(function(){//我的奖品
	if($scope.login == true){
		$('.mask').css({display:'block'});$scope.activity.isprize = true;$(".prize-tan").css({opacity:1});
		setImgSize();
		$scope.myPrize = null;
		$scope.$apply();
		$.ajax({
		    url : '/activity/thxg/goldcoin-detail.do' , 
		    type : 'POST',
		    dataType : 'json',
		    contentType:'application/json;charset=UTF-8',
		    processData : false,
		    data : JSON.stringify({uid:$scope.uid,incomeOrExpenses:"gotPrize",pageOn:1,pageSize :10000}),
		    success : function(data){
		    	if(data.success){
			    	$scope.myPrize = data.map.page.rows;
					$scope.$apply();
		    	}
		    }
		});
	}else{
		$timeout(function(){
			setImgSize();
			$('.mask').css({display:'block'});
			$scope.activity.isqudao = true;
			$scope.tan = {top:'提示！',btntext:'登录'};
			$timeout(function(){$(".qrdh-tan").addClass('cur');},50);
		},10)
	}
	
})
// var parem = "uid="+$scope.uid+"&wap=true";
$('#touzi').click(function(){//首页摇奖按钮
	if(getUrlParam('wap') == 'true'){//h5已登录
		window.location.href = 'http://app.duorongcf.com/main/bankBillList';
	}else{
		window.location.href = 'jump://page=2?';
	}
})
$scope.ZJL=[];
$scope.obj=[];
$scope.prize=[];
//摇奖按钮
$('#yaojiang').click(function(){
	if($scope.login == false){
		$timeout(function(){
			setImgSize();
			$('.mask').css({display:'block'});
			$scope.activity.isqudao = true;
			$scope.tan = {top:'提示！',btntext:'登录'};
			$timeout(function(){$(".qrdh-tan").addClass('cur');$scope.apply();},50);
		},10)
	}else{
		if($scope.activity.status == 1){
			getData.allPrize(function(){
			if($scope.dataprize.raffleChance > 0){//恭喜您，中奖了
				$.ajax({
				    url : '/activity/thxg/member-raffle.do' , 
				    type : 'POST',
				    dataType : 'json',
				    contentType:'application/json;charset=UTF-8',
				    processData : false,
				    data : JSON.stringify({uid:$scope.uid,channel:'H5'}),
				    success : function(data){
				    	if(data.success){
							$scope.dataprizea = data.map;
								$timeout(function(){
									setImgSize();
									$('.mask').css({display:'block'});
									$scope.activity.isZJ = true;
									$scope.ZJL = $scope.dataprizea.raffleResult.icons[0];
									setImgSize();
									$scope.gx = {top:'提示！',btntext:'继续摇'};
									$timeout(function(){$(".gxn-tan").addClass('cur');$scope.$apply();},50);
									$scope.$apply();
									getData.allPrize(function(){
										$('.myjh span').html(''+$scope.dataprize.raffleChance+'次').addClass('islogin');
										$('.myzs span').html(''+$scope.dataprize.goldCoinCount+'').addClass('islogin');
									})
								},10)
						}else if(data.errorCode == "9997"){
							$timeout(function(){
								setImgSize();
								$('.mask').css({display:'block'});
								$scope.activity.isqudao = true;
								$scope.tan = {top:'提示！',btntext:'投资获取'};
								$timeout(function(){$(".qrdh-tan").addClass('cur');$scope.$apply();},50);
							},10)
						}
				    }
				});
			}else{
				$timeout(function(){
					setImgSize();
					$('.mask').css({display:'block'});
					$scope.activity.isqudao = true;
					$scope.tan = {top:'提示！',btntext:'投资获取'};
					$timeout(function(){$(".qrdh-tan").addClass('cur');$scope.$apply();},50);
				},10)
			}
			});
		}
	}
})
$scope.duoshouu = function(e){
	$('.mask').css({display:'block'});
	$scope.activity.isduoshou = true;
	$timeout(function(){$(".qrdh-tan").addClass('cur')},50);
	$scope.prize = e;
	setImgSize();
	$scope.prize.top='奖品兑换';
	$scope.prize.btntext='确认兑换';
	$scope.prize.name = e.giftName;
	$scope.prize.coin ='需消耗'+e.needGoldCoin+'钻石';$(".qrdh-tan").addClass('cur');
}
$('.colse').click(function(){
	$('.mask').css({display:'none'});$('.mask2').css({display:'none'});
	$timeout(function(){$(".rule-tan,.prize-tan,.qrdh-tan,.gxn-tan,.shouhuo-tan,.djend-tan").removeClass('cur')},10)
	$timeout(function(){$scope.activity.isrule = false;$scope.activity.isprize = false;$scope.activity.isShouhuo = false;$scope.activity.isqudao = false;$scope.activity.isZJ = false;$scope.activity.isduoshou = false;$scope.activity.isDJ = false;$scope.activity.isdjend = false; $scope.$apply();},610);
	if($scope.islogin == true){
		getData.allPrize(function(){
			$('.myjh span').html(''+$scope.dataprize.raffleChance+'次').addClass('islogin');
			$('.myzs span').html(''+$scope.dataprize.goldCoinCount+'').addClass('islogin');
		});
	}
})
$('.iknow').click(function(){
	$('.mask').css({display:'none'});
	$timeout(function(){$(".rule-tan,.prize-tan,.qrdh-tan,.gxn-tan,.shouhuo-tan,.djend-tan").removeClass('cur')},10)
	$timeout(function(){$scope.activity.isrule = false;$scope.activity.isprize = false;$scope.activity.isShouhuo = false;$scope.activity.isqudao = false;$scope.activity.isZJ = false;$scope.activity.isduoshou = false;$scope.activity.isDJ = false;$scope.activity.isdjend = false; $scope.$apply();},610);
	if($scope.islogin == true){
		getData.allPrize(function(){
			$('.myjh span').html(''+$scope.dataprize.raffleChance+'次').addClass('islogin');
			$('.myzs span').html(''+$scope.dataprize.goldCoinCount+'').addClass('islogin');
		});
	}
})
$('.gxnbtn').click(function(){
	if( $scope.gx.btntext=="继续摇"){
		$('.mask').css({display:'none'});
		$timeout(function(){$(".rule-tan,.prize-tan,.qrdh-tan,.gxn-tan,.shouhuo-tan,.djend-tan").removeClass('cur')},10)
		$timeout(function(){$scope.activity.isrule = false;$scope.activity.isprize = false;$scope.activity.isShouhuo = false;$scope.activity.isqudao = false;$scope.activity.isZJ = false;$scope.activity.isduoshou = false;$scope.activity.isDJ = false;$scope.activity.isdjend = false; $scope.$apply();},610);
		if($scope.islogin == true){
			getData.allPrize(function(){
				$('.myjh span').html(''+$scope.dataprize.raffleChance+'次').addClass('islogin');
				$('.myzs span').html(''+$scope.dataprize.goldCoinCount+'').addClass('islogin');
			});
		}
	}
})
$('.closedh').click(function(){
	$('.mask').css({display:'none'});
	$timeout(function(){$(".rule-tan,.prize-tan,.qrdh-tan,.gxn-tan,.shouhuo-tan,.djend-tan").removeClass('cur')},10)
	$timeout(function(){$scope.activity.isrule = false;$scope.activity.isprize = false;$scope.activity.isShouhuo = false;$scope.activity.isqudao = false;$scope.activity.isZJ = false;$scope.activity.isduoshou = false;$scope.activity.isDJ = false;$scope.activity.isdjend = false; $scope.$apply();},610);
	if($scope.islogin == true){
		getData.allPrize(function(){
			$('.myjh span').html(''+$scope.dataprize.raffleChance+'次').addClass('islogin');
			$('.myzs span').html(''+$scope.dataprize.goldCoinCount+'').addClass('islogin');
		});
	}
})
$('#qrdhbtn').click(function(){
	$('.mask').css({display:'none'});
	$timeout(function(){$(".rule-tan,.prize-tan,.qrdh-tan,.gxn-tan,.shouhuo-tan,.djend-tan").removeClass('cur')},10)
	$timeout(function(){$scope.activity.isrule = false;$scope.activity.isprize = false;$scope.activity.isShouhuo = false;$scope.activity.isqudao = false;$scope.activity.isZJ = false;$scope.activity.isduoshou = false;$scope.activity.isDJ = false;$scope.activity.isdjend = false; $scope.$apply();},610);
	if($scope.islogin == true){
		getData.allPrize(function(){
			$('.myjh span').html(''+$scope.dataprize.raffleChance+'次').addClass('islogin');
			$('.myzs span').html(''+$scope.dataprize.goldCoinCount+'').addClass('islogin');
		});
	}
})
$scope.isadress = true;
$scope.aa = function(obj){
	$.ajax({
	    url : '/activity/thxg/exchange-prize.do' , 
	    type : 'POST',
	    dataType : 'json',
	    contentType:'application/json;charset=UTF-8',
	    processData : false,
	    data : JSON.stringify({uid:$scope.uid,prizeId:obj.id}),
	    success : function(data){
	    	if(data.success){//用钻石兑换
	    		$scope.exchange = data.map;
	    		$(".qrdh-tan").removeClass('cur');$scope.$apply();
	    		$timeout(function(){
	    			setImgSize();
					$scope.activity.isDJ = true;
					$scope.tan = {top:'提示！',btntext:'投资获取'};
					$timeout(function(){$(".gxn-tan").addClass('cur');$scope.$apply();},50);
				},10)
				getData.remainGoldcoin(function(){});//我的剩余钻石
	    		$('.qrdhbtn').click(function(){
					var input = $('.shouhuo-tan').find('input');
					var val1 = $.trim(input.eq(0).val()),
						val2 = $.trim(input.eq(1).val()),
						val3 = $.trim(input.eq(2).val());
					if(val1.length<2){
						$('p.error').html('请输入有效的联系人');
						return;
					}
					if(!(/^1[34578]\d{9}$/.test(val2))){
						$('p.error').html('手机号码有误，请重填');
						return;
					}
					$('p.error').html('');
					if($scope.isadress){
						$scope.isadress = false;
						$.ajax({
						    url : '/activity/thxg/address-add.do' , 
						    type : 'POST',
						    dataType : 'json',
						    contentType:'application/json;charset=UTF-8',
						    processData : false,
						    data : JSON.stringify({uid:$scope.uid,name:val1,phoneNumber:val2,address:val3}),
						    success : function(data){
						    	if(data.success){
									$('#cg').html('填写成功');
									$timeout(function(){
										$(".mask").css({display:'none'});
										$scope.$apply();
										$scope.isadress = true;
									},1000);
						    	}
						    }
						});
					}
				})
	    	}else{
	    		if(data.errorCode ==9997){$(".rule-tan,.prize-tan,.qrdh-tan,.gxn-tan,.shouhuo-tan").removeClass('cur');
					setImgSize();
					$scope.activity.isduoshou = true;
					$scope.prize.top='奖品兑换';
					$scope.prize.name='抱歉!您对换的奖品,已被抢兑一空';
					$scope.prize.coin='工作人员正在加紧补货中';
					$scope.prize.btntext='我知道了';$(".qrdh-tan").addClass('cur');
					$scope.$apply();
				}else if(data.errorCode ==9996){$(".rule-tan,.prize-tan,.qrdh-tan,.gxn-tan,.shouhuo-tan").removeClass('cur');
					setImgSize();
					$scope.activity.isduoshou = true;
					$scope.prize.top='奖品兑换';
					$scope.prize.name='真遗憾!';
					$scope.prize.coin='钻石不足,无法兑换';
					$scope.prize.btntext='我知道了';$(".qrdh-tan").addClass('cur');
					$scope.$apply();
				}else if(data.errorCode ==9998){//兑换日期已过。
				}
	    	}
	    }
	});
}


$scope.addinfo = function(){//填写收货信息
	$(".rule-tan,.prize-tan,.qrdh-tan,.gxn-tan").removeClass('cur');
	$timeout(function(){$(".rule-tan,.prize-tan,.qrdh-tan,.gxn-tan").removeClass('cur');},10)
	$timeout(function(){
		setImgSize();
		$scope.activity.isShouhuo = true;
		$timeout(function(){$(".shouhuo-tan").addClass('cur');},50);
	},10)
}
$('.page2 .top .getmore').click(function(){//获取更多
	getData.allPrize(function(){
		$('.myjh span').html(''+$scope.dataprize.raffleChance+'次').addClass('islogin');
		$('.myzs span').html(''+$scope.dataprize.goldCoinCount+'').addClass('islogin');
	});
	$('.firstWave-wrapper').css({display:'block'});
	$('.firstWaveConvert-wrapper').css({display:'none'});
})
$('.page2 .top span').click(function(obj){//钻石明细和钻石兑换明细
	getData.remainGoldcoin(function(){});//我的剩余钻石
	$scope.mingxiname = name = $(this).html();
	if($scope.mingxiname == "钻石明细"){
		$(".page2 .con").css({display:'none'});
		$('.page1').animate({left:"0px"},500).css({zIndex:9});
		setImgSize();
		$scope.coinDetail = null;
		$scope.$apply();
		$.ajax({
		    url : '/activity/thxg/goldcoin-detail.do', 
		    type : 'POST',
		    dataType : 'json',
		    contentType:'application/json;charset=UTF-8',
		    processData : false,
		    data : JSON.stringify({uid:$scope.uid,incomeOrExpenses:"",pageOn:1,pageSize:10000}),
		    success : function(data){
		    	if(data.success){
					$scope.coinDetail = data.map.page.rows;
					$scope.$apply();
		    	}
		    }
		});
	}
	if($scope.mingxiname == "钻石兑换明细"){
		$('.page1').animate({left:"0px"},500).css({zIndex:9});
		$(".page2 .con").css({display:'none'});
		setImgSize();
		$scope.coinDetail = null;
		$scope.$apply();
		$.ajax({
		    url : '/activity/thxg/goldcoin-detail.do', 
		    type : 'POST',
		    dataType : 'json',
		    contentType:'application/json;charset=UTF-8',
		    processData : false,
		    data : JSON.stringify({uid:$scope.uid,incomeOrExpenses:"Expenses",pageOn:1,pageSize:10000}),
		    success : function(data){
		    	if(data.success){
					$scope.coinDetail = data.map.page.rows;
					$scope.$apply();
		    	}
		    }
		});
	}
    $('.page1 .back').click(function(){
    	$('.page1').animate({left:"1900px"},500).css({zIndex:666})
    	$(".page2 .con").css({display:'block'});
    })
})

	

}])
/*$scope.day = 0;
	$scope.hour = 0;
	$scope.minute = 0;
	$scope.second = 0;
	var $time = $('.time');
	$scope.getRTime = function() { 
		var EndTime= new Date('2016/6/11 10:00:00'); //截止时间 
		var NowTime = new Date(); 
		var t =EndTime.getTime() - NowTime.getTime(); 
		$scope.$apply(function() {
			$scope.day=Math.floor(t/1000/60/60/24); 
			$scope.hour=Math.floor(t/1000/60/60%24); 
			$scope.minute=Math.floor(t/1000/60%60); 
			$scope.second=Math.floor(t/1000%60);
		});
		if ($scope.day <= 0 && $scope.hour <= 0 && $scope.minute <= 0 && $scope.second <= 0) {
			clearInterval(timer);
			$scope.$apply(function() {
				$scope.showBtn = true;
			});
		}
	} 
	var timer = setInterval($scope.getRTime,1000);
	routerApp.directive('ruleTan',function(){
	return {
    	restrict : 'E',
    	replace : true,
    	transclude : true,
        template : '<div class="rule-tan img-size" data-width=689 data-height=1025 data-marginTop=-512 data-marginLeft=-345>'+
			'<div class="colse img-size" data-width=50 data-height=50></div>'+
			'<div class="rulecon img-size" data-width=609 data-height=870 data-marginTop=100>'+
				'<div class="con">'+
				'<ul class="img-size" data-width=539 data-height=770 data-paddingLeft=40 data-paddingRight=30>'+
					'<li  class="img-size" data-marginBottom=10>1、活动时间：2016年1月3日—2017年1月18日</li>'+
					'<li  class="img-size" data-marginBottom=10>2、30天以下投资期限产品不参加本次活动</li>'+
					'<li  class="img-size" data-marginBottom=10>3、活动期间，每天免费1次机会；单笔投资满5000元（除30天以下产品），再获1次机会；如单笔满10000元，即获得2次机会，以此类推</li>'+
					'<li  class="img-size" data-marginBottom=10>4、摇钱树可以摇到10-200元红包、1%-6%加息券、或者钻石。</li>'+
					'<li  class="img-size" data-marginBottom=10>5、凭钻石可在活动页兑换奖品，奖品包括：'+
						'<ul class="img-size" data-paddingLeft=40 data-paddingRight=30>'+
							'<li>• iPhone7 Plus 128G</li><li>• Xbox One</li><li>• 戴森吸尘器</li><li>• 松下空气净化器</li><li>• 膳魔师保温杯</li><li>• 京东卡100元</li><li>• 京东卡1000元</li><li>• 预约券（特殊产品优先购买权，超高息，无预约券用户无法提前购买）</li>'+
						'</ul>'+
					'</li>'+
					'<li  class="img-size" data-marginBottom=10>6、钻石兑换截至2017年1月25 日，请注意兑换，截至2017年1月25日仍未兑换的，将终止兑换</li>'+
					'<li  class="img-size" data-marginBottom=10>7、红包、加息券、预约券奖品，将即时发放到您的账户；兑换奖品将于活动结束后15个工作日内发放，会提前与您联系，期间请保持手机畅通</li>'+
					'<li  class="img-size" data-marginBottom=10>8、活动最终解释权归多融财富所有。</li>'+
				'</ul>'+
				'</div>'+
				'<div class="iknow img-size" data-width=256 data-height=66 data-lineHeight=66 data-marginTop=20>我知道了</div>'+
			'</div>'+
		'</div>',
        controller : function($scope){
		    setImgSize()
        }
	};
 });*/