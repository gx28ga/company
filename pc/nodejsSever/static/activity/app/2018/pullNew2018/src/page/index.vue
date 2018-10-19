<style scoped>
    @import './../css/main.css';
    @import './../css/index.css';
    @-webkit-keyframes move {  
        0%{top:0; }
        100%{ top:-500px; }     
    }
    .index{-webkit-overflow-scrolling:touch;}
    .float{
        position: fixed; bottom: 0; width: 100%;
        background: #333;
        background: linear-gradient(to top,#365fe6,#693cfe);
    }
</style>
<template >
    <div class='module-scroll index'>
        <div class='banner img-size' data-height='748'></div>
          
        <div class="phone">
            <p class="img-size" data-lineHeight='88' data-fongtSize='30'>已有<span>{{peonum}}</span>位用户领取了新手大礼包</p>
            <div v-show='regbox == false'>
                <!-- 手机号输入框 -->
                <input type="tel" class="inphone img-size" data-borderRadius='10' data-width='600' data-paddingLeft='40' data-marginBottom='10' data-height='90' data-lineHeight='86' placeholder="请输入您的手机号码" data-fontSize='30' v-model="items.phone" ref="phone" v-on:input="phoneInFun" maxlength="11">
                <p id="tzerror" class="tzgerror img-size" data-lineHeight="38" data-fontSize='24' data-paddingLeft='136' style="text-align: left;">{{lqerror}}</p>
                <!-- 注册按钮 -->
                <div class="lqbtn img-size" data-marginTop='30' data-width='600' data-lineHeight='90' data-fontSize='30' @click='investment'>立即领取1588元现金红包+10000体验金</div>
            </div>

            <!-- 其余注册输入信息 -->
           <div  v-show='regbox == true'>
               <div class="regbox img-size" data-width='600' data-fontSize='30'>
                    <p class="img-size" data-lineHeight='88' data-paddingLeft='40' style="text-align:left;color:#fff;">注册账户：{{phone}}</p>
                    <!-- 图形验证码 -->
                    <div class="img-size">
                        <input type="text" class="img-size" data-borderRadius='10' data-width='600' data-paddingLeft='40' data-marginBottom='10' data-height='90' data-lineHeight='90' ref="imgCode" placeholder="请输入图片验证码" v-model="imgCode" v-on:blur="imgCodeBlurFun">

                        <img class="img-size" data-width="136" data-height="60" data-borderRadius='14' data-marginTop='-86' data-marginRight='12' style="display: block;float: right;" @click='changeIMG()' src="/login/validateCode.do" alt="">
                    </div>
                    <p class='error img-size' data-fontSize='26'>{{imgCodeErr}}</p>
                    <!-- 验证码 -->
                    <div class="img-size" data-marginTop='30'>
                        <input type="text" class="img-size" data-borderRadius='10' data-width='600' data-paddingLeft='40' data-marginBottom='10' data-height='90' data-lineHeight='86' v-model="msg" ref="msg" placeholder="请输入短信验证码" v-on:input="msgInFun" v-on:blur="msgBlurFun">
                        <span class="yzd img-size" data-fontSize='24' data-marginTop='-72' data-marginRight='20' style="display: block;float: right;color:#0099ff;text-decoration:underline;"  @click='sendCode'>获取验证码</span>
                    </div>
                    <p class='error img-size' data-fontSize='26'>{{msgErr}}</p>
                    
                    <!-- 协议 -->
                    <div class="img-size" data-marginTop='20'>
                        <input class="check img-size" data-fontSize="32" data-marginTop="25" style="display:inline-block;" type="checkbox" v-model="agree" name="agree" true-exp="a" false-exp="b"  v-on:change="agreelocked"/>
                        <span class="img-size" data-fontSize='30' style="color:#fff;">我已阅读并同意<a href="https://www.duorongcf.com/zc" style="color:#9bddff;">《注册协议》</a></span>
                        <div style="text-align: center;color:#ffc459;" class="regErr error img-size" data-marginTop='8' data-fontSize='24'>{{regErr}}</div>
                    </div>
                    <!-- 注册按钮 -->
                    <div class="lqbtn img-size" data-marginTop='30' data-width='600' data-lineHeight='90' data-fontSize='30' @click="submit">立即领取1588元现金红包+10000体验金</div>
                </div>
           </div>
            

        </div>

        <!-- 华丽的分割线 -->
        <div class="parting-line img-size" data-width='711' data-height='29' data-marginTop='68'>
        </div>

        
        <!-- <about></about> -->
        <div class="img-size" data-marginTop='36'>
        <div class="faddish-box img-size" data-width='720' data-height='570'>
            <div class="title img-size" data-width='242' data-height='49' data-top='55'></div>
            <div class="box img-size" data-height='451' data-top='110'  data-fontSize='24'>
                <div class="A img-size" data-width='307' data-height='371' data-marginLeft='35' data-marginRight='35'>
                    <p class="img-size" data-lineHeight='76'>新手专享 高息月标</p>
                    <p class="img-size" data-fontSize='100'>12<span class="img-size" data-fontSize='48'>%</span></p>
                    <p class="img-size" data-fontSize='24'>历史年化收益</p>
                    <div class="btn img-size" data-width='230' data-height='60' data-marginTop='48' @click='gotoTop'></div>
                </div>
                <div class="B img-size" data-width='307' data-height='371'>
                    <p class="img-size" data-lineHeight='76'>爆款开抢</p>
                    <p class="img-size" data-fontSize='100'>8.5<span class="img-size" data-fontSize='48'>%起</span></p>
                    <p class="img-size" data-fontSize='24'>历史年化收益</p>
                    <div class="btn img-size" data-width='230' data-height='60'data-marginTop='48' @click='gotoTop'></div>
                </div>
            </div>
        </div>
    </div>
    <div class="about img-size" data-marginTop='36'>
        <div class="faddish-box faddish-box2 img-size" data-width='720' data-height='605'>
            <div class="title2 img-size" data-width='471' data-height='50' data-top='55'></div>
            <div class="box2 img-size" data-width='675' data-height='451' data-top='125'  data-fontSize='24' data-paddingLeft='33'>
                <div class="A img-size" data-width='320' data-height='123' data-borderRadius='10' data-marginRight='16'>
                    <div class="icon1 img-size" data-width='92' data-height='92' data-marginTop='16' data-marginLeft='17'></div>
                    <div class="info img-size" data-fontSize='24' data-paddingLeft='23' data-paddingTop='25' data-lineHeight='38'><span>累计投资额</span><br><span>51亿元</span></div>
                </div>
                <div class="A img-size" data-width='320' data-height='123' data-borderRadius='10'>
                    <div class="icon2 img-size" data-width='92' data-height='92' data-marginTop='16' data-marginLeft='17'></div>
                    <div class="info img-size" data-fontSize='24' data-paddingLeft='23' data-paddingTop='25' data-lineHeight='38'><span>45万+</span><br><span>信赖之选</span></div>
                </div>
                <div class="A img-size" data-width='320' data-height='123' data-borderRadius='10' data-marginRight='16'>
                    <div class="icon3 img-size" data-width='92' data-height='92' data-marginTop='16' data-marginLeft='17'></div>
                    <div class="info img-size" data-fontSize='24' data-paddingLeft='23' data-paddingTop='25' data-lineHeight='38'><span>股东背景</span><br><span>国资+上市控股</span></div>
                </div>
                <div class="A img-size" data-width='320' data-height='123' data-borderRadius='10'>
                    <div class="icon4 img-size" data-width='92' data-height='92' data-marginTop='16' data-marginLeft='17'></div>
                    <div class="info img-size" data-fontSize='24' data-paddingLeft='23' data-paddingTop='25' data-lineHeight='38'><span>实力雄厚</span><br><span>1.5亿注册资金</span></div>
                </div>
                <div class="A img-size" data-width='320' data-height='123' data-borderRadius='10' data-marginRight='16'>
                    <div class="icon5 img-size" data-width='92' data-height='92' data-marginTop='16' data-marginLeft='17'></div>
                    <div class="info img-size" data-fontSize='24' data-paddingLeft='23' data-paddingTop='10' data-lineHeight='32'><span>系统信息安全</span><br><span>等级保护</span><br><span>三级备案</span></div>
                </div>
                <div class="A img-size" data-width='320' data-height='123' data-borderRadius='10'>
                    <div class="icon6 img-size" data-width='92' data-height='92' data-marginTop='16' data-marginLeft='17'></div>
                    <div class="info img-size" data-fontSize='24' data-paddingLeft='23' data-paddingTop='25' data-lineHeight='38'><span>银行存管</span><br><span>资金全程安全</span></div>
                </div>
            </div>
        </div>
    </div>

        <div class="danger img-size" data-fontSize='18' data-lineHeight='30' data-paddingTop='35' data-paddingBottom='35' data-marginBottom='120'> 
            <p>市场有风险 投资需谨慎<br>平台建议的历史年化收益率仅供参考，不代表未来实际收益</p>
            <p>公司名称：上海银砖金融信息服务有限公司<br>
                服务热线：4006-908-896<br> 
                备案信息：沪ICP备15011207号<br></p>
        </div>

        <div class="float img-size" data-height='105' data-paddingTop='15' @click='gotoTop'>
            <div class="lqbtn img-size" data-width='600' data-lineHeight='90' data-fontSize='30'>立即领取1588元现金红包+10000体验金</div>
        </div>
    </div>
</template>
<script>
    import requirePop from '../pop/requirePop.js';
    import about from './about.vue';
    //import Verify from '../common/verifcation';
    //import reg from './register.vue';
    export default {
        data(){
            return {
                strs: '',
                peonum: 0,
                items: {
                    phone:'',
                },
                phone : '',
                lqtan :false,
                lqerror : '',
                phoneOK : false,
                investCumulative: '',
                investCount: '',
                regbox: false,

                agree: true,
                countdown :60,
                timeDJS : true,
                imgCode : '',
                msg : '',
                pass :'',
                imgOK : false,
                msgOK :false,
                imgCodeErr : '',
                msgErr : '',
                regErr : '',
                //imgCodeUrl : Verify.imgCodeUrl(),
            }
        },
        components:{
            about,
            //reg
        },
        mounted(){
            T.setImgSize();
            T.getAppInfo();
            var self = this;
            this.imgCodeReg = /^[0-9A-Za-z]{4}$/;
            this.msgReg = /^[0-9]{4}$/;
            $('.index').on('scroll', function() {
                var scrollTop = $('.index').scrollTop();
                if(scrollTop > $('.faddish-box').offset().top) {
                    $('.float').show();
                    scrollTop = 0;
                } else {
                    $('.float').hide();
                }
            });
            function init(){
                T.ajax({
                    url : '/index/regAndInvestCount.do',
                    data : {
                        time:new Date(),
                    },
                    callback :true,
                }).then(data=>{
                    self.investCumulative = data.map.investCumulative;
                    self.investCount = data.map.investCount;
                    self.peonum = data.map.regCount;
                    self.strs = self.peonum.split('');
                }) 
                $('.float').hide();
            };
            init();
        },
        methods : {
            gotoTop () {
                $('.index').scrollTop(0);
                $('.inphone').focus();
            },
            /*getImgCodeUrl(){
                this.imgCodeUrl = this.imgCodeUrl();
            },
            imgCodeUrl(){
                return http+"/login/validateCode.do?"+new Date().getTime();
            },*/
            phoneInFun : function(){
                var phone = this.$refs.phone.value;
                var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
                if(reg.test(phone)==false){
                    this.lqerror = '请填写正确的手机号';
                }else{
                    this.lqerror = '';
                    this.phoneOK = true;
                    this.investment();
                }
            },
            investment: function(){
                var self = this;
                var phone = self.$refs.phone.value;
                var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
                if(reg.test(phone)==false){
                    self.lqerror = '请填写正确的手机号';
                }else{
                    T.ajax({
                        url : '/existMobilePhone',
                        data: {
                            mobilePhone:phone
                        },
                        callback:true,
                    }).then(data=>{
                        if(data.success){
                            if(data.map.exists){
                                self.lqerror = '该号码已注册';
                            }else{
                                self.lqerror = '';
                                //号码校验结论为，可以继续注册，出现注册块
                                setTimeout(function(){
                                    self.phone = phone;
                                    self.regbox = true;
                                },300)
                            }
                        }
                    })
                }
            },
            imgCodeBlurFun: function(){
                if(this.imgCode!=''){
                    if(this.imgCodeReg.test(this.imgCode)==false){
                        this.imgCodeErr = "图片验证码格式错误";
                    }else{
                        this.imgCodeErr = "";
                        this.imgOK = true;
                    }
                }
            },
            msgInFun: function(){
                if(this.msgReg.test(this.msg)==true){ 
                    this.msgErr = "";
                    this.msgOK = true;
                }
            },
            msgBlurFun: function(){ 
                if(this.msg!=''){
                    if(this.msgReg.test(this.msg)==false){
                        this.msgErr = "验证码格式错误";
                        this.msgOK = false;
                    }else{
                        this.msgErr = "";
                        this.msgOK = true;
                    }
                }
            },
            agreelocked : function(){
                this.agree = this.agree;
            },
            submit : function(){
                if(!this.agree){
                    this.regErr = "请勾选注册协议";
                }else if(!this.imgOK || !this.msgOK) {
                    this.regErr = "请输入完整的信息";
                }else{
                    //specialMsg:'templateA' 市场需求，注册成功后，该页面需要不同的短信模板
                    this.pass = this.phone.substring(0,6);
                    T.ajax({
                        url:'/reg',
                        data:{
                            mobilePhone: this.phone,
                            passWord: this.pass,
                            picCode: this.imgCode,
                            smsCode: this.msg,
                            checkbox: this.agree,
                            specialMsg:'templateA',
                            toFrom: T.toFrom
                        },
                        callback:true
                    }).then(data=>{
                        if(data.success){
                            router.replace({path: 'regOK', query: { toFrom: T.toFrom }})
                        }else{
                            if(data.errorCode == '1001'){this.regErr = "短信验证码为空";}
                            if(data.errorCode == '1002'){this.regErr = "短信验证码错误";}
                            if(data.errorCode == '1003'){this.regErr = "手机号为空";}
                            if(data.errorCode == '1004'){this.regErr = "图片验证码为空";}
                            if(data.errorCode == '1005'){this.regErr = "密码格式错误";}
                            if(data.errorCode == '1006'){this.regErr = "未勾选注册协议";}
                            if(data.errorCode == '1007'){this.regErr = "手机号已注册";}
                            if(data.errorCode == '1008'){this.regErr = "推荐人不存在";}
                        }
                    })
                }
            },
            changeIMG: function(){
                if($('img')[0]!= undefined){
                    $('img')[0].src += '?'+ new Date().getTime();
                }
            },
            sendCode :function () {
                var self = this;
                function settime() { 
                    if (self.countdown == 0) {
                        $('.yzd')[0].style.color='#d72f2f'; 
                        $('.yzd')[0].innerHTML="获取验证码"; 
                        clearTimeout(times);
                        self.countdown = 60;  
                        self.timeDJS = true;
                        return;
                    } else { 
                        self.timeDJS = false;
                        $('.yzd')[0].style.color='#6a6b6b'; 
                        $('.yzd')[0].innerHTML="重 发 (" + self.countdown + ")"; 
                        self.countdown --;
                    } 
                    var times = setTimeout(function() { 
                        settime() 
                    },1000) 
                } 
                if(self.timeDJS){
                    if(self.imgCodeReg.test(self.imgCode)==true){
                        T.ajax({
                            url :'/sendRegMsg',
                            data : {
                                mobilePhone : self.phone,
                                picCode : self.imgCode,
                                type : 1
                            },
                            callback :true,
                        }).then(data=>{
                            if(data.success){ 
                                settime();
                                this.msgErr = "";
                            }else{
                                if(data.errorCode=='1001'){this.msgErr = "图片验证码不正确";}
                                if(data.errorCode=='1002'){this.msgErr = "当天短信发送超过限制";}
                                if(data.errorCode=='1003'){this.msgErr = "短信发送失败";}
                                if(data.errorCode=='8888'){this.msgErr = "频繁操作";}
                                if(data.errorCode=='9999'){this.msgErr = "表示系统错误";}
                            }
                        })
                    }else{
                        this.msgErr = "请填写正确的图片验证码";
                    }
                }
            }
        }
    }
</script>