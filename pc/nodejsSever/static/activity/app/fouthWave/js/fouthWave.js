var routerApp = angular.module('someApp', [
	'ngResource'
    ]);
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
routerApp.controller('secWaveCtrl', ['$scope','$filter','$timeout','$http',function($scope,$filter,$timeout,$http) {
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
	

	var oDate = new Date(); //实例一个时间对象
	var year = oDate.getFullYear();
	var month = oDate.getMonth()+1;
	var date = oDate.getDate();
	var hours = oDate.getHours();
	var minutes = oDate.getMinutes();
	var seconds = oDate.getSeconds();
	if(month<10){month = "0"+month;}
	if(date<10){date = "0"+date;}

	$scope.isallone = false;
	$scope.isalltwo = false;
	var timer1,timer,timer2;
	var http = 'http://app.duorongcf.com';
	// var http = 'http://192.168.1.248';
	function getQueryString( name ){
        var reg = new RegExp("(^|&|/?)" + name + "=([^&]+)(&|$)", "i");
        var r = decodeURIComponent(window.location.search||window.location.href||window.location.hash).substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    /*setTimeout(function(){
	    var uid = getQueryString('uid') , 
	    	wap = getQueryString('wap');

	    window.location.href = http+'/'+uid+'/'+wap;
	                           
    },1000)*/
	var fnbox = {
		tan:function( obj ){//弹框
			$('.mask').css({display:'block'});
			setImgSize();
			$scope.$apply();
			$timeout(function(){$(obj).addClass('cur');},50);
		},
		close:function( obj ){ //关闭
			$(obj).removeClass('cur');
			$timeout(function(){$('.mask').css({display:'none'});},500);
		},
	    login : function(obj){ //登录
	    	// var url = obj.url?('returnUrl='+obj.url):'' ;
	        if($scope.wap){
	            // window.location.href=http+'/dl?'+encodeURIComponent(url);
	            window.location.href=http+'/dl';
	        }else{
	            window.location.href='jump://page=4?'
	        }
	    },
	    investment : function(){ //去投资列表页
	        if($scope.wap){
	            window.location.href=http+'/main/bankBillList';
	        }else{
	            window.location.href='jump://page=2?';
	        }
	    },
	    mainHome : function(){ //去首页
	        if($scope.wap){
	            window.location.href=http+'/main/home';
	        }else{
	            window.location.href='jump://page=1?';
	        }
	    }
	}
	$scope.nitice = [];
	$scope.activity = { //初始化
		prvTime : '2017/02/04', //活动开始
		startTime : '2017/02/08',//活动结束
		status : 0,
		isqudao : false,
		isrule : false,
		iszjl : false,
		islookred :false
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
		getTime : true
	})
	var getData = {
		activityStatus : function( fn ){
			$.ajax({
			    url : '/activity/thxg-second/status.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({}),
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
			    url : '/activity/thxg-second/participate.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({uid:$scope.uid}),
			    success : function(data){
		    		$scope.vip = !data.flag;
		    		fn();
			    }
			});
		},
		bagStatus : function( fn ){
			$.ajax({
			    url : '/activity/thxg-second/if-gain.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({ uid:$scope.uid }),
			    success : function(data){
			    	if(data.success){
			    		$scope.firstRound = data.map.firstRound;
			    		$scope.secondRound = data.map.secondRound;
			    		fn();
			    	}
			    }
			});
		},
		bagListone : function( fn ){
			$.ajax({
			    url : '/activity/thxg-second/cash-package-list.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({uid:$scope.uid,round:1}),
			    success : function(data){
			    	if(data.errorCode == undefined || data.errorCode == null){
			    		$scope.amount = data.map.amount;
			    	}else if(data.errorCode == '9995'){
			    		//已经领取过
			    		$scope.isallone = true;
			    	}else if(data.errorCode == '9994'){
			    		//活动未到八点
			    	}
		    		fn();
			    }
			});
		},
		bagListtwo : function( fn ){
			$.ajax({
			    url : '/activity/thxg-second/cash-package-list.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({uid:$scope.uid,round:2}),
			    success : function(data){
			    	if(data.errorCode == undefined || data.errorCode == null){
			    		$scope.amount = data.map.amount;
			    	}else if(data.errorCode == '9995'){
			    		$scope.isalltwo = true;
			    	}else if(data.errorCode == '9994'){
			    	}
		    		fn();
			    }
			});
		}
	}
	getData.activityStatus(function(){})

	if($scope.login == true){//渠道
		getData.participate(function(){
			if($scope.vip == true){
				$scope.activity.isqudao = true;
				fnbox.tan($('.notice'));
				$('.close').remove('.close')
				$scope.notice = {top:'提示',title:'敬请谅解！',text1:'由于您是渠道VIP用户',text2:'所以不能参与此次活动',btntext:'回到首页'};
				$('.tanbtn').click(function(){fnbox.mainHome()});
			}
		})
	}
	if($scope.activity.status == 0){ //活动未开始
		$scope.activity.isqudao = true;
		$timeout(function(){
			fnbox.tan($('.notice'));
			$('.close').remove('.close');
		    $scope.notice = {top:'提示',title:'感谢关注！',text1:'本次活动尚未开始',text2:'敬请期待',btntext:'我知道了'};
		    $('.tanbtn').click(function(){fnbox.mainHome()});
		},5)
	}
	if($scope.activity.status == 2){ //活动已结束
		$scope.activity.isqudao = true;
		$timeout(function(){
			fnbox.tan($('.notice'));
			$('.close').remove('.close');
		    $scope.notice = {top:'提示',title:'感谢关注！',text1:'本次活动已结束',text2:'请继续关注我们 n(*≧▽≦*)n',btntext:'我知道了'};
		    $('.tanbtn').click(function(){fnbox.mainHome()});
		},5)
	}
	$('.rulebtn').click(function(){ //活动规则
		$scope.activity.isrule = true;
		$timeout(function(){
			fnbox.tan($('.rule'));
		},5)
	    $('.tanbtn').click(function(){fnbox.mainHome()});
		$('.close').click(function(){fnbox.close('.rule');});
	})
/*-----------------------------场次切换-----------------------------------*/

	var tab = {
		showOne : function(){
			$('.firstBtn').addClass('firstBtn-g');
			$('.secBtn').removeClass('secBtn-g');
			$scope.qixiandata = 90;
			$('.redbox p').html('90天及以上红包组合专场');
			$scope.istime = 1;
			$('.lqbtn,#open').unbind().click(function(){//立即领取
				if($scope.login == true){
					getData.bagListone(function(){
						$timeout(function(){
							$scope.amount = $scope.amount;
							if($scope.isallone == false){
								$scope.activity.iszjl = true;
								fnbox.tan($('.zjl'));
								$('.lqbtn1').addClass('wksbtn');
								$('.lqbtn1').html('您今日已领取');
								$('#gocoupon1').html('前去使用');
				    			$scope.$apply();
							}
						},50)
					})
					$scope.$apply();
					$('.close').click(function(){
						fnbox.close('.zjl');
					})
				}else{
					fnbox.login();
				}
				$scope.$apply();
			})
			
		},
		showTwo : function(){
			$('.firstBtn').removeClass('firstBtn-g');	
			$('.secBtn').addClass('secBtn-g');
			$scope.qixiandata = 150;
			$('.redbox p').html('150天及以上红包组合专场');
			$scope.istime = 2;
			$('.lqbtn,#open').unbind().click(function(){
				if($scope.login == true){
					getData.bagListtwo(function(){
						$timeout(function(){
							$scope.amount = $scope.amount;
							if($scope.isalltwo == false){
								$scope.activity.iszjl = true;
								fnbox.tan($('.zjl'));
								$('.lqbtn2').addClass('wksbtn');
								$('.lqbtn2').html('您今日已领取');
								$('#gocoupon2').html('前去使用');
				    			$scope.$apply();
							}
						},50)
					})
					$scope.$apply();
					$('.close').click(function(){
						fnbox.close('.zjl');
					})
				}else{
					fnbox.login();
				}
			})
		}
	}
	var active = {
		first: function(){
			$.ajax({
			    url : '/activity/thxg-second/if-gain.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({ uid:$scope.uid }),
			    success : function(data){
			    	if(data.success){
			    		if(data.map.firstRound == 1){
			    			$('.lqbtn1').addClass('wksbtn');
			    			$('.lqbtn1').html('您今日已领取');
			    			$('#gocoupon1').html('前去使用');
			    			$scope.$apply();
			    		}else{
			    			$('.lqbtn1').removeClass('wksbtn');
			    			$('.lqbtn1').html('立即领取');
			    			$scope.$apply();
			    		}
			    	}
			    }
			});
			$scope.star= year+'/'+month+'/'+date+ " 00:00:00";
			$scope.eight = year+'/'+month+'/'+date+ " 08:00:00";
			var seconedTime1 = new countTime({
				startTime : $scope.star , 
				endTime : $scope.eight , 
				updateTime : true,
				callback : function( obj2 ){
					var hour = obj2.hour , 
						minute = obj2.minute,
						second = obj2.second;
					$("#timerH").html(hour);
					$("#timerM").html(minute);
					$("#timerS").html(second);

					if(obj2.status == -1){ //未开始
						$('.lqbtn1').css({display:'block'});
			            $('.timebtn1').css({display:'none'});
					}else if(obj2.status == 0){//进行中
						$('.lqbtn1').css({display:'none'});
			            $('.timebtn1').css({display:'block'});
					}else if(obj2.status == 1){//"已结束"
						$('.lqbtn1').css({display:'block'});
			            $('.timebtn1').css({display:'none'});
					}
				}
			})
		},
		second: function(){
			$.ajax({
			    url : '/activity/thxg-second/if-gain.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({uid:$scope.uid }),
			    success : function(data){
			    	if(data.success){
			    		if(data.map.secondRound == 1){
			    			$('.lqbtn2').addClass('wksbtn');
			    			$('.lqbtn2').html('您今日已领取');
			    			$('#gocoupon2').html('前去使用');
			    			$scope.$apply();
			    		}else{
			    			$('.lqbtn2').removeClass('wksbtn');
			    			$('.lqbtn2').html('立即领取');
			    			$scope.$apply();
			    		}
			    	}
			    }
			});
			$scope.star= year+'/'+month+'/'+date+ " 00:00:00";
			$scope.ten = year+'/'+month+'/'+date+ " 10:00:00";
			var seconedTime = new countTime({
				startTime : $scope.star , 
				endTime : $scope.ten , 
				updateTime : true,
				callback : function( obj ){
					var hour = obj.hour , 
						minute = obj.minute,
						second = obj.second;
						$("#timerH2").text(hour);
						$("#timerM2").text(minute);
						$("#timerS2").text(second);
					if(obj.status == -1){ //未开始
						$('.lqbtn2').css({display:'block'});
			            $('.timebtn2').css({display:'none'});
					}else if(obj.status == 0){//进行中
						$('.lqbtn2').css({display:'none'});
			            $('.timebtn2').css({display:'block'});
					}else if(obj.status == 1){//"已结束"
						$('.lqbtn2').css({display:'block'});
			            $('.timebtn2').css({display:'none'});
					}
				}
			})
			
		}
	};
	new countTime({
		startTime : year+'/'+month+'/'+date+ " 00:00:00" , 
		endTime : year+'/'+month+'/'+date+ " 10:00:00", 
		updateTime : false,
		callback : function( obj3 ){
			tab.showOne();
			if(obj3.status == 1){//"已结束"
				tab.showTwo();
			}
		}
	})
	
	active.first();
	active.second();


	/*-----------------------------控制十点以后，默认显示-------end------------------------------*/
	$('.firstBtn').click(function(){
		$scope.istime = 1;
		tab.showOne();
		$scope.$apply();
	})
	$('.secBtn').click(function(){
		$scope.istime = 2;
		tab.showTwo();
		$scope.$apply();
	});

	$('.tolookbtn').click(function(){//查看所获红包
		$('.zjl').removeClass('cur');//移除中奖提示框
		$timeout(function(){//得到的奖品列表弹框
			$timeout(function(){$scope.activity.iszjl = false;},100)//移除中奖提示框
			$scope.activity.islookred = true;
			$timeout(function(){fnbox.tan($('.redlisttan'))},100)
		},100)
		$('.closehb').click(function(){
			fnbox.close('.redlisttan');
			$scope.activity.islookred = false;
		})
	})
	$('#gocoupon1,#gocoupon2').click(function(){
		if($scope.wap){
            window.location.href='http://app.duorongcf.com/myCoupon';
        }else{
            window.location.href='jump://page=16?';
        }
	})
	$('.firstnotice span').click(function(){
		if($scope.login == true){
			if(!$scope.wap){
				window.location.href = 'http://www.duorongcf.com/activity/app/firstWave/index.html'+"?uid="+$scope.uid+"&wap=false";
			}else{
				window.location.href = 'http://www.duorongcf.com/activity/app/firstWave/index.html'+"?uid="+$scope.uid+"&wap=true";
			}
		}else{
			if(!$scope.wap){
				window.location.href = 'http://www.duorongcf.com/activity/app/firstWave/index.html'+"?wap=false";
			}else{
				window.location.href = 'http://www.duorongcf.com/activity/app/firstWave/index.html'+"?wap=true";
			}
		}
	})
}])