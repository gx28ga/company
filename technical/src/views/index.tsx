/**
 *  author : bo.peng
 *  createTime 2018-11-24 10:45
 *  description :
 */
import {Component, Vue} from 'vue-property-decorator';
import { Layout } from 'ant-design-vue';
import LeftMenu from "./global/LeftMenu";
import Header from "./global/Header";
import LayoutViews from "@/views/Layout";
const { Content } = Layout;
import Breadcrumbs from "@/components/Breadcrumb";

@Component
export default class Demo extends Vue {
    public render() {
        return (<Layout>
            <Header/>
            <Layout style={{paddingLeft: '15px'}}>
                <LeftMenu/>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumbs/>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        <LayoutViews/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>);
    }
}