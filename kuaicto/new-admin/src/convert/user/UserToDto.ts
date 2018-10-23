/**
 *  author : bo.peng
 *  createTime 2018-10-23 15:07
 *  description :
 */
import User from '@/domain/user/User';
import UserDto from '@/dto/user/UserDto';

export default class UserToDto extends UserDto {
    constructor(user: User) {
       super(user);
    }
}