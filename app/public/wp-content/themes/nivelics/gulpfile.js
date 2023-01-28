const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const plugins = [
  autoprefixer(),
  // cssnano()
];

function style() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({
    }).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    proxy: "http://localhost/nivelics",
    browser: "chorme"
  })
  gulp.watch('./scss/**/*.scss', style)
  gulp.watch('./templates/**/*.twig').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;
