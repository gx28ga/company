/**
 * 用户信息
 * created by bo.peng
 * email:spion@qq.com
 */
/*
 @type {{state: {
  info: {
       realName,
       headimg 没有
       recommCodes 推荐号  分享出去用户注册时的号。
       isRas : 是否开通过银行存管
       uid : id
       tpwdSetting : 是否设置手势密码
       status : //
       regFrom : 聚道
       realVerify : 是否实名认证
       mobilePhone : 手机号
},
account:{
     "success":true,
      "map":{
        "unUseFavourable":1,
        "tpwdFlag":1,
        "amount":100,
        "level":0,
        "isBankOfDeposit":0,
        "isRas":1,
        "sex":1,
        "allWinterest":3.45,
        "recommendProduct":"{}",
        "profitYesterday":0.03,
        "winterest":1.27,
        "realName":"胡先凯",
        "isRisk":1,
        "current":{
          "isShow":0,
          "redeemAmount":null,
          "yesterdayProfit":0,
          "totalProfit":0.12,
            "predictTime":null,
          "redeemStatus":null,
          "yesterday":"2018-04-01",
          "currentAmount":100,
          "currentProdName":"新手宝",
          "currentProdId":308487
        },
        "unReadMsg":0,
        "balance":3.45,
        "wprincipal":100,
        "isRiskCn":"保守型",
        "userAccountLevel":{
          "uid":164122,
          "points":99,
          "willExpirePoints":7,
          "expireDateOfPoints":"",
          "experiencePoints":0,
          "expireDateOfExperience":"2018-04-30",
          "vipLevel":"",
          "experienceMin":null,
          "experienceMax":null,
          "vipLevelNum":null
        },
         "realVerify":1,
            "free":0,
            "isPayBack":0,
            "commissionYesterday":0
      }
  }
  }}}*/
const LOCALSTOR = require("../../contant/LOCALSTORAGE");
const USER = require("../../contant/urls/USERINFO");
module.exports = {
    state:{
        //用户登录、信息
        info : null,
        //帐户相关
        account : null,
        //用户个人信息,
        memberInfo : null,
    },
    mutations:{
        clearUserInfo : state=>{
            T.delItem(LOCALSTOR.USER_INFO);
            T.delItem(LOCALSTOR.APP_TOKEN);
            T.delItem(LOCALSTOR.USER_ACCOUNT);
            T.delItem(LOCALSTOR.PERSONAL_INFO);
            T.token = null;
            T.uid = null;
            delete T.token;
            delete T.uid;
            state.info = null;
            state.account = null;
        },
        setUserInfo( state , obj ){
            state.info = obj;
            T.token = obj.token;
            T.uid = obj.member.uid;
        },
        updateUserInfo : (state,obj)=>{ //更新用户登录初始状态;
            if(obj){
                T.setItem(LOCALSTOR.USER_INFO,obj.member);
                T.setItem(LOCALSTOR.APP_TOKEN,obj.token);
            }
        },
        updateMemberInfo : (state,obj)=>{ //个人信息，手机号等
            let memberInfo = T.getItem(LOCALSTOR.PERSONAL_INFO);
            if(obj.update || !memberInfo){
                VueParent.ajax({
                    url : USER.PERSONAL_INFO,
                }).then(data=>{
                    state.memberInfo = data.map.data;
                    T.setItem(LOCALSTOR.PERSONAL_INFO,data.map.data);
                })
            }else{
                state.memberInfo = memberInfo;
            }
        }
    },
    actions : {
        updateUserAccount : ({state},obj)=>{ //进行相关操作后，需更新用户帐户状态
            if(obj.update){
                VueParent.ajax({
                    url : USER.USER_ACCOUNT_INFO,
                }).then(data=>{
                    state.account = data.map;
                    T.setItem(LOCALSTOR.USER_ACCOUNT , data.map);
                });
            }
        },
        getUserAccount({getters , state , commit , dispatch}){
            if(!state.account){
                dispatch("updateUserAccount",{update:true})
            }
        }
    },
    getters : {
        getUserInfo : state=>{
            if(!state.info){
                let token = T.getItem(LOCALSTOR.APP_TOKEN) ,
                    member = T.getItem(LOCALSTOR.USER_INFO);
                if(token){
                    state.info = {
                        member : member,
                        token : token
                    };
                    T.token = token;
                    T.uid = member.uid;
                }
            }
            return state.info;
        },
        getUserAccount : state=>{
            if(!state.userAccount){
                let account = T.getItem(LOCALSTOR.USER_ACCOUNT);
                if(account){
                    state.account = account;
                }
            }
            return state.account;
        }
    }
};
