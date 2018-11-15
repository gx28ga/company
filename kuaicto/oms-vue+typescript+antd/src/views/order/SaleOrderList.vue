/**
*  author : Lxh
*  createTime 2018-11-14
*  description : 订单列表
*/
<template>
    <k-page>
        <!-- 编辑页 -->
        <order-top-edit @searchEvent="searchEvent" slot="edit"/>
        <!-- end 编辑页 -->
        <!-- 列表页 -->
        <div slot="list">
            <a-table v-if="list.length" :dataSource="list" :columns="columns" size="middle">
                <template slot="createTime" slot-scope="text, record">
                    {{text | datetimeFilter}}
                </template>
                <template slot="originTotalAmount" slot-scope="text, record">
                    {{text | currency}}
                </template>
                <template slot="finalTotalAmount" slot-scope="text, record">
                    {{text | currency}}
                </template>
                <template slot="edit" slot-scope="text, record">
                    <a href="#" class="edit">详情</a>
                </template>
                
            </a-table>
        </div>
    </k-page>
</template>

<script lang="ts">
    import SaleOrderList from "@/controller/order/SaleOrderList";
    export default SaleOrderList;
</script>

<style scoped>

</style>