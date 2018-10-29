/**
* describe 交易对账弹框
* Created by wangCuiqing
* Date: 2018/5/9
*/
<style scoped>
    .transition{
        .title{
            color:rgb(16, 37, 66);
            text-align: center;
            border-bottom:0.5px solid #ddd;
            .back{
                border-left:2px solid #666;
                border-top:2px solid #666;
                transform: rotate(-45deg);
                display: inline-block;
                float: left;
            }
        }
        .transactionTitle{
            background:#fff;
            border-bottom:0.5px solid #eee;
            display: flex;
            justify-content: center;
            align-items: center;
            color:#102542;
            .titleBox{
                text-align: center;
            }
            .arrow1{
                border-left:2px solid #D2D2D2;
                border-top:2px solid #D2D2D2;
                display: inline-block;
                transform: rotate(45deg);
            }
            .bl{
                border-right:0.5px solid #D2D2D2;
            }
        }
        .transitionList{
            background:#fff;
            display: flex;
            justify-content: center;
            .con{
                background:#F2F2F2;
                color:#102542;
                text-align: center;
            }
        }
    }
</style>
<template>
    <article class="transition">
        <div class="title img-size" data-height="90" data-lineHeight="90"  data-fontSize="34">
            <span class="back img-size" data-width="20" data-height="20" data-marginTop="35" data-marginLeft="40" @click="closePop"></span>
            交易对账</div>
        <div class="transactionTitle img-size" data-marginTop="1" data-marginBottom="1" data-paddingTop="32" data-paddingBottom="32">
            <div class="img-size titleBox bl" data-fontSize="24" data-width="374" @click="closePop">类型 <span class="arrow1 img-size" data-width="10" data-height="10" data-marginLeft="62"></span></div>
            <div class="img-size titleBox" data-fontSize="24" data-width="374">金额</div>
        </div>
        <div class="transitionList img-size" data-paddingTop="40" data-paddingBottom="40">
            <div class="con img-size" data-fontSize="28" data-width="190"  data-lineHeight="60" data-height="60" data-marginLeft="30" data-marginRight="30" @click="changeStatus(0)">全部</div>
            <div class="con img-size" data-fontSize="28" data-width="190" data-lineHeight="60" data-height="60" data-marginLeft="30" data-marginRight="30" @click="changeStatus(1)">充值</div>
            <div class="con img-size" data-fontSize="28" data-width="190" data-lineHeight="60" data-height="60" data-marginLeft="30" data-marginRight="30" @click="changeStatus(2)">提现</div>
        </div>
        <div class="transitionList img-size"  data-paddingBottom="40">
            <div class="con img-size" data-fontSize="28" data-width="190"  data-lineHeight="60" data-height="60" data-marginLeft="30" data-marginRight="30" @click="changeStatus(3)">投资</div>
            <div class="con img-size" data-fontSize="28" data-width="190" data-lineHeight="60" data-height="60" data-marginLeft="30" data-marginRight="30" @click="changeStatus(6)">回款</div>
            <div class="con img-size" data-fontSize="28" data-width="190" data-lineHeight="60" data-height="60" data-marginLeft="30" data-marginRight="30" @click="changeStatus(4)">活动</div>
        </div>
        <div class="transitionList img-size"  data-paddingBottom="40">
            <div class="con img-size" data-fontSize="28" data-width="190"  data-lineHeight="60" data-height="60" data-marginLeft="30" data-marginRight="30" @click="changeStatus(8)">赎回</div>
            <div class="con img-size" data-fontSize="28" data-width="190" data-lineHeight="60" data-height="60" data-marginLeft="30" data-marginRight="30" @click="changeStatus(7)">收益</div>
            <div class=" img-size" data-fontSize="28" data-width="190" data-lineHeight="60" data-height="60" data-marginLeft="30" data-marginRight="30"></div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "transation",
        data(){
            return{
               tradType:0
            }
        },
        mounted(){
            this.setImgSize();
        },
        methods:{
            closePop(){//关闭这个弹框
                this.$parent.close();
            },
            changeStatus(num){//改变状态
                this.$store.commit("setCatch",{
                    changeTradType : {
                        type : num
                    }
                });
                //this.$store.commit("changeTradType",type);
                this.$parent.close();
            }
        }
    }
</script>
