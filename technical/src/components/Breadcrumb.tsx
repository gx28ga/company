/**
 *  author : bo.peng
 *  createTime 2018-11-27 19:32
 *  description : 面包屑
 */
import {Component, Vue, Watch} from 'vue-property-decorator';
import {Breadcrumb} from 'ant-design-vue';
import {routesConfig} from '@/router';

@Component
export default class Breadcrumbs extends Vue {
    private breadcrumb: any;
    private length: number;
    private lastChild?: any;

    created() {
        const getName = (path: any) => {
            let arr: any[] = [];
            let paths = path.split('/');

            function getPath(router: any) {
                router.forEach((route: any, i: number) => {
                    if (new RegExp(paths[0] + '$').test(route.path.replace(/\/:\w+$/, ''))) {
                        paths.shift();
                        route.name = route.name ? route.name : '首页';
                        arr.push(route);
                        if (route.children) {
                            getPath(route.children);
                        }
                    }
                });
            }

            getPath(routesConfig.routes);
            return arr;
        };
        this.breadcrumb = getName(this.$route.path);
        this.length = this.breadcrumb.length - 1;
        if (this.lastChild) {
            this.breadcrumb[this.length].name = this.lastChild;
        }
    }

    private render() {
        const length = this.length;
        return (
            <Breadcrumb style={{height: '45px', lineHeight: '45px'}} separator="/">
                {
                    this.breadcrumb.map((item: any, i: number) => {
                        if (i < length) {
                            return <Breadcrumb.Item
                                key={item.name}>
                                <router-link to={item.path}>{item.name}</router-link>
                                </Breadcrumb.Item>;
                        }
                        return <Breadcrumb.Item
                            key={item.name}>{item.name}</Breadcrumb.Item>;
                    })
                }
            </Breadcrumb>
        );
    }
}