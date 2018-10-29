<style scope>
    
</style>
<template>
    <article class='an'>
        <bannerproblem></bannerproblem>
        <problem></problem>
        <question7></question7>   
        <questionb></questionb>
    </article>
</template>
<script>
    import problem from "../problem/problem.vue";
    import question7 from "./question7.vue";
    import questionb from "../../components/footer.vue";
    import bannerproblem from "../../components/bannerproblem.vue";
    export default{
          mounted(){
            T.setImgSize();
        },
         components:{
            questionb,question7,bannerproblem,problem
        },
        methods:{
            
        }
    }
</script>
