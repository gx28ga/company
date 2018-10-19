<style scoped>
    @import '../css/vue-pop.css';
   .rule{
       background:url("../images/rule.png") no-repeat;
       background-size:contain;
   }
</style>
<template>
    <pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
        <div slot="header" style="display:none"></div>
        <div slot='body' class='rule img-size' data-width='622' data-height="620">
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