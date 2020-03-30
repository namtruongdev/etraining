const paths = {};

// Directory Location
paths.assetsDir = 'assets/';
paths.sourcesDir = 'src/';
paths.viewsDir = 'views/';
paths.publicDir = './';
paths.includesDir = 'includes/';

// Folder naming conventions.
paths.styleFolderName = 'scss/';
paths.jsFolderName = 'js/';
paths.imageFolderName = 'img/';

// Assets file location
paths.cssFiles = paths.assetsDir + paths.styleFolderName;
paths.jsFiles = paths.assetsDir + paths.jsFolderName;
paths.imageFiles = paths.assetsDir + paths.imageFolderName;

// Sources file location
paths.sourceSassFiles = paths.sourcesDir + paths.styleFolderName;
paths.sourceJsFiles = paths.sourcesDir + paths.jsFolderName;
paths.sourceImageFiles = paths.sourcesDir + paths.imageFolderName;

// Glob pattern by file type
paths.scssPattern = '**/*.scss';
paths.cssPattern = '**/*.css';
paths.jsPattern = '**/*.js';
paths.pugPattern = '**/*.pug';
paths.htmlPattern = '**/*.html';

// Source file globs
paths.sourceSassFileGlob = paths.sourceSassFiles + paths.scssPattern;
paths.sourceJsFileGlob = paths.sourceJsFiles + paths.jsPattern;

// Project file globs
paths.cssFileGlob = paths.cssFiles + paths.cssPattern;
paths.jsFileGlob = paths.jsFiles + paths.jsPattern;
paths.htmlFileGlob = paths.publicDir + paths.htmlPattern;
paths.pugFileGlob = paths.viewsDir + paths.pugPattern;

module.exports = paths;
