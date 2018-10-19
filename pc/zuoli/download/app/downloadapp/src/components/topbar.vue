<style scoped>
    .topbar{
        background:#34aaff; overflow:hidden; 
        text-align: center;
        color:#fff; 
        .return{
            background: url("../images/limoney/left.png") no-repeat;
            background-size: contain;
            position: absolute;
            top:10px;
            left:30px;
        }
    }
</style>
<template>
<article class='topbar img-size' data-height='80' data-lineHeight='80' data-fontSize='36'>
    <div class='return img-size' data-width='20' data-height='35' @click='history'></div>
    {{titleName}}
</article>
</template>
<script>
import { mapState , mapGetters } from 'vuex';
export default {
    props : ["titleName"],
    data (){
        return {
            titleName:""
        }
    },
    computed : {
        ...mapState([
            'user'
        ]),
        ...mapGetters([
            'userInfo'
        ])
    },
    mounted(){
        const self = this;
    },
    methods : {
        history(){
            this.$router.go(-1);
        }
    }
}
</script>
