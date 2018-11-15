/**
 *  author : wangcheng
 *  createTime 2018-11-13
 *  description :
 */
import {Component, Vue} from "vue-property-decorator";
import {Api} from '@/api/Api';
import {TRADERAPI} from '@/api/urls/trader/Trader';
import {DataFormat} from '@/filter';
import TraderTopEdit from '@/views/trader/TraderTopEdit';
@Component({
    filters: DataFormat,
    components: {
        TraderTopEdit,
    },
})
export default class TraderList extends Vue {
    private ref!: any;
    // private data: BrandEdit| null = null;
    private visible: boolean = false;
    private confirmLoading: boolean = false;
    private list: object[] = [];
    private columns: object[] = [
        {
            title: '编号',
            align: 'center',
            dataIndex: 'traderId',
        },
        {
            title: '商家名称',
            align: 'center',
            dataIndex: 'name',
        },
        {
            title: '地区',
            dataIndex: 'addr',
            align: 'center',
            scopedSlots: { customRender: 'address' },
        },
        {
            title: '负责人',
            align: 'center',
            dataIndex: 'contactName',
        },
        {
            title: '联系电话',
            align: 'center',
            dataIndex: 'contactPhone',
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            align: 'center',
            scopedSlots: { customRender: 'time' },
        },
        {
            title: '状态',
            dataIndex: 'enabled',
            align: 'center',
            scopedSlots: { customRender: 'status' },
        },
        {
            title: '操作',
            align: 'center',
            dataIndex: 'brandId',
            scopedSlots: { customRender: 'edit' },
        },
    ];
    private searchEvent(obj: any, form: any) {
        console.log(obj, form);
    }
    // private edit(record: any) {
    //     let uploads: KuploadObj[] = [];
    //     if (record.icon ) {
    //         uploads.push({
    //             url: record.icon,
    //         } as KuploadObj);
    //     }
    //     this.data = {
    //         upload: uploads,
    //         name: record.name,
    //         code: record.code,
    //         displayOrder: record.displayOrder,
    //         brandId: record.brandId,
    //         enabled: record.enabled,
    //         brandType: record.brandType,
    //         data: record,
    //     };
    //     this.visible = true;
    // }
    // private submit() {
    //     const self: any = this;
    //     self.ref.verification().then((data: BrandEdit) => {
    //         this.confirmLoading = true;
    //         Api.update(PRODUCT.BRAND + '/' + self.data.brandId,
    //             Object.assign({}, this.data, data)).then( (data: any) => {
    //             debugger;
    //         });
    //     }, (error: Error) => {
    //         console.log('验证未通过');
    //     });
    // }
    private mounted(params: any) {
        const self = this;
        params = Object.assign({}, params, { traderTypeId: this.$route.query.traderTypeId});
        Api.find(TRADERAPI.TRADER, params).then((res) => {
            self.list = res.items;
        });
    }
}