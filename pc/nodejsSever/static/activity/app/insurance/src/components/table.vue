<style>

</style>
<template>
<div class='item img-size' data-paddingLeft='30' data-paddingRight='30' data-paddingTop='40' data-paddingBottom='20'>
    <h2 class='img-size' data-fontSize='28' data-height='40' data-lineHeight='40' data-paddingBottom='10'>{{name}}</h2>
    <div class='cnt img-size' data-height='70' data-lineHeight='70'>
        <div class='tit'>
            <input v-if='!readonly' :placeholder='placeholder' class='img-size' :maxlength='maxlength' data-fontSize='34' v-model="modelVal" type='text'>
            <input v-else :placeholder='placeholder' class='img-size' :maxlength='maxlength' data-fontSize='34' v-model="modelVal" type='text' readonly="readonly">
        </div>
        <div v-if='jian' class='jian img-size' data-width='80' @click='moreEvent'><i class='img-size' data-width='14' data-height='24'></i></div>
    </div>
</div>
</template>
<script>
    export default {
        props : {
            name : String,
            placeholder : String,
            model : Function,
            inputType : String,
            inputData : String,
            readonly : Boolean,
            jian : Function,
            maxlength : Number
        },
        data(){
            return {
                modelVal : ''
            }
        },
        watch : {
            modelVal : function( newval , oldval ){
                if(this.inputType == 'tel' || this.inputData=='Number'){
                    this.modelVal = T.justNumber(newval);
                }
                this.model(this.modelVal , oldval);
            }
        },
        mounted(){
            T.setImgSize();
            this.inputType = this.inputType || 'text';
            $(this.$el).find('.tit input').attr({type:this.inputType});
            
        },
        methods : {
            moreEvent(){
                this.jian(this);
            }
        }
    }
</script>