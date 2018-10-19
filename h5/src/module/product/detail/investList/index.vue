/**
* 产品投资记录
* created by bo.peng 2018/5/8
* email:spion@qq.com
*/
<style scoped>
    .tab{
        flex:1;
        display:flex;
        flex-direction: column;
        height:100%;
        header{
            padding:5px 15px;
            font-size: 14px;
            color: #A0A0A0;
        }
        article{
            flex:1;
            padding:5px 0;
            padding-bottom:20px;
            background:#fff;
            overflow-y:auto;
            -webkit-overflow-scrolling: touch;
            ul{
                padding:0 15px;
            }
        }
        ul{
            display:flex;
            &:not(:last-child){
                border-bottom:.5px solid #ddd;
            }
            li{
                flex:1;
                padding:10px 0;
                line-height:20px;
            }
        }
    }
</style>
<template>
	<article class="investList">
        <div class="tab" v-if="list">
            <header>
                <ul>
                    <li>投资人</li>
                    <li>投资金额</li>
                    <li>投资时间</li>
                </ul>
            </header>
            <article>
                <ul v-if="list.length>0" v-for="item in list" :key="item.id">
                    <li>{{item.mobilePhone}}</li>
                    <li>{{item.amount}}元</li>
                    <li>{{item.investTime|formatDateAndMinute}}</li>
                </ul>
                <div v-if="list.length<1" style="padding:20px; text-align:center;">
                    没有投资记录
                </div>
            </article>
        </div>
    </article>
</template>

<script>
    import filter from "../../../../mixin/filters";
    import {mapGetters} from "vuex";
	export default {
        computed:{
            ...mapGetters({
                user : "getUserInfo",
                cath : "getCatch"
            })
        },
        filters:{
            formatDateAndMinute : filter.methods._formatDateAndMinute
        },
        data(){
            return{
                list : null
            }
        },
        mounted(){
            let data = this.cath.productData;
            if(!data){
                return this.go().product.home();
            }
            this.list = data.investList || [];
            this.setTitle({
                title : "投资记录("+this.list.length+")",
                show : true,
                back : true,
            });
            this.setNav({
                show : false
            })
        }
	}
</script>
