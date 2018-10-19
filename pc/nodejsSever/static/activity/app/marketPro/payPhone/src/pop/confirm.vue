<style scoped>
    @import '../css/vue-pop.css';
	.modal-header{
        .title-bg{background: #fff;color: #333;border-top-left-radius:5px; border-top-right-radius:5px; 
            .title{ letter-spacing: 1px; }
            .close{  background: url('../images/close.png') no-repeat; 
            background-size: contain;}
        }
    }
    .modal-body{
        .notStart{ 
            text-align:left; 
            background:#f2f2f2; color: #333;p{border-bottom: 1px solid #d8d8d8;&:nth-child(5){border-bottom:0;}span{color: #ff651b;}}
        }
    }
    p{text-align:left;  span{color: #ff651b;}}
    .submit{ background: #fff; border-bottom-left-radius:5px; border-bottom-right-radius:5px;  color: #666;text-align: center; }
    .modal-footer{color: #666;}
    .subbtn {
        span{border-radius: 50px;
            display: inline-block;
            background: #ff8246;color: #fff;border:2px solid #ff8246;
            &:nth-child(1){border:2px solid #ff8246;color:#ff8246;background: #fff;}
        }
    }
</style>
<template>
    <pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
        <div slot="header" class='title-bg img-size' data-width='550' data-height='110' data-fontSize='30'>
            <div class="title">请确认您的开户信息</div>
        </div>
        <div slot='body' class='notStart img-size' data-width='520' data-fontSize='26' data-paddingRight='15' data-paddingLeft='15' data-lineHeight='66'>
            <p>真实姓名：<span>{{infoObj.name}}</span></p>
            <p>身份证号：<span>{{infoObj.IDCard}}</span></p>
            <p>银行卡号：<span>{{infoObj.bankCard}}</span></p>
            <p>开户银行：<span>{{infoObj.bankName}}</span></p>
            <p>开户城市：<span>{{infoObj.cityName}}</span></p>
        </div>
        <div slot='footer' class='submit img-size' data-width='550'>
            <p v-show='showNum!=""' class="img-size" data-lineHeight='70' data-paddingLeft='15' data-fontSize='26'>今日剩余认证次数：<span>{{showNum}}</span>次</p>
            <p v-show='showNum!=""' class="img-size" data-paddingLeft='15' data-fontSize='24' style="color:red;">请仔细确认，次数用尽今日将无法开户！</p>
            <div class='subbtn img-size' data-lineHeight='68' data-marginTop='40' data-marginBottom='40'>
                <span class="img-size" data-width='238' @click='cancel'>取消</span>
                <span class="img-size" data-width='238' @click='sure'>确认</span>
            </div>
        </div>
    </pop>
</template>
<script>
    import pop from './pop.vue';
    import requirePop from './requirePop.js';
    export default {
        components : {
            pop
        },
        data(){
            return{
                openTimes : '',
            }
        },
        mounted(){
            T.setImgSize();
            T.getAppInfo();
        },
        props : {
            transition : String,
            closeCallback : Function,
            okCallback : Function,
            title : String,
            msg : String,
            btn : String,
            showclose : Boolean,
            infoObj : Object,
            showNum : String,
            callbacks : Function,
        },
        methods : {
            submit : function(){
                if(this.okCallback){
                    this.okCallback.call(this);
                }else{
                    this.$refs.pop.closePop();
                }
            },
            cancel :function(){
                this.$refs.pop.closePop();
            },
            sure: function(info){
                T.ajax({
                    url: '/memberSetting/open.do',
                    data :{
                        capAcntNo : this.infoObj.bankCard,
                        certif_id :this.infoObj.IDCard,
                        city_id : this.infoObj.cityCode,
                        cust_nm : this.infoObj.name,
                        parent_bank_id : this.infoObj.bankId,
                        password :this.infoObj.tradersPass,
                    },
                    callback :true,
                }).then(data=>{
                    if(data.success){
                        this.$refs.pop.closePop(function(){
                            TDAPP.onEvent('RZcg');
                            router.replace({path: 'recharge', query: { toFrom: T.toFrom }})
                        })
                    }else{
                        this.$refs.pop.closePop(function(){
                            requirePop('khErr',{
                                props: {
                                    title : '提示',
                                    msg : data.errorMsg,
                                    btn : '我知道了',
                                    transition : 'rotate3d',
                                    showclose : false,
                                }
                            },'notice');
                        });
                        this.callbacks(data.map.openTimes);
                    }
                })
            }
        }
    }
</script>