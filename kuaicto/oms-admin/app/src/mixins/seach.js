/**
 * 搜索或者重置方法
 *
 * @param {any} tableParams 列表请求参数
 * @param {any} queryParams 搜索请求参数
 * @param {any} type searchOrRest
 * @returns tableParams queryParams _params
 */

export function searchOrReset(tableParams, queryParams, type) {
    if (type == 'reset') {
        for (var key in queryParams) {
          if (queryParams.hasOwnProperty(key)) {
            queryParams[key] = '';
          }
        }
    }
    _.extend(tableParams,{limit: 10,page: 1,offset: 0});
    let _params = _.extend({}, tableParams, queryParams);
      _.forEach(_params, (v, k) => {  //去除空的参数
        if (!v && v!==0) {
        delete _params[k];
      }
    });
    return {
        tableParams,
        queryParams,
        _params
    };
}

export var mixin = {
    created(){
        //在非第一页刷新后页码保持在当前页
        this.current = parseInt(this.$route.query.page)?parseInt(this.$route.query.page):1
    },
    mounted(){
        if(this.$route.query.page || this.$route.query.offset){
            this.queryParams  = this.hasValue(this.$route.query,this.queryParams);
            this.tableParams = this.hasValue(this.$route.query,this.tableParams)
            this.getList(this.$route.query)
        }else {
            
            this.getList(this.tableParams);
        }
       
    },
    data(){
        return{
            tableParams: {
                limit: 10,
                page: Number(this.$route.query.page)?Number(this.$route.query.page):1,
                offset: Number(this.$route.query.offset)?Number(this.$route.query.offset):0
            },
            total: 0,
            current :1  
        }
    },
    methods:{
        handleCurrentChange(val){
            this.tableParams.page = val
            this.current = val //处理使用K-table组件时候index索引问题
            let _params = _.merge(this.tableParams, this.queryParams, { offset: (val - 1) * 10 });
            _.forEach(_params, (v, k) => {
                if (!v && v !== 0) {
                  delete _params[k];
                }
            });
            this.$router.push({query:_params,path:this.$route.path});
            this.getList(_params);
        },
        search() {
            let {
                tableParams,
                queryParams,
                _params
            } = searchOrReset(this.tableParams, this.queryParams, 'search');
            this.tableParams = tableParams;
            this.$router.push({path:this.$route.path,query:_params});
            this.getList(_params);

        },
        hasValue(data,rule){
            $.each(rule,function (k,v) {
                $.each(data,function (key,value) {
                    if (k === key){
                        rule[k] = value;
                    }
                })
            })
            return rule
        },
        reset() {
            let {
                tableParams,
                queryParams,
                _params
            } = searchOrReset(this.tableParams, this.queryParams, 'reset');
            this.tableParams = tableParams;
            this.queryParams = queryParams;
            this.$router.push({path:this.$route.path,query:{}});
            this.getList({limit:10,page:1,offset:0});
        }
    }
}

