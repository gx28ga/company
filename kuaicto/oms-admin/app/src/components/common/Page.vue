<template>
    <div class="com-page">
        <div class="com-page-header">
            <slot name="header"></slot>
        </div>
        <div class="com-page-body">
            <slot></slot>
        </div>
    </div>
</template>
<style scoped>
    .com-page-header{
        padding: 9px 15px 9px 15px;
        /* height:45px; */
        background-color:#F2F2F2;

        /*margin-left: 300px;*/
    }
    .com-page-body{
        padding: 15px;
        
    }
</style>
<style>
    .com-page-header .el-breadcrumb__inner{
        color:#666666 !important;
    }
</style>
<script>
    export default{
        name:'Page'

    }
</script>