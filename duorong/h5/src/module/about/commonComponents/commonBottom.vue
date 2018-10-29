/**
* describe
* Created by wangCuiqing
* Date: 2018/6/4
*/
<style scoped>
    .navsider{
        background:#fff;
        .footer{
          /*  background: url("../../../images/about/insurance/footer.png") no-repeat;
            background-size: contain;
            position: relative;
            color:#ccc;*/
            .download{
                color:#cccccc;
                position: absolute;
            }
            .erweima{
                background: url("../../../images/about/insurance/erweima.png") no-repeat;
                background-size: contain;
                position: absolute;

            }
            .duorong{
                position: absolute;
            }
            .duorongCon{
                position: absolute;
            }
            .line{
                border:1px dotted #ccc;
                position: absolute;
            }
            .con{
                text-align: center;
                position: absolute;
                bottom:0;
                left:0;
            }

        }
    }
</style>
<template>
    <article class='navsider'>
        <div class='footer img-size' data-width='750' data-height='391'>
            <div class='download img-size' data-fontSize='34' data-width='44' data-top='80' data-left='120' data-lineHeight='34'>下载二维码</div>
            <div class='erweima img-size' data-height='164' data-width='164' data-top='85' data-left='160'></div>
            <div class='duorong img-size' data-fontSize='41' data-left='370' data-top='120'>多融财富</div>
            <div class='duorongCon img-size' data-fontSize='30' data-left='370' data-top='190'>国资委下属单位  沪深控股</div>
            <div class='line img-size' data-height='0' data-width='670' data-left='40' data-bottom='93'></div>
            <div class='con img-size' data-width='750' data-fontSize='25' data-height='90' data-lineHeight='90'>每几分钟就有一个人 在多融财富获取超过8%的收益</div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "common-bottom"
    }
</script>
