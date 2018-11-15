/**
*  author : bo.peng
*  createTime 2018-11-10 14:58
*  description : 首页
*/
<template>
    <article>
        首页
        <k-upload v-model="fileList"></k-upload>
    </article>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {KuploadObj} from "../common/Kupload";
    @Component
    export default class Home extends Vue {
        private fileList: KuploadObj[] = [];
    }
</script>

<style scoped>

</style>