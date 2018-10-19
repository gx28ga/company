<style>
    .boxForm{
        margin:0 30px;
        padding:20px 20px 5px;
        border-radius:10px;
        background:#ffdaaf;
        border:1px dashed #fb852f;

        .item{
            display:flex;
            flex-direction:row;
            padding:5px 0;
            line-height:30px;
        }
        .input{
            flex:1;
            height:30px;

            input{
                display:block;
                width:100%;
                height:100%;
                padding:0 10px;
                border:none;
                box-sizing:border-box;
                border-radius:5px;
                background:#fff;
                ::-webkit-input-placeholder{
                    color:#999999;
                    font-size:10px;
                }
            }
        }
        img{
            display:block;
            height:30px;
            float:right;
        }
        .yzm,.yzm-submit{
            width:100px;
            height:100%;
            text-align:right;
            box-sizing:border-box;
        }
        .yzm-submit{
            padding-left:20px;
            .btn{
                border-radius:5px;
                background:#ff7127;
                font-size:10px;
                color:#fff;
                text-align:center;
                &.gray{ background:#aaa; }
            }
        }

        .read{
            padding-top:10px;
            line-height:20px;
            .select{
                display:inline-block;
            }
            .check{
                float:left;
                margin-top:5px;
                margin-right:5px;
                background:url("../images/check.png") no-repeat;
                background-size:contain;
                &.cur{
                     background-image:url("../images/checked.png");
                 }
            }
        }
        .submit{
            padding:10px 50px;
            .btn{
                background:#ff7127;
                border-radius:5px;
                color:#fff;
                text-align:center;
                &.gray{
                    background:#aaa;
                }
            }
        }
        .msg{ text-align:center; }
        .error{
            color: #E94F37;
            height:0;
            line-height: 44px;
            font-size: 12px;
            transition-duration: .3s;
            overflow:hidden;
            text-align: center;

            i{ display:inline-block; margin-right: 5px; background-image: url(../images/error.png); background-size: contain; background-repeat: no-repeat; vertical-align: middle; margin-top: -2px; }
            &.cur{
                 height:44px;
             }
        }
    }
    .form-succese{
        @extend .boxForm;
        text-align:Center;
        line-height:33px;
        h1{
            padding-bottom:10px;
            color:#ff7127;
        }
        em{
            color:#ff7127;
        }
        .btn{
            display:block;
            margin:10px 50px;
            background:#ff7127;
            color:#fff;
            border-radius:5px;
            text-align:center;
            font-size:12px;
        }
    }
</style>
<template>
    <article v-if="!success" class="boxForm">
        <div class="form" @click="clearEvent">
            <div class="item">
                <div class="input">
                    <input type="text" v-model="mobile" class="text" placeholder="请输入手机号" maxlength="11">
                </div>
            </div>
            <div class="item">
                <div class="input">
                    <input type="text" v-model="yzm" maxlength="4" class="text" placeholder="请输入图片验证码">
                </div>
                <div class="yzm">
                    <img :src="imgCodeUrl" @click="getImgCodeUrl">
                </div>
            </div>
            <div class="item">
                <div class="input">
                    <input type="text" v-model="sortMsg" class="text" maxlength="6" placeholder="请输入短信验证码">
                </div>
                <div class="yzm-submit">
                    <div class="btn" :class="{gray:sortClass}" @click="getSortMsg($event)">{{sortName}}</div>
                </div>
            </div>
            <div class="item">
                <div class="input">
                    <input type="password" v-model="pwd" class="text" placeholder="密码须为6-18位数字、字母组合" maxlength="18">
                </div>
            </div>
        </div>

        <div class="read img-size" data-fontSize="20">
            <div class="select" @click="check">
                <div class="check img-size" :class="{cur:checked}" data-width="25" data-height="25"></div>
                我已阅读并同意
            </div>
            <a href="https://www.duorongcf.com/zc">《注册协议》</a>
        </div>
        <div class='error img-size' :class='{cur:error}' data-fontSize='24'><i class='img-size' data-width='24' data-height='24'></i>{{errorMsg}}</div>
        <div class="submit">
            <div class="btn img-size" :class="{gray:btnClass}" @click="submit" data-height="60" data-lineHeight="60"  data-fontSize="24">下一步</div>
        </div>
        <div class="msg img-size" data-fontSize="20">
            操作中有任何疑问请联系客服：400-690-8896
        </div>
    </article>
    <article v-else class="form-succese">
        <h1 class="img-size" data-fontSize="36">恭喜您注册成功！</h1>
        <div class="content img-size" data-fontSize="20" data-lineHeight="50">
            <p>您已成功获得<em>小米MIX2</em>抽奖机会，</p>
            <p>中奖名单将于10月31日在多融财富</p>
            <p>官方微信公众号公布，快来关注吧！</p>
            <p>多融财富官方微信公众号：<em>duorongcf</em>（点击复制）</p>
            <p>立即下载多融理财APP，投资赚收益领礼品！</p>
        </div>
        <a class="btn" href="http://app.duorongcf.com/html/2weima.html">立即下载</a>
    </article>
</template>
<script>
    import Verify from '../common/verifcation'
	export default {
		data() {
			return {
				success : false,

				mobile : '',
				yzm : '',
				sortMsg : '',
				pwd : '',

                imgCodeUrl : Verify.imgCodeUrl(),
                sortName : '获取验证码',
                sortClass : false,

				checked : true,

				btnClass : false,
				error : false,
				errorMsg : '',
            }
		},
		mounted() {
		},
        watch : {
	        mobile : function(val){
	        	this.mobile = T.justNumber(val);
            }
        },
        methods : {
	        clearEvent(){
		        this.error = false;
	        },
	        showError( val ){
		        this.error = true;
		        this.errorMsg = val
	        },
	        check(){
	            this.checked = !this.checked;
            },
	        getImgCodeUrl(){
	        	this.imgCodeUrl = Verify.imgCodeUrl();
            },
	        getSortMsg( event ){//获取短信验证码
                const self  = this;
		        event.stopPropagation();
		        if(self.sortClass) return;
                this.verMobile(()=>{
                	self.verCode(()=>{
                		self.isReg(()=>{
			                self.sortClass = true;
			                Verify.sendMsg(self.mobile,self.yzm,(status,val)=>{
                                if(status){
                                    if(val.status===-1) {
	                                    self.sortName = val.time + 's后重发';
	                                    self.sortClass = true;
                                    }else{
	                                    self.sortName = '重新发送';
	                                    self.sortClass = false;
                                    }
                                }else{
	                                self.showError(val);
	                                self.sortClass = false;
                                }
                            })
                        });
                    });
                });
            },
            isReg( callback ){ //是否注册过
	            let self = this;
	            Verify.varMobile(this.mobile).then(obj=>{
		            if(obj.status){
			            callback();
		            }else{
			            self.showError(obj.msg);
		            }
	            });
            },
	        verMobile(callback){ //手机验证
		        let val = Verify.mobile(this.mobile);
		        if(val === true){
			        callback();
                }else{
			        return this.showError(val);
                }
	        },
            verPwd(callback){ //pwd
		        let val = Verify.pwd(this.pwd);
		        if(val === true){
			        callback();
                }else{
			        return this.showError(val);
                }
	        },
	        verCode(callback){ //图形验证
		        let val = Verify.imgCode(this.yzm);
		        if(val === true){
			        callback();
		        }else{
			        return this.showError(val);
		        }
            },
            verSort(callback){
	            if(this.sortMsg == ''){
		            return this.showError("请输入短信验证码");
	            }else if(this.sortMsg.length<4){
		            return this.showError("请输入正确的短信验证码");
	            }
	            callback();
            },
	        verification(callback){ //所有验证
		        let self = this;
		        self.verMobile(()=>{
			        self.verCode(()=>{
			        	self.verSort(()=>{
			        		self.verPwd(()=>{
						        if(self.checked){
							        self.isReg(callback);
						        }else{
							        self.showError("请同意注册协义后，再注册。")
						        }
                            });
                        });
                    })
		        });
            },
	        submit(){
	        	const self = this;
                this.verification(()=>{
	                self.btnClass = true;
	                Verify.register({
		                mobile: self.mobile,
		                pwd: self.pwd,
		                imgCode: self.yzm,
		                msg: self.sortMsg,
		                check: self.checked,
		                recommPhone: null
                    }).then(obj=>{
                        if(obj.status){//注册成功
                            self.success = true;
                        }else{
	                        self.showError(obj.msg)
                        }
                    });
                })
            }
        }
	}
</script>