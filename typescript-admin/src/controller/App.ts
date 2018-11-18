/**
 *  author : bo.peng
 *  createTime 2018-10-22 17:41
 *  description : app.vue
 */
import {Component, Vue, Watch} from 'vue-property-decorator';
import Container from '@/views/Container.vue';
import Login from '@/views/login/index.vue';
import {Getter} from 'vuex-class';
import {CurrentDto} from '@/dto/user/CurrentDto';
import User from "@/domain/user/User";
import {Hero} from "@/domain/Hero";

@Component({
    components: {
        Container,
        Login,
    },
})
export default class App extends Vue {
    @Getter('current') private current!: CurrentDto;
    get tabElement() {
        return this.current.login ? "Container" : "Login";
    }
    @Watch("tabElement")
    private onUserChanged(val: string) {
        if (val === 'Container') {
            window.Main.$message({message: '登录成功！', type: 'success'});
        } else {
            window.Main.$message({message: '请重新登录！', type: 'warning'});
        }
    }
}