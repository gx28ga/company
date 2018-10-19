<template>
    <div>
        <el-autocomplete
                class="inline-input"
                v-model="searchWord"
                ref="input"
                :props="props"
                :disabled="disabled"
                :fetch-suggestions="queryWord"
                :placeholder="placeholder"
                :trigger-on-focus="false"
                @select="handleSelect"
        ></el-autocomplete>
    </div>
</template>
<script>
    //  import {login as loginApi} from '../../api/index'
    export default{
        data(){
            return {
                searchWord:"",
            }
        },
        props: {
            props:{
                type:Object,
                default(){
                    return {}
                }
            },
            disabled:{
                type:Boolean,
                default(){
                    return true
                }
            },
            queryWord:Function,
            value:{
                type:String,
                default(){
                    return ''
                }
            },
            placeholder:{
                type:String,
                default(){
                    return ''
                }
            }

        },
        watch: {
            'searchWord':function (newValue,oldValue) {
                this.$emit('input',newValue);
            },
            value(val){
                this.searchWord = val
            }
        },

        computed: {

        },
        methods: {
            handleSelect(item){
                this.$emit('handleSelect',item)
            },

        },
        mounted(){


        }
    }

</script>
<style>

</style>