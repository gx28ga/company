/**
* 用户开户系统2
* created by wang 2018/4/18
*/
<style scoped>
    .article{
        background:#fff;
        h1{
            color:#fff;
            text-align:center;
        }
    }
    .btn{
        background:#fff;
        color:#e09e2f;
        border-radius:100px;
        text-align:center;
    }
</style>

<template>
    <article class="article">
        <h1 class="img-size" data-fontSize="60" data-paddingTop="80" data-paddingBottom="80">用户开户系统</h1>
        <div class="form img-size" data-margin="40" data-padding="40">
            <div class="btn img-size" @click="submit" :class="{gray:!btnEvent}"
                 data-height="70" data-lineHeight="70" data-fontSize="30">
                开户
            </div>
        </div>
        <send-form ref="form" :data="formData"></send-form>
    </article>
</template>
<script>
    //API : /personal-loan/v3/open
    import sendForm from "../../components/sendForm";
    import filters from "../../../mixin/filters";
    import {OPEN_PERSONAL2} from "../../../contant/urls/OPENACCOUNT";
    export default {
        mixins : [filters],
        components : {
            sendForm
        },
        data(){
            return{
                data : null,
                formData : null,
                btnEvent : true,
                //错误提示
                errMsg: "",
                error: false,
            }
        },
        mounted() {
            this.setTitle({
                title : "多融财富",
            });
            this.setNav({
                show : false
            });
            this.setImgSize();
            // this.btnEvent = true
        },
        methods:{
            submit(){
                let self = this;
                if(!this.btnEvent) return;
                this.ajax({
                    url : OPEN_PERSONAL2,
                    data:{
                    }
                }).then(data=>{
                    this.btnEvent = false;
                    let map = data.map;
                    self.formData = {
                        url : map.url,
                        type : "POST",
                        list : map.openAccountOfUserReqData,
                        callBack(){
                            this.submit();
                        }
                    };
                })
            }
        }
    }
</script>
