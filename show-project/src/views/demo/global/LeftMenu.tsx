/**
 *  author : bo.peng
 *  createTime 2018-11-24 10:56
 *  description : 左侧栏目
 */
import {Component, Vue} from 'vue-property-decorator';
import {Icon, Layout, Menu} from 'ant-design-vue';
import config from '@/router/demo/index';
import router from "@/router";
const { SubMenu } = Menu;
const { Sider } = Layout;
const Child = (h: any, item: any, i: number|string) => {
    let dom;
    if (item.children && item.children.length) { // 父类
        dom = (
            <SubMenu key={i} title={
                <span>
					<Icon type={item.icon || "caret-right"} theme="outlined" />
                    {item.name}
				</span>}>
                {
                    item.children.map((subItem: any, j: number) => Child(h, subItem, (i + '-' + j)))
                }
            </SubMenu>
        );
    } else {// 子类
        dom = (<Menu.Item key={i} onClick={() => router.push(item.path)}>
	        <Icon type={item.icon || "caret-right"} theme="outlined" />
            {item.name}
        </Menu.Item>);
    }
    return dom;
};
@Component
export default class LeftMenu extends Vue {
    public render(h: any) {
        return (
	        <Sider width={200} style={{background: 'none'}}>
		        <div class="left-menu-title">
			        <Icon type="appstore" style={{marginRight: '10px'}}/>
			        项目文档
		        </div>
		        <Menu
                    theme='light'
                    mode="inline"
                    class='left-menu'
		        >
                    {config.children.map((item, i ) => Child(h, item, i))}
		        </Menu>
	        </Sider>
        );
    }
}