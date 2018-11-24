/**
 *  author : bo.peng
 *  createTime 2018-11-24 10:58
 *  description :
 */
import {Component, Vue, Watch} from 'vue-property-decorator';
import { Layout, Menu, Breadcrumb, Icon } from 'ant-design-vue';

@Component
export default class Header extends Vue {
    public render() {
        return (<Layout.Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
        </Layout.Header>);
    }
}