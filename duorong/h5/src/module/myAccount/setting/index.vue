/**
* 设置
* created by bo.peng 2018/3/29
* email:spion@qq.com
*/
<style scoped>
.setting{
    section{
        background:#fff;
    }
    .arrow-parent{
        padding-left: 10px;
    }
    li{
        display:flex;
        fle-direction:row;
        align-items:center;

        .title{
            flex:1;
            color: #102542;
        }
        &:not(:last-child){
             border-bottom:.5px solid #D2D2D2;
         }
    }
    aside{
        display:flex;
        align-items:center;
        color: #A0A0A0;
    }
}
</style>
<template>
    <article class="setting">
        <section class="img-size" data-marginBottom="30" data-marginTop="30">
            <ul class="img-size" data-paddingLeft="30">
                <li class="img-size" @click="setPwd" data-height="90" data-paddingRight="30">
                    <div class="title">重设登录密码</div>
                    <aside>
                        <div class="text">用于登录多融平台</div>
                        <div class="arrow-parent">
                            <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                        </div>
                    </aside>
                </li>
                <li class="img-size" @click="setTransactionPwd" data-height="90" data-paddingRight="30">
                    <div class="title">重设交易密码</div>
                    <aside>
                        <div class="text">用于投资交易</div>
                        <div class="arrow-parent">
                            <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                        </div>
                    </aside>
                </li>
                <li class="img-size" @click="setPresentPwd" data-height="90" data-paddingRight="30">
                    <div class="title">重设提现密码</div>
                    <aside>
                        <div class="text">用于进行提现</div>
                        <div class="arrow-parent">
                            <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                        </div>
                    </aside>
                </li>
            </ul>
        </section>
        <section class="img-size" data-marginBottom="30" style="display: none">
            <ul class="img-size" data-paddingLeft="30">
                <li class="img-size" @click="transaction" data-height="90" data-paddingRight="30">
                    <div class="title">解绑/换绑</div>
                    <aside>
                        <div class="arrow-parent">
                            <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                        </div>
                    </aside>
                </li>
                <li class="img-size" @click="transaction" data-height="90" data-paddingRight="30">
                    <div class="title">修改银行预留手机号</div>
                    <aside>
                        <div class="arrow-parent">
                            <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                        </div>
                    </aside>
                </li>
                <li class="img-size" @click="power" data-height="90" data-paddingRight="30">
                    <div class="title">更改授权信息</div>
                    <aside>
                        <div class="arrow-parent">
                            <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                        </div>
                    </aside>
                </li>
            </ul>
        </section>
        <section class="img-size" data-marginBottom="30">
            <ul class="img-size" data-paddingLeft="30">
                <li class="img-size" @click="jPush" data-height="90" data-paddingRight="30">
                    <div class="title">接收推送通知</div>
                    <aside>
                        <div class="text">{{isNotification?"已开启":"去开启"}}</div>
                        <div class="arrow-parent" v-show="!isNotification">
                            <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                        </div>
                    </aside>
                </li>
                <li class="img-size" data-height="90" data-paddingRight="30">
                    <div class="title">当前版本号</div>
                    <aside>
                        <div class="text">{{version}}</div>
                    </aside>
                </li>
                <li class="img-size" @click="reload" data-height="90" data-paddingRight="30">
                    <div class="title">清除缓存</div>
                    <aside>
                        <div class="arrow-parent">
                            <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                        </div>
                    </aside>
                </li>
            </ul>
        </section>
        <div class="submit">
            <div class="btn img-size" @click="exit"
                 data-height="80" data-lineHeight="80" data-margin="40">
                安全退出
            </div>
        </div>
        <send-form ref="form" :data="formData"></send-form>
    </article>
</template>

<script>
    import sendForm from "../../components/sendForm";
    import arrow from "../../components/arrow";
    import {SET_WITHDRAWALSPWD} from "../../../contant/urls/MYACCOUNT";
    import {RESULT_RETURNURL} from "../../../contant/LOCALSTORAGE";
    export default {
        components : {arrow,sendForm},
        data(){
            return{
	            version:"1.0.0",
                formData : null,
                isNotification:false,
            }
        },
        mounted(){
            this.setTitle({
                show : true,
                title : "设置",
                back : true,
            });
            this.version = T.version || this.version;
            this.setImgSize();
            this.isNotification=T.isNotification;
            //其他操作后要返回的页面
            T.setItem(RESULT_RETURNURL, {
                returnUrl: "/myAccount/setting/home"
            });
        },
        methods : {
            exit(){
                this.$store.dispatch("clearLoginInfo");
                T.delItem(RESULT_RETURNURL);
                T.callApp.loginout();
                this.go().home();
                this.$tips({
                    content : "退出"
                })
            },
            transaction(){
                alert("开发中...")
            },
            setPwd(){//重置登录密码
                if(version=="1.0"){
                    this.go().login.getPwd();
                }else{
                    this.transaction();
                }
            },
            setTransactionPwd(){//重置交易密码
                if(version=="1.0"){
                    this.go().myAccount.resetTransactionPwd();
                }else{
                    this.transaction();
                }
            },
            setPresentPwd(){//重置提现密码
                let self=this;
                this.ajax({
                    url:SET_WITHDRAWALSPWD,
                    data:"",
                    callback:true,
                }).then(data=>{
                    let map=data.map;
                    if(data.success){
                        self.formData = {
                            url : map.requestUrl,
                            type : "POST",
                            list : map.requestData,
                            callBack(){
                                this.submit();
                                self.$pops.loadding();
                            }
                        };
                    }
                })
            },
	        power(){
                if(version=="1.0") {
                    this.transaction();
                }else{
                    this.go().openAccount.authorization({
                        submit : true,
                        showPop : false
                    });
                }
            },
            reload(){
            	this.$pop({
		            title : "确定清除缓存",
		            close : true,//是否显示关闭按钮
		            content : "确定要清除缓存吗？",
		            footer : {
			            ok : "确定",//确定按钮
			            cancel : "取消", //取消按钮
			            okCallback : function(){
				            window.location = "/";
                        }, //确定按钮事件
			            cancelCallback : function(){
			            	this.close();
                        },//取消按钮事件
		            }
                });
            },
	        jPush(){
                if(this.isNotification) return;
		        this.$pop({
			        title : "推送",
			        close : true,//是否显示关闭按钮
			        content : "确定要开启推送吗？",
			        footer : {
				        ok : "确定",//确定按钮
				        cancel : "取消", //取消按钮
				        okCallback : function(){
					        T.callApp.call("jPush");
					        this.close();
					       /* this.$tips({
						        time:3000,//3秒
						        content : "开启成功！"
                            })*/
				        }, //确定按钮事件
				        cancelCallback : function(){
					        this.close();
				        },//取消按钮事件
			        }
		        });
            }
        }
    }
</script>
