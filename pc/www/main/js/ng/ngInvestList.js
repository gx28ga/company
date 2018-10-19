/*'use strict';*/
 var loginModule = angular.module("loginModule", ['ngStorage']);

/*
 * @Author: lee
 * @Date:   2016-01-25 17:32:33
 * @Last Modified by:   lee
 * @Last Modified time: 2016-01-25 17:32:33
 */

/**
 * 投资记录
 * 
 * @type {[type]}
 */
loginModule
    .directive(
        'ngInvestlist',
        function() {
            return {
                restrict: 'AE',
                templateUrl: 'js/ng/invest-list.html',
                replace: false,
                transclude: true,
                scope: true,
                controller: [
                    '$scope',
                    '$filter',
                    'resourceService',
                    function($scope,$filter,resourceService) {
                        $scope.invests={};
                        $scope.invests.investTitle = '投资记录';
                        // $scope.invests.listDatas = [{name:'138****0000',num:'123123.33'},{name:'138****1111',num:'$123123.33'},{name:'138****1111',num:'$123123.33'},{name:'138****1111',num:'$123123.33'},{name:'138****1111',num:'$123123.33'},{name:'138****1111',num:'$123123.33'}];
                        $scope.url='没有了';

                        resourceService.queryPost($scope,$filter('交互接口对照表')('投资记录'),{},'投资记录');
                        $scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
                        switch(type){
                            case '投资记录':
                                if (data.success) {
                                    $scope.invests.listDatas = data.map.page.rows;
                                }
                                break;
                        };
                    });
                }],
                
            };
        }
    );
/**
 * 翻页
 * 
 * @type {[type]}
 */
loginModule
    .directive(
        'drPg',
        function() {
            return {
                restrict: 'AE',
                templateUrl: 'js/ng/page-wrap.html',
                replace: false,
                transclude: true,
                scope: true,
                controller: [
                    '$scope',
                    '$filter',
                    'resourceService',
                    function($scope,$filter,resourceService) {

                        $scope.onClickPage=function (type,pageNum,listtype) {
                            switch(type){
                                case "beforPage":
                                    if($scope.bill.pageOn > 1){$scope.bill.pageOn -=1;$scope.goPage($scope);};
                                break;
                                case "currentPage":
                                    $scope.bill.pageOn = pageNum;$scope.goPage($scope);
                                break;
                                case "nextPage":
                                    if($scope.bill.pageOn < $scope.bill.pages.length){$scope.bill.pageOn +=1;$scope.goPage($scope);};
                                break;
                            };
                        }
                }],
                
            };
        }
    );
/**
 * 新闻
 * 
 * @type {[type]}
 */
