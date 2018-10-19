let gulp = require('gulp'),
    watch = require('gulp-watch'),
	babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),

    postcss = require('gulp-postcss'),
    precss = require('precss'),
    cssmin = require('gulp-minify-css'),
    partialimport = require('postcss-partial-import'),
    //sass = require('postcss-sass'),
    spritesmith = require('gulp.spritesmith'),
    autoprefixer = require('autoprefixer'),
    mixins = require('postcss-sassy-mixins'),
    cssnano = require('gulp-cssnano'),
    simpleExtend = require('postcss-extend'),


    rev = require('gulp-rev-append'),
    htmlmin = require('gulp-htmlmin'),
    concat = require('gulp-concat'),
    inlinesource = require('gulp-inline-source'),
    clean = require('gulp-clean'),

    imagemin = require('gulp-imagemin');


gulp.task('html',function () {
    // html
    let htmloptions = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    },options = {
        compress: false
    },
    input = [
        'template/**/*.html',
        'template/*.html',
        '!template/home/index.html',
        '!template/404.html',
        '!template/browser.html',
        //'!template/common/*.html'
    ], output = [];

    input.map(val=>{
        let src = val ,
            reg = /^\!/,
            match = val.match(reg);
        if(match){
            src = val.replace(reg,"");
            src = '!dist/'+src;
        }else{
            src = 'dist/'+src;
        }
        output.push(src);
    });

    //index.html压缩
    gulp.src(['index.html'])
        .pipe(rev())
        .pipe(htmlmin(htmloptions))
        .pipe(gulp.dest('dist/'));
    setTimeout(function(){
        gulp.src(['dist/index.html'])
            .pipe(inlinesource(options))
            .pipe(gulp.dest('dist/'));
    },150)

    gulp.src(input)
    .pipe(rev())
    .pipe(htmlmin(htmloptions))
    .pipe(gulp.dest('dist/template/'));

    setTimeout(function(){
        gulp.src(output)
            .pipe(inlinesource(options))
            .pipe(gulp.dest('dist/template/'));
    },150)

});

gulp.task('common-sprite', function () { //common 精灵图生成
    let spriteData = gulp.src('images/common-sprites/*.png')
        .pipe(spritesmith({
            imgName : 'sprite.png',//保存合并后图片的地址
            imgPath : '../../images/common-sprites/sprite.png', //
            cssName : '../../style/common/common-sprite.css',//保存合并后对于css样式的地址
            padding : 20,
            algorithm : 'binary-tree'
        }));
        return spriteData.pipe(gulp.dest('../../www/images/common-sprites'));
});
gulp.task('footer-sprite', function () { //footer 精灵图生成
    let spriteData = gulp.src('images/footer-sprites/*.png')
        .pipe(spritesmith({
            imgName : 'sprite.png',//保存合并后图片的地址
            imgPath : '../../images/footer-sprites/sprite.png', //
            cssName : '../../style/common/footer-sprite.css',//保存合并后对于css样式的地址
            padding : 20,
            //algorithm : 'binary-tree'
        }));
    return spriteData.pipe(gulp.dest('../../www/images/footer-sprites'));
});


gulp.task('common-concat', [
    'common-sprite',
    'footer-sprite'
],function () { //common 精灵图生成
   return gulp.src([
           '../../www/style/common/common.css',
           '../../www/style/common/common-sprite.css',
           '../../www/style/common/footer-sprite.css'
       ])
        .pipe(concat('common.css'))
        .pipe(cssmin({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: '*',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: false,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest('../../www/style/common/'));
});
gulp.task('common-all',['common-sprite','footer-sprite','common-concat']);


gulp.task('cssmin', function () {
    return gulp.src([
            'style/**/*.css','style/*.css',
            '!style/common/**/*.css',
            '!style/common/*.css',
            'style/home/*.css',
            '!style/help/*.css',
            '!style/guide/*.css',
            'style/about/*.css',
            'style/other/*.css'
        ])
        .pipe(postcss([
                partialimport,
                mixins,
                precss,
                cssnano,
                simpleExtend,
                autoprefixer({
                    "browserslist": {
                        "production": [
                            '> 1%',
                            'Last 2 versions',
                            'IE 9',
                            'Firefox > 20'
                        ],
                        "development": [
                          "last 1 version"
                        ]
                      }
                    }
                )
            ])
        )
        //.pipe(cssver())
        .pipe(cssmin({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: '*',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: false,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe( gulp.dest('../../www/style/') );
});
gulp.task('css',[
    /*'common-all',*/
    'cssmin'
]);


gulp.task('img', function () {
    gulp.src([
            'images/*.{png,jpg,gif,ico}',
            'images/**/*.{png,jpg,gif,ico}',
            '!images/*{sprites,sprite}/*.{png,jpg,gif,ico}',
            '!images/topbar/*.{png,jpg,gif}',
            '!images/browser/*.{png,jpg,gif}',
            '!images/logo/*.{png,jpg,gif}',
            '!images/nav/*.{png,jpg,gif}',
            '!images/home/*.{png,jpg,gif}',
            '!images/common/*.{png,jpg,gif}',
            '!images/footer/*.{png,jpg,gif}',

        ])
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
        }))
        .pipe(gulp.dest('../../www/images'));
});

gulp.task('js', function () {
    const options = {
        mangle: false,//类型：Boolean 默认：true 是否修改变量名,
        compress: false,//类型：Boolean 默认：true 是否完全压缩
        preserveComments: 'license',//'license', //保留所有注释
    };
    gulp.src([
            'js/*.js','js/**/*.js',
            "!gulpfile.js",
            "js/common/*.js",
            "js/common/global.js",
            "!js/plug/*.js",
            "js/about/*.js",
            "js/activity/*.js",
            "!js/guide/*.js",
            "!js/help/*.js",
            "js/other/*.js",
        ])
	    .pipe(babel({
		    presets: ['es2015']
	    }))
        .pipe(uglify(options))
        .pipe(gulp.dest('../../www/js'));
});

gulp.task('all', function(){
    gulp.run('css','html', 'img', 'js');
});

gulp.task('watch',function(){
    /*gulp.watch('style/!*.css',['css']);
    gulp.watch('style/!**!/!*.css',['css']);*/
    //gulp.watch('style/home/*.css',['css']);
    gulp.watch('style/**/*.css',['css']);
    gulp.watch('js/**/*.js',['js']);
});
