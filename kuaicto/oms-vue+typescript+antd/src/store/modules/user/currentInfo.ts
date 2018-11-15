/**
 *  author : bo.peng
 *  createTime 2018-10-22 13:55
 *  description :
 */
import {Commit} from 'vuex';
import {Type} from '@/store/modules/user/Type';
import {CurrentDto} from '@/dto/user/CurrentDto';
import {UserLoginDto} from '@/dto/user/UserLoginDto';
import {Api} from '@/api/Api';
import {Util} from '@/Utils/Util';
import {User} from '@/enum/storage/User';
import {USERAPI} from '@/api/urls/user/UserApi';

const initState: CurrentDto = {
    data: null,
    login: false,
};
export default {
    state: initState,
    getters: {
        current: (state: CurrentDto) => {
            if (state.login) { return state; }
            return Util.getLocal(User.CURRENT_USER) || state;
        },
    },
    mutations: {
        [Type.LOGIN](state: CurrentDto , current: CurrentDto) {
            state.login = current.login;
            state.data = current.data;
            Util.setLocal(User.CURRENT_USER, state);
        },
    },
    actions: {
        [Type.LOGIN](context: { commit: Commit; state: CurrentDto } , loginInfo: UserLoginDto) {
            Api.post(USERAPI.LOGIN, loginInfo).then((data: any) => {
                const currentUser: CurrentDto = {
                    data,
                    login: true,
                };
                context.commit(Type.LOGIN, currentUser);
            });
        },
    },
};