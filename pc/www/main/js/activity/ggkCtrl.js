var routerApp = angular.module('someApp', [
    'ngResource'
    ]);

/*
    username注意
    grid = 表格数据

 */

routerApp.factory(
        'resourceService',
        ['$resource', '$http','$filter',function($resource, $http,$filter) {
    return new resourceService($resource, $http,$filter);
}]);
/*缓存要跳转到页面名*/
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
        this.setProduct=function(item){ tag.product = item;}
        this.getProduct=function(){return tag.product;}
    };
}]);


function resourceService(resource, http , $filter) {
    var actions = {
        'query':{
            method:'GET'
        },
        'queryPost':{
            method:'POST'
            // headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
        },
        'formGet':{
            method:'GET',
            async:false
            // headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
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
         .filter('交互接口对照表', function() {

            return function(name) {
                var portUrlMap = {

                    /* 端午节活动 */
                    // '抽奖': '../../indexQX',
                    // '奖品': '../../lotteryList',
                    // '抽中的奖品': '../../lotteryQX',

                    'end' : 'end'
                };

                return portUrlMap[name];
            }
        })





/*双重豪礼活动页*/
routerApp.controller('doublegiftCtrl'
    , ['$scope', '$rootScope'
        , 'resourceService'
        , '$filter'

        , '$anchorScroll'
        , function ($scope, $rootScope, resourceService, $filter,$anchorScroll) {
            $scope.lijilq=false;
            function getUrlParam(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
                var r = window.location.search.substr(1).match(reg);  //匹配目标参数
                if (r != null) return unescape(r[2]); return null; //返回参数值
            }
            var xx = getUrlParam('upgrade');
            $scope.wap = getUrlParam('wap');
            /*if($scope.wap){
                $scope.wap=true;
            }*/
            if(xx >=0){
                $scope.update = true;
            }else{
                $scope.update = false;
            }

            if (getUrlParam('uid') == '' || getUrlParam('uid') == undefined) {
                $scope.uid = false;
            } else {
                $scope.login = true;
                $scope.uid = getUrlParam('uid');
                /*resourceService.queryPost($scope, $filter('交互接口对照表')('奖品'), {
                    uid:$scope.uid
                },{name:'奖品页面主数据'});*/
            }
            /*所有的点击事件*/
            $scope.onClick=function(name){
                $scope.isFlag=false;
                 switch(name){
                    case '立即领取':
                        $scope.lijilq=true;
                    break;
                    case '关闭弹框':
                        $scope.lijilq=false;
                    break;
                };
            };
            $scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,eObj) {
                switch(eObj.name){
                    case '':
                    break;
                };
            });

            $('.ggk-mask .close').on('click', function() {
                $scope.$apply(function() {
                    $scope.lijilq=false;
                });
            });
    }
])
