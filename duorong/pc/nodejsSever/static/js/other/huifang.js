new Vue({
    el : '#APP',
    delimiters: ['${', '}'],
    mounted : function(){
        T.setNavCurrent('about')
    }
});