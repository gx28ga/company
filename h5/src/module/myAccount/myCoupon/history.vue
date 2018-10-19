/**
* 我的历史优惠券
* created by bo.peng 2018/5/21
* email:spion@qq.com
*/
<style scoped>
    .myCoupon{
        .nodata{
            padding:30px;
            text-align:Center;
        }
        .content{
            padding:20px 0 5px;
            display:flex;
            flex-direction:column;
            align-items: center;
        }
    }
</style>
<template>
    <article class="myCoupon">
        <div class="content" v-if="list">
            <coupon v-for="item in list" :item="item"
                    :use="true"
                    :select="selectCoupon" :key="item.id"></coupon>
        </div>
        <div class="content nodata" v-else>
            暂无数据
        </div>
    </article>
</template>

<script>
    import coupon from "../../components/coupon";
    import {MYCOUPON} from "../../../contant/urls/MYACCOUNT";
    import {mapGetters} from "vuex";
    export default {
        components:{
            coupon
        },
        computed:{
            ...mapGetters({
                cath : "getCatch"
            })
        },
        data(){
            return{
                list : null,
                selectCoupon : null,
            }
        },
        mounted(){
            if(!this.cath.myHistoryType===void 0){
                this.go().myAccount.home();
            }
            this.setTitle({
                show:true,
                title : "我的优惠券",
                back:true,
            })
            this.getCoupon();
        },
        methods:{
            getCoupon(){
                let self = this ,
                    type = self.cath.myHistoryType;
                this.ajax({
                    url : MYCOUPON,
                    data : {
                        status : 1, //0可使用 1不可使用
                        newType : type, //0加息 1红包
                    },
                    load : true,
                }).then(data=>{
                    self.list = [...data.map.list,...data.map.superList];
                })
            }
        }
    }
</script>
