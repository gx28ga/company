<template>
    <div class="com-pages">
        <div class="com-page-headers">
            <slot name="header"></slot>
        </div>
    </div>
</template>
<style scoped>
    .com-pages{
        width: 90%;
        min-height: 18px;
        display: inline-block;
        border: 1px solid gainsboro;
        margin-top: 30px;
        text-align: center;
    }
    .com-page-headers{
        display: inline-block;
        padding: 50px 15px;
        width: 100%;
        /*margin-left: 300px;*/
    }

</style>
<script>
    export default{
        name:'page'

    }
</script>