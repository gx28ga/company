webpackJsonp([4],{

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue, VueRouter, __dirname, T) {

__webpack_require__(6);

Vue.use(VueRouter);
var router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: [{
        path: '/',
        component: function component(resolve) {
            __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(12)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }]
});

window.router = router;
window.bus = new Vue();
new Vue({
    router: router,
    data: function data() {
        return {
            transitionName: 'slide-left',
            home: false
        };
    },

    watch: {
        '$route': function $route(to, from) {
            this.home = to.path != '/';
            var toDepth = to.path.split('/').length;
            var fromDepth = from.path.split('/').length;
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
        }
    },
    mounted: function mounted() {
        var url = '/activity/app/magicCube/src/images/';
        T.init({
            loadding: {
                timing: 'spinner-loader', //加载 spinner , spinner-loader , loadingbar , lightLoader , square ,circles,circles1,circles2,circles3,circles4,line'
                fillColor: 'rgba(150,213,0,1)',
                imgs: [],
                callback: function callback() {}
            }
        });
    },

    template: '\n        <div id="app">\n            <transition name="left">\n            <!--<transition name="fade">-->\n                <router-view class="child-view"></router-view>\n            </transition>\n            <div id=\'pop\'><div class=\'child\'></div></div>\n        </div>\n    '
}).$mount('#app');
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(2), "/", __webpack_require__(0)))

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[14]);
//# sourceMappingURL=app.js.map?name=0537a83d152e9a16371f