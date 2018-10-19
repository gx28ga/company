<style scoped>
    .experience{
        position:relative;
        margin:0 auto 10px;
        background: url("../../images/novice_bg.png") no-repeat;
        background-size:contain;
        box-sizing:border-box;
        color:#fff;
        h2{ display:flex;  flex-direction:row; align-items: center;}
        .tag{ border:.5px solid #fff; padding:3px; border-radius:2px; font-weight: normal;}
        .Investment{
            position:absolute;
            background:#E94F37;
            padding:10px; border-radius:100%;
            border:1px solid #ccc;
            text-align:center;
        }
    }
</style>
<template>
    <article class='experience img-size' data-paddingLeft="130" data-paddingTop="35" data-width="700" data-height="170">
        <h2 class="img-size" data-height="60" data-lineHeight="60">
            <div class="title img-size" data-fontSize="40">体验标</div>
            <div class="tag img-size" data-marginLeft="50" data-fontSize="24" data-height="24" data-lineHeight="24">仅体验金可投</div>
        </h2>
        <p class="img-size" data-fontSize="24">预期3日收益20元，秒获收益</p>
        <div @click="detail" class="Investment img-size" data-width="80" data-height="80" data-top="20" data-right="40" data-fontSize="30">立即<br>投资</div>
    </article>
</template>
<script>
    import requirePop from '../../pop/requirePop.js';
    import { mapState , mapGetters } from 'vuex';
    export default {
        data(){
            return {
                list : [],
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
            T.setImgSize();
        },
        methods : {
            detail(){
	            requirePop('tel')
            },
        }
    }
</script>