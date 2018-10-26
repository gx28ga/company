/**
 *  author : bo.peng
 *  createTime 2018-10-22 16:23
 *  description :
 */
import UserDto from '@/dto/user/UserDto';

export interface CurrentDto {
    userDto: UserDto;
    login: boolean;
}