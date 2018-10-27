/**
* describe 老用户底部关于多融
* Created by wangCuiqing
* Date: 2018/4/25
*/
<style scoped>
.aboutList{
    display: flex;
    color:#102542;
    background:#fff;
    .aboutUs{
        display: flex;
        flex:1;
        justify-content:center;
        align-items:center;
        i{
            display:block;
            margin-right:8px;
            background-size:contain;
        }
        .icon1{
            background: url("../../images/home/ico_about.png") no-repeat;
            background-size:contain;
        }
        .icon2{
            background: url("../../images/home/ico_meiti.png") no-repeat;
            background-size:contain;
        }
        .icon3{
            background: url("../../images/home/ico_fankui.png") no-repeat;
            background-size:contain;
        }

    }
    .br{
        border-right:0.5px solid #D2D2D2;
    }
}
</style>
<template>
    <div class="aboutList img-size" data-height="30" data-paddingTop="60" data-paddingBottom="60" data-marginTop="20">
        <div class="aboutUs img-size br" data-height="30" data-lineHeight="30" data-fontSize="24" @click="goAbout">
            <i class="img-size icon1" data-width="40" data-height="40"></i>
            <p>关于多融</p>
        </div>
        <div class="aboutUs img-size br" data-height="30" data-lineHeight="30" data-fontSize="24" @click="goFind">
            <i class="img-size icon2" data-width="40" data-height="40"></i>
            <p>媒体报道</p>
        </div>
        <div class="aboutUs img-size" data-height="30" data-lineHeight="30" data-fontSize="24" @click="goFeedBack">
            <i class="img-size icon3" data-width="40" data-height="40"></i>
            <p>意见反馈</p>
        </div>
    </div>
</template>

<script>
    export default {
        mounted(){
            this.setImgSize();
        },
        methods:{
            goAbout(){
                this.go().all({
                    returnUrl:"/about/dr"
                })
            },
            goFind(){//发现
                this.go().find.home();
            },
            goFeedBack(){//意见反馈
                this.go().myAccount.feedBack();
            }
        }
    }
</script>
