'use strict';

// dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');
const del = require('del');
const browserSync = require('browser-sync');


// SCSS | CSS //

var SCSS_SRC = './src/styles/scss/**/*.scss';
var SCSS_DEST = './src/styles/css';

// compile SCSS
gulp.task('compile_scss', () => {
	gulp.src(SCSS_SRC)
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(rename({ suffix: '.min' }))
	.pipe(changed(SCSS_DEST))
	.pipe(gulp.dest(SCSS_DEST))
	.pipe(browserSync.stream())
});

gulp.task('clean', () => {
	return del(SCSS_DEST);
})

gulp.task('watch_scss', function() {
    gulp.watch(SCSS_SRC, ['compile_scss']);
});

gulp.task('default', ['watch_scss']);
