/**
* describe 签到弹框
* Created by wangCuiqing
* Date: 2018/5/25
*/
<style scoped>
    .signinbg{
        background:url("../../../images/home/signin.png") no-repeat;
        background-size:contain;
        color:#000;
        text-align: center;
        span{
            color:red;
        }
    }

</style>
<template>
    <div class="img-size signinbg" data-width="606" data-height="456" data-fontSize="48" v-if="index.cmallResult.taskAwardList">
        <div class="img-size" data-paddingTop="200">
            <div class="img-size" data-marginBottom="30"> 恭喜你获得</div>
            <div v-if="index.cmallResult.taskAwardList[0].gainedPoints>0"><span>+{{index.cmallResult.taskAwardList[0].gainedPoints}}</span>积分</div>
            <div v-if="index.cmallResult.taskAwardList[0].gainedEXP>0"><span>+{{index.cmallResult.taskAwardList[0].gainedEXP}}</span>经验</div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        computed:{
            ...mapGetters({
                index:"getHomeIndex",
            })
        },
        name: "sign-in",
        data(){
            return{
            }
        },
        mounted(){
            this.setImgSize();
            this.submit();
        },
        methods:{
            submit(){
                let self=this;
                // self.$store.commit("updateHomeIndex",{update:true});
                setTimeout(()=>{
                    self.$parent.close();
                },1500)

            }
        }
    }
</script>
