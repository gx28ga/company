/**
 *  author : bo.peng
 *  createTime 2018-11-09 18:07
 *  description :
 */
import {Component, Vue} from 'vue-property-decorator';
import {Type} from '@/store/modules/user/Type';
import {UserLoginDto} from '@/dto/user/UserLoginDto';
import {Util} from '@/Utils/Util';

@Component
export default class Login extends Vue {
    private form: any = null;

    private hasErrors(fieldsError: any= {}) {
        return Object.keys(fieldsError).some((field: string) => fieldsError[field]);
    }

    private mounted() {
        this.$nextTick(() => {
            // To disabled submit button at the beginning.
            this.form.validateFields();
        });
    }

    private userNameError() {
        const form: any = this.form;
        return form.isFieldTouched('userName') && form.getFieldError('userName');
    }

    private passwordError() {
        const form: any = this.form;
        return form.isFieldTouched('password') && form.getFieldError('password');
    }

    private handleSubmit(e: any) {
        let self: any = this;
        e.preventDefault();
        this.form.validateFields((err: any, obj: any) => {
            if (!err) {
                console.log('Received values of form: ', obj);
            }
            let userInfo: UserLoginDto = {
                userName : obj.userName,
                password : Util.pwdmd5(obj.password),
            };
            self.$store.dispatch(Type.LOGIN, userInfo);
        });
    }
}