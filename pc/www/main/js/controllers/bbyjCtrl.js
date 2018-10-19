/* 补标有奖 */
mainModule.controller('bbyjCtrl', ['$rootScope','$scope','$filter','$location','$localStorage',function($rootScope,$scope,$filter,$location,$localStorage) {
	$rootScope.title="补标有奖_融资补标-多融财富";
    $rootScope.keywords='补标有奖,融资补标';
    $rootScope.description='当平台产品募集剩余时间不足1天（T＜24小时），并且融资余额显示为上表中的区间时，客户单笔投资此产品所剩余金额并满标后，即可获得对应奖励。其中返现奖励即刻发放，加息奖励与标的本金收益一起发放。';
	$rootScope.activeNav = 'new';
}]);
