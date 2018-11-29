/**
 *  author : bo.peng
 *  createTime 2018-11-22 20:12
 *  description :
 */
import {VueClass} from 'vue-class-component/lib/declarations';
import {Vue} from 'vue/types/vue';
interface Window {
    Main: any;
}
declare const Main: any;
declare module 'ant-design-vue' {
    export let Button: VueClass<Vue>;
    export let Layout: any;
    export let Menu: any;
    export let Icon: any;
    export let Input: any;
    export let Breadcrumb: any;
}