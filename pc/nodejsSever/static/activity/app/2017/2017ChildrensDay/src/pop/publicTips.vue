<style scoped>
    @import '../style/global';
    .modal-header{
        .title-bg{
            
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
    <div slot="header">
        <div class='title-bg img-size' data-width='390' data-height='79'>
            {{title}}
        </div>
    </div>
    <div slot='body' v-html='content'>
    </div>
    <div slot='footer' class='submit img-size'>
        <div class="btn img-size" data-fontSize='30' data-width='327' data-height='60' data-lineHeight='60' @click='close'>
            {{okTxt||'确定'}}
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
            status : Number,
            btnFn : Function,
            okTxt : String,
            title : String,
            content : String,
            closeCallback : Function,
            okCallback : Function
        },
        methods : {
            close(){
                if(this.okCallback && this.okCallback() );
                this.$refs.pop.closePop();
            }
        }
    }
</script>