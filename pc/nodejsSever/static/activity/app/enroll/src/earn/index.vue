<style lang='sass'>
   @import '../style/global.scss'; 
   .enrollBox{
    background:#ffebae;
    .banner{
        .bgTitle{
           margin:0 auto;
           display:block; 
        }
    }
    .drtext{
        text-align:center;
        color:#cf8d1d;
        @include font-size(14px);
        .con{
            font-family:"微软雅黑";
        }
    }
    .hongbaoclose{
        @include contain("../images/notOpen.png");
        margin:0 auto;
        position: relative;
        .openBtn{
            position:absolute;
        }
    }
    .hongbaoOpen{
        @include contain("../images/open.png");
    } 
    .error{
      color:#fff;
    }
    .login{
        background:#ff4313;
        border-radius:$s10;
        margin:0 auto;
       input{
            background:#fff5dc;
            border:$s1 solid #d21917;
            border-radius:$s5;
            margin:0 auto;
            display:block;
            @include font-size(18px);
            color:#ccc;
            padding-left:$s10;
       }
       ::-webkit-input-placeholder{
            color:#ccc;
            @include font-size(18px);
       }
       .mobile{
        text-align:center;
       }
       .login-msm-box{
             @include font-size(28px);
           .smsCode{
            display:block;
            margin-right:$s10;
           }
            .msmBtn{
                display:block;
                border:$s1 solid #d83634;
                background:#fee86e;
                color:#c97200;
                border-radius:$s5;
                text-align:center;
                @include font-size(18px);
            }
            .fl{
                float: left;
            }
            .fr{
                float: right;
            }
       }
       .identify{
        .fl{
            float: left;
        }
        .fr{
            float: right;
        }
       }
       .login-recomm-box{
        color:#fff5dc;
       }
       .fastClick{
            text-align:center;
            background:#fee86e;
            color:#c07828;
            display:block;
            margin:0 auto;
            border-radius:$s10;
            @include font-size(20px);
       }
    }
    .tixian{
       text-align:center;
       @include font-size(14px);
       color:#333; 
    }
    .bottom{
        @include contain('../images/bottom.png');
    }
    .bot{
       background:#ff4313;
       color:#fff;
       @include font-size(12px);
       text-align:center;
       position:relative;
       .line{
          height:1px;
          background:#fff;
          position:absolute;
          margin:0 auto;
          .linBox{
            background:#ff4313;
            margin:0 auto;
          }
       }
       .fengxian{
        // border-top:1px solid #fff;
        text-align:center;
        color:#fff;
        position:relative;
        p{
            margin:0 auto;
        }
       }
    }
    .download-box{
       position:fixed;
       bottom:0;
       left:0;
       width:100%;
       background:rgba(0,0,0,0.6);
       .download{
            color:#fff;
            position:relative;
            margin:0 auto;
            @include font-size(15px);
            span{
                color:#fe7433;
                margin:0 $s3;
                @includefont-size(18px);
            }
            a{
                text-align:center;
                border-radius:$s5;
                background:#fee86e;
                color:#c07826;
                position:absolute;
                right:0;
                @include font-size(14px);
            }

       }
    }
}

</style>
<template>
   <div class='enrollBox img-size' data-paddingTop='35'>
        <div class='banner img-size'><img src="../images/topbg.png" alt="" class='img-size bgTitle' data-width='600' data-height='75'></div>
        <div class='drtext img-size' data-paddingTop='50' data-marginBottom='90'>
            <p class='con img-size' data-height='50' data-lineHeight='50'>国资委旗下事业单位控股互联网金融平台
            <br>已正式上线银行存管!</p>
        </div>
        <div class='hongbaoclose img-size' data-width='640' data-height='530' v-show='hongBao==false' >
            <div class='openBtn img-size' data-width='140' data-height='140' data-bottom='35'  data-left='250'  @click="openHongBao"></div>
        </div>
        <p class='tixian img-size' data-marginBottom='40'  v-show='hongBao ==false'>收益可提现</p>
        <div class='hongbaoOpen img-size' data-width='730' data-height='414' v-show='hongBao==true'></div>
        <!-- 表单提交 -->
        <reg v-show='hongBao==true'></reg>
        <div class='bottom img-size' data-height='1225'></div>
        <div class="bot img-size" data-height='100'>
            <!-- <div class="bottom"></div> -->
            <div class='line img-size' data-width='650' data-top='20' data-left='50'>
                <div class='linBox img-size' data-width='400' data-height='2'></div>
            </div>
            <div ng-if='isText' class="img-size fengxian"  data-marginTop='-20'>
                <p class='img-size' data-width='300' data-paddingLeft='50' data-paddingRight='50' data-top='15'>预期收益不等于实际收益</p>
            </div>
            <p>投资有风险 理财需谨慎</p>
        </div>
        <!-- cd256 删除 <div class="download-box img-size" data-height='100' data-lineHeight='100'>
         <div class="download img-size" data-width='730'>下载多融财富App领取<span>1</span>万理财金<a target="_bank" href="/html/2weimaActivity.html"  class='img-size' data-width='200' data-height='65' data-marginTop='20' data-lineHeight='65'>立即下载</a></div>
        </div> -->
    </div>
</template>
<script>
import {userIsNew,sendMsg,subReg} from '../common/URL.js';
import reg from './reg.vue';
  export default {
    data(){
      return{
        hongBao:false,
      }
    },
    components : {
      reg
    },
    mounted(){
      T.setImgSize();
      T.getAppInfo();
      $('#app').on('scroll', function() {
          var scrollTop = $('#app').scrollTop();         
          if(scrollTop > $('.bottom').offset().top) {         
              $('.download-box').show();
              scrollTop = 0;
          } else {
              $('.download-box').hide();
          }
      });
      function show(){
        $('.download-box').hide();
      }
      show();
    },
    methods:{
      openHongBao:function(){
        var self=this;
        self.hongBao=true;
      }
    }   
}
</script>
