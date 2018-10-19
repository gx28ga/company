const async = require('async') ,
    nunjucks = require('nunjucks'),
    g = require('../common/global'),
    fs = require('fs'),
	T = require('../common/tool');

const imghttp = 'https://www.duorongcf.com/images/home-partners';
let obj = {
    title : '多融财富理财项目_线上投资理财平台_上海银砖金融-多融财富',
    keywords : "多融财富,多融财富理财,投资理财平台,线上理财,理财平台,多融财富理财项目,银砖金融,上海银砖",
    description : "多融财富是上海银砖投资控股集团旗下互联网金融平台,背靠大型国有企业，专注于国企供应链金融，基于银行与国企承兑汇票，为投资者提供票据安选、票据优选等投资品,100元起投,7天至6月投资期间任选,收益率9.00%-13%,所有资产由银行与国企承兑，安全可靠。",
    cooperationImg : [ //合作单位
        {linkPath: imghttp+'/a.png'},
        {linkPath: imghttp+'/b.png'},
        {linkPath: imghttp+'/c.png'},
        {linkPath: imghttp+'/d.png'},
        {linkPath: imghttp+'/e.png'},
        {linkPath: imghttp+'/f.png'},
        {linkPath: imghttp+'/g.png'},
        {linkPath: imghttp+'/h.png'},
        {linkPath: imghttp+'/i.png'},
        {linkPath: imghttp+'/j.png'},
        {linkPath: imghttp+'/l.png'},
        {linkPath: imghttp+'/m.png'},
        {linkPath: imghttp+'/n.png'}
    ],
    firendLink : [ //友情链接
        {linkName: '网贷之家',linkPath: 'http://www.wdzj.com'},
        {linkName: '网贷天眼',linkPath: 'http://www.p2peye.com'},
        /*{linkName: '网贷中国',linkPath: 'http://www.p2pchina.com'},*/
        {linkName: '网贷天下',linkPath: 'http://www.ewdtx.com'},
        {linkName: '新浪新闻',linkPath: 'http://news.sina.com.cn'},
        {linkName: '搜狐财经',linkPath: 'http://business.sohu.com'},
        {linkName: '网易财经',linkPath: 'http://money.163.com'},
        {linkName: '和讯网',linkPath: 'http://www.hexun.com'},
        {linkName: '第一财经',linkPath: 'http://www.d1money.com'},
        {linkName: '富友支付',linkPath: 'http://www.fuioupay.com'}
    ]
};
Object.assign(obj,global.static);
module.exports = function( req, res){
    const requst = require('../common/request');
    async.parallel([
        function(callback){ //累计投资额 累计用户收益 累计平台用户
            requst({url:'/regAndInvestCount'},callback)
        },
        function(callback){ //新手专享标
            requst({url:'/indexProduct'},callback)
        },
        function(callback){
            requst({url:'/indexProduct'},callback)
        }
    ],
    function(err, results){
        const T = require('../common/tool');
        results.map((data , i)=>{
            const _obj = data.map;
            if(i===0){ //累计投资额 累计用户收益 累计平台用户
                obj.investCumulative = T.format_number(_obj.investCumulative);
                obj.profitCumulative = T.format_number(_obj.profitCumulative);
                obj.regCount = T.format_number(_obj.regCount);
            }else if(i===1){ //新手专享标
                _obj.rookieList.map(data=>{
                    data.amount = T.format_number(data.amount);
                    data.statusClass = data.status!== 5?'btnDis':'hvr-bounce-to-left'; //样式判断
                    data.statusProductType =  T.setButtonName(data.status);//新手专享 确定按钮显示规则
                    data.pert = parseInt(data.pert);
                })
                obj.rookieList = _obj.rookieList;//新手专享标
                obj.rookieListString = JSON.stringify(_obj.rookieList);

                _obj.termHot.map(data=> {
                    data.amount = T.format_number(data.amount);
                    data.statusProductType =  T.setButtonName(data.status);//确定按钮显示规则
                    data.submitStatusClass = (data.status == 6 || data.status == 8 || data.status == 9)?"btn":'hvr-bounce-to-left nohover';
                    data.pert = parseInt(data.pert);
                });
                obj.termHotClass = (_obj.termHot.length===1&&_obj.termList.length===0) || (_obj.termHot.length===0&&_obj.termList.length===1)?"imgc":"imga";
                obj.termHotClass1 = (_obj.termHot.length===1&&_obj.termList.length===0) || (_obj.termHot.length===0&&_obj.termList.length===1)?"cpone":"cptwo";
                obj.termHot = _obj.termHot;//定期  热
                obj.termHotString = JSON.stringify(_obj.termHot);//定期  热


                _obj.termList.map(data=> {
                    data.amount = T.format_number(data.amount);
                    data.submitStatusClass = data.status !== 5?"btnDis":'hvr-bounce-to-left';
                    data.statusProductType =  T.setButtonName(data.status);//确定按钮显示规则
                    data.pert = parseInt(data.pert);
                })
                obj.termList = _obj.termList;//定期  列表
                obj.termListString = JSON.stringify(_obj.termList);//定期  列表

                _obj.p2pHot.map(data=> {
                    data.amount = T.format_number(data.amount);
                    data.submitStatusClass = data.status !== 5?"btnDis":'hvr-bounce-to-left';
                    data.statusProductType =  T.setButtonName(data.status);//确定按钮显示规则
                    data.pert = parseInt(data.pert);
                })
                obj.p2pHot = _obj.p2pHot;//p2p
                obj.p2pHotString = JSON.stringify(_obj.p2pHot);;//p2p

                obj.current = _obj.current;//新手灵活宝

                _obj.p2pList.map(data=> {
                    data.amount = T.format_number(data.amount);
                    data.submitStatusClass = data.status !== 5?"btnDis":'hvr-bounce-to-left';
                    data.statusProductType =  T.setButtonName(data.status);//确定按钮显示规则
                    data.pert = parseInt(data.pert);
                })
                obj.p2pList = _obj.p2pList;//p2p 普通产品
                obj.p2pListString = JSON.stringify(_obj.p2pList);//p2p 普通产品

                /*obj.listDatas = data.map.otherPro;
                obj.listDatas.push({});
                obj.newUser = data.map.newhand;
                obj.hotSales = data.map.mainPush;
                  列*/

            }
        });
        res && res.render('index',obj);
        let minify = require('html-minifier').minify ,
            content = minify(nunjucks.render('index.njk',obj),
	            {
	            	removeComments: true,
		            collapseWhitespace: true,
		            minifyJS:true,
		            minifyCSS:true
	            }
            );


        fs.writeFileSync('../www/index.html', content);


        /*
        removeComments 默认值false；是否去掉注释
collapseWhitespace 默认值false；是否去掉空格
minifyJS 默认值false；是否压缩html里的js（使用uglify-js进行的压缩）
minifyCSS 默认值false；是否压缩html里的css（使用clean-css进行的压缩）
         */
    });

};
