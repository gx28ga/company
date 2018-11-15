/**
 *  author : Lxh
 *  createTime 2018-11-14
 *  description :
 */
import {Component, Vue} from "vue-property-decorator";
import {Api} from '@/api/Api';
import {ORDERAPI} from '@/api/urls/order/Order';
import OrderTopEdit from '@/views/order/OrderTopEdit';
import { DataFormat, Currency} from '@/filter';
@Component({
    filters: {...DataFormat, ...Currency},
    components: {
        OrderTopEdit,
    },
})
export default class SaleOrderList extends Vue {
    private list = [];
    private columns: object[] = [
        {
            title: '单号',
            dataIndex: 'orderNo',
            width: '30%',
        },
        {
            title: '下单时间',
            dataIndex: 'createTime',
            scopedSlots: { customRender: 'createTime' },
        },
        {
            title: '卖家',
            dataIndex: 'sellerName',
        },
        {
            title: '买家',
            dataIndex: 'buyerName',
        },
        {
            title: '支付方式',
            dataIndex: 'paymentStatus',
        },
        {
            title: '商品总金额',
            align: 'right',
            dataIndex: 'originTotalAmount',
            scopedSlots: { customRender: 'originTotalAmount' },
        },
        {
            title: '订单总金额',
            align: 'right',
            dataIndex: 'finalTotalAmount',
            scopedSlots: { customRender: 'finalTotalAmount' },
        },
        // {
        //     title: '状态',
        //     align: 'right',
        //     dataIndex: 'brandId',
        // },
        {
            title: '操作',
            align: 'right',
            dataIndex: 'orderId',
            scopedSlots: { customRender: 'edit' },
        },
    ];
    private searchEvent(obj: any, form: any) {
        console.log(obj, form);
    }
    private mounted() {
        const self = this;
        Api.getList(ORDERAPI.ORDER, {orderType: 'SALE_ORDER'}).then((data) => {
            self.list = data.items;
        });
    }
}