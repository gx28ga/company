process.env.NODE_ENV = 'development'
var path = require("path"),
    $config = require("../config"),
    projectRoot = releavePath("../"),
    webpack = require("webpack"),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin,
    HtmlWebpackPlugin = require('html-webpack-plugin');


function releavePath(src) {
    return path.resolve(__dirname, src);
}

var config = require("./webpack.base.js"),
    appExtractText = new ExtractTextPlugin("app", "css/app.css"),
    pageExtractText = new ExtractTextPlugin("app", "css/[name].css");

Object.keys(config.entry).forEach(function (name) {
    config.entry[name] = [releavePath('./dev-client.js')].concat(config.entry[name])
});


config.output = {
    path: releavePath("../app/dist"),
    publicPath: "/",
    filename: 'js/[name].js',
    chunkFilename: "js/[name].[id].js"
}
config.module.loaders = config.module.loaders.concat([
    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
            limit: 10000,
            name: 'img/[name].[ext]'
        }
    },
    {
        test: /\.json$/,
        loader: 'url',
        query: {
            limit: 2,
            name: 'data/[name].[ext]'
        }
    },
    {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
            limit: 10000,
            name: 'fonts/[name].[ext]'
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
config.plugins.push(pageExtractText);
config.plugins.push(new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env.NODE_ENV)
}));
config.plugins.push(new CommonsChunkPlugin({
    name: "vendor",
    filename: "js/[name].js",
    minChunks: 3
}));
config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.NoErrorsPlugin());
config.plugins.push(new HtmlWebpackPlugin({
    filename: 'index.html',
    template: releavePath('../app/src/index.html'),
    inject: true
}));

config.devtool= '#source-map';
module.exports = config;