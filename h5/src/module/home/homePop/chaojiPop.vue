/**
* describe 超级加息券弹框
* Created by wangCuiqing
* Date: 2018/5/25
*/
<style scoped>
.chaojibg{
    background:#fff;
    border-radius: 20px;
    .top{
        background:url("../../../images/home/tjhf.png") no-repeat;
        background-size:contain;
        margin:0 auto;
    }
    .gongxi{
        color:#FE7634;
        text-align: center;
    }
    .jiaxiContent{
        .jiaxibg{
            background:url("../../../images/home/tan_jxq.png") no-repeat;
            background-size:contain;
            margin:0 auto;
            color:#fff;
            display: flex;
           justify-content: center;
            align-items: center;
            text-align: center;
            .name{
                color:#FFE740
            }
        }
    }
    .lookMore{
        text-align: center;
        color:#0084D7;
    }
}
</style>
<template>
<article class="chaojibg img-size" data-paddingTop="70" data-paddingBottom="50" data-paddingLeft="40" data-paddingRight="40">
        <div class="top img-size" data-width="318" data-height="54"></div>
        <div class="gongxi img-size" data-fontSize="28" data-marginTop="20" data-marginBottom="70">恭喜获得{{chaojiLength}}张加息券</div>
        <div class="jiaxiContent img-size" data-marginBottom="60">
            <div class="jiaxibg img-size" data-width="568" data-height="150" data-marginBottom="30" v-for="item in chaojiList" v-bind:key="item.id">
                <div class="jiaxiLeft img-size" data-width="390">
                    <p class="name img-size" data-fontSize="28" v-if="item.type==2&&item.superId">超级加息券</p>
                    <p class="name img-size" data-fontSize="28" v-if="item.type==2&&item.superId==null">加息券</p>
                    <p class="name img-size" data-fontSize="28" v-if="item.type==1">红包</p>
                    <p class="name img-size" data-fontSize="28" v-if="item.type==4">翻倍券</p>
                    <!--<p class="name img-size" data-fontSize="28" v-if="item.type==8">N天加息</p>-->
                    <p class="img-size" data-fontSize="44" v-if="item.type==2&&item.superId"><span class="img-size" data-fontSize="72">{{item.minRaisedRates}}</span>%~<span class="img-size" data-fontSize="72">{{item.maxRaisedRates}}</span>%</p>
                    <p class="img-size" data-fontSize="44" v-if="item.type==2&&item.superId==null"><span class="img-size" data-fontSize="72">{{item.raisedRates}}</span>%</p>
                    <p v-if="item.type==1"><span class="img-size" data-fontSize="72">{{item.amount}}</span>元</p>
                    <p v-if="item.type==4"><span class="img-size" data-fontSize="72">产品利率翻倍</span>元</p>
                </div>
                <div class="jiaxiright img-size" data-fontSize="24" data-width="170">
                    有效期至<br>{{new Date(item.expireDate).Format("yyyy.MM.dd")}}
                </div>
            </div>
        </div>
        <div class="lookMore" @click="lookMore">查看更多 >></div>
</article>
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        computed:{
            ...mapGetters({
                index:"getHomeIndex",
            })
        },
        name: "chaoji-pop",
        mounted(){
            let self=this;
            if(self.index.favourableList.length>2){
                self.chaojiList=self.index.favourableList.slice(0,2);
            }else{
                self.chaojiList=self.index.favourableList;
            }
            self.$nextTick(()=>{
                self.setImgSize();
            })
            self.chaojiLength=self.index.favourableList.length;
        },
        data(){
            return{
                chaojiList:[],
                chaojiLength:0,
            }
        },
        methods:{
            lookMore(){
                this.$parent.close();
                this.go().myAccount.myCoupon.home()
            }
        }
    }
</script>
