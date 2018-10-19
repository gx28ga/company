/**
 * 异步加载当前目录下的vue
 * created by bo.peng 2018/3/30
 * email:spion@qq.com
 */
export default function( obj ){
    require.ensure([],(require)=> {
        let faile = require(obj.src+".vue");
        faile = faile.default?faile.default:faile;
        Vue.component(obj.name,faile);
        new Vue({
            el : ".openAccount-result",
            render(h){
                return h(obj.name,{...obj.data})
            }
        })
    });
}