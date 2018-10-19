/**
* describe
* Created by wangCuiqing
* Date: 2018/4/21
*/
<style scoped>
    @import url("../style/inviteFriend.css");
</style>
<template>
    <article class="inviteFriend">
        <div class="daily img-size" data-height="130" data-lineHeight="130" data-paddingLeft="30" data-paddingRight="35" data-fontSize="36" data-marginTop="20" data-marginBottom="20">
            累计邀请奖励 <span class="img-size taskRecordNumber" data-fontSize="48"><em class="active">{{(taskReward)|fixed|localeString}}</em>元</span>
        </div>
        <div class="daily img-size">
            <div class="taskIcon img-size" data-height="110" data-paddingTop="42" v-for="item in list" v-bind:key="item.id">
                <div class="mingxi img-size" data-width="22" data-height="106" data-marginLeft="34" data-paddingTop="4" data-marginRight="15"></div>
                <div class="taskReword img-size" data-fontSize="36" data-marginRight="85" data-paddingTop="1">+{{item.amount}}元</div>
                <div class="taskC img-size">
                    <p class="img-size" data-fontSize="28" data-marginBottom="20">完成【邀请首投≥5000元{{item.count}}人】任务</p>
                    <p class="img-size taskTime" data-fontSize="24">{{new Date(item.addTime).Format("yyyy-MM-dd hh:mm:ss")}}</p>
                </div>
            </div>
        </div>
        <div class="img-size" data-fontSize="28" data-marginTop="60" style="text-align: center" v-if="list.length==0">已经到底啦~</div>
        <div class="more" v-show="showMore"><i class="img-size" data-width="100" data-height="100"></i></div>
    </article>
</template>
<script>
    import {mapGetters} from "vuex";
    //import loading from "../../components/loading";
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
                user:"getUserInfo",
            })
        },
        data(){
            return {
                showMore:true,
                list:[],
                showBottom:false,
                taskReward:""
            }
        },
        mounted(){
            this.setTitle({
                show : true,
                title : "邀请奖励记录",
                back : true,
            });
            this.setNav({
                show : false
            });
            let self = this,
                page = 1,
                pageSize = 10,
                loading = true;
            function getTask(){
                if (loading == false) return;
                loading = false;
                self.showMore = true;
                self.ajax({
                    url: MONTHLYTASK,//每日佣金
                    data: {
                        uid:self.user.member.uid,
                        //uid: 414025,
                        pageOn: page,
                        pageSize: pageSize,
                    },
                    type: 'get',
                    dataType: "jsonp",
                }).then(data => {
                    let list = data.map.pageInfo.rows;
                    let totalPage = data.map.pageInfo.totalPage;
                    loading = true;
                    self.showMore = false;
                    if (!list || !list.length) {
                        loading = false;
                        return;
                    }
                    self.list = self.list.concat(list);
                    self.$nextTick(() => {
                        this.taskReward=data.map.taskReward;
                        self.setImgSize();
                        let box = $("#Content");
                        if (!box.length) return;
                        if (self.isShow) {
                            box.on('scroll', function () {
                                let scrollHeight = box[0].scrollHeight,
                                    height = window.innerHeight;
                                if (!loading) return;
                                let scrollTop = $(this).scrollTop() + height;
                                if (scrollTop > scrollHeight) {
                                    if (loading) {
                                        loading = true;
                                        page++;
                                        if (page > totalPage){
                                            this.showBottom=true;
                                            return false;
                                        }else{
                                            getTask();
                                        }
                                    }
                                }
                            })
                        }
                    })
                })
            }
            getTask();
        }
    }
</script>
