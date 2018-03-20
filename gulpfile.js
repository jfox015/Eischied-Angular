'use strict';
var exec = require('child_process').exec;
var gulp = require('gulp');
var sass = require('gulp-sass');
var nano = require('gulp-cssnano');
var exec = require('gulp-exec');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

var copy = require('gulp-copy'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    cssPath = './public/css/',
    publishPath = './public/app/',
    compilePath = './public/app/src_ts/';
 
gulp.task('sass', function () {
    gulp.src(cssPath + '/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(nano())
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('copyjs', function() {
    gulp.src(compilePath + '/**/*.js')
        //.pipe(rename({dirname: ''}))
        .pipe(gulp.dest(publishPath));
});

gulp.task('cleancss', function() {
    gulp.src([cssPath + '**/*.css'], {read: false})
        .pipe(clean());
});

gulp.task('cleanjs', function() {
    gulp.src([compilePath + '**/*.map', compilePath + '**/*.js', publishPath + '**/*.js'], {read: false})
        .pipe(clean());
});
        
gulp.task('sass:watch', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task("compileTypeScript", function() {
    exec('npm run tsc', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
    });
});

gulp.task('buildjs', ['compileTypeScript','copyjs']);
gulp.task('build', ['buildjs','sass']);
gulp.task('runsass', ['cleancss','sass']);
