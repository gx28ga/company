<style scope>
    
</style>
<template>
    <article class='an'>
        <bannerproblem></bannerproblem>   
        <problem></problem>
        <question1></question1>   
        <questionb></questionb>
    </article>
</template>
<script>
    import problem from "../problem/problem.vue";
    import question1 from "./question1.vue";
    import questionb from "../../components/footer.vue";
    import bannerproblem from "../../components/bannerproblem.vue";
    export default{
        mounted(){
            T.setImgSize();
        },
         components:{
            questionb,question1,problem,bannerproblem
        },
        methods:{
            
        }
    }
</script>
