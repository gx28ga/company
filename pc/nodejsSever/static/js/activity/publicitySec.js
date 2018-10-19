new Vue({
    el : '#APP',
    delimiters: ['${', '}'],
    data : function(){
        return {
            iszhuce : false,
            open1 : 0,
            iszhuce2 : false,
            open2 : 0,
            isrule : false,
            open3 : 0,


            showRecommend : false,
            login:{
                mobilePhone : '',
                imgCode : '',
                msg : '',
                pwd : '',
                checkbox : true,
                recommPhone : ''
            },
            loginT:{
                mobilePhone : '',
                imgCode : '',
                msg : '',
                pwd : '',
                checkbox : true
            },
            success : false,
            successT : false,

            phoneErr : '',
            imgCodeErr : '',
            msgErr : '',
            passErr:'',
            checkErr : '',


            phoneErrT : '',
            imgCodeErrT : '',
            msgErrT : '',
            passErrT:'',
            checkErrT : '',

            imgCodeUrl : Verify.imgCodeUrl(),
            sortName : '获取验证码',
            sortClass : false,

            btnClassT : false,
            errorT : false,
            errorMsgT : '',

            imgCodeUrlT: Verify.imgCodeUrl(),
            sortNameT : '获取验证码',
            sortClassT : false,

            btnClass : false,
            error : false,
            errorMsg : '',

            toFrom : '',
            http : window.location.origin
        }
    },
    watch : {
        mobile : function(val){
            this.login.mobilePhone = T.justNumber(val);
            this.loginT.mobilePhone = T.justNumber(val);
        }
    },
    mounted :function(){
        this.toFrom = T.getQueryString('toFrom');
    },
    methods : {
        showRule(){
            const self = this;
            layui.use('layer', function() {
                layui.use('layer', function(){
                    self.open3 = layer.open({
                        type: 1,
                        title: false,
                        closeBtn: 1,
                        shadeClose: true,
                        end : function(){
                            self.isrule = false;
                        },
                        content: $('#rule')
                    });
                })
            });
        },
        showreg2(){
            const self = this;
            self.iszhuce2 = false;
            layer.close(self.open2);
            self.showreg();
        },
        showreg() {
            const self = this;
            self.iszhuce = true;
            layui.use('layer', function(){
                self.open1 = layer.open({
                    type: 1,
                    title: false,
                    closeBtn: 1,
                    shadeClose: true,
                    end : function(){
                        self.iszhuce = false;
                        layer.close(self.open1);
                        layui.use('layer', function() {
                            layui.use('layer', function(){
                                self.open2 = layer.open({
                                    type: 1,
                                    title: false,
                                    closeBtn: 1,
                                    shadeClose: true,
                                    end : function(){
                                        self.iszhuce2 = false;
                                        layer.close(self.open2);
                                    },
                                    content: $('#zhucetan2')
                                });
                            })
                        });
                    },
                    content: $('#zhucetan')
                });
            })
        },
        closetan(){
            const self = this;
            layui.use('layer', function() {
                layer.close(self.open2);
            });
        },
        recommend(){
            const self = this;
            self.showRecommend = !self.showRecommend;
        },
        clearEvent(){
            this.phoneErr = '';
            this.imgCodeErr = '';
            this.msgErr = '';
            this.passErr = '';
            this.checkErr = '';
        },
        showError( val ){
            this.error = true;
            this.errorMsg = val;
        },
        check(){
            const self = this;
            self.login.checkbox = !self.login.checkbox;
        },
        getImgCodeUrl(){
            const self = this;
            self.imgCodeUrl = Verify.imgCodeUrl();
        },
        getSortMsg( event ){//获取短信验证码
            const self  = this;
            event.stopPropagation();
            if(self.sortClass) return;
            this.verMobile(()=>{
                self.verCode(()=>{
                    self.isReg(()=>{
                        self.sortClass = true;
                        Verify.sendMsg(self.login.mobilePhone,self.login.imgCode,(status,val)=>{
                            if(status){
                                if(val.status===-1) {
                                    self.sortName = val.time + 's后重发';
                                    self.sortClass = true;
                                }else{
                                    self.sortName = '重新发送';
                                    self.sortClass = false;
                                }
                            }else{
                                self.msgErr = val;
                                self.sortClass = false;
                            }
                        })
                    });
                });
            });
        },
        isReg( callback ){ //是否注册过
            let self = this;
            Verify.varMobile(this.login.mobilePhone).then(obj=>{
                if(obj.status){
                    callback();
                }else{
                    self.phoneErr = obj.msg;
                }
            });
        },
        verMobile(callback){ //手机验证
            let val = Verify.mobile(this.login.mobilePhone);
            if(val === true){
                callback();
            }else{
                this.phoneErr = val;
            }
        },
        verPwd(callback){ //pwd
            let val = Verify.pwd(this.login.pwd);
            if(val === true){
                callback();
            }else{
                this.passErr = val;
            }
        },
        verCode(callback){ //图形验证
            let val = Verify.imgCode(this.login.imgCode);
            if(val === true){
                callback();
            }else{
                this.imgCodeErr = val;
            }
        },
        verSort(callback){
            if(this.login.msg == ''){
                this.msgErr = "请输入短信验证码";
            }else if(this.login.msg.length<4){
                this.msgErr = "请输入正确的短信验证码";
            }
            callback();
        },
        verification(callback){ //所有验证
            let self = this;
            self.verMobile(()=>{
                self.verCode(()=>{
                    self.verSort(()=>{
                        self.verPwd(()=>{
                            if(self.login.checkbox){
                                self.isReg(callback);
                            }else{
                                self.checkErr = "请同意注册协义后，再注册。";
                            }
                        })
                    })
                })
            })
        },
        submit(){
            const self = this;
            this.verification(()=>{
                Verify.register({
                    mobile: self.login.mobilePhone,
                    pwd: self.login.pwd,
                    imgCode: self.login.imgCode,
                    msg: self.login.msg,
                    check: self.login.checkbox,
                    recommPhone: self.login.recommPhone,
                    toFrom : self.toFrom
                }).then(obj=>{
                    if(obj.status){//注册成功
                        self.success = true;
                        Verify.toLogin({
                            mobile: self.login.mobilePhone,
                            pwd: self.login.pwd,
                        }).then(obj=>{
                            if(obj.status){
                                T.getUserInfo();
                                setTimeout(function(){
                                    window.location.href = self.http+"/main/createEscrowAccount";
                                },1000)
                            }
                        });
                    }else{
                        self.checkErr = obj.msg;
                    }
                })
            })
        },



        clearEventT(){
            this.phoneErrT = '';
            this.imgCodeErrT = '';
            this.msgErrT = '';
            this.passErrT = '';
        },
        getImgCodeUrlT(){
            const self = this;
            self.imgCodeUrlT = Verify.imgCodeUrl();
        },
        getSortMsgT( event ){//获取短信验证码
            const self  = this;
            event.stopPropagation();
            if(self.sortClassT) return;
            this.verMobileT(()=>{
                self.verCodeT(()=>{
                    self.isRegT(()=>{
                        self.sortClassT = true;
                        Verify.sendMsg(self.loginT.mobilePhone,self.loginT.imgCode,(status,val)=>{
                            if(status){
                                if(val.status===-1) {
                                    self.sortNameT = val.time + 's后重发';
                                    self.sortClassT = true;
                                }else{
                                    self.sortNameT = '重新发送';
                                    self.sortClassT = false;
                                }
                            }else{
                                self.msgErrT = val;
                                self.sortClassT = false;
                            }
                        })
                    });
                });
            });
        },
        isRegT( callback ){ //是否注册过
            let self = this;
            Verify.varMobile(this.loginT.mobilePhone).then(obj=>{
                if(obj.status){
                    callback();
                }else{
                    self.phoneErrT = obj.msg;
                }
            });
        },
        verMobileT(callback){ //手机验证
            let val = Verify.mobile(this.loginT.mobilePhone);
            if(val === true){
                callback();
            }else{
                this.phoneErrT = val;
            }
        },
        verPwdT(callback){ //pwd
            let val = Verify.pwd(this.loginT.pwd);
            if(val === true){
                callback();
            }else{
                this.passErrT = val;
            }
        },
        verCodeT(callback){ //图形验证
            let val = Verify.imgCode(this.loginT.imgCode);
            if(val === true){
                callback();
            }else{
                this.imgCodeErrT = val;
            }
        },
        verSortT(callback){
            if(this.loginT.msg == ''){
                this.msgErrT = "请输入短信验证码";
            }else if(this.loginT.msg.length<4){
                this.msgErrT = "请输入正确的短信验证码";
            }
            callback();
        },
        verificationT(callback){ //所有验证
            let self = this;
            self.verMobileT(()=>{
                self.verCodeT(()=>{
                    self.verSortT(()=>{
                        self.verPwdT(()=>{
                            if(self.loginT.checkbox){
                                self.isRegT(callback);
                            }else{
                                self.checkErrT = "请同意注册协义后，再注册。";
                            }
                        })
                    })
                })
            })
        },
        submitT(){
            const self = this;
            this.verificationT(()=>{
                Verify.register({
                    mobile: self.loginT.mobilePhone,
                    pwd: self.loginT.pwd,
                    imgCode: self.loginT.imgCode,
                    msg: self.loginT.msg,
                    check: self.loginT.checkbox,
                    toFrom : self.toFrom
                }).then(obj=>{
                    if(obj.status){//注册成功
                        self.successT = true;
                        Verify.toLogin({
                            mobile: self.loginT.mobilePhone,
                            pwd: self.loginT.pwd,
                        }).then(obj=>{
                            if(obj.status){
                                T.getUserInfo();
                                setTimeout(function(){
                                    window.location.href = self.http+"/main/createEscrowAccount";
                                },1000)
                            }
                        });
                    }else{
                        self.checkErrT = obj.msg;
                    }
                })
            })
        }
    }
});