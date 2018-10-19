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
    ,duorongHttp : 'http://app.duorongcf.com'
    ,init : function( obj ){
        $.extend( T , obj );
        T.getAppInfo();
        T.setImgSize();
        window.onresize = T.setImgSize;
    },
	getQueryString : function( name ){
		let reg = new RegExp("(^|&|/?)" + name + "=([^&]*)(&|$)", "i");
		let r = encodeURI(window.location.search||window.location.href||window.location.hash).substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	},
	getAppInfo : function(){
		let uid = T.getQueryString('uid') ,
			wap = T.getQueryString('wap') ;

		T.uid = uid;
		T.isLogin = (T.uid && T.uid.length>0)?true:false;
		T.wap = wap == 'true';
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
		let val = String(num).match(/[\d]*\.{0,1}\d{0,2}/);
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
            $.each(['borderRadius','borderBottomLeftRadius','borderBottomRightRadius','height','width','fontSize','left','right','bottom','top' ,'margin','padding', 'paddingTop' ,'lineHeight' , 'paddingLeft' , 'paddingRight' , 'paddingBottom','marginTop', 'marginLeft' , 'marginRight' , 'marginBottom'],function( i , str ){
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
    ,login : function(callback){
        T.callApp.login({callback:callback});
    }
    ,callApp : {
        login : function(obj){ //登录
            var url = obj.url?('returnUrl='+obj.url):'' ,
                wap = T.getQueryString('wap');

            if(T.isLogin==true){
                obj.callback && obj.callback();
            }else{
                if(T.wap){
                    window.location.href=T.duorongHttp+'/dl?'+encodeURIComponent(url);
                }else{
                    window.location.href='jump://page=4?'
                }
            }
        }
        ,investment : function(){ //去投资列表页
            if(T.wap){
                window.location.href=T.duorongHttp+'/main/bankBillList';
            }else{
                window.location.href='jump://page=2?';
            }
        }
        ,home : function(){ //去首页
            if(T.wap){
                window.location.href='http://app.duorongcf.com';
            }else{
                window.location.href='jump://page=1?';
            }
        }
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
    ,ajax : function( obj ){
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