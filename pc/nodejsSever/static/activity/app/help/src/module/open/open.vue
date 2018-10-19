<style scoped>
    .progress{
        background: #0087de;
        .bigtitle{
            text-align: center;
            text-decoration: underline;
            color:#fff;
            font-family: "PingFangSC Regular";
        }
        .littleTitle{
            text-align: center;
            color:#fff;
            .lilltenumber{
                background: #fff;
                color:#0087de;
                border-radius: 50%;
                display: inline-block;
            }
        }
        .picture{
            margin: 0 auto ;
        }
    }
   
</style>
<template>
<section class='progress left-sider img-size' data-paddingBottom='70'>
    <div class='bigtitle img-size' data-fontSize='30'  >开户步骤</div>
    <div class='littleTitle img-size' data-fontSize='30' data-lineHeight='45' data-marginBottom='50' data-marginTop='90'>第<span class='lilltenumber img-size' data-width='30' data-height='30' data-lineHeight='30' data-marginTop='8'>1</span>步：输入您的真实姓名、身份证号</div>
    <div class='picture img-size' data-height="1079" data-width="614">
        <img src="../../images/open/open1.png"  alt="" class='picture img-size' data-height="1079" data-width="614">
    </div> 
      <div class='littleTitle img-size' data-fontSize='30' data-lineHeight='45' data-marginBottom='50' data-marginTop='90'>第<span class='lilltenumber img-size' data-width='30' data-height='30' data-lineHeight='30' data-marginTop='8'>2</span>步：根据限额选择您的开户银行</div>
    <div class='picture img-size' data-height="1077" data-width="612">
        <img src="../../images/open/open2.png"  alt="" class='picture img-size' data-height="1077" data-width="612">
    </div>     
    <div class='littleTitle img-size' data-fontSize='30' data-lineHeight='45' data-marginBottom='50' data-marginTop='90'>第<span class='lilltenumber img-size' data-width='30' data-height='30' data-lineHeight='30' data-marginTop='8'>3</span>步：输入您所选银行的银行卡号</div>
    <div class='picture img-size' data-height="1077" data-width="612">
        <img src="../../images/open/open3.png"  alt="" class='picture img-size' data-height="1077" data-width="612">
    </div>    
     <div class='littleTitle img-size' data-fontSize='30' data-lineHeight='45'  data-marginTop='90'>第<span class='lilltenumber img-size' data-width='30' data-height='30' data-lineHeight='30' data-marginTop='8'>4</span>步：选择您的开户行城市信息 </div>
     <div class='littleTitle img-size' data-fontSize='24' data-lineHeight='45' data-marginBottom='50'>（若无您开卡所在城市可选择省会城市）</div>  
    <div class='picture img-size' data-height="771" data-width="612">
        <img src="../../images/open/open4.png"  alt="" class='picture img-size' data-height="771" data-width="612">
    </div>    
     <div class='littleTitle img-size' data-fontSize='30' data-lineHeight='45' data-marginTop='90'>第<span class='lilltenumber img-size' data-width='30' data-height='30' data-lineHeight='30' data-marginTop='8'>5</span>步：设置您的交易/提现密码</div>
     <div class='littleTitle img-size' data-fontSize='24' data-lineHeight='45' data-marginBottom='50'>（用于交易以及提现，须为6位数字）</div> 
    <div class='picture img-size' data-height="1077" data-width="612">
        <img src="../../images/open/open5.png"  alt="" class='picture img-size' data-height="1077" data-width="612">
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
