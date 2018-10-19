(function() {// 生成随机的图片预加载的背景图
    const menu = {};
    menu.install = (Vue, options = {}) => {
        Vue.directive('menu', {
            inserted(el, binding) {
                // console.log(el)
                // console.log( binding.value)
                    if(binding.value == '/menu/list'){
                        // el.classList.add("is-active")
              
                    }
                // el.querySelector('li').addEventListener('blur',function (event) {
                //     binding.value()

                // })
            }
        })
    };
    if (typeof exports == 'object') {
        module.exports = menu
    } else if (typeof define == 'function' && define.amd) {
        define([], () => menu)
    } else if (window.Vue) {
        window.img = menu;
        Vue.use(menu)
    }
}());
 


