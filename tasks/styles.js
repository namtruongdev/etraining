const { src, dest, series } = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');
const cleancss = require('gulp-clean-css');
const del = require('del');
const browserSync = require('browser-sync').create();

const paths = require('./paths');

function renderScss() {
  return src('src/scss/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss([ autoprefixer({ browsers: ['defaults'] }) ]))
  .pipe(cleancss())
  .pipe(dest(paths.cssFiles))
  .pipe(browserSync.stream());
}

const clean = async () => {
  await del([paths.cssFiles]);
};

exports.default = series(clean, renderScss);