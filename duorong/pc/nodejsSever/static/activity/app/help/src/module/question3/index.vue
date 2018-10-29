<style scope>
    
</style>
<template>
    <article class='an'>
        <bannerproblem></bannerproblem>   
        <problem></problem>
        <question3></question3>   
        <questionb></questionb>
    </article>
</template>
<script>
    import problem from "../problem/problem.vue";
    import question3 from "./question3.vue";
    import questionb from "../../components/footer.vue";
    import bannerproblem from "../../components/bannerproblem.vue";
    export default{
         components:{
            questionb,question3,problem,bannerproblem
        },
        methods:{
            
        }
    }
</script>
