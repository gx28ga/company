<style scoped>
    .main{ flex:1; overflow-y:auto;}
</style>
<template>
<article class='main child-transition'>
    <banner></banner>
    <tab></tab>
    <qa></qa>
    <more></more>    
    <lala></lala>
</article>
</template>
<script>

import banner from '../components/banner.vue';//添加banner
import lala from "../components/footer.vue";//底部文字
import tab from '../components/tab.vue';
import qa from "../components/agreement.vue";
import more from "../components/more.vue";
export default {
    components : {
        banner,
        lala,
        tab,
        qa,
        more
    },
    data (){
        return {
            data : null,
            imgs : []
        }
    },
    mounted(){
        document.title = '新手帮助';
    /*    T.ajax({
            url:'/index/regAndInvestCount.do',
            callback : true,
        }).then(data=>{
        	console.log(data);
        });*/
        //T.goURL.call(this);
       /* let self = this;
        if(self.$route.query.reg){
            //T.go.login({reg:true});
        }*/
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
