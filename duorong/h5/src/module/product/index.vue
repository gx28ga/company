/**
* 产品列表
* created by bo.peng 2018/3/31
* email:spion@qq.com
*/
<style scoped>
.product{
    height:100%;
    .container{
        height:100%;
        overflow:hidden;
    }
}
</style>
<template>
    <article class="product">
        <div v-if="list" class="container">
            <scrolling ref="scroll" @load="load" @update="update">
                <banner :data="list.banner"></banner>
                    <box :list="list.page.rows"></box>
            </scrolling>
        </div>
        <loadding v-else></loadding>
    </article>
</template>

<script>
    import box from "./common/box";
    import scrolling from "../components/boxScroll";
    import loadding from "../components/loading";
    import banner from "./home/banner";
    import {PRODUCT_PAGE} from "../../contant/SESSIONSTORAGE";
    import {mapGetters} from "vuex";
    export default {
        name : "list",
        computed:{
            ...mapGetters({
                list : "getProductList"
            }),
            ...mapGetters({
                user : "getUserInfo"
            })
        },
        components : {
            box,
            scrolling,
            loadding,
            banner
        },
        deactivated(){
            if(this.$route.name==="list"){
                //
            }else{
                this.$destroy()
            }
        },
        created(){
            this.setTitle({
                title : "多融理财",
                show : true
            });
        },
        mounted(){
            this.init();
            this.outside().in();
        },
        methods:{
            init(){
                let page = T.getSession(PRODUCT_PAGE);
                if(!page){
                    let uid = this.user ? this.user.member.uid : null;
                    page = {
                        pageOn : 1, //当前页
                        pageSize : 10, //多少页
                        type : 0,   //类型
                        uid : uid,  //id
                        category : 0, //种类
                        orderBy : 0 , //排序
                        descendOrAscend : 0 , //
                    };
                    T.setSession(PRODUCT_PAGE,page);
                }
                this.$store.commit("updateProductList",{
                    self : this
                });
            },
            load(callback){
                let self = this;
                this.$store.commit("updateProductList",{
                    self : this,
                    load : true,
                    callback : ()=>{
                        callback();
                        self.setImgSize();
                        self.$nextTick(()=>{
                            self.setImgSize();
                        });
                    }
                });
            },
            update(callback){
                let self = this;
                this.$store.commit("updateProductList",{
                    self : this,
                    update : true,
                    callback : ()=>{
                        callback();
                        self.setImgSize();
                        self.$nextTick(()=>{
                            self.setImgSize();
                        });
                    }
                });
            }
        }
    }
</script>
