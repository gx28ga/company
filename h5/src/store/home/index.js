/**
 * describe 首页接口请求
 * Created by wangCuiqing
 * Date: 2018/4/23
 */
const HOME = require("../../contant/urls/HOME");
const SESSION = require("../../contant/SESSIONSTORAGE");
module.exports = {
    state : {
        //首页所有信息
        index : null
    },
    mutations:{
        clearHomeIndex(state){
            state.index = T.getSession(SESSION.INDEX);
            if(state.index){
                state.index=null;
            }
        },
        getHomeIndex(state){
           state.index = T.getSession(SESSION.INDEX);
            let uid=self.user?self.user.member.uid:null;
            if(!state.index){
                VueParent.ajax({
                    url : HOME.INDEX,
                    data : {
                        uid:uid
                    }
                }).then(data=>{
                    state.index = data.map;
                    T.setSession(SESSION.INDEX,data.map);
                });
            }
        },
        updateHomeIndex(state,obj){
            let uid=self.user?self.user.member.uid:null;
            if(obj.update){
                    VueParent.ajax({
                        url : HOME.INDEX,
                        data : {
                            uid:uid
                        }
                    }).then(data=>{
                        state.index = data.map;
                        T.setSession(SESSION.INDEX,data.map);
                    });
            }
        }
    },
    actions : {},
    getters : {
        getHomeIndex : state=>{
            return state.index;
        }
    }
};
