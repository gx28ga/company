/**
* 登录
* created by bo.peng 2018/3/28
* email:spion@qq.com
*/
<style>
.sign-in{
    header{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
    .head-img{
        background: url("../../../images/login/user.png");
        background-size:contain;
    }
    .eye{
        background: url("../../../images/login/eyegray.png");
        background-size:contain;
        &.current{
             background-image: url("../../../images/login/eye.png");
         }
    }
    .get-pwd{
        color:#0084D7;
        text-align:right;
    }
    .input-text{
        display:flex;
        flex-direction:row;
        align-items:center;
        background:#fff;
        input{
            display:block;
            flex:1;
            border:none;
        }
    }
    .explain{
        color:#FE7634;
    }
    .copyright{
        position:absolute;
        left:0;
        right:0;
        color: #9B9B9B;
        text-align:center;
        opacity:0;
        animation: revolving 1s infinite 1s forwards;
        animation-iteration-count: 1;
        @at-root{
            @-webkit-keyframes revolving{
                0%{opacity:0;}
                100%{opacity:1;}
            }
        }
    }
}
</style>
<template>
    <article class="sign-in">
        <header class="img-size" data-paddingTop="40" data-paddingBottom="40">
            <div class="head-img img-size" data-marginBottom="30" data-width="140" data-height="140"></div>
            <em>{{tel}}</em>
        </header>
        <section>
            <div class="input-text img-size" data-height="100"
                 data-marginBottom="15"
                 data-paddingLeft="30" data-paddingRight="30">
                <input class="text" v-model="pwd" :type="type"
                       maxlength="18"
                       placeholder="请输入登录密码"/>
                <div class="eye img-size" :class="{current:showPwd}"
                     data-width="60" data-height="36"
                     @click="setPwdShow"></div>
            </div>
            <div class="get-pwd img-size" data-paddingRight="30">
                <span @click="getPwd">忘记密码</span>
            </div>
            <div class="explain img-size"
                 data-paddingLeft="30" data-fontSize="24">
                登录密码为6-18位数字与字母组合
            </div>
        </section>
        <div class="submit img-size" data-paddingTop="100" data-paddingRight="60" data-paddingLeft="60">
            <div class="btn img-size" :class="{gray:!btnEvent}"
                 @click="submit"
                 data-height="80" data-lineHeight="80">
                 登录
            </div>
        </div>
        <div class="copyright img-size" data-bottom="20" data-padding="20">您的资金将由银行提供存管服务，敬请放心！</div>
    </article>
</template>

<script>
    import {mapGetters} from "vuex";
    import mixin from '../../../mixin';
    import filters from '../../../mixin/filters';
    import {LOGIN} from "../../../contant/urls/LOGIN";
    import {RESULT_RETURNURL} from "../../../contant/LOCALSTORAGE"
    export default {
        mixins : [mixin,filters],
        computed:{
            ...mapGetters({
                data : "getCatch",
                user : "getUserInfo"
            })
        },
        data(){
            return{
                btnEvent : false,
                tel : "",
                pwd : "",
                showPwd : false,
                type : "password",
            }
        },
        mounted(){
            if(this.user){
                return this.go().home();
            }
            let tel = this.data.tel;
            if(!tel) return this.go().login.home();
            this.tel = tel.substr(0,3)+"****"+tel.substr(7);
            this.setTitle({
                back:true,
                title : "登录",
                show : true,
            });
            this.setNav({
                show : false
            });
            this.setImgSize();
        },
        watch:{
            pwd(val){
                let newPwd = this._toNumberAndLetter(val);
                this.pwd = newPwd;
                this.btnEvent = this._numAndLetter(val);
            }
        },
        methods:{
            setPwdShow(){
                this.showPwd = !this.showPwd;
                this.type = this.showPwd?"text":"password";
            },
            getPwd(){
                //其他操作后要返回的页面
                T.setItem(RESULT_RETURNURL, {
                    returnUrl: "/login/signin"
                });
                this.go().login.getPwd();
            },
            submit(){
                if(!this.btnEvent) return;
                this.btnEvent = true;
                let self = this;
                require.ensure([], function(require){
                    let pwd = require("../../../middle/setPwd").setPwd(self.pwd);
                    self.ajax({
                        url : LOGIN,
                        data:{
                            mobilePhone : self.data.tel,
                            passWord : pwd //md5 shaK
                        },
                        load : true,
                        callback : true,
                    }).then(data=>{
                        if(data.success){
                            self.$store.commit("setUserInfo",data.map);
                            self.$store.commit("updateUserInfo",data.map);
                            self.outside().out();
                            self.go().resultUrl(()=>{
                                self.go().myAccount.home();
                            });
                            T.callApp.login({
                                uid : data.map.member.uid,
                                token : data.map.token
                            });
                        }else{
                            self.$pop({
                                title : "错误",
                                close : true,//是否显示关闭按钮
                                content : "帐号或密码错误！"
                            });
                        }
                        self.btnEvent = false;
                    });
                });

            }
        }
    }
</script>
