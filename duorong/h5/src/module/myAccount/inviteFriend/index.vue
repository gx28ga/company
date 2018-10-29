/**
* 邀请好友每日佣金界面
* Created by wangCuiQing on 2018/4/13.
*/
<style scoped>
    @import url("../style/inviteFriend.css");
</style>
<style>
    .pop{
        .borderWarp{
            border-radius:0px;
            padding-bottom: 0px;
        }
    }
</style>
<template>
    <article class='inviteFriend' id="inviteContent">
        <div v-if="recommendList" >
            <div class="daily img-size" data-paddingTop="60" data-marginTop="20">
                <div class="strategy img-size" data-width="144" data-height="50" data-top="22" data-right="30"
                     @click="goStrategy"></div>
                <div class="todayIncome img-size" data-fontSize="32">今日预计佣金
                    <span class="question img-size" data-width="40" data-height="40" @click="commissionExplain">?</span>
                </div>
                <div class="incomeNumber img-size" data-fontSize="72">
                    {{(recommendList.estimateAmount)|fixed|localeString}}
                </div>
                <div class="incomeList img-size" data-marginTop="60" data-paddingBottom="60">
                    <div class="commission img-size">
                        <p class="commissionValue img-size" data-fontSize="32">
                            {{(recommendList.yesterdayAmount)|fixed|localeString}}元</p>
                        <p class="img-size" data-fontSize="28">昨日佣金</p>
                    </div>
                    <div class="commission bl br img-size">
                        <p class="commissionValue img-size" data-fontSize="32">
                            {{(recommendList.sumAmount)|fixed|localeString}}元</p>
                        <p class="img-size" data-fontSize="28">累计佣金</p>
                    </div>
                    <div class="commission img-size">
                        <p class="commissionValue img-size" data-fontSize="32">
                            {{(recommendList.firstMonthAmount)|fixed|localeString}}元</p>
                        <p class="img-size" data-fontSize="28" @click="goFirstMonthReturn">首月返现奖励&gt;</p>
                    </div>
                </div>
            </div>
            <div class="daily img-size" data-marginTop="20" data-marginBottom="120">
                <div class="incomeList img-size">
                    <div class="commission img-size bb" :class="isShow?'active bAcitve':''" data-fontSize="32"
                         data-height="80" data-lineHeight="80" @click="toggle(0,$event)">佣金记录<span
                        class="br fr img-size" data-height="50" data-marginTop="15"></span></div>
                    <div class="commission buInvite img-size bb" :class="!isShow?'active bAcitve':''" data-fontSize="32"
                         data-height="80" data-lineHeight="80" @click="toggle(1,$event)">我的好友
                        <p class="invitePrize img-size" data-width="100" data-height="20"
                        data-fontSize="20" data-lineHeight="20" data-paddingTop="3" data-paddingBottom="3" data-top="25" data-right="18">邀请有奖</p></div>
                </div>
                <!--佣金记录模块-->
                <div class="recordList" v-show="isShow">
                    <div class="incomeList img-size" data-paddingTop="60" data-paddingBottom="60">
                        <div class="commission img-size">
                            <p class="img-size" data-fontSize="28">我的待收本金</p>
                            <p class="commissionValue img-size" data-fontSize="32">
                                {{(recommendList.wprincipal)|fixed|localeString}}元</p>
                        </div>
                        <div class="commission img-size">
                            <p class="img-size" data-fontSize="28">我的佣金利率</p>
                            <p class="commissionValue img-size" data-fontSize="32">{{recommendList.rate}}%</p>
                        </div>
                        <div class="commission img-size" data-fontSize="32" data-marginTop="25" @click="goLevel">
                            <span class="question img-size" data-width="40" data-height="40">?</span>如何提升?
                        </div>
                    </div>
                    <div class="recordListTitle img-size" data-height="60" data-lineHeight="60" data-paddingLeft="20"
                         data-paddingRight="20">
                        <div class="img-size fl" data-fontSize="28">日期</div>
                        <div class="img-size fr" data-fontSize="28">获得佣金</div>
                    </div>
                    <div id="listBox">
                        <div class="recordListContent  img-size" data-height="60" data-lineHeight="60"
                             data-marginLeft="20" data-marginRight="20" v-for="item in list" v-bind:key="item.id">
                            <div class="img-size fl" data-fontSize="28">{{new Date(item.addTime).Format('yyyy-MM-dd')}}
                            </div>
                            <div class="img-size fr" data-fontSize="28">{{item.amount}}元</div>
                        </div>
                    </div>
                    <div class="more" v-show="showMore"><i class="img-size" data-width="100" data-height="100"></i>
                    </div>
                    <div class="commission img-size" data-height="60" data-lineHeight="60" data-marginLeft="20"
                         data-marginRight="20" v-if="list.length==0">
                        <div class="img-size commissionValue" data-fontSize="28">暂无数据马上看<span class="active"
                                                                                              @click="goStrategy">攻略</span>赚取佣金吧
                        </div>
                    </div>
                </div>
                <!--我的好友-->
                <div class="myFriend img-size" v-show="!isShow">
                    <div class="incomeList img-size" data-paddingTop="60" data-paddingBottom="50">
                        <div class="commission img-size">
                            <p class="img-size" data-fontSize="28">我的好友数量 <span class="question img-size"
                                                                                data-width="40" data-height="40"
                                                                                @click="friendTotalPop">?</span></p>
                            <p class="commissionValue img-size" data-fontSize="32">
                                {{(myFriendList.sumCount)|fixed|localeString}}人</p>
                        </div>
                        <div class="commission img-size">
                            <p class="img-size" data-fontSize="28">我的好友待收本金</p>
                            <p class="commissionValue img-size" data-fontSize="32">
                                {{(myFriendList.friendAmount)|fixed|localeString}}元<span class="img-size accrual"
                                                                                         data-fontSize="24">（可计提佣金）</span>
                            </p>
                        </div>
                    </div>
                    <div class="taskBox img-size" data-width="640" data-height="76" data-paddingBottom="10"
                         data-marginBottom="50" data-paddingTop="10" data-paddingLeft="15" data-paddingRight="15">
                        <p class="invitePrize img-size" data-width="100" data-lineHeight="20" data-height="20"  data-paddingTop="3" data-paddingBottom="3" data-fontSize="20" data-marginBottom="35" data-left="18" data-top="35">邀请有奖</p>
                        <span class="img-size taskCon" data-fontSize="28" data-width="364" data-marginLeft="124"
                              data-marginRight="14">完成每月邀请任务，每月最高赢取240元现金奖励。</span>
                        <span class="doDone img-size" data-fontSize="30" data-width="130" data-height="50"
                              data-lineHeight="50" data-top="22" data-right="4" @click="goTask">去完成</span>
                    </div>
                    <div class="recordListTitle incomeList img-size" data-height="50" data-lineHeight="50">
                        <div class="commission img-size" data-fontSize="28">好友ID</div>
                        <div class="commission img-size" data-fontSize="28">手机号</div>
                        <div class="commission img-size" data-fontSize="28">时间</div>
                    </div>
                    <div class="incomeList img-size" data-height="50" data-lineHeight="50"
                         v-for="item in myFriend" v-bind:key="item.id">
                        <div class="commission img-size" data-fontSize="28">{{item.realName}}</div>
                        <div class="commission img-size" data-fontSize="28">{{item.mobilephone}}</div>
                        <div class="commission img-size" data-fontSize="28">{{new Date(item.investTime).Format('yyyy-MM-dd')}}
                        </div>
                    </div>
                    <div class="incomeList img-size" data-height="50" data-lineHeight="50"
                         v-if="myFriendList.page.rows.length==0">
                        <div class="commission img-size" data-fontSize="28">暂无记录</div>
                    </div>
                </div>
            </div>
            <div class="inviteBtnBack img-size" data-height="100" data-lineHeight="100" data-fontSize="48"
                 data-width="750" @click="inviteFriend">邀请好友
            </div>
        </div>
        <loading v-else></loading>
    </article>
