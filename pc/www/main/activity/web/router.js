routerApp.config(['$stateProvider', function ($stateProvider) {
  function getScript(url, callback, charset, b) {
    var head = document.getElementsByTagName("head")[0] || doc.documentElement;
    $.each(url, function (i) {
      var script = document.createElement("script");
      if (charset) {
        script.charset = charset;
      }
      script.src = this;
      script.onload = script.onreadystatechange = function () {
        if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
          // callback(i);
          callback();
          script.onload = script.onreadystatechange = null;
        }
      };
      head.insertBefore(script, head.firstChild);
    })
  }
  var src = '/main/',
    activityPath = src + 'activity/web';
  $stateProvider.state('activitys', {
      url: '/activitys',
      //templateUrl: src + 'html/activity/activity.html'
      css: activityPath + '/common/stylesheets/activitys.css',
      templateUrl: src + 'activity/web/index.html',
      controller: function ($scope, $css) {
        $css.bind(activityPath + '/common/stylesheets/activitys.css', $scope);
      }
    }).state('report', {
      url: '/report',
      //templateUrl: src + 'html/activity/activity.html'
      templateUrl: src + 'activity/web/index.html'
    }).state('online-activity', { // 部分浏览器不支持 如 ie
      url: '/online-activity',
      templateUrl: src + 'activity/web/index.html'
    })
    /*.state('publicity', {   /*市场双旦推广页
        url: '/publicity',
        templateUrl: src + 'activity/web/newYearRegister/newYearRegister.html',
        css: src + 'activity/web/newYearRegister/stylesheets/newYearRegister.css',
        controller : ['$scope','$rootScope','$filter','resourceService','$timeout','$location','$localStorage','$state',function($scope,$rootScope,$filter,resourceService,$timeout,$location,$localStorage,$state){
            getScript([src+'activity/web/newYearRegister/js/newYearRegister.js'],function(){
                newYearRegister(getScript,$scope,$rootScope,$filter,resourceService,$timeout,$location,$localStorage,$state);
            })
        }]
    })*/
    .state('main.report', {
      url: '/report',
      templateUrl: '../../main/html/jt1.html'
    })
    .state('main.report.201612', { /*12月运营报告pc*/
      url: '/201612',
      templateUrl: src + 'activity/report/201612/web/index.html',
      css: src + 'activity/report/201612/web/decReport.css',
      controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function ($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
        getScript([src + 'activity/report/201612/web/js/controller.js'], function () {
          decReport($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
        })
      }]
    })
    .state('main.report.201701', { /*17年1月运营报告pc*/
      url: '/201701?(menuName)',
      templateUrl: src + 'activity/report/201701/web/index.html',
      css: src + 'activity/report/201701/web/decReport.css',
      controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function ($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
        getScript([src + 'activity/report/201701/web/js/controller.js'], function () {
          decReport($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
        })
      }]
    })
    .state('main.report.201702', { /*17年2月运营报告pc*/
      url: '/201702?(menuName)',
      templateUrl: src + 'activity/report/201702/web/index.html',
      css: src + 'activity/report/201702/web/decReport.css',
      controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function ($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
        getScript([src + 'activity/report/201702/web/js/controller.js'], function () {
          decReport($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
        })
      }]
    })
    .state('main.report.201703', { /*17年3月运营报告pc*/
      url: '/201703?(menuName)',
      templateUrl: src + 'activity/report/201703/web/index.html',
      css: src + 'activity/report/201703/web/decReport.css',
      controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function ($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
        getScript([src + 'activity/report/201703/web/js/controller.js'], function () {
          decReport($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
        })
      }]
    })
    .state('main.report.201704', { /*17年4月运营报告pc*/
      url: '/201704?(menuName)',
      templateUrl: src + 'activity/report/201704/web/index.html',
      css: src + 'activity/report/201704/web/stylesheets/Report.css',
      controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$http', '$resource', '$location', '$localStorage', function ($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage) {
        getScript([src + 'activity/report/201704/web/js/controller.js'], function () {
          PubDecReport($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage, getScript);
        })
      }]
    })
    .state('main.report.201705', { /*17年5月运营报告pc*/
      url: '/201705?(menuName)',
      templateUrl: src + 'activity/report/201705/web/index.html',
      css: src + 'activity/report/201704/web/stylesheets/Report.css',
      controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$http', '$resource', '$location', '$localStorage', function ($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage) {
        getScript([src + 'activity/report/201704/web/js/controller.js'], function () {
          PubDecReport($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage, getScript);
        })
      }]
    })
    .state('main.report.201706', { /*17年6月运营报告pc*/
      url: '/201706?(menuName)',
      templateUrl: src + 'activity/report/201706/web/index.html',
      css: src + 'activity/report/201704/web/stylesheets/Report.css',
      controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$http', '$resource', '$location', '$localStorage', function ($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage) {
        getScript([src + 'activity/report/201704/web/js/controller.js'], function () {
          PubDecReport($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage, getScript);
        })
      }]
    })
    .state('main.report.201707', { /*17年7月运营报告pc*/
      url: '/201707?(menuName)',
      templateUrl: src + 'activity/report/201707/index.html',
      css: src + 'activity/report/201704/web/stylesheets/Report.css',
      controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$http', '$resource', '$location', '$localStorage', function ($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage) {
        getScript([src + 'activity/report/201704/web/js/controller.js'], function () {
          PubDecReport($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage, getScript);
        })
      }]
    })
    .state('main.report.201708', { /*17年8月运营报告pc*/
      url: '/201708?(menuName)',
      templateUrl: src + 'activity/report/201708/index.html',
      css: src + 'activity/report/201704/web/stylesheets/Report.css',
      controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$http', '$resource', '$location', '$localStorage', function ($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage) {
        getScript([src + 'activity/report/201704/web/js/controller.js'], function () {
          PubDecReport($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage, getScript);
        })
      }]
    })
    .state('main.report.201709', { /*17年9月运营报告pc*/
      url: '/201709?(menuName)',
      templateUrl: src + 'activity/report/201709/index.html',
      css: src + 'activity/report/201704/web/stylesheets/Report.css',
      controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$http', '$resource', '$location', '$localStorage', function ($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage) {
        getScript([src + 'activity/report/201709/js/controller.js'], function () {
          PubDecReport($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage, getScript);
        })
      }]
    })
    .state('main.report.201710', { /*17年10月运营报告pc*/
      url: '/201710?(menuName)',
      templateUrl: src + 'activity/report/201710/index.html',
      css: src + 'activity/report/201704/web/stylesheets/Report.css',
      controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$http', '$resource', '$location', '$localStorage', function ($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage) {
        getScript([src + 'activity/report/201704/web/js/controller.js'], function () {
          PubDecReport($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage, getScript);
        })
      }]
    })
    .state('main.report.201711', { /*17年9月运营报告pc*/
      url: '/201711?(menuName)',
      templateUrl: src + 'activity/report/201711/index.html',
      css: src + 'activity/report/201704/web/stylesheets/Report.css',
      controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$http', '$resource', '$location', '$localStorage', function ($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage) {
        getScript([src + 'activity/report/201704/web/js/controller.js'], function () {
          PubDecReport($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage, getScript);
        })
      }]
    })
    .state('main.report.201712', { /*17年9月运营报告pc*/
      url: '/201712?(menuName)',
      templateUrl: src + 'activity/report/201712/index.html',
      css: src + 'activity/report/201704/web/stylesheets/Report.css',
      controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$http', '$resource', '$location', '$localStorage', function ($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage) {
        getScript([src + 'activity/report/201704/web/js/controller.js'], function () {
          PubDecReport($scope, $rootScope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage, getScript);
        })
      }]
    }).state('activitys.marchInvest', { /*抽奖兑换*/
      url: '/marchInvest',
      templateUrl: src + 'activity/web/marchInvest/index.html',
      css: src + 'activity/web/marchInvest/stylesheets/marchInvest.css',
      controller: ['$scope', '$http', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function ($scope, $http, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
        getScript([src + 'activity/web/marchInvest/js/controller.js'], function () {
          marchInvest($scope, $http, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);

        })
      }]
    }).state('activitys.jiaXi', { /*加息券*/
      url: '/jiaXi',
      templateUrl: src + 'activity/web/jiaXi/index.html',
      css: src + 'activity/web/jiaXi/stylesheets/jiaXi.css'
    })
    .state('activitys.jinjiaosuo', { /*金交所*/
      url: '/jinjiaosuo',
      templateUrl: src + 'activity/web/jinjiaosuo/index.html',
      css: src + 'activity/web/jinjiaosuo/stylesheets/fuyou.css'
    })
    .state('activitys.zhounianqing', { /*抽奖兑换*/
      url: '/zhounianqing',
      templateUrl: src + 'activity/web/zhounianqing/index.html',
    })
    // .state('activitys.dafuweng', { /*大富翁*/
    //     url: '/dafuweng',
    //     templateUrl: src + 'activity/web/dafuweng/index.html'
    // })
    .state('activitys.guhuaDafuwdeng', { /*固化大富翁*/
      url: '/dafuweng',
      templateUrl: src + 'activity/web/guhuaDafuweng/index.html'
    })
    .state('activitys.fosterGarden', { /*寄养园*/
      url: '/fosterGarden',
      templateUrl: src + 'activity/web/fosterGarden/index.html',
      css: src + 'activity/web/fosterGarden/stylesheets/fosterGarden.css'
    })
      /*.state('activitys.huaruiBank', { /!*华瑞银行宣传页*!/
      url: '/huaruiBank',
      templateUrl: src + 'activity/web/huaruiBank/index.html',
      css: src + 'activity/web/huaruiBank/stylesheets/huaruiBank.css'
    }) */
       .state('activitys.inviteFriend', { /*邀请好友攻略页*/
      url: '/inviteFriend',
      templateUrl: src + 'activity/web/inviteFriend/index.html',
      css: src + 'activity/web/inviteFriend/stylesheets/inviteFriend.css',
      controller: ['$scope', '$http','$state', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function ($scope, $http,$state, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
        getScript([src + 'activity/web/inviteFriend/js/controller.js'], function () {
          inviteFriend($scope, $http,$state, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
        })}]
      })
      .state('activitys.friend', { /*邀请好友宣传页*/
      url: '/friend',
      templateUrl: src + 'activity/web/friend/index.html',
      css: src + 'activity/web/friend/stylesheets/friend.css',
      controller: ['$scope', '$http','$state', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function ($scope, $http,$state, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
        getScript([src + 'activity/web/friend/js/controller.js'], function () {
          invite($scope, $http,$state, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
        })}]
      })
     .state('activitys.forum', { /*论坛峰会*/
      url: '/forum',
      templateUrl: src + 'activity/web/forum/index.html',
      css: src + 'activity/web/forum/stylesheets/forum.css',
      js:src+"activity/web/forum/js/jquery.SuperSlide.2.1.1.js"
    })  
     .state('activitys.support', { /*凉山支教*/
      url: '/support',
      templateUrl: src + 'activity/web/support/index.html',
      css: src + 'activity/web/support/css/support.css'
      // js:src+"activity/web/support/js/jquery.SuperSlide.2.1.1.js"
    })
  .state('activitys.aprExchange', { /*投资兑换奖品*/
    url: '/aprExchange',
    templateUrl: src + 'activity/web/aprExchange/index.html'
  })
  .state('activitys.escrowAdv', {
      url: '/escrowAdv',
      templateUrl: src + 'activity/web/escrowAdv/index.html',
      css: src + 'activity/web/escrowAdv/css/style.css'
  })  
  .state('activitys.breakBillion', {//破30亿
      url: '/breakBillion',
      templateUrl: src + 'activity/web/breakBillion/index.html',
      css: src + 'activity/web/breakBillion/css/breakBillion.css'
  }) 
  .state('activitys.insurance', {//安全保障
      url: '/insurance',
      templateUrl: src + 'activity/web/insurance/index.html',
      css: src + 'activity/web/insurance/css/insurance.css'
  })
}]);

