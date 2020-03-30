const { src, dest, series } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pipeline = require('readable-stream').pipeline;
const browserSync = require('browser-sync').create();
const del = require('del');

const paths = require('./paths');

function script() {
  return pipeline(
    src(paths.sourceJsFileGlob),
    concat('main.js'),
    uglify(),
    dest(paths.jsFiles),
    browserSync.stream()
  );
}

const clean = async () => {
  await del([paths.jsFiles]);
}

exports.default = series(clean, script);