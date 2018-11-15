/**
 *  author : bo.peng
 *  createTime 2018-11-09 20:41
 *  description :
 */
import {Component, Vue, Prop} from 'vue-property-decorator';
import {Action, Getter} from 'vuex-class';
import {Types} from '@/store/modules/global/Types';
import {Menu} from '@/domain/Menu';
import {router} from '@/router/index.ts';

@Component
export class LeftMenu extends Vue {
    @Prop(Boolean) private collapsed!: boolean;
    @Action(Types.PERMISSION_MENU) private getCurrentMenu!: () => void;
    @Getter('currentMenu') private menu!: Menu;
    private mounted() {
        this.getCurrentMenu();
    }
    private openUrl(url: string) {
        router.push(url);
    }
    private render() {
        const child = (item: any) => {
            let dom;
            if (item.children && item.children.length) { // 父类
                dom = (
                    <a-sub-menu index={item.menuId}
                                key={item.menuId}>
								<span slot="title">
                                    {item.name}
								</span>
                        {
                            item.children.map((subItem: any) => child(subItem))
                        }
                    </a-sub-menu>
                );
            } else {// 子类
                dom = (
                    <a-menu-item onClick={this.openUrl.bind(this, item.url)} index={item.menuId} key={item.menuId}>
                                <span>
                                    {item.name}
                                </span>
                    </a-menu-item>
                );
            }
            return dom;
        };
        return (
            <a-menu
                mode="inline"
                theme="dark"
                inlineCollapsed={this.collapsed}
            >
                {
                    this.menu.status === 0 && this.menu.asideMenu.children.map((item: any) => child(item))
                }
            </a-menu>);
    }
}