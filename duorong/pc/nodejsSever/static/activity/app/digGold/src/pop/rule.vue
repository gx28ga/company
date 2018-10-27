<style scoped>
    @import '../css/global.css';
    .modal-mask{
       .modal-header{
            .title-bg{
            }
        }
        .modal-body{
            .winning-pop{
                padding:0 $s20;
                h2{ color:#fff600; text-align:center;}
                p{ text-align:center; }
            }
        }
        .close{ background: url('../images/close.png') no-repeat; background-size: contain; float: right; }
        .rule{ background: #fff;color: #ff6900;
            .title{ background: url('../images/ruletitle.png') no-repeat; background-size: contain; margin:0 auto;}
            ul{ overflow-y: scroll; li{ position: relative;span{ position: absolute; } } }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition'>
    <div slot="header" class='title-bg img-size' data-marginTop='25' data-height='55'>
        <i class='close img-size' data-width='40' data-height='38' @click='close'></i>
    </div>
    <div slot='body' class='winning-pop'>
        <div class="rule img-size" data-width='620' data-height='960' data-borderRadius='20' data-fontSize='24'>
            <div class="title img-size" data-width='579' data-height='91'></div>
            <ul class="img-size" data-height='812' data-paddingLeft='70' data-paddingRight='20' data-paddingTop='20'>
                <li><span class="img-size" data-left='-34'>1.</span>活动时间：{{start}} - {{end}}</li>
                <li><span class="img-size" data-left='-34'>2.</span>集齐东南西北四方财神，兑换600元京东卡大礼；集齐任意两方财神，获2%加息券1张。集财神奖励，限发放1次，集齐多套财神，不重复发放奖励。</li>
                <li>东方财神<br>【每日参拜】：随机领取红包或加息券（最高1.5%加息或100元红包），每天1次免费机会（不可累计）<br>【东方财神】：累计参拜10次，即可获得</li>
                <li>南方财神<br>【挖金矿】：单笔购买≥20天产品，每满5000元，获得1次挖金矿机会。单笔购买≥80天产品，每满30000元，获得10次挖金矿机会。每次挖矿时间15秒，可挖到金子，金子可用来获取更多丰厚的活动奖品，详见下方<br>【南方财神】：挖金矿次数20次及以上，即可获得</li>
                <li>西方财神<br>【西方财神】：累计购买产品≥500000元（除20天以下产品），自动获得</li>
                <li>北方财神<br>【北方财神】：累计购买产品≥1000000元（除20天以下产品），自动获得</li>
                <li>大财神<br>单笔购买≥300天产品，每满100000元，可获得1次大财神福佑，可兑换四方财神中的任意一位。（按上述规则，同时也获得30次挖金矿机会）</li>
                <li><span class="img-size" data-left='-34'>3.</span>挖矿获得的金子有什么用？<br>【多挖多得】：金子数量越多，可获得的对应奖品越丰厚（不累计获得）。</li>
                <li>挖到银子达到数量　　　礼品名称</li>
                <li>1000　　　　　　20元京东卡</li>
                <li>2000　　　　　　50元京东卡</li>
                <li>3880　　　　　　100元京东卡</li>
                <li>12800　　　　　　300元京东卡</li>
                <li>26800　　　　　　600元京东卡</li>
                <li>48800　　　　　　1000元京东卡</li>
                <li>*以最高奖项为准，不累计获得</li>
                <li>【排名奖励】：活动结束后，根据挖到金子的最终数量进行排名，前10名可依次获得</li>
                <li>名次　　　　奖品<br>第一名　　　Surface Pro4二合一<br> 第二名　　　Gopro Hero5<br>第三名　　　2000元携程电子购物卡<br>第四名　　　佳明vivosmart HR+gps智能环<br>第五名　　　Dior花漾甜心香水<br>第六名　　　拍立得<br>第七名　　　小米手环<br>第八名　　　小米移动电源<br>第九名　　　50元京东购物卡<br>第十名　　　30元京东购物卡</li>
                <li><span class="img-size" data-left='-34'>4.</span>活动实物奖品将于活动结束后15个工作日内发放。活动期间如发现作弊现象，取消一切获奖资格。</li>
                <li><span class="img-size" data-left='-34'>5.</span>活动最终解释权归多融财富所有</li>
            </ul>
        </div>
    </div>
    <!-- <div slot='footer' class='submit img-size' data-marginTop='20'> -->
        <!-- <div class="btn img-size" data-width='327' data-height='60' data-lineHeight='60' @click='close'>OK，我知道了</div> -->
    <!-- </div> -->
</pop>
</template>
<script>
    import pop from './pop.vue';
    export default {
        computed : {
        },
        components : {
            pop
        },
        data(){
            return {
                info : window.info ,
                end : null,
                start:null
            }
        },
        props : {
            transition : String,
        },
        mounted(){
            T.setImgSize();
            var self = this;
            self.start = self.info.startTime.substr(0,8);
            self.end = self.info.endTime.substr(0,8);
        },
        methods : {
            close(){
                this.$refs.pop.closePop();

            }
        }
    }
</script>