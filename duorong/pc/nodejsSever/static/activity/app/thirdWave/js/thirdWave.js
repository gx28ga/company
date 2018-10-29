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
routerApp.controller('thirdWaveCtrl', ['$scope','$filter','$timeout','$http',function($scope,$filter,$timeout,$http) {
	function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
    // $scope.http=window.location.origin;
    $scope.wap = getUrlParam('wap') == 'true' ? true : false;
	if (getUrlParam('uid') == '' || getUrlParam('uid') == undefined || getUrlParam('uid') == null) {
		$scope.login = false;
	} else {
		$scope.login = true;
	}
	if(getUrlParam('uid')!=''){
		$scope.uid = getUrlParam('uid');
	}
	var parem = "uid="+$scope.uid+"&wap=true";
	var http = 'http://app.duorongcf.com';
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
	    	var url = obj.url?('returnUrl='+obj.url):'' ;
	        if($scope.wap){
	            window.location.href=http+'/dl?'+encodeURIComponent(url);
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
	$scope.$on('setImgSize',function(){
		// alert(1)
	});
	$scope.now1=new Date().getTime();
	$scope.pp=0;
	$scope.nitice = [];
	$scope.activity = { //初始化
		prvTime : '2017/01/27', //活动开始
		startTime : '2017/02/03',//活动结束
		status : 0,
		isqudao : false,
		isrule : false,
		zjlist : false
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
			    url : '/activity/thxg-third/status.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({}),
			    success : function(data){
			    	if(data.success){
			    		$scope.activityTime = data.map;
			    	}
		    		fn(data);
			    }
			});
		},
		participate : function( fn ){
			$.ajax({
			    url : '/activity/thxg-third/participate.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({uid:$scope.uid}),
			    success : function(data){
		    		$scope.vip = !data.flag;
		    		fn(data);
			    }
			});
		},
		investRankMine : function( fn ){
			$.ajax({
			    url : '/activity/thxg-third/invest-rank.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({uid:$scope.uid}),
			    success : function(data){
			    	if(data.success){
			    		$scope.funtuneOfUser = data.map.funtuneOfUser;
			    		$scope.dayRanks = data.map.dayRank;
			    		$scope.getInerests = data.map.getInerest;
			    	}
		    		fn(data);
			    }
			});
		},
		rankList : function( fn ){
			$.ajax({
			    url : '/activity/thxg-third/rank-his.do', 
			    type : 'POST',
			    dataType : 'json',
			    contentType:'application/json;charset=UTF-8',
			    processData : false,
			    data : JSON.stringify({}),
			    success : function(data){
			    	if(data.success){
			    		$scope.rankList = data.map.rankList;
			    	}
		    		fn(data);
			    }
			});
		}
	}
	getData.activityStatus(function(){})
	getData.investRankMine(function(){//登录用户的信息
		$scope.dayRank = $scope.dayRanks;
		$scope.funtuneOfUserinfo = $scope.funtuneOfUser;
		$scope.getInerest = $scope.getInerests;
		$scope.$apply();
	})
	
	if($scope.login == true){
		getData.participate(function(){//渠道
			if($scope.vip == true){
				$scope.activity.isqudao = true;
				fnbox.tan($('#qudao'));
				$('.close').remove('.close')
				$scope.notice = {top:'提示',title:'敬请谅解！',text1:'由于您是渠道VIP用户',text2:'所以不能参与此次活动',btntext:'回到首页'};
				$('.tanbtn').click(function(){fnbox.mainHome()});
			}
		})
	}
	if($scope.activity.status == 0){ //活动未开始
		$scope.activity.isqudao = true;
		$timeout(function(){
			fnbox.tan($('#qudao'));
			$('.close').remove('.close');
		    $scope.notice = {top:'提示',title:'感谢关注！',text1:'本次活动尚未开始',text2:'敬请期待',btntext:'我知道了'};
		    $('.tanbtn').click(function(){fnbox.mainHome()});
		},5)
	}
	if($scope.activity.status == 2){ //活动已结束text2:'请继续关注我们 n(*≧▽≦*)n',
		$scope.activity.isqudao = true;
		$timeout(function(){
			fnbox.tan($('#qudao'));
			$('.close').remove('.close');
		    $scope.notice = {top:'提示',title:'感谢关注！',text1:'本次活动已结束',text2:'平台将于2月3日上午公布',text3:'本次排名活动的中奖名单 ',btntext:'我知道了'};
		    $('.tanbtn').click(function(){fnbox.mainHome()});
		},5)
	}
	$('#rulebtn').click(function(){ //活动规则
		$scope.activity.isrule = true;
		$timeout(function(){fnbox.tan($('#rule'));},5)
		$('.close').click(function(){fnbox.close('#rule');$timeout(function(){$scope.activity.isrule = false;},700)});
	})
	$('#zjbtn').click(function(){ //中奖名单
		$scope.activity.zjlist = true;
		getData.rankList(function(){
			$scope.liTab = $scope.rankList.length;
			$scope.pageOn = $scope.rankList.length-1;
			$scope.$apply();
			$scope.onClickPage=function (type,pageNum,listtype) {
				switch(type){
					case "nextPage":
						if($scope.pageOn > 0){$scope.pageOn -=1;};
					break;
					case "currentPage":
						$scope.pageOn = pageNum;
					break;
					case "beforPage":
						if($scope.pageOn < $scope.liTab-1){$scope.pageOn +=1;};
					break;
				};
			}
		})
		$timeout(function(){fnbox.tan($('#zjlist'));},5)
		$('.close').click(function(){
			fnbox.close('#zjlist');
			$timeout(function(){$scope.activity.zjlist = false;},700)
		});
	})
	$('#tzbtn').click(function(){//投资按钮
		if(!$scope.wap){
			window.location.href = 'jump://page=2?';
		}else{
			window.location.href = http+'/main/bankBillList';
		}
	})	
	$('.loginbtn').click(function(){//登录按钮
		if($scope.wap){
            window.location.href=http+'/dl';
        }else{
            window.location.href='jump://page=4?';
        }
	})	
	$('#sxbtn').click(function(){
		getData.investRankMine(function(){});
		$scope.now1=new Date().getTime();
		$scope.$apply();
	})
}])