window.shakeCoinsTreeDown = function ( getScript,$scope,$rootScope,$uibModal,$css) {
   var btn = $('.shake-btn');
	function open(){
		getScript(['/activity/web/common/libao/open.js'],function(){
			libao({
				$uibModal : $uibModal,
				$css : $css , 
				title : {
					h1 : '恭喜您！',
					h2 : '<span>获得</span><strong>10</strong><span>万元理财金</span>',
					h3 : '+翻倍券<em>+3%</em>加息券'
				},
				closeCallback : function(){ //关闭弹窗
					getScript(['/activity/web/common/libao/closePopTip.js'],function(){
		   			closePop({
		   				$uibModal : $uibModal,
		   				$css : $css , 
		   				title : {
		   					h1 : '12%高收益',
		   					h2 : '100,000元体检金',
		   					h3 : '翻倍券+3%加息券',
		   					rightTitle : '你还有10万元大礼包未领取'
		   				},
		   				reOpen : open, //重新打开 
		   				closeCallback : function(){ //关闭弹窗
		   					
		   				}
		   			});
		   		});
				}
			});
		});
	}
   btn.click(function(){
   		var shakeCoinsTreeDown = $.cookie('shakeCoinsTreeDown');
	   if(!shakeCoinsTreeDown){
	   		$.cookie('shakeCoinsTreeDown', 'true', { expires: 99999, path: '/' });
	   		open();
	   }else{
			getScript(['/activity/web/common/libao/runoutPop.js'],function(){
	   			runoutPop({
	   				$uibModal : $uibModal,
	   				$css : $css , 
	   				text : '<p>免费次数已用完</p><p>注册后获得再摇一次机会</p>',
	   				btnText : '注册领取大礼包',
	   				reOpen : open, //重新打开 
	   				closeCallback : function(){ //关闭弹窗
	   					
	   				}
	   			});
	   		});
	   }
   })
}