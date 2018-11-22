/**
 *  author : bo.peng
 *  createTime 2018-11-22 19:05
 *  description :
 */
import {Component, Vue, Watch} from 'vue-property-decorator';
import { Button } from 'ant-design-vue';
@Component({
    components: {
        AButton: Button,
    },
})
export default class App extends Vue {
    mounted() {
        this.$store.dispatch("a");
        this.$store.dispatch("b");
    }
    public render() {
        return (
            <div id='app'>
                <div id='nav'>
                    <a-button type="primary">hello world</a-button>
                    <router-link to='/'>Home</router-link>
                    |<a-button type="primary">Primary</a-button>
                    <a-button>Default</a-button>
                    <a-button type="dashed">Dashed</a-button>
                    <a-button type="danger">Danger</a-button>
                    <router-link to='/about'>About</router-link>
                </div>
                <router-view/>
            </div>
        );
    }
}