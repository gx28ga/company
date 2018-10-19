<style scoped>
    @import './../css/main.css';
    .index{
        background: #fff2f2;
        .banner{
            width: 100%;
            background: url('../images/banner.png') no-repeat;
            background-size: contain;
        }
        .pg1{
            width: 100%;
            background: url('../images/pg_1.png') no-repeat;
            background-size: contain;
        }
        .pg2{
            width: 100%;
            background: url('../images/pg_2.png') no-repeat;
            background-size: contain;
        }
        .pg3{
            width: 100%;
            background: url('../images/pg_3.png') no-repeat;
            background-size: contain;
        }
        .pg4{
            width: 100%;
            background: url('../images/pg_4.png') no-repeat;
            background-size: contain;
        }
        .pg5{
            width: 100%;
            background: url('../images/pg_5.png') no-repeat;
            background-size: contain;
        }
        .pg6{
            width: 100%;
            background: url('../images/pg_6.png') no-repeat;
            background-size: contain;
        }
    }
</style>
<template >
    <div class='index'>
        <div class="banner img-size" data-height='500'></div>
        <div class="pg1 img-size" data-height='780'></div>
        <div class="pg2 img-size" data-height='858'></div>
        <div class="pg3 img-size" data-height='882'></div>
        <div class="pg4 img-size" data-height='876'></div>
        <div class="pg5 img-size" data-height='1339'></div>
        <div class="pg6 img-size" data-height='961'></div>
    </div>
</template>
<script>
    export default {
        mounted(){
            T.setImgSize();
        }
    }
</script>