/**
 * Created by Dell on 2017/5/1.
 */
mainModule.factory('pointMallDataService', ['$filter', '$resource', '$localStorage', '$q', '$rootScope', function ($filter, $resource, $localStorage, $q, $rootScope) {
    var self = {};

    self.uid = $localStorage.uid;
    var goodsListReqUrl = $filter('交互接口对照表')('积分商城 + 个人积分') + '?uid=';
    var exchangeReqBaseUrl = $filter('交互接口对照表')('积分商城 - 兑换');
    var exchangeRecordsBaseUrl = $filter('交互接口对照表')('积分商城 - 兑换记录');
    var allPointChangesBaseUrl = $filter('交互接口对照表')('积分商城 - 积分明细');

    self.homeData = undefined;
    self.onlyGoodsList = undefined;

    $rootScope.$on('$stateChangeSuccess', function (event,  toState, toParams, fromState, fromParams) {
        if (fromState.url.indexOf('/pointMall') == 0 && toState.url.indexOf('/pointMall') != 0) {
            delete self.homeData;
        }
    });

    self.getHomeData = function () {
        var deferred = $q.defer();
        if ($localStorage.uid == self.uid && self.homeData != undefined) {
            deferred.resolve(self.homeData.map);
        } else {
            self.uid = $localStorage.uid;
            var homeDataReqUrl = goodsListReqUrl + self.uid;
            $resource(homeDataReqUrl).get({}, function (resp) {
                if (resp.hasOwnProperty('success') && resp.success === true) {
                    self.homeData = resp;
                    deferred.resolve(resp.map);
                }
            });
        }
        return deferred.promise;
    };

    self.getGoodsList = function () {
        var deferred = $q.defer();
        if (self.onlyGoodsList != undefined) {
            deferred.resolve(self.onlyGoodsList.map);
        } else {
            $resource(goodsListReqUrl).get({}, function (resp) {
                if (resp.hasOwnProperty('success') && resp.success === true) {
                    self.onlyGoodsList = resp;
                    deferred.resolve(resp.map);
                }
            });
        }
        return deferred.promise;
    };
    
    self.sendExchangeRequest = function (uid, goodsId, quantity) {
        var reqUrl = exchangeReqBaseUrl + '?uid=' + uid + '&productId=' + goodsId + '&quantity=' + quantity;
        var deferred = $q.defer();
        $resource(reqUrl).get({}, function (resp) {
            if (resp.hasOwnProperty('success')) {
                if (resp.success == true) {
                    // deferred.resolve(resp.map.page.result.desc);
                    deferred.resolve('恭喜你成功兑换');
                } else {
                    deferred.reject(resp);
                }
            }
        });
        return deferred.promise;
    };

    self.resetHomeData = function () {
        delete self.homeData;
    };

    self.getExchangeRecords = function (uid) {
        var deferred = $q.defer();
        var reqUrl = exchangeRecordsBaseUrl + '?uid=' + uid;
        $resource(reqUrl).get({}, function (resp) {
            if (resp.hasOwnProperty('success') && resp.success === true) {
                deferred.resolve(resp.map);
            }
        });
        return deferred.promise;
    };

    self.getAllPointChanges = function (uid) {
        var deferred = $q.defer();

        var reqUrl = allPointChangesBaseUrl + '?uid=' + uid;
        $resource(reqUrl).get({}, function (resp) {
           if (resp.hasOwnProperty('success') && resp.success === true) {
               deferred.resolve(resp.map);
           }
        });

        return deferred.promise;
    };

    return self;
}]);