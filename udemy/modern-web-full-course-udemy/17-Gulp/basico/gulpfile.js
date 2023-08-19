const gulp = require('gulp')
// const { series } = require('gulp') // Pode ser feito deste jeito
const series = gulp.series // Também pode ser feito deste jeito

function copiar(cb) {
  // cb = callback
  console.log('Tarefa de copiar')
  return cb()
}

// module.exports.default = series(copiar)
