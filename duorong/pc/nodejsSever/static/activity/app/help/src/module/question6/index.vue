<style scope>
    
</style>
<template>
    <article class='an'>
        <bannerproblem></bannerproblem>
        <problem></problem>
        <question6></question6>   
        <questionb></questionb>
    </article>
</template>
<script>
    import problem from "../problem/problem.vue";
    import question6 from "./question6.vue";
    import questionb from "../../components/footer.vue";
    import bannerproblem from "../../components/bannerproblem.vue";
    export default{
          mounted(){
            T.setImgSize();
        },
         components:{
            questionb,question6,bannerproblem,problem
        },
        methods:{
            
        }
    }
</script>
