<style scoped>
    @import './../css/main.css';
    @import './../css/index.css';
    @-webkit-keyframes move {  
        0%{top:0; }
        100%{ top:-500px; }     
    }
    .index{-webkit-overflow-scrolling:touch;}
    .wrap{position:relative; margin:0 auto;}  
    #list{ position:absolute;left:0;top:0;margin:0;padding:0; -webkit-animation:35s move infinite linear; color: #333;}  
    #list li{ list-style:none;} 
    .all{color: #ffffff; border-bottom: 1px dashed #ffd67e;margin: 0 auto;text-align: center;
        .textbg{ text-align: center; display: inline-block; background: url('../images/textbg.png') no-repeat; background-size: contain; }
    } 
</style>
<template >
<!-- <div id="wrapper"> -->
    <div class='module-scroll index'>
        <div class='banner img-size' data-height='555'></div>
        <div class="alReg img-size" data-width='686' data-height='326' data-marginTop='-80'>
            <div class="title img-size" data-width='636' data-paddingTop='42' data-fontSize='24'>
                <ul>
                    <li>手机号</li>
                    <li>领取时间</li>
                    <li>新手三重壕礼</li>
                </ul>
            </div>
            <div id="registerlist" class="wrap img-size" data-width="560" data-height="207" style="overflow: hidden;" data-marginTop='28'>
                <ul id="list" class="img-size" data-width="560" data-fontSize='20' data-lineHeight='40'>
                    <li v-for='item in registerList'>
                        <span style="width:35%;display: inline-block;">{{item.mobilePhone}}</span>
                        <span style="width:42%;display: inline-block;">{{item.registTime | data}}</span>
                        <span style="width:19%;display: inline-block;">已领取</span>
                    </li>
                </ul>
            </div>
        </div>   
        <div class="all img-size" data-fontSize='28' data-width='624' data-marginBottom='20' data-paddingTop='20' data-paddingBottom='20'>已有
            <span class="textbg img-size" data-width="28" data-height="45" v-show="strs.length>=1">{{strs[0]}}</span>
            <span class="textbg img-size" data-width="28" data-height="45" v-show="strs.length>=2">{{strs[1]}}</span>
            <span class="textbg img-size" data-width="28" data-height="45" v-show="strs.length>=3">{{strs[2]}}</span>
            <span class="textbg img-size" data-width="28" data-height="45" v-show="strs.length>=4">{{strs[3]}}</span>
            <span class="textbg img-size" data-width="28" data-height="45" v-show="strs.length>=5">{{strs[4]}}</span>
            <span class="textbg img-size" data-width="28" data-height="45" v-show="strs.length>=6">{{strs[5]}}</span>
            <span class="textbg img-size" data-width="28" data-height="45" v-show="strs.length>=7">{{strs[6]}}</span>
            <span class="textbg img-size" data-width="28" data-height="45" v-show="strs.length>=8">{{strs[7]}}</span>
            位用户领取了新手礼包
        </div>
        <div class="phone">
            <input type="tel" class="img-size" data-width='510' data-paddingLeft='40' data-marginBottom='10' data-height='90' data-lineHeight='85' placeholder="请输入您的手机号码" data-fontSize='30' v-model="items.phone" ref="phone" v-on:input="phoneInFun" maxlength="11">
            <p id="tzerror" class="tzgerror img-size" data-lineHeight="38" data-fontSize='24' data-paddingLeft='136' style="text-align: left;">{{lqerror}}</p>
            <div class="lqbtn img-size" data-marginTop='30' data-width='550' data-lineHeight='90' data-fontSize='36' @click="investment">立即领取1588元红包</div>
        </div>
        <cp :investCumulative = 'investCumulative' :investCount='investCount'></cp>
        <about></about>
        <div class="danger img-size" data-fontSize='18' data-lineHeight='30' data-paddingTop='35' data-paddingBottom='35' data-marginBottom='120'> 
            <p>市场有风险 投资需谨慎<br>平台建议的历史年化收益率仅供参考，不代表未来实际收益</p>
            <p>icp备案：沪ICP备15011207号<br>公司名称：上海银砖金融信息服务有限公司</p>
        </div>
        <div class="float img-size" data-height='105' data-paddingTop='15' @click='gotoTop'>
            <div class="lqbtn img-size" data-width='550' data-lineHeight='90' data-fontSize='36'>立即领取1588元红包</div>
        </div>
    </div>
<!-- </div> -->
</template>
<script>
    import requirePop from '../pop/requirePop.js';
    import about from '../html/about.vue';
    import cp from '../html/cp.vue';
    export default {
        data(){
            return {
                registerList:null,
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
            }
        },
        components:{
            about,cp
        },
        mounted(){
            T.setImgSize();
            var self = this;
            localStorage.clear('TZJE');
            // var myscroll;
            // function loaded(){
            //     setTimeout(function(){
            //         myscroll=new iScroll("wrapper");
            //     },100 );
            // }
            // window.addEventListener("load",loaded,false);



            $('.index').on('scroll', function() {
                var scrollTop = $('.index').scrollTop();
                if(scrollTop > $('.danger').offset().top-200) {
                    $('.float').show();
                    scrollTop = 0;
                } else {
                    $('.float').hide();
                }
            });
            function init(){
                T.ajax({
                    url : '/welcome-the-new/invest-rank.do',
                    data : {
                        time:new Date(),
                    },
                    callback :true,
                }).then(data=>{
                    self.registerList = data.map.listDrMessage;
                })

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
        filters: {
            data:function (input) {
                var d = new Date(input);
                var year = d.getFullYear();
                var month = d.getMonth() + 1;
                var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
                var months = month <10 ? '0' + month : '' + month;
                return year+ '-' + months + '-' + day;
            }
        },
        methods : {
            gotoTop () {
                $('.index').scrollTop(300);
            },
            phoneInFun : function(){
                var phone = this.$refs.phone.value;
                var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
                if(reg.test(phone)==false){
                    this.lqerror = '请填写正确的手机号';
                }else{this.lqerror = '';this.phoneOK = true;}
            },
            investment: function(){
                var self = this;
                var phone = self.$refs.phone.value;
                var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
                if(reg.test(phone)==false){
                    self.lqerror = '请填写正确的手机号';
                }else{
                    TDAPP.onEvent('LJLQBTN');
                    T.ajax({
                        url : '/existMobilePhone',
                        data: {
                            mobilePhone:phone
                        },
                        callback:true,
                    }).then(data=>{
                        if(data.success){
                            if(data.map.exists){
                                self.lqerror = '';
                                router.replace({path: 'login', query: { toFrom: T.toFrom }})
                                T.localStorage.setItem('phone',phone);
                                TDAPP.onEvent('LJLQToLogin');
                            }else{
                                self.lqerror = '';
                                TDAPP.onEvent('LJLQToReg');
                                router.replace({path: 'register', query: { toFrom: T.toFrom }})
                                T.localStorage.setItem('phone',phone);
                            }
                        }
                    })
                }
            }
        }
    }
</script>
