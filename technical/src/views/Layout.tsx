/**
 *  author : bo.peng
 *  createTime 2018-11-23 12:40
 *  description : 路由
 */
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Layout extends Vue {
    public render() {
        return (<router-view/>);
    }
}