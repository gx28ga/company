/**
* describe
* Created by wangCuiqing
* Date: 2018/4/14
*/
<style scoped>
    @import url("../style/inviteFriend.css");
</style>
<template>
    <article class="inviteFriend img-size" data-paddingBottom="88">
        <div v-if="levelList">
            <div class="daily img-size" data-marginTop="20" data-marginBottom="20" data-paddingTop="62" data-paddingBottom="60">
                <div class="nowLevel img-size" data-fontSize="32">当前待收等级</div>
                <div>
                  <img  v-bind:src="levelImg(levelList.MyGrade)" class="img-size levelIcon" data-width="90" data-height="80"
                         data-marginTop="10" data-marginBottom="46">
                </div>
                <div class="incomeList img-size">
                    <div class="commission img-size br">
                        <p class="commissionValue img-size" data-fontSize="32">
                            {{(levelList.wprincipal)|fixed|localeString}}元</p>
                        <p class=" img-size" data-fontSize="28">我的待收</p>
                    </div>
                    <div class="commission img-size br">
                        <p class="commissionValue img-size" data-fontSize="32">{{levelList.rate}}%</p>
                        <p class=" img-size" data-fontSize="28">今日待收佣金利率</p>
                    </div>
                </div>
            </div>
            <div class="daily img-size" data-paddingLeft="20" data-paddingRight="20" data-paddingBottom="40">
                <div class="incomeList img-size bb" data-height="68" data-lineHeight="68">
                    <div class="commission">待收等级</div>
                    <div class="commission3">我的待收(元)</div>
                    <div class="commission">佣金利率</div>
                </div>
                <div class="incomeList img-size bb" data-height="93" data-lineHeight="93"
                     v-for="(item,index) in levelList.drRecommendConfig.drRecommendConfigDetails"
                     v-bind:key="item.id">
                    <div class="commission commissionValue">
                        <img  v-bind:src="levelImg(item.grade)" alt="" class="img-size" data-width="59" data-height="52" data-marginTop="21">
                    </div>
                    <div class="commission3 commissionValue" v-if="index==0">待收＜{{item.maxAmount}}</div>
                    <div class="commission3 commissionValue"
                         v-if="index==levelList.drRecommendConfig.drRecommendConfigDetails.length-1">
                        待收≥{{item.minAmount}}
                    </div>
                    <div class="commission3 commissionValue"
                         v-if="index!=0&&index!=levelList.drRecommendConfig.drRecommendConfigDetails.length-1">
                        {{item.minAmount}}≤待收＜{{item.maxAmount}}
                    </div>
                    <div class="commission commissionValue">{{item.rate}}%</div>
                </div>
                <div class="prove img-size" data-fontSize="28" data-marginTop="40" data-marginBottom="40">
                    升级到更高等级，获取更多收益
                </div>
                <div class="inviteBtn img-size" data-width="470" data-height="60" data-lineHeight="60"
                     @click="goProductList">前往提升
                </div>
            </div>

            <div class="img-size" data-fontSize="28" data-paddingLeft="20" data-paddingTop="40">温馨提示：体验标不计入有效待收哦</div>
        </div>
        <loading v-else></loading>
    </article>
</template>

<script>
    import {mapGetters} from "vuex";
    import loading from "../../components/loading";
    import filter from "../../../mixin/filters";
    import {WAITINGLEVEL} from "../../../contant/urls/INVITEFRIEND";
    filter.filters = {
        fixed: filter.methods._toFixed,
        localeString(val) {
            return filter.methods._localeString(val, true);
        }
    };
    export default {
        mixins: [filter],
        computed: {
            ...mapGetters({
                user: "getUserInfo",
                myFriend: "getMyRecommendInfo",
            })
        },
        data(){
            return{
                icon:4,
                inconSrc:null,
                levelMyGrade:1,
                imgSrc:null,
                levelList:""
            /*    level1List:[
                    {levelImg:require("../../../images/account/inviteFriend/icon1.png")},
                    {levelImg:require("../../../images/account/inviteFriend/icon2.png")},
                    {levelImg:require("../../../images/account/inviteFriend/icon3.png")},
                    {levelImg:require("../../../images/account/inviteFriend/icon4.png")},
                    {levelImg:require("../../../images/account/inviteFriend/icon5.png")},
                    {levelImg:require("../../../images/account/inviteFriend/icon6.png")},
                ]*/

      }
        },
        mounted() {
            this.setTitle({
                show: true,
                title: "我的待收等级",
                back: true,
            });
            this.setNav({
                show : false
            });
            let self=this;
            self.ajax({
                url:WAITINGLEVEL,
                data:{
                    uid:self.user.member.uid,
                },
                type:"get",
                dataType:"jsonp",
                ContentType:"application/x-www-form-urlencoded",
            }).then(data=>{
                self.levelList=data.map
                self.$nextTick(()=>{
                    self.setImgSize();
                })
            })
            /*this.$store.commit("getLevel", this);
            let self = this;
            self.$nextTick(() => {
                self.setImgSize();
            });*/
           /* let self=this;
            if(this.levelList){
                let myGrade=this.levelList.MyGrade;
            }*/
        },
        components: {
            loading,
        },

        methods: {
            goProductList() {//跳转到产品列表页面
                this.go().product.home();
            },
            levelImg(type){
                if(type==1){
                  return require("../../../images/account/inviteFriend/icon1.png");
                }else if(type==2){
                    return require("../../../images/account/inviteFriend/icon2.png");
                }else if(type==3){
                    return require("../../../images/account/inviteFriend/icon3.png");
                }else if(type==4){
                    return require("../../../images/account/inviteFriend/icon4.png");
                }else if(type==5){
                    return require("../../../images/account/inviteFriend/icon5.png");
                }else if(type==6){
                    return require("../../../images/account/inviteFriend/icon6.png");
                }else if(type==7){
                    return require("../../../images/account/inviteFriend/icon7.png");
                }else if(type==8){
                    return require("../../../images/account/inviteFriend/icon8.png");
                }
            }
        }
    }
</script>
