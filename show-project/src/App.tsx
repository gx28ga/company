/**
 *  author : bo.peng
 *  createTime 2018-11-22 19:05
 *  description :
 */
import {Component, Vue} from 'vue-property-decorator';
import Layout from '@/views/Layout';
@Component
export default class App extends Vue {
    mounted() {
        this.$store.dispatch("a");
        this.$store.dispatch("b");
    }
    public render() {
        return <Layout/>;
    }
}