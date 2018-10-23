import FormInfo from '@/dto/form/FormInfo';

/**
 *  author : bo.peng
 *  createTime 2018-10-23 9:41
 *  description :
 */
export default class LoginHints {
    public static Login: FormInfo = {
        empty : '请输入帐号',
        error : '帐号为6-10位数字或字母',
    };
    public static password: FormInfo = {
        empty: '密码不能为空',
        error: '密码为6-8位字母和数字组成',
    };
    public static checkPass: FormInfo = {
        empty: '重复密码不能为空',
        error: '两次密码不一致',
    };
}