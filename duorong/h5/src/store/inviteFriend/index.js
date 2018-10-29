/**
 * 邀请好友相关
 * Created by wangCuiQing on 2018/4/13.
 */
const INVITEFRIEND =require("../../contant/urls/INVITEFRIEND");
module.exports={
	state:{
        myRecommendInfo:null,//我邀请的好友记录
        myRecommendList:null,//我的佣金记录
        levelList:null,//我的好友待收等级
	},
	mutations:{
        getMyRecommendInfo(state,self){
            let page=1;
            if(!state.myRecommendInfo ){
                VueParent.ajax({
                    url:INVITEFRIEND.MYFRIEND,//我的好友
                    data:{
                        uid:self.user.member.uid,
                        pageOn:page,
                        pageSize:10,
                    },
                    type:'get',
                    dataType:'jsonp',
                }).then(data=>{
                    state.myRecommendInfo=data.map;
                })
            }
        },
        getRecommend(state,self){
            if(!state.myRecommendList){
                VueParent.ajax({
                    url:INVITEFRIEND.COMMISSIONRECORD,//佣金记录
                    data:{
                        uid:self.user.member.uid,
                        pageOn:1,
                        pageSize:10,
                    },
                    type:'get',
                    dataType:'jsonp',
                    ContentType:"application/x-www-form-urlencoded",
                }).then(data=>{
                    state.myRecommendList = data.map;
                })
            }
        },
        getLevel(state,self){
            if(!state.levelList){
                VueParent.ajax({
                    url:INVITEFRIEND.WAITINGLEVEL,//好友待收等级
                    data:{
                        uid:self.user.member.uid,
                    },
                    type:"get",
                    dataType:"jsonp",
                    ContentType:"application/x-www-form-urlencoded",
                }).then(data=>{
                    state.levelList=data.map;
                })
            }
        }
	},
	actions:{
	},
	getters:{
        getMyRecommendInfo:state=>{
            return state.myRecommendInfo;
        },
        getRecommend:state=>{
            return state.myRecommendList;
        },
        getLevel:state=>{
            return state.levelList;//我的好友待收等级
        }
	}

}
