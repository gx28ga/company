<style scoped>
    @import './../css/main.css';
    @import './../css/index.css';
</style>
<script>
    export default {
        mounted(){
            T.setImgSize();
        }
    }
</script>
<template>
<div>    
    <div class="img-size" data-marginTop='36'>
        <div class="faddish-box img-size" data-width='720' data-height='570'>
            <div class="title img-size" data-width='242' data-height='49' data-top='55'></div>
            <div class="box img-size" data-height='451' data-top='110'  data-fontSize='24'>
                <div class="A img-size" data-width='307' data-height='371' data-marginLeft='35' data-marginRight='35'>
                    <p class="img-size" data-lineHeight='76'>新手专享 高息月标</p>
                    <p class="img-size" data-fontSize='100'>12<span class="img-size" data-fontSize='48'>%</span></p>
                    <p class="img-size" data-fontSize='24'>历史年华收益</p>
                    <div class="btn img-size" data-width='230' data-height='60' data-marginTop='48' @click='gotoTop'></div>
                </div>
                <div class="B img-size" data-width='307' data-height='371'>
                    <p class="img-size" data-lineHeight='76'>爆款开抢</p>
                    <p class="img-size" data-fontSize='100'>8.5<span class="img-size" data-fontSize='48'>%</span></p>
                    <p class="img-size" data-fontSize='24'>历史年华收益</p>
                    <div class="btn img-size" data-width='230' data-height='60'data-marginTop='48' @click='gotoTop'></div>
                </div>
            </div>
        </div>
    </div>
    <div class="about img-size" data-marginTop='36'>
        <div class="faddish-box faddish-box2 img-size" data-width='720' data-height='605'>
            <div class="title2 img-size" data-width='471' data-height='50' data-top='55'></div>
            <div class="box2 img-size" data-width='675' data-height='451' data-top='125'  data-fontSize='24' data-paddingLeft='33'>
                <div class="A img-size" data-width='320' data-height='123' data-borderRadius='10' data-marginRight='16'>
                    <div class="icon1 img-size" data-width='92' data-height='92' data-marginTop='16' data-marginLeft='17'></div>
                    <div class="info img-size" data-fontSize='24' data-paddingLeft='23' data-paddingTop='25' data-lineHeight='38'><span>累计投资额</span><br><span>51亿元</span></div>
                </div>
                <div class="A img-size" data-width='320' data-height='123' data-borderRadius='10'>
                    <div class="icon2 img-size" data-width='92' data-height='92' data-marginTop='16' data-marginLeft='17'></div>
                    <div class="info img-size" data-fontSize='24' data-paddingLeft='23' data-paddingTop='25' data-lineHeight='38'><span>45万+</span><br><span>信赖之选</span></div>
                </div>
                <div class="A img-size" data-width='320' data-height='123' data-borderRadius='10' data-marginRight='16'>
                    <div class="icon3 img-size" data-width='92' data-height='92' data-marginTop='16' data-marginLeft='17'></div>
                    <div class="info img-size" data-fontSize='24' data-paddingLeft='23' data-paddingTop='25' data-lineHeight='38'><span>股东背景</span><br><span>国资+上市控股</span></div>
                </div>
                <div class="A img-size" data-width='320' data-height='123' data-borderRadius='10'>
                    <div class="icon4 img-size" data-width='92' data-height='92' data-marginTop='16' data-marginLeft='17'></div>
                    <div class="info img-size" data-fontSize='24' data-paddingLeft='23' data-paddingTop='25' data-lineHeight='38'><span>实力雄厚</span><br><span>1.5亿注册资金</span></div>
                </div>
                <div class="A img-size" data-width='320' data-height='123' data-borderRadius='10' data-marginRight='16'>
                    <div class="icon5 img-size" data-width='92' data-height='92' data-marginTop='16' data-marginLeft='17'></div>
                    <div class="info img-size" data-fontSize='24' data-paddingLeft='23' data-paddingTop='10' data-lineHeight='32'><span>系统信息安全</span><br><span>等级保护</span><br><span>三级备案</span></div>
                </div>
                <div class="A img-size" data-width='320' data-height='123' data-borderRadius='10'>
                    <div class="icon6 img-size" data-width='92' data-height='92' data-marginTop='16' data-marginLeft='17'></div>
                    <div class="info img-size" data-fontSize='24' data-paddingLeft='23' data-paddingTop='25' data-lineHeight='38'><span>银行存管</span><br><span>资金全程安全</span></div>
                </div>
            </div>
        </div>
    </div>
</div>    
</template>