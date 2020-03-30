const webp = require('imagemin-webp');
const imagemin = require('gulp-imagemin');
const extReplace = require('gulp-ext-replace');
const browserSync = require('browser-sync').create();
const { dest, src, lastRun, parallel } = require('gulp');

const paths = require('./paths');

function webpImage() {
  return src(paths.sourceImageFiles + '*', { since: lastRun(webpImage) })
    .pipe(imagemin([webp({ quality: 50 })]))
    .pipe(extReplace('.webp'))
    .pipe(dest(paths.imageFiles))
    .pipe(browserSync.stream());
}

function image() {
  return src(paths.sourceImageFiles + '*', { since: lastRun(image) })
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 60, progressive: true }),
        imagemin.optipng({ optimizationLevel: 6 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
        })
      ])
    )
    .pipe(dest(paths.imageFiles))
    .pipe(browserSync.stream());
}

exports.default = parallel(image, webpImage);
