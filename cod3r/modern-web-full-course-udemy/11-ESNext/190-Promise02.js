// Por Callback
// setTimeout(function () {
//   console.log('Executando Callback em 2seg...')

//   setTimeout(function () {
//     console.log('Executando Callback em 2seg...')

//     setTimeout(function () {
//       console.log('Executando Callback em 2seg...')
//     }, 2000)
//   }, 2000)
// }, 2000)

// Usando Promise

function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Executando Promise...')
      resolve('Promise')
    }, tempo)
  })
}

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor)
