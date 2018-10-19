/**
 * Created on 2017/5/11.
 */
mainModule.directive('accountVipAbout', ['myAccountDataService', function(myAccountDataService){
    return {
        templateUrl : '../../main/html/account-vipAbout.html',
        scope : {

        },
        controller : function ($scope, $element, $attrs) {
            this.vipMapData = [];
            var self = this;
            myAccountDataService.getVipMapData().then(function(resp) {
                // self.vipMapData = resp.list;
                self.vipMapData = resp.result.vipConfigVOList;
            }, function (err) {

            });
        },
        bindToController : true,
        controllerAs : 'ctrl',
    };
}]);