</template>
<script>
    import loading from "../../components/loading";
    import scrolling from "../../components/boxScroll";
    import {mapGetters} from "vuex";
    import filter from "../../../mixin/filters";
    import {COMMISSIONRECORD,MYFRIEND} from "../../../contant/urls/INVITEFRIEND";

    filter.filters = {
        fixed: filter.methods._toFixed,
        localeString(val) {
            return filter.methods._localeString(val, true);
        }
    };
    export default {
        mixins: [filter],
        components: {
            loading,
            scrolling
        },
        computed: {
            ...mapGetters({
                //recommendList: "getRecommend",//每日佣金
                //myFriendList: "getMyRecommendInfo",//我的好友
                user: "getUserInfo",
            })
        },
        watch: {
            recommendList() {
                this.updateElementSize();
            },
            myFriendList() {
                this.updateElementSize();
            }
        },
        data() {
            return {
                isShow: true,
                list: [],
                showMore: true,
                recommendList:"",
                myFriendList:"",
                myFriend:[],
            }
        },
        mounted() {
            this.setTitle({
                show: true,
                title: "每日佣金",
                back: true,
            });
            this.setNav({
                show : false
            });
            this.setJumpTop({isShow: false});
             //this.$store.commit("getMyRecommendInfo", this);
            //this.$store.commit("getRecommend", this);
            // this.load();
            this.updateElementSize();
            //每日佣金
            let self = this,
                page = 1,
                pageSize = 10,
                loading = true,
                loading1=true,
                myFriendPage=1;

            function getList() {
                 if (loading1 == false) return;
                loading1 = false;
                self.showMore = true;
                self.ajax({
                    url: COMMISSIONRECORD,//每日佣金
                    data: {
                        uid:self.user.member.uid,
                        //uid: 282000,
                        pageOn: page,
                        pageSize: pageSize,
                    },
                    type: 'get',
                    dataType: "jsonp",
                }).then(data => {
                    self.recommendList=data.map;
                    let list = data.map.page.rows;
                    let totalPage = data.map.page.totalPage;

                    loading1 = true;
                    self.showMore = false;
                    if (!list || !list.length) {
                        loading = false;
                        return;
                    }
                    self.list = self.list.concat(list);
                    self.$nextTick(() => {
                        self.setImgSize();
                        let box = $("#inviteContent");
                        if (!box.length) return;
                        if (self.isShow) {
                            box.on('scroll', function () {
                                let scrollHeight = box[0].scrollHeight,
                                    height = window.innerHeight;
                                if (!loading1) return;
                                let scrollTop = $(this).scrollTop() + height;
                                if (scrollTop > scrollHeight) {
                                    if (loading1) {
                                        loading1 = true;
                                        page++;
                                        if (page > totalPage) return false;
                                        getList();
                                    }
                                }
                            })
                        }
                    })
                })
            }

            function getMyFriendList() {
                if (loading == false) return;
                loading = false;
                self.showMore = true;
                self.ajax({
                    url: MYFRIEND,//我的好友
                    data: {
                        uid:self.user.member.uid,
                        //uid: 282000,
                        pageOn: myFriendPage,
                        pageSize: pageSize,
                    },
                    type: 'get',
                    dataType: "jsonp",
                }).then(data => {
                    self.myFriendList=data.map;
                    self.$store.commit("setCatch",{recommCodes:data.map.recommCodes});
                    let myFriend = data.map.page.rows;
                    let totalPage = data.map.page.totalPage;
                    loading = true;
                    self.showMore = false;
                    if (!myFriend || !myFriend.length) {
                        loading = false;
                        return;
                    }
                    self.myFriend = self.myFriend.concat(myFriend);
                    self.$nextTick(() => {
                        self.setImgSize();
                        let box = $("#inviteContent");
                        if (!box.length) return;
                        if (!self.isShow) {
                            box.on('scroll', function () {
                                let scrollHeight = box[0].scrollHeight,
                                    height = window.innerHeight;
                                if (!loading) return;
                                let scrollTop = $(this).scrollTop() + height;
                                if (scrollTop > scrollHeight) {
                                    if (loading) {
                                        loading = true;
                                        myFriendPage++;
                                        if (myFriendPage > totalPage) return false;
                                        getMyFriendList();
                                    }
                                }
                            })
                        }
                    })
                })
            }

            getList();
            getMyFriendList();
        },
        methods: {
            updateElementSize() {
                this.$nextTick(() => {
                    this.setImgSize();
                });
            },
            inviteFriend() {//邀请好友
                let self = this;
                T.callApp.share({
                    title: '送你1588元红包和12%安全好收益，多融财富亲测靠谱！', // 分享标题
                    desc: '您的好友邀您领取1588元现金红包奖励，和Ta一起赚更多的钱!', // 分享描述
                    link: 'http://pc-test.duorongcf.com/activity/app/enroll?recommCode=' + self.myFriendList.recommCodes, // 分享链接
                    imgUrl: "http://101.132.157.181:8001/images/common/logo.jpg", // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                });
                this.$store.commit("getMyRecommendInfo", this);
                this.load();
            },
            toggle(i, $event) {//每日佣金与我的好友切换
                if (i == 0) {
                    this.isShow = true;
                } else {
                    this.isShow = false;
                }
            },
            commissionExplain() {//今日预计佣金弹框
                let self = this;
                require.ensure([], (require) => {
                    self.$requirePop(require('../../pop/myAccount/inviteFriend/cossimionPop'), {
                            props: {} //弹窗内容相关属性
                        },
                        {
                            props: {//弹窗相关属性 同上面的 this.$Pop
                                obj: {
                                    title: "",
                                    close: true,//是否显示关闭按钮
                                    wrapper: "borderWarp",
                                }
                            }
                        });
                });
            },
            friendTotalPop() {//我的好友数量弹框
                let self = this;
                require.ensure([], (require) => {
                    self.$requirePop(require('../../pop/myAccount/inviteFriend/firendTotalPop'), {
                            props: {} //弹窗内容相关属性
                        },
                        {
                            props: {//弹窗相关属性 同上面的 this.$Pop
                                obj: {
                                    title: "",
                                    close: true,//是否显示关闭按钮
                                    wrapper: "borderWarp",
                                }
                            }
                        });
                });
            },
            goTask() {//跳转到任务
                this.go().myAccount.inviteFriend.task();
            },
            goStrategy() {//跳转到攻略
                this.go().myAccount.inviteFriend.strategy();
            },
            goLevel() {//跳转到等级
                this.go().myAccount.inviteFriend.level();
            },
            goFirstMonthReturn() {//邀请好友首月投资返现
                this.go().myAccount.inviteFriend.firstMonthReturn();
            },
            // load(callback){
            //     this.$store.commit("getRecommend",{
            //            self:this,
            //            update:true,
            //            load:true,
            //            callback:()=>{
            //                callback();
            //               /* self.$nextTick(()=>{
            //                    self.setImgSize();
            //                });*/
            //            }
            //     })
            // },
        }
    }
</script>
