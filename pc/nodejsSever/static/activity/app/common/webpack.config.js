var webpack = require('webpack'),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ImageminPlugin = require('imagemin-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin'),
    UglifyJsParallelPlugin = require('webpack-uglify-parallel'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"),
    build = process.env.NODE_ENV === 'build',
    local = '',
    http = '';
const postcss = {
    plugins: [
        require('postcss-cssnext'),
        require('postcss-pxtorem')({
            replace: true,
            propList: ['font', 'font-size', 'line-height', 'box-shadow', 'letter-spacing', 'perspective', 'transform', '-webkit-perspective', '-webkit-transform', 'max-width', 'min-width', 'max-height', 'min-height', 'margin', 'margin-left', 'margin-right', 'margin-bottom', 'margin-top', 'padding', 'padding-left', 'padding-right', 'padding-bottom', 'padding-top', 'border', 'border-left', 'border-right', 'border-bottom', 'border-top', 'width', 'height', 'background-position', 
                'top','left','bottom','right',
                'border-radius'],
        }),
        require('postcss-assets')({
            loadPaths: ['images/**'],
            basePath: __dirname + '/build',
            relative: true,
            cachebuster: true
        }),
        require('postcss-extend'),
        require('precss'),
    ],
    options: {
    }
};

module.exports = {
    entry: ['./js/global'],
    output: {
        path: path.join(__dirname, "./js/output"),
        publicPath: build ? http : local,
        filename: "[name].js?name=[hash]",
        chunkFilename:  '[name]_chunk.js?name=[hash]',
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ["css-loader", 'postcss-loader', ]
            }, {
                test: /\.scss$/,
                use: ["css-loader", "sass-loader"]
            }, {
                test: /\.js$/,
                enforce: "pre",
                loader: "babel-loader",
                include: [ // 只去解析运行目录下的 src 和 demo 文件夹
                    path.join(process.cwd(), './src'),
                ],
                exclude: function(path) {
                    // 路径中含有 node_modules 的就不去解析。
                    var isNpmModule = !!path.match(/node_modules/);
                    return isNpmModule;
                },
                options : {
                    presets : [
                        //"react",
                        "es2015",
                        //'es2015-loose-ie8',
                       // "es2015-loose",
                        "stage-0",
                    ],
                    plugins : [
                        //"add-module-exports",
                        //"react-html-attrs",
                        /*"transform-es3-member-expression-literals",
                        "transform-es3-property-literals"*/
                        //"transform-es2015-ie8-classes"
                    ],
                    compact : false,
                   // postLoaders : ['es3ify-loader']
                }
            }
        ],
    },
    resolve : {
        alias : {
            //zepto: 'js/plug/zepto',
            global: './js/global',
        },
        extensions: ['.js', '.json', '.scss', '.sass', '.vue', '.jsx', '.css'],
    }
    ,plugins: [
      new webpack.LoaderOptionsPlugin({
            debug: false,
            options: {
                postcss: postcss,
                vue: { // 使用用户自定义插件
                    postcss: postcss,
                }
            },
        }),
      new webpack.ProvidePlugin({
          Promise: 'es6-promise-promise',
          //$: 'zepto',
          T: 'global',
      })
    ]
};
if (build) {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        //new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new CleanPlugin('./ftp')
    ])
} else {
    module.exports.devtool = '#source-map'
}