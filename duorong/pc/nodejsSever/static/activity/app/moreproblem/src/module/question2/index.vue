<style scope>
    
</style>
<template>
    <article class='an'>
        <bannerproblem></bannerproblem>  
        <problem></problem>
        <question2></question2>   
        <questionb></questionb>
    </article>
</template>
<script>
    import problem from "../problem/problem.vue";
    import question2 from "./question2.vue";
    import questionb from "../../components/footer.vue";
    import bannerproblem from "../../components/bannerproblem.vue";
    export default{
     mounted(){
            T.setImgSize();
        },
         components:{
            questionb,question2,problem,bannerproblem
        },
        methods:{
            
        }
    }
</script>