loginModule
	.directive(
		'drNew',
		function() {
            var temp='<div class="newBox">'+
                    '</div>'
			return {
				restrict: 'AE',
				template: temp,
				replace: false,
				transclude: true,
				scope: true,
				controller: [
                    '$location',
                    '$rootScope',
                    '$scope',
                    '$filter',
                    'resourceService',
					'$localStorage',
					function($location,$rootScope,$scope,$filter,resourceService,$localStorage) {
                         resourceService.queryPost($scope,$filter('交互接口对照表')('新闻详情'),{
                            id:$location.$$search.newId
                         },'新闻详情');
                         var id = $location.$$search.newId;
                         if(id==15){
                            $rootScope.title='国有资本_多融财富理财怎么样_银砖金融怎么样_可靠的理财平台_2017p2p收益率排行榜-多融财富';
                            $rootScope.keywords='国有资本,多融财富理财怎么样,银砖金融怎么样,可靠的理财平台,2017p2p收益率排行榜';
                            $rootScope.description='多融财富理财怎么样？银砖金融怎么样？多融财富是一个可靠的理财平台，投资者可查看2017p2p收益率排行榜，多融财富排名靠前，不仅能为投资者获取高额收益，还能减少投资者的投资风险。';
                         }else if(id==5){
                             $rootScope.title='资金安全保障_上海银砖_多融财富理财怎么样,好不好-多融财富';
                            $rootScope.keywords='资金安全保障,多融,多融理财,多融财富,上海银砖,多融财富理财怎么样,多融财富理财好不好';
                            $rootScope.description='多融财富是上海银砖投资控股集团旗下一个网络金融平台，主要为投资者提供票据安选、票据优选等投资产品，那么多融财富理财怎么样？多融财富理财好不好？投资者可在资金安全保障中查看相关信息，能确保用户的隐私受到保护，资金能收到保护。';
                        }else if(id==8){
                             $rootScope.title='专业律所服务_多融财富理财产品怎么样_金融p2p理财-多融财富';
                            $rootScope.keywords='专业律所服务,多融财富,多融财富理财,多融财富理财产品怎么样,p2p理财,金融p2p';
                            $rootScope.description='多融财富理财产品怎么样？这是很多投资者比较关心的话题。多融财富是一个p2p理财平台，能为投资者提供多种金融理财产品。为建立完备的风控机制，保障所有流程有法可依，多融财富与凯曼律师事务所达成战略合作协议，多融财富将通过专业的律师来完善平台合同文本，为业务合规提供专业指导，更好的保障借贷双方的合法权益，保障平台的持续健康发展。';
                        }
                        $scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
                            switch(type){
                                case "新闻详情":
                                    var backURL;
                                    if( $localStorage.pathUrl != undefined){
                                        backURL =  $localStorage.pathUrl.replace(/\./,'') ;
                                        backURL = backURL.replace(/\./,'') ;
                                    }
                                    var tegUrl ;
                                    if($location.$$search.t == 1){
                                        backURL = 'main/jt/GSXW';
                                        tegUrl = 'main.jt.GSXW';
                                    }else{
                                        backURL = 'main/jt/GSDT';
                                        tegUrl = 'main.jt.GSDT';
                                    }
                                    
                                    /*$('.newBox').html(
                                        '<div class="news-title"><div class="title">'+ data.map.sysArticle.title +'</div><a class="return" href="/' + backURL + '">返回</a></div>'
                                        + data.map.sysArticle.content
                                    );*/
                                    $('.newBox').html(
                                        '<div class="news-title"><div class="title">'+ data.map.sysArticle.title +'</div><a class="return" href="/' + backURL + '">返回</a></div>'
                                        + data.map.sysArticle.content
                                    );
                                break;
                            };
                        })
				}],
				
			};
		}
	);
/**
 * 我的资产引导菜单
 * 
 * @type {[type]}
 */
loginModule
    .directive(
        'menu',
        function() {
            var temp='<div class="side-mode" ng-class="{true: \'active-mode\', false: \'\'}[activeText == tool.memnTitle]" ng-repeat="tool in menuItems">'+
                        '<i ng-if="tool.children != undefined;" class="side-down"></i>'+
                        '<span class="mode-title" ng-click="onClickMenuItem($event,tool)">{{tool.memnTitle}}</span>'+
                        '<div class="mode-con" ng-if="tool.children.length > 0">'+
                            '<a href="" ng-click="childOnClick($event, child, tool)" ng-class="{true: \'actived\', false: \'\'}[curUrl == child.url]" ng-repeat="child in tool.children">{{child.memnTitle}}</a>'+
                        '</div>'+
                    '</div>'
            return {
                restrict : 'E',
                template:temp,
                // template : '<ul class="navbarlistul"><li ng-repeat="tool in menuItems"><div  ng-right-click="" ng-click="clickMenu($event)">{{tool.memnTitle}}<span class='+
                // "'glyphicon glyphicon-chevron-left'"+'></span></span></div><ul><li ng-repeat="child in tool.children"><div ng-class="{'+"'current'"+':child.url==state}"><a ng-click="toWorkspace(child.url)">{{child.menuName}}</a></div></li></ul></li></ul>',
                replace: false,
                transclude: true,
                scope: true,
                controller: [
                    '$scope',
                    '$state',
                    'resourceService',
                    '$location',
                    '$localStorage',
                    '$rootScope',
                    function($scope,$state,resourceService,$location,$localStorage,$rootScope) {
                        $scope.messag={};
                        $scope.activeMode='active-mode';
                        if($location.$$search.menuName != undefined){
                            $scope.activeText = $location.$$search.menuName;
                            $scope.curUrl = $location.$$path.replace('/main/jt/', 'main.jt.');
                        }
                        $rootScope.$on('myEvent.WHDR_Ctrl', function(event,data) {
                            $scope.activeText = data.name;
                            $scope.curUrl = data.url;
                        }); 
                        
                        var beforEvent=null;
// $rootScope.$on('myEvent.myAccountmyInvestCtrl', function(event,data) {
//                             console.log(data);
//                             $scope.activeText = data.name;
//                             $scope.curUrl = data.url;
//                         }); 
                        
                        $scope.onClickMenuItem=function (event,item) {
                            var $this = $(event.currentTarget);
                            if(item.url != undefined){
                                $scope.curUrl = item.url;
                                $scope.activeText = item.memnTitle;
                                $state.go(item.url);
                            } else if ($scope.activeText == item.memnTitle) {
                                $scope.activeText = '';
                            }else{
                                $scope.activeText = item.memnTitle;
                            }
                        }
                        $scope.childOnClick = function(event,item,itemp) {
                            $scope.curUrl = item.url;
                            $scope.activeText = itemp.memnTitle;
                            $localStorage.activeText = {};
                            $localStorage.activeText.name = itemp.memnTitle;
                            $localStorage.activeText.url = item.url;

                            $state.go(item.url);
                        }
                }],
                
            };
        }
    );
