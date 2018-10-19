<style>

</style>
<template>
<pop ref='pop' :transition='transition' superClass='publicTips' :closeCallback='closeCallback'>
    <div slot="header">
        <h1 class='img-size' data-fontSize='40'>{{title}}</h1>
    </div>
    <div slot='body' v-html='content' class='img-size' data-fontSize='26'>
    </div>
    <div slot='footer' class='submit img-size'>
        <div class="btn img-size" data-fontSize='32' data-height='60' data-lineHeight='60' @click='close'>
            {{okTxt||'确定'}}
        </div>
        <div v-show='cancelTxt' class="btn cancel img-size" data-fontSize='32' data-height='60' data-lineHeight='60' @click='cancel'>
            {{cancelTxt}}
        </div>
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    export default {
        components : {
            pop
        },
        props : {
            transition : String,
            btnFn : Function,
            title : String,
            content : String,
            okTxt : String,
            closeCallback : Function,
            okCallback : Function,
            cancelTxt : {
                type: [String,Boolean],
                default: false,
            },
            cancelCallback : Function
        },
        methods : {
            close(){
                if(this.okCallback && this.okCallback()){}
                this.$refs.pop.closePop();
            },
            cancel(){
                this.cancelCallback.call(this);
            }
        }
    }
</script>
