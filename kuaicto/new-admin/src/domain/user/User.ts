/**
 *  author : bo.peng
 *  createTime 2018-10-22 16:17
 *  description :
 */
export default class User {
    public token: string;
    public userId: number;
    public userName: string;
    public userStatus: string;
    public userType: string;
    public createTime: string;
    public lastUpdate: string;
    constructor( data: any ) {
        this.token = data.token;
        this.userId = data.userId;
        this.userName = data.userName;
        this.userStatus = data.userStatus;
        this.userType = data.userType;
        this.createTime = data.createTime;
        this.lastUpdate = data.lastUpdate;
    }
}