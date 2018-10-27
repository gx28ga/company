/**
* describe 意见反馈页面
* Created by wangCuiqing
* Date: 2018/4/26
*/
<style scoped>
    .text{
        margin:0 auto;
        color:#D2D2D2;
        textarea{
            width:100%;
            min-height: 100px;
            padding:10px;
            box-sizing:border-box;
            border:none;
        }
    }
    .txtVal{
        text-align: right;
        color:#A0A0A0;
    }
.submitBtn{
    background:#FE7634;
    color:#fff;
    border-radius: 10px;
    text-align: center;
    margin:0 auto;
}
    .mobile{
        display:flex;
        justify-content: center;
        .phone{
            background:url("../../../images/account/phone.png") no-repeat;
            background-size:contain;
            display: block;
        }
        .kefu{
            color:#FE7634;
        }
    }
    .phoneNumber{
        text-align: center;
        color:#A0A0A0;
    }
</style>
<template>
    <article class="feedBack img-size">
        <div class="text img-size" data-width="710" data-height="540" data-marginTop="20">
            <textarea placeholder="多融财富力求向您提供优质、高效的服务，请您留下宝贵建议…（200字以内）" class="img-size" data-width="710" data-height="540"  v-model="content" maxlength="200" @input="desInput"></textarea>
        </div>
        <div class="txtVal img-size" data-fontSize="36" data-paddingRight="20" data-marginTop="20">{{shengyu}}/200</div>
        <div class="submitBtn img-size" data-width="590" data-height="90" data-fontSize="36" data-lineHeight="90" data-marginTop="100" @click="submit">提交</div>
        <div class="mobile img-size" data-marginTop="60" @click="phone">
            <span class="phone img-size" data-width="50" data-height="50"></span>
            <p class="kefu img-size"  data-fontSize="36" data-marginLeft="20">联系客服</p>
        </div>
        <div class="phoneNumber img-size" data-fontSize="24" data-marginTop="20">客服热线：{{contactPhone}}</div>
    </article>
</template>

<script>
    import COMPANYINFORMATION from "../../../contant/GLOBAL";
    import {FEEDBACK} from "../../../contant/urls/SYSTEM";
    export default {
        data(){
            return{
                content:"",
                contactPhone:COMPANYINFORMATION.sever.contactPhone,
                shengyu:0
            }
        },
        mounted(){
            this.setImgSize();
            this.setTitle({
                show:true,
                title:"意见反馈",
                back:true,
            });
            this.setNav({
                show:false
            })
        },
        methods:{
            submit(){
                let self=this;
                if(self.content.length==0)return;
                self.ajax({
                    url:FEEDBACK,
                    data:{
                        content:self.content
                    }
                }).then(data=>{
                    if(data.success){
                        this.$pop({
                            title:"提交成功",
                            icon:"icon1",
                            close:false,
                            content:"多融财富感谢您的反馈",
                            footer:{
                                ok:"返回",
                                okCallback:function(){
                                    this.close();
                                    self.go().myAccount.home();
                                }
                            }
                        })
                    }else{
                        this.$pop({
                            title:"反馈失败",
                            close:false,
                            icon:"icon2",
                            content:"重新反馈",
                            footer:{
                                ok:"返回",
                                okCallback:function(){
                                    this.close();
                                }
                            }
                        })
                    }

                })
            },
            phone(){
                // let self=this;
                this.$pop({
                    title:"是否拨打",
                    content:COMPANYINFORMATION.sever.contactPhone+"<br>(服务时间"+COMPANYINFORMATION.sever.workTime+")",
                    close:false,
                    footer:{
                        ok:"拨打",
                        cancel:"取消",
                        okCallback:function(){
                            T.callApp.call("callPhone",4006908896);
                            this.close();
                        },
                        cancelCallback:function(){
                            this.close();
                        }
                    }
                })
            },
            desInput(){
                let txtVal=this.content.length;
                this.shengyu=200-txtVal;
            }
        }
    }
</script>
