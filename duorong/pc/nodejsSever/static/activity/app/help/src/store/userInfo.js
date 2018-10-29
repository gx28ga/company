function clearUserInfo(state){
    state.customerId = null;
    state.customerName = null;
    state.info = {}
    state.assets = {}
    localStorage.removeItem('userInfo');
    $.fn.cookie('islogin',null);
}
module.exports = { //用户相关信息
    state: {
        tel : 0 , //全称
        customerName : null,
        customerId : null,
        customerType : null,
        deviceId : null,
        token : null , 
        info : {}, //电话，认证等信息
        assets : {} //用户资产
    },
    mutations : {
        setUserInfo(state , obj ){
            $.extend(state,obj);
            if(obj.cookie){
                T.setLoginInfo();
            }
            T.setItem('userInfo',JSON.stringify(obj));
        },
        clearUserInfo(state){
            clearUserInfo(state);
        },
        getUserInfo(state,callback){
            let login = $.fn.cookie('islogin') ,
                user = JSON.parse(T.getItem('userInfo'));
            if(login && user){
                T.info = user;


                $.extend(state,user);
            }else{
                clearUserInfo(state);
            }
        }
    },
    actions : {},
    getters : {
        userAssets : state=> {//用户资产
            return state.assets;
        },
        userInfo : state=> {///电话，认证等信息
            return state.info;
        },
    }
}