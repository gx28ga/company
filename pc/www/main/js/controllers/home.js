/*首页*/
mainModule.controller('homeeCtrl', [ '$rootScope','$scope', '$state', '$localStorage', 'resourceService','communicationService','$filter','$document','$timeout','$location','$animate','$interval',function($rootScope,$scope, $state, $localStorage,resourceService,communicationService,$filter,$document,$timeout,$location,$animate,$interval) {
	$filter('isLogin')($scope);
	$scope.showSummary=true;
	$rootScope.activeNav = 'home';
	if($localStorage.user != undefined){$scope.user = $localStorage.user;};
	$rootScope.title="多融财富_线上投资理财平台-专注大型国企供应链金融的互联网金融平台";
	$rootScope.keywords='多融财富,多融财富理财,投资理财平台,线上理财,多融财富理财项目';
	$rootScope.description='多融财富是上海银砖金融信息服务有限公司旗下互联网金融平台,背靠大型国有企业，专注于国企供应链金融，基于银行与国企承兑汇票，为投资者提供票据安选、票据优选等投资品,100元起投,7天至6月投资期间任选,收益率9.00%-13%,所有资产由银行与国企承兑，安全可靠。';
	$scope.updateBargain={register:'',successfulTrade:''};

	$rootScope.isHome=true;

	// BizQQWPA.addCustom();
	$scope.myInterval = 5000;
         // 轮播图数据初始化
    var slides = $scope.slides = [];
          // 添加轮播图源

/*新*/

    /*新手专享*/
	var rookieList=[];
	$scope.rookieListfn=function(){
        rookieList[0] = new Highcharts.chart(hcircle6, {
	        colors: ['#fa9c21', '#edeeeb'],
	        chart: {plotBackgroundColor: null,plotBorderWidth: 0,plotShadow: false,spacingBottom: 5},
	        title: {text: ''},
	        credits: {text: ''},
	        tooltip:{enabled: false},
	        plotOptions: {pie: {shadow: false , dataLabels: {enabled: false},startAngle: -90,endAngle: 90,center: ['50%', '75%']}},
	        series: [{
	            states: {hover: {halo: {size: 0,attributes: {'stroke-width': 0}}}},
	            type: 'pie', innerSize: '88%',
	            data: [
	                $scope.rookieList[0].pert , 100-$scope.rookieList[0].pert
	            ]
	        }]
	    });
	}

    /*定期热推*/
	var termHoterr=[];
	$scope.termHotfn=function(){
        termHoterr[0] = new Highcharts.chart(hcircle, {
	        colors: ['#fa9c21', '#edeeeb'],
	        chart: {plotBackgroundColor: null,plotBorderWidth: 0,plotShadow: false,spacingBottom: 5},
	        title: {text: ''},
	        credits: {text: ''},
	        tooltip:{enabled: false},
	        plotOptions: {pie: {shadow: false , dataLabels: {enabled: false},startAngle: -90,endAngle: 90,center: ['50%', '75%']}},
	        series: [{
	            states: {hover: {halo: {size: 0,attributes: {'stroke-width': 0}}}},
	            type: 'pie', innerSize: '88%',
	            data: [
	                $scope.termHot[0].pert , 100-$scope.termHot[0].pert
	            ]
	        }]
	    });
	}
	/*定期列表*/
	var termLists=[];
	function termlistfn(){
        termLists[0] = new Highcharts.chart(hcircle0, {
	        colors: ['#fa9c21', '#edeeeb'],
	        chart: {plotBackgroundColor: null,plotBorderWidth: 0,plotShadow: false,spacingBottom: 5},
	        title: {text: ''},
	        credits: {text: ''},
	        tooltip:{enabled: false},
	        plotOptions: {pie: {dataLabels: {enabled: false},startAngle: -90,endAngle: 90,center: ['50%', '75%']}},
	        series: [{
	            states: {hover: {halo: {size: 0,attributes: {'stroke-width': 0}}}},
	            type: 'pie', innerSize: '88%',
	            data: [
	                ['已募集', $scope.termList[0].pert],
	                ['剩余可投', 100-$scope.termList[0].pert],
	                {name: 'Proprietary or Undetectable',y: 0.2,dataLabels: {enabled: false}}
	            ]
	        }]
	    });
        termLists[1] = new Highcharts.chart(hcircle1, {
	        colors: ['#fa9c21', '#edeeeb'],
	        chart: {plotBackgroundColor: null,plotBorderWidth: 0,plotShadow: false,spacingBottom: 5},
	        title: {text: ''},
	        credits: {text: ''},
	        tooltip:{enabled: false},

	        plotOptions: {pie: {dataLabels: {enabled: false},startAngle: -90,endAngle: 90,center: ['50%', '75%']}},
	        series: [{
	            states: {hover: {halo: {size: 0,attributes: {'stroke-width': 0}}}},
	            type: 'pie', innerSize: '88%',
	            data: [
	                ['已募集', $scope.termList[1].pert],
	                ['剩余可投', 100-$scope.termList[1].pert],
	                {name: '',y: 0,dataLabels: {enabled: false}}
	            ]
	        }]
	    });
	}
	$scope.$on('circletermFinish', termlistfn);


	/*p2p热推*/
	var p2pHoterr=[];
	$scope.p2pHotfn=function(){
        p2pHoterr[0] = new Highcharts.chart(hcircle2, {
	        colors: ['#fa9c21', '#edeeeb'],
	        chart: {plotBackgroundColor: null,plotBorderWidth: 0,plotShadow: false,spacingBottom: 5},
	        title: {text: ''},
	        credits: {text: ''},
	        tooltip:{enabled: false},
	        plotOptions: {pie: {shadow: false , dataLabels: {enabled: false},startAngle: -90,endAngle: 90,center: ['50%', '75%']}},
	        series: [{
	            states: {hover: {halo: {size: 0,attributes: {'stroke-width': 0}}}},
	            type: 'pie', innerSize: '88%',
	            data: [
	                $scope.p2pHot[0].pert , 100-$scope.p2pHot[0].pert
	            ]
	        }]
	    });
	}
	// p2p列表
	var p2plists=[];
	function p2plistfn(){
        p2plists[0] = new Highcharts.chart(hcircle3, {
	        colors: ['#fa9c21', '#edeeeb'],
	        chart: {plotBackgroundColor: null,plotBorderWidth: 0,plotShadow: false,spacingBottom: 5},
	        title: {text: ''},
	        credits: {text: ''},
	        tooltip:{enabled: false},
	        plotOptions: {pie: {dataLabels: {enabled: false},startAngle: -90,endAngle: 90,center: ['50%', '75%']}},
	        series: [{
	            states: {hover: {halo: {size: 0,attributes: {'stroke-width': 0}}}},
	            type: 'pie', innerSize: '88%',
	            data: [
	                ['已募集', $scope.p2pList[0].pert],
	                ['剩余可投', 100-$scope.p2pList[0].pert],
	                {name: 'Proprietary or Undetectable',y: 0.2,dataLabels: {enabled: false}}
	            ]
	        }]
	    });
        p2plists[1] = new Highcharts.chart(hcircle4, {
	        colors: ['#fa9c21', '#edeeeb'],
	        chart: {plotBackgroundColor: null,plotBorderWidth: 0,plotShadow: false,spacingBottom: 5},
	        title: {text: ''},
	        credits: {text: ''},
	        tooltip:{enabled: false},

	        plotOptions: {pie: {dataLabels: {enabled: false},startAngle: -90,endAngle: 90,center: ['50%', '75%']}},
	        series: [{
	            states: {hover: {halo: {size: 0,attributes: {'stroke-width': 0}}}},
	            type: 'pie', innerSize: '88%',
	            data: [
	                ['已募集', $scope.p2pList[1].pert],
	                ['剩余可投', 100-$scope.p2pList[1].pert],
	                {name: '',y: 0,dataLabels: {enabled: false}}
	            ]
	        }]
	    });
        p2plists[2] = new Highcharts.chart(hcircle5, {
	        colors: ['#fa9c21', '#edeeeb'],
	        chart: {plotBackgroundColor: null,plotBorderWidth: 0,plotShadow: false,spacingBottom: 5},
	        title: {text: ''},
	        credits: {text: ''},
	        tooltip:{enabled: false},

	        plotOptions: {pie: {dataLabels: {enabled: false},startAngle: -90,endAngle: 90,center: ['50%', '75%']}},
	        series: [{
	            states: {hover: {halo: {size: 0,attributes: {'stroke-width': 0}}}},
	            type: 'pie', innerSize: '88%',
	            data: [
	                ['已募集', $scope.p2pList[1].pert],
	                ['剩余可投', 100-$scope.p2pList[1].pert],
	                {name: '',y: 0,dataLabels: {enabled: false}}
	            ]
	        }]
	    });
	}
	$scope.$on('circlep2pFinish', p2plistfn);


	function funds(){ //用户投资排名
		setTimeout(function(){
			$('.funds').slide({
				mainCell:".options",
				effect:"topLoop",
				interTime : 3000,
				autoPlay:true
			});
		},500);
	};
	$scope.$on('listFinish', funds);

	function newsimg(){ //新闻左侧-图片轮播
		setTimeout(function(){
			$(".newslider").slide({
				mainCell:".newsimg ul",
				titCell : '.imgspagina ul li',
				effect:"leftLoop",
				interTime : 3000,
				autoPlay:true
			});
		},600);
	};
	$scope.$on('newsimgFin', newsimg);

	function tab(){ //新闻和动态的切换
		setTimeout(function(){
			$("#newBox").slide({
				mainCell:".tablist .options",
				titCell : '.tabtitle li',
				titOnClassName : 'current',
				effect:"left",
				trigger:"click",
				autoPlay:false
			});
		},300)
	};
	$scope.$on('tabFin', tab);

	$scope.firendLink = [ //友情链接
		{linkName: '网贷之家',linkPath: 'http://www.wdzj.com'},
		{linkName: '网贷天眼',linkPath: 'http://www.p2peye.com'},
		{linkName: '网贷中国',linkPath: 'http://www.p2pchina.com'},
		{linkName: '网贷天下',linkPath: 'http://www.ewdtx.com'},
		{linkName: '新浪新闻',linkPath: 'http://news.sina.com.cn'},
		{linkName: '搜狐财经',linkPath: 'http://business.sohu.com'},
		{linkName: '网易财经',linkPath: 'http://money.163.com'},
		{linkName: '和讯网',linkPath: 'http://www.hexun.com'},
		{linkName: '第一财经',linkPath: 'http://www.d1money.com'},
		{linkName: '富友支付',linkPath: 'http://www.fuioupay.com'}
	]

	$scope.imghttp = 'https://www.duorongcf.com/images/home-partners';
	$scope.cooperationImg = [ //合作单位
		{linkPath: $scope.imghttp+'/a.png'},
		{linkPath: $scope.imghttp+'/b.png'},
		{linkPath: $scope.imghttp+'/c.png'},
		{linkPath: $scope.imghttp+'/d.png'},
		{linkPath: $scope.imghttp+'/e.png'},
		{linkPath: $scope.imghttp+'/f.png'},
		{linkPath: $scope.imghttp+'/g.png'},
		{linkPath: $scope.imghttp+'/h.png'},
		{linkPath: $scope.imghttp+'/i.png'},
		{linkPath: $scope.imghttp+'/j.png'},
		{linkPath: $scope.imghttp+'/l.png'},
		{linkPath: $scope.imghttp+'/m.png'},
		{linkPath: $scope.imghttp+'/n.png'}
	]

    function cooperation(){ //合作单位
    	setTimeout(function(){
			/*$(".cooperation").slide({
				mainCell:".coopimg ul",
				effect:"leftLoop",
				interTime : 3000,
				autoPlay:true,
				vis : 6,
				scroll: 1,
				prevCell : '.left-btn',
				nextCell : '.right-btn'
			});*/
			$(".cooperation").slide({
				mainCell:".coopimg ul",autoPage:true,effect:"left",autoPlay:true,vis:6,prevCell : '.left-btn',
				nextCell : '.right-btn'
			});
    	},800)
	};
	$scope.$on('cooperationFinish', cooperation);

	$.tips({ //提示文字
		scope : $scope,
		left : -130,
		top: 15,
		element : '.newHomePage'
	});

	$scope.onClick = function(name){ //新闻和动态“更多”按钮
		switch(name){
			case '公司新闻':
				$scope.isnew = true;
				$scope.isnotice = false;
			break;
			case '公司动态':
				$scope.isnotice = true;
				$scope.isnew = false;
			break;
		}
	}
	$scope.onClick('公司动态'); //初始化

	var $window = $(window),
		$up = $('.float-window .up'),
		$user = $('.person .user');
	$window.on('load', function() {
        cooperation();
        tab();
    });
    $up.hide();
	$window.on('scroll', function() {
        var winHeight = $window.height(),
            scrollTop = $window.scrollTop();
        if(scrollTop > winHeight/2) {
            $up.show();
            // $timeout(function(){ //用户心声部分
	           //  $user.animate({width: 398}, 1000);
            // },500)
        } else {
            $up.hide();
        }
    });

	$("#mover").mouseenter(function(){
		$('#mover').animate({marginLeft: "10px",}, "slow","swing");
	}).mouseout(function(){
		$('#mover').animate({marginLeft: "0",}, "slow","swing");
	})

	$scope.gotoTop = function() {//返回顶部
        $('html,body').animate({scrollTop: 0}, 300);
	};
	/*客服咨询*/
	$scope.isSeekcg = false;
	$scope.customerService = {};
	$(".servertan .subbtn").click(function(){
		var input = $('.servertan').find('input');
		var val1 = $.trim(input.eq(0).val()),
			val2 = $.trim(input.eq(1).val());
		if(val1.length<2){
			$('p.error').html('请填写您的姓名');
			return;
		}
		if(!(/^1[34578]\d{9}$/.test(val2))){
			$('p.error').html('手机号码格式不正确');
			return;
		}
	    if((val1.length >= 2 )&& (/^1[34578]\d{9}$/.test(val2))){
			resourceService.queryPost($scope,$filter('交互接口对照表')('客服咨询'),{realName:$scope.customerService.name,mobilephone:$scope.customerService.phone},'客服咨询');
		}
	})
	/*客服咨询  end*/


	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type){
			case "客服咨询":
				if(data.success){
					$timeout(function(){
						$scope.isSeek = false;
						$scope.isSeekcg = true;
					},300)
					$timeout(function(){
						$scope.isSeekcg = false;
					},3300)
				}
			break;
			case "产品列表":
				$scope.listDatas = data.map.otherPro;
				$scope.listDatas.push({});
				$scope.newUser = data.map.newhand;
				$scope.rookieList = data.map.rookieList;
				$scope.hotSales = data.map.mainPush;
				$scope.termHot = data.map.termHot;//定期  热
				$scope.termList = data.map.termList;//定期  列表
				$scope.p2pHot = data.map.p2pHot;//p2p  热
				$scope.p2pList = data.map.p2pList;//p2p  列表
				$scope.current = data.map.current;//新手灵活宝
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
					var arr = [] , arr1 = [];
					$.each(data.map.page.rows,function(i){
						arr1.push(this);
						if((i+1)%1==0){
							arr.push(arr1);
							arr1 = [];
						}
					});
					$scope.investList = arr;
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
                            }else{
                                $scope.nowTimer-=1;
                                setTimerOut();
                            }
                        },
                        1000
                    );
                };
				setTimerOut();
				$scope.news = data.map.news;
				$scope.newsList = data.map.newsList;
				$scope.notice = data.map.notice;
				$scope.noticeList = data.map.noticeList;
				$scope.helps = data.map.questions;
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
}])
