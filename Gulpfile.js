var gulp = require("gulp");
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var size = require('gulp-size');
var jshint = require('gulp-jshint');
var cache = require('gulp-cache');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var del = require('del');
var runSequence = require('run-sequence');
var watch = require("gulp-watch");



gulp.task("lint", function() {
 return gulp.src(['./app/**/*.js'])
    //.pipe(cache("linting"))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task( "clean", function() {
    return del(["dist"]);
});

gulp.task('minify-css', function() {
  //var opts = {comments:true,spare:true};
//  gulp.src(['./app/**/*.css', '!./app/bower_components/**'])
//    .pipe(minifyCSS(opts))
//    .pipe(gulp.dest('./dist/'));
   return gulp.src( "./app/**/*.css" )
        .pipe( concat( "app.css" ) )
        .pipe( size() )
        .pipe( gulp.dest( "./dist/" ) );
});
gulp.task('minify-js', function() {
 return gulp.src(['./app/app.js', './app/**/!(app)*.js'])
   .pipe( concat( "app.js" ) )
    //.pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('copy-bower-components', function () {
  gulp.src('./bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('copy-html-files', function () {
 return gulp.src('./app/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-images', function(){
   return gulp.src(['./app/images/*.jpg', './app/images/*.png'])
            .pipe(gulp.dest('dist/images'));
});
gulp.task('watch', function(){
    gulp.watch('./app/**/*.js', ['minify-js']);
    gulp.watch('./app/**/*.html', ['copy-html-files']);
    gulp.watch('./app/**/*.css', ['minify-css']);
    gulp.watch('./app/**/*.png', ['copy-images']);
    gulp.watch('./app/**/*.jpg', ['copy-images']);
     watch(["./app/app.js", "./app/**/*.js", "/app/**/* "], ['minify-js']);
});

gulp.task("connect", function () {
  connect.server({
    root: "app/",
    port: 8888
  });
});
gulp.task("connectDist", function () {
  connect.server({
    root: "dist/",
    port: 8888
  });
});

gulp.task('build', function() {
  runSequence(
    ['clean'],
    ['lint', 'minify-css', 'minify-js','copy-images', 'copy-html-files', 'copy-bower-components', 'watch']
  );
});
gulp.task('serve', ["build"],function(){
     var browserSync = require('browser-sync').create();
    browserSync.init({
        browser: "chrome",
        port: 8888,
        files: ["./dist/app.js",
            "./dist/index.html",
            "./dist/**/*.html",
            "./dist/**/*.css"],
        server: {
            baseDir: "./dist"
        },
        logLevel: "debug",
        logConnections: true,
        logFileChanges: true,
        online: false
    });
});
gulp.task('default', ["serve"]);