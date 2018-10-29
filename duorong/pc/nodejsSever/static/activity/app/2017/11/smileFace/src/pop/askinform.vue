<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.check-mobile{
        .modal-container.pop-cnt{
            position: relative;
            background: #5C0399;
            text-align: center;
            .mobile{
                display: inline-block;
                background: #FFF;
                color: #555;
                text-align: left;
            }
            .error{
                position: absolute;
                color: #F00;
                text-align: left;
            }
            .askinform-btn{
                display: inline-block;
                background: #F44180;
                color: #DDD;
            }
            .msg{
                width: 100%;
                color: #FFF;
            }
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask check-mobile" @click="closePop">
        <div v-show="popState == 0" class="modal-container pop-cnt img-size" data-width='490' data-height='280' data-borderRadius="15" @click='closePropagtion($event)'>
            <div class="img-size" data-width="490">
                <input type="text" class="mobile img-size" placeholder="请输入手机号码" v-model="mobilePhone" data-marginTop="55" data-marginBottom="55" data-paddingLeft="20" data-width="380" data-height="60" data-fontSize="42" data-lineHeight="60" maxLength="11" @focus="showError = false">
            </div>
            <div v-show="showError == true" class="error img-size" data-top="126" data-left="55" data-fontSize="24" data-lineHeight="24">手机号码不正确！</div>
            <div class="askinform-btn img-size" data-borderRadius="10" data-width="170" data-height="50" data-fontSize="24" data-lineHeight="50" @click="onConfirm">确 定</div>
        </div>
        <div v-show="popState == 1" class="modal-container pop-cnt img-size" data-width='490' data-height='280' data-borderRadius="15" @click='closePropagtion($event)'>
            <div class="msg img-size" data-marginTop="40" data-marginBottom="30" data-fontSize="18" data-lineHeight="50">您已是多融财富注册用户，无法助力好友<br>但可以参加此活动，争夺【XXXXX】超级大奖</div>
            <div class="askinform-btn img-size" data-borderRadius="10" data-width="236" data-height="50" data-fontSize="24" data-lineHeight="50" @click="tryLaunchApp">前往多融理财APP</div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            popState : Number,
            recommCode : String
        },
        data(){
            return{
                showModal : true,
                showError: false,
                mobilePhone: ''
            }
        },
        computed : {
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
            closePropagtion : function( e ){
                e.stopPropagation();
            },
            showPop : function(callback){
                this.showModal = true;
                if($.type(callback) == 'function'){
                    setTimeout(callback,550)
                }
            },
            closePop : function(callback){
                this.showModal = false;
                T.getPop(callback);
                bus.$emit('closePopEvent');
            },
            onConfirm : function () {
                this.mobilePhone = this.mobilePhone.trim();
                if (this.mobilePhone == '') return;
                if (!(/^1[3|4|5|7|8][0-9]\d{8}$/.test(this.mobilePhone))) {
                    this.showError = true;
                    return;
                }
                this.closePop(() => {
                    bus.$emit('confirm-mobile-unregistered', this.mobilePhone);
                })
            },
            tryLaunchApp : function () {
                this.closePop(() => {
                    bus.$emit("launch-duorongcf-event");
                });
            }
        }
    }
</script>