/**
*  author : wangcheng
*  createTime 2018-11-14
*  description : 商家列表模板
*/
<template>
    <k-page>
        <!-- 编辑页 -->
        <trader-top-edit @searchEvent="searchEvent" slot="edit"/>
        <!-- end 编辑页 -->
        <!-- 列表页 -->
        <div slot="list">
            <a-table v-if="list.length" :dataSource="list" :columns="columns" size="middle">
                <template slot="switch" slot-scope="text, record">
                    <a-switch defaultChecked/>
                </template>
                <template slot="address" slot-scope="text, record">
                <span v-if="text">{{text.provinceName}}/{{text.cityName}}/{{text.countyName}}</span>
                </template>
                <template slot="time" slot-scope="text, record">
                    {{text|dateFilter}}
                </template>
                <template slot="status" slot-scope="text, record">
                    {{text ? '正常' : '禁用'}}
                </template>
                <template slot="edit" slot-scope="text, record">
                    <a href="#" class="edit" @click="edit(record)">详情</a>
                </template>
            </a-table>
        </div>
        <!-- end 列表页 -->
    </k-page>
    
</template>
<script lang="ts">
    import TraderList from "@/controller/trader/TraderList";
    export default TraderList;
</script>

<style scoped>

</style>