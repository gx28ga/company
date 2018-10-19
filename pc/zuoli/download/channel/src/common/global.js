import './cookie.js';
/*import requirePop from '../pop/requirePop.js';*/
Date.prototype.Format = function (fmt) { //author: meizz
	let o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (let k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}
let T = {
	body : $('body')
	,init : function( obj ){
		$.extend( T , obj );
		T.setImgSize();
		T.mobile();
		window.onresize = T.setImgSize;
	}
	,mobile : function(){
		let ua = navigator.userAgent,
			uaLower = ua.toLowerCase(),
			IS_IPAD = ua.match(/iPad/i) != null,
			IS_IPHONE = !IS_IPAD && ((ua.match(/iPhone/i) != null) || (ua.match(/iPod/i) != null)),
			IS_IOS = IS_IPAD || IS_IPHONE,
			IS_ANDROID = !IS_IOS && ua.match(/android/i) != null,
			IS_MOBILE = IS_IOS || IS_ANDROID ;

		T.Iphone = IS_IOS;
		T.Android = IS_ANDROID;
		T.Mobile = IS_MOBILE

		function is_weixin() {
			let ua = uaLower;
			if (ua.match(/micromessenger/i) == "micromessenger") {
				return true;
			} else {
				return false;
			}
		}
		function is_weixin_ios() {
			let ua = uaLower;
			if (ua.match(/micromessenger/i) == "micromessenger" && T.Iphone )
			{ return true; } else { return false; }
		};
		function is_weibo() {
			let ua = uaLower;
			if (ua.match(/Weibo/i) == "weibo")
			{ return true; } else { return false; }
		};
		function is_qq() {
			let ua = uaLower;
			if (ua.match(/QQ\//i) == "qq/")
			{ return true; } else { return false; }
		};
		T.weixin = is_weixin();
		T.ios_weixin = is_weixin_ios();
		T.weibo = is_weibo();
		T.qq = is_qq();
	},
	setItem : function( key , value , obj ){
		localStorage.setItem(key,JSON.stringify(value));
	},
	getItem : function( name ){
		return JSON.parse(localStorage.getItem(name));
	},
	getEvent : function(e, def , p){
		e = e || window.event;
		if(!def){
			e.stopPropagation()
		}
		if(!p){
			e.preventDefault()
		}
		e = e.touches ? e.touches[0] : e;
		return e;
	}
	,getQueryString : function( name ){
		var reg = new RegExp("(^|&|/?)" + name + "=([^&]*)(&|$)", "i");
		var r = encodeURI(window.location.search||window.location.href||window.location.hash).substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	}
	,update : function(){
		T.width = T.body.width();
		T.height = T.body.height();
	},
	setImgSize : function(){
		T.update();
		let  originWidth = 375
			,ratio = T.width/originWidth;

		$('.img-size').each(function(){
			let self = $(this);
			$.each(['height','width','fontSize','left','right','bottom','top' ,'margin','padding', 'paddingTop' ,'lineHeight' , 'paddingLeft' , 'paddingRight' , 'paddingBottom','marginTop', 'marginLeft' , 'marginRight' , 'marginBottom'],function( i , str ){
				let num = self.attr('data-'+str);
				if( num ){
					num = num*ratio/2/16+'rem';
					self.css(str,num)
				}
			});
		});
	},
	downApp(){
		var url = {
			weixin_ios : "https://www.zuoli360.com/h5/webview/expect/qidai.html"
			/*  ,ios : 'https://itunes.apple.com/cn/app/duo-rong-li-cai-guo-qi-kong/id1095192150?mt=8'
			  ,android : 'http://app.duorongcf.com/html/2weima.html'  */
			,ios : 'https://www.zuoli360.com/h5/webview/expect/qidai.html'
			,android : 'https://h5.zuoli360.com/apk/llqb_'+T.getQueryString("channel")+'_app.apk'
			,ios_src : $(this).attr('href')
			,android_src : $(this).attr('href')
			,appCode : $(this).attr('appId')
			,obj : $(this).attr('appValue')
		};

		if (T.weixin == true) {
			alert("请用浏览器打开");
		} else if (T.ios_weixin == true) {
			window.location.href = url.weixin_ios;
		}else if (T.Iphone) {

			/*var iFrame = document.createElement('iframe');
			iFrame.style.display = "none";
			iFrame.src = 'aitougu://';

			document.body.appendChild(iFrame);*/

			setTimeout(function () {
				if (!document.webkitHidden) {
					window.location.href = url.ios;
				}

			}, 25);

		} else if (T.Android) {
			location.href = 'llqb://llqb/';
			setTimeout(function(){
				window.location.href = url.android;
			},20);
		}
	}
}
module.exports = T;