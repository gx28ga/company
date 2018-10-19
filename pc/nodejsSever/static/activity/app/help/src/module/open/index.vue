<style>
    .LoginAndReg{
        background:#fff;
    }
</style>
<template>
<article class='child-transition '>
  <banner></banner>
  <open></open>
  <bottom></bottom>
</article>
</template>
<script>
    import requirePop from '../../pop/requirePop.js';
    import open from './open.vue';
    import bottom from "../../components/bottom.vue";
    import banner from "../../components/banner.vue";
    export default {
        components:{
        open,bottom,banner
        },
        data(){
            return {
                transition : 'left'
            }
        },
        beforeRouteEnter (to, from, next) {
            $("body").css({background:'#fff'})
            next();
        },
        beforeRouteLeave (to, from, next) {
            $("body").css({background:'#eee'})
            next();
        },
        mounted(){
            this.$parent.showNav = false;
            T.setImgSize();
            this.setTab(true);
            this.home();
        },
        methods : {
            home(){
            },
            setTab(b){
                let query = this.$route.query;
                this.setTransition(b);
                if(b==true){
                    this.reg = true;
                    query.reg = true;

                }else{
                    this.reg = false
                    delete query.reg;

                }
            },
            setTransition(b){
                this.transition = b==true?'right':'left';
            }
        }
    }
</script>
