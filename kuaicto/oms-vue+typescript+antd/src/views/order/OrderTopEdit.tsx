/**
 *  author : Lxh
 *  createTime 2018-11-14
 *  description : 销售订单列表头部编辑
 */
import {Component, Vue, Watch} from 'vue-property-decorator';

@Component
export default class OrderTopEdit extends Vue {
    private form!: any;
    private formItemLayout = { // 搜索 表单格示
        span: 30,
    };
    private formTailLayout = { // 搜索 按钮格示
        span: 8, offset: 1,
    };

    private check() {
        const self: any = this;
        self.form.validateFields(
            (err: any, values: any) => {
                if (!err) {
                    self.$emit('searchEvent', values, self.form);
                }
            },
        );
    }
    private render() {
        return (
            <k-top-edit>
                <div slot="left">
                </div>
                <div slot="right">
                    <a-form layout='inline' autoFormCreate={(form: any) => {
                        this.form = form;
                    }}>
                        {/* <a-form-item
                            {...{props: this.formItemLayout}}
                            fieldDecoratorId="time"
                        >
                            <a-range-picker placeholder={['开始时间', '结束时间']}/>
                        </a-form-item> */}
                        <a-form-item
                            {...{props: this.formItemLayout}}
                            fieldDecoratorId="orderNo"
                        >
                            <a-input addonBefore="订单号" placeholder="请输入订单号"/>
                        </a-form-item>
                        <a-form-item
                            {...{props: this.formItemLayout}}
                            fieldDecoratorId="orderStatus"
                        >
                            <a-input addonBefore="订单状态" placeholder="请输入订单状态"/>
                        </a-form-item>
                        <a-form-item
                            {...{props: this.formTailLayout}}
                        >
                            <a-button type='primary' onClick={this.check}>搜索</a-button>
                        </a-form-item>
                    </a-form>
                </div>
            </k-top-edit>
        );
    }
}