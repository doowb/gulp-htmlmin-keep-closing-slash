'use strict';

const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

gulp.task('default', () => {
  return gulp.src('src/index.html')
    .pipe(htmlmin({keepClosingSlash: true}))
    .pipe(gulp.dest('dest'));
});
