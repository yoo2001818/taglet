var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');
var webpack = require('webpack');
var webpackConfiguration = require('./webpack.config.js');
var del = require('del');
require('babel-core/register');

gulp.task('lint', function () {
  return gulp.src(['src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('mocha', function() {
  return gulp.src(['test/**/*.js'], { read: false })
    .pipe(mocha({ reporter: 'list' }))
    .on('error', gutil.log);
});

gulp.task('webpack', function(callback) {
  // run webpack
  webpack(webpackConfiguration, function(err, stats) {
    if (err) throw new gutil.PluginError('webpack', err);
    gutil.log('[webpack]', stats.toString({}));
    callback();
  });
});

gulp.task('watch', function() {
  gulp.watch(['src/**', 'test/**'], ['mocha', 'lint', 'webpack']);
});

gulp.task('clean', function(callback) {
  del([
    'dist/**/*'
  ], callback);
});

gulp.task('test', ['mocha', 'lint']);

gulp.task('default', ['mocha', 'lint', 'webpack']);
