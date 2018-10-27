const http = '';
module.exports = {
    httpStatus : http + '/activity/september/status.do', //活动状态
    httpParticipate : http + '/activity/september/participate.do', //渠道用户
    httpChance : http + '/activity/september/index.do',  //剩余机会
    httpHomeData : http + '/activity/september/index_my_info.do',   //首页用户数据
    httpXchg : http + '/activity/september/color_convert.do', //执行兑换
    httpPlay : http + '/activity/september/turn_magic.do',  //转动魔方
    httpMyRecord : http + '/activity/september/gift_record.do', //我的奖品列表


    // httpStatus : 'http://192.168.0.72:7700', //活动状态
    // httpParticipate : 'http://192.168.0.72:7701', //渠道用户
    // httpChance: 'http://192.168.0.72:7707',  //剩余机会
    // httpHomeData : 'http://192.168.0.72:7702',  //首页数据
    // httpXchg : 'http://192.168.0.72:7703', //执行兑换
    // httpPlay : 'http://192.168.0.72:7704',  //转动魔方
    // httpMyRecord : 'http://192.168.0.72:7705', //我的奖品列表
}
