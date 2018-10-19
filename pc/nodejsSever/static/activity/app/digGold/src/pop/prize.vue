<style scoped>
    @import '../css/global.css';
    .modal-mask{
       .modal-header{
            .title-bg{
            }
        }
        .modal-body{
            .winning-pop{
                padding:0 $s20;
                h2{ color:#fff600; text-align:center;}
                p{ text-align:center; }
            }
        }
        .prize{ background: url('../images/facetan.png') no-repeat; background-size: contain; position: relative;
            .prizename{ position: absolute;text-align: center; left:0; right: 0; margin: auto; }
            .close{ position: absolute; left: 0 ; right:0; margin:auto; }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition'>
    <div slot="header" class='title-bg img-size' data-marginTop='25' data-width='391' data-height='79'>
        <!-- <i class='bg1 img-size' data-width='189' data-height='49'></i> -->
    </div>
    <div slot='body' class='winning-pop'>
        <div class="prize img-size" data-width='560' data-height='781'>
            <div class="close img-size" data-width='100' data-height='60' data-bottom='20' @click='tobody'></div>
            <div class="prizename img-size" data-bottom='230' data-fontSize='36'><span>{{count}}</span><span>{{type | typ}}</span></div>
        </div>
    </div>
    <!-- <div slot='footer' class='submit img-size' data-marginTop='20'> -->
        <!-- <div class="btn img-size" data-width='327' data-height='60' data-lineHeight='60' @click='close'>OK，我知道了</div> -->
    <!-- </div> -->
</pop>
</template>
<script>
    import pop from './pop.vue';
    export default {
        computed : {
        },
        components : {
            pop
        },
        data(){
            return {

            }
        },
        filters: {
            typ(num){
                if(num == 1){ return "元红包"; }
                if(num == 2){ return "%加息券"; }
                if(num == 3){ return "体验金"; }
                if(num == 4){ return "翻倍券"; }
                if(num == 5){ return "实物奖励"; }
                if(num == 6){ return "积分"; }
            }
        },
        props : {
            transition : String,
            type:Number,
            count:String
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
            close(){
                this.$refs.pop.closePop();
            },
            tobody(){
                this.$refs.pop.closePop(function(){
                    router.replace(
                        { 
                            path: 'main', 
                            query: { uid: T.uid , wap : T.wap}
                        }
                    )
                });
            }
        }
    }
</script>