/* routerApp.directive('selectDuorong', function() { //为什么选择多融
     return {
         scope: {
             class: '@',
             title: '@'
         },
         restrict: 'E',
         replace: true,
         template: "<div class='duorongSelect {{class}}'>" + "<div class='title'>{{title||'为什么选择多融'}}</div>" + "<div class='content'>" + "<ul>" + "<li class='img1'>" + "<div class='img'></div>" + "<div class='text'>" + "<h2>国企控股</h2>" + "<p>大型国企中商沪深控股</p>" + "</div>" + "</li>" + "<li class='img2'>" + "<div class='img'></div>" + "<div class='text'>" + "<h2>资金安全保障</h2>" + "<p>历史到期产品100%本息兑付，安全可靠</p>" + "</div>" + "</li>" + "</ul>" + "<ul>" + "<li class='img3'>" + "<div class='img'></div>" + "<div class='text'>" + "<h2>票据100%承兑</h2>" + "<p>所有票据来源于银行与大型国企，100%无条件承兑</p>" + "</div>" + "</li>" + "<li class='img4'>" + "<div class='img'></div>" + "<div class='text'>" + "<h2>专业律所全程支持</h2>" + "<p>专业律所全程保驾护航</p>" + "</div>" + "</li>" + "</ul>" + "</div>" + "</div>"
     }
 })
 routerApp.directive('duorongHonor', function() { //多融荣誉
     return {
         scope: {
             class: '@',
             title: '@'
         },
         restrict: 'E',
         replace: true,
         template: "<div class='duorongHonor {{class}}'>"
             +"<div class='title'>{{title||'多融荣誉'}}</div>"
             +"<div class='content'>"
                 +"<ul>"
                     +"<li>"
                         +"<div class='img'><img src='activity/web/common/images/certificate/img1.png'></div>"
                         +"<h2>多融财富荣膺</h2>"
                         +"<p>“2016中国最佳诚信示范金融企业”</p>"
                     +"</li>"
                     +"<li>"
                         +"<div class='img'><img src='activity/web/common/images/certificate/img2.png'></div>"
                         +"<h2>多融财富荣膺</h2>"
                         +"<p>“中国互联网金融行业AAA级信用企业”</p>"
                     +"</li>"
                     +"<li>"
                         +"<div class='img'><img src='activity/web/common/images/certificate/img3.png'></div>"
                         +"<h2>多融财富荣获</h2>"
                         +"<p>“可信网站验证单位”</p>"
                     +"</li>"
                     +"<li>"
                         +"<div class='img'><img src='activity/web/common/images/certificate/img4.png'></div>"
                         +"<h2>多融财富荣获</h2>"
                         +"<p>“中国信用企业认证体系示范单位”证书</p>"
                     +"</li>"
                 +"</ul>"
             +"</div>"
         +"</div>"
     }
 });
 routerApp.directive('duorongFooter', function() { //多融底部
     return {
         scope: {
             class: '@',
             tel : '@'
         },
         restrict: 'E',
         replace: true,
         template: "<div class='duorongfooter {{class}}'>"
             +"<div class='bg'>"
             +"<div class='content'>"
                 +"<div class='tel'>"
                     +"<div class='img'></div>"
                     +"<div class='text'>"
                         +"<em>{{tel}}</em>"
                         +"<p>服务时间08:30-20:30（法定节假日除外）</p>"
                     +"</div>"
                 +"</div>"
                 +"<div class='left-side'>"
                     +"<div class='down'>App下载</div>"
                     +"<div class='btns'><div class='btn1'></div><div class='btn2'></div></div>"
                     +"<div class='add'>关注公众号</div>"
                 +"</div>"
             +"</div>"
             +"</div>"
         +"</div>"
     }
 });*/
