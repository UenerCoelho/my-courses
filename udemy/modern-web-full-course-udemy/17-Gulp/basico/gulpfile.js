const gulp = require('gulp')
const { series, parallel } = require('gulp') // Pode ser feito deste jeito
// const series = gulp.series // Também pode ser feito deste jeito

const antes1 = cb => {
  console.log('Tarefa Antes 1!')
  return cb()
}

const antes2 = cb => {
  console.log('Tarefa Antes 2!')
  return cb()
}

function copiar(cb) {
  // cb = callback
  gulp
    // .src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    .src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaC'))
  return cb()
}

const fim = cb => {
  console.log('Tarefa Fim!')
  return cb()
}

module.exports.default = series(parallel(antes1, antes2), copiar, fim)
