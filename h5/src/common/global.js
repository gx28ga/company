import LOCALSTOR from "../contant/LOCALSTORAGE";
let ua = navigator.userAgent,
	uaLower = ua.toLowerCase(),
	IS_IPAD = ua.match(/iPad/i) != null,
	IS_IPHONE = !IS_IPAD && ((ua.match(/iPhone/i) != null) || (ua.match(/iPod/i) != null)),
	IS_IOS = IS_IPAD || IS_IPHONE,
	IS_ANDROID = !IS_IOS && ua.match(/android/i) != null,
	IS_MOBILE = IS_IOS || IS_ANDROID;
let Tool = {
	isWeixin() {
		let ua = uaLower;
		if (ua.search(/micromessenger/i)>-1) {
			return true;
		} else {
			return false;
		}
	},
	isWeixinIos() {
		let ua = uaLower;
		if (ua.search(/micromessenger/i)>-1 && this.Iphone) {
			return true;
		} else {
			return false;
		}
	},
	isWeibo() {
		let ua = uaLower;
		if (ua.match(/Weibo/i) === "weibo") {
			return true;
		} else {
			return false;
		}
	},
	isQq() {
		let ua = uaLower;
		if (ua.match(/QQ\//i) === "qq/") {
			return true;
		} else {
			return false;
		}
	}
};
let T = {
    uid : null,
	token: null,
	toFrom : null, //来源
    channel : null,
    version: "1.9.7", //
	width: 0,
	height: 0,
    isApp:false,
    isNotification:null,
	init: function () {
		T.update();
		T.token = T.getItem(LOCALSTOR.APP_TOKEN);
		let user = T.getItem(LOCALSTOR.USER_INFO);
        T.uid = user?user.uid:null;
        this.mobile();
		window.onresize = T.setImgSize();
	},
	update: function () {
		T.width = window.innerWidth;
		T.height = window.innerHeight;
	},
	getQueryString: function (name) {
		let reg = new RegExp("(^|&|/?)" + name + "=([^&]*)(&|$)", "i");
		let r = encodeURI(window.location.search || window.location.href || window.location.hash).substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	},
	getQuery: function (name) {//获取url汉字
		let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		let r = window.location.search.substr(1).match(reg);
		if (r != null) return decodeURI(r[2]);
		return null;
	},
	mobile: function () {
		T.Iphone = IS_IOS;
		T.Android = IS_ANDROID;
		T.Mobile = IS_MOBILE;
		if (T.Iphone && (screen.height == 812 && screen.width == 375)) {
			T.IphoneX = true;
		}
		T.weixin = Tool.isWeixin();
		T.iosWeixin = Tool.isWeixinIos();
		T.weibo = Tool.isWeibo();
		T.qq = Tool.isQq();
		T.channel = T.Iphone?1:2;
	},
	callApp: { //向app发现通信
		call(name, val) {
			val = val || "";
			val = JSON.stringify(val);
			if (T.Iphone) {
				if (window.webkit) {
					try {
						window.webkit.messageHandlers[name].postMessage(val);
					} catch (e) {
						console.log("messageHandlers或postMessage调用失败");
					}
				} else {
					console.log("没有webkit方法，调用失败");
				}
			} else {
				if (window.DRAPI) {
					DRAPI[name](val);
				} else {
					console.log("没有DRAPI方法，调用失败");
				}
			}
		},
		share(obj) {
			/*let share = {
				title: '分享标题', // 分享标题
				desc: '分享描述', // 分享描述
				link: 'http://www.duorongcf.com', // 分享链接
				imgUrl: "https://www.duorongcf.com/images/home/newslider/video.jpg", // 分享图标
				type: '', // 分享类型,music、video或link，不填默认为link
				dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			};*/
			T.callApp.call("share", obj);
		},
		login(obj) {
			T.callApp.call("login", {
				uid: obj.uid,
				token: obj.token
			});
		},
		loginout() {
			T.callApp.call("loginout");
		},
        callPhone(){
            T.callApp.call("callPhone","4006908896");
        },
        webview( obj ){
		    let conf = {
                back: true,
                title : obj.title,
                href : obj.href,
                share : {
                    title: obj.title, // 分享标题
                    desc: obj.title, // 分享描述
                    link: obj.href, // 分享链接
                    imgUrl: "https://www.duorongcf.com/images/home/newslider/video.jpg", // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                },
                topMask:{
                    height : 50,
                    backgroundColor:"ffffff",
                    opacity : 0.5
                },
                bottomMask:{
                    height : 100,
                    backgroundColor:"fff000",
                    opacity : 1
                }
            };
		    Object.assign(conf,obj);
            T.callApp.call("webview",conf);
            /*T.callApp.call("webview", {
                back: true,
                title : "分享标题",
                href : "https://mp.weixin.qq.com/s/6JL3SRmLDXpxg_uEXUf4Gw?uid=1712",
                share : {
                    title: '分享标题', // 分享标题
                    desc: '分享描述', // 分享描述
                    link: 'http://www.duorongcf.com', // 分享链接
                    imgUrl: "https://www.duorongcf.com/images/home/newslider/video.jpg", // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                }
            });*/
        }
	},
	appInfo: {},
	appCall: { //app 向我发起通信
		setAppInfo(obj) {
			obj = JSON.parse(String(obj));
			T.appInfo = obj;
			T.version = obj.version;
			T.isNotification=obj.isNotification;
			T.isApp=obj.isApp == 1;//判断是不是ios客户端打开
			//T.channel = obj.channel;
            VueParent.setNav({
                show:false
            });
            VueParent.setHead({
                show:false
            })
		},
        back( status ){//后通功能
		    T.appInfo.back = status;
        }
	},
	setItem(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	},
	getItem(name) {
		return JSON.parse(localStorage.getItem(name));
	},
	delItem(name) {
		localStorage.removeItem(name);
	},
	setSession(key, value) {
		sessionStorage.setItem(key, JSON.stringify(value));
	},
	getSession(name) {
		return JSON.parse(sessionStorage.getItem(name));
	},
	delSession(name) {
		sessionStorage.removeItem(name);
	},
    getDate : {
        today(){//今天
            let date = new Date();
            return new Date(Date.parse(date)).Format("yyyy-MM-dd");
        },
        tomorrow( time ){//明天
            let date = new Date(),
                tomorrow;
            time = time || date.getTime();
            tomorrow = date.setTime(time+24*60*60*1000);
            return new Date(tomorrow).Format("yyyy-MM-dd");
        }
    },
	setImgSize() {
		T.update();
		let originWidth = T.Mobile?375:750,
			ratio = T.width / originWidth;
		$('.img-size').each(function () {
			let self = $(this);
			$.each(['height', 'width', 'fontSize', 'left',
				'right', 'bottom', 'top', 'paddingTop',
				'margin',
				'padding',
				'borderWidth',
				'lineHeight', 'paddingLeft', 'paddingRight',
				'paddingBottom', 'marginTop', 'marginLeft',
				'marginRight', 'marginBottom'], function (i, str) {
				let num = self.attr('data-' + str);
				if (num) {
					num = num * ratio / 2 / 16 + 'rem';
					self.css(str, num)
				}
			});
		});
	},
    scrollTo(options){
        let defaults = {
            toT : 0,    //滚动目标位置
            durTime : 500,  //过渡动画时间
            delay : 30,     //定时器时间
            callback:null   //回调函数
        };
        let opts = $.extend(defaults,options),
            timer = null,
            _this = $(window),
            curTop = _this.scrollTop(),//滚动条当前的位置
            subTop = opts.toT - curTop,    //滚动条目标位置和当前位置的差值
            index = 0,
            dur = Math.round(opts.durTime / opts.delay),
            smoothScroll = function(t){
                index++;
                let per = Math.round(subTop/dur);
                if(index >= dur){
                    _this.scrollTop(t);
                    window.clearInterval(timer);
                    if(opts.callback && typeof opts.callback === 'function'){
                        opts.callback();
                    }
                     return false;
                }else{
                    _this.scrollTop(curTop + index*per);
                }
            };
        timer = window.setInterval(function(){
            smoothScroll(opts.toT);
        }, opts.delay);
        return _this;
    }
};
export default T;
