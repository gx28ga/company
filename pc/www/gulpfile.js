let gulp = require('gulp'),
    watch = require('gulp-watch'),
    inlinesource = require('gulp-inline-source');

let input;

input = ['./index.html']
gulp.task('html',function () {
    // html
    let options = {
        compress: false
    };
    //index.html压缩
    gulp.src(input)
        .pipe(inlinesource(options))
        .pipe(gulp.dest('./'));

});

gulp.task('watch',['html'],function(){
    return gulp.watch(input,['html']);
});