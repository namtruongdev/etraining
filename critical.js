const critical = require('critical');

const paths = require('./tasks/paths');

critical.generate({
  base: paths.publicDir,
  src: 'index.html',
  dest: 'includes/critical.css',
  css: ['assets/scss/main.css']
});
