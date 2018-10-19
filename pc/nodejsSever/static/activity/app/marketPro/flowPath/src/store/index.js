import * as actions from './actions';
import mutations from './mutations';
export default new Vuex.Store({
    actions,
    mutations,
    state : {
        status : -1,
        parentBankId : 0,//银行id
    }
});