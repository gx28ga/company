<style scoped>
    @import './../css/main.css';
    @import './../css/index.css';
    .investement{
        background: #ebecff;
        text-align: center;
    }
</style>
<script>
    export default {
        mounted(){
            T.setImgSize();
        },
        props:{
            investCount : Number,
            investCumulative: Number,
        },
        filters: {
            money: function(n){
                return parseFloat(n).toLocaleString();
            }
        },
    }
</script>
<template>
    <div>
        <div class="tixing img-size" data-width='657' data-height='24' data-marginTop='23'></div>
        <div class="box img-size" data-width='680' data-borderRadius='18' data-paddingTop='40'>
            <div class="titlebg img-size" data-width='247' data-height='50' data-fontSize='36' data-lineHeight='50'>热销产品</div>
            <div class="cpbox img-size" data-width='651' data-height='663' >
                <!-- <div class="cp new img-size" data-marginBottom='33' data-height='183' data-fontSize='30' data-borderRadius='10'>
                    <div class="name img-size" data-lineHeight='142' data-paddingLeft='45' data-paddingRight='38' data-marginTop='22'>新手理财</div>
                    <div class="right img-size" data-width='370' data-paddingLeft='45' data-height='183'>
                        <p class="img-size" data-paddingTop='50'>预期年化</p>
                        <p><span class="img-size" data-fontSize='48'>12%</span>起</p>
                    </div>
                </div>
                <div class="cp duan img-size" data-marginBottom='33' data-height='183' data-fontSize='30' data-borderRadius='10'>
                    <div class="name img-size" data-lineHeight='142' data-paddingLeft='45' data-paddingRight='38' data-marginTop='22'>短期理财</div>
                    <div class="duanbg img-size" data-width='370' data-paddingLeft='45' data-height='183'>
                        <p class="img-size" data-paddingTop='50'>预期年化</p>
                        <p><span class="img-size" data-fontSize='48'>8%</span>起</p>
                    </div>
                </div>
                <div class="cp larg img-size" data-marginBottom='33' data-height='183' data-fontSize='30' data-borderRadius='10'>
                    <div class="name img-size" data-lineHeight='142' data-paddingLeft='45' data-paddingRight='38' data-marginTop='22'>中期理财</div>
                    <div class="largbg img-size" data-width='370' data-paddingLeft='45' data-height='183'>
                        <p class="img-size" data-paddingTop='50'>预期年化</p>
                        <p><span class="img-size" data-fontSize='48'>11.8%</span>起</p>
                    </div>
                </div> -->
            </div>
            <div class="investement img-size" data-fontSize='24' data-lineHeight='85'>用户累计投资<span>{{investCumulative | money}}</span>元，<span>{{investCount | money}}</span>投资用户</div>
        </div> 
    </div>
</template>