/**
 *  author : bo.peng
 *  createTime 2018-10-22 16:26
 *  description :
 */
export default class UserDto {
    private token?: string;
    private userId: number;
    private userName: string;
    private userStatus?: string;
    private userType?: string;
    private createTime?: string;
    private lastUpdate?: string;
    constructor( data: any ) {
        this.userId = data.userId;
        this.userName = data.userName;
    }
}
/*
export default interface UserDto {
    token: string;
    userId: number;
    userName: string;
    userStatus: string;
    userType: string;
    createTime: string;
    lastUpdate: string;
}*/
