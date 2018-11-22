import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
interface InitState {
    a: object;
    b: object;
}
const State: InitState = {
    a: {},
    b: {},
};
export default new Vuex.Store({
    state: State,
    mutations: {
        a( state: InitState, obj) {
            state.a = obj;
        },
        b( state: InitState, obj) {
            state.b = obj;
            console.log(state);
        },
    },
    actions: {
        a({commit}) {
            commit('a', {a: 1});
        },
        b({commit}) {
            commit('b', {b: 1});
        },
    },
});
