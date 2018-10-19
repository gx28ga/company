routerApp.config(['$stateProvider', function($stateProvider) {
    function getScript(url, callback, charset, b) {
        var head = document.getElementsByTagName("head")[0] || doc.documentElement;
        $.each(url, function(i) {
            var script = document.createElement("script");
            if (charset) {
                script.charset = charset;
            }
            script.src = this;
            script.onload = script.onreadystatechange = function() {
                if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                    callback(i);
                    script.onload = script.onreadystatechange = null;
                }
            };
            head.insertBefore(script, head.firstChild);
        })
    }
    var src = '/',
        activityPath = src + 'activity/web';
    $stateProvider.state('activitys', {
            url: '/activitys',
            //templateUrl: src + 'html/activity/activity.html'
            css: activityPath + '/common/stylesheets/activitys.css',
            templateUrl: src + 'activity/web/index.html',
            controller: function($scope, $css) {
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
        .state('online-activity.christmasNewYear', { /*市场双旦*/
            url: '/christmasNewYear',
            templateUrl: src + 'activity/web/christmasnewYear/index.html',
            css: src + 'activity/web/christmasnewYear/stylesheets/christmasNewYear.css',
            controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
                getScript([src + 'activity/web/christmasnewYear/js/controllers.js'], function() {
                    christmasNewYear($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
                })
            }]
        }).state('online-activity.shakeCoinsTree', { /*摇钱树*/
            url: '/shakeCoinsTree',
            templateUrl: src + 'activity/web/shakeCoinsTree/index.html',
            css: src + 'activity/web/shakeCoinsTree/stylesheets/shakeCoinsTree.css',
            controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
                getScript([src + 'activity/web/shakeCoinsTree/js/controllers.js'], function() {
                    shakeCoinsTree($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
                })
            }]
        }).state('publicity', { /*摇钱树落地页*/
            url: '/publicity',
            templateUrl: activityPath + '/shakeCoinsTreeDown/index.html',
            css: activityPath + '/shakeCoinsTreeDown/stylesheets/shakeCoinsTree.css',
            controller: ['$scope', '$rootScope', '$uibModal', '$css', function($scope, $rootScope, $uibModal, $css) {
                getScript([activityPath + '/shakeCoinsTreeDown/js/index.js'], function() {
                    shakeCoinsTreeDown(getScript, $scope, $rootScope, $uibModal, $css);
                })
            }]
        }).state('activitys.secWave', { /*破十亿第二波*/
            url: '/secWave',
            templateUrl: src + 'activity/web/secWave/index.html',
            css: src + 'activity/web/secWave/stylesheets/secWave.css',
            controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
                getScript([src + 'activity/web/secWave/js/controller.js'], function() {
                    secWave($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
                })
            }]
        }).state('main.report', {
            url: '/report',
            templateUrl: '../../main/html/jt1.html'
        }).state('main.report.201612', { /*12月运营报告pc*/
            url: '/201612',
            templateUrl: src + 'activity/report/201612/web/index.html',
            css: src + 'activity/report/201612/web/decReport.css',
            controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
                getScript([src + 'activity/report/201612/web/js/controller.js'], function() {
                    decReport($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
                })
            }]
        }).state('main.report.201701', { /*17年1月运营报告pc*/
            url: '/201701?(menuName)',
            templateUrl: src + 'activity/report/201701/web/index.html',
            css: src + 'activity/report/201701/web/decReport.css',
            controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
                getScript([src + 'activity/report/201701/web/js/controller.js'], function() {
                    decReport($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
                })
            }]
        }).state('main.report.201702', { /*17年2月运营报告pc*/
            url: '/201702?(menuName)',
            templateUrl: src + 'activity/report/201702/web/index.html',
            css: src + 'activity/report/201702/web/decReport.css',
            controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
                getScript([src + 'activity/report/201702/web/js/controller.js'], function() {
                    decReport($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
                })
            }]
        })
        .state('main.report.201703', { /*17年2月运营报告pc*/
            url: '/201703?(menuName)',
            templateUrl: src + 'activity/report/201703/web/index.html',
            css: src + 'activity/report/201703/web/decReport.css',
            controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
                getScript([src + 'activity/report/201703/web/js/controller.js'], function() {
                    decReport($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
                })
            }]
        })
        .state('activitys.thirdWave', { /*破十亿第三波*/
            url: '/thirdWave',
            templateUrl: src + 'activity/web/thirdWave/index.html',
            css: src + 'activity/web/thirdWave/stylesheets/thirdWave.css',
            controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
                getScript([src + 'activity/web/thirdWave/js/controller.js'], function() {
                    thirdWave($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
                })
            }]
        }).state('activitys.fouthWave', { /*破十亿第四波*/
            url: '/fouthWave',
            templateUrl: src + 'activity/web/fouthWave/index.html',
            css: src + 'activity/web/fouthWave/stylesheets/fouthWave.css',
            controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
                getScript([src + 'activity/web/fouthWave/js/controller.js'], function() {
                    secWave($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
                })
            }]
        }).state('activitys.blewCard', { /*刮刮卡*/
            url: '/blewCard',
            templateUrl: src + 'activity/web/blewCard/index.html',
            css: src + 'activity/web/blewCard/stylesheets/blewCard.css',
            controller: ['$scope', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
                getScript([src + 'activity/web/blewCard/js/controller.js'], function() {
                    blewCard($scope, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript);
                })
            }]
        }).state('activitys.marchInvest', { /*抽奖兑换*/
            url: '/marchInvest',
            templateUrl: src + 'activity/web/marchInvest/index.html',
            css: src + 'activity/web/marchInvest/stylesheets/marchInvest.css',
            controller: ['$scope', '$http', '$rootScope', '$filter', 'resourceService', '$timeout', '$resource', '$location', '$localStorage', function($scope, $http, $rootScope, $filter, resourceService, $timeout, $resource, $location, $localStorage) {
                getScript([src + 'activity/web/marchInvest/js/controller.js'], function() {
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

