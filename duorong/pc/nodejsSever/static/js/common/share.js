(function(global , $ , factory){
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory : global.share = factory;
})(window,$ , function(config){
	function loadFun(url, callback){
		var script = document.createElement ("script")
		script.type = "text/javascript";
		if (script.readyState){
			script.onreadystatechange = function(){
				if (script.readyState == "loaded" || script.readyState == "complete"){
					script.onreadystatechange = null;
					callback();
				}
			};
		} else {
			script.onload = function(){
				callback();
			};
		}
		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	}
	loadFun("http://res.wx.qq.com/open/js/jweixin-1.2.0.js", function () {
		var obj = {
			url : encodeURIComponent(window.location.href.split('#')[0])
		};
		$.ajax({
			url : "http://www.duorongcf.com/v1/weixin/get-api-info.do",
			data : JSON.stringify(obj),
			//data : obj,
			type : "post",
			dataType : "json",
			contentType:'application/json;charset=UTF-8',
			processData : false,
			success : function(data){

				wx.config({
					debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					appId: data.appId, // 必填，公众号的唯一标识
					timestamp: data.timestamp, // 必填，生成签名的时间戳
					nonceStr: data.nonceStr, // 必填，生成签名的随机串
					signature: data.signature,// 必填，签名，见附录1
					jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage" , "hideMenuItems"],
					callback : function(){
						//alert("ok");
					}
				});
				wx.ready(function () {

					var obj = {
						title: "多融财富",
						desc : "多融财富是上海银砖投资控股集团旗下互联网金融平台。",
						link: "http://www.duorongcf.com",
						imgUrl: "http://www.duorongcf.com/images/common/app_104x107.png",
					}
					config = config || obj;
					//alert('ready');
					wx.onMenuShareTimeline({
						title: config.title,
						link: config.link,
						imgUrl: config.imgUrl,
						success: function () {

							//alert("Timeline success");
						},
						cancel: function () { },
						complete: function (res) {
							//alert(JSON.stringify(res));
						},
						fail: function (res) {
							//alert(JSON.stringify(res));
						}
					});
					wx.onMenuShareAppMessage({
						title: config.title,
						desc: config.desc,
						link: config.link,
						imgUrl: config.imgUrl,
						type: "link",
						dataUrl: "",
						success: function () {
							//alert("onMenuShareAppMessage--ok")
						},
						cancel: function () {
							//alert("onMenuShareAppMessage--cancel")
						}
					});
					//config.callback && config.callback( wx );
				}),
				wx.error(function (res) {
					alert("错误"+res)
				});
			}
		});
	});
});