/**
 *  author : bo.peng
 *  createTime 2018-11-24 10:45
 *  description :
 */
import {Component, Vue} from 'vue-property-decorator';
import { Layout as antLayout, Breadcrumb } from 'ant-design-vue';
import LeftMenu from "./global/LeftMenu";
import Header from "./global/Header";
import Layout from "@/views/Layout";
const { Content } = antLayout;

@Component
export default class Demo extends Vue {
    public render() {
        return (<antLayout>
            <Header/>
            <antLayout style={{paddingLeft: '15px'}}>
                <LeftMenu/>
                <antLayout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        <Layout/>
                    </Content>
                </antLayout>
            </antLayout>
        </antLayout>);
    }
}