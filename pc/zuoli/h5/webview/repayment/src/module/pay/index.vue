<style scoped>
@import '../../style/global';
.enrollBox{
    .paycontent{
        text-align: center;
        .payfont{
            color:#cbcbcb; 
        }
        .paynumber{
            color:#333333;
        }
    }
    .renzheng{
        background: #fff;
        border-bottom:2px solid #f3f4f8;
        color:#333;
        position: relative;
        .btn1{
            display: inline-block;
            background: url("../../images/btn1.png") no-repeat;
            background-size: contain;
            position: absolute;
        } 
        .btn2{
            display: inline-block;
            background: url("../../images/btn2.png") no-repeat;
            background-size: contain;
             position: absolute;
        }
    }
    .loginBtn{
        background: #3ea6d8;
        text-align: center;
        color:#fff;
        margin:0 auto;
        border-radius: 10px;

    }
    #renzheng{
        display: none;
    }
}
</style>
<template>
<div class='enrollBox' >
   <div class='paycontent img-size' data-height='500' data-paddingTop='180'>
        <div class='payfont img-size' data-fontSize='28' data-height='50' data-lineHeight='50'>还款金额（元）</div>
        <div class='paynumber img-size' data-fontSize='72' data-height='90' data-lineHeight='90'>{{amount}}</div>
   </div>
   <div class='renzheng img-size' data-height='100' data-fontSize='32' data-lineHeight='100' data-paddingLeft='100' @click='setTag(index)' v-for="(item,index) in tabinfo">
       <span class='img-size ' data-width='52' data-height='52' data-left='30' data-top='20' :class="{'btn1':index==number,'btn2':index!=number}"></span>{{item}}
   </div>
   <div class='tishi img-size' data-fontSize='24' data-width='546' data-height='60' data-lineHeight='60' v-show='!disable' data-paddingLeft='30'>{{errorMsg}}</div>
   <div class='loginBtn img-size' data-width='680' data-height='80' data-lineHeight='80' data-fontSize='32' data-marginTop='100' @click='payNow'>立即还款</div>
   <form method='post' id='renzheng' action="https://wap.lianlianpay.com/authpay.htm">
       <input name='req_data' id="reqData" >
   </form> 
   <form method='post' id='quickPay' action="https://wap.lianlianpay.com/payment.htm" style='display:none'>
       <input name='req_data' id='quickpayment' >
   </form>
</div>

</template>
<script>
import {huankuan} from "../../common/URL.js";
import {quickPayment} from "../../common/URL.js";
    export default {
        data(){
            return {
                tabinfo:["认证支付","快捷支付","支付宝支付"],
                number:0,
                userId:"",
                amount:0.00,
                orderNo:"",
                renzheng:true,
                disable:true,
                no_order:"",
                notify_url:"",
                oid_partner:"",
                user_id:"",
                sign_type:"",
                sign:"",
                busi_partner:"",
                no_order:"",
                dt_order:"",
                name_goods:"",
                info_order:"",
                money_order:"",
                notify_url:"",
                url_return:"",
                no_agree:"",
                valid_order:"",
                id_no:"",
                acct_name:"",
                risk_item:"",
                reqData:"",
                errorMsg:""
            }
        },
        components:{
      
        },
        mounted(){
            document.title = '银行卡转账还款';
            T.init();
            T.setImgSize();
            this.getuserId();
        },
        methods : {
            setTag: function(index) {
                this.number=index;
                if(this.number==1){
                    this.getuser();
                }
            },
            getuserId:function(){
                var self=this;
                this.userId=this.$route.query.userId;
                $.ajax({
                url:huankuan,
                data:{
                    userId:this.userId,
                    app_request:3
                },
                type : 'POST',
                dataType : 'json',
                accept: "application/json; text/plain",
                contentType:'application/x-www-form-urlencoded',
                success:function(data){
                    if(data.code==200){
                       self.amount=data.data.money_order;
                        self.no_order=data.data.no_order;
                        self.notify_url=data.data.notify_url;
                        self.api_version=data.data.api_version;
                        self.oid_partner=data.data.oid_partner;
                        self.user_id=data.data.user_id;
                        self.sign_type=data.data.sign_type;
                        self.sign=data.data.sign;
                        self.busi_partner=data.data.busi_partner;
                        self.no_order=data.data.no_order;
                        self.dt_order=data.data.dt_order;
                        self.name_goods=data.data.name_goods;
                        self.info_order=data.data.info_order;
                        self.money_order=data.data.money_order;
                        self.notify_url=data.data.notify_url;
                        self.url_return=data.data.url_return;
                        self.no_agree=data.data.no_agree;
                        self.valid_order=data.data.valid_order;
                        self.id_no=data.data.id_no;
                        self.acct_name=data.data.acct_name;
                        self.risk_item=data.data.risk_item;
                     let str={
                        "app_request":"3",
                        "acct_name":self.acct_name,
                        "busi_partner":self.busi_partner,
                        "dt_order":self.dt_order,
                        "info_order":self.info_order,
                        "id_type":"0",
                        "id_no":self.id_no,
                        "money_order":self.money_order,
                        "no_order":self.no_order,
                        "name_goods":self.name_goods,
                        "notify_url":self.notify_url,
                        "oid_partner":self.oid_partner,
                        "risk_item":self.risk_item,
                        "sign_type":self.sign_type,
                        "sign":self.sign,
                        "user_id":self.user_id,
                        "url_return":self.url_return, 
                        "valid_order":self.valid_order,
                        "version":self.api_version,           
                }
                let msg=JSON.stringify(str);
                $("#reqData").attr("value",msg);
                }else if(data.code==500){
                        self.disable=false;
                        self.errorMsg=data.msg;
                    }
                }
            })
            },  
            getuser:function(){
                var self=this;
                this.userId=this.$route.query.userId;
                $.ajax({
                url:quickPayment,
                data:{
                    userId:this.userId,
                    app_request:3
                },
                type : 'POST',
                dataType : 'json',
                accept: "application/json; text/plain",
                contentType:'application/x-www-form-urlencoded',
                success:function(data){
                    if(data.code==200){
                        self.amount=data.data.money_order;
                        const strInfo={
                            "version":data.data.api_version,
                            "oid_partner":data.data.oid_partner, 
                            "user_id":data.data.user_id,
                            "app_request":"3",
                            "sign_type":data.data.sign_type,
                            "sign":data.data.sign,
                            "busi_partner":data.data.busi_partner,
                            "no_order":data.data.no_order,
                            "dt_order":data.data.dt_order,
                            "name_goods":data.data.name_goods, 
                            "money_order":data.data.money_order,
                            "notify_url":data.data.notify_url,
                            "risk_item":data.data.risk_item,
                            "valid_order":data.data.valid_order
                        }
                let msg=JSON.stringify(strInfo);
                $("#quickpayment").attr("value",msg);          
                }
                }})
            },
             payNow:function(){ 
                if(this.disable){
                     if(this.number==0){
                  $("#renzheng").submit();  
                    }else if(this.number==1){
                    $("#quickPay").submit();  
                    }else if(this.number==2){
                         router.replace({ 
                            path: 'zhifubao',
                            query:{}
                            })
                    } 
                }else{
                    return;
                }
              
             },
        }
    }
</script>
