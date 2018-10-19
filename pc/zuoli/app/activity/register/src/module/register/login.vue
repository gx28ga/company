<style scoped>
    .loginpa{
        .top{
            background: url("../../images/limoney/top.png") no-repeat;
            background-size:contain;
            box-sizing: border-box;
        }
        .item{
            display:flex;
            flex-direction:row;
            padding:5px 0;
            margin:10px 30px 5px;
            border-bottom:1px solid #cccccc;
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
                    font-size:30px;
                }
            }
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
                font-size:24px;
                color:#0099ff;
                text-align:center;
                &.gray{ background:#fff; }
            }
        }
        .error{
            color:#999;
            margin-left: 30px;
            display: none;
            &.cur{
                display: block;
            }
        }
        .enrollBtn{
            color:#ffffff;
            text-align: center;
            border-radius: 45px;
            margin:10px auto;
            background:-webkit-gradient(linear, 0 0, 100% 0, from(#39d6c6), to(#3bb5dd));
        }

    }
   
</style>
<template>
<section class='loginpa left-sider img-size'>
    <div class='top img-size' data-height='60'></div>
    <div  @click='clear'>
    <div class='item'>
         <div class='input'>
             <input type="text" v-model="yzm" maxlength="4" class="text" placeholder="请输入图片验证码">
         </div>
         <div clss='yzm'>
            <img :src="imgCodeUrl"  @click="getImgCodeUrl" class='img-size' data-height="63" data-width="136" alt=""> 
         </div>
    </div>
    <div class='item'>
        <div class='input'>
            <input type="text" v-model="sortMsg" class="text" maxlength="4" placeholder="请输入短信验证码">        
        </div>
         <div class="yzm-submit">
                  <div class="btn img-size" :class="{gray:sortClass}" @click="getSortMsg($event)" data-fontSize='24'>{{sortName}}</div>
               </div>
    </div>
    <div class='item'>
       <div class="input">
                    <input type="password" v-model="pwd" class="text" placeholder="请设置登录密码">
        </div>
    </div>
    <div class='error img-size' :class='{cur:error}' data-fontSize='24' data-height='30' data-lineHeight='30'>{{errorMsg}}</div>
    <div id='result' style='display:none'></div>
    <div id='tip' style='display:none'></div>
    </div>
      <div class='enrollBtn img-size' data-height='90' data-width='550' data-lineHeight='90' data-fontSize='36' @click='zhuce'>立即注册</div>
</section>
</template>
<script>
    import Verify from '../../common/verifcation'
    import requirePop from '../../pop/requirePop.js';
    export default {
        components:{
          
        },
        data(){
            return {
                mobile : '',
                yzm : '',
                sortMsg : '',
                pwd : '',
                sortName : '获取验证码',
                sortClass : false,
                imgCodeUrl : Verify.imgCodeUrl(),
                checked : true,
                appkey:"oQIhAP24Kb3Bsf7IE14wpl751bQc9VAPsFZ+lql4riBgg2TDAiEAsSomOO1v8mK2VWhEQh6mttgN",
                btnClass : false,
                error : false,
                errorMsg : '',
                signMsg:" ",
                type:"register",
                string:"",
            }
        },
        mounted(){
            this.geturl();
            this.location();
        },
        methods : {
            geturl(){
              this.mobile=this.$route.query.phone;  
            },
            clear(){
                this.error=false;
            },
             showError( val ){
                this.error = true;
                this.errorMsg = val;
            },
            getImgCodeUrl(){
                this.imgCodeUrl = Verify.imgCodeUrl();
            },
            verCode(callback){ //图形验证
                let val = Verify.imgCode(this.yzm);
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
              verSort(callback){
                if(this.sortMsg == ''){
                    return this.showError("请输入短信验证码");
                }else if(this.sortMsg.length<4){
                    return this.showError("请输入正确的短信验证码");
                }
                callback();
            },
           getSortMsg( event ){//获取短信验证码
                const self  = this;
                self.mobile=this.$route.query.phone;
                event.stopPropagation();
                if(self.sortClass) return;
                    self.verCode(()=>{
                        self.sortClass = true;
                        Verify.sendMsg(self.mobile,self.yzm,(data,val)=>{
                                if(data){
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
            },
            verification(callback){ //所有验证
                let self = this;
                    self.verCode(()=>{
                        self.verSort(()=>{
                            self.verPwd(callback);
                        });
                    })
            },
            location(){
                 var map, geolocation,string;
                    //加载地图，调用浏览器定位服务
                    map = new AMap.Map('container', {
                        resizeEnable: true
                    });
                    map.plugin('AMap.Geolocation', function() {
                        geolocation = new AMap.Geolocation({
                            enableHighAccuracy: true,//是否使用高精度定位，默认:true
                            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                            zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                            buttonPosition:'RB'
                        });
                        map.addControl(geolocation);
                        geolocation.getCurrentPosition();
                        AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
                        AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
                    });
                        var  str=[];
                        function onComplete(data) {
                        str.push(data.position.getLng());
                        str.push(data.position.getLat());
                        document.getElementById("tip").innerHTML=str.join(",");
                          window.onload=locat(str);
                        if(data.accuracy){
                             str.push('精度：' + data.accuracy + ' 米');
                        }//如为IP精确定位结果则没有精度信息
                        str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
                         // document.getElementById('tip').innerHTML = str.join('<br>');
                         }
                    //解析定位错误信息
                        function onError(data) {
                        document.getElementById('tip').innerHTML = '定位失败';
                         }
                        function locat(arr){
                                var map = new AMap.Map("container", {
                                resizeEnable: true,
                                zoom: 18
                                });
                                var lnglatXY=arr;
                                regeocoder();
                                function regeocoder() {  //逆地理编码
                                var geocoder = new AMap.Geocoder({
                                    radius: 1000,
                                    extensions: "all"
                                });        
                                geocoder.getAddress(lnglatXY, function(status, result) {
                                    if (status === 'complete' && result.info === 'OK') {
                                        geocoder_CallBack(result);
                                    }
                                });      
                                var marker = new AMap.Marker({  //加点
                                    map: map,
                                    position: lnglatXY
                                });
                                map.setFitView();
                            }
                            function geocoder_CallBack(data) {
                                var address = data.regeocode.formattedAddress; //返回地址描述
                                document.getElementById("result").innerHTML = address;
                            }
                         }
            },
            locationCity(arr){
                var map = new AMap.Map("container", {
                        resizeEnable: true,
                        zoom: 18
                        });
                        var lnglatXY=arr;
                        //lnglatXY = document.getElementById("tip").innerText; //已知点坐标
                        function regeocoder() {  //逆地理编码
                        var geocoder = new AMap.Geocoder({
                            radius: 1000,
                            extensions: "all"
                        });        
                        geocoder.getAddress(lnglatXY, function(status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                                geocoder_CallBack(result);
                            }
                        });      
                        var marker = new AMap.Marker({  //加点
                            map: map,
                            position: lnglatXY
                        });
                        map.setFitView();
                    }
                    function geocoder_CallBack(data) {
                        var address = data.regeocode.formattedAddress; //返回地址描述
                        console.log(address);
                        document.getElementById("result").innerHTML = address;
                    }
            },
            zhuce(){
                this.verification(()=>{  
                const self=this;
               const address=document.getElementById("tip").innerText;//定位
               const location=document.getElementById("result").innerText;//获取的地址
                const pwd=md5(self.pwd);
                const mobile=this.$route.query.phone;
                if(T.toFrom==null){
                    T.toFrom="";
                }
               var appkey="oQIhAP24Kb3Bsf7IE14wpl751bQc9VAPsFZ+lql4riBgg2TDAiEAsSomOO1v8mK2VWhEQh6mttgN";
               const la=appkey+"channelCode="+T.toFrom+"|client="+"H5|invitationCode=|loginName="+mobile+"|loginPwd="+pwd+"|registerAddr="+location+"|registerCoordinate="+address+"|vcode="+self.sortMsg;
            const signMassage=md5(la);
            setTimeout(function(){
                $.ajax({
                url:"/api/user/register.htm",
                beforeSend: function(request) {
                        request.setRequestHeader("signMsg", signMassage);
                },
                type : 'POST',
                dataType : 'json',
                accept: "application/json; text/plain",
                contentType:'application/x-www-form-urlencoded',
                data: {
                    client: "H5",
                    invitationCode: null,
                    loginName: mobile,
                    loginPwd: pwd,
                    registerAddr: location,
                     registerCoordinate:address,
                    vcode:self.sortMsg,
                    channelCode : T.toFrom
                    },
                    success:function(data){
                       if(data.code==200){
                        router.push("/download");
                       }else if(data.code==400){
                        self.showError(data.msg);
                       }
                    }
             })
            },500)
                })
              
                 
            },   
        }
    }
</script>
