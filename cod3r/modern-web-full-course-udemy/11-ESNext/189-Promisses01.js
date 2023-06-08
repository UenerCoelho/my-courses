// Promise para retorno de apenas um valor
let promessa = new Promise(function (cumprirPromessa) {
  cumprirPromessa(3)
})

// promessa.then(function (valor) {
//   console.log('Promise with 1 value:', valor)
// })

// Promise para entrega de 2 valores ou mais, neste caso, para retorno de 2 ou mais promises, é necessário criar um objeto, ou array com os valores
let promessa2 = new Promise(function (cumprindoPromessa) {
  cumprindoPromessa({ x: 3, y: 4 }) // Objeto
})

// promessa2.then(function (valor) {
//   console.log('Promise as Object:', valor) // retorno do objeto com 2 ou mais valores
// })

let promessa3 = new Promise(function (cumprindoPromessa) {
  cumprindoPromessa(['Uener', 'Catia', 'David', 'Leonardo']) // Array
})

// promessa3.then(function (valor) {
//   console.log('Promise as Array:', valor) // retorno do objeto com 2 ou mais valores
// })

// Chamando as promises com arrow functions
// promessa.then(valor => console.log(`Single Arrow Promise: ${valor}`))
// promessa2.then(valor => console.log(valor)) //(`Object Arrow Promise: ${valor}`))
// promessa3.then(valor => console.log(`Array Arrow Promise: ${valor}`))

// Utilizando para chamar varias vezes e manipular a promise
// promessa3
//   .then(primeiro => primeiro[0]) // para chamar somente o primeiro nome
//   .then(uener => uener[0]) // para chamar somente a inicial no primeiro nome
//   .then(inicial => inicial.toLowerCase()) // para tornar a inicial minúscula
//   .then(lowerCase => console.log(lowerCase))

// também podemos fazer uma function para realizar o mesmo processo acima
function firstElement(array) {
  return array[0]
}

function firstLetter(string) {
  return string[0]
}

function lowerCase(letter) {
  return letter.toLowerCase()
}

promessa3
  .then(firstElement)
  // .then(console.log)
  .then(firstLetter)
  // .then(console.log)
  .then(lowerCase)
  .then(console.log)
