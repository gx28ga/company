(function(window){
    Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
    let T = {
        href : '/',
        pcUrl : 'http://www.duorongcf.com',
        appUrl : 'http://app.duorongcf.com',
        userInfo : null,
        isLogin : false,
        init:function(){
            T.getBrowser();
            T.createElementBlock();
            T.getUserInfo();
            window.bus = new Vue();
            T.topbar();
            T.nav();
            T.navFixed();
        },
        getBrowser : function(){
            let ua = navigator.userAgent.toLowerCase(),
                IS_IPAD = ua.match(/ipad/i) != null,
                IS_IPHONE = !IS_IPAD && ((ua.match(/iphone/i) != null) || (ua.match(/ipod/i) != null)),
                IS_IOS = IS_IPAD || IS_IPHONE,
                IS_ANDROID = !IS_IOS && ua.match(/android/i) != null,
                IS_MOBILE = IS_IOS || IS_ANDROID;
            
            T.Iphone = IS_IOS;
            T.Android = IS_ANDROID;
            T.browser = {
                isIE : ua.search('msie')>-1 , 
                ie6 : ua.search('msie 6.0')>-1,
                ie7 : ua.search('msie 7.0')>-1,
                ie8 : ua.search('msie 8.0')>-1,
                ie9 : ua.search('msie 9.0')>-1,
                ie10 : ua.search('msie 10.0')>-1,
                ie11 : ua.search('msie 11.0')>-1,
                chrome : ua.search('chrome')>-1 && ua.search('qqbrowser')<0,
                safari : (ua.search('safari')>-1 && ua.search('chrome')<0),
                firefox : ua.search('firefox')>-1,
                /*qqbrowser : ua.search('chrome')>-1 && ua.search('qqbrowser')>-1,
                qqbrowserIE : ua.search('chrome')<0 && ua.search('qqbrowser')>-1,
                bidubrowser : ua.search('chrome')>-1 && ua.search('bidubrowser')>-1,
                bidubrowserIE : ua.search('chrome')<0 && ua.search('bidubrowser')>-1,*/
            }

            /*if(T.Iphone || T.Android){
                window.location.href = T.appUrl;
            }*/
            if(T.browser.isIE){
                if(T.browser.ie6 || T.browser.ie7 || T.browser.ie8){
                    window.location.href = "browser.html";
                }
            }
        },
        getUrlParam : function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        },
        createElementBlock : function(){
            $.each(["article","aside","audio","canvas","footer","header","nav","section","video"],function( i , ele ){
                document.createElement(ele);
            })
        },
	    errorMsg( val ){
		    let msg = {
			    1001 : "交易密码错误，连续输错三次，交易密码将被锁定",
			    1002 : "产品已募集完",
			    1003 : "项目可投资金额不足",
			    1004 : "小于起投金额",
			    1005 : "非递增金额整数倍",
			    1006 : "投资金额大于项目单笔投资限额",
			    1007 : "账户可用余额不足",
			    1008 : "已投资过产品，不能投资新手产品",
			    1009 : "用户未登录",
			    1010 : "优惠券不可用",
			    1011 : "投资失败，请稍后再试",
			    1012 : "非首投用户，不能参与投多少送多少活动",
			    2001 : "交易密码已锁定",
			    9919 : "未满18岁用户无法进行投资",
			    6666 : "错误",
			    9999 : "系统错误",
			    test:"网络错误"
		    };
		    if(msg[val]){
		    	return msg[val];
		    }
		    return "错误";
	    },
        toFixed : function( num ){
            let text = String(num).match(/\d+[\.|\d]{3}/);
            if(text){
                text = text[0];
            }else{
                text = num+'.00';
            }
            return text;
        },
	    toInt(num){//只能是整数
		    if(num=='') return num;
		    let val = String(num).match(/^\d+/);
		    if(!val){
			    return 0;
		    }else{
			    return parseInt(val[0]);
		    }
	    },
        toNumber : function( num ){ //把所有非数字的删除
            let val = String(num).match(/[\d]*[\.|\d]{0,3}/);
            if(!val){
                num = num.replace(val[0],'');
            }else{
                return val[0];
            }
            return num;
        },
	    isNumber2(val){
		    val = parseFloat(val);
		    let mat = String(val).match(/^[0-9]+(\.{1}\d{2})/);
		    if((/^[0-9]+(\.{1}\d{2})$/).test(val)){
			    return val;
		    }
		    if((/^[0-9]+(\.{1}\d{1})$/).test(val)){
			    return String(val)+'0';
		    }
		    if((/^[0-9]+$/).test(val)){
			    return String(val)+'.00';
		    }
		    if(mat){
				return mat[0];
		    }

		    return '0.00';
	    },
        justNumber : function( num , callback){ //只能是数字
            var val = String(num).match(/[^\d]/);
            if(val){
                num = num.replace(val[0],'');
            }
            return num;
        },
        maxfilter : function( max , num ){//把较大的数额转为 万
            var text;
            if(num>=max){
                text = String(num/10000).match(/\d+[\.|\d]{3}/);
                if(text){
                    text = text[0];
                }else{
                    text = num/10000+'.00';
                }
                text += '万'
            }else{
                text = num;
            }
            return text;
        },
        getScript : function(src,callback){
            var head = document.head,
                s = document.createElement("script");
            s.src = src;
            s.onload = function() {
                callback();
            };
            head.insertBefore( s, head.firstChild );
        },
        format_number : function(n){ //金额加“逗号”
            return parseFloat(n).toLocaleString()
        },
        goTop : function(){
            $('body,html').animate({scrollTop:0},300)
        },
        go : {
            login : function(){
                var search = window.location.search;
                window.location.href= "/dl"+search;
            },
            reg : function(){
                var search = window.location.search;
                window.location.href= "/zhuce"+search;
            },
	        recharge(){//充值
				T.go.openEscrowAccount(function(){
					window.location.href = '/main/myAccount/recharge'
				});
	        },
	        openEscrowAccount(callback){ //开通存管
		        let loginInfo = T.getLoginInfo();
		        if(loginInfo&& loginInfo.isRas == true) {
		        	return callback();
		        }
		        $(`
					<div class="child">
						<pop ref="pop" :obj="win">
						    <div slot="content" style="padding: 10px 20px;">
						       <img src="/images/escrow-account/upgrade-mark.jpg">
						    </div>
						    <div slot='footer'>
						    	<a class="btn" href="/activitys/huaruiBank" target="_blank" style="margin-right:10px;border: 1px solid #fd9927;color: #fd9927;background:#fff;">了解银行存管</a>
						    	<div @click="activate" class="btn" >激活存管账户</div>
							</div>
						</pop>
					</div>
				`).appendTo('body');

		        new Vue({
			        el: '.child',
			        data(){
				        return {
					        win : {
						        footer: true,
					        }
				        }
			        },
			        mounted(){
				        this.$refs.pop.show();
			        },
			        methods:{
				        activate(){
					        location.href="/main/createEscrowAccount"
				        }
			        }
		        });
	        }
        },
        clearUserInfo : function(){
            T.isLogin = false;
            T.userInfo = null;
            window.localStorage.removeItem('ngStorage-user');
            window.localStorage.removeItem('user');
            window.localStorage.removeItem('userInfo');
            bus.$emit('userInfo', {
                isLogin : false,
                userInfo : null
            });
        },
	    getID(){
		    return location.href.match(/\d+\.html/)[0].replace(".html","")
	    },
	    getLocalInfo(){
		    return JSON.parse(localStorage.getItem('user'));
	    },
	    getLoginInfo(){
		    return JSON.parse(localStorage.getItem('userInfo'));
	    },
        getUserInfo : function( callback ){ //获取用户信息
            T.ajax({
                url: '/indexMemberInfo',
                callback: true,
                success: function (_data) {
                    if (_data.success) {
                        T.userInfo = _data.map;
	                    localStorage.setItem('user',JSON.stringify(_data.map));
	                    localStorage.setItem('ngStorage-user',JSON.stringify(_data.map));
                        if (_data.map.realName == '' || _data.map.realName == undefined) {
                            T.userInfo.realName = '亲爱的用户';
                        }
                        T.islogin = true;
                        bus.$emit('userInfo', {
                            isLogin : true,
                            userInfo : T.userInfo
                        });
                    }
                },
                complete: function( obj ) {
                	try{
		                if(obj.responseJSON.success!==true){
			                T.clearUserInfo();
		                }
	                }catch(e){
		                T.clearUserInfo();
	                }

                }
            });
        },
        exit : function(){
            T.ajax({
                url: '/exit',
                callback: true,
                complete: function (_data) {
                    T.clearUserInfo();
                    location.reload();
                }
            });
        },
        topbar : function(){
            var topbar  = document.getElementById('Topbar');
            if(topbar){
                new Vue({
                    el: '#Topbar',
                    delimiters: ['${', '}'],
                    data: {
                        isLogin : T.isLogin,
                        userInfo : T.userInfo
                    },
                    mounted:function(){
                        var self = this;
                        bus.$on('userInfo',function(obj){
                            self.isLogin = obj.isLogin;
                            self.userInfo = obj.userInfo;
                        })
                    },
                    methods : {
                        login : T.go.login,
                        reg : T.go.reg
                    }
                });
            }
        },
        nav : function(){
            var nav  = document.getElementById('navContent');
            if(nav){
                T.Nav = new Vue({
                    el: '#navContent',
                    delimiters: ['${', '}'],
                    data: {
                        isLogin : T.isLogin,
                        userInfo : T.userInfo,
                        nav : {
                            home : true,
                            dq : false,
                            pj : false,
                            xs : false,
                            anqun : false,
                            about : false
                        }
                    },
                    mounted:function(){
                        var self = this;
                        bus.$on('userInfo',function(obj){
                            self.isLogin = obj.isLogin;
                            self.userInfo = obj.userInfo;
                        })
                    },
                    methods : {
                        login : T.go.login,
                        setNav:function(name){
                            var self = this;
                            $.each(this.nav,function( key , val ){
                                self.nav[key] = false;
                            });
                            self.nav[name] = true;
                        }
                    }
                });
            }
        },
        setNavCurrent : function(name){ //设置栏目当前状态
            /** name = 以下情况
            *home首页
            *bankBillList2定期理财
            *bankBillList票据理财
            *xinshou新手指引
            *anqun安全保障
            *about关于我们
             **/
            T.Nav.setNav(name);
        },
        navFixed : function(){
            var head = $('.header-wrapper') ,
                transition = head.find('.transition'),
                clearTime;
            if(!head.length) return;
            function setTime( demo  ,t  , callback ){
                demo.css({'transition-duration':t})
                demo.css({'-ms-transition-duration':t})
                if(callback){
                    setTimeout(callback,(parseInt(t)+20));
                }
            }
            $(window).scroll(function(){ //头部导航滚动效果
                var height = head.height()+head.offset().top ,
                    scrollTop = $(document).scrollTop();
                clearTimeout(clearTime);
                if(scrollTop>height){
                    clearTime = setTimeout(function(){
                        setTime(transition,'0s',function(){
                            setTime(transition,'1s',function(){
                                transition.addClass('hover');
                            })
                        })
                        transition.addClass('fixed');
                    },200)
                }else{
                    transition.removeClass('fixed hover');
                    /*clearTime = setTimeout(function(){
                        transition.removeClass('hover');
                        setTimeout(function(){
                            transition.removeClass('fixed');
                        },1050)
                    },200);*/
                }

            });
        },
        getUrl:function(name){//获取url各部分的参数
             var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        },
        getidx:function(){//获取请求参数
                return JSON.parse(localStorage.getItem('idxname'));   
        },
        ajax : function(obj){
            obj.complete = obj.complete || function(){};
            obj.data = obj.data || { time : '2017'};
            $.ajax({
                url : obj.url ,
                type : 'POST',
                dataType : 'json',
                accept:"application/json, text/plain",
                contentType:'application/json;charset=UTF-8',
                processData : false,
                data : JSON.stringify(obj.data),
                success : function(data){
	                obj.success && obj.success(data);
                },
                complete : obj.complete,
                error : function(){
                }
            });
        },
        getQueryString : function( name ){
            var reg = new RegExp("(^|&|/?)" + name + "=([^&]*)(&|$)", "i");
            var r = encodeURI(window.location.search||window.location.href||window.location.hash).substr(1).match(reg);
            if (r != null) return unescape(r[2]); return null;
        }
    }
    T.init();
    window.T = T;
})(window);
