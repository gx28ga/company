/**
 *  author : bo.peng
 *  createTime 2018-11-24 10:58
 *  description :
 */
import {Component, Vue, Watch} from 'vue-property-decorator';
import {Layout, Menu, Breadcrumb, Icon} from 'ant-design-vue';
import {routesConfig} from "@/router";

@Component
export default class Header extends Vue {
    public render() {
        return (<Layout.Header class="header">
            <div class="logo"/>
            <Menu
                theme="dark"
                class="menu"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{lineHeight: '64px'}}
            >
                {
                    routesConfig.routes[0].children.map( (item: any, i: number) => {
                        return <Menu.Item key={i}>{item.name}</Menu.Item>;
                    })
                }
            </Menu>
        </Layout.Header>);
    }
}