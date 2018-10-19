<style scoped>
    .novice{
        background:#fff; overflow:hidden;
        .lookMore{
            color:#0084d7;
            text-align: center;
        }
      
    }
</style>
<template>
<article class='novice img-size' data-height='90' data-lineHeight='90'>
<router-link to='/problem'>
<div class='lookMore img-size' data-fontSize='32'>查看更多问题 &gt;</div>
</router-link> 
    
</article>
</template>
<script>
import requirePop from '../pop/requirePop.js';
import { mapState , mapGetters } from 'vuex';
export default {
    props : {
        
    },
    data (){
        return {
            data : null,
            list : []
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
        /*T.ajax({
            mobile : 
        },'M003').then(data=>{

        })*/
    },
    watch:{
        "userInfo"(){
            this.getRcomment();
        }
    },
    methods : {
        getRcomment(){
            const self = this;
        },
        gonovice(  ){
	        requirePop('tel')
        }
    }
}
</script>
