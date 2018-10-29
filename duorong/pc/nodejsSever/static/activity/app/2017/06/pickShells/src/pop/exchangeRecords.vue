<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.record-list{
        .modal-container.pop-cnt{
            max-width:none;
            @include contain('../images/self/ex-records-pop-bg.png');
            position: relative;
            .method-desc{
                position: absolute;
                left: 7.085346215781%;
                /*top: 28.90932982917214%;    !* 199px *!*/
                top: 26.57004830917874%;    /* 165px */
                /*width: 88.08373590982287%;*/
                width: 85.829307568438%;
                /*height: 10.51248357424442%;*/
                height: 12.88244766505636%;
                /*font-size: .636rem;*/
                font-size: .612rem;
                /*text-align: center;*/
                color: #FF4A00;
                overflow-y: scroll;
            }
            .record-list-wrapper{
                position: absolute;
                top: 50%;
                left: 9%;
                width: 87.11755233494364%;
                height: 28.25229960578187%;
                /*overflow-y: scroll;*/
                color: #000;
                font-size: .7rem;
                line-height: 1.24rem;
                table {
                    width: 100%;
                    tr {
                        td{
                            text-align: left;
                        }
                    }
                }
            }
            .pager-wrapper{
                position: absolute;
                bottom: 7.22733245729304%;
                left: 29.79066022544283%;
                height: 4.86202365308804%;
                color: #999;
                font-size: .7rem;
                .block{
                    float: left;
                    border: 1px solid #EBEBEB;
                    line-height: 1.1rem;
                    text-align: center;
                    padding: 0 .3rem;
                    margin: 0;
                }
                .active{
                    color: #333;
                }
                .current{
                    @extend .block;
                    color: #333;
                    background: #EBEBEB;
                }
                .total{
                    float: left;
                    line-height: 1.1rem;
                    margin-left: .5rem;
                }
            }
        }   
        .close{ width:$s50; height:$s50; background:none;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask record-list" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-paddingTop='126' data-paddingLeft='50' data-width='621' data-height='761' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <!--<div class="method-desc">排名所获得的2.3%加息券将自动发放到您的账户，实物奖品于活动结束后15个工作日内联系发放</div>-->
                <div class="method-desc">排名所获得的2.3%加息券将于活动结束后3个工作日发放到您的账户，实物奖品于活动结束后15个工作日内联系发放</div>
                <div class="record-list-wrapper">
                    <table>
                        <tr v-for="item in curPageData">
                            <td width="45%">{{item.giftName}}</td>
                            <td width="55%">{{item.addTime | convertTimestampToDatetime}}</td>
                        </tr>
                    </table>
                </div>
                <div class="pager-wrapper">
                    <div :class="['block', curPageNo > 1 ? 'active' : '']" @click="onPager(-1)">上一页</div>
                    <div class="current">{{curPageNo}}</div>
                    <div :class="['block', curPageNo < pageCnt ? 'active' : '']" @click="onPager(+1)">下一页</div>
                    <div class="total">共{{pageCnt}}页</div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            exchangeRecords : {
                type : Array,
                default : []
            }
        },
        data(){
            return{
                showModal : true,
                pageSize : 5,
                curPageNo : 1,
                curPageData : []
            }
        },
        computed : {
            pageCnt : function () {
                return Math.ceil(this.exchangeRecords.length / this.pageSize) || 1;
            }
        },
        filters: {
            convertTimestampToDatetime : function (input) {
                let dateObj = new Date(input);
                if (!dateObj) return input;
                return dateObj.Format('yyyy-MM-dd hh:mm:ss');
            }
        },
        mounted(){
            T.setImgSize();
            this.curPageData = this.exchangeRecords.slice(0, this.pageSize);
        },
        methods : {
            closePropagtion : function( e ){
                e.stopPropagation();
            },
            showPop : function(callback){
                this.showModal = true;
                if($.type(callback) == 'function'){
                    setTimeout(callback,550)
                }
            },
            closePop : function(callback){
                this.showModal = false;
                T.getPop(callback);
                bus.$emit('closePopEvent');
            },
            onBackHome : function() {
                this.closePop();
                T.callApp.home();
            },
            onPager : function (offset) {
                if (this.curPageNo <= 1 && offset < 0) return false;
                if (this.curPageNo >= this.pageCnt && offset >= 0) return false;
                this.curPageNo += offset;
                let start = (this.curPageNo - 1) * this.pageSize;
                let end = start + this.pageSize;
                this.curPageData = this.exchangeRecords.slice(start, end);
            }
        }
    }
</script>