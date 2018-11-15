/**
 *  author : bo.peng
 *  createTime 2018-11-14 16:43
 *  description : 分页配置
 */
export class PageConfig {
    public response: any;
    public pagination: any;
    constructor() {
        this.response = { // 接口请求
            limit: 10, // 一页显示多少条
            page: 1, // 当前页数
            offset: 0, // 开始的条数 0为第一条  1为 limt*page
        };
        this.pagination = { // 分页请求
            current: 1, // 当前页
            total: 0, // 总共多少页
            pageSize: this.response.limit, // 每一页显示多少条
        };
    }
    set current( val: number ) { // 更新当前页
        this.response.page = val;
        this.response.offset = (val - 1) * this.response.limit;
        this.pagination.current = val;
    }
    set total( val: number ) { // 更新 总页数
        this.pagination.total = val;
    }
    set params( data: any) { // 设置 分页，搜索等多重字段
        Object.assign(this.response, data);
        let obj = this.response;
        for ( let key in obj) {
            if (!obj[key] ) {
                delete obj[key];
            }
        }
    }
}