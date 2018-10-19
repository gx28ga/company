<style lang='sass'>
	@import '../../css/global.scss';
	.header{
		position: relative; z-index: 1; overflow:hidden;
		.bg {
			@include contain('../../images/new/head/head-bg2.jpg');
            .when{
                background: #FF5C01; border-radius: $s8;
                display: flex; justify-content: center; align-items: center;
                position: absolute; top:18%; left: 27.5%;
                padding:$s1 $s4;
                @include size(height, 12px);
                span{
                    @include font-size(4px);
                    font-family: "Bodoni MT";
                    color: white;
                }
            }
            .btn{
                @include transition-duration;
                position:absolute; z-index:2; right:0; bottom:$s2;
                /*@include contain('../../images/new/head/rule-btn.jpg')*/
                .m{ @include transition-duration; position:absolute; width:100%; text-align:center; color:#ea2414; font-size:$s14;}
            }
		}
	}
</style>
<script>
    import requirePop from '../../pop/requirePop.js';
    export default {
        props : {
            period : String
        },
        methods: {
            displayRule : function () {
                let self = this;
                requirePop('explain', {
                    props : {
                        transition : 'bounceIn',
                        period : self.period
                    }
                });
            }
        }
    }
</script>
<template>
<div class="header">
    <div class="bg img-size" data-width="750" data-height='88'>
        <!--<div class="when"><span>2017·05</span></div>-->
        <div class="btn img-size" data-width='96' data-height='52' @click='displayRule'></div>
    </div>
</div>
</template>