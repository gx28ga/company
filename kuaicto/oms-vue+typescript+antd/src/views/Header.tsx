/**
 *  author : bo.peng
 *  createTime 2018-11-10 15:25
 *  description : 头部
 */
import {Component, Vue} from 'vue-property-decorator';
import {Action, Getter} from 'vuex-class';
import {Menu} from '@/domain/Menu';
import {Types} from '@/store/modules/global/Types';

@Component
export class Header extends Vue {
    @Getter('currentMenu') private menu!: Menu;
    @Action(Types.LEFT_ASIDE_MENU) private setLeftMenu: any;
    private exit() {
        /*this.props.dispatch(action_currentUser.exit.request(this.props.currentUser));*/
    }
    private update() {
        console.log('update');
    }
    private showChildren(item: any) {
        const self: any = this;
        self.setLeftMenu(item);
    }
    public render() {

        return (<a-layout-header class="header">
            <div class="logo">SUDAO-OMS</div>
            {/*<Dropdown overlay={
                <Menu>
                    <Menu.Item onClick={this.update}>修改密码</Menu.Item>
                    <Menu.Item onClick={this.exit}>退出</Menu.Item>
                </Menu>
            } className="top-silder">
			<span className="ant-dropdown-link">
				{this.props.currentUser.data.userName} <Icon type="down" />
			</span>
            </Dropdown>
            */}
            <a-menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['0']}
            >
                {
                    this.menu.menus && this.menu.menus.map((item: any, i: number) =>
                        <a-menu-item onClick={this.showChildren.bind(this, item)} key={i}>{item.name}</a-menu-item>)
                }
            </a-menu>
        </a-layout-header>);
    }
}