/**
 * 关于我们引导菜单
 * 
 * @type {[type]}
 */
loginModule
    .directive(
        'menu1',
        function() {
            // var temp='<div class="side-mode" ng-class="{true: \'active-mode\', false: \'\'}[activeText == tool.memnTitle]" ng-repeat="tool in menuItems">'+
            var temp='<div class="side-mode" ng-repeat="tool in menuItems">'+
                        // '<i ng-if="tool.children != undefined;" class="side-down"></i>'+
                        // '<a ng-class="{true: \'actived\', false: \'\'}[curUrl == url]" class="mode-title" ng-click="onClickMenuItem($event,tool)">{{tool.memnTitle}}</a>'+
                        '<a ng-class="{true: \'actived\', false: \'\'}[activeText == tool.name]" data-activeText="{{activeText}}" data-name="{{tool.name}}" class="mode-title" ng-click="onClickMenuItem($event,tool)">{{tool.memnTitle}}</a>'+
                        /*'<div class="mode-con" ng-if="tool.children.length > 0">'+
                            '<a href="" ng-click="childOnClick($event, child, tool)" ng-class="{true: \'actived\', false: \'\'}[curUrl == child.url]" ng-repeat="child in tool.children">{{child.memnTitle}}</a>'+
                        '</div>'+*/
                    '</div>'
            return {
                restrict : 'E',
                template:temp,
               
                replace: false,
                transclude: true,
                scope: true,
                controller: [
                    '$scope',
                    '$state',
                    'resourceService',
                    '$location',
                    '$localStorage',
                    '$rootScope',
                    '$timeout',
                    '$element',
                    function($scope,$state,resourceService,$location,$localStorage,$rootScope,$timeout,$element) {
                        $scope.messag={};
                        $scope.activeMode='active-mode';
                        if($location.$$search.menuName != undefined){
                            $scope.activeText = $location.$$search.menuName;
                            $scope.curUrl = $location.$$path.replace('/main/jt/', 'main.jt.');
                        }
                        $rootScope.$on('myEvent.WHDR_Ctrl', function(event,data,type) {
                            $scope.activeText = data.name;
                            $scope.curUrl = data.url;
                        }); 
                        var beforEvent=null , 
                            allA;
                        function setCurrent(){
                            var href = window.location.href;
                            allA.each(function(){
                                $(this).removeClass('actived');
                                var name = $(this).attr('data-name');
                                if(href.search(name)>-1){
                                    $(this).addClass('actived');
                                }
                            })
                        }
                        $scope.onClickMenuItem=function (event,item) {
                            var $this = $(event.currentTarget);
                            if(item.url != undefined){
                                $scope.curUrl = item.url;
                                // $scope.activeText = item.memnTitle;
                                $scope.activeText = item.name;
                                if($scope.activeText=="DRGK"){//为兼容静态页做的判断
                                    window.location.href="/about/DRGK.html"
                                }else if($scope.activeText=="guarantee"){
                                    window.location.href="/about/AQBZ.html"
                                }else if($scope.activeText=="LXWM"){
                                    window.location.href='/about/LXWM.html'
                                }else if($scope.activeText=="report"){
                                    window.location.href="/about/YYBG201709.html"
                                }else{
                                   $state.go(item.url);  
                                }
                               
                            } else if ($scope.activeText == item.memnTitle) {
                                $scope.activeText = '';
                            }else{
                                $scope.activeText = item.memnTitle;
                            }
                            $timeout(setCurrent,100)
                        }
                        $scope.childOnClick = function(event,item,itemp) {
                            $scope.curUrl = item.url;
                            $scope.activeText = itemp.memnTitle;
                            $localStorage.activeText = {};
                            $localStorage.activeText.name = itemp.memnTitle;
                            $localStorage.activeText.url = item.url;

                            $state.go(item.url);
                        }
                    $timeout(function(){
                        allA = $($element).find('.mode-title');
                        setCurrent();
                    },300)
                }],
                link : function(){
                }
            };
        }
    );
