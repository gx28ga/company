const path = require('path');
const webpack = require('webpack');

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
    ]
};

module.exports = {
  entry: {
     vendor: ['./js/global.js']
  },
  output: {
    path: path.join(__dirname, ''),
    filename: 'js/output/[name].dll.js',
    /**
     * output.library
     * 将会定义为 window.${output.library}
     * 在这次的例子中，将会定义为`window.vendor_library`
     */
    library: '[name]_library'
  },
  module: {
      rules: [
          {
              test: /\.css$/,
              use: ["css-loader", 'postcss-loader', ]
          }
      ],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        debug: false,
        options: {
            postcss: postcss,
            vue: { // 使用用户自定义插件
                postcss: postcss,
            }
        },
    }),
    new webpack.DllPlugin({
      /**
       * path
       * 定义 manifest 文件生成的位置
       * [name]的部分由entry的名字替换
       */
      path: path.join(__dirname, '', '[name]-manifest.json'),
      /**
       * name
       * dll bundle 输出到那个全局变量上
       * 和 output.library 一样即可。 
       */
      name: '[name]_library'
    }),
    /*new webpack.DefinePlugin({
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

    new webpack.optimize.OccurrenceOrderPlugin(),*/
  ]
};