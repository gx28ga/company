/**
 *  author : bo.peng
 *  createTime 2018-11-09 10:53
 *  description :
 */
import { Component, Vue, Watch } from 'vue-property-decorator';
import {Container} from '@/views/Container.tsx';
import Login from '@/views/login/Login.vue';
import {Getter} from 'vuex-class';
import {CurrentDto} from '@/dto/user/CurrentDto';
@Component({
    components: {
        Container,
        Login,
    },
})
export class App extends Vue {
    @Getter('current') private current!: CurrentDto;
    private render() {
        return this.current.login ? <Container/> : <Login/>;
    }
    @Watch("current", { immediate: false, deep: true })
    private onUserChanged({ login }: CurrentDto) {
        if (login) {
            window.Main.$message.success('登录成功！');
        } else {
            window.Main.$message.success('退出登录！');
        }
    }
}