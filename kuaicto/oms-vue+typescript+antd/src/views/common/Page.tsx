/**
 *  author : bo.peng
 *  createTime 2018-11-12 11:38
 *  description : 总布局
 */
import {Component, Vue} from 'vue-property-decorator';

const getClass = (vnode: any) => vnode[0].data.staticClass || '';
@Component
export class Page extends Vue {
    public render() {
        const self: any = this;
        const edit = self.$slots.edit;
        const list = self.$slots.list;
        const addAndEdit = self.$slots.addAndEdit;
        const footer = self.$slots.footer;
        return (<article class="page-layout">
            {
                edit && edit
            }
            {
                <div class='content'>
                    {
                        list && <div class={'table-list ' + getClass(list) }>
                            {list}
                        </div>
                    }
                    {
                        addAndEdit && <div class={'addAndEdit ' + getClass(addAndEdit) }>
                            {addAndEdit}
		                </div>
                    }
                </div>
            }
            {
                footer && <div class={'footer ' + getClass(footer) }>
                    {footer}
                </div>
            }
        </article>);
    }
}
Vue.component("k-page", Page);