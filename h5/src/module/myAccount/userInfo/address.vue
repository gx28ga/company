/**
* 新增收货地址 或查看地址
* created by bo.peng 2018/4/13
* email:spion@qq.com
*/
<style scoped>
.address{
    ul{
        background:#fff;
    }
    li{
        display:flex;
        overflow:hidden;
        padding:10px 0;
        min-height:33px;
        line-height:33px;
        &:not(:last-child){
             border-bottom:.5px solid #ddd;
        }
    }
    .input-text{
        flex:1;
        box-sizing:border-box;
        overflow:hidden;
        input{
            width:100%;
            height:33px;
            border:none;
            box-sizing:border-box;
            text-align:right;
            &::placeholder{
                width:100%;
                text-align:right;
                color: #A0A0A0;
            }
        }
    }
    .text{
        width:100%;
        text-align: right;
        color: #A0A0A0;
    }
    aside{
        flex:1;
        display:flex;
        flex-direction: row;
        align-items:center;
        justify-content:flex-end;
        .text{
            width:auto;
        }
    }
    .arrow-parent{
        padding-left:10px;
    }
    textarea{
        margin-top:10px;
        width:100%;
        min-height: 100px;
        box-sizing:border-box;
        border:none;
        outline: none;
    }
    .error{
        height:0;
        overflow:hidden;
        text-align:center;
        color:#e60012;
        transition-duration:.3s;
        &.current{
            height:32px;
            line-height:22px;
        }
    }
    .edit-btn{
        float:right;
        background:#fff;
        color: #FE7634;
        border:1px solid #FE7634;
        border-radius:5px;
        padding:0 20px;
    }
}

</style>
<template>
    <article class="address img-size" data-paddingLeft="20" data-paddingRight="20">
        <!-- 新增或修改收货地址 -->
        <section v-if="status===0 || status===2">
            <ul class="img-size" data-paddingLeft="30" data-marginBottom="30">
                <li class="img-size" data-paddingRight="30">
                    <div class="title">收货人</div>
                    <div class="input-text">
                        <input type="text" v-model="name" placeholder="请填写姓名"/>
                    </div>
                </li>
                <li class="img-size" data-paddingRight="30">
                    <div class="title">联系方式</div>
                    <div class="input-text">
                        <input type="tel" maxlength="11" v-model="tel" placeholder="请填写手机号"/>
                    </div>
                </li>
                <li class="img-size" data-paddingRight="30">
                    <div class="title">所在区域</div>
                    <aside>
                        <div class="text img-size" data-fontSize="24">{{address}}</div>
                        <div class="arrow-parent" @click="selectCity">
                            <arrow color="#A0A0A0" :borderWidth="3" :width="15" :height="15" name="right"/>
                        </div>
                    </aside>
                </li>
                <li class="img-size" data-paddingRight="30" style="height:auto;">
                    <div class="text">
                        <textarea v-model="detail" placeholder="请输入详细地址"></textarea>
                    </div>
                </li>
            </ul>
            <div class="error" :class="{current:error}">{{errMsg}}</div>
            <div class="submit img-size" data-marginTop="30">
                <div class="btn img-size" @click="submit" :class="{gray:!btnEvent}" data-fontSize="32" data-height="88" data-lineHeight="88">保存</div>
            </div>
        </section>
        <!-- end 新增收货地址 -->
        <!-- 我的收货地址 -->
        <section v-if="status===1">
            <ul class="img-size" data-paddingLeft="30" data-marginBottom="30">
                <li class="img-size" data-height="110" data-lineHeight="110" data-paddingRight="30">
                    <div class="title">收货人</div>
                    <div class="input-text">
                        <input type="text" disabled="disabled" v-model="name" placeholder="请填写姓名"/>
                    </div>
                </li>
                <li class="img-size" data-height="110" data-lineHeight="110" data-paddingRight="30">
                    <div class="title">联系方式</div>
                    <div class="input-text">
                        <input type="tel" disabled="disabled" maxlength="11" v-model="tel" placeholder="请填写手机号"/>
                    </div>
                </li>
                <li class="img-size" data-height="110" data-lineHeight="110" data-paddingRight="30">
                    <div class="title">所在区域</div>
                    <aside>
                        <div class="text img-size" data-fontSize="24">{{address}}</div>
                    </aside>
                </li>
                <li class="img-size" data-paddingRight="30" data-paddingTop="20">
                    <div class="title img-size" data-paddingTop="17">详情地址</div>
                    <aside>
                        <div class="text img-size" data-paddingLeft="20">
                            {{detail}}
                        </div>
                    </aside>
                </li>
            </ul>
            <div class="submit img-size" data-marginTop="30">
                <div class="edit-btn img-size" @click="edit"
                     data-fontSize="32" data-height="60" data-lineHeight="60">修改</div>
            </div>
        </section>
        <!-- end 我的收货地址 -->
    </article>
