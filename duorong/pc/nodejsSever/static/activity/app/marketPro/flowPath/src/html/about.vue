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
    <div class="box img-size" data-width='680' data-borderRadius='18' data-paddingTop='40' data-marginTop='42'>
        <div class="titlebg img-size" data-width='247' data-height='50' data-fontSize='36' data-lineHeight='50' data-marginBottom='58'>关于多融</div>
        <div class="about img-size" data-marginBottom='58'>
            <div class="about-icon icon1 img-size" data-height='92' data-width='92' data-marginRight='35' data-marginLeft='45'></div>
            <div class="ab-right img-size" data-paddingTop='6' data-fontSize='24'>
                <p class="img-size" data-fontSize='30'>大型国企中商沪深99%控股</p>
                <p>国资委旗下-沪深控股战略控股、商业网点建设开发中心旗下</p>
            </div>
        </div>
        <div class="about img-size" data-marginBottom='58'>
            <div class="about-icon icon2 img-size" data-height='92' data-width='92' data-marginRight='35' data-marginLeft='45'></div>
            <div class="ab-right img-size" data-paddingTop='6' data-fontSize='24'>
                <p class="img-size" data-fontSize='30'>合规运营</p>
                <p>银行资金存管、专业律所提供合规支持</p>
            </div>
        </div>
        <div class="about img-size" data-marginBottom='58'>
            <div class="about-icon icon3 img-size" data-height='92' data-width='92' data-marginRight='35' data-marginLeft='45'></div>
            <div class="ab-right img-size" data-paddingTop='6' data-fontSize='24'>
                <p class="img-size" data-fontSize='30'>严格风控</p>
                <p>银行级别风控、上线503天、0逾期0坏账</p>
            </div>
        </div>
    </div>
</template>