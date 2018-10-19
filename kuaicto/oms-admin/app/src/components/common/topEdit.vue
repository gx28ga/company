/**
*  author : bo.peng
*  createTime 2018-10-18 14:30
*  description : 顶部操作栏
*/
<template>
    <div class="topEdit">
        <div class="edit-right">
            <slot name="right"></slot>
        </div>
        <div class="edit-left">
            <slot name="left"></slot>
        </div>
    </div>
</template>

<script>
  export default {
	name: "topEdit"
  }
</script>

<style scoped lang="less">
    .topEdit{
        .edit-left{
            float:left;
        }
        .edit-right{
            float:right;
        }
    }
</style>