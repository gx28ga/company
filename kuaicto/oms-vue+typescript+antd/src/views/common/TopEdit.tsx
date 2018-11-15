/**
 *  author : bo.peng
 *  createTime 2018-11-12 15:07
 *  description : 头部编辑
 */
import {Component, Vue} from 'vue-property-decorator';

const getClass = (vnode: any) => vnode[0].data.staticClass || '';
@Component
export class TopEdit extends Vue {
    public render() {
        const self: any = this;
        const left = self.$slots.left;
        const right = self.$slots.right;
        return (<div class='top-edit'>
            {
                left && <div class={'edit-left ' + getClass(right)}>
                    {left}
		        </div>
            }
            {
                right && <div class={'edit-right ' + getClass(left)}>
                    {right}
		        </div>
            }
        </div>);
    }
}
Vue.component("k-top-edit", TopEdit);