/**
 * 帮助中心引导菜单
 * 
 * @type {[type]}
 */
loginModule
	.directive(
		'menu2',
		function() {
			var temp='<div class="side-mode" ng-class="{true: \'active-mode\', false: \'\'}[activeText == tool.name]" ng-repeat="tool in menuItems">'+
						'<i ng-if="tool.children != undefined;" class="side-down"></i>'+
						'<a class="mode-title" ng-class="{true: \'actived\', false: \'\'}[curUrl == url]" ng-click="onClickMenuItem($event,tool)">{{tool.memnTitle}}</a>'+
						/*'<div class="mode-con" ng-if="tool.children.length > 0">'+
							'<a href="" ng-click="childOnClick($event, child, tool)" ng-class="{true: \'actived\', false: \'\'}[curUrl == child.url]" ng-repeat="child in tool.children">{{child.memnTitle}}</a>'+
						'</div>'+*/
					'</div>'
			return {
		        restrict : 'E',
		        template:temp,
		       
				replace: false,
				transclude: true,
				scope: true,
				controller: [
					'$scope',
					'$state',
					'resourceService',
                    '$location',
                    '$localStorage',
                    '$rootScope',
					function($scope,$state,resourceService,$location,$localStorage,$rootScope) {
						$scope.messag={};
						$scope.activeMode='active-mode';
                        if($location.$$search.menuName != undefined){
                            $scope.activeText = $location.$$search.menuName;
    						$scope.curUrl = $location.$$path.replace('/main/jt/', 'main.jt.');
                        }
                        $rootScope.$on('myEvent.WHDR_Ctrl', function(event,data,type) {
                            $scope.activeText = data.name;
                            $scope.curUrl = data.url;
                        }); 
						
						var beforEvent=null;
						$scope.onClickMenuItem=function (event,item) {
                            var $this = $(event.currentTarget);
                            if(item.url != undefined){
                                $scope.curUrl = item.url;
                                // $scope.activeText = item.memnTitle;
                                $scope.activeText = item.name;
								$state.go(item.url);
							} else if ($scope.activeText == item.memnTitle) {
                                $scope.activeText = '';
							}else{
                                $scope.activeText = item.memnTitle;
                            }
						}
                        $scope.childOnClick = function(event,item,itemp) {
                            $scope.curUrl = item.url;
                            $scope.activeText = itemp.memnTitle;
                            $localStorage.activeText = {};
                            $localStorage.activeText.name = itemp.memnTitle;
                            $localStorage.activeText.url = item.url;

                            $state.go(item.url);
                        }
				}],
				
			};
		}
	);
/**
 * 我的banner
 * 
 * @type {[type]}
 */
loginModule
    .directive(
        'myBanner',
        function() {
            var temp='<ul class="banner-img"><li ng-repeat="slide in slides" ng-init="test()">'+
                '<a target="_blank" href="{{slide.location}}">'+
                '<img ng-src="{{slide.imgUrl}}" alt="">'+
                '</a>'+
                '</li></ul>'
            return {
                restrict : 'E',
                template:temp,
                replace: false,
                transclude: true,
                scope: true,
                controller: [
                    '$scope',
                    '$state',
                    'resourceService',
                    '$filter',
                    '$element',
                    function($scope,$state,resourceService,$filter,$element) {
                        resourceService.queryPost($scope,$filter('交互接口对照表')('banner'),{},'banner');
                        $scope.slides = [];
                        $scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
                            switch(type){
                                case "banner":
                                    $scope.slides=data.map.banner;
                                    var i=0;
                                    $scope.test=function () {
                                        i++;
                                        if(i == $scope.slides.length){
                                            var banner;
                                            banner = new Slider({
                                                element: '.banner-img ul',
                                                effect: 'fade',
                                                interval: 3000,
                                                duration: 1000,
                                                triggerWrap: '.banner-img .trigger-box',
                                                onChange: function(active) {
                                                }
                                            });
                                        }
                                    }
                                break;
                            };
                        });
                }],
                
            };
        }
    );

