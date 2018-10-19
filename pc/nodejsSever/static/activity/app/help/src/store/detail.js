module.exports = { //标的详情页
    state: {
        pro : null,
        pics : null,
    },
    mutations : {
        setDetailData(state , obj ){
            $.extend(state,obj);
        }
    },
    actions : {},
    getters : {
        getDetailPro : state=> {
            return state.pro;
        },
        getDetailPics : state=> {
            return state.pics;
        }
    }
}