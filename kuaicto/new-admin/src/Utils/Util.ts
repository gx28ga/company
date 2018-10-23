/**
 *  author : bo.peng
 *  createTime 2018-10-23 15:50
 *  description :
 */
class Util {
    public static timestamp(timeStamp: string, num: number = 1) {// 时间戳转换成日期
        let tamest: number | string = (timeStamp == null || timeStamp === undefined || !Number(timeStamp)) ?
            new Date().getTime() :
            timeStamp;
        num = (num === undefined || num == null) ? 1 : num;
        let time = new Date(tamest);
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        if (num === 1) {
            return year + '-' + month + '-' + day;
        } else if (num === 2) {
            return year + '/' + month + '/' + day;
        } else if (num === 3) {
            return month + '-' + day;
        } else if (num === 4) {
            return month + '/' + day;
        } else if (num === 5) {
            return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
        } else if (num === 6) {
            return hours + ':' + minutes + ':' + seconds;
        }
    }
    public static setItem(key: string, value: object) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    public static getItem(name: string) {
        // @ts-ignore
        return JSON.parse(localStorage.getItem(name));
    }
    public static delItem(name: string) {
        localStorage.removeItem(name);
    }
    public static setSession(key: string, value: object) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
    public static getSession(name: string) {
        // @ts-ignore
        return JSON.parse(sessionStorage.getItem(name));
    }
    public static delSession(name: string) {
        sessionStorage.removeItem(name);
    }
}