<style lang='sass' scoped>
    @import '../css/global.scss';
    .modal-mask.bet{
        .modal-container.pop-cnt{
            position: relative;
            background: #FFF;
            .mid-align{
                text-align: center;
            }
            .section{
                width: 100%;
                div{
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .title{
                color: #333;
                text-align: center;
                .deco-line{
                    border-top: 1px solid #333;
                }
            }
            .record-area,
            .pager-box,
            .no-data{
                position: absolute;
            }
            .record-area{
                .row div{
                    display: inline-block;
                    vertical-align: top;
                    text-align: center;
                    color: #333;
                }
                .left{
                    text-align: left!important;
                }
            }
            .pager-box{
                width: 100%;
                text-align: center;
                color: #014099;
                div{
                    display: inline-block;
                    vertical-align: bottom;
                }
                .nav.disable{
                    color: #BBB;
                }
            }
            .no-data{
                width: 100%;
                text-align: center;
                div{
                    display: inline-block;
                    background: #DCDCDC;
                    color: #014099;
                }
            }
        }
        .close{
            color: #222;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask bet">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='720' data-height="870" data-borderRadius="16" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='20' data-height='20' data-top='10' data-right='38' data-fontSize="64" data-lineHeight="40" @click='onClose'>&times;</div>
                </slot>
                <div class="img-size section title" data-marginTop="35" data-height="24">
                    <div class="img-size deco-line" data-width="50" data-height="0"></div><!--
                 --><div class="img-size" data-marginLeft="15" data-marginRight="15" data-fontSize="36" data-lineHeight="48">我的抽奖奖品</div><!--
                 --><div class="img-size deco-line" data-width="50" data-height="0"></div>
                </div>
                <template v-if="records.length > 0">
                <div class="record-area img-size" data-top="125" data-left="44">
                  <div v-for="(page, no) in rcdPages">
                    <div v-show="pgIndex == no" v-for="row in page" class="row img-size" data-fontSize="30" data-lineHeight="60">
                      <div class="img-size" :class="getContentLength(row.giftName) > 16 ? 'left' : ''" :data-width="getContentLength(row.giftName) > 16 ? 385 : 254" :data-marginRight="getContentLength(row.giftName) > 16 ? 0 : 130">{{row.giftName}}</div><!--
                   --><div class="img-size" data-width="248">{{row.addTime | transferTimeStr}}</div>
                    </div>
                  </div>
                </div>
                <div class="pager-box img-size" data-top="760">
                  <div class="nav img-size" :class="pgIndex <= 0 ? 'disable' : ''" data-fontSize="28" data-lineHeight="55" data-marginRight="50" @click="onNav(-1)">上一页</div><!--
               --><div class="img-size" data-fontSize="34" data-lineHeight="55">{{pgIndex + 1}} / {{rcdPageNum}}</div><!--
               --><div class="nav img-size" :class="pgIndex + 1 >= rcdPageNum ? 'disable' : ''" data-fontSize="28" data-lineHeight="55" data-marginLeft="50" @click="onNav(1)">下一页</div>
                </div>
              </template>
              <div v-show="records.length <= 0" class="no-data img-size" data-top="328">
                <div class="img-size" data-borderRadius="20" data-width="400" data-height="275" data-fontSize="28" data-lineHeight="275">暂无获奖记录</div>
              </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    const cRcdPgSize = 10;
    export default {
        props : {
            transition : String,
            records : Array
        },
        data(){
            return{
                showModal : true,
                waitTime: 500,
                pgIndex: 0
            }
        },
        computed : {
            rcdPageNum : function () {
                return Math.ceil(this.records.length / cRcdPgSize);
            },
            rcdPages : function () {
                let all = this.records;
                all.sort((a, b) => {
                    return b.addTime - a.addTime;
                });
                let pgnum = Math.ceil(all.length / cRcdPgSize);
                let pgs = [];
                let pgdata;
                for (let i = 0; i < pgnum; i++) {
                    pgdata = all.slice(i * cRcdPgSize, (i + 1) * cRcdPgSize);
                    pgs.push(pgdata);
                }
                return pgs.slice(0);
            }
        },
        filters: {
            transferTimeStr : function (input) {
                if (Number(input)) {
                    let dt = new Date(input);
                    return dt.Format('yyyy-M-d hh:mm');
                } else {
                    return '';
                }
            }
        },
        mounted(){
            T.setImgSize();
            setTimeout(() => {this.waitTime = 0;}, this.waitTime);
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
                if (this.waitTime > 0) return;
                this.showModal = false;
                T.getPop(callback);
            },
            onClose : function () {
                this.closePop(() => {
                    this.$emit("close-only-event");
                });
            },
            getContentLength(content){
                if(content == null) return 0;
                if(typeof content !="string"){
                    content += "";
                }
                return content.replace(/[^\x00-\xff]/g,"01").length;
            },
            onNav : function (offset) {
                let shift = this.pgIndex + offset;
                if (shift < 0 || shift + 1 > this.rcdPageNum) return;
                this.pgIndex = shift;
            },
        }
    }
</script>