/**
 *  author : bo.peng
 *  createTime 2018-11-15 9:30
 *  description : 品牌列表
 */
import {Component, Vue, Watch} from 'vue-property-decorator';
import {GlobalConfig, PageConfig, TableTips} from '@/views/config';
import {Api} from '@/api/Api';
import {PRODUCT} from '@/api/urls/product/Product';
import {KuploadObj} from '@/views/common/Kupload';
import {AddAndEdit, BrandEdit} from '@/views/product/brand/AddAndEdit';
import BrandTopEdit from '@/views/product/brand/BrandTopEdit';

@Component({
    components: {
        BrandTopEdit,
        AddAndEdit,
    },
})
export default class BrandList extends Vue {
    private ref!: any;
    // brand edit 编辑匡填充内容
    private data: BrandEdit| null = null;
    // 弹出匡
    private visible: boolean = false;
    // 加载图标 状态
    private confirmLoading: boolean = false;
    // table 配置
    private tableConfig: object = TableTips.table.locale;
    // 列表数据
    private list: object[] = [];
    // 分页设置
    private pageConfig: PageConfig = new PageConfig();
    // 分页事件
    private onChange(page: any) {
        this.pageConfig.current = page.current;
        this.updateList();
    }
    // 是否显示
    private enabledChange(item: any, enabled: boolean) {
        Api.update(PRODUCT.BRAND + '/' + item.brandId, { enabled: !enabled }).then( (data: any) => {
            window.Main.$message.success('修改成功！');
        });
    }
    // 搜索
    private searchEvent(data: any, form: any) {
        const self: any = this;
        this.pageConfig.params = data;
        self.updateList();
    }
    private edit(record: any) {
        let uploads: KuploadObj[] = [];
        if (record.icon ) {
            uploads.push({
                url: record.icon,
            } as KuploadObj);
        }
        this.data = {
            upload: uploads,
            name: record.name,
            code: record.code,
            displayOrder: record.displayOrder,
            brandId: record.brandId,
            enabled: record.enabled,
            brandType: record.brandType,
            data: record,
        };
        this.visible = true;
    }
    private submit() {
        const self: any = this;
        self.ref.verification().then((data: BrandEdit) => {
            this.confirmLoading = true;
            let icon;
            data.upload.forEach( (item: any) => icon = item.url);
            Api.update(PRODUCT.BRAND + '/' + self.data.brandId,
                Object.assign({}, self.data, {...data, icon}))
                .then( (data: any) => {
                    window.Main.$message.success('修改成功！');
                    self.confirmLoading = false;
                    self.visible = false;
                    self.updateList();
                }, () => {
                    self.confirmLoading = false;
                    self.visible = false;
                });
        }, (error: Error) => {
            console.log('验证未通过');
        });
    }
    private updateList() {
        const self: any = this;
        Api.getList(PRODUCT.BRAND, self.pageConfig.response).then((data: any) => {
            this.list = data.items;
            self.pageConfig.total = data.total;
        });
    }
    private created() {
        this.updateList();
    }
    public render() {
        const self: any = this;
        const edit = {
            on: {
                searchEvent : this.searchEvent,
                add : this.updateList,
            },
            slot: 'edit',
        };
        // 栏目设置
        const columns: object[] = GlobalConfig.setCreateElement([
            {
                title: '缩略图',
                dataIndex: 'icon',
                width: 200,
                customRender(text: any, row: any, index: number) {
                    return  <k-img src={text}/>;
                },
            },
            {
                title: '品牌名称',
                width: 300,
                dataIndex: 'name',
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
                customRender(text: any, record: any, index: number) {
                    const config = {
                        props: {
                            defaultChecked: text,
                            size: "small",
                        },
                        on: {
                            change: () => {
                                self.enabledChange(record, text);
                            },
                        },
                    };
                    return  <a-switch {...config} />;
                },
            },
            {
                title: '操作',
                align: 'right',
                dataIndex: 'brandId',
                customRender(text: any, record: any, index: number) {
                    const config = {
                        on: {
                            click: () => {
                                self.edit(record);
                            },
                        },
                    } ;
                    return <a href="#" class="edit" {...config}>编辑</a>;
                },
            },
        ], 'customRender');
        self.tableConfig.props = {columns};
        const modal = {
            props: {
                title: '编辑品牌',
                okText: '确认',
                cancelText: '取消',
                visible: this.visible,
                confirmLoading: this.confirmLoading,
                okButtonProps: {
                    on: {
                        click: this.submit,
                    },
                },
                cancelButtonProps: {
                    on: {
                        click: () => this.visible = false,
                    },
                },
            },
            on: {
                cancel: () => this.visible = false,
            },
        };
        return (<k-page>
            {/*编辑页*/}
            <brand-top-edit {...edit}/>
            {/*编辑页*/}
            {/*列表页*/}
            <div slot="list">
                <a-table {...this.tableConfig} dataSource={this.list}
                />
                <a-modal {...modal}>
                    <add-and-edit data={this.data} wrappedComponentRef={(inst: any) => this.ref = inst}/>
                </a-modal>
            </div>
            {/*end 列表页*/}
        </k-page>);
    }
}