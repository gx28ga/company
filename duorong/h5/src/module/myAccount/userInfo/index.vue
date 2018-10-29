/**
* 个人信息
* created by bo.peng 2018/4/12
* email:spion@qq.com
*/
<style scoped>
    @import "../style/base.css";
    .img{
        img{
            max-height: 100%;
            display:block;
        }
    }
</style>
<template>
    <div class="my-account" v-if="member">
        <article>
            <section class="img-size" data-paddingLeft="30">
                <ul>
                    <li class="box img-size" data-height="90" data-paddingRight="30">
                        <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                            手机号
                        </div>
                        <aside>
                            <div class="text img-size" data-fontSize="24">{{member.mobilePhone}}</div>
                        </aside>
                    </li>
                    <li class="box img-size" data-height="90" data-paddingRight="30" >
                        <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                            姓名
                        </div>
                        <aside @click="openAccount">
                            <div class="text img-size" data-fontSize="24">{{account.isRas==1?member.realName:"未开户"}}</div>
                            <div class="arrow-parent" v-show="showArrow">
                                <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                            </div>
                        </aside>
                    </li>
                    <li class="box img-size" data-height="90" data-paddingRight="30" >
                        <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                            身份证号
                        </div>
                        <aside @click="openAccount">
                            <div class="text img-size" data-fontSize="24">{{account.isRas==1?member.idCards:"未开户"}}</div>
                            <div class="arrow-parent" v-show="showArrow">
                                <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                            </div>
                        </aside>
                    </li>
                    <li class="box img-size" data-height="90" data-paddingRight="30" >
                        <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                            银行卡
                        </div>
                        <aside @click="getBankAbout">
                            <div class="text img img-size"  data-fontSize="24">
                                <img :src="member.logo" v-if="!showArrow">
                                <span v-else>未开户</span>
                            </div>
                            <div class="arrow-parent">
                                <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                            </div>
                        </aside>
                    </li>
                    <li class="box img-size" data-height="90" data-paddingRight="30" >
                        <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                            存管账户
                        </div>
                        <aside @click="openAccount">
                            <div class="text img-size" data-fontSize="24">
                                <!--{{account.memberType==2?"已开户":"未开户"}}-->
                                {{account.isRas==1?"已开户":"未开户"}}
                            </div>
                            <div class="arrow-parent" v-show="showArrow">
                                <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                            </div>
                        </aside>
                    </li>
                </ul>
            </section>
            <section class="img-size" data-marginTop="20" data-paddingLeft="30" >
                <ul>
                    <li class="box img-size"  data-height="90" data-paddingRight="30">
                        <div class="title flex img-size"
                             data-fontSize="28" data-paddingLeft="30">
                            VIP等级
                        </div>
                        <aside @click="goVIP">
                            <div class="text img-size" data-fontSize="24" v-if="!showArrow">VIP{{account.userAccountLevel.vipLevelNum||0}}</div>
                            <div class="text img-size" data-fontSize="24" v-else>未开户</div>
                            <div class="arrow-parent">
                                <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                            </div>
                        </aside>
                    </li>
                    <li class="box img-size"  data-height="90" data-paddingRight="30">
                        <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                            积分
                        </div>
                        <aside @click="goPoints">
                            <div class="text img-size" data-fontSize="24">{{account.userAccountLevel.points}}积分</div>
                            <div class="arrow-parent">
                                <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                            </div>
                        </aside>
                    </li>
                    <li class="box img-size"  data-height="90" data-paddingRight="30">
                        <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                            收货地址
                        </div>
                        <aside @click="go().myAccount.userInfo.address()">
                            <div class="text img-size" data-fontSize="24">
                                {{member.isAddress==0?"去填写":member.region}}
                            </div>
                            <div class="arrow-parent">
                                <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                            </div>
                        </aside>
                    </li>
                </ul>
            </section>
        </article>
    </div>
</template>
<script>
    import arrow from "../../components/arrow";
    import {mapState,mapGetters} from "vuex";
    export default {
        computed:{
            ...mapGetters({
                user : "getUserInfo",
                account : "getUserAccount"
            }),
            ...mapState({
                member : state => state.user.memberInfo
            })
        },
        components:{
            arrow
        },
        data(){
            return{
                memberTypeName : "",
                showArrow:true,
            }
        },
        mounted(){
            this.setTitle({
                title : "个人信息",
                show : true,
                back:true,
                gap : true,
            });
            this.setNav({
                show : false
            });
            this.getInfo();
            if(this.account.isRas==1){
                this.showArrow=false;
            }
        },
        methods:{
            getInfo(){
                this.$store.commit("updateMemberInfo",{
                    update : false,
                    self : this
                });
            },
            getBankAbout(){
                if(this.showArrow){
                    this.go().openAccount.home();
                }else{
                    this.go().myAccount.userInfo.bank();
                }
            },
            openAccount(){
                if(this.showArrow){
                    this.go().openAccount.home();
                }else{
                    return false;
                }

            },
            goVIP(){
                if(this.showArrow){
                    this.go().openAccount.home();
                }else{
                    this.go().myAccount.userInfo.vip();
                }
            },
            goPoints(){
               this.go().shopping.home();
               console.log(123);
            },
          /*  goLink( name ){
                if( this.openBank() && this[name]() ){
                };
            }*/
        }
    }
</script>
