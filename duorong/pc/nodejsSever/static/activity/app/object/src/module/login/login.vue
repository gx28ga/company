<style scoped>
    .form{
        padding-bottom: 30px;
        .error{
            color: #E94F37;
            height:0; font:0/0 arial;
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
        .about{ color: #00C6A8; text-align: right;}
        .edit{
            &.yzm-btn{
                color: #00C6A8;
                font-size:14px;
            }
            &.gray{ color:#999; }
        }
    }
</style>
<template>
<section class='form left-sider'>
    <div class='inputElement' @click='clearEvent'>
        <tab name='手机号码' :model='tel' inputType='tel' maxlength='11' placeholder='请输入手机号码'></tab>
        <tab name='登录密码' :model='pwd' inputType='password' maxlength='20' placeholder='请输入登录密码'></tab>
    </div>
    
    <div class='error img-size' :class='{cur:error}' data-fontSize='24'><i class='img-size' data-width='24' data-height='24'></i>{{errorMsg}}</div>
    <div class='submit img-size' data-padding='30'>
        <div class='btn img-size' :class="{gray:gray}" data-height='88' data-lineHeight='88' data-marginBottom='20' data-fontSize='32' @click='submit'>登录</div>
        <div class='about img-size' data-fontSize='24' ><span @click='downApp'>忘记密码</span></div>
    </div>
</section>
</template>
<script>
    import requirePop from '../../pop/requirePop.js';
    import tab from '../../components/table.vue';
    export default {
        components:{
            tab
        },
        data(){
            return {
                telVal : '' ,
                pwdVal : '' ,
                error : false,
                errorMsg : '',
                gray : false
            }
        },
        created(){
            const self = this;
            ['tel','pwd'].map(name=>{
                self[name] = function( newval , oldval ){
                    self[name+'Val'] = newval;
                }
            });
        },
        mounted(){
            
        },
        methods : {
            clearEvent(){
                this.error = false;
            },
            showError( val ){
                this.error = true;
                this.errorMsg = val
                this.gray = false;
            },
            downApp(){
                requirePop('downApp')
            },
            verification(callback){
                let tel = this.telVal ,
                    yzm = this.yzmVal,
                    pwd = this.pwdVal,
                    pwd2 = this.pwd2Val,
                    tuijian = this.tuijianVal;

                if(tel==''){
                    return this.showError('手机号不能为空')
                }else if(!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(tel))){
                    return this.showError('请输入正确的手机号')
                }else if(pwd==''){
                    return this.showError('请输入密码！')
                }else if(pwd.length<6 || pwd.length>20){
                    return this.showError('登录密码为 6-20位数字、字母或两者组合')
                }
                callback();
            },
            submit(){
                let self = this ,
                    url = decodeURIComponent(this.$route.query.returnUrl),
                    query = this.$route.query;
                if(self.gray) return;
                self.gray = true;
                this.verification(function(){
                    alert('成功')
                })
            }
        }
    }
</script>