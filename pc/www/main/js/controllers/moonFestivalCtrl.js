mainModule.controller('moonFestivalCtrl', ['$rootScope',function($rootScope) {
	$rootScope.title = '月满中秋，全场加息放肆嗨';
	var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        paginationClickable: true
    });
	$('.partners .swiper-button-prev').on('click', function(e){
		e.preventDefault();
		mySwiper.swipePrev();
	});
	$('.partners .swiper-button-next').on('click', function(e){
		e.preventDefault();
		mySwiper.swipeNext();
	});
}])