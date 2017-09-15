
const yargs = require('yargs');

const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const markdown = require('gulp-markdown');
const wrap = require('gulp-wrap');

const argv = yargs.argv;

require('./plugins/multiply');

const toPDF = require('./gulp/toPdf');
const data = require('./config.json');

function getSrc() {
  const targets = argv.targets ? argv.targets.split(',') : undefined;

  if (Array.isArray(targets)) {
    if (targets.length > 1) {
      return `{${targets.map(s => s.trim()).join(',')}}`;
    }
    return targets[0].trim();
  }
  return '*';
}

const options = {
  ignorePartials: true,
  partials: {
    footer: '<footer>the end</footer>',
  },
  batch: ['./partials'],
  helpers: {
    capitals: str => str.toUpperCase()
  },
};

gulp.task('build', () => {
  gulp.src(`contents/${getSrc()}.md`)
    .pipe(markdown())
    .pipe(wrap({ src: './templates/index.hbs' }))
    .pipe(handlebars(data, options))
    .pipe(toPDF({ format: "A4" }))
    .pipe(gulp.dest('./build'));
});