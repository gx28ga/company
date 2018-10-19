/**
*
* created by bo.peng
* email:spion@qq.com
*/
<style scoped>
.coupon{
    display:flex;
    align-items:center;
    .btn{
        position: fixed;
        left:0;
        bottom:0;
        width:100%;
        border-radius:0;
    }
}
</style>
<template>
	<article class="coupon">
        <div v-if="list && list.length" class="coupon-list img-size" data-paddingBottom="110">
            <coupon v-for="item in list" :item="item"
                    @change="change"
                    :select="selectCoupon" :key="item.id"></coupon>
        </div>
        <div class="btn img-size" @click="submit" data-height="90" data-lineHeight="90" data-fontSize="32">
            不使用优惠券
        </div>
    </article>
</template>

<script>
    import coupon from "../../../components/coupon";
    //import filer from "../../../../mixin/filters";
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
        data() {
            return {
                data : null,
                list : null,
                selectCoupon : null
            }
        },
		mounted(){
            if(!this.cath.productData){
                return this.go().product.home();
            }
            this.setTitle({
                show: true,
                title: "请选择优惠券",
                back: true,
                gap: true,
            });
            this.setNav({show:false});
            this.data = this.cath.productData;
            this.list = this.data.couponAllList;
            if(this.cath.selectCoupon){
                this.selectCoupon = this.cath.selectCoupon;
            }
        },
        methods:{
            back(item,selectCouponBank){
                this.$store.commit("setCatch",{
                    selectCoupon : item,
                    selectCouponBank : selectCouponBank
                });
                //selectCouponBank 为true时，表示取消选择优惠券，回到投资页时，将不做任何选择
                this.selectCoupon = item;
                setTimeout(()=>{
                    window.history.length > 1
                        ? this.$router.go(-1)
                        : this.$router.push('/');
                },300);
            },
            change(item){
                let self = this;
                if(item.enableAmount>parseInt(this.cath.productNum)){
                    this.$pop({
                        title : "投资",
                        close : true,//是否显示关闭按钮
                        content : "投资金额必需为"+item.enableAmount,
                        icon : "icon3",//icon1 确定 2取消 3提示
                        footer : {
                            ok : "确定",//确定按钮
                            cancel : "取消", //取消按钮
                            okCallback : function(){
                                self.$store.commit("setCatch",{
                                    productNum : item.enableAmount
                                });
                                this.close();
                                self.back(item);
                            }, //确定按钮事件
                            cancelCallback : function(){
                                this.close();
                            },//取消按钮事件
                        }
                    });
                }else{
                    this.back(item);
                }
            },
            submit(){
                this.back(null,true);
            }
        }
	}
</script>
