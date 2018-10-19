/**
* desc:
* created by bo.peng 2018/6/13.
* email:spion@qq.com
*/
<template>
    <div class="error404">
        <img class='img' src='../../images/404/404.jpg'>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.setTitle({
                title : "关于我们",
                show:true
            });
            this.setNav({
                show:false
            })
        }
    }
</script>

<style scoped>
    .error404{
        background:#fff;
        img{
            width:100%;
        }
    }
</style>