</template>

<script>
    import {UPDATE_ADDRESS} from "../../../contant/urls/MYACCOUNT";
    import {mapState,mapGetters} from "vuex";
    import mixin from "../../../mixin";
    import filter from "../../../mixin/filters";
    import arrow from "../../components/arrow";
    export default {
        mixins:[mixin,filter],
        components:{
            arrow
        },
        computed:{
            ...mapState({
                member : state => state.user.memberInfo
            }),
            ...mapGetters({
                user : "getUserInfo"
            })
        },
        data(){
            return{
                status : 0,
                name : "",
                tel : "",
                address : "点击选择城市",
                detail : "",
                btnEvent : false,
                //错误提示
                errMsg : "",
                error : false,
            }
        },
        watch:{
            tel(val){
                let value = this._justNumber(val);
                this.tel = value;
                this.verification();
            },
            address(){
                this.verification();
            },
            detail(){
                this.verification();
            },
            name(){
                this.verification();
            },
            member(){
                this.updateInfo();
            }
        },
        mounted(){
            this.status = this.member && this.member.isAddress===1?1:0;
            this.updateStatus();
            this.setNav({
                show : false
            });
            this.setImgSize();
        },
        methods : {
            showError( msg ){
                this.errMsg = msg;
                this.error = true;
                return false;
            },
            hideError(){
                this.error = false;
            },
            updateInfo(){
                let member = this.member;
                this.name = member.consignee;
                this.tel = member.phone;
                this.address = member.region;
                this.detail = member.nowAddress;
            },
            updateStatus(){
                this.setTitle({
                    title : this.status===0?"新增收货地址":this.status===1?"我的收货地址":"修改收货地址",
                    show : true,
                    back:true,
                    gap : true,
                });
                if(this.status!=0){
                    this.updateInfo();
                }
            },
            edit(){
                this.status = 2;
                this.updateStatus();
            },
            selectCity(){
                let self = this;
                require.ensure([],(require)=> {
                    this.$requirePop(require('../../components/chooseCity'), {
                            props : {}, //弹窗内容相关属性
                            on:{
                                $choose(obj){
                                    self.address = obj.province.name+" "+obj.city.name+" "+obj.county;
                                }
                            }
                        },
                        {
                            props: {//弹窗相关属性 同上面的 this.$Pop
                                obj: {
                                    superClass : "downPop",
                                    width:'100%'
                                },
                                transition : "up"
                            }
                        });
                });
            },
            verification(){
                if(this.name.length>=2 &&
                    this._name(this.name) &&
                    this._tel(this.tel) &&
                    this.address.indexOf("点击")<0 &&
                    this.detail.length>2){
                    this.btnEvent = true;
                }else{
                    this.btnEvent = false;
                }
            },
            submit(){
                const self = this;
                if(!this.btnEvent) return;
                this.btnEvent = false;
                this.ajax({
                    url : UPDATE_ADDRESS,
                    data:{
                        uid : this.user.member.uid,
                        consignee : this.name,
                        phone : this.tel,
                        region : this.address,
                        nowAddress : this.detail
                    },
                    callback : true,
                }).then(data=>{
                    if(data.success){
                        self.$pop({
                            title : "操作成功",
                            close : true,//是否显示关闭按钮
                            content : "成功！",
                            icon : "icon1",//icon1 确定 2取消 3提示
                            footer : {
                                ok : "确定",//确定按钮
                                okCallback : function(){
                                    self.$store.commit("updateMemberInfo",{
                                        update : true
                                    });
                                    self.status =1;
                                    self.updateStatus();
                                    this.close();
                                }, //确定按钮事件
                            }
                        });
                    }else{
                        self.$pop({
                            title : "操作错误",
                            close : true,//是否显示关闭按钮
                            content : data.errorMsg,
                            icon : "icon2",//icon1 确定 2取消 3提示
                            footer : {
                                ok : "确定",//确定按钮
                                okCallback : function(){
                                    this.close();
                                }, //确定按钮事件
                            }
                        });
                    }
                    self.btnEvent = true;
                });
            }
        }
    }
</script>