/*改版banner*/
loginModule
    .directive(
        'myNewbanner',
        function() {
            var temp='<div id="Slideshow">'+
                            '<ul class="swiper-img"><li ng-repeat="slide in slides" class="banner" repeat-finish="bannerFinish">'+
                                '<a target="_blank" href="{{slide.location}}" style="background: url({{slide.imgUrl}}) no-repeat center 0">'+
                                '</a></li></ul>'+
                            '<div class="pagina">'+
                                '<ul><li ng-repeat="slide in slides">{{slide.title}}</li></ul>'+
                            '</div>'+
                    '</div>'
            return {
                restrict : 'E',
                template:temp,
                replace: false,
                transclude: true,
                scope: true,
                controller: [
                    '$scope',
                    '$state',
                    'resourceService',
                    '$filter',
                    '$element',
                    function($scope,$state,resourceService,$filter,$element) {
                        resourceService.queryPost($scope,$filter('交互接口对照表')('banner'),{},'banner');
                        $scope.slides = [];
                        $scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
                            switch(type){
                                case "banner":
                                    $scope.slides=data.map.banner;
                                    function testt() {
                                        $('#Slideshow').slide({
                                            mainCell:"#Slideshow .swiper-img",
                                            titCell : '#Slideshow .pagina ul li',
                                            effect:"fold",
                                            titOnClassName : 'current',
                                            interTime : 3000,
                                            autoPlay:true
                                        });
                                    }
                                    $scope.$on('bannerFinish', testt);
                                break;
                            };
                        });
                }],
                
            };
        }
    );
// 验证银行卡号是否正确
loginModule.directive('valbankcardno', function() {
    return {
        restrict: "A",
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModelController) {

        	ngModelController.$parsers.unshift(function(viewVal) {
                if(viewVal.length<=0){
                	ngModelController.$setValidity("valbankcardno", true);
                    return false;
                }
                var lastNum=viewVal.substr(viewVal.length-1,1);//取出最后一位（与luhm进行比较）

                var first15Num=viewVal.substr(0,viewVal.length-1);//前15或18位
                var newArr=new Array();
                for(var i=first15Num.length-1;i>-1;i--){    //前15或18位倒序存进数组
                    newArr.push(first15Num.substr(i,1));
                }
                var arrJiShu=new Array();  //奇数位*2的积 <9
                var arrJiShu2=new Array(); //奇数位*2的积 >9

                var arrOuShu=new Array();  //偶数位数组
                for(var j=0;j<newArr.length;j++){
                    if((j+1)%2==1){//奇数位
                        if(parseInt(newArr[j])*2<9)
                            arrJiShu.push(parseInt(newArr[j])*2);
                        else
                            arrJiShu2.push(parseInt(newArr[j])*2);
                    }
                    else //偶数位
                        arrOuShu.push(newArr[j]);
                }

                var jishu_child1=new Array();//奇数位*2 >9 的分割之后的数组个位数
                var jishu_child2=new Array();//奇数位*2 >9 的分割之后的数组十位数
                for(var h=0;h<arrJiShu2.length;h++){
                    jishu_child1.push(parseInt(arrJiShu2[h])%10);
                    jishu_child2.push(parseInt(arrJiShu2[h])/10);
                }

                var sumJiShu=0; //奇数位*2 < 9 的数组之和
                var sumOuShu=0; //偶数位数组之和
                var sumJiShuChild1=0; //奇数位*2 >9 的分割之后的数组个位数之和
                var sumJiShuChild2=0; //奇数位*2 >9 的分割之后的数组十位数之和
                var sumTotal=0;
                for(var m=0;m<arrJiShu.length;m++){
                    sumJiShu=sumJiShu+parseInt(arrJiShu[m]);
                }

                for(var n=0;n<arrOuShu.length;n++){
                    sumOuShu=sumOuShu+parseInt(arrOuShu[n]);
                }

                for(var p=0;p<jishu_child1.length;p++){
                    sumJiShuChild1=sumJiShuChild1+parseInt(jishu_child1[p]);
                    sumJiShuChild2=sumJiShuChild2+parseInt(jishu_child2[p]);
                }
                //计算总和
                sumTotal=parseInt(sumJiShu)+parseInt(sumOuShu)+parseInt(sumJiShuChild1)+parseInt(sumJiShuChild2);

                //计算Luhm值
                var k= parseInt(sumTotal)%10==0?10:parseInt(sumTotal)%10;
                var luhm= 10-k;

                if(lastNum==luhm){
                	ngModelController.$setValidity("valbankcardno", true);
                	return viewVal;
                }
                else{
                	ngModelController.$setValidity("valbankcardno", false);
                	return undefined;
        		}
		        		
	        });
        }
    };
})

