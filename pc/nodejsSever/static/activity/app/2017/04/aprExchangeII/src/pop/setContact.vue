<style lang='sass'>
    @import '../css/global';
    .modal-mask{
       .modal-header{
            padding-bottom:$s5;
            h2{ @include font-size(18px); color:#fff600; }
       }
        .modal-body{
            .title{
                margin: 0 $s40;
            }
            .address-pop{
                padding:0 $s40;
                li{ @include box; @include boxMiddle; @include size(padding-top,5px); @include size(padding-bottom,5px)}
                .text{ @include size(width,70px);  @include font-size(12px);}
                .cnt{ @include box-flex;}
                .confirm{
                    @extend .cnt; padding-top: $s8;
                }
                .back{
                    @include box; @include boxCenter; @include boxMiddle; width: 100%; position: relative; @include size(top, -12px);
                    .link{
                        color: rgb(0, 198, 255); text-decoration: underline; @include font-size(10px);
                    }
                }
                input{ display:block; width:100%; @include box-sizing; @include size(line-height, 20px); @include font-size(12px);
                    border:none;
                    padding:$s4; background: rgb(255, 231, 231); border-radius:$s5;
                }
                .error{ height:0; @include transition-duration;
                    &.cur{
                        height:$s25; line-height:$s25; background:#fffde9; border:$s1 solid #ff1e00;
                    }
                }
            }
        }
        .modal-footer{
            .submit{
                padding:0 $s40;
                .btn.adressbtn{ margin:0 auto;
                    @include transition-duration;
                     @include contain('../images/new/pop/set_contact/confirm.png');
                     /*&.update{@include contain('../images/pop/btn3.png');}
                     &.gray{ @include contain('../images/pop/btn4.png');}*/
                }
            }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition'>
    <div slot="header" class='img-size' data-paddingTop='315' data-paddingLeft='50'>
    </div>
    <div slot='body' class='address-pop'>
        <ul>
            <li>
                <span>请填写联系方式</span>
            </li>
            <li>
                <div class='cnt'><input type='text' v-model='name' maxlength='9' placeholder='联系人姓名'></div>
            </li>
            <li>
                <div class='cnt'><input type='tel' v-model='mobilePhone' maxlength='11' placeholder='联系人手机号'></div>
            </li>
            <li>
                <div class='cnt'><input type='text' v-model='address' placeholder='联系人地址'></div>
            </li>
            <li>
                <div class="confirm">
                    <img src="../images/new/pop/set_contact/confirm.png" width="100%" @click="submit">
                </div>
            </li>
            <li>
                <div class="back" @click="backToActivity">
                    <a class="link">返回活动页面</a>
                </div>
            </li>
        </ul>
    </div>
    <!--<div slot='footer' class='submit img-size' data-marginTop='20'>
        <div class='btn adressbtn img-size' data-width='450' data-height='70' @click='submit'></div>
    </div>-->
</pop>
</template>
<script>
    import pop from './pop.vue';
    import {httpSetContact} from '../common/URL';
    import requirePop from './requirePop.js';
    export default {
        components : {
            pop
        },
        data (){
            return {
                name : '' , 
                mobilePhone : '' , 
                address : '',
                add : true ,
                updateBtn : false
            }
        },
        props : {
            transition : String,
            oldName : String,
            oldMobilePhone : String,
            oldAddress : String
        },
        /*mounted(){
            var self = this;
            if(T.uid){
                T.ajax({
                    url : contactGet,
                    callback : true,
                    data : {uid:T.uid},
                    success : function( _data ){
                        self.updateBtn = false;
                        if(_data.flag==true){
                            self.updateBtn = true;
                            $.extend(self,_data.map);
                        }
                    }
                })
            }
        },*/
        mounted : function () {
            if (this.oldName != '') {
                this.name = this.oldName;
            }
            if (this.oldMobilePhone != '') {
                this.mobilePhone = this.oldMobilePhone;
            }
            if (this.oldAddress != '') {
                this.address = this.oldAddress;
            }
        },
        methods : {
            pop : function( text ){
                require.ensure([],(require)=>{
                    var Pop = require('./index.js');
                    var pop = new Pop({
                        title : '&nbsp;',
                        content : text,
                        okBtn : true,
                        cancelBtn:false,
                        timing : 'errorcur', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                        okTxt : '确定',
                    });
                },'pop');
            },
            submit : function(event){
                var self = this , 
                    btn = $(event.target),
                    name = this.name , 
                    mobilePhone = this.mobilePhone, 
                    address = this.address ;

                if(!T.uid){
                    return self.pop('请登录后再操作');
                }
                if(!name || name.length<2){
                    return self.pop('姓名不能少于2位数！');
                }
//                if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(mobilePhone))){
                if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(mobilePhone))){
                    return self.pop('请输入正确的手机号！');
                }
                if(!address || address.length<5){
                    return self.pop('请输入正确地址！');
                }
                if(this.add==true){
                    this.add=false;
//                    btn.addClass('gray');
                    T.ajax({
                        url : httpSetContact ,
                        data : { 
                            uid : T.uid , 
                            name : name , 
                            mobilePhone : mobilePhone , 
                            address : address
                        },
                        success : function( _data ){
                            require.ensure([],(require)=>{
                                var Pop = require('./index.js') , 
                                    text = '';
                                if(_data.success==true){
//                                    text = self.updateBtn?"修改成功！":'添加成功!';
                                    text = '保存成功!';
                                    self.$refs.pop.closePop(()=>{
                                    });
                                }else{
                                    text = '保存失败!'
                                }
                                var pop = new Pop({
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
                            },'pop');
                            self.add = true;
//                            btn.removeClass('gray');
                        }
                    });
                }
            },
            backToActivity : function () {
                document.getElementById('close-pop').click();
            }
        }
    }
</script>