import Vue from "vue";
import Vuex from "vuex";
import cath from "./catch";
import personlAccount from "./personlAccount";
import find from "./find";
import user from "./userInfo";
import inviteFriend from "./inviteFriend";
import product from "./product";
import home from "./home";
import shopping from "./shopping";
Vue.use(Vuex);

export default new Vuex.Store({
	modules : {
		catch : cath , //缓存
        personlAccount , // 开户相关
        user , // 用户相关
		find ,  //发现
		inviteFriend,//邀请好友
        product, //理财产品
        home,//首页
        shopping,//积分商城
	},
    actions:{
	    clearLoginInfo(context){
	       context.commit("clearUserInfo");
	       context.commit("clearProductLoginInfo");
	       context.commit("clearHomeIndex");
        }
    }
});
