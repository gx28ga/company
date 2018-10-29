<style scoped>
    .main{ flex:1; overflow-y:auto;}
    .banner{
        position:relative; z-index:1; margin-bottom:10px; overflow:hidden;
        .effect{
            width:100%; height:100%;
            .option{
                float:left; width:100%; height:100%;
                background-size:cover; background-position:center 0; background-repeat:no-repeat;
            }
        }
        .li{
            position:absolute; left:0; bottom:10px; width:100%;
            ul{ text-align:center;
                li{ display:inline-block; width:7px; height:7px; margin:0 5px; border-radius:100%; background:rgba(255,255,255,.5);
                    &.current{ background:rgba(255,255,255,1)}
                }
            }
        }
    }
</style>
<template>
<article class='main child-transition'>
    <experience></experience>
    <advantage></advantage>
    <novice></novice>
    <nav-Sider></nav-Sider>
</article>
</template>
<script>
import novice from '../components/novice.vue';
import advantage from './home/advantage.vue';
import navSider from '../components/navSider.vue';
import experience from './home/experience_down.vue';
export default {
    components : {
        novice,
        advantage,
        navSider,
        experience
    },
    data (){
        return {
            data : null,
            imgs : []
        }
    },
    mounted(){
        document.title = '安全保障';
        //T.goURL.call(this);
        let self = this;
        if(self.$route.query.reg){
            //T.go.login({reg:true});
        }
        T.setImgSize();
    },
    methods : {
        addlink(obj){
            if(obj.linkUrl){
                window.location.href = obj.linkUrl;
                /*if(this.$store.state.user.customerId){
                }else{
                    T.go.login({reg:"true"})
                }*/
            }
        }
    }
}
</script>
