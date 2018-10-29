/**
 * 密码MD5等处理
 * created by bo.peng 2018/4/8
 * email:spion@qq.com
 */

module.exports = {
    setPwd( pwdVal ){
        let md5 = require("../../static/plug/md5.min") ,
            SHA256 = require('../../static/plug/sha256.min'),
            /*hexDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'a', 'b', 'c', 'd', 'e', 'f' ],*/
            pwd = [md5(pwdVal)].join("");
            /*len = pwd.length ,
            k = 0,
            str = [];*/

        /*for(let i=0;i<len;i++){
            let b = pwd[i];
            str[k++] = hexDigits[b >> 4 & 0xf];
            str[k++] = hexDigits[b & 0xf];
        }*/
        let temp = SHA256(pwd);
        return temp;
    }
}
