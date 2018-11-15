/**
 *  author : Lxh
 *  createTime 2018-11-14
 *  description : 金额过滤器
 */
const digitsRE = /(\d{3})(?=\d)/g;
export const Currency = {
	currency(value: any, currency = '￥', decimals = 2) {
        value = parseFloat(value) / 100;
        if (!isFinite(value) || (!value && value !== 0)) {
          return 0;
        }
        let stringified = Math.abs(value).toFixed(decimals);
        let int = decimals
          ? stringified.slice(0, -1 - decimals)
          : stringified;
        let i = int.length % 3;
        let head = i > 0
          ? (int.slice(0, i) + (int.length > 3 ? ',' : ''))
          : '';
        let float = decimals
          ? stringified.slice(-1 - decimals)
          : '';
        let sign = value < 0 ? '-' : '';
        return sign + currency + head +
          int.slice(i).replace(digitsRE, '$1,') +
          float;
      },
};