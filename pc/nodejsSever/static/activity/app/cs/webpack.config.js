var webpack = require('webpack')
    ,path = require('path')
    ,HtmlWebpackPlugin = require('html-webpack-plugin')
    ,ImageminPlugin = require('imagemin-webpack-plugin')
    ,CleanPlugin = require('clean-webpack-plugin')
    ,ExtractTextPlugin = require("extract-text-webpack-plugin")
    ,CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")
    ,build =  process.env.NODE_ENV === 'build'
    ,local = ''
    ,http = ''; 


const postcss = {
    plugins : [
        require('postcss-cssnext')({
            browserslist : {
                
                "chrome": {
                },
            }
        }),
        require('postcss-pxtorem')({
            replace: true,
            propList: [
                'font', 'font-size', 'line-height', 
                'letter-spacing',
                'width','height'
            ],
        }),
        require('postcss-assets')({
            loadPaths:['images/**'],
            basePath: __dirname + '/build',
            //baseUrl: 'http://localhost/activity/app/guhuaDafuweng/build/',
            relative : true,
            cachebuster: true
        }),
       /* require('postcss-sprites')({
            retina: true,//支持retina，可以实现合并不同比例图片
            verbose: true,
            spritePath: './build/images/',//雪碧图合并后存放地址
            stylesheetPath: './images',
            basePath: './',
            filterBy: function (image) {
                //过滤一些不需要合并的图片，返回值是一个promise，默认有一个exist的filter
                //
                if (image.url.indexOf('/images/sprites/') === -1) {
                    return Promise.reject();
                }
                return Promise.resolve();
            },
            groupBy: function (image) {
                //将图片分组，可以实现按照文件夹生成雪碧图
                return spritesGroupBy(image);
            },
            hooks: {
                onUpdateRule: function (rule, comment, image) {
                    //更新生成后的规则，这里主要是改变了生成后的url访问路径
                    return spritesOnUpdateRule(true, rule, comment, image);
                },
                onSaveSpritesheet: function(opts, groups) {
                    return spritesOnSaveSpritesheet(true, opts, groups);
                }
            }
        }),*/
        /*require('postcss-simple-vars'),
        require('postcss-define-property'),
        require('postcss-nested'),
        require('postcss-mixins'),*/
        //require('precss'),
        //require('postcss-scss'),
       // require('postcss-each'),
       // require('postcss-for'),
    ],
    options: {
        //parser: sugarss // use sugarss parser
    }
};

module.exports = {
    entry: { 
        app : './src/main.js',
        //vendor : ["Vue", "VueRouter",'zepto']
    },
    output: {
        path: path.join(__dirname, build?'/ftp':"/build"),
        publicPath: build ? http : local,
        filename: "[name].js?name=[hash]",
        chunkFilename:  '[name]_chunk.js?name=[hash]',
    },
    module: {
       // noParse : ['./plug/'],
        rules :[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ]
            },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "babel-loader",
            },
            /*{
                enforce: 'pre',
                test: /\.vue$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },*/
           /* {
                test: /\.vue$/,
                loader: 'vue-loader',
                include : [// 只去解析运行目录下的 src 和 demo 文件夹
                    path.join(process.cwd(), './src'),
                ],
                exclude: /node_modules/,
                options : {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: [
                                "css-loader",
                                'postcss-loader'
                            ],
                            fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
                        })
                    }
                }
            },*/
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use : [
                    {
                        loader : 'url-loader',
                        options : {
                            limit: 8192, //图片大小超过0.5kb, 不压缩入 bundle 
                            name: '[path]/[name].[ext]?[hash:8]'  //图片输出路径
                        }
                    }
                ]
               // use: "file-loader?limit=8192&name=[path][name].[ext]?[hash:8]",//,'image-webpack-loader',"url-loader"
            },
        ],
    },
    resolve:{
        modules: [
            path.join(__dirname, "/"),
            "node_modules"
        ],
/*        alias : {
            zepto : 'src/plug/zepto' , 
            Vue : 'src/plug/vue.min' , 
            VueRouter : 'src/plug/vue-router.min' ,
        },*/
        extensions: ['.js', '.json', '.scss','.sass','.vue','.jsx','.css'],
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: postcss,
                vue: {// 使用用户自定义插件
                    postcss: postcss,
                }
            },
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('./src/', 'index.html'),  
            inject: true,
            filename: 'index.html',
            minify : {
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:false    //删除空白符与换行符
            }
        }),
        new webpack.ProvidePlugin({
            //Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
            //'Promise': 'exports?global.Promise!es6-promise',
            /*Promise: 'es6-promise-promise',
            $ : 'zepto',
            Vue : 'Vue',
            VueRouter : 'VueRouter',*/
            //React : 'react',
            //ReactDOM : 'react-dom'
        }),
        new ExtractTextPlugin({
            filename : './[id][name].css?[hash]',
            allChunks : true
        }),
        //new ImageminWebpackPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
        new CommonsChunkPlugin({
            name: 'vendor', 
            filename : 'global.js?[hash:8]',
            minChunks : Infinity
        })
    ]
};

if (build) {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),
    new CleanPlugin('./ftp')

  ])

}else{
  module.exports.devtool = '#source-map'
}