/**
 *  author : bo.peng
 *  createTime 2018-11-13 13:10
 *  description : 品牌头部编辑
 */
import {Component, Vue, Watch} from 'vue-property-decorator';
import {BrandAdd, AddAndEdit} from '@/views/product/brand/AddAndEdit';
import {PRODUCT} from '@/api/urls/product/Product';
import {Api} from '@/api/Api';

@Component({
    components: {
        AddAndEdit,
    },
})
export default class TypeTopEdit extends Vue {
    private ref!: any;
    private visible: boolean = false;
    private confirmLoading: boolean = false;
    private model: BrandAdd = {
        upload: [],
        displayOrder: 1,
    };
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

    private add() {
        const self: any = this;
        self.visible = true;
    }

    private submit() {
        const self: any = this;
        self.ref.verification().then((data: BrandAdd) => {
            this.confirmLoading = true;
            let icon;
            data.upload.forEach( (item: any) => icon = item.url);
            Api.post(PRODUCT.BRAND, {...data, icon, enable: true}).then( (data: any) => {
                window.Main.$message.success('添加成功！');
                self.confirmLoading = false;
                self.visible = false;
                self.$emit('add');
            }, () => {
                self.confirmLoading = false;
                self.visible = false;
            });
        }, (error: Error) => {
            console.log('验证未通过');
        });
    }
    private cancel() {
        this.visible = false;
    }
    public render() {
        return (
            <k-top-edit>
                <div slot="left">
                    <a-button type="primary" onClick={this.add}>新增</a-button>
                    <a-modal
                        title="新增品牌"
                        visible={this.visible}
                        onOk={this.submit}
                        okText="确认"
                        cancelText="取消"
                        onCancel={this.cancel}
                        confirmLoading={this.confirmLoading}
                    >
                        <add-and-edit
                            wrappedComponentRef={(inst: any) => this.ref = inst}
                            data={this.model}/>
                    </a-modal>
                </div>
                <div slot="right">
                    <a-form layout='inline' autoFormCreate={(form: any) => {
                        this.form = form;
                    }}>
                        <a-form-item
                            {...{props: this.formItemLayout}}
                            fieldDecoratorId="name"
                        >
                            <a-input addonBefore="模板名称" placeholder="请输入模板名称"/>
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