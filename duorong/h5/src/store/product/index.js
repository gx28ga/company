/**
 * 理财产品
 * created by bo.peng
 * email:spion@qq.com
 */
const SESSION = require("../../contant/SESSIONSTORAGE");
const PRODUCT = require("../../contant/urls/PRODUCT");
module.exports = {
    state:{
        //产品列表
        list : [],
    },
    mutations:{
        //清除登录信息
        clearProductLoginInfo(){
            let page = T.getSession(SESSION.PRODUCT_PAGE);
            if(page){
                page.uid = null;
                T.setSession(SESSION.PRODUCT_PAGE,page);
            }
        },
        //更新首页列表
        updateProductList(state,obj){
            let page = T.getSession(SESSION.PRODUCT_PAGE);
            if(obj.update || obj.load || !state.list){
                if(obj.load){
                    page.pageOn = page.pageOn+1;
                    T.setSession(SESSION.PRODUCT_PAGE,page);
                }
                if(obj.update){
                    page.pageOn = 1;
                    T.setSession(SESSION.PRODUCT_PAGE,page);
                    T.delSession(SESSION.PRODUCT_INDEX);
                }
                VueParent.ajax({
                    url : PRODUCT.PRODUCT_LIST,
                    data : page,
                    callback : true,
                }).then(data=>{
                    let map = data.map ,
                        arr = state.list ? state.list.page.rows : false;
                    state.list = map;
                    if(arr && obj.load){
                        arr = arr.concat(map.page.rows);
                        state.list.page.rows = arr;
                    }
                    T.setSession(SESSION.PRODUCT_INDEX,state.list);
                    T.setSession(SESSION.PRODUCT_UPDATE_TIME,new Date().getTime());
                    if(obj.callback && obj.callback()){};
                });
            }
        }
    },
    actions : {
    },
    getters : {
        getProductList : state=>{
            state.list = T.getSession(SESSION.PRODUCT_INDEX);
            return state.list;
        }
    }
};
