/**
* 提交form表单
* created by bo.peng 2018/4/12
* email:spion@qq.com
*/
<style scoped>
.form{
    display:none;
}
</style>
<template>
    <form v-if="data" :action="data.url" :method='data.type' id='powerForm'>
        <input type="hidden" v-for="(value,key) in data.list"
               v-bind:key="key"
               :value='value' :name='key' >
    </form>
</template>

<script>
	export default {
		props:{
		    data : Object,
        },
        watch : {
		    data(obj){
		        let self = this;
		        this.$nextTick(()=>{
		            if(self.data.callBack){
                        self.data.callBack.call(self);
                    }
                })
            }
        },
        methods : {
		    submit(){
		        this.$el.submit();
            }
        }
	}
</script>
