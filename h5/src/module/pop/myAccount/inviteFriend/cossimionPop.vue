/**
* describe
* Created by wangCuiqing
* Date: 2018/4/14
*/
<style scoped>
   .invite{
       background:#fff;
   }
    dt,dd{
        float:left;
    }
</style>
<template>
    <article class="invite img-size" data-paddingLeft="20" data-paddingRight="20" data-paddingTop="70">
        <div>
            <dl class="img-size" data-width="600">
                <dt class="img-size" data-width="30">①</dt>
                <dd class="img-size"  data-width="520" data-paddingLeft="10" data-paddingBottom="20" data-paddingRight="20">活动期间，佣金奖励为现金奖励，直接发放到账户余额。佣金奖励每日发放，无上限。</dd>

            </dl>
            <dl class="img-size" data-width="600">
                <dt class="img-size" data-width="30">②</dt>
                <dd class="img-size" data-width="520"  data-paddingLeft="10" data-paddingBottom="20" data-paddingRight="20">
                    佣金奖励获取条件: <br>
                    ·邀请人自身账户待收≥5000元 <br>
                    ·被邀请人账户待收不为0<br>
                    ·待收指待回款的产品的本金，可至【账户】→【我的资产】查看<br>
                </dd>
            </dl>
            <dl class="img-size" data-width="600">
                <dt class="img-size" data-width="30">③</dt>
                <dd class="img-size" data-width="520"  data-paddingLeft="10" data-paddingBottom="20" data-paddingRight="20">
                    佣金奖励计算公式:<br>
                    每日佣金=佣金利率*好友总待收/365 <br>
                </dd>
            </dl>
            <dl class="img-size" data-width="600">
                <dt class="img-size" data-width="30">④</dt>
                <dd class="img-size" data-width="520"  data-paddingLeft="10" data-paddingBottom="20" data-paddingRight="20">
                    佣金发放:<br>
                    每日发放上一日佣金，直接发放至账户余额 <br>
                    ·如上一日不满足获取佣金奖励的条件（详见邀请规则攻略）,则当日佣金为0<br>
                </dd>
            </dl>
        </div>
    </article>
</template>

<script>
    export default {
        mounted(){
            this.setImgSize();
        }
    }
</script>
