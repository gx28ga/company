/**
* 选择银行
* created by bo.peng 2018/4/23
* email:spion@qq.com
*/
/**
*
* created by bo.peng
* email:spion@qq.com
*/
<style scoped>
    .chooseCity{
        width:100%;
        .title{
            display:flex;
            background:#f8f8f8;
            .cancel,.ok{
                color:#1a6bcf;
            }
        }
        h2{
            flex:1;
        }
        .content{
        }
        .select{
            display:block;
            width:100%;
            height:33px;
            margin-bottom:5px;
            text-align:center;
            text-align-last: center;
        }
    }
</style>
<template>
    <article class="chooseCity" v-if="banks">
        <div class="title img-size" data-height="100" data-lineHeight="100" data-paddingLeft="20" data-paddingRight="20">
            <div class="cancel" @click="cancel">取消</div>
            <h2 class="img-size" data-fontSize="32">银行选择</h2>
            <div class="ok" @click="ok">确定</div>
        </div>
        <div class="content img-size" data-padding="20">
            <select class="select" v-model="bank">
                <option value="-1">请选择银行</option>
                <option v-for="item in banks" v-bind:key="item.id"
                        v-bind:value="item">
                    {{item.name}}
                </option>
            </select>
        </div>
    </article>
</template>

<script>
    import {BANK_INFO} from "../../contant/urls/OPENACCOUNT";
    import {BANK_LOCAL_INFO} from "../../contant/SESSIONSTORAGE";
    export default {
        props:{
            member : Object,
            user : Object,
        },
        data(){
            return{
                banks:[],
                bank:-1,
            }
        },
        mounted(){
            let self = this ,
                banks = T.getSession(BANK_LOCAL_INFO);
            this.$nextTick(()=>{
                this.setImgSize();
            });
            if(banks){
                self.banks = banks
            }else{
                this.ajax({
                    url : BANK_INFO,
                    data : {
                        uid : this.user.member.uid
                    }
                }).then(data=>{
                    T.setSession(BANK_LOCAL_INFO,data.map.drBankInformationList);
                    self.banks = data.map.drBankInformationList;
                });
            }
        },
        methods:{
            ok(){
                if(this.bank===-1){
                    this.$pop({
                        title : "错误",
                        close : true,//是否显示关闭按钮
                        content : "请选择银行",
                        icon : "icon2",//icon1 确定 2取消 3提示
                    });
                }else{
                    this.$emit("$choose",{
                        bank : this.bank
                    });
                }
                this.$parent.close();
            },
            cancel(){
                this.bank = -1;
                this.$parent.close();
            }
        }
    }
</script>
