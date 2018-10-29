<style scoped>
    .form{
        padding-bottom: 30px;
        .error{
            color: #E94F37;
            height:0;
            transition-duration: .3s;
            overflow:hidden;
            text-align: center;
            i{ display:inline-block; margin-right: 5px; background-image: url(../../images/login/error.png); background-size: contain; background-repeat: no-repeat; vertical-align: middle; margin-top: -2px; }
            &.cur{
                height:44px; line-height: 60px; font-size: 12px;
            }
        }
        .submit{
            .btn{ 
                background: #00C6A8;
                border-radius:4px;
                text-align: center;
                color:#fff;
            }
        }
        .about{ color:#999; display:flex;
            justify-content: center;
            .link{
                color:#00C6A8;
            }
        }
    }
</style>
<template>
<section class='form left-sider'>
    <div class='inputElement' @click='clearEvent'>
        <yzm :model='tel' :yzmTips="showError" :callback='yzmInfo' :telYz='true' type='1'></yzm>
        <tab name='验证码' :model='yzm' maxlength='6' placeholder='请输入手机验证码'></tab>
        <tab name='登录密码' :model='pwd' inputType='password' maxlength='20' placeholder='请设置登录密码'></tab>
        <tab name='确认密码' :model='pwd2' inputType='password' maxlength='20' placeholder='请确认登录密码'></tab>
        <tab name='推荐人号码' :model='tuijian' inputType='tel' maxlength='11' placeholder='(选填)请输入推荐人手机号码'></tab>
    </div>
    
    <div class='error img-size' :class='{cur:error}' data-fontSize='24'><i class='img-size' data-width='24' data-height='24'></i>{{errorMsg}}</div>
    <div class='submit img-size' data-padding='30'>
        <div class='btn img-size' data-height='88' data-lineHeight='88' data-fontSize='32' @click='submit'>注册</div>
    </div>
    <div class='about img-size' data-fontSize='24' >点击注册表示您已阅读并同意<div class='link' @click='linkEvet'>《注册协议》</div></div>
</section>
</template>
<script>
    import requirePop from '../../pop/requirePop.js';
    import requireSys from '../../pop/requireSys.js';
    import tab from '../../components/table.vue';
    import yzm from '../../components/phoneYzm.vue';
    import { mapGetters } from 'vuex';
    export default {
        components:{
            tab , 
            yzm
        },
        data(){
            return {
                yzmMsg : '获取验证码',
                yzmVal : '' ,
                pwdVal : '' ,
                pwd2Val : '' ,
                tuijianVal : '' ,
                smsId : 0,
                error : false,
                errorMsg : '',
            }
        },
        computed : {
            ...mapGetters([
                'userInfo'
            ])
        },
        created(){
            let self = this;
            ['tel','yzm','pwd','pwd2','tuijian'].map(name=>{
                self[name] = function( newval , oldval ){
                    self[name+'Val'] = newval;
                }
            });
        },
        watch : {
            /*yzmVal : function( val ){
                this.yzmVal = T.justNumber(val);
            }*/
        },
        mounted(){

        },
        methods : {
            clearEvent(){
                this.error = false;
                this.errorMsg = '';
            },
            showError( val ){
                this.error = true;
                this.errorMsg = val
            },
            yzmInfo( obj ){
                let self = this;
                self.smsId = obj.data.smsId
                /*T.ajax({
                    mobile : tel ,
                    type : 1
                },"M001").then(data=>{
                    self.smsId = data.data.smsId
                })*/
            },
            verification( callback ){
                let tel = this.telVal ,
                    yzm = this.yzmVal,
                    pwd = this.pwdVal,
                    pwd2 = this.pwd2Val,
                    tuijian = this.tuijianVal;

                if(tel===''){
                    return this.showError('手机号不能为空')
                }else if(!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(tel))){
                    return this.showError('请输入正确的手机号')
                }else if(yzm==''){
                    return this.showError('请输入验证码！')
                }else if(pwd==''){
                    return this.showError('请输入密码！')
                }else if(pwd.length<6){
                    return this.showError('输入密码不能少于6位！')
                }else if(pwd.length>20){
                    return this.showError('注册密码为 6-20位数字、字母或两者组合')
                }else if(pwd2 ==""){
                    return this.showError('请输入确认密码！')
                }else if(pwd2 != pwd ){
                    return this.showError('两次输入的密码不一致！')
                }else if(tuijian == tel){
                    return this.showError('推荐人手机号不能是本人手机号!')
                }
                callback();

            },
            linkEvet(){
                requirePop('explorerPop')
            },
            errorPop(cnt , callback , ok ){
                requirePop('yzmerror',{
                    props : {
                        transition : 'rotate3d',//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                        title : '错误',
                        content : cnt,
                        okTxt : ok||'确定',
                        closeCallback : callback || function(){}
                    }
                },"publicTips")
            },
            submit(){
                let self = this ,
                    chid = $.fn.cookie('chid');
                chid = chid || '';
                this.verification(function(){
                    alert("成功")
                })
            },
            success(){
                let self = this;
                self.$store.commit('getUserInfo');

                let query = self.$route.query;
                query.reg = true;
                query.sucesse = true;

                require.ensure([],(require)=> {
                    let sys = require('./regSuccess.vue').default;
                    $('<div class="child">').appendTo('body');
                    Vue.component('regSuccess',sys);
                    new Vue({
                        el: '.child',
                        render(h) {
                            return h('regSuccess',{
                                props : {
                                    user : self.userInfo,
                                    transition : 'rotate3d'
                                }
                            })
                        }
                    });
                });
            }
        }
    }
</script>