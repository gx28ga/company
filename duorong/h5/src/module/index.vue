/**
* 首页
* created by bo.peng 2018/3/29
* email:spion@qq.com
*/
<style scoped>
.btn{
    padding:5px;
    margin:10px;
}
    .fuliIcon{
        background: url("../images/home/fulimin.png") no-repeat;
        background-size:contain;
        position: fixed;
        top:300px;
        right:10px;
        z-index:3;
    }
</style>
<style>
   .pop .wapbg{
        background: none;
    }
</style>
<template>
    <article v-if="index" class="home">
        <div class="fuliIcon img-size" data-width="154" data-height="160" @click="showTan" v-if="userStatus==-1"></div>
        <banner :data="index.banner" :infomation="index" v-if="userStatus==2"></banner>
        <infomation :data="index" v-show="userStatus!=-1"></infomation>
        <upper :user="user" :userStatus="userStatus" :index="index"  v-if="userStatus!=2"></upper>
        <notice v-if="userStatus==2"></notice>
        <buttonbanner v-if="userStatus==2" :index="index" :user="user"></buttonbanner>
        <product :index="index" :userStatus="userStatus"></product>
        <side :data="index.regAndInvestCount"></side>
        <carouserl :data="index.bannerBottomList" :user="user" v-if="userStatus!=2"></carouserl>
        <bank v-if="userStatus==2"></bank>
        <aboutdr v-if="userStatus==2"></aboutdr>
        <copy data-height="96" data-lineHeight="96"></copy>
    </article>
</template>
<script>
    import {mapGetters} from "vuex";
    import banner from "./home/banner";//老用户banner
    import upper from "./home/upper";//新用户顶部
    import product from "./home/product/index.vue";//产品列表
    import side from "./home/bottomSide";//服务用户数，累计交易额
    import carouserl from "./home/carousel";//底部轮播
    import copy from "./components/copyright";//底部说明
    import bank from "./home/bank";//老用户底部银行存管国资委下属
    import aboutdr from "./home/aboutdr";//关于多融
    import infomation from "./home/information";//顶部消息与回款日历
    import notice from "./home/notice";//首页公告
    import buttonbanner from "./home/buttonBanner";//顶部按钮
    export default {
        components:{
            upper,
            product,
            side,
            carouserl,
            banner,
            bank,
            copy,
            aboutdr,
            infomation,
            notice,
            buttonbanner
        },
        computed:{
            ...mapGetters({
                user : "getUserInfo",
	            account : "getUserAccount",
                index:"getHomeIndex",
            })
        },
        data(){
            return{
                userStatus : -1, //-1:未登录 0:已登录 未开户 1:已登录 已开户 未投资 2: 已登录 已开户 已投资
                isTan:false,
            }
        },
        watch:{
            index(){
                this.getUserStatus();
                let self=this;
                if(this.user&& this.index.cmallResult.hasFinishedTasks){
                    this.showSigin();
                    if(this.index.favourableList.length==0){
                        setTimeout(()=>{
                            self.$store.commit("updateHomeIndex",{update:true});
                            self.$store.dispatch("updateUserAccount",{update:true});
                        },1600)
                    }
                    if(this.user&& this.index.favourableList.length>0){
                        setTimeout(()=>{
                            this.showChaoji();
                        },1600)
                    }
                }
            }
        },
        mounted() {
            this.setTitle({
                title : "多融财富",
                show : T.IphoneX
            });
            //this.$store.commit("getHomeIndex",this);
            this.setImgSize();
            this.$store.commit("updateHomeIndex",{update:true});
        },
        methods:{
            getUserStatus(){
                this.userStatus = !this.user?-1:this.user && (this.user.member.isRas===0 || !this.user.member.isRas)?0:this.user && this.user.member.isRas!==0 && this.index.isCanRookie === 0 ? 1 : 2; //已登录 已开户 未投资和已投资
            },
            showTan(){
                let self=this;
                if(self.isTan) return;
                require.ensure([],(require)=> {
                    this.$requirePop(require('./home/homePop/noLogin'), {
                            props : {} //弹窗内容相关属性
                        },
                        {
                            props: {//弹窗相关属性 同上面的 this.$Pop
                                obj: {
                                    title: false,
                                    close: false,//是否显示关闭按钮
                                    wrapper : "弹窗样式",
                                    superClass : "最外层"
                                }
                            }
                        });
                })
            },
            showSigin(){
                require.ensure([],(require)=>{
                    this.$requirePop(require('./home/homePop/signIn'),{//签到窗口
                        props : {} //弹窗内容相关属性
                    },
                     {
                         props: {//弹窗相关属性 同上面的 this.$Pop
                             obj: {
                                 title: false,
                                 close: false,//是否显示关闭按钮
                                 wrapper : "wapbg",
                                 superClass : "",
                               /*  closeCallback:function(){
                                     let self=this;
                                     self.$store.commit("updateHomeIndex",{update:true});
                                     self.$store.dispatch("updateUserAccount",{update:true});
                                 }*/
                             }
                         }
                     }
                    )
                })
            },
            showChaoji(){
                require.ensure([],(require)=>{
                    this.$requirePop(require('./home/homePop/chaojiPop'),{//超级加息窗口
                            props : {} //弹窗内容相关属性
                        },
                        {
                            props: {//弹窗相关属性 同上面的 this.$Pop
                                obj: {
                                    title: false,
                                    close: false,//是否显示关闭按钮
                                    wrapper : "",
                                    superClass : "",
                                    closeCallback:function(){
                                        let self=this;
                                        self.$store.commit("updateHomeIndex",{update:true});
                                        self.$store.dispatch("updateUserAccount",{update:true});
                                    }
                                }
                            }
                        }
                    )
                })
            }
        }
    };
</script>
