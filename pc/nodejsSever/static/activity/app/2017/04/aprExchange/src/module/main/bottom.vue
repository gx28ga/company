<style lang='sass'>
	@import '../../css/global.scss';
    @import "../../css/bottom.scss";
	.bottom{
        @include contain('../../images/new/bottom/btm-bg.jpg'); position: relative;
        .prize-mask{
            position: absolute; left: 7.3%; top: -1.8%;
            @include contain('../../images/new/bottom/prize-mask.png');
            opacity: 1;
        }
        .prize-mask::after{
            content: '';
            width: 0;
            height: 100%;
        }
        .grades{
            position: absolute; left: 12.666667%; bottom: 11.196319%; height: /*81.5439672801636%;*/86.48%; width: 14.4%; padding: 0;
            @include box; @include box-orient;/*@include flex-direction; @include justify-content(space-between);*/
            @include font-size(11px); color: #000;
            .grade-num{
                z-index: 3;
                @include flex;
                position: relative;
                span{
                    display: inline-block;
                    line-height: 11px;
                    position: absolute;
                    bottom: 0;
                }
            }
        }
        .visual-grades{
            @extend .grades;
            .water-mark{
                position: absolute; bottom: 0;
                width: 100%;
                @include size(border-radius, 12px);
                @include linear(rgb(175, 126, 226), rgb(160, 146, 243));
            }
            .g01{
                @extend .water-mark;
                height: $waterInitHeight;
            }
            .g02{
                @extend .water-mark;
                height: $waterInitHeight + $waterOffsetHeight * 1;
            }
            .g03{
                @extend .water-mark;
                height: $waterInitHeight + $waterOffsetHeight * 2;
            }
            .g04{
                @extend .water-mark;
                height: $waterInitHeight + $waterOffsetHeight * 3;
            }
            .g05{
                @extend .water-mark;
                height: $waterInitHeight + $waterOffsetHeight * 4;
            }
            .g06{
                @extend .water-mark;
                height: $waterInitHeight + $waterOffsetHeight * 5;
            }
            .g07{
                @extend .water-mark;
                height: $waterInitHeight + $waterOffsetHeight * 6;
            }
            .g08{
                @extend .water-mark;
                height: $waterInitHeight + $waterOffsetHeight * 7;
            }
            .g09{
                @extend .water-mark;
                height: $waterInitHeight + $waterOffsetHeight * 8;
            }
            .g10{
                @extend .water-mark;
                height: $waterInitHeight + $waterOffsetHeight * 9;
            }
            .g11{
                @extend .water-mark;
                height: $waterInitHeight + $waterOffsetHeight * 10;
            }
            .g12{
                @extend .water-mark;
                height: $waterInitHeight + $waterOffsetHeight * 11;
            }
            .g13{
                @extend .water-mark;
                height: $waterInitHeight + $waterOffsetHeight * 12;
            }
            .g14{
                @extend .water-mark;
                height: $waterInitHeight + $waterOffsetHeight * 13;
            }
        }
        .img-locked{
            opacity: 0.7;
        }
        .lock-wraper{
            position: absolute; top: 2.07%; left: 59.26%; width: 30.3%; /*height: 80.2%;*/height: 86.6%; padding: 0;
            /*@include display; @include flex-direction; @include justify-content(space-between);*/
            @include box; @include box-orient;
            .lock-item{@include contain("../../images/new/bottom/locked.png");
                width: 100%; /*height: 8.2%;*/height: 6.8%;
                opacity: 0.7;
                @include flex;
            }
            .unlock {
                /*visibility: hidden;*/
                opacity: 0;
                cursor: pointer;
            }
        }
        .your-pos{
            @include box; @include boxMiddle; @include boxCenter(end);
            width: 27.73333333333333%; height: 5.63737938039614%; text-align: right;
            .label-wraper{display: inline-block; margin-right: $s4; @include font-size(7px); color: #000;}
            .img-wraper{@include contain("../../images/new/bottom/portrait.png");}
        }
        .nopos{display : none;}
        .pos01{@extend .your-pos; position: absolute; bottom: $yourPosTopInit; left: $yourPosLeft;}
        .pos02{@extend .your-pos; position: absolute; bottom: $yourPosTopInit + $posTopOffset * 1; left: $yourPosLeft;}
        .pos03{@extend .your-pos; position: absolute; bottom: $yourPosTopInit + $posTopOffset * 2; left: $yourPosLeft;}
        .pos04{@extend .your-pos; position: absolute; bottom: $yourPosTopInit + $posTopOffset * 3; left: $yourPosLeft;}
        .pos05{@extend .your-pos; position: absolute; bottom: $yourPosTopInit + $posTopOffset * 4; left: $yourPosLeft;}
        .pos06{@extend .your-pos; position: absolute; bottom: $yourPosTopInit + $posTopOffset * 5; left: $yourPosLeft;}
        .pos07{@extend .your-pos; position: absolute; bottom: $yourPosTopInit + $posTopOffset * 6; left: $yourPosLeft;}
        .pos08{@extend .your-pos; position: absolute; bottom: $yourPosTopInit + $posTopOffset * 7; left: $yourPosLeft;}
        .pos09{@extend .your-pos; position: absolute; bottom: $yourPosTopInit + $posTopOffset * 8; left: $yourPosLeft;}
        .pos10{@extend .your-pos; position: absolute; bottom: $yourPosTopInit + $posTopOffset * 9; left: $yourPosLeft;}
        .pos11{@extend .your-pos; position: absolute; bottom: $yourPosTopInit + $posTopOffset * 10; left: $yourPosLeft;}
        .pos12{@extend .your-pos; position: absolute; bottom: $yourPosTopInit + $posTopOffset * 11; left: $yourPosLeft;}
        .pos13{@extend .your-pos; position: absolute; bottom: $yourPosTopInit + $posTopOffset * 12; left: $yourPosLeft;}
        .pos14{@extend .your-pos; position: absolute; bottom: $yourPosTopInit + $posTopOffset * 13; left: $yourPosLeft;}

        .remark{
            position: absolute; bottom: 0; width: 100%; height: 5.8%; color: #7E55CE;
            @include box; @include boxMiddle; @include boxCenter;
            .content-wraper{
                @include box; @include boxCenter; @include boxMiddle(start); width: 87.5%; @include font-size(12px);
            }
        }
	}
</style>
<template>
<div class="bottom img-size" data-width="750" data-height="1956">
    <div v-show="exchanged">
        <div class="prize-mask img-size" data-width="640" data-height="1765"></div>
    </div>
    <div v-show="!exchanged">
        <div v-if="myGrade.length > 0" class="visual-grades">
            <div :class="waterMark"></div>
        </div>
        <div v-if="myGrade.length > 0" class="grades">
            <div v-for="item in myGrade" class="grade-num"><span>{{item.num}}</span></div>
        </div>
        <div class="lock-wraper">
            <div v-for="(item, index) in myGrade" :class="['lock-item', 'img-size', item.locked ? '' : 'unlock']" data-width="227" data-height="116" @click="onClickPrizeImg(item.locked)"></div>
        </div>
        <div :class="yourPosition">
            <div class="label-wraper">
                <span>您当前的位置</span>
            </div>
            <div class="img-wraper img-size" data-width="51" data-height="100">
            </div>
        </div>
    </div>
    <div class="remark">
        <div class="content-wraper">
            <div>*</div><div>当财富值达到对应数值，即可解锁该对应奖品。可挑选已解锁的任意一个奖品作为本活动的最终奖品（选定后，无法更换奖品）</div>
        </div>
    </div>
</div>
</template>
<script>
    import requirePop from '../../pop/requirePop.js';
    export default {
        props : {
            myGrade : Array,
            waterHeight : Number,
            exchanged : {
                type : Boolean,
                default : false
            },
            selectOptions : Array
        },
        data: function () {
            return {
                defaultGrades: [288, 220, 175, 150, 120, 85, 72, 58, 45, 22, 15, 7.5, 1.5, 0.8],
            };
        },
        computed : {
            waterMark : function () {
                let hgt = this.waterHeight;
                /*switch (hgt) {
                    case 1 : return ['g02'];
                    case 2 : return ['g03'];
                    case 3 : return ['g04'];
                    case 4 : return ['g05'];
                    case 5 : return ['g06'];
                    case 6 : return ['g07'];
                    case 7 : return ['g08'];
                    case 8 : return ['g09'];
                    case 9 : return ['g10'];
                    case 10 : return ['g11'];
                    case 11 : return ['g12'];
                    case 12 : return ['g13'];
                    case 13 : return ['g14'];
                    default : return ['g01'];
                }*/switch (hgt) {
                    case 1 : return ['g01'];
                    case 2 : return ['g02'];
                    case 3 : return ['g03'];
                    case 4 : return ['g04'];
                    case 5 : return ['g05'];
                    case 6 : return ['g06'];
                    case 7 : return ['g07'];
                    case 8 : return ['g08'];
                    case 9 : return ['g09'];
                    case 10 : return ['g10'];
                    case 11 : return ['g11'];
                    case 12 : return ['g12'];
                    case 13 : return ['g13'];
                    case 14: return ['g14'];
                    default: return [''];
                }
            },
            yourPosition : function () {
                let hgt = this.waterHeight;
                /*switch (hgt) {
                    case 1 : return ['pos02'];
                    case 2 : return ['pos03'];
                    case 3 : return ['pos04'];
                    case 4 : return ['pos05'];
                    case 5 : return ['pos06'];
                    case 6 : return ['pos07'];
                    case 7 : return ['pos08'];
                    case 8 : return ['pos09'];
                    case 9 : return ['pos10'];
                    case 10 : return ['pos11'];
                    case 11 : return ['pos12'];
                    case 12 : return ['pos13'];
                    case 13 : return ['pos14'];
                    default : return ['pos01'];
                }*/
                switch (hgt) {
                    case 1 : return ['pos01'];
                    case 2 : return ['pos02'];
                    case 3 : return ['pos03'];
                    case 4 : return ['pos04'];
                    case 5 : return ['pos05'];
                    case 6 : return ['pos06'];
                    case 7 : return ['pos07'];
                    case 8 : return ['pos08'];
                    case 9 : return ['pos09'];
                    case 10 : return ['pos10'];
                    case 11 : return ['pos11'];
                    case 12 : return ['pos12'];
                    case 13 : return ['pos13'];
                    case 14 : return ['pos14'];
                    default : return ['nopos'];
                }
            },
            prizeList : function () {
                let num = this.myGrade.length - 1;
                let temp = this.myGrade.slice(0, num);
                return temp;
            }
        },
        methods : {
            onClickPrizeImg : function (locked) {
                if (locked) return false;
                let self = this;
                requirePop('selectPrize', {
                    props: {
                        transition : 'bounceIn',
                        selectOptions: self.selectOptions
                    }
                });
            }
        }
    }
</script>