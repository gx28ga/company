/**
 * 积分商城
 * created by bo.peng 2018/4/26
 * email:spion@qq.com
 */
module.exports={
    path: "/shopping",
    component: {template: '<router-view></router-view>'},
    children: [
        {path: '', component: () => import('../../module/shopping')},
        {path: 'detail', component: () => import('../../module/shopping/detail')},//积分详情
        {path: 'changeRecord', component: () => import('../../module/shopping/changeRecord')},//兑换记录
        {path: 'mingXi', component: () => import('../../module/shopping/mingXi')},//积分明细
        {path: 'taskList', component: () => import('../../module/shopping/taskList')},//任务中心
        {path: 'taskFinish', component: () => import('../../module/shopping/taskFinish')},//已完成任务
        {path: 'pointExplanation', component: () => import('../../module/shopping/pointExplanation')},//积分说明
    ]
}
