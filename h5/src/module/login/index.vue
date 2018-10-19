/**
* 用户登录
* created by bo.peng 2018/3/27
* email:spion@qq.com
*/
<style>
@import './style/base.css';
</style>
<template>
    <article class="login">
        <banner></banner>
        <div class="input-test">
            <input class="img-size" v-model="tel" data-height="100" type="tel" maxlength="11" placeholder="请输入手机号（建议使用银行预留手机号）"/>
        </div>
        <div class="readed img-size" data-fontSize="24">
            <span @click="readChecked = !readChecked">
                <div class="checkbox img-size" data-width="30" data-height="30" :class="{current:readChecked}"></div>
                <span>已阅读并同意</span>
            </span>

            <em @click="regAbout">《注册协议》</em>
            <span>和</span>
            <em @click="Investment">《投资服务协议》</em>
        </div>
        <div class="show-tel img-size" v-show="tel.length"
             data-fontSize="40"
             data-left="30" data-right="30" data-top="340">
            {{bigtel}}
        </div>
        <div class="submit img-size" data-marginTop="80">
            <div class="btn img-size" :class="{gray:!btnEvent}" @click="submit" data-height="80" data-lineHeight="80">下一步</div>
        </div>
    </article>
</template>

<script>
    import mixin from '../../mixin/filters';
    import mixinIndex from '../../mixin';
    import {mapGetters} from "vuex";
    import banner from "./common/banner";
    import {GET_PHONE_STATUS} from "../../contant/urls/LOGIN";
    export default {
        mixins : [mixinIndex,mixin],
        components:{
            banner
        },
        computed:{
            ...mapGetters({
                user : "getUserInfo"
            })
        },
        data(){
            return {
                tel : "",
                bigtel : "",
                readChecked : true,
                btnEvent : false,
                isPhone : false,
            }
        },
        mounted(){
            if(this.user){
                return this.go().myAccount.home();
            }
            this.setTitle({
                show : true,
                title : "登录/注册",
                back : true,
            });
            this.setImgSize();
            this.outside().in();//统计站外链接
        },
        watch:{
            tel(val){
                let value = this._justNumber(val);
                this.tel = value;
                this.bigtel = value.substr(0,3)+" "+value.substr(3,4)+" "+value.substr(7,4);
                this.isPhone = this._tel(value);
                this.changeBtnStatus();
            },
            readChecked(){
                this.changeBtnStatus();
            }
        },
        methods : {
            regAbout(){
                this.go().all({returnUrl:"/protocol/enroll"})
            },
            Investment(){
                this.go().all({returnUrl:"/protocol/invest"})
               // router.push("protocol/invest");
            },
            changeBtnStatus(){
                this.btnEvent = this.isPhone && this.readChecked;
            },
            submit(){
                if(!this.btnEvent) return;
                let self = this;
                this.ajax({
                    url : GET_PHONE_STATUS,
                    data : {
                        mobilePhone : this.tel
                    },
                    load : true,
                }).then(data=>{
                    self.$store.commit("setCatch",{tel:self.tel});
                    if(data.map.exists){

                        self.go().login.signin();
                    }else{
                        self.go().login.reg();
                    }
                });
            },
        }
    }
</script>
