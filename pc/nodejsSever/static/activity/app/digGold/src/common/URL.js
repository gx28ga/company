const http = '/'
module.exports = {
    status : http+'activity/july/mammon/status.do', //活动状态
    participate : http+'activity/july/mammon/participate.do', //判断用户是否为渠道用户
    sign : http+'activity/july/mammon/sign.do', //求赐福、签到接口
    index : http+'activity/july/mammon/index.do', //活动首页 和 我的奖品 
    bigmanmon_convert : http+'activity/july/mammon/bigmanmon_convert.do', //大财神兑换任意财神
    gold_gift : http+'activity/july/mammon/gold_gift.do', //获取用户金子数 和 可兑换的奖品
    gold_rank : http+'activity/july/mammon/gold_rank.do', //排名列表、当前排名、预计可获得
    update_gold : http+'activity/july/mammon/update_gold.do', //挖矿活动、更新金子数
}