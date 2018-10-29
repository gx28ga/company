/**
 * describe
 * Created by wangCuiqing
 * Date: 2018/5/23
 */
module.exports={
    path:"/messageLog",
    component:{template: '<router-view></router-view>'},
    children:[
        {
            path:"",//消息记录
            component:()=>import("../../module/messageLog"),
            meta:{
                keepAlive:true
            }
        },
        {
            path:"messageDetail",//消息详情
            component:()=>import("../../module/messageLog/messageDetail")
        }
    ]
}
