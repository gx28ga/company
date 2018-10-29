/**
* 开户首页
* created by bo.peng 2018/3/30
* email:spion@qq.com
*/
<style scoped>
    .open-account{
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
        .readed{
            padding:10px;
            color: #9B9B9B;
            .reds{
                display:inline-block;
            }
            em{
                color: #FF8246;
            }
            .checkbox{
                display:inline-block;
                vertical-align: top;
                width:12px;
                height:12px;
                border:1px solid #ccc;
                border-radius: 100%;
                background:#fff;
                transition-duration:.3s;
                box-sizing:border-box;
                &.current{
                    background:#fff;
                    border-width:6px;
                    border-color:#FF8246;
                }
            }
        }
    }

</style>
<style>
    .phoneIcon{
            background:url("../../images/common/phoneicons.png") no-repeat;
            background-size:contain;
    }
</style>
<template>
    <article class="open-account img-size" data-paddingLeft="20" data-paddingRight="20">
        <ul class="img-size" @click="hideError" data-paddingLeft="30" data-marginBottom="30">
            <li class="img-size" data-paddingRight="30">
                <div class="title">真实姓名</div>
                <div class="input-text">
                    <input type="text" v-model="name" maxlength="10" placeholder="请输入真实姓名"/>
                </div>
            </li>
            <li class="img-size" data-paddingRight="30">
                <div class="title">身份证号</div>
                <div class="input-text">
                    <input type="tel" maxlength="30" v-model="id" placeholder="请输入身份证号"/>
                </div>
            </li>
            <li class="img-size" data-paddingRight="30" @click="selectBank">
                <div class="title">开户银行</div>
                <aside>
                    <div class="text img-size" data-fontSize="24">{{bank.name}}</div>
                    <div class="arrow-parent" >
                        <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                    </div>
                </aside>
            </li>
            <li class="img-size" data-paddingRight="30">
                <div class="title">银行卡号</div>
                <div class="input-text">
                    <input type="tel" maxlength="50" v-model="card" placeholder="请输入银行卡号"/>
                </div>
            </li>
            <li class="img-size" data-paddingRight="30" @click="selectCity">
                <div class="title">开户行城市</div>
                <aside>
                    <div class="text img-size" data-fontSize="24">{{city}}</div>
                    <div class="arrow-parent" >
                        <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                    </div>
                </aside>
            </li>
            <li class="img-size" data-paddingRight="30">
                <div class="title">设置交易/提现密码</div>
                <div class="input-text">
                    <input type="tel" maxlength="6" v-model="pwd" placeholder="须为6位数字"/>
                </div>
            </li>
        </ul>
        <div class="readed img-size" data-fontSize="24">
            <div class="reds" @click="readChecked = !readChecked">
                <div class="checkbox img-size" data-width="30" data-height="30" :class="{current:readChecked}"></div>
                <span>已阅读并同意</span>
            </div>
            <em @click="regAbout">《存管协议》</em>
            <div class="img-size" data-height="50" data-paddingLeft="30" data-lineHeight="50" data-fontSize="24">开卡过程中如有疑问请点击右上角按钮联系客服</div>
        </div>
        <div class="error" :class="{current:error}">{{errMsg}}</div>
        <div class="submit">
            <div class="btn img-size" @click="submit" :class="{gray:!btnEvent}" data-fontSize="32" data-height="88" data-lineHeight="88">保存</div>
        </div>
    </article>
</template>

<script>
    import {OPEN_MEMBER} from "../../contant/urls/OPENACCOUNT";
    import {mapState,mapGetters} from "vuex";
    import mixin from "../../mixin";
    import filter from "../../mixin/filters";
    import arrow from "../components/arrow";
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
                name : "",
                id : "",
                bank : {name:"请选择开户行"},
                card : "",
                city : "请选择开户行所在地",
                cityId : "",
                pwd : "",
                btnEvent : false,
                readChecked : true,
                //错误提示
                errMsg : "",
                error : false,
            }
        },
        watch:{
            name(){
                this.verification();
            },
            id(){
                this.verification();
            },
            bank(){
                this.verification();
            },
            card(){
                this.verification();
            },
            address(){
                this.verification();
            },
            pwd(val){
                this.pwd = this._toNumber(val);
                this.verification();
            },
            readChecked(){
                this.verification();
            },
            member(){
                this.updateInfo();
            },
        },
        created(){
            if(this.user.member.isRas && this.user.member.isRas===1){
                window.history.length > 2
                    ? this.$router.go(-2)
                    : this.$router.push('/')
            }
        },
        mounted(){
            this.setTitle({
                title : "开通账户",
                show : true,
                back : true,
                gap : true,
                button : {
                    width : 36,
                    top : 25,
                    height:36,
                    class:"phoneIcon",
                    event(){
                        T.callApp.call("callPhone",4006908896);
                    }
                }
            });
            this.setNav({
                show:false,
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
            regAbout(){
                this.go().all({
                    returnUrl : "/protocol/openAccount"
                })
            },
            selectCity(){
                let self = this;
                require.ensure([],(require)=> {
                    this.$requirePop(require('../components/chooseCity'), {
                            props : {
                                isCode : true
                            }, //弹窗内容相关属性
                            on:{
                                $choose(obj){
                                    self.city = obj.province.province+" "+obj.city.city;
                                    //self.cityId = obj.province.provinceCode;
                                    self.cityId = obj.city.cityCode;
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
            selectBank(){
                let self = this;
                require.ensure([],(require)=> {
                    this.$requirePop(require('../components/chooseBank'), {
                            props : {
                                user : self.user,
                                member : self.member
                            }, //弹窗内容相关属性
                            on:{
                                $choose(obj){
                                    self.bank = obj.bank;
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
                this.btnEvent =(this._name(this.name.length>2) &&
                    this.id.length>5 &&
                    this.bank.name.indexOf("请选择")<0 &&
                    this.city.indexOf("请选择")<0 &&
                    this.card.length>2 &&
                    this.pwd.length==6 &&
                    this.readChecked);
            },
            submit(){
                const self = this;
                if(!this.btnEvent) return;
                this.btnEvent = false;
                this.ajax({
                    url : OPEN_MEMBER,
                    data:{
                        cust_nm : this.name,
                        certif_id:this.id,
                        capAcntNo : this.card, //银行卡号
                        uid : this.user.member.uid,
                        city_id : this.cityId,
                        parent_bank_id : this.bank.parentBankId,
                        password : this.pwd,
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
                                    self.$store.dispatch("updateUserAccount",{update:true});
                                    let obj = self.user;
                                    obj.member.isRas = 1;
                                    self.$store.commit("updateUserInfo",obj);
                                    self.$store.commit("updateHomeIndex",{update:true});
                                    this.close();
                                    self.go().resultUrl();
                                }, //确定按钮事件
                            }
                        });
                    }else{
                        self.showError(data.errorMsg);
                    }
                    self.btnEvent = true;
                });
            }
        }
    }
</script>
