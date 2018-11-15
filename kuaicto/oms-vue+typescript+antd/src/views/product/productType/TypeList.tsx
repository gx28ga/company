/**
 *  author : bo.peng
 *  createTime 2018-11-14 17:52
 *  description : 属性模板列表
 */
import {Component, Vue, Watch} from 'vue-property-decorator';
import TypeTopEdit from '@/views/product/productType/TypeTopEdit';
import {Api} from '@/api/Api';
import {PRODUCT} from '@/api/urls/product/Product';
import {PageConfig, TableTips} from '@/views/config';

@Component({
    components: {
        TypeTopEdit,
    },
})
export default class TypeList extends Vue {
    private ref!: any;
    // 分页设置
    private pageConfig: PageConfig = new PageConfig();
    // table 配置
    private tableConfig: object = TableTips.table;
    // 列表数据
    private list: object[] = [];
    // 分页事件
    private onChange(page: any) {
        this.pageConfig.current = page.current;
        this.updateList();
    }
    private searchEvent() {
        console.log('searchEvent');
    }
    private add() {
        console.log('add');
    }
    private updateList() {
        const self: any = this;
        Api.getList(PRODUCT.ATTR_TEMPLATE, self.pageConfig.response).then((data: any) => {
            self.list = data.items;
            self.pageConfig.total = data.total;
        });
    }
    private created() {
        this.updateList();
    }
    public render() {
        const self: any = this;
        const $createElement = self.$createElement;
        const edit = {
            on: {
                searchEvent : this.searchEvent,
                add : this.add,
            },
            slot: "edit",
        };
        // 栏目设置
        const columns: object[] = [
            {
                title: '模板名称',
                dataIndex: 'templateName',
                width: 150,
            },
            {
                title: '分组',
                width: 300,
                dataIndex: 'row',
                customRender(text: any, row: any, index: number) {
                    return <div>{text}3</div>;
                },
            },
            {
                title: 'CODE',
                width: 150,
                align: 'center',
                dataIndex: 'code',
            },
            {
                title: '排序',
                width: 150,
                align: 'center',
                dataIndex: 'displayOrder',
            },
            {
                title: '显示',
                dataIndex: 'enabled',
                width: 150,
                align: 'center',
                scopedSlots: { customRender: 'switch' },
            },
            {
                title: '操作',
                align: 'right',
                dataIndex: 'brandId',
                scopedSlots: { customRender: 'edit' },
            },
        ];
        columns.forEach((item: any) => {
            if (item.customRender) {
                item.customRender = item.customRender.bind(self);
            }
        });
        return (<k-page>
            {/*编辑页*/}
            <type-top-edit {...edit}/>
            {/*end 编辑页*/}
            <div slot="list">
                <a-table {...this.tableConfig}
                         columns={columns}
                         dataSource={self.list}
                />
            </div>
        </k-page>);
    }
}