/**
* describe
* Created by wangCuiqing
* Date: 2018/4/14
*/
<style scoped>
    @import url("../style/inviteFriend.css");
</style>
<template>
    <article class="inviteFriend">
        <div v-if="taskList">
            <div class="daily img-size" data-marginTop="20">
                <div class="img-size bb" data-height="80" data-paddingLeft="20" data-paddingRight="20" data-lineHeight="80">
                    <div class="img-size fl color6" data-fontSize="28">每月任务</div>
                    <div class="img-size fr commissionValue" data-fontSize="28" @click="goTaskRecord">邀请奖励记录&gt;</div>
                </div>
                <div class="incomeList img-size" data-height="80" data-paddingTop="50" data-paddingBottom="50">
                    <div class="commission img-size">
                        <p class="img-size" data-fontSize="28">本月邀请人数</p>
                        <p class="img-size commissionValue" data-fontSize="36">{{taskList.effectiveCount}}人</p>
                    </div>
                    <div class="commission img-size">
                        <p class="img-size" data-fontSize="28">已获得奖励</p>
                        <p class="img-size commissionValue" data-fontSize="36">{{(taskList.taskReward)|fixed|localeString}} 元</p>
                    </div>
                </div>
                <div class="taskExplain img-size" data-paddingLeft="20" data-paddingRight="20" data-paddingBottom="20">
                    <div class="color6 img-size" data-fontSize="28">任务说明</div>
                    <dl class="incomeList img-size">
                        <dt class="img-size" data-width="15" data-fontSize="28">*</dt>
                        <dd class="img-size" data-fontSize="28">任务时间：
                            <span class="active">{{new Date(taskList.drRecommendTask.startTime).Format('yyyy-MM-dd')}}~{{new Date(taskList.drRecommendTask.endTime).Format('yyyy-MM-dd')}}</span>
                        </dd>
                    </dl>
                    <dl class="incomeList img-size">
                        <dt class="img-size" data-width="15" data-fontSize="28">*</dt>
                        <dd class="img-size" data-fontSize="28">邀请任务期间，邀请新用户注册且首投≥<span class="active">{{taskList.drRecommendTask.enableAmount}}</span>元（新手 体验标除外）人数达到一定数量，即可获取一定奖励。如下：</dd>
                    </dl>
                    <table class="img-size" data-width="662" data-marginTop="10" data-marginBottom="20">
                        <tr class="img-size incomeList" data-height="80">
                            <th class="commission img-size" data-paddingTop="10">本月邀请首投≥5000元人数</th>
                            <th class="commission img-size" data-lineHeight="80">邀请奖励</th>
                            <th class="commission img-size" data-lineHeight="80">状态</th>
                        </tr>
                        <tr class="img-size incomeList" data-height="60" data-lineHeight="60" v-for="(item,index) in taskList.drRecommendTask.drRecommendTaskDetails" v-bind:key="item.id">
                            <td class="commission"><span class="active">{{item.personNum}}</span>人 <span v-show="index==taskList.drRecommendTask.drRecommendTaskDetails.length-1">以上</span></td>
                            <td class="commission" v-if="index==0">可得现金<span class="active">{{item.reward}}</span>元</td>
                            <td class="commission" v-else>再得现金<span class="active">{{item.reward}}</span>元</td>
                            <td class="commission" v-if="item.status==0">未完成</td>
                            <td class="commission" v-if="item.status==1">已完成</td>
                        </tr>
                    </table>
                    <div class="taskExample img-size" data-width="662" data-height="64" data-lineHeight="64" data-fontSize="28">
                        邀请的<span class='img-size' data-fontSize="36">好友越多，奖励</span>越多每月上限<span class='img-size' data-fontSize="36">240元</span>
                    </div>
                </div>
                <div class="inviteBtn img-size" data-width="470" data-height="60" data-lineHeight="60" data-fontSize="32" data-marginTop="40" data-marginBottom="15" @click="share">邀请好友</div>
                <div class="explainTask img-size" data-paddingLeft="20" data-paddingRight="20" data-paddingBottom="20">
                    <div class="explain img-size color6" data-fontSize="28">温馨提示</div>
                    <div class="explainContent img-size" data-fontSize="28">邀请任务要求的完成条件与邀请佣金、首月返现并不相关。例如：被邀请人首投＜5000元，同样可以建立邀请关系，不影响邀请佣金及首月返现的计算，但无法获得邀请任务的奖励（因为不满足完成邀请任务的条件）</div>
                </div>
            </div>
        </div>
        <loading v-else></loading>
    </article>
</template>

<script>
    import {mapGetters} from "vuex";
    import loading from "../../components/loading";
    import filter from "../../../mixin/filters";
    import {MONTHLYTASK} from "../../../contant/urls/INVITEFRIEND";
    filter.filters = {
        fixed : filter.methods._toFixed,
        localeString(val){
            return filter.methods._localeString(val,true);
        }
    };
    export default {
        mixins : [filter],
        computed:{
            ...mapGetters({
                userInfo:"getUserInfo",
                myFriend:"getMyRecommendInfo",
                catch:"getCatch"
            })
        },
        data(){
            return{
                taskList:""
            }
        },
        components:{
            loading
        },
        mounted(){
            this.setTitle({
                show : true,
                title : "邀请任务",
                back : true,
            });
            this.setNav({
                show : false
            });
            let self=this;
            let uid = this.userInfo?this.userInfo.member.uid:"";
            self.ajax({
                url:MONTHLYTASK,
                data:{
                    uid:uid,
                    pageOn:1,
                    pageSize:10
                },
                dataType:"jsonp",
                type:"get"
            }).then(data=>{
                self.taskList=data.map;
                self.$nextTick(()=>{
                    self.setImgSize();
                })
            })
        },
        methods:{
            share(){
                let self=this;
                T.callApp.share({
                    title: '送你1588元红包和12%安全好收益，多融财富亲测靠谱！', // 分享标题
                    desc: '您的好友邀您领取1588元现金红包奖励，和Ta一起赚更多的钱!', // 分享描述
                    link: 'http://pc-test.duorongcf.com/activity/app/enroll?recommCode='+self.catch.recommCodes, // 分享链接
                    imgUrl: "http://101.132.157.181:8001/images/common/logo.jpg", // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                })
                //this.$store.commit("getMyRecommendInfo",this);
                //this.$store.commit("getRecommend",this);
            },
            goTaskRecord(){
                this.go().myAccount.inviteFriend.taskRecord();
            }
        }
    }
</script>
