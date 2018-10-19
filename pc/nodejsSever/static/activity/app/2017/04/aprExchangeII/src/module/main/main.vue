<style lang='sass'>
	@import '../../css/global.scss';

    .main-box{@include contain('../../images/new/main/main-bg.jpg'); position: relative;
        .active-part{
            position: absolute; top: 50%; left: 8%;
            .user-msg{
                width: 100%; /*height: 37.99999%;*/ height: 40%;
                @include box; @include box-sizing; @include box-orient(vertical);
                .point-info{@include flex; height: 50%;
                    @include box; @include box-orient(horizontal); @include boxMiddle(end);
                    width: 100%; position: relative;
                    .lpart{@include flex;
                        @include box; height: 100%; padding-bottom: 0; padding-left: $s10;
                        .wrap{
                            position: absolute; bottom: 0;
                            span{
                                color: #fff997;
                                @include font-size(17px);
                            }
                        }
                    }
                    .rpart{
                        @include box;
                        @include boxCenter; @include boxMiddle; padding: $s2 $s10;
                        .btn-select{
                            @include contain('../../images/new/main/select-btn.png');
                        }
                        .btn-login{
                            @include contain('../../images/new/main/func-btn.jpg');
                        }
                    }
                }
                .gotten-info{height: 50%;@include flex;
                    @include box; @include boxMiddle;
                    width: 100%;
                    .get-prize{
                        padding-left: $s10; @include font-size(13px);
                        .name{color: #fff997;}
                        .contact-link{
                            @include size(margin-left, 8px);
                            color: rgb(252, 3, 211); text-decoration: underline;
                        }
                    }
                }
            }
            .exchanged-sign{
                position: absolute;
                top: 2%; right: 2%;
                width: 20%; height: 24%;
                @include contain('../../images/new/main/exchanged-sign.png');
            }
            .formula{
                @include box; @include boxMiddle;
                position: absolute; top: 38%; left: 7.2%;
                span{
                    color: white; font-size: $s12;
                }
            }
            .invest-btn{@include box; @include boxCenter;
                @include contain('../../images/new/main/invest-btn.jpg');background-position-x: center;
                position: absolute; top: 58.75%;
            }
            .over-btn{@include box; @include boxCenter;
                @include contain('../../images/new/main/over.png');background-position-x: center;
                position: absolute; top: 58.75%;
            }
            .remark{position: absolute; top: 83%; width: 100%;
                @include box; @include boxCenter; @include boxMiddle;
                span{
                    color: white;
                    @include font-size(11px);
                }
            }
        }
        .appeal{
            position: absolute; top: 86.84210526315789%; height: 10%; width: 100%;
            @include box; @include boxMiddle; @include boxCenter;
            .wrap{
                @include box; @include boxMiddle; @include boxCenter;
                color: white;
                @include font-size(15px);
                span{
                    color: #fff997;
                }
            }
        }
	}
	.main-box::after{
		content: '';
		width: 0;
		@include size(height, 20px);
		display: block;
	}
</style>
<template>
<div class="main-box img-size" data-width="750" data-height="1140">
    <div class="active-part img-size" data-width="626" data-height="319">
        <div class="user-msg">
            <div class="point-info">
                <div class="lpart">
                    <div class="wrap">
                        <span>您当前的财富值: {{coinValue}}</span>
                    </div>
                </div>
                <div class="rpart">
                    <div v-if="isLogin" v-show="prizeName == ''" class="btn-select img-size" data-width="129" data-height="37" @click="popSelect"></div>
                    <div v-else class="btn-login img-size" data-width="129" data-height="37" @click="login"></div>
                </div>
            </div>
            <div class="gotten-info">
                <p v-if="isLogin && prizeName != ''" class="get-prize">
                    <span class="name">已获得 {{prizeName}}</span>
                    <a v-if="contactExist == false" class="contact-link" @click="setContact">填写联系方式</a>
                    <a v-if="contactExist == true" class="contact-link" @click="setContact">修改联系方式</a>
                </p>
            </div>
        </div>
        <div v-if="isLogin && prizeName != ''" class="exchanged-sign img-size" data-width="135" data-height="88">
            <!--<img src="../../images/new/main/exchanged-sign.png">-->
        </div>
        <div class="formula img-size" data-height="38">
            <span>*财富值=投资金额×产品期限/360</span>
        </div>
        <div v-if="status > 0" class="over-btn img-size" data-width="626" data-height="70"></div>
        <div v-else class="invest-btn img-size" data-height="70" data-width="626" @click="investment"></div>
        <div class="remark"><span>投资20天以下产品(不含20天)不计入财富值总值</span></div>
    </div>
    <div class="appeal">
        <div class="wrap">财富路上，您并不孤单，多融与您相伴<br>已有<span>{{people}}</span>人参与本活动</div>
    </div>
</div>
</template>
<script>
	import {httpStatus, httpUserMsg, httpGetPrize} from '../../common/URL';
	import requirePop from '../../pop/requirePop.js';
	export default {
		props : {
		    isLogin : Boolean,
		    coin : {
		        type: Number,
				default: 0
            },
			contactExist : {
		        type : Boolean,
                default : false
            },
            contactName : {
                type : String,
                default : ''
            },
            contactPhone : {
                type : String,
                default : ''
            },
            contactAddress : {
                type : String,
                default : ''
            },
			prizeName : {
		        type: String,
				default : ''
			},
			selectOptions : Array,
            status : {
		        type : Number,
                default : 0
            },
			people : Number
		},
        computed : {
		    coinValue : function () {
				return (this.isLogin && this.prizeName == '') ? this.coin : '******';
            }
        },
		mounted(){
		    bus.$on('submitSelectPrize', this.onSelectPrize);
		},
		methods : {
			login : function(){
				T.login();
			},
			popSelect: function () {
			    let self = this;
				requirePop('selectPrize', {
				    props: {
                        transition : 'bounceIn',
                        selectOptions: self.selectOptions
                    }
				});
            },
            onSelectPrize : function (idx) {
			    let self = this;
                T.ajax({
                    url : httpGetPrize,
                    data : {
                        uid : T.uid,
                        prizeId : self.selectOptions[idx].id
                    },
                    callback : true,
                    success : function( _data ){
                        if(_data.flag == true){
                            if (_data.success == true) {
                                let text = '恭喜您，成功领取' + self.selectOptions[idx].name;
                                let Pop = require('../../pop/index.js');
                                let pop = new Pop({
                                    title : '&nbsp;',
                                    content : text,
                                    okBtn : true,
                                    cancelBtn:false,
                                    timing : 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                    okTxt : '确定',
                                    okCallback : function () {
                                        this.close();
                                        window.location.reload(true);
                                    }
                                });
                            } else {
                                if (_data.hasOwnProperty('errorMsg')) {
                                    let Pop = require('../../pop/index.js');
                                    let pop = new Pop({
                                        title : '&nbsp;',
                                        content : _data.errorMsg,
                                        okBtn : true,
                                        cancelBtn:false,
                                        timing : 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                        okTxt : '确定',
                                    });
                                }
                            }
//                            targ.addClass('btn2')
                        } else {
//                            alert('访问接口出错!');
                            let Pop = require('../../pop/index.js');
                            let pop = new Pop({
                                title : '&nbsp;',
                                content : "操作失败，请联系客服！",
                                okBtn : true,
                                cancelBtn:false,
                                timing : 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                okTxt : '确定',
                            });
                            return false;
                        }
                    }
                });
            },
            setContact : function () {
			    if (this.contactExist) {
                    let self = this;
                    requirePop('setContact', {
                        props : {
                            transition : 'bounceIn',
                            oldName : self.contactName,
                            oldMobilePhone : self.contactPhone,
                            oldAddress : self.contactAddress
                        }
                    });
                } else {
                    requirePop('setContact', {
                       props : {
                           transition : 'bounceIn'
                       }
                    });
                }
            },
			investment : function(){
				T.callApp.investment();
			}
		}
	}
</script>