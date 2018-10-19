webpackJsonp([9],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue, $) {

__webpack_require__(12);

Vue.component('pop', {
    render: function render(h) {
        var self = this;
        return h('transition', {
            attrs: {
                'name': self.transition
            }
        }, [h('div', {
            'class': self.superClass,
            staticClass: 'modal-mask',
            directives: [{
                name: "show",
                rawName: "v-show",
                value: self.showModal
            }],
            on: {
                click: self.closePop
            }
        }, [h('div', {
            staticClass: 'modal-wrapper',
            on: {
                click: self.closePropagtion
            }
        }, [this.$slots.main])])]);
    },
    data: function data() {
        return {
            showModal: true
        };
    },

    props: {
        superClass: String,
        transition: String,
        closeCallback: Function
    },
    methods: {
        closePropagtion: function closePropagtion(e) {
            e.stopPropagation(); //
        },
        showPop: function showPop(callback) {
            this.showModal = true;
            if ($.type(callback) == 'function') {
                setTimeout(callback, 500);
            }
        },
        closePop: function closePop(callback) {
            var _this = this;

            this.showModal = false;
            setTimeout(function () {
                $(_this.$el).remove();
            }, 510);
            if ($.type(callback) == 'function') {
                setTimeout(callback, 500);
            }
            this.closeCallback && this.closeCallback.call(this);
        }
    }
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(2)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Vue, VueRouter, __dirname, T) {

__webpack_require__(8);

var _requirePop = __webpack_require__(4);

var _requirePop2 = _interopRequireDefault(_requirePop);

__webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import info from './common/info'; //获取项目信息
//import {participate} from './common/URL';
Vue.use(VueRouter);
var router = new VueRouter({
    mode: "hash",
    base: __dirname,
    routes: [{
        path: '/',
        redirect: '/main'
    }, {
        path: '/main',
        meta: {
            title: "赚佣金"
        },
        component: function component(resolve) {
            __webpack_require__.e/* require */(7).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(14)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/task',
        meta: {
            title: "邀请奖励记录"
        },
        component: function component(resolve) {
            __webpack_require__.e/* require */(4).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(17)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/level',
        meta: {
            title: "我的待收等级"
        },
        component: function component(resolve) {
            __webpack_require__.e/* require */(5).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(16)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/earn',
        meta: {
            title: "每月任务"
        },
        component: function component(resolve) {
            /*return require.ensure([],(require)=>{
                return require('./module/main/index');
            })*/
            __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(18)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/hesitory',
        meta: {
            title: "历史数据"
        },
        component: function component(resolve) {
            /*return require.ensure([],(require)=>{
                return require('./module/main/index');
            })*/
            __webpack_require__.e/* require */(6).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(15)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }, {
        path: '/strategy',
        meta: {
            title: "攻略"
        },
        component: function component(resolve) {
            __webpack_require__.e/* require */(8).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(19)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
        }
    }]
});
/*router.beforeEach((to, from, next) => {
    $('#pop').html('<div class="child"></div>')
    next(vm => {});
});*/

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
            this.transitionName = this.getTransition(to, from);
            /* this.home = to.path!='/';
             const toDepth = to.path.split('/').length
             const fromDepth = from.path.split('/').length
             this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'*/
        }
    },
    methods: {
        getTransition: function getTransition(to, from) {
            var text = 'left',
                arr = ['/main', '/task', '/level', '/strategy'];

            for (var i = 0; i < arr.length; i++) {
                if (to.path == arr[i]) {
                    text = 'right';
                    break;
                } else if (from.path == arr[i]) {
                    text = 'left';
                    break;
                } else {
                    text = 'left';
                }
            }
            return text;
        }
    },
    mounted: function mounted() {
        var http = T.imgsrc + "/activity/src/images/";
        T.init({
            loadding: {
                imgs: [],
                callback: function callback() {
                    if (!T.uid) {
                        T.login();
                    }
                }
            }
        });
    },

    template: '\n        <div id="app">\n            <transition :name="transitionName">\n                <router-view class="child-view"></router-view>\n            </transition>\n            <div id=\'pop\'></div>\n        </div>\n    '
}).$mount('#app');
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(3), "/", __webpack_require__(1)))

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[10]);
//# sourceMappingURL=app.js.map?name=75a448a25405b5a6009f