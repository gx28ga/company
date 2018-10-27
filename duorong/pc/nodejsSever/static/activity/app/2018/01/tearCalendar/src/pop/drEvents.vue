<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.dr-event{
        .modal-container.pop-cnt{
            position: relative;
            background: #FFF;
            .sec-center,
            .event-wrapper{
                position: absolute;
            }
            .sec-center{
                width: 100%;
                text-align: center;
                div{
                    display: inline-block;
                }
                .title-bar{
                    background: #BA55FF;
                    color: #FFF;
                }
            }
            .event-wrapper{
                overflow-y: scroll;
                overflow-x: hidden;
                .row div{
                    display: inline-block;
                    vertical-align: top;
                    color: #171fc6;
                }
                .gift{color: #f5a616;}
                .year{
                    width: 100%;
                    text-align: center;
                    color: #171fc6;
                }
            }
        }
        .close{
            color: #000;
            text-align: center;
            font-weight: bold;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask dr-event" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='714' data-height='855' data-borderRadius="16" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' data-top='0' data-right='2' data-fontSize="40" data-lineHeight="40" @click='closePop'>&times;</div>
                </slot>
                <div class="sec-center img-size" data-top="50">
                    <div class="title-bar img-size" data-width="244" data-height="40" data-borderRadius="20" data-fontSize="20" data-lineHeight="40">多融大事记及对应奖品</div>
                </div>
                <div class="event-wrapper img-size" data-top="138" data-left="47" data-width="610" data-height="640">
                    <div class="year img-size" data-fontSize="22" data-lineHeight="50">2017年</div>
                    <div v-for="row in events2017" class="row img-size" data-marginBottom="18" data-fontSize="20" data-lineHeight="30">
                        <div class="img-size" data-width="100">{{row.date}}</div><!--
                     --><div class="img-size" data-width="510">{{row.event}}<br><span class="gift">{{row.gift}}</span></div>
                    </div>
                    <div v-for="year in eventsAfter">
                        <div class="year img-size" data-fontSize="22" data-lineHeight="50">{{year.year}}</div>
                        <div class="row img-size" data-marginBottom="18" data-fontSize="20" data-lineHeight="30">
                            <div class="img-size" data-width="100">{{year.date}}</div><!--
                         --><div class="img-size" data-width="250">{{year.event}}</div><!--
                         --><div class="img-size" data-width="260"><span class="gift">{{year.gift}}</span></div>
                        </div>
                    </div>
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
            boxType : Number,
            boxNum : Number
        },
        data(){
            return{
                showModal : true,
                events2017 : [
                    {date: '3月13日', event: '多融财富登陆上海地铁电视、东方卫视，宣扬”3·15"金融诚信', gift: '1.5%加息券'},
                    {date: '3月26日', event: '多融财富周年庆（2017）', gift: '50积分'},
                    {date: '4月1日', event: '多融财富单月交易金额突破2亿（3月）', gift: '5元JD卡'},
                    {date: '5月14日', event: '多融财富走进悦苗寄养园，关爱智障人士', gift: '10积分'},
                    {date: '6月17日', event: '多融财富举办2017第一届投资人交流会', gift: '30积分'},
                    {date: '7月4日', event: '多融财富荣膺2017国家金融科技高峰论坛”优秀企业”奖', gift: '50积分'},
                    {date: '7月14日', event: '多融财富”融爱计划”大凉山支教行动正式启程', gift: '30积分'},
                    {date: '7月19日', event: '多融财富与华瑞银行合作，正式接入银行存管', gift: '15元JD卡'},
                    {date: '8月24日', event: '多融财富应邀参加九寨沟赈灾慈善义卖活动', gift: '20积分'},
                    {date: '9月12日', event: '多融财富累计交易金额突破30亿', gift: '50积分'},
                    {date: '9月25日', event: '多融财富上线电子签章，携手”e签宝”打造安全有效的电子合同', gift: '15元JD卡'},
                    {date: '9月29日', event: '多融财富应邀参加“"两新”党建主题活动', gift: '10积分'},
                    {date: '10月12日', event: '多融财富受邀出席第一财经中国理财师大会', gift: '50积分'},
                    {date: '10月27日', event: '多融财富出席第四届财经风云榜展望投资市场', gift: '100积分'},
                    {date: '11月1日', event: '多融财富荣膺网贷之家10月互金平台成交量排名第99名，国资系第16名', gift: '15元JD卡'},
                    {date: '11月17日', event: '多融财富应邀参加2017互联网金融合规与创新论坛', gift: '200积分'},
                    {date: '12月4日', event: '多融财富发起青海"暖冬计划”公益活动', gift: '30积分'},
                    {date: '12月17日', event: '多融财富荣膺"最具社会责任感企业奖”', gift: '10元JD卡'}
                ],
                eventsAfter : [
                    {year: '2018年', date: '3月26日', event: '多融财富周年庆（2018）', gift: '50元JD卡'},
                    {year: '2019年', date: '3月26日', event: '多融财富周年庆（2019）', gift: '2000积分'},
                    {year: '2020年', date: '3月26日', event: '多融财富周年庆（2020）', gift: '飞利浦剃须刀'},
                    {year: '2021年', date: '3月26日', event: '多融财富周年庆（2021）', gift: '3000积分'},
                    {year: '2022年', date: '3月26日', event: '多融财富周年庆（2022）', gift: 'Kindle入门款'},
                    {year: '2023年', date: '3月26日', event: '多融财富周年庆（2023）', gift: '2.0%加息券'},
                    {year: '2024年', date: '3月26日', event: '多融财富周年庆（2024）', gift: 'LG趣拍得'},
                    {year: '2025年', date: '3月26日', event: '多融财富周年庆（2025）', gift: '5000积分'},
                    {year: '2026年', date: '3月26日', event: '多融财富周年庆（2026）', gift: '3000元JD卡+2.3%加息券'}
                ]
            }
        },
        mounted(){
            T.setImgSize();
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
            }
        }
    }
</script>