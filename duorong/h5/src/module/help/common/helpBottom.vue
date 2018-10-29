/**
* describe 帮助中心底部
* Created by wangCuiqing
* Date: 2018/5/6
*/
<style scoped>
.feedBack{
    text-align: center;
    color:#999999;
}
</style>
<template>
    <div class="img-size feedBack" data-paddingTop="40" data-paddingBottom="40" data-lineHeight="46">
        问题无法解决，可在APP端-【发现】-【意见反馈】中进行反馈<br>
        如果有疑问也可直接联系{{phone}}
    </div>
</template>

<script>
    import GLOBAL from "../../../contant/GLOBAL"
    export default {
        mounted(){
            this.setImgSize();
        },
        data(){
            return {
                phone:GLOBAL.sever.contactPhone
            }
        }
    }
</script>
