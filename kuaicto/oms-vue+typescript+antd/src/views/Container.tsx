/**
 *  author : bo.peng
 *  createTime 2018-11-09 17:40
 *  description : Container
 */
import {Component, Vue, Watch} from 'vue-property-decorator';
import {LeftMenu} from './LeftMenu';
import {Header as Headbar} from './Header';
import {Layout} from './Layout';
import {routeConfig} from '@/router/index.ts';

const getName = (path: string) => {
    let arr: any[] = [];
    let paths = path.split('/');

    function getPath(router: []) {
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

    getPath(routeConfig.routes);
    return arr;
};

@Component({
    components: {
        LeftMenu,
        Layout,
        Headbar,
    },
})
export class Container extends Vue {
    private collapsed: boolean = false;

    private render() {
        const self: any = this;
        const names = getName(self.$route.path);
        const length: number = names.length - 1;
        return (
            <a-layout class="root">
                <Headbar/>
                <a-layout>
                    <a-layout-sider
                        trigger={null}
                        collapsibles
                        collapsed={this.collapsed}
                        style="background:#37404B;"
                    >
                        <div className="logo"/>
                        {
                            // @ts-ignore
                            <LeftMenu collapsed={this.collapsed}/>
                        }
                    </a-layout-sider>
                    <a-layout>
                        <a-breadcrumb style={{
                            height: 45,
                            lineHeight: '45px',
                            padding: '0 15px'}} separator="/">
                            {
                                names.map((item: any, i: number) =>
                                    <a-breadcrumb-item key={i}>
                                        {
                                            i !== length ?
                                                <router-link to={item.path}>{item.name}</router-link> :
                                                <span>{item.name}</span>
                                        }
                                    </a-breadcrumb-item>)
                            }
                        </a-breadcrumb>
                        <a-layout-content
                            style={{margin: '0 15px 15px 15px'}}>
                            <Layout/>
                        </a-layout-content>
                    </a-layout>
                </a-layout>
            </a-layout>
        );
    }
}