/**
*
* created by bo.peng
* email:spion@qq.com
*/
<style scoped>
    .coupon_super{
        background:url("../../images/product/coupon.png") no-repeat;
        background-size:contain;
    }
    .coupon_add{
        background:url("../../images/product/coupon1.png") no-repeat;
        background-size:contain;
    }
    .coupon_red{
        background:url("../../images/product/coupon2.png") no-repeat;
        background-size:contain;
    }
    .gray{
        background:url("../../images/product/coupon_gray.png") no-repeat;
        background-size:contain;
    }
    .icon {
        display: flex;
        align-items: start;
        justify-content: center;
        width: 22px;
        height: 22px;
        margin-right: 5px;
        border: 1px solid #D2D2D2;
        border-radius: 100%;
        box-sizing: border-box;
        background: #fff;
        transition-duration:.3s;
        &.current {
            background: #FF8246;
            border-color: #FF8246;
            i{
                display: block;
                width: 12px;
                height: 5px;
                margin-top: 5px;
                border-top: 2px solid #fff;
                border-right: 2px solid #fff;
                transform: rotate(145deg);
            }
        }
    }
    .box{
        display:flex;
        flex-direction: row;
        margin-bottom:10px;
        .price{
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content: center;
            color:#fff;
            p{
                padding:5px 0;
            }
        }
        .text{
            flex:1;
            display:flex;
            flex-direction:column;
            justify-content: center;
            p{
                color: #A0A0A0;
            }
        }
        .checkbox{
            display:flex;
            align-items:center;
            justify-content: center;
        }
        .use{
            width:15px;
            font-size:12px;
            color:#A0A0A0;
            text-align:center;
            &.cur{
                color: #0084D7;
            }
        }
    }
    .gray{
        h2{
            color: #666666;
        }
    }
</style>
<template>
    <div class="box img-size" :class="classObject" data-width="670" data-height="180">
        <div class="price img-size" data-width="140" data-height="180">
            <p v-if="item.type===2" class="img-size" data-fontSize="28">
                <span v-if="item.minRaisedRates">{{item.minRaisedRates}}~{{item.maxRaisedRates}}<span class="img-size" data-fontSize="20">%</span></span>
                <span v-else>{{item.raisedRates}}<span class="img-size" data-fontSize="20">%</span></span>
            </p>
            <p v-else-if="item.type===1">{{item.amount}}元</p>
            <p v-else-if="item.type===4">&times;{{item.multiple}}</p>
            <p class="img-size" data-fontSize="24">{{title}}</p>
        </div>
        <div class="text img-size" data-fontSize="24" data-paddingLeft="40" data-lineHeight="34">
            <h2 class="img-size" data-fontSize="28">{{item.name}}</h2>
            <p>{{item.enableAmount}}元 ≤ 投资金额<span v-if="item.maxAmount!=0"> ≤ {{item.maxAmount}}元</span></p>
            <p v-if="item.maxProductDeadline!=0">投资期限 ≥ {{item.maxProductDeadline}}天</p>
            <p v-else>无时间限制</p>
            <p>{{item.expireDate|formatDate}}到期</p>
        </div>
        <div class="checkbox img-size" data-width="90" v-if="use">
            <div class="use" :class="{cur:item.status===0}" @click="change">{{item.status===0?'立即使用':item.status===1?'已使用':'已过期'}}</div>
        </div>
        <div class="checkbox img-size" data-width="90" v-else>
            <div class="icon" :class="{current:selected}" @click="change"><i></i></div>
        </div>
    </div>
</template>

<script>
    //status 2过期 0使用 1已使用
    import filter from "../../mixin/filters";
	export default {
	    props:["item","select","use"],
        computed: {
            classObject: function () {
                let type = parseInt(this.item.type),
                    status = parseInt(this.item.status);
                if(status===2 || status===1) return"gray";
                return type===1?"coupon_add":type===2&&!this.item.minRaisedRates?"coupon_red":"coupon_super";
            }
        },
		data(){
		    return{
		        selected : false,
                title : "",
            }
        },
        filters:{
            formatDate : filter.methods._formatDate,
        },
        watch:{
            select( obj ){
                this.selected = obj ? obj.id === this.item.id : false;
            }
        },
        mounted(){
	        if(this.select){
                this.selected = this.select.id === this.item.id;
            }
            let type = parseInt(this.item.type);
            this.title = type===1?"红包":type===3?"体验金":type===4?"翻陪券":"加息券";
            if(type===2 && this.item.minRaisedRates){
                this.title = "超级加息券";
            }
            this.$nextTick(()=>{
                this.setImgSize();
            })
        },
        methods:{
	        change(){
	            this.$emit("change",this.item);
            },
        }
	}
</script>
