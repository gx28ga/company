<style scoped>
    .navsider{
        padding:10px;
        overflow:hidden;
        ul{
            display:flex; flex-direction:row; flex-wrap: wrap;
            padding:10px 0; color:#bbb;
            li{ width:33%; margin:5px 0; border-right:1px solid #bbb; box-sizing:border-box; text-align:center;
                &:nth-child(3n+0){ border-right:none;}
            }
        }
        p{ text-align:center;}
    }
</style>
<template>
<article class='navsider'>
    <ul class='img-size' data-fontSize='24'>
        <li>128位SSL</li>
        <li>八道风控</li>
        <li>资金账户</li>
        <li>加密算法</li>
        <li>十层审核</li>
        <li>银行存管</li>
    </ul>
    <p class='img-size' data-fontSize='22'>资金账户由银行及第三方支付公司共同保障</p>
</article>
</template>
<script>
export default {
    data (){
        return {
            
        }
    },
    mounted(){
        
    },
    methods : {
        
    }
}
</script>