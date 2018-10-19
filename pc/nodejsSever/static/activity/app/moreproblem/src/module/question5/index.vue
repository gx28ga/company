<style scope>
    
</style>
<template>
    <article class='an'>
        <bannerproblem></bannerproblem>
        <problem></problem>
        <question5></question5>   
        <questionb></questionb>
    </article>
</template>
<script>
    import problem from "../problem/problem.vue";
    import question5 from "./question5.vue";
    import questionb from "../../components/footer.vue";
    import bannerproblem from "../../components/bannerproblem.vue";
    export default{
          mounted(){
            T.setImgSize();
        },
         components:{
            questionb,question5,bannerproblem,problem
        },
        methods:{
            
        }
    }
</script>
