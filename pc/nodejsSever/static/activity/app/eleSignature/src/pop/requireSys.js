module.exports = function( obj ){
    obj.data = obj.data || {
        props : {
            transition : 'rotate3d'//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
        }
    };
    if(!obj.data.props.transition){
        obj.data.props.transition = 'rotate3d'//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
    }

    require.ensure([],(require)=> {
        let sys = require(obj.src + '.vue');
        sys = sys || sys.default;
        $('<div class="child">').appendTo($('body'));
        Vue.component(obj.elementName,sys);
        new Vue({
            el: '.child',
            render(h) {
                return h(obj.elementName, {...obj.data})
            }
        });
    });
};