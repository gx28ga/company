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
           不包含2017-08-31之前的邀请好友，此部分好友不再享受任何佣金奖励
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
