<style>
.modal-wrapper{
    border-radius: 0!important;
    .notice{
        background: #fef2e8;
    }
    .noticebody{
        background: url('../images/tan.png') no-repeat;
        background-size: contain;
    }
    .modal-body{
        padding: 0!important;
        p{
            color: #fef2e8;
            text-align: center;
        }
    }
    .btn{
        background: #f97348;
        text-align: center;
        color: #fff;
    }
}
</style>
<template>
<pop ref='pop' :transition='transition' :closeCallback='closeCallback' class="notice">
    <div slot="header">
    </div>
    <div slot='body' class='noticebody img-size' data-paddingTop="35" data-fontSize='36' data-width="500" data-height="185" data-lineHeight="60">
        <p>sorry</p>
        <p>{{info}}</p>
    </div>
    <div slot='footer' class='img-size' data-paddingTop="33" data-paddingBottom="33">
        <div class="btn img-size" data-fontSize='36' data-width="300" data-lineHeight='75' data-borderRadius="50" @click='close'>
            {{btn}}
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
            closeCallback : Function,
            btn : String,
            info : String,
        },
        methods : {
            close(){
                if(this.closeCallback && this.closeCallback()){
                    this.closeCallback();
                }
                this.$refs.pop.closePop();
            },
            cancel(){
                this.cancelCallback.call(this);
            }
        }
    }
</script>