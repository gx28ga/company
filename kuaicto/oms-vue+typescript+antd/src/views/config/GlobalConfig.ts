/**
 *  author : bo.peng
 *  createTime 2018-11-15 9:44
 *  description :
 */
import {Util} from '@/Utils/Util';

export const GlobalConfig = {
    setCreateElement( obj: any, values: any ): any {
        if (Util.isArray(obj)) {
            obj.forEach((item: any) => {
                if (Util.isString(values)) {
                    if (item[values]) {
                        item[values] = item[values].bind(window.Main);
                    }
                }
            });
        }
        return obj;
    },
};