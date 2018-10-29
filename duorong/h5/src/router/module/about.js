/**
 * describe 关于多融，下载页面
 * Created by wangCuiqing
 * Date: 2018/5/15
 */
module.exports={
    path:"/about",
    component:{template: '<router-view></router-view>'},
    children:[
        {
            path:"dr",//关于多融页面
            component:()=>import("../../module/about/dr")
        },
        {
            path:"lookForwardTo",//多融财富敬请期待
            component:()=>import("../../module/about/lookForwardTo")
        },
        {
            path:"bankDepositManagement",//银行存管上线
            component:()=>import("../../module/about/bankDepositManagement")
        },
        {
            path:"insurance",//安全保障
            component:()=>import("../../module/about/insurance")
        },
        // {
        //     path:"conference",//国家事业单位控股
        //     component:()=>import("../../module/about/conference")
        // },
    ]
}
