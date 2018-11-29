/**
 *  author : bo.peng
 *  createTime 2018-11-23 13:05
 *  description : 盒子
 */
import {Component, Vue, Watch} from 'vue-property-decorator';
import {Layout, Menu, Icon} from 'ant-design-vue';
import Header from './global/Header';
import LeftMenu from './global/LeftMenu';

const {Content, Footer} = Layout;

@Component
export default class Container extends Vue {
    public render() {
        return (<article class="main">
            <Layout>
                <Header>header</Header>
                <Layout>
                    <LeftMenu/>
                    <Layout>
                        <Content>
                            <router-view/>
                        </Content>
                        <Footer>footer</Footer>
                    </Layout>
                </Layout>
            </Layout>
        </article>);
    }
}