/**
* describe
* Created by wangCuiqing
* Date: 2018/5/7
*/
<style scoped>

</style>
<template>
    <article class="help">
        <question-title></question-title>
        <question-nav></question-nav>
        <help-bottom></help-bottom>
    </article>
</template>

<script>
    import helpBottom from "./common/helpBottom";
    import questionTitle from "./common/questionTitle";
    import questionNav from "./common/nav";
    export default {
        name: "question",
        components:{
            questionTitle,
            helpBottom,
            questionNav
        },
        mounted(){
            this.setImgSize();
            this.setTitle({
                show:true,
                title:"常见问题",
                back:true});
            this.setNav({
                show:false,
            })
        }
    }
</script>
