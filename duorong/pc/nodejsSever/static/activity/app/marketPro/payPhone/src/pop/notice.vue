<style scoped>
    @import '../css/vue-pop.css';
	.modal-header{
        .title-bg{ background: url('../images/tibg.png') no-repeat; background-size: contain;
            .title{ letter-spacing: 1px; }
            .close{  background: url('../images/close.png') no-repeat; 
            background-size: contain;}
        }
    }
    .modal-body{
        .notStart{ 
            text-align:center; 
            background:#fff; color: #333;
            p{ span{color: #ff8247;} }
        }
    }
    .submit{ background: #fff; border-top: 1px solid #ccc;color: #666;text-align: center; }
    .modal-footer{color: #666;
    }
</style>
<template>
    <pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
        <div slot="header" class='title-bg img-size' data-width='550' data-height='90'>
            <div class="title img-size" data-fontSize='36'>{{title}}</div>
            <i v-show='showclose' class='close img-size' data-width='31' data-height='31' data-right='11' data-top='11'></i>
        </div>
        <div slot='body' class='notStart img-size' data-width='550' data-fontSize='30' data-paddingTop='45' data-paddingBottom='45'>
            <p v-show='zccg==false' class="img-size" data-lineHeight='80'>{{msg}}</p>
            <p v-show='zccg==true' class="img-size" data-lineHeight='80'>恭喜您已经成功领取<span>1588元红包</span><br>立即前往体验12%新手高息月标</p>
        </div>
        <div v-show='showDown==true' slot='footer' class='submit img-size' data-width='550' data-borderBottomLeftRadius='8' data-borderBottomRightRadius='8'>
            <a v-show='showDown==true' class='subbtn img-size' data-lineHeight='74' href="http://www.duorongcf.com/html/activity/2weima.html" target="_blank">{{btn}}</a>
        </div>
        <div v-show='showDown==false' slot='footer' class='submit img-size' data-width='550' data-borderBottomLeftRadius='8' data-borderBottomRightRadius='8' @click='submit'>
            <div class='subbtn img-size' data-lineHeight='74'>{{btn}}</div>
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
            okCallback : Function,
            title : String,
            msg : String,
            btn : String,
            showclose : Boolean,
            showDown :Boolean,
            zccg :Boolean,
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
            },
            submit : function(){
                if(this.okCallback){
                    this.$refs.pop.closePop();
                    this.okCallback.call(this);
                }else{
                    this.$refs.pop.closePop();
                }
            }
        }
    }
</script>