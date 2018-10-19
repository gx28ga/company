<style lang='sass' scoped>
    @import '../css/global.scss';
    @import "../vendor/animate.min.css";
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
            .combo{
                margin: 0 auto;
                border: 1px solid #DDD;
                background: #FAFAFA;
            }
            .xchg-btn{
                margin: 0 auto;
                @include contain("../images/main-btn.png");
                color: #FFF;
                text-align: center;
            }
            .disabled{
                background: #888!important;
                background-image: none!important;
            }
        }
        .close{
            color: #222;
        }
    }
</style>
<template>
<!--<transition :name="transition">-->
<transition>
    <div v-show='showModal' class="modal-mask bet">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt animated zoomInDown img-size" data-width='520' data-height="415" data-borderRadius="16" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='20' data-height='20' data-top='0' data-right='18' data-fontSize="40" data-lineHeight="40" @click='onClose' onclick="this.parentNode.classList.add('zoomOutRight')">&times;</div>
                </slot>
                <div class="img-size section title" data-marginTop="35" data-height="24">
                    <div class="img-size deco-line" data-width="50" data-height="0"></div><!--
                 --><div class="img-size" data-marginLeft="15" data-marginRight="15" data-fontSize="24" data-lineHeight="24">请选择您想要转换的球队卡片</div><!--
                 --><div class="img-size deco-line" data-width="50" data-height="0"></div>
                </div>
                <select class="img-size combo" data-marginTop="80" data-marginBottom="100" data-paddingLeft="20" data-width="285" data-height="55" data-fontSize="30" data-lineHeight="55" v-model="choosenTeam">
                    <option v-for="team in optTeams" :value="team.value">{{team.name}}</option>
                </select>
                <div class="img-size xchg-btn" :class="choosenTeam ? '' : 'disabled'" data-width="260" data-height="65" data-borderRadius="32" data-fontSize="30" data-lineHeight="65" @click="!choosenTeam || onSubmit()">确 认</div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    const cTeamName = [
        '俄罗斯', '葡萄牙', '法国', '阿根廷', '巴西', '德国', '比利时', '波兰',
        '沙特阿拉伯', '西班牙', '澳大利亚', '冰岛', '瑞士', '墨西哥', '巴拿马', '塞内加尔',
        '埃及', '摩洛哥', '秘鲁', '克罗地亚', '哥斯达黎加', '瑞典', '突尼斯', '哥伦比亚',
        '乌拉圭', '伊朗', '丹麦', '尼日利亚', '塞尔维亚', '韩国', '英格兰', '日本'
    ];
    export default {
        props : {
//            transition : String,
            betResult : String
        },
        data(){
            return{
                showModal : true,
                waitTime: 500,
                choosenTeam: ''
            }
        },
        computed : {
            optTeams(){
                return cTeamName.map((name, index) => {return {name, value: index + 1};});
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
            onSubmit(){
                this.closePop(() => {
                    this.$emit('submit-xchg-event', Number(this.choosenTeam));
                });
            }
        }
    }
</script>