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
                <dd class="img-size"  data-width="520" data-paddingLeft="10" data-paddingBottom="20" data-paddingRight="20">活动期间，被邀请人在注册成功当天起首月内（30天内，含第30天）成功投资任意产品（除新手宝外），邀请人就能获得一定比例的返现奖励：</dd>

            </dl>
            <dl class="img-size" data-width="600">
                <dt class="img-size" data-width="30">②</dt>
                <dd class="img-size" data-width="520"  data-paddingLeft="10" data-paddingBottom="20" data-paddingRight="20">
                    计算公式<br>
                    首月返现奖励=被邀请人投资产品基本收益金额（不含任何加息/红包等福利收益）*15%<br>
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
