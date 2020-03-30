const { watch, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const Pug = require('./tasks/pug');
const Css = require('./tasks/styles');
const Script = require('./tasks/scripts');
const Image = require('./tasks/images');
const paths = require('./tasks/paths');

function reload(done) {
  browserSync.reload();
  done();
}

function serve(done) {
  browserSync.init({
    server: './'
  });

  done();
  watch(paths.pugFileGlob, parallel(Pug.renderPug));
  watch(paths.htmlFileGlob).on('change', browserSync.reload);
}

const watching = () => {
  watch(paths.sourceImageFiles, series(Image.default, reload));
  watch(paths.includesDir, parallel(Pug.renderPug));
  watch(paths.sourceSassFileGlob, series(Css.default, reload));
  watch(paths.sourceJsFileGlob, series(Script.default, reload));
};

exports.default = series(
  parallel(Css.default, Script.default, Image.default, Pug.renderPug),
  serve,
  watching
);
