import './cookie.js';
import requirePop from '../pop/requirePop.js';
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
    ,androidUrl : ''
    ,iosUrl : ''
    ,downApp : ''
    ,imgsrc : ''
    ,info : {} //用户信息
    ,init : function( obj ){
        $.extend( T , obj );
        T.setImgSize();
        T.mobile();
        window.onresize = T.setImgSize;
    }
    ,setLoginInfo : function(){
        document.cookie = "islogin=true; expires="+new Date(new Date().getTime()+30*60*1000)+";path=/"
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
    toFixed( num ){
        let text = String(num).match(/\d+[\.|\d]{3}/);
        if(text){
            text = text[0];
        }else{
            text = num+'.00';
        }
        return text;
    },
    toNumber : function( num ){ //把所有非数字的删除
        let val = String(num).match(/[\d]*[\.|\d]{0,3}/);
        if(!val){
            num = num.replace(val[0],'');
        }else{
            return val[0];
        }
        return num;
    }
    ,justNumber : function( num , callback){ //只能是数字
        let val = String(num).match(/[^\d]/);
        if(val){
            num = num.replace(val[0],'');
        }
        return num;
    }
    ,maxfilter( max , num ){//把较大的数额转为 万
        let text;
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
    formatDay : function( n , txt ){//YYYYMMDD 转换
        txt = txt || '-';
        return n.substr(0,4)+txt+n.substr(4,2)+txt+n.substr(6,2);
    },
    formatDate : function( num ){ //YYYYMMDDHHMMSS 转换
        return num.substr(0,4)+"-"+num.substr(4,2)+"-"+num.substr(6,2)+" "+num.substr(8,2)+":"+num.substr(10,2)+":"+num.substr(12,2)
    },
    tAdd1( _day ){ //获取时间  t+1
        if(void 0 == _day){
            _day = 0;
        }
        let myDate = new Date() ,
            year = myDate.getFullYear() , 
            month = myDate.getMonth()+1 , 
            day = myDate.getDate()+1+_day ,
            hours = myDate.getHours() ,
            minutes = myDate.getMinutes() ,
            second = myDate.getSeconds();

        [1,3,5,7,8,10,12].map(val=>{
            if(month==val && day>31){
                month +=1;
                day = 1;
            }
        });
        [4,6,9,11].map(val=>{
            if(month==val && day>30){
                month +=1;
                day = 1;
            }
        });
        if(month==2 && day>28){
            month +=1;
            day = 1;
        }

        if(month>12){
            year+=1;
        }

        month = month<10?('0'+month) : month;
        day = day<10?('0'+day) : day;
        second = second<10?('0'+second) : second;

        return (year+"-"+month+"-"+day);
    }
    ,getEvent : function(e, def , p){
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
    ,format_number(n){ //金额加“逗号”
        return parseFloat(n).toLocaleString()
        /*var b=parseInt(n).toString();
        var len=b.length;
        if(len<=3){return b;}
        var r=len%3;
        return r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(",");
    */
    }
    ,update : function(){
        T.width = T.body.width();
        T.height = T.body.height();
    }
    ,setImgSize : function(){
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
    closePop(){
        $("#app").next().next().remove();
    }
    ,addScript(src,callback){
        let head = document.head,
            s = document.createElement("script");
        s.src = src;
        s.onload = function() {
            callback();
        };
        head.insertBefore( s, head.firstChild );
    }
    ,ajax : function( obj , bizType ,_data ){
		return new Promise((resolve, reject) =>{
			$.ajax({
				url : obj.url ,
				type : 'POST',
				dataType : 'json',
				contentType:'application/json;charset=UTF-8',
				processData : false,
				data : JSON.stringify(obj.data),
				success : function(data){
					if(data.flag == true){
						resolve(data);
					}else{
						if(obj.callback){
							return resolve(data);
						}
						requirePop('lingquguo',{
							props: {
								content : '<div style="padding:20px 0; text-align:center;">'+(data.errorMsg||'操作失败，请联系客服！')+'</div>',
								okTxt : '确定',
								transition : 'rotate3d'
							}
						},'publicTips');
					}
				},
				error : function(){
					requirePop('lingquguo',{
						props: {
							content : '<div style="padding:20px 0; text-align:center;">请求失败，请联系客服！</div>',
							okTxt : '确定',
							transition : 'rotate3d'
						}
					},'publicTips');
				}
			});
		})

    }
}
module.exports = T;