/**
* 头部信息
* created by bo.peng 2018/3/29
* email:spion@qq.com
*/
<style>
    .header-bar{
        position:relative;
        z-index: 999;
        background:#fff;
        border-bottom:.5px solid #ddd;

        h1{
            color:#102542;
            text-align:center;
            text-overflow:ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .back{
            position:absolute;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        aside{
            position:absolute;
            &.share{
                background:url("../../images/common/share.png") no-repeat;
                background-size:contain;
            }
            &.button{
                text-align:right;
            }
        }
    }
</style>
<template>
    <header v-show="show" class="header-bar img-size"
            v-bind:style="{ background: background , borderColor:borderColor }"
            data-height="90" data-lineHeight="90" :data-marginBottom="marginHeight">
        <aside v-if="share" @click='shareEvent' class='img-size share' data-width='38' data-height='38' data-right='50' data-top='30'></aside>
        <aside v-if="button" class='img-size button' :class="button.class"
               @click="buttonEvent"
               :style="{color:button.color?button.color:color}"
               :data-width='button.width' :data-height='button.height'
               :data-lineHeight="button.height" data-right='50'
               :data-top='button.top'>{{button.text}}</aside>
        <div v-show="back" @click="goBack"
             class="back img-size" data-left="10"
             data-width="90">
            <arrow :color="arrowColor"/>
        </div>
       <!-- <h1 class="img-size"
            v-bind:style="{ color:color }"
            data-fontSize="34">{{title}}</h1>-->
        <h1 class="img-size"
            :data-paddingLeft="back?70:20"
            :data-paddingRight="share?100:20"
            v-bind:style="{ color:color }"
            data-fontSize="34">{{title}}</h1>
    </header>
</template>

<script>
    import arrow from "./arrow";
    class Setting{
        constructor( obj ){
            this.show = true;
            this.title = "多融财富";
            this.back = false;
            this.backUrl = false;
            this.share = false;
            this.button = false;
            this.shareConfig = null;
            this.gap = false;
            this.marginHeight = 20;
            this.background = "#ffffff";
            this.borderColor = "#ddd";
            this.arrowColor = "#999";
            this.color = "#102542";
            if(obj){
                //修改start
                Object.assign(this,obj);
                Object.assign(this,{
                    show : T.isApp?false:obj.show,
                });
            }
            if(!this.gap){
                this.marginHeight = 0;
            }
        }
    }
    export default {
        components:{
            arrow
        },
        data(){
            return new Setting()
        },
        mounted(){},
        methods : {
            buttonEvent(){
                this.button.event();
            },
            setHead( obj ){
                obj.title = obj.title || this.title;
                Object.assign(this,new Setting(obj));
                document.title = obj.title;
                this.$nextTick(()=>{
	                this.setImgSize();
                });
            },
            goBack () {
                if(!this.backUrl){
                    window.history.length > 1
                        ? this.$router.go(-1)
                        : this.$router.push('/')
                }else{
                    this.go().resultUrl();
                }
            },
            shareEvent(){
                T.callApp.share(this.shareConfig);
            }
        }
    }
</script>
