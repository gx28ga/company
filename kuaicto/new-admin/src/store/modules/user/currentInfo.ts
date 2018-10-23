/**
 *  author : bo.peng
 *  createTime 2018-10-22 13:55
 *  description :
 */
import {Commit} from 'vuex';
import {Type} from '@/store/modules/user/Type';
import {CurrentDto} from '@/dto/user/CurrentDto';
import UserDto from '@/dto/user/UserDto';
import {UserLoginDto} from '@/dto/user/UserLoginDto';
import Api from '@/api/Api';
import UserApi from '@/api/urls/user/UserApi';
import User from '@/domain/user/User';
import UserToDto from '@/convert/user/UserToDto';

const initState: CurrentDto = {
    userDto: new UserDto({
        userId: -1,
        userName: '未登录',
    }),
    login: false,
};
export default {
    state: initState,
    getters: {
        current: (state: CurrentDto) => {
            return state;
        },
    },
    mutations: {
        [Type.LOGIN](state: CurrentDto , current: CurrentDto) {
            state.login = current.login;
            state.userDto = current.userDto;
        },
    },
    actions: {
        login(context: { commit: Commit; state: CurrentDto } , loginInfo: UserLoginDto) {
            Api.create(UserApi.Login, loginInfo).then((data: any) => {
                const curUser: User = new User(data.data);
                const user: UserDto = new UserToDto(curUser);
                const currentUser: CurrentDto = {
                    userDto: user,
                    login: true,
                };
                context.commit(Type.LOGIN, currentUser);
            });
            // context.commit(Type.LOGIN);
        },
    },
};