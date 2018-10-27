/**
* describe 加息券
* Created by wangCuiqing
* Date: 2018/5/2
*/
<style scoped>
@import url("../style/shopping.css");
</style>
<template>
    <article class="raiseBox img-size">
        <div class="title img-size" data-height="160" data-marginBottom="20">
            <div class="titleImg img-size" data-width="187" data-marginTop="38" @click="custormAnchor('jiaXi')">
                <img src="../../../images/shopping/ico_jxq.png" alt="" class="img-size" data-width="52" data-height="52">
                <p class="img-size" data-fontSize="26">加息券</p>
            </div>
            <div class="titleImg img-size" data-width="187" data-marginTop="38" @click="custormAnchor('hongBao')">
                <img src="../../../images/shopping/ico_hb.png" alt="" class="img-size" data-width="52" data-height="52">
                <p class="img-size" data-fontSize="26">红包</p>
            </div>
            <div class="titleImg img-size" data-width="187" data-marginTop="38" @click="custormAnchor('xianShi')">
                <img src="../../../images/shopping/ico_xldh.png" alt="" class="img-size" data-width="52" data-height="52">
                <p class="img-size" data-fontSize="26">限量兑换</p>
            </div>
            <div class="titleImg img-size" data-width="187" data-marginTop="38" @click="goDaFuweng">
                <img src="../../../images/shopping/ico_dafuweng.png" alt="" class="img-size" data-width="52" data-height="52">
                <p class="img-size" data-fontSize="26">大富翁</p>
            </div>
        </div>
        <!--加息券-->
        <div class="raiseTitle img-size" id="jiaXi" data-height="80" data-lineHeight="80" data-fontSize="28" data-paddingLeft="30" v-if="data.interestProducts.length>0">
            <span class="jiaxi img-size" data-width="36" data-height="36" data-marginTop="22" data-marginRight="20"></span>
            <p class="img-size">加息券</p>
        </div>
        <div class="raiseCon img-size" data-marginBottom="20"  v-if="data.interestProducts.length>0">
           <div class="raise img-size" data-width="344" data-height="280" data-paddingLeft="30"  data-paddingTop="40" v-for="jiaxi in data.interestProducts" @click="camallDetail(jiaxi)" :key="jiaxi.id">
               <div class="jiaxiIcon img-size" data-width="300" data-height="160" >
                   <!--<div class="meiyou img-size" data-width="100" data-height="100"></div>
                   <div class="rate img-size" data-fontSize="36" data-marginLeft="90"><span class="img-size" data-fontSize="96">5</span>%</div>-->
                   <img  :src="jiaxi.androidListPathS" class="img-size" data-width="300" data-height="160">
               </div>
               <div class="money img-size" data-fontSize="28" data-marginTop="30">
                   <em class="fen img-size" data-marginRight="20">{{jiaxi.realPoints}}</em>积分 <span class="del img-size" data-fontSize="24" data-marginLeft="20">{{jiaxi.originalPoints}}</span>
               </div>
           </div>
            <div class="clearfix"></div>
        </div>
        <!--红包-->
        <div class="raiseTitle img-size" id="hongBao" data-height="80" data-lineHeight="80" data-fontSize="28" data-paddingLeft="30" v-if="data.cashProducts.length>0">
            <span class="hongbao img-size" data-width="36" data-height="36" data-marginTop="22" data-marginRight="20"></span>
            <p class="img-size">红包</p>
        </div>
        <div class="raiseCon img-size" data-marginBottom="20">
            <div class="raise img-size" data-width="344" data-height="280" data-paddingLeft="30" data-paddingTop="40"  v-for="cash in data.cashProducts" v-bind:key="cash.id" @click="camallDetail(cash)">
                <div class="jiaxiIcon img-size" data-width="300" data-height="160">
                    <!--<div class="meiyou img-size" data-width="100" data-height="100"></div>
                    <div class="rate img-size" data-fontSize="36" data-marginLeft="90"><span class="img-size" data-fontSize="96">5</span>%</div>-->
                    <img :src="cash.androidListPathS" alt="" class="img-size" data-width="300" data-height="160">
                </div>
                <div class="money img-size" data-fontSize="28" data-marginTop="30">
                    <em class="fen img-size" data-marginRight="20">{{cash.realPoints}}</em>积分 <span class="del img-size" data-fontSize="24" data-marginLeft="20">{{cash.originalPoints}}</span>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
       <!-- 限量兑换-->
        <div class="raiseTitle img-size"  id="xianShi" data-height="80" data-lineHeight="80" data-fontSize="28" data-paddingLeft="30" v-if="data.realProducts.length>0">
            <span class="xianshi img-size" data-width="36" data-height="36" data-marginTop="22" data-marginRight="20"></span>
            <p class="img-size">限量兑换</p>
        </div>
        <div class="raiseCon img-size" >
            <div class="raise img-size" data-width="344" data-height="280" data-paddingLeft="30" data-paddingTop="40" v-for="item in data.realProducts" v-bind:key="item.id" @click="camallDetail(item)">
                <div class="jiaxiIcon img-size" data-width="300" data-height="160">
                    <!--<div class="meiyou img-size" data-width="100" data-height="100"></div>
                    <div class="rate img-size" data-fontSize="36" data-marginLeft="90"><span class="img-size" data-fontSize="96">5</span>%</div>-->
                    <img :src="item.androidListPathS" alt="" class="img-size" data-width="300" data-height="160">
                </div>
                <div class="money img-size" data-fontSize="28" data-marginTop="30">
                    <em class="fen img-size" data-marginRight="20">{{item.realPoints}}</em>积分 <span class="del img-size" data-fontSize="24" data-marginLeft="20">{{item.originalPoints}}</span>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
    </article>
</template>

<script>
    import {PCTEST} from "../../../contant/urls/URLS";
    import {mapGetters} from "vuex";
    export default {
        props:["data"],
        computed:{
            ...mapGetters({
                userInfo:"getUserInfo",
            })
        },
      mounted(){
          this.setImgSize();
      },
      methods:{
        goDaFuweng(){
            let uid = this.userInfo?"?uid="+this.userInfo.member.uid:"";
          this.go().outside({
              url:PCTEST+"/activity/app/guhuaDafuweng"+uid,
              title:'大富翁',
          })
        },
        camallDetail(item){//积分详情
          this.go().shopping.detail({
              query:{
                  pid:item.productId
              }
          });
        },
          custormAnchor(anchorName){
            let anchorElement=document.getElementById(anchorName);
            if(anchorElement){
                anchorElement.scrollIntoView({
                    behavior:"smooth",
                    alignToTop:true,
                    block:"start"
                });
            }
          }
      }
    }
</script>
