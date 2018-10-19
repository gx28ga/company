/**
 * Created by Dell on 2017/5/1.
 */
mainModule.factory('myAccountDataService', ['$filter', '$resource', '$localStorage', '$q', '$rootScope', function ($filter, $resource, $localStorage, $q, $rootScope) {
    var self = {};

    var vipMapReqUrl = $filter('交互接口对照表')('会员等级数据') + '?uid=';
    var oldUserBankInfoUrl = $filter('交互接口对照表')('未升级存管用户已绑卡信息');
    var createEscrowAcctUrl = $filter('交互接口对照表')('存管账户开户认证');
    var withdrawResultUrl = $filter('交互接口对照表')('提现结果');
    var rechargeResultUrl = $filter('交互接口对照表')('充值结果');
    /**********************存管上线后快捷充值优化 2017-07-24 Start *************************************/
    var rechargeGetVfycdUrl = $filter('交互接口对照表')('快捷充值获取验证码');
    var fastRechargeUrl = $filter('交互接口对照表')('快捷充值');
    /**********************存管上线后快捷充值优化 2017-07-24 End   *************************************/
    /**********************活期上线新手专享宣传页 2017-08-07 Start *************************************/
    var currentNoviceUrl = '/v1/current/product/info.do'; //是否活期新手
    var timeNoviceUrl = '/detail'; //票据详情 - 是否定期新手
    var timeNoviceProductUrl =  '/indexProduct';   //商品列表 - 定期新手专享产品信息
    /**********************活期上线新手专享宣传页 2017-08-07 End   *************************************/

    self.vipMapData = undefined;

    $rootScope.$on('$stateChangeSuccess', function (event,  toState, toParams, fromState, fromParams) {
        if (fromState.name.indexOf('main.myAccount') == 0 && toState.name.indexOf('main.myAccount') != 0) {
            delete self.vipMapData;
        }
    });

    self.getVipMapData = function () {
        var deferred = $q.defer();
        if (self.vipMapData != undefined) {
            deferred.resolve(self.vipMapData.map);
        } else {
            $resource(vipMapReqUrl + $localStorage.uid).get({}, function (resp) {
                if (resp.hasOwnProperty('success') && resp.success === true) {
                    self.vipMapData = resp;
                    deferred.resolve(resp.map);
                }
            });
        }
        return deferred.promise;
    };

    var __commonPostRequest = function (url, params) {
        var deferred = $q.defer();
        $resource(url).save({}, params, function (resp) {
            deferred.resolve(resp);
        });
        return deferred.promise;
    };


    var __commonGettRequest = function (url) {
        var deferred = $q.defer();
        $resource(url).get({}, function (resp) {
            deferred.resolve(resp);
        });
        return deferred.promise;
    };

    self.getOldUserBankInfo = function () {
        return __commonGettRequest(oldUserBankInfoUrl);
    };

    self.createEscrowAccount = function (params) {
        var deferred = $q.defer();
        $resource(createEscrowAcctUrl).save({}, params, function (resp) {
            deferred.resolve(resp);
        });
        return deferred.promise;
    };

    self.getWithdrawResult = function (params) {
        var deferred = $q.defer();
        $resource(withdrawResultUrl).save({}, params, function (resp) {
            deferred.resolve(resp);
        });
        return deferred.promise;
    };

    self.getRechargeResult = function (params) {
        return __commonPostRequest(rechargeResultUrl, params);
    };

    /**********************存管上线后快捷充值优化 2017-07-24 Start *************************************/
    self.getRechargeVfycd = function (params) {
        return __commonPostRequest(rechargeGetVfycdUrl, params);
    };
    self.fastRecharge = function (params) {
        return __commonPostRequest(fastRechargeUrl, params);
    };
    /**********************存管上线后快捷充值优化 2017-07-24 End   *************************************/

    /**********************活期上线新手专享宣传页 2017-08-07 Start *************************************/
    self.getCurrentNoviceInfo = function () {
        return __commonPostRequest(currentNoviceUrl, {});
    };
    self.getTimeNoviceProduct = function () {
        return __commonPostRequest(timeNoviceProductUrl, {});
    };
    self.getTimeNoviceInfo = function (params) {
        return __commonPostRequest(timeNoviceUrl, params);
    };
    /**********************活期上线新手专享宣传页 2017-08-07 End   *************************************/

    return self;
}]);