<style>
    .LoginAndReg{
        background:#fff;
        header{
            background-image:url(../../images/login/bg.png);
            background-size: contain;
            background-repeat: no-repeat;
            overflow: hidden;
            .return{ color:#fff;
                border: .5px solid #fff;
                float: left;
                padding: 0 12px;
                border-radius: 14px;
            }
        }
        nav{ border-bottom: .5px solid #ddd;
            display:flex;
            justify-content: center;
            align-items: center;
            li{ flex:1;
                color:#999;
                text-align: center;
                &.current{ color:#00C6A8;
                    span{ display: inline-block; height:100%; box-sizing:border-box;
                        border-bottom: 2px solid #00C6A8;
                    }
                }
            }
        }
        .content{ overflow: hidden;}

    }
</style>
<template>
<article class='child-transition LoginAndReg'>
  <bannerproblem></bannerproblem>
  <problem></problem>
  <question></question>
  <lala></lala>
</article>
</template>
<script>
    import requirePop from '../../pop/requirePop.js';
    import problem from './problem.vue';
    import question from './question.vue';
    import lala from "../../components/footer.vue"
     import bannerproblem from "../../components/bannerproblem.vue";
    export default {
        components:{
            problem,lala,bannerproblem,question
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
