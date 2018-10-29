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
        .changetop{ background: url('../images/chantop.png') no-repeat; background-size: contain;  position: relative;
            .prizename{ color: #fff; position: absolute; left:0; } 
            .close{ background: url('../images/close.png') no-repeat; background-size: contain; position: absolute; right:0; margin:auto; }
        }
        .changebottom{ background: #fff;
            .hui{ background: url('../images/hui.png') no-repeat; background-size: contain; color: #ff5407; text-align: center; margin: 0 auto;}
            .zdl{ background: url('../images/zdl.png') no-repeat; background-size: contain; margin: 0 auto; }
         }
    }
</style>
<template>
<pop ref='pop' :transition='transition'>
    <div slot="header">
    </div>
    <div slot='body' class='winning-pop'>
        <div class="changetop img-size" data-width='560' data-height='325' data-fontSize='32'>
            <div class="prizename img-size" data-left='30' data-bottom='20'>兑换成功</div>
            <div class="close img-size" data-width='40' data-height='38' data-right='18' data-bottom='26' @click='close'></div>
        </div>
        <div class="changebottom img-size" data-width='560' data-paddingTop='50' data-paddingBottom='40' data-borderBottomLeftRadius='20' data-borderBottomRightRadius='20'>
            <div class="hui img-size" data-width='453' data-height='139' data-fontSize='36' data-lineHeight='139'>恭喜你获得了{{name | nam}}方财神</div>
            <div class="zdl img-size" data-width='357' data-height='73' data-marginTop='45' @click='close'></div>
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
        props : {
            name:String
        },
        filters: {
            nam(type){
                if(type == 'east'){ return "东"; }
                if(type == 'south'){ return "南"; }
                if(type == 'west'){ return "西"; }
                if(type == 'north'){ return "北"; }
            }
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
            close(){
                this.$refs.pop.closePop(function(){
                    window.location.reload();
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