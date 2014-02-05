var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    minifyHTML = require('gulp-minify-html'),
    minifyCSS = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    lr = require('tiny-lr'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    open = require("gulp-open"),
    server = lr(),
    connect = require('connect'), 
    http = require('http'), 
    sass = require('gulp-sass'),
    runSequence = require('run-sequence');


gulp.task('lint', function() {
  return gulp.src('./app/scripts/app.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('clean_build', function() {
   return gulp.src('./build/', {read: false})
        .pipe(clean());
});

gulp.task('clean_dist', function() {
   return gulp.src('./dist/', {read: false})
        .pipe(clean());
});


gulp.task('sassMyShit', function(){
  return  gulp.src('app/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
});

gulp.task('minify-css', function() {
  gulp.src('./build/styles/**/**.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('minify-html', function() {
  gulp.src('./app/views/*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./dist'))
});

gulp.task('imagemin', function () {
    gulp.src('app/images/**.{png,svg,jpeg,gif,jpg}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist'));
});

//TODO add support for source maps
gulp.task('minify-js', function() {
  gulp.src('./app/scripts/**/*.js')
    .pipe(uglify({
            // inSourceMap: 
            // outSourceMap: "app.js.map"
    }))
    .pipe(gulp.dest('./dist/scripts'))
});

gulp.task('watch', function() {
    return gulp.src(['./app/scripts/**/**.**','./app/styles/**.**','./app/views/**.**'])
        .pipe(watch({ emit: 'all' }, function(files) {
            files
                .pipe(gulp.run('sassMyShit', 'lint'));
        }));
});

gulp.task("server", function(){
    var options = {
        url: "http://localhost:8888"
    };
    var app = connect()
            .use(connect.logger('dev'))
            .use(connect.static('app'))
            .use(connect.static('build'));

    http.createServer(app).listen(8888);

    gulp.run('watch');

    return gulp.src("./app/index.html")
        .pipe(open("", options));
});

gulp.task("copy_dist", function(){
    return gulp.src([
                './app/styles/**.css',
                './app/**/**.html'
            ])
            .pipe(gulp.dest('./dist'));

});

//Default task,. For minify use gulp-minify-
gulp.task('default', function(){
   runSequence('clean_build', [ 'lint' ],'server');
});

gulp.task('build', function(){
  runSequence('clean_dist', [ 'lint' ], 'minify-js', 'copy_dist');
});