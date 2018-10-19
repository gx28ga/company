<style scoped>
    @import '../css/vue-pop.css';
	.modal-header{
        .title-bg{ background: url('../images/tibg.png') no-repeat; background-size: contain;
            .title{ letter-spacing: 1px; }
            .close{  background: url('../images/close.png') no-repeat; 
            background-size: contain;}
        }
    }
    .modal-body{
        .notStart{ 
            text-align:center; 
            background:#fff; color: #333;
        }
        input{border:1px solid #b1b1b1;}
        .error{color: #ff8383;}
    }
    .submit{ background: #fff; border-top: 1px solid #ccc;color: #666;text-align: center; }
    .modal-footer{color: #666;}
</style>
<template>
    <pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
        <div slot="header" class='title-bg img-size' data-width='550' data-height='90'>
            <div class="title img-size" data-fontSize='36'>{{title}}</div>
            <i v-show='showclose' class='close img-size' data-width='31' data-height='31' data-right='11' data-top='11' @click='cancel'></i>
        </div>
        <div slot='body' class='notStart img-size' data-width='550' data-fontSize='30' data-paddingTop='45' data-paddingBottom='45'>
            <input class="img-size" data-letterSpacing='10' data-borderRadius='10' data-paddingLeft='10' data-lineHeight='80' type="password" v-model='billPass' placeholder="请输入交易密码" minlength="6" maxlength="6" v-on:input='inputpassfun'>
            <p class="error img-size" data-fontSize='24'>{{passErr}}</p>
        </div>
        <div slot='footer' class='submit img-size' data-width='550' data-borderBottomLeftRadius='8' data-borderBottomRightRadius='8' @click='submit'>
            <div class='subbtn img-size' data-lineHeight='74'>{{btn}}</div>
        </div>
    </pop>
</template>
<script>
    import pop from './pop.vue';
    import requirePop from './requirePop.js';
    export default {
        data(){
            return{
                passErr : '',
            }
        },
        components : {
            pop
        },
        mounted(){
            T.setImgSize();
            T.getAppInfo();
            this.amount = T.localStorage.getItem('amount');
        },
        props : {
            transition : String,
            closeCallback : Function,
            okCallback : Function,
            title : String,
            btn : String,
            showclose : Boolean,
            amount : Number,
            id : Number,
        },
        methods : {
            cancel:function(){
                this.$refs.pop.closePop();
            },
            inputpassfun : function(){
                if(this.billPass==''){
                    this.passErr = '';
                }
            },
            submit : function(){
                var regPass = /^\d{6}$/;
                if(regPass.test(this.billPass)==true){
                    console.log(this.id)
                    console.log(this.billPass)
                    console.log(this.amount)
                    debugger;
                    T.ajax({
                        url:'/invest',
                        data:{
                            tpwd : this.billPass,
                            amount : this.amount,
                            pid : this.id,
                        },
                        callback:true
                    }).then(data=>{
                        if(data.success){
                            this.$refs.pop.closePop(function(){
                                router.replace({path: 'invest', query: { toFrom: T.toFrom }})
                                TDAPP.onEvent('TZcg');
                            })
                        }else{
                            this.$refs.pop.closePop(function(){
                                requirePop('touzi',{
                                    props: {
                                        title : '提示',
                                        transition : 'rotate3d',
                                        btn :'我知道了',
                                        msg : data.errorMsg,
                                        showclose : false,
                                    }
                                },'notice')
                                
                            });
                        }
                    })
                }else{
                    this.passErr='请输入6位数字组合的交易密码'
                }
            }
        }
    }
</script>