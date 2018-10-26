/**
 *  author : bo.peng
 *  createTime 2018-10-22 20:51
 *  description :
 */

export default class Verification {
    /**
     * 英文验证
     * @param min
     * @param max
     * @param value
     */
    public static english(value: string, min: number = 6, max: number = 12) {
        return new RegExp("^[a-z|A-Z]{" + min + "," + max + "}$").test(value);
    }
    /**
     * 中文验证
     * @param min
     * @param max
     * @param value
     */
    public static chinese(value: string, min: number = 2, max: number = 12) {
        return new RegExp("^[\u4e00-\u9fa5]{" + min + "," + max + "}$").test(value);
    }
    /**
     * 必需数字
     * @param min
     * @param max
     * @param value
     */
    public static number(value: string, min: number = 1, max: number = 20) {
        return new RegExp("^\d{" + min + "," + max + "}$").test(value);
    }
    /**
     * 包含数字和字母
     * @param min
     * @param max
     * @param value
     */
    public static numAndLetter(value: string, min: number= 6, max: number= 20) {
        if (value.length < min || value.length > max) { return false; }
        if (!(/^[a-z|A-Z]{1,}/.test(value))) { return false; }
        return (/\d+/).test(value);
    }
    /**
     * 路经
     * @param value
     */
    public static path(value: string) {
        // @ts-ignore
        const reg = /^([\/|\w|\-|\:])+/;
        return reg.test(value);
    }
    /**
     * url地址
     * @param value
     */
    public static http(value: string) {
        // @ts-ignore
        const reg = /^(http|https):\/\/[\w|\:|\d|\/]+$/;
        return value.search(reg) >= 0;
    }
    /**
     * 是否为空
     * @param value
     */
    public static empty(value: string) {
        return value ? value.length > 0 : false;
    }
}