/**
* 头部
* created by bo.peng
* email:spion@qq.com
*/
<style scoped>
header{
    background: #FE7634;
    font-size:12px;
    color:#fff;
    text-align:center;
}
.price{
    position:relative;
    .num{
        display:inline-block;
        position:relative;
        sub{
            position:absolute;
            bottom:0;
        }
    }
    .tag{
        position:absolute;
        top:0;
        display:inline-block;
        vertical-align:top;
        background:url("../../../../images/product/jiaxi2.png") no-repeat;
        background-size:contain;
    }
}
.tags{
    span{
        display:inline-block;
        padding:1px 2px;
        border: .5px solid #FFFFFF;
    }
}
aside{
    ul{
        height:100%;
        background: rgba(255,255,255,0.15);
        display: flex;
        flex-direction:row;
        align-items:center;
        li{
            flex:1;
        }
    }
}
</style>
<template>
	<header class="img-size" data-marginBottom="20">
        <p v-if="data.activitiesTitle">{{data.activitiesTitle}}</p>
        <p v-if="data.marketingContent">{{data.marketingContent}}</p>
        <div class="price">
            <div class="num img-size" data-marginLeft="-75" data-height="130">
                <em class="img-size" data-fontSize="144">{{data.rate}}</em>
                <sub class="img-size" data-fontSize="32" data-right="-46" data-bottom="5">%</sub>
                <div class="tag img-size" data-right="-150" data-top="35"
                     v-if="data.activityRate || data.activityRate!=0"
                     data-width="138" data-height="48" data-lineHeight="48">+{{data.activityRate}}%</div>
            </div>
            <p>历史年化收益率</p>
        </div>
        <div v-if="showTag" class="tags img-size" data-fontSize="20" data-paddingTop="20">
            <span v-if="data.isCash==1">红包</span>
            <span v-if="data.isInterest==1">加息券</span>
            <span v-if="data.isDouble==1">翻陪券</span>
            <span v-if="data.isExclusive==1">专属加息券</span>
            <span v-if="data.activityRate!=0">活动</span>
            <span v-if="data.drProductTags && data.drProductTags.length"
                  v-for="item in data.drProductTags" :key="item.id">
                        {{item.name}}
                    </span>
        </div>
        <aside class="img-size" data-height="120" data-lineHeight="40" data-marginTop="40">
            <ul>
                <li>
                    <div class="text img-size" data-fontSize="32">{{data.deadline}}天</div>
                    <p>投资期限</p>
                </li>
                <li>
                    <div class="text img-size" data-fontSize="32">{{data.surplusAmount|maxfilter}}</div>
                    <p>剩余可投(元)</p>
                </li>
                <li>
                    <div class="text img-size" data-fontSize="32">{{data.amount|maxfilter}}</div>
                    <p>总额(元)</p>
                </li>
            </ul>
        </aside>
    </header>
</template>

<script>
    import filter from "../../../../mixin/filters";
	export default {
	    props:["data"],
        data(){
	        return{
	            showTag : false
            }
        },
        filters:{
            maxfilter(val){
                return filter.methods._maxfilter(10000,val);
            }
        },
		mounted(){
	       this.getData();
        },
        methods : {
	        getData(){
                let data = this.data;
                this.showTag = (data.isCash===1 || data.isInterest===1 || data.isDouble===1 || data.isExclusive===1 || data.activityRate===1);
                this.$nextTick(()=>{
                    this.setImgSize();
                });
            }
        }
	}
</script>
