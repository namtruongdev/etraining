const { src, dest, lastRun } = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const paths = require('./paths');

// Function render Pug to html 
function renderPug() {
  return src(paths.pugFileGlob)
  .pipe(pug())
  .pipe(dest('./'))
  .pipe(browserSync.stream());
}

exports.renderPug = renderPug;