// 验证两次输入的密码是否相同
loginModule.directive('match', function() {
    return {
        restrict: "A",
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModelController) {

        	var firstPassword = '#' + attrs.match;
            elem.add(firstPassword).on('keyup', function () {
                scope.$apply(function () {
                    var v = elem.val()===$(firstPassword).val();
                    ngModelController.$setValidity('match', v);
                });
            });
        }
    };
})

// 输入金额大于1
loginModule.directive('morethan', function() {
    return {
        restrict: "A",
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModelController) {
        	ngModelController.$parsers.unshift(function(viewVal) {
        		if (viewVal == '') {
        			ngModelController.$setValidity("morethan", true);
                	return viewVal;
        		}
        		if (viewVal >= 1) {
                	ngModelController.$setValidity("morethan", true);
                	return viewVal;
                } else {
                	ngModelController.$setValidity("morethan", false);
                	return undefined;
        		}
        	});
        }
    };
})

// 充值金额限制
loginModule.directive('rechargemore', function() {
    return {
        restrict: "A",
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModelController) {
            ngModelController.$parsers.unshift(function(viewVal) {
                if (viewVal == '') {
                    ngModelController.$setValidity("rechargemore", true);
                    return viewVal;
                }
                if (viewVal >= scope.rechargemore) {
                    ngModelController.$setValidity("rechargemore", true);
                    return viewVal;
                } else {
                    ngModelController.$setValidity("rechargemore", false);
                    return undefined;
                }
            });
        }
    };
})

loginModule.directive('morethan3', function() {
    return {
        restrict: "A",
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModelController) {
        	ngModelController.$parsers.unshift(function(viewVal) {
        		if (viewVal == '') {
        			ngModelController.$setValidity("morethan3", true);
                	return viewVal;
        		}
        		if (viewVal >= 3) {
                	ngModelController.$setValidity("morethan3", true);
                	return viewVal;
                } else {
                	ngModelController.$setValidity("morethan3", false);
                	return undefined;
        		}
        	});
        }
    };
})

// 充值金额最高限额
loginModule.directive('rechargelimit', function() {
    return {
        restrict: "A",
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModelController) {

        	ngModelController.$parsers.unshift(function(viewVal) {
        		if (viewVal == '') {
        			ngModelController.$setValidity("rechargelimit", true);
                	return viewVal;
        		}
        		if(viewVal <= scope.user.quota){
                	ngModelController.$setValidity("rechargelimit", true);
                	return viewVal;
                }
                else{
                	ngModelController.$setValidity("rechargelimit", false);
                	return undefined;
        		}
        	});
        }
    };
})

// 提现金额小于余额
loginModule.directive('withdrawlimit', function() {
    return {
        restrict: "A",
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModelController) {

        	ngModelController.$parsers.unshift(function(viewVal) {
        		if (scope.user.funds <= 100000) {
	        		if (viewVal == '') {
	        			ngModelController.$setValidity("withdrawlimit", true);
	                	return viewVal;
	        		}
	        		if(viewVal <= scope.user.funds){
	                	ngModelController.$setValidity("withdrawlimit", true);
	                	return viewVal;
	                }
	                else{
	                	ngModelController.$setValidity("withdrawlimit", false);
	                	return undefined;
	        		}
        		} else {
        			ngModelController.$setValidity("withdrawlimit", true);
	                return viewVal;
        		}
        	});
        }
    };
})

