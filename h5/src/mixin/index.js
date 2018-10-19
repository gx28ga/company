export default {
	methods: {
	    _name(name){
            return /^[\u4e00-\u9fa5|\·|a-z|A-Z]{1,20}$/.test(name);
        },
        _letter(val) { //字母不能小于6位
            return new RegExp("^[a-z|A-Z]{5,20}$").test(val);
        },
        _chinese(val) {
            let reg = /^[\u4e00-\u9fa5]{1,9}$/;
            if (reg.test(val)) return true;
            return false;
        },
        _letterOrChinese(val) { //字母或中文
            return new RegExp("^[a-z|A-Z|\u4e00-\u9fa5]{1,9}$").test(val);
        },
        _numAndLetter(val, min = 6, max = 18) { //包含数字和字母
            if (val.length < min || val.length > max) return false;
            let num = /[0-9]+/,
                letter = /[a-z|A-Z]+/;
            return (num.test(val) && letter.test(val));
        },
        _numOrLetter(val, min = 6, max = 18) { //包含数字和字母
            if (val.length < min || val.length > max) return false;
            if (!(/^[a-z|A-Z]{1,}/.test(val))) return false;
            return (new RegExp("[\\w|\\d]+").test(val));
        },
        _password(val) {
            return this._numAndLetter(val);
        },
        _path(val) {
            let reg = /^([\/|\w|\-|\:])+/;
            if (reg.test(val)) return true;
            return false;
        },
        _http: function (value) {
            let reg = /^(http|https):\/\/[\w|\:|\d|\/]+$/;
            return value.search(reg) >= 0;
        },
        _tel(val) {
            let myreg = /^[1][1-9][0-9]{9}$/;
            if (!myreg.test(val)) {
                return false;
            } else {
                return true;
            }
        },
        _id(val) {//身份证验证
            let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            return reg.test(val);
        }
    }
};
