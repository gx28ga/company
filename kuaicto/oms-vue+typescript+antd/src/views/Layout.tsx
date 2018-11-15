/**
 *  author : bo.peng
 *  createTime 2018-11-10 14:41
 *  description : 子router
 */
import {Component, Vue } from 'vue-property-decorator';

@Component
export class Layout extends Vue {
    public render() {
        return (<router-view/>);
    }
}