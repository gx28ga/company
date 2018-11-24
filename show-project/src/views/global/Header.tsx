/**
 *  author : bo.peng
 *  createTime 2018-11-24 10:41
 *  description :
 */
import {Component, Vue} from 'vue-property-decorator';
import { Layout, Menu, Icon, Input } from 'ant-design-vue';
const Search = Input.Search;
const searchConfig = {
    style: {
        float: 'right',
        width : '320px',
    },
    props: {
        enterButton: true,
        placeholder: '请输入内容',
    },
    on: {
        search: (value: string) => {
            console.log(value);
        },
    },
    class: 'header-search',
};
@Component
export default class Header extends Vue {
    private render() {
        return (<Layout.Header>
            <div className="logo" />
            <Search {...searchConfig}/>
            <Menu theme="dark" mode="horizontal" style={{lineHeight: '64px'}}>
                <Menu.Item key="1">
                    <Icon type="user" />
                    <span className="nav-text">nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span className="nav-text">nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload" />
                    <span className="nav-text">nav 3</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="bar-chart" />
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
            </Menu>
        </Layout.Header>);
    }
}