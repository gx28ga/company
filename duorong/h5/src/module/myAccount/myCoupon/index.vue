/**
* 我的优惠券
* created by bo.peng 2018/5/21
* email:spion@qq.com
*/
<style scoped>
.myCoupon{
    .flex{
        flex:1;
    }
    nav{
        ul{
            height:45px;
            display:flex;
            flex-direction:row;
            align-items:center;
            background:#fff;
        }
        li{
            text-align:center;
            font-size: 14px;
            color: #102542;
            &.line{
                width:0.5px;
                height:17px;
                background:#D2D2D2;
            }
            &.current{
                color: #0084D7;
            }
        }
    }
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
    .history{
        padding-bottom:15px;
        display:flex;
        flex-direction: row;
        align-items:center;
        justify-content: center;
        color: #0084D7;
    }
}
</style>
<template>
	<article class="myCoupon" v-if="map">
        <nav>
            <ul>
                <li class="flex" :class="{current:index===0}" @click="getCoupon(0)">加息券({{map.jxqSize}})</li>
                <li class="line"></li>
                <li class="flex" :class="{current:index===1}" @click="getCoupon(1)">红包({{map.hbSize}})</li>
            </ul>
        </nav>
        <div class="content" v-if="list">
            <coupon v-for="item in list" :item="item"
                    :use="true"
                    @change="change"
                    :select="selectCoupon" :key="item.id"></coupon>
        </div>
        <div class="content nodata" v-else>
            暂无数据
        </div>
        <div class="history">
            <div class="text" @click="history">查看历史{{["加息券","红包"][index]}}</div>
            <arrow color="#A0A0A0" @clickEvent="history" :width="12" :height="12" name="right"/>
        </div>
    </article>
</template>

<script>
    import coupon from "../../components/coupon";
    import {MYCOUPON} from "../../../contant/urls/MYACCOUNT";
    import arrow from "../../components/arrow";
	export default {
		components:{
            coupon,
            arrow
        },
        data(){
		    return{
                index : 0,
                map : null,
		        list : null,
                selectCoupon : null,
            }
        },
        mounted(){
		    let self = this;
		    this.setTitle({
                show:true,
                title : "我的优惠券",
                back:true,
                button : {
                    width : 120,
                    top : 25,
                    height:40,
                    text : "兑换优惠券",
                    color : "#0084D7",
                    event(){
                        self.go().shopping.home();
                    }
                }
            })
		    this.getCoupon(0);
        },
        methods:{
		    history(){
		        this.$store.commit("setCatch",{
                    myHistoryType : this.index
                });
		        this.go().myAccount.myCoupon.history();
            },
            getCoupon( type ){
                let self = this;
                this.index = type;
                this.ajax({
                    url : MYCOUPON,
                    data : {
                        status : 0, //0可使用 1不可使用
                        newType : type, //0加息 1红包
                    },
                    load : true,
                }).then(data=>{
                    self.map = data.map;
                    self.list = [...self.map.superList,...self.map.list];
                })
            },
            change(item) {
                this.go().product.home();
            }
        }
	}
</script>
