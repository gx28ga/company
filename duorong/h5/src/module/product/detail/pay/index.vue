/**
* 支付页面
* created by bo.peng 2018/5/3
* email:spion@qq.com
*/
/**
<style scoped>
    .pay{
        width:100%;
        .title{
            display:flex;
            .cancel,.ok{
                color:#1a6bcf;
            }
        }
        h2{
            flex:1;
        }
        .price{
            color: #A0A0A0;
            text-align:center;
            margin-bottom:10px;
            em{
                color: #FE7634;
            }
        }
        .text-input{
            padding:0 10px;
            background: #F2F2F2;
            border-radius: 5px;
        }
        .icon{
            float:left;
            font-size:18px;
        }
        .icon1{
            margin:0 auto;
            background:url("../../../../images/product/shanchu.png") no-repeat;
            background-size:contain;
        }
        .disc{
            ul{
                display:flex;
                flex-direction:row;
            }
            li{
                flex:1;
                margin:2px;
                padding:10px 0;
                line-height: 22px;
                border: 1px solid #F2F2F2;
                text-align:center;
            }
            .goback{
                flex:0.48;
            }
        }
        .error{
            height:33px;
            line-height:33px;
            overflow:hidden;
            color:#e60012;
            transition-duration:.3s;
            opacity:0;
            &.current{
                opacity:1;
            }
        }
        .btn{
            margin-top:10px;
            border-radius:0;
        }
    }
</style>
<template>
    <article class="pay">
        <div class="title img-size" data-height="100" data-lineHeight="100" data-paddingLeft="30" data-paddingRight="30">
            <div class="cancel" @click="cancel">取消</div>
            <h2 class="img-size" data-fontSize="32">输入金额</h2>
        </div>
        <div class="content img-size" data-paddingLeft="30" data-paddingRight="30" data-fontSize="24">
            <div class="price">
                <span>{{num===text?"可用余额：":"预估收益："}}</span><em>{{profit}}</em><span>元</span>
            </div>
            <div class="text-input img-size" data-height="90" data-lineHeight="90">
                <div class="icon">￥</div>
                <div class="input" :class="{gray:num===text}">
                    {{num}}
                </div>
            </div>
            <div class="error" :class="{current:error}">{{errMsg}}</div>
            <div class="disc">
                <ul>
                    <li @click="getNum(1)">1</li>
                    <li @click="getNum(2)">2</li>
                    <li @click="getNum(3)">3</li>
                </ul>
                <ul>
                    <li @click="getNum(4)">4</li>
                    <li @click="getNum(5)">5</li>
                    <li @click="getNum(6)">6</li>
                </ul>
                <ul>
                    <li @click="getNum(7)">7</li>
                    <li @click="getNum(8)">8</li>
                    <li @click="getNum(9)">9</li>
                </ul>
                <ul>
                    <li @click="getNum(0)">0</li>
                    <li @click="clear" class="goback img-size" data-width="100">
                        <div class="icon1 img-size" data-width="56" data-height="42"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="btn img-size" :class="{gray:!btnEvent}" @click="submit" data-height="90" data-lineHeight="90" data-fontSize="36">
            {{num===text?"立即投资":"投资"+num+"元"}}
        </div>
    </article>
</template>

<script>
    import filer from "../../../../mixin/filters";
    import profit from "../../common/profit";
    import {mapGetters} from "vuex";
    export default {
        props:{
            data : Object,
        },
        data(){
            return{
                text : "",
                num : "",
                priceNum : "0",
                //错误信息
                code: "",
                errMsg: "",
                error: false,
                btnEvent : false,
                timer : 0,
            }
        },
        computed :{
            ...mapGetters({
                cath : "getCatch"
            }),
            profit(){
                let num = this.priceNum;
                if(num === this.text){
                    return num;
                }
                return filer.methods._toFixed(this.priceNum);
            }
        },
        watch:{
            num(val){
                let self = this,
                    surplusAmount = this.data.surplusAmount;
                if(parseInt(val)>=surplusAmount){
                    this.setNum(surplusAmount);
                }else if(val === this.text){
                    this.priceNum = this.data.balance;
                }else{
                    this.getProfit();
                }
                clearTimeout(this.timer);
                this.timer = setTimeout(()=>{
                    if( (val>=99&&String(val).search(/0$/)>-1) || val === self.text){
                        self.hideError();
                        self.btnEvent = val !== self.text;
                    }else{
                        self.showError(self.text);
                        self.btnEvent = false;
                    }
                },300);
            }
        },
        mounted(){
            this.text = this.data.leastaAmount+"元起投，百元递增";
            this.num = this.text;
            this.$pops.removeLoadding();
            this.priceNum = this.data.balance;
            this.setImgSize();
        },
        methods:{
            showError(msg) {
                this.errMsg = msg;
                this.error = true;
            },
            hideError() {
                this.error = false;
            },
            setNum( num ){
                this.num = num;
            },
            getNum( val ){
                let num = String(this.num);
                if(num===this.text){
                    num = "";
                }
                num += val;
                this.setNum(num);
            },
            clear(){
                let num = String(this.num);
                if(num.length>1&&num!==this.text){
                    num = num.substr(0,num.length-1);
                }else{
                    num = this.text
                }
                this.setNum(num);
            },
            getProfit(){
                let priceNum = profit.getProfit(this,{
                    acount : this.num
                });
                TweenLite.to(this.$data, 0.5, { priceNum: priceNum });
            },
            cancel(){
                this.setNum(this.text);
                this.$parent.close();
            },
            submit(){
                if(this.btnEvent){
                    this.$parent.close();
                    this.$store.commit("setCatch",{
                        productNum : this.num,
                        priceNum : this.profit,
                        selectCoupon : null,//清空当前选项
                    });
                    this.go().product.pay();
                }
            }
        }
    }
</script>
