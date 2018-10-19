<style lang='sass'>
	@import '../../css/global.scss';
	.main-section{
		 height:100%; overflow-y:scroll;overflow-x: hidden;
	}
</style>
<script>
	import Top from './head';
	import Main from './main';
	import Bottom from './bottom';
	import { httpUserMsg, httpStatus, httpParticipate } from '../../common/URL';
	import requirePop from '../../pop/requirePop.js';
	export default {
		components : {
			Top,
			Main,
			Bottom
		},
		data : function () {
			return {
                isLogin : false,
				userMsg : {},
				actStartTime : 0,
                actEndTime : 0,
				status : 0,
				people : 0
			}
        },
		computed : {
		    actPeriod : function () {
		        let st = this.actStartTime;
		        let ed = this.actEndTime;
		        let period = '';
				if (st > 0 && ed > 0) {
				    st = new Date(st);
				    ed = new Date(ed);
				    period = st.Format('yyyy年MM月dd日') + '-' + ed.Format('yyyy年MM月dd日');
				}
				return period;
            },
            coin : function () {
                let userMsg = this.userMsg;
                if (userMsg.hasOwnProperty('map')) {
//                    return userMsg.map.userCoin * 1000;
                    return userMsg.map.userCoin;
                }
            },
			prizeName : function () {
				let userMsg = this.userMsg;
				if (userMsg.hasOwnProperty('map') && userMsg.map.hasOwnProperty('gottenInfo')) {
				    let gtInfo = userMsg.map.gottenInfo;
					if (gtInfo.gotten == true) {
					    /*let i, prizeList = userMsg.map.lotteryList;
					    for (i = 0; i < prizeList.length; i++) {
					        if (prizeList[i].id == gtInfo.prizeId) {
					            return prizeList[i].name;
							}
						}*/
                        return gtInfo.prizeName;
					}
				}
				return '';
            },
			contactExist : function () {
				let userMsg = this.userMsg;
                if (userMsg.hasOwnProperty('map') && userMsg.map.hasOwnProperty('contactInfo')) {
                    return userMsg.map.contactInfo.contactExist;
                }
            },
            contactName : function () {
                let userMsg = this.userMsg;
                if (userMsg.hasOwnProperty('map') && userMsg.map.hasOwnProperty('contactInfo') && userMsg.map.contactInfo.hasOwnProperty('name')) {
                    return userMsg.map.contactInfo.name;
                }
            },
            contactPhone : function () {
                let userMsg = this.userMsg;
                if (userMsg.hasOwnProperty('map') && userMsg.map.hasOwnProperty('contactInfo') && userMsg.map.contactInfo.hasOwnProperty('mobilePhone')) {
                    return userMsg.map.contactInfo.mobilePhone;
                }
            },
            contactAddress : function () {
                let userMsg = this.userMsg;
                if (userMsg.hasOwnProperty('map') && userMsg.map.hasOwnProperty('contactInfo') && userMsg.map.contactInfo.hasOwnProperty('address')) {
                    return userMsg.map.contactInfo.address;
                }
            },
			userGrade : function () {
				let userMsg = this.userMsg;
				if (userMsg.hasOwnProperty('map')) {
				    let temp = userMsg.map.lotteryList.map((item, i) => {
                            let userCoin = userMsg.map.userCoin;
                            return {
                                num : item.needGoldCoin,
								ishere : item.userLocation,
								locked : userCoin >= item.needGoldCoin ? false : true,
							};
                	});
				    temp = temp.reverse();
				    //增加一个最初的财富值'8000'
//				    temp.push({num : 8000, ishere : true, locked: false});
				    return temp;
				}
				return [];
            },
			waterHeight : function () {
				let userMsg = this.userMsg;
				if (userMsg.hasOwnProperty('map')) {
				    let cur = 0;
				    let userCoin = userMsg.map.userCoin;
				    userMsg.map.lotteryList.forEach((item, i) => {
				        if (item.needGoldCoin <= userCoin ) {
				            cur++;
						}
					});
				    return cur;
				}
				return 0;
            },
			selectOptions : function () {
                let userMsg = this.userMsg;
                if (userMsg.hasOwnProperty('map')) {
                    return userMsg.map.lotteryList.filter((item, i) => {
                        return item.needGoldCoin <= userMsg.map.userCoin;
					});
                }
                return [];
            },
			exchanged : function () {
		        if (!this.isLogin) return false;
				let userMsg = this.userMsg;
				if (userMsg.hasOwnProperty('map')) {
				    return userMsg.map.gottenInfo.gotten;
                }
                return false;
            }
        },
		mounted(){
			T.setImgSize();
	        T.mobile();
	        T.getAppInfo();
            this.isLogin = T.isLogin;
//            if(!this.isLogin || !T.uid) return;
            this.getActivityStatus();
		},
		methods : {
		    getActivityStatus : function () {
		        let self = this;
                T.ajax({
                    url : httpStatus,
                    data : {},
                    success : function( _data ){
                        if (!_data.flag || !_data.hasOwnProperty('map')) {
                            let Pop = require('../../pop/index.js');
                            let pop = new Pop({
                                title : '&nbsp;',
                                content : "操作失败，请联系客服！",
                                okBtn : true,
                                cancelBtn:false,
                                timing : 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                okTxt : '确定',
                            });
                        }
                        self.status = _data.map.status;
                        self.people = _data.map.people;
                        self.actStartTime = _data.map.startTime;
                        self.actEndTime = _data.map.endTime;
//						self.checkParticipatable();
						if (self.status < 0) {
						    requirePop('waitWarning');
						    return false;
						}
						self.getUserMsg();
                    }
                });
            },
			getUserMsg : function () {
		        let self = this;
                T.ajax({
                    url : httpUserMsg,
                    data : {
                        uid : T.uid
                    },
                    success : function( _data ){
                        self.userMsg = _data;//setTimeout(() => {console.log(self)}, 20);
                        if(T.uid) {
                            self.checkParticipatable();
						}
                    }
                });
            },
			checkParticipatable : function () {
				let self = this;
                T.ajax({
                    url : httpParticipate,
                    data : {
                        uid : T.uid
                    },
                    callback: true,
                    success : function( _data ){
                        if (!_data.hasOwnProperty('flag')) {
                            let Pop = require('../../pop/index.js');
                            let pop = new Pop({
                                title : '&nbsp;',
                                content : "操作失败，请联系客服！",
                                okBtn : true,
                                cancelBtn:false,
                                timing : 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                okTxt : '确定',
                            });
                        }
						if (_data.flag == false) {
							requirePop('vipWarning');
						}
                    }
                });
            }
		},
		watch : {
		    userMsg: function (newone ,oldone) {
				if (newone.hasOwnProperty('map')) {
				    let prizeList = newone.map.lotteryList;
				    if (prizeList.length != 14) {
                        let Pop = require('../../pop/index.js');
                        let pop = new Pop({
                            title : '&nbsp;',
                            content : "奖品数据不正确!",
                            okBtn : true,
                            cancelBtn:false,
                            timing : 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                            okTxt : '确定',
                        });
					}
				}
            }
		}
	}
</script>
<template>
<div class="main-section">
	<Top :period="actPeriod"></Top>
	<Main :isLogin="isLogin" :coin="coin" :prizeName="prizeName" :contactExist="contactExist" :contactName="contactName" :contactPhone="contactPhone" :contactAddress="contactAddress" :selectOptions="selectOptions" :status="status" :people="people"></Main>
	<Bottom :exchanged="exchanged" :myGrade="userGrade" :waterHeight="waterHeight" :selectOptions="selectOptions"></Bottom>
</div>
</template>