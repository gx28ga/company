<style scope>
    
</style>
<template>
    <article class='an'>
        <bannerproblem></bannerproblem>
        <problem></problem>
        <question4></question4>   
        <questionb></questionb>
    </article>
</template>
<script>
    import problem from "../problem/problem.vue";
    import question4 from "./question4.vue";
    import questionb from "../../components/footer.vue";
    import bannerproblem from "../../components/bannerproblem.vue";
    export default{
          mounted(){
            T.setImgSize();
        },
         components:{
            questionb,question4,bannerproblem,problem
        },
        methods:{
            
        }
    }
</script>
