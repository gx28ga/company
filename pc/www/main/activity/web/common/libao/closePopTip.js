window.closePop = function( obj ){
	obj.$css.add('../css/stylesheets/bootstrap-sass-3.3.7/pop.css');
	obj.$css.add('/activity/web/common/libao/screen.css');
	var pop = obj.$uibModal.open({
		animation: true,
		windowClass : 'libaoSuper',
		ariaLabelledBy: 'modal-title',
		ariaDescribedBy: 'modal-body',
		templateUrl: '/activity/web/common/libao/closePopTip.html',
		size: 'lg',
		controller : function($scope,$css,$filter,resourceService,$timeout,$location,$localStorage,$state,$uibModalInstance){
			$timeout(function(){
				if(obj.title){
					$('.ltBox ul li span').each(function(i){
						if(i==0){
							obj.title.h1 && $(this).html(obj.title.h1);
						}
						if(i==1){
							obj.title.h2 && $(this).html(obj.title.h2);
						}
						if(i==2){
							obj.title.h3 && $(this).html(obj.title.h3);
						}
					});
					obj.title.rightTitle && $('.rtBox b').html(obj.title.rightTitle);
				}
			});
			$scope.close = function(){
				$uibModalInstance.dismiss('cancel');
				obj.closeCallback && obj.closeCallback();
			}
			$scope.open = function(){
				obj.reOpen && obj.reOpen();
			}
		}
	});
}