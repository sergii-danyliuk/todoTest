'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');


gulp.task('sass', function() {
    return gulp.src('./assets/css/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./**/*.scss', ['sass']);
});

gulp.task('browser-sync', function() {

    var files = [
        './index.html',
        './app/**/*',
        './assets/**/*'
    ];
    browserSync.init(files, {
        server: {
            baseDir: "./"
        }
    });
    
});


gulp.task('default', ['browser-sync'], function() {
    gulp.start('sass:watch');
});
