/**
 * 发送相关提示
 * created by bo.peng 2018/5/25
 * email:spion@qq.com
 */
export default{
    methods:{
        _sendMsgTips( tel ){//发送手机验证码提示
            this.$tips({
                transition : "up",
                superClass : "downPop transparent",
                time:3000,//3秒
                content : "验证码已发送至您尾号"+String(tel).substr(-4)+"的手机上，请注意查收！"
            })
        }
    }
}
