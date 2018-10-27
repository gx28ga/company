<style scoped>
@import '../css/vue-pop.css';
$redtextcolor:#ac1c1c;
$huitextcolor:#333333;
    .rule-tan{animation:openMove 1s forwards; height: inherit; position: absolute; left: 50%; top: 50%; color: $redtextcolor;
        .title{ width: 100%; background: #ffdb12; margin: 0 auto; position: absolute; text-align: center; @include font-size(12px);}
        .yetitleb{ background: url('../images/yetitleb.png') no-repeat; height: 100%; background-size: contain; position:absolute; left: 0; right: 0; margin: auto;}
        .list{ background: #feefdc; margin: 0 auto;}
        ul{ overflow-y: scroll; li{p{ font-weight:600; span{ font-family: 'Arial';} i{ font-weight:normal; }}}}
        .zdlbtn{ color:$redtextcolor; text-align: center; margin: 0 auto;  background:#ffdb13; background: -webkit-gradient(linear,0 100% , 0 0, from(#ffdb13), to(#ffe96f)); }
    }
	.modal-mask.explain{
        li{
            @include box;
            margin-top: 5px;
        }
        .modal-container.pop-cnt{
             @include box-sizing;
             @include transition-duration(0s);
             background: #fff;
             border-radius: 5px;
            .content{ 
                margin-bottom:10px;margin-top:10px; color:#333;
                @include align-items(flex-start);
                @include justify-content(flex-start);
                overflow-y: scroll;
            }
        }   
        .ruletitle{ color: #650f2c; text-align: center; }
        .close{ border: 2px solid #650f2c; border-radius: 50%; color: #650f2c; text-align: center; font-weight: bold; }
        table{ margin: 0 auto; tr{ td{ text-align: center; border: 1px solid #000; line-height: 22px; } } }
        .surebtn{ 
        	/*background: url('../images/surebtn.png') no-repeat;*/
        	 background-size: contain; color: #fff; line-height: 35px; text-align: center; margin: 0 auto;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask explain" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container img-size" data-paddingTop='35' data-paddingLeft='33' data-paddingRight='33' data-width='692' data-height='929' @click='closePropagtion($event)'>
				<div class="rule-tan img-size" data-width="692" data-marginLeft="-346" data-height="950" data-marginTop="-475">
                    <div class="title img-size" data-lineHeight="50" data-top="12" data-fontSize='24'>活动规则</div>
                    <div class="yetitleb img-size" data-width="692" data-height="11" data-top="62"></div>
                    <div class="list img-size" data-paddingTop="73" data-paddingBottom="30" data-paddingLeft="32" data-paddingRight="32" data-width="574" data-borderRadius='20'>
                        <ul class="img-size" data-fontSize='22'>
                            <li><p><span>1. </span>活动时间：即日起</p></li>
                            <li><p><span>2. </span>活动对象：仅限多融未注册用户</p></li>
                            <li><p><span>3. </span>活动期间，凡符合条件用户可领取：</p></li>
                            <li><p>新用户通过此页面注册可获得：10000元体验金+2%加息券+1588元红包+短期新手体验产品+12%新手专享产品</p></li>
                            <li><p><span>4. </span>注册成功用户，在此页面可不充值，直接使用10000元体验金进行投资，投资成功后即可领取收益</p></li>
                            <li><p><span>5. </span>短期新手体验产品：仅限新用户首笔投资，每人最高可购买额度50000元。例如注册成功后，首笔投资了其他产品，则无法投资新手体验短期产品</p></li>
                            <li><p><span>6. </span>新手专享标，可在新用户投资体验标后进行投资，仅限一次；</p></li>
                            <li><p><span>7. </span>1588现金红包为：20元红包、268元红包、300元红包、1000元红包的组合红包，可用于投资使用，投资生效后以现金的形式返到您的账户</p></li>
                            <li><p><span>8. </span>红包、加息券等将即时发放到您的多融账户，可登录多融理财APP或官网查看</p></li>
                            <li><p><span>8. </span>本次活动最终解释权归多融财富所有</p></li>
                        </ul>
                        <div class="zdlbtn img-size" data-width="180" data-height="55" data-lineHeight="55" data-marginTop="30" data-borderRadius='50' data-fontSize='28' @click="closePop">知道了</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
        },
        data(){
            return{
                showModal : true 
            }
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
            closePropagtion : function( e ){
                e.stopPropagation();
            },
            showPop : function(callback){
                this.showModal = true;
                if($.type(callback) == 'function'){
                    setTimeout(callback,550)
                }
            },
            closePop : function(callback){
                this.showModal = false;
                T.getPop(callback);
                bus.$emit('closePopEvent');
            }
        }
    }
</script>