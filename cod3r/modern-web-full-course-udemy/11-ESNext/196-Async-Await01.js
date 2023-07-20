function waitFor(time = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), time)
  })
}

waitFor(2000)
  .then(() => console.log('Executando promise 01...'))
  .then(waitFor)
  .then(() => console.log('Executando promise 02...'))
  .then(waitFor)
  .then(() => console.log('Executando promise 03...'))
  .then(waitFor)
  .then(() => console.log('Executando promise 03...'))
