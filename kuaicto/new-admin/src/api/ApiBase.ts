/**
 *  author : bo.peng
 *  createTime 2018-10-19 15:47
 *  description :
 */
export default interface ApiBase {
    /**
     * 创建
     * @param name
     * @param params
     */
    create(name: string, params: object): void;

    /**
     * 更新
     * @param name
     * @param id
     * @param params
     */
    update(name: string, id: string, params: object): void;

    /**
     * 按ID获取
     * @param name
     * @param id
     * @param idx
     */
    get(name: string, id: string , idx?: string): void;

    /**
     * query
     * @param name
     * @param params
     */
    query(name: string, params: object): void;

    /**
     * 按ID删除
     * @param name
     * @param id
     */
    delete(name: string, id: string): void;

    /**
     * 查找列表
     * @param name
     * @param params
     */
    find(name: string, params: object): void;
}
