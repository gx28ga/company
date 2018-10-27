/**
* 商城
* created by bo.peng 2018/3/31
* email:spion@qq.com
*/
<style scoped>
    @import url("./style/shopping.css");
</style>
<template>
    <article class="shopping" v-if="index">
        <headering :data="index"></headering>
        <horn :data="index"></horn>
        <earn-and-change></earn-and-change>
        <raise :data="index"></raise>
    </article>
</template>
<script>
    import horn from "./home/horn";//顶部小公告
    import headering from "./home/header";//头部
    import earnAndChange from "./home/earnAndChange";//兑换记录赚积分
    import raise from "./home/raise";//加息券
    import {mapGetters} from "vuex";
    export default {
        components:{
            horn,
            headering,
            earnAndChange,
            raise
        },
        computed: {
            ...mapGetters({
                user: "getUserInfo",
                index:"getShoppingIndex",
            })
        },
        watch:{
            index(){
                let self=this;
                self.$nextTick(()=>{
                    self.setImgSize();
                })
            }
        },
        mounted(){
            let self=this;
            this.setTitle({
                show:true,
                title:"积分商城",
                back:true,
                button : {
                    width : 120,
                    top : 25,
                    height:40,
                    text : "积分规则",
                    event(){
                        self.go().all({returnUrl:"/shopping/pointExplanation"});
                    }
                }
            })
            this.setNav({
                show:false
            })
               this.$store.commit("getShoppingIndex",this);
            self.$nextTick(()=>{
                self.setImgSize();
            })
        },
        methods:{
        }
    }
</script>
