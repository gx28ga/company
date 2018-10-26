/**
 *  author : bo.peng
 *  createTime 2018-10-22 20:40
 *  description :
 */
export interface Rule {
    field: string;
    fullField: string;
    type: string;
    validator: void;
}
export interface Validator {
    rule: Rule;
    value: string;
}