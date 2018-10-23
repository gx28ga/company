/**
 *  author : bo.peng
 *  createTime 2018-10-22 13:27
 *  description :
 */
export default class RestResponse<T> {

    public static ERROR_CODE: number = -1;

    public static DEFAUL_ERROR_MSG: string = '未知错误';

    public static DEFAULT_SUCCESS: number = 0;

    public static DEFAULT_SUCCESS_MSG: string = '成功';

    public static success(data: any): RestResponse <any> {
        return new RestResponse(RestResponse.DEFAULT_SUCCESS, RestResponse.DEFAULT_SUCCESS_MSG, data);
    }

    public static error(code: number, msg: string): RestResponse<any> {
        return new RestResponse(RestResponse.ERROR_CODE, RestResponse.DEFAUL_ERROR_MSG, null);
    }

    private code: number;
    private msg: string;
    private data: any;
    private timestamp: Date;

    constructor(code: number, msg: string, data: any) {
        this.code = code;
        this.msg = msg;
        this.data = data;
        this.timestamp = new Date();
    }
}