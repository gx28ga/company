<style scoped>
    @import '../css/global.css';
    .modal-header{
        .title-bg{
            
        }
    }
    .modal-body{
        .notStart{ text-align:center; background: url('../images/tanbg.png') no-repeat; background-size: contain;
            p{ @mixin font-size 18px; color: #ff5407;}
        }
        .hui{ background: url('../images/hui.png') no-repeat; background-size: contain; margin: 0 auto; @mixin font-size 14px; span{ display: block;float: left; color: #ff5407; } i{
            display: block;float: left;
            } }
        .jyb2{ background: url('../images/jybb.png') no-repeat; background-size: contain; display: block; }
        .close{ background: url('../images/close.png') no-repeat; background-size: contain; float: right; }
        .btn{ background: url('../images/again.png') no-repeat; background-size: contain; margin: 0 auto; }
        .back{ background: url('../images/back.png') no-repeat; background-size: contain; margin: 0 auto; }
        .cai{ @mixin font-size 14px;color: #fd46ff;}
    }
    .publicTips{
        display:flex;
        flex-direction:row;
        .cancel{
            margin-left:5px;
            padding: 0 20px;
            border-radius: 13px;
            background: linear-gradient(to bottom, #eee, #eee 40% , #ccc 55% , #ccc);
            color:#666;
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
    <div slot="header"></div><!--  v-html='content' -->
    <div slot='body' class='notStart img-size' data-width='662' data-height='624'>
        <div class="title img-size" data-fontSize='32' data-marginTop='196' data-marginLeft='100'>{{title}}</div>
        <div class="hui img-size" data-width='453' data-height='139' data-marginTop='54'><i class="jyb2 img-size" data-width='88' data-height='65' data-marginLeft='136' data-marginTop='34'></i><span class="img-size" data-lineHeight='78' data-fontSize='36' data-marginTop='34' data-paddingLeft='10'>{{count}}</span></div>
        <div id="back" class="btn img-size" data-width='358' data-height='73' data-marginTop='30' @click='again'></div>
        <div class="cai img-size" data-marginTop='24' @click='goHome'>{{chance>0?'返回活动首页':'您的次数已用完'}}</div>
    </div>
    <div slot='footer' class='submit publicTips img-size'>
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
            transition : String,
            status : Number,
            btnFn : Function,
            okTxt : String,
            content : String,
            closeCallback : Function,
            okCallback : Function,
            cancelTxt : {
                type: [String,Boolean],
                default: false,
            },
            cancelCallback : Function,
            count : Number,
            title : String,
            chance : Number,
            reStart : Function
        },
        mounted(){
            if(this.chance == 0){
                $('#back').removeClass('btn').addClass('back');
            }
        },
        methods : {
            close(){
                if(this.okCallback && this.okCallback() );
                this.$refs.pop.closePop();
            },
            cancel(){
                this.cancelCallback.call(this);
            },
            goHome :function(){
                this.$refs.pop.closePop(function(){
                    router.push(
                        { 
                            path: '/', 
                            query: { uid: T.uid , wap : T.wap}
                        }
                    )
                })
            },
            again : function(){
                const self = this;
                if(self.chance > 0){
                    self.$refs.pop.closePop(function(){
                        self.reStart();
                    })
                }
            }
        }
    }
</script>