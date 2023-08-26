const { series } = require('gulp'),
  gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel')

function defaultFunc(cb) {
  gulp
    .src('src/**/*.js')
    .pipe(
      babel({
        comments: false,
        presets: ['env']
      })
    )
    .pipe(uglify())
    .on('erro', function(e))
    .pipe(concat('code.min.js'))
    .pipe(gulp.dest('build'))
  return cb()
}

module.exports.default = series(defaultFunc)
