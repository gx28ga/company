/**
* describe 交易对账
* Created by wangCuiqing
* Date: 2018/5/8
*/
<style scoped>
.transaction{
   .transactionTitle{
       background:#fff;
       display: flex;
       justify-content: center;
       align-items: center;
       color:#102542;
       .titleBox{
           text-align: center;
       }
       .arrow1{
           border-left:2px solid #D2D2D2;
           border-bottom:2px solid #D2D2D2;
           display: inline-block;
           transform: rotate(-45deg);
       }
       .bl{
           border-right:0.5px solid #D2D2D2;
       }
   }
    .transactionBox{
        background: #fff;
        justify-content: center;
        .zhi{
            background:url("../../../images/account/transaction/zhi.png") no-repeat;
            background-size:contain;
            float: left;
        }
        .shou{
            background: url("../../../images/account/transaction/shou.png") no-repeat;
            background-size:contain;
            float: left;
        }
        .nameAndTime{
            float: left;
            .name{
                color:#102542;
            }
            .time{
                color:#A0A0A0;
            }
        }
        .numberAndStatus{
            float:right;
            .number{
                color:#102542;
            }
            .status{
                color:#A0A0A0;
                text-align: right;
            }
        }
    }
    .more{
        padding:10px 0;
        i{ display:block; margin:0 auto; background:url(../../../images/common/loading.gif); background-size: contain; }
    }
}
</style>
<template>
    <article class="transaction" id="List">
        <div class="transactionTitle img-size" data-marginTop="1" data-marginBottom="1" data-paddingTop="32" data-paddingBottom="32">
            <div class="img-size titleBox bl" data-fontSize="24" data-width="374" @click="showPop">类型 <span class="arrow1 img-size" data-width="10" data-height="10" data-marginLeft="62"></span></div>
            <div class="img-size titleBox" data-fontSize="24" data-width="374">金额</div>
        </div>
        <no-record v-if="assetRecord.length==0"></no-record>
        <div class="transactionBox img-size" data-marginBottom="2" data-height="70" data-paddingTop="30" data-paddingBottom="30" data-paddingLeft="30" data-paddingRight="30" v-for="item in assetRecord" :key="item.id" v-else>
            <!--<div class="zhi img-size" data-width="60" data-height="60" data-marginRight="20" data-marginTop="10"></div>-->
            <div class="img-size"   :class="item.type==0?'zhi':'shou'" data-width="60" data-height="60" data-marginRight="20" data-marginTop="10"></div>
            <div class="nameAndTime img-size">
                <div class="name img-size" data-fontSize="36" v-text="tradeType(item.tradeType)"></div>
                <div class="time img-size" data-fontSize="24">{{new Date(item.addTime).Format("yyyy-MM-dd hh:mm:ss")}}</div>
            </div>
            <div class="numberAndStatus img-size">
                <div class="number img-size" data-fontSize="36">{{item.amount}}</div>
                <div class="status img-size" data-fontSize="24" v-text="type(item.status)"></div>
            </div>
        </div>
        <div class="more" v-show="showMore">
            <i class="img-size" data-width="100" data-height="100"></i>
        </div>
    </article>
</template>

<script>
    import {TRANSITION} from "../../../contant/urls/MYACCOUNT";
    import {mapGetters} from "vuex";
    import noRecord from "../../components/noRecord";
    export default {
        components:{
            noRecord
        },
        computed: {
        ...mapGetters({
                //tradeTypeNumber:"changeTradType",
                catch:"getCatch",
            }),
            type1(){
            return this.catch.changeTradType.type;
            }
        },
        data(){
            return{
                assetRecord:[],
                showMore:false,
            }
        },
        watch:{
            type1(){
                this.assetRecord=[];
                this.getList();
            }
        },
        mounted(){
            this.setImgSize();
            this.setTitle({
                show:true,
                title:"交易对账",
                back:true,
            });
            this.setNav({
                show:false,
            });
            this.getList();
        },
        methods:{
            showPop(){
                let self=this;
                require.ensure([],(require)=> {
                    self.$requirePop(require('./transation'), {
                            props : {} //弹窗内容相关属性
                        },
                        {
                            props: {//弹窗相关属性 同上面的 this.$Pop
                                obj: {
                                    title: "",
                                    close:false ,//是否显示关闭按钮
                                     superClass : "upPop",
                                    //superClass:"borderWarp"
                                    width:"100%"
                                },
                                transition:"down"
                            }
                        });
                });
            },
            type(item){//状态改变
                if(item==1){
                    return "处理中";
                }else if(item==2){
                    return "失败";
                }else if(item==3){
                    return "成功";
                }else if(item==4){
                    return "募集中";
                }
            },
            tradeType(item){//交易类型
                if(item==1){
                    return "充值";
                }else if(item==2){
                    return "提现";
                }else if(item==3){
                    return "投资";
                }else if(item==4){
                    return "活动";
                }else if(item==5){
                    return "手续费";
                }else if(item==6){
                    return "回款";
                }else if(item==7){
                    return "收益";
                }else if(item==8){
                    return "赎回";
                }
            },
            getList(){
                let self=this,
                    page=1,
                    pageOn=10,
                    //type=self.tradeTypeNumber,
                    type=self.catch.changeTradType.type,
                    loadding=true;
                function getInfoMation(){
                    if(loadding==false) return;
                    loadding=false;
                    self.showMore=true;
                    self.ajax({
                        url:TRANSITION,
                        data:{
                            tradeType:type,
                            pageOn:page,
                            pageSize:pageOn
                        }
                    }).then(data=>{
                        let list=data.map.page.rows;
                        loadding=true;
                        self.showMore=false;
                        if(!list || !list.length){
                            loadding=false;
                            return;
                        }
                        self.assetRecord=self.assetRecord.concat(list);
                        self.$nextTick(()=>{
                            self.setImgSize();
                            let box=$("#List");
                            if(!box.length) return;
                            box.unbind().on("scroll",function(){
                                let scrollHeight=box[0].scrollHeight,
                                    height=window.innerHeight;
                                if(!loadding) return;
                                let scrollTop=$(this).scrollTop()+height+100;
                                if(scrollTop>scrollHeight){
                                    if(loadding){
                                        loadding=true;
                                        page++;
                                        getInfoMation();
                                    }
                                }
                            })

                        })
                    })
                }
                getInfoMation();
            }
        }
    }
</script>
