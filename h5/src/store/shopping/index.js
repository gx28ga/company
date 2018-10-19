/**
 * describe  积分商城
 * Created by wangCuiqing
 * Date: 2018/5/2
 */
const SHOPPING =require("../../contant/urls/SHOPPING");
module.exports = {
    state : {
        //积分商城首页所有信息
        index : null,
    },
    mutations:{
        getShoppingIndex(state,self){
                VueParent.ajax({
                    url : SHOPPING.INDEX,
                    data:{
                        uid:self.user.member.uid
                    }
                }).then(data=>{
                    state.index = data.map.result;
                });
        },
    },
    actinos : {

    },
    getters : {
        getShoppingIndex : state=>{
            return state.index;
        },
    }
};
