'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');


gulp.task('dist.css', function () {
  return gulp.src(['src/css/*.css','src/sass/*.scss'])
    .pipe(concat('styles.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
	.pipe(rename('styles.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function(){
  gulp.watch('src/sass/*.scss', ['dist.css']); 
})