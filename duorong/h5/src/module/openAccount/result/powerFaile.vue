/**
* 授权失败
* Created by wangcuiqing on 2018/3/27.
*/
<style>
    @import "../style/openAccount.css";
</style>
<template>
    <div class='openAccount-content img-size' data-paddingTop='60' data-paddingBottom='60'>
        <div class='faileimg img-size' data-width='218' data-height='226' data-marginBottom='15'></div>
      <div class='handle img-size' data-fontSize='32' data-marginBottom='30'>操作失败</div>
      <div class='line img-size' data-width='590'></div>
      <div class='prompt img-size' data-fontSize='24' data-marginTop='26' data-marginBottom='26' data-marginLeft='60' data-marginRight='60'>由于{{errMsg}}原因，您的授权操作已失败！</div>
      <div class='btn img-size' data-width='260' data-height='80' data-lineHeight='80' data-fontSize='32' @click='power'>再试一次</div>
      <form :action="url" method='post' id='powerForm'>
          <input type="hidden" v-for="(value,key) in msg" :value='value'  v-bind:name='key' v-bind:key="key">
      </form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                errMsg:null,
                uid:null,
                msg:null,
                url:"",
                token:""
            }
        },
        mounted(){
            this.setTitle({
                show : true,
                title : "授权",
                back : true,
            });
            T.setImgSize();
            let self=this,
            uid=T.getQuery("uid");
             self.errMsg=T.getQuery("errorMsg");
             self.token=T.getQuery("token");
             self.ajax({
                    url:"/memberSetting/auth.do",
                    data:{uid:uid,token:self.token}
                }).then(data=>{
                    self.msg=data.map.authorizeOfUserReqData;
                    self.url=data.map.url
                })

        },
        methods:{
            power(){
               let powerForm=$("#powerForm");
               powerForm.submit();
            }
        }
    }
</script>
