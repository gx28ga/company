/**
*@author bo.peng
*@createTime 04 2018/9/4
*@description 首页
*/
<template>
    <article>
        首页
    </article>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    @Component
    export default class Container extends Vue{
        @Prop() private msg!: string;
        mounted(){
            setTimeout(()=>{
                // @ts-ignore
                this.$pop({
                    title : "标题",
                    close : true,//是否显示关闭按钮
                    content : "密码过于简单",
                    icon : "icon1",//icon1 确定 2取消 3提示
                    transition : "shake-vertical",
                    footer : {
                        ok : "确定",//确定按钮
                        cancel : "取消", //取消按钮
                        okCallback : function(){}, //确定按钮事件
                        cancelCallback : function(){},//取消按钮事件
                    }
                });
            },560);
        }
    }
</script>

<style scoped>

</style>