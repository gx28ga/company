/**
 *  author : bo.peng
 *  createTime 2018-10-22 18:05
 *  description :
 */
import { Component, Vue } from 'vue-property-decorator';
import {UserLoginDto} from '@/dto/user/UserLoginDto';
import {Rule} from '@/dto/form/Rule';
import Verification from '@/mixin/Verification';
import FormHints from '@/constants/form/FormHints';
import LoginHints from '@/constants/form/login/LoginHints';
import {CurrentDto} from '@/dto/user/CurrentDto';

@Component
export default class Login extends Vue {
    private ruleForm: UserLoginDto = {
        userName: "",
        password: "",
    };
    private rules = {
        userName: [
            {
                validator: (rule: Rule, value: string, callback: any) => {
                    const msg: string = !Verification.empty(value) ? LoginHints.Login.empty :
                        !Verification.numAndLetter(value) ? LoginHints.Login.error :
                            "true";
                    msg === "true" ? callback() : callback(new Error(msg));
                },
                trigger: 'blur',
            },
        ],
        password: [
            {
                validator: (rule: Rule, value: string, callback: any) => {
                    const msg: string = !Verification.empty(value) ? LoginHints.password.empty :
                        !Verification.numAndLetter(value) ? LoginHints.password.error :
                            "true";
                    msg === "true" ? callback() : callback(new Error(msg));
                },
                trigger: 'blur',
            },
        ],
    };
    private submitForm(formName: string) {
        const self: any = this;
        self.$refs[formName].validate((valid: boolean) => {
            if (valid) {
                self.$store.dispatch("login", self.ruleForm);
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }
    private resetForm(formName: string) {
        const self: any = this;
        self.$refs[formName].resetFields();
    }
}