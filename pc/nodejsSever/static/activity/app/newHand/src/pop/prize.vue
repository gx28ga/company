<style scoped>
    @import '../css/vue-pop.css';
	.modal-header{
        .title-bg{
            .bg1{ 
            background-size: contain;}
        }
    }
    .modal-body{
        .notStart{ text-align:center; 
            background: url('../images/prize.png') no-repeat; background-size: contain; color: #fff;
            p{ 
                span{ font-weight: bold; }
            }
            .info{ background: #ff8a07; margin: 0 auto; }
            .yue {
                color: #999999;
                p{ span{ color: #d72f2f; &.big{  } } }
            }
        }
    }
    .modal-footer{
        .btn.home{ 
             background-size: contain;
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
    <div slot="header" class='title-bg img-size' data-marginTop='25' data-width='391' data-height='79'>
        <i class='bg1 img-size' data-width='121' data-height='49'></i>
    </div>
    <div slot='body' class='notStart img-size' data-width='650' data-height='762' data-fontSize='34'>
        <p class="img-size" data-paddingTop='184'>获得<span class='img-size' data-fontSize='56'>3.28</span>元收益</p>
        <div class="info img-size" data-marginTop='28' data-width='565' data-lineHeight='50' data-borderRadius='30'>您可用于投资以下新手专享标</div>
        <div class="yue img-size" data-marginTop='70'>
            <p>预期年化</p>
            <p><span class='img-size' data-fontSize='83'>12.</span><span class='img-size' data-fontSize='56'>0%</span></p>
            <p><span>100</span>元起投　　<span>30</span>天期限</p>
        </div>
        <div class="info img-size" data-marginTop='24' data-width='530' data-lineHeight='75' data-borderRadius='50' style="background: #fe6634;" @click='toHome'>
            立即投资
        </div>
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    export default {
        components : {
            pop
        },
        mounted(){
            T.setImgSize();
            T.getAppInfo();
        },
        props : {
            transition : String,
            closeCallback : Function,
            status : Number,
            product : Number,
            type : Number,
            rookie : Boolean
        },
        methods : {
            toHome: function(){
                var self = this;
                if(T.wap){
                    window.location.href='http://app.duorongcf.com';
                }else{
                    if(self.rookie == true){
                        window.location.href="jump://page=9?product="+self.product+"&type="+self.type+"";
                    }else{ 
                        window.location.href='jump://page=1?';
                    }
                }
            }
        }
    }
</script>