// 提现金额单笔最高限额
loginModule.directive('maxlimit', function() {
    return {
        restrict: "A",
        require: 'ngModel',
        link: function(scope, elem, attrs, ngModelController) {

        	ngModelController.$parsers.unshift(function(viewVal) {
        		if (scope.user.funds > 500000) {
	        		if (viewVal == '' || scope.cashForm.cash.$error.withdrawlimit) {
	        			ngModelController.$setValidity("maxlimit", true);
	                	return viewVal;
	        		}
	        		if(viewVal <= 500000){
	                	ngModelController.$setValidity("maxlimit", true);
	                	return viewVal;
	                }
	                else{
	                	ngModelController.$setValidity("maxlimit", false);
	                	return undefined;
	        		}
	        	} else {
	        		ngModelController.$setValidity("maxlimit", true);
	                return viewVal;
	        	}
        	});
        }
    };
})
loginModule.directive("csDateToIso", function () {

    var linkFunction = function (scope, element, attrs, ngModelCtrl) {

        ngModelCtrl.$parsers.push(function (datepickerValue) {
            return moment(datepickerValue).format("");
        });
    };

    return {
        restrict: "A",
        require: "ngModel",
        link: linkFunction
    };
});
loginModule.directive('placeholder', function(){
    return {
        restrict: 'A',
        scope: {},
        link: function(scope, ele, attr) {
            var input = document.createElement('input'),
                isSupportPlaceholder = 'placeholder' in input;
            if (!isSupportPlaceholder) {
                var fakePlaceholder = angular.element(
                    '<span class="placeholder">' + attr['placeholder'] + '</span>');
                fakePlaceholder.on('click', function(e){
                    e.stopPropagation();
                    ele.focus();
                });
                ele.before(fakePlaceholder);
                scope.hasValue = function(){
                    return ele.val();
                };
                scope.$watch(scope.hasValue, function(){
                    if (ele.val()) {
                        fakePlaceholder.hide();
                    } else {
                        fakePlaceholder.show();
                    }
                });

                scope.getElementPosition = function() {
                    return ele.position();
                };
                scope.$watch(scope.getElementPosition, function(){
                    fakePlaceholder.css({
                        'position': 'absolute',
                        'top': ele.position().top + 'px',
                        'left': ele.position().left + 'px',
                        'color': '#aaa'
                    });
                }, true);
                scope.getElementHeight = function() {
                    return ele.outerHeight();
                };
                scope.$watch(scope.getElementHeight, function(){
                    fakePlaceholder.css('line-height', ele.outerHeight() + 'px');
                });
                if (ele.css('font-size')){
                    fakePlaceholder.css('font-size', ele.css('font-size'));
                }
                if (ele.css('text-indent')){
                    fakePlaceholder.css('text-indent',
                        parseInt(ele.css('text-indent')) +
                        parseInt(ele.css('border-left-width'))
                    );
                }
                if (ele.css('padding-left')){
                    fakePlaceholder.css('padding-left', ele.css('padding-left'));
                }
                if (ele.css('margin-top')){
                    fakePlaceholder.css('margin-top', ele.css('margin-top'));
                }
                scope.isElementVisible = function(){
                    return ele.is(':visible');
                };
                scope.$watch(scope.isElementVisible, function(){
                    var displayVal = ele.is(':visible') ? 'block' : 'none';
                    fakePlaceholder.css('display', displayVal);
                    if (displayVal === 'blcok' && ele.val()) {
                        fakePlaceholder.hide();
                    }
                });
            }
        }
    };
});

/*loginModule.directive("repeatFinish", function () {
    return {
        link: function(scope,element,attr){
            if(scope.$last == true){
                scope.$eval(attr.repeatFinish);
            }
        }
    }
});*/

loginModule.directive('repeatFinish', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr , controller,$parse) {
          if (scope.$last === true) {
            $timeout(function () {
                scope.$eval( scope.$parent[attr.repeatFinish] )
                scope.$emit(attr.repeatFinish);
            });
          }
        }
    };
});
