/**
* 邀请好友首月返现界面
* Created by kaifa on 2018/4/13.
*/
<style scoped>
    @import url("../style/inviteFriend.css");
</style>
<style>
    .pop{
        .borderWarp{
            border-radius:0px;
        }
    }
</style>
<template>
    <article class='inviteFriend' id="inviteFriendList">
        <div v-if="loading">
            <div class='historyBox img-size' data-height='324' data-width='750' data-paddingTop='36'>
                <div class='historyTitle img-size' data-fontSize='28'>好友邀请首月返现</div>
                <div class='totalOwner img-size' data-fontSize='34' data-marginTop='60'>
                    累计获得
                    <span class='question img-size' data-width='40' data-height='40' data-lineHeight='40' data-fontSize='40' @click="getExplain">?</span>
                </div>
                <div class='historyIncome img-size' data-fontSize='90' data-marginTop='40'>
                    {{(info.firstMonthAmount)|fixed |localeString}}<span class='img-size' data-fontSize='34'>元</span></div>
                <div class='historyImg img-size' data-height='159' data-width='750' data-bottom='0'></div>
            </div>
            <div class='historyRecordTitle img-size' data-lineHeight='65' data-height='65'>
                <div class='incomeTitle img-size'>好友ID</div>
                <div class='incomeTitle img-size'>投资时间</div>
                <div class='incomeTitle img-size'>可获奖励</div>
            </div>
            <div class='historyRecordList img-size' data-height='75' data-lineHeight='75'  v-for="item in inviteFriendList" v-bind:key="item.id" >
                <div class='record img-size'>{{item.mobilePhone}}</div>
                <div class='record img-size'>{{new Date(item.investTime).Format('yyyy-MM-dd')}}</div>
                <div class='record img-size'>{{(item.referrerReward)|fixed|localeString}}元</div>
            </div>
            <div class='noRecord img-size' data-height='75' data-lineHeight='75' v-if="isShow">暂无记录</div>
            <div class='inviteBtnBack img-size' data-fontSize='28' data-height='100' data-lineHeight='100' data-width='750' @click='goCommissionRecord'>返回佣金记录</div>
        </div>
        <loading v-else></loading>
    </article>
</template>
<script>
    import {mapGetters} from "vuex";
    import filter from "../../../mixin/filters";
    import loading from "../../components/loading";
    import {HISTORYFRIEND} from "../../../contant/urls/INVITEFRIEND";
    filter.filters = {
        fixed : filter.methods._toFixed,
        localeString(val){
            return filter.methods._localeString(val,true);
        }
    };
    export default {
        mixins : [filter],
        data(){
           return{
               isShow:false,
               info:"",
               loading:false,
               inviteFriendList:[],
           }
        },
        computed:{
            ...mapGetters({
                userInfo:"getUserInfo",
            })
        },
        components:{
            loading
        },
        mounted(){
            this.setTitle({
                show : true,
                title : "邀请投资返现",
                back : true,
            });
            this.setNav({
                show : false
            });
              let self=this,
               pageOn=1,
               pageSize=10;
            let uid = this.userInfo?this.userInfo.member.uid:"";
           function getHistoryFriend(){
               self.ajax({
                   url:HISTORYFRIEND,
                   data:{
                       uid:uid,
                       pageOn:pageOn,
                       pageSize:pageSize
                   },
                   dataType:'jsonp',
                   type:'get'
               }).then(data=>{
                   self.info=data.map;
                   let inviteFriendList=data.map.page.rows;
                   if(!inviteFriendList || !inviteFriendList.length){
                       self.isShow=true;
                   }
                   self.inviteFriendList=data.map.page.rows;
                   self.loading=true;
                   self.$nextTick(function(){
                       self.setImgSize();
                       let box=$('#inviteFriendList');
                       if(!box.length) return;
                       box.unbind().on("scroll",function(){
                           let scrollHeight=box[0].scrollHeight,
                               height=window.innerHeight;
                           if(!self.loading) return;
                           let scrollTop=$(this).scrollTop()+height+50;
                           if(scrollTop>scrollHeight){
                               if(self.loading){
                                   self.loading=true;
                                   page++;
                                   getHistoryFriend();
                               }
                           }
                       })

                   })
               })
           }
            getHistoryFriend();

        },
        methods:{
            goCommissionRecord(){
                this.go().myAccount.inviteFriend.dailyCommission();
            },
            getExplain(){
                let self=this;
                require.ensure([],(require)=> {
                    self.$requirePop(require('../../pop/myAccount/inviteFriend/historyExplainPop'), {
                            props : {} //弹窗内容相关属性
                        },
                        {
                            props: {//弹窗相关属性 同上面的 this.$Pop
                                obj: {
                                    title: "",
                                    close:true ,//是否显示关闭按钮
                                    wrapper : "borderWarp",
                                }
                            }
                        });
                });
            }
        }
    }
</script>
