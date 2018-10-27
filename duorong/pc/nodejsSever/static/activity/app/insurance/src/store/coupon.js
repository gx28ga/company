module.exports = {
    state: {
        count : 0 ,//有多少优惠券
        incRate : 0,//加息券数量
        speMoney : 0,//理财金数量
        reward : 0,//红包数量
        incRateList : [{}],
        speMoneyList : [{}],
        rewardList : [{}],
    },
    mutations : {
        getCouponNum(state , callback){
            state.count = 0;
            T.ajax({},'M053').then(data=>{ //1:红包,2理财金,3加息券
                state.incRate = data.data.incRate
                state.speMoney = data.data.speMoney
                state.reward = data.data.reward
                state.count += parseInt(state.incRate);//加息券数量
                state.count += parseInt(state.speMoney);//理财金数量
                state.count += parseInt(state.reward);//红包数量
                callback();
            });
        },
        getCouponList(state){
            T.ajax({
                status : 2
            },'M054').then( data=>{
                state.rewardList = data.data.hongbao;
                state.speMoneyList = data.data.licaijin;
                state.incRateList = data.data.jiaxiquan;
            })
        }
    },
    actions : {
        getCouponList({commit,state}){ //获取优惠券、红包、理财经列表
            if(state.count<1){//重新加载
                commit('getCouponNum',()=>{
                    commit('getCouponList');
                })
            }else{
                commit('getCouponList');
            }
        }
    },
    getters : {
        couponCount : state=>{
            return state.count;
        },
        incRateList : state=>{
            return state.incRateList;
        },
        speMoneyList : state=>{
            return state.speMoneyList;
        },
        rewardList : state=>{
            return state.rewardList;
        }
    }
}