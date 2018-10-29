/**
 * 发现
 * created by bo.peng 2018/3/31
 * email:spion@qq.com
 */
const FIND = require("../../contant/urls/FIND");
module.exports = {
    state : {
        //首页所有信息
        index : null
    },
    mutations:{
        getFindIndex(state){
            //if(!state.index){
                VueParent.ajax({
                    url : FIND.INDEX
                }).then(data=>{
                    state.index = data.map;
                });
            //}
        }
    },
    actinos : {

    },
    getters : {
        getFindIndex : state=>{
            return state.index;
        }
    }
};
