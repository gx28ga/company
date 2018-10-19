var path = require("path"),
    $config = require("../config"),
    projectRoot = releavePath("../"),
    webpack = require("webpack"),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

function releavePath(src) {
    return path.resolve(__dirname, src);
}
var config = {
    entry: {
        app: ["babel-polyfill", releavePath("../app/src/main.js")],
    },
    output: {
        filename: "js/[name].js"
    },
    resolve: {
        extensions: ['', '.js', '.vue', '.json'],
        fallback: [releavePath('../node_modules')],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            '$config': releavePath('../config.js'),
            'src': releavePath('../app/src')
        }
    },
    resolveLoader: {
        fallback: [releavePath('../node_modules')]
    },
    externals: {
    },
    module: {
        loaders: [
            {
                test: require.resolve("vue"), loader: "expose-loader?Vue"
            },
            {
                test: require.resolve("jquery"), loader: "expose-loader?$"
            },
            {
                test: require.resolve("lodash"), loader: "expose-loader?_"
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/node_modules$/),//排除部分不需要编译的文件
        new webpack.ProvidePlugin({
            Vue: 'vue',
            _: 'lodash',
            $: 'jquery',
            jquery:'jquery',
            jQuery:'jquery'
        })
    ]
};

module.exports = config;