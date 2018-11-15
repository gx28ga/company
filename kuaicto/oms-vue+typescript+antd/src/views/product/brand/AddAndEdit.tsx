/**
 *  author : bo.peng
 *  createTime 2018-11-12 19:44
 *  description : 添加和编辑
 */
// @ts-ignore
import {Form} from 'ant-design-vue';
import {KuploadObj} from '@/views/common/Kupload';

export interface BrandAdd {
    name?: string;
    code?: string;
    upload: KuploadObj[];
    displayOrder: number;
}
export interface BrandEdit extends BrandAdd {
    brandId: number;
    // 是否显示
    enabled: boolean;
    // type
    brandType: string;
    // 其它数据
    data: any;
}

const FormItem = {
    props: ['data'],
    data() {
      return{
          upload: null,
      };
    },
    methods: {
        verification(e: Event) {
            e && e.preventDefault();
            const self: any = this;
            return new Promise((resolve: any , reject: any ) => {
                self.form.validateFields((err: Error, values: any) => {
                    if (!err) {
                        values.upload = self.upload || values.upload;
                        return resolve(values);
                    }
                    return reject(err);
                });
            });
        },
        uploadDone( arr: KuploadObj[]) {
            const self: any = this;
            self.upload = arr;
        },
    },
    watch: {
        data(obj: BrandAdd|BrandEdit) { // 更新编辑匡数据
            const self: any = this;
            self.form.setFieldsValue({
                name: obj.name,
                code: obj.code,
                upload: obj.upload,
                displayOrder: obj.displayOrder,
            });
        },
    },
    render() {
        const self: any = this;
        const data = self.data;
        const { getFieldDecorator } = self.form;
        const formItemLayout = {
            labelCol: {
                span: 4,
            },
            wrapperCol: {
                span: 15,
            },
        };
        if (data) {
            const upload = {
                on: {
                    uploadDone: self.uploadDone,
                },
            };
            return (
                <a-form>
                    <a-form-item
                        label='图标'
                        {...{props: formItemLayout}}
                        >
                        {
                            getFieldDecorator('upload', {
                                initialValue: data.upload,
                            })(<k-upload {...upload} limit={1}/>)
                        }
                    </a-form-item>
                    <a-form-item
                        {...{props: formItemLayout}}
                        label='名称'>
                        {
                            getFieldDecorator('name', {
                                initialValue: data.name,
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入名称!',
                                    },
                                ],
                            })(<a-input maxlength="20" placeholder='名称'/>)
                        }
                    </a-form-item>
                    <a-form-item
                        {...{props: formItemLayout}}
                        label='code'>
                        {
                            getFieldDecorator('code', {
                                initialValue: data.code,
                                rules:
                                    [
                                        {
                                            required: true,
                                            message: '请输入code!',
                                        },
                                    ],
                            })(<a-input maxlength="9" placeholder='code'/>)
                        }
                    </a-form-item>
                    <a-form-item
                        {...{props: formItemLayout}}
                        label='排序'>
                        {
                            getFieldDecorator('displayOrder', {
                                initialValue: data.displayOrder,
                            })(<a-input-number min={1} max={999}/>)
                        }
                    </a-form-item>
                </a-form>
            );
        } else {
            return <div style={{width: '100%', textAlign: 'center'}}><a-icon type="loading" /></div>;
        }
    },
};
export const AddAndEdit = Form.create()(FormItem);