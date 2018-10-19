window.runoutPop = function( obj ){
	obj.$css.add('../css/stylesheets/bootstrap-sass-3.3.7/pop.css');
	obj.$css.add('/activity/web/common/libao/screen.css');
	var pop = obj.$uibModal.open({
		animation: true,
		windowClass : 'runoutPop',
		ariaLabelledBy: 'modal-title',
		ariaDescribedBy: 'modal-body',
		templateUrl: '/activity/web/common/libao/runout.html',
		size: 'lg',
		controller : function($scope,$css,$filter,resourceService,$timeout,$location,$localStorage,$state,$uibModalInstance){
			$timeout(function(){
				$('.content').html(obj.text)
				$('.btn').html(obj.btnText)
			});
			$scope.close = function(){
				$uibModalInstance.dismiss('cancel');
				obj.closeCallback && obj.closeCallback();
			}
			$scope.open = function(){
				$uibModalInstance.dismiss('cancel');
				obj.reOpen && obj.reOpen();
			}
		}
	});
}