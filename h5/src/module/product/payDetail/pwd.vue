/**
* 支付页面
* created by bo.peng 2018/5/3
* email:spion@qq.com
*/
/**
<style scoped>
    .pay{
        width:100%;
        .title{
            display:flex;
            .cancel,.ok{
                color:#1a6bcf;
            }
        }
        h2{
            flex:1;
        }
        .price{
            color: #A0A0A0;
            text-align:center;
            margin-bottom:10px;
            em{
                color: #FE7634;
            }
        }
        .text-input{
            padding:0 10px;
            background: #F2F2F2;
            border-radius: 5px;
        }
        .icon1{
            margin:0 auto;
            background:url("../../../images/product/shanchu.png") no-repeat;
            background-size:contain;
        }
        .disc{
            ul{
                display:flex;
                flex-direction:row;
            }
            li{
                flex:1;
                margin:2px;
                padding:10px 0;
                line-height: 22px;
                border: 1px solid #F2F2F2;
                text-align:center;
            }
            .goback{
                flex:0.48;
            }
        }
        .btn{
            margin-top:10px;
            border-radius:0;
        }
        .text-tips{
            display:flex;
            flex-direction: row;
            align-items:center;
            .getPwd{
                color:#1a6bcf;
            }
            .error{
                flex:1;
                height:33px;
                line-height:33px;
                overflow:hidden;
                color:#e60012;
                transition-duration:.3s;
                opacity:0;
                &.current{
                    opacity:1;
                }
            }
        }
    }
</style>
<template>
    <article class="pay">
        <div class="title img-size" data-height="100" data-lineHeight="100" data-paddingLeft="30" data-paddingRight="30">
            <div class="cancel" @click="cancel">取消</div>
            <h2 class="img-size" data-fontSize="32">输入密码</h2>
        </div>
        <div class="content img-size" data-paddingLeft="30" data-paddingRight="30" data-fontSize="24">
            <div class="price">
                预估收益：<em>{{data.profit}}</em><span>元</span>
            </div>
            <div class="text-input img-size" data-height="90" data-lineHeight="90">
                <div class="input">
                    {{num.length?num:text}}
                </div>
            </div>
            <div class="text-tips">
                <div class="error" :class="{current:error}">{{errMsg}}</div>
                <div class="getPwd" @click="getPwd">忘记密码？</div>
            </div>
            <div class="disc" v-if="keyCode">
                <ul v-for="(arr,index) in keyCode" :key="index">
                    <li v-for="item in arr" :key="item" @click="getNum(item)">{{item}}</li>
                </ul>
                <ul>
                    <li @click="getNum(keyCodeEnd)">{{keyCodeEnd}}</li>
                    <li @click="clear" class="goback img-size" data-width="100">
                        <div class="icon1 img-size" data-width="56" data-height="42"></div>
                    </li>
                </ul>
            </div>
        </div>
        <!--<div class="btn img-size" :class="{gray:!btnEvent}" @click="submit" data-height="90" data-lineHeight="90" data-fontSize="36">
            立即投资
        </div>-->
    </article>
</template>

<script>
    import {INVEST} from "../../../contant/urls/PRODUCT";
    import {mapGetters} from "vuex";
    export default {
        props:["data"],
        data(){
            return{
                pwd : "",
                num : "",
                //错误信息
                code: "",
                errMsg: "",
                error: false,
                btnEvent : false,
                text : "请输入密码",
                keyCode : null,
                keyCodeEnd : null,
            }
        },
        computed :{
            ...mapGetters({
                cath : "getCatch"
            }),
        },
        watch:{
            pwd(val){
                if(String(val).length===6){
                    this.btnEvent = true;
                    this.submit();
                }
            }
        },
        created(){
            let arr = [0,1,2,3,4,5,6,7,8,9];
            arr.sort(()=>{
                return Math.ceil(Math.random()*2)-1;
            });
            this.keyCodeEnd = arr[9];
            this.keyCode = [arr.slice(0,3),arr.slice(3,6),arr.slice(6,9)];
        },
        mounted(){
            this.$pops.removeLoadding();
            this.setImgSize();
        },
        methods:{
            showError(msg) {
                this.errMsg = msg;
                this.error = true;
            },
            hideError() {
                this.error = false;
            },
            clear(){
                let num = this.num;
                if(num.length>1){
                    num = num.substr(0,num.length-1);
                    this.pwd = this.pwd.substr(0,this.pwd.length-1);
                }else{
                    num = "";
                    this.pwd = "";
                }
                this.num = num;
            },
            getNum(val){
                if(this.num.length<6){
                    this.pwd += val;
                    this.num += "*";
                }
            },
            cancel(){
                this.num = "";
                this.pwd = "";
                this.$parent.close();
            },
            getPwd(){
                this.$parent.close();
                this.go().myAccount.pwd.transaction();
            },
            submit(){
                if(!this.btnEvent) return;
                let self = this;
                require.ensure([], function(require) {
                    let pwd = require("../../../middle/setPwd").setPwd(self.pwd);
                    let data = {
                        pid : self.data.id,
                        tpwd : pwd,
                        amount : self.data.productNum,
                    };
                    if(self.data.selectCoupon){
                        data.fid = self.data.selectCoupon.id;
                    }
                    self.ajax({
                        url:INVEST,
                        data:data,
                        load : true,
                        callback:true,
                    }).then(data=>{
                        if(data.success){
                            self.$parent.close();
                            self.$store.commit("setCatch",{
                                payDone : data.map
                            });
                            self.go().product.payDone();
                        }else{
                            self.btnEvent = false;
                            self.$pop({
                                title: "错误",
                                icon : "icon2",
                                close: true,//是否显示关闭按钮
                                content: data.errorMsg||data.msg
                            });
                        }
                    });
                });
            }
        }
    }
</script>
