/**
 *  author : Lxh
 *  createTime 2018-11-14
 *  description : 销售订单列表头部编辑
 */
import {Component, Vue, Watch} from 'vue-property-decorator';

@Component
export default class TraderTopEdit extends Vue {
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
                            fieldDecoratorId="name"
                        >
                            <a-input addonBefore="商家名称" placeholder="请输入商家名称"/>
                        </a-form-item>
                        <a-form-item
                            {...{props: this.formItemLayout}}
                            fieldDecoratorId="address"
                        >
                            <a-input addonBefore="地区" placeholder="请输入所属地区"/>
                        </a-form-item>
                        <a-form-item
                            {...{props: this.formItemLayout}}
                            fieldDecoratorId="contactName"
                        >
                            <a-input addonBefore="负责人" placeholder="请输入负责人"/>
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