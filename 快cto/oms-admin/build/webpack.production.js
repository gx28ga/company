process.env.NODE_ENV = 'production'
var path = require("path"),
    $config = require("../config"),
    projectRoot = releavePath("../"),
    webpack = require("webpack"),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin,
    HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(`$config.env=${process.env.NODE_ENV}`);

function releavePath(src) {
    return path.resolve(__dirname, src);
}

var config = require("./webpack.base.js"),
    appExtractText = new ExtractTextPlugin("app", "css/[name].[hash:6].css");

config.output = {
    path: releavePath("../app/release"),
    publicPath: "./",
    filename: 'js/[name].[hash:6].js',
    chunkFilename: "js/[name].[id].[hash:6].js"
}
config.module.loaders = config.module.loaders.concat([
    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
            limit: 10000,
            name: 'img/[name].[hash:6].[ext]'
        }
    },
    {
        test: /\.json$/,
        loader: 'url',
        query: {
            limit: 2,
            name: 'data/[name].[hash:6].[ext]'
        }
    },
    {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
            limit: 10000,
            name: 'fonts/[name].[hash:6].[ext]'
        }
    },
    {
        test: /\.css$/,
        loader: appExtractText.extract('vue-style-loader', 'css')
    },
    {
        test: /\.less$/,
        loader: appExtractText.extract('vue-style-loader', 'css!less')
    }
]);
config.module.vue = {
    loaders: {
        css: {
            test: /\.css$/,
            loader: appExtractText.extract('vue-style-loader', 'css')
        },
        less: {
            test: /\.less$/,
            loader: appExtractText.extract('vue-style-loader', 'css!less')
        }
    }
};
config.plugins = config.plugins || [];
config.plugins.push(appExtractText);
config.plugins.push(new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env.NODE_ENV)
}));
//排除部分不需要编译的文件
config.plugins.push(new CommonsChunkPlugin({
    name: "vendor",
    filename: "js/[name].[hash:6].js",
    minChunks: 2
}));
config.plugins.push(new HtmlWebpackPlugin({
    filename: 'index.html',
    template: releavePath('../app/src/index.html'),
    inject: true,
    minify:{
        collapseWhitespace:true,
    }
}));
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        dead_code: false,
        warnings: false,
        properties: false
    },
    mangle: {
        except: ['$super', '$', 'exports', 'require']
    },
    output: {
        screw_ie8: false
    },
    screwIE8: false
}));

module.exports = config;