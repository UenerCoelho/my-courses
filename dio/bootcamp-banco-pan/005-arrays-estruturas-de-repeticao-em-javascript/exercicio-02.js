/*
  Crie um programa qe seja capaz de percorrer ma lista de números e imprima cada número par encontrado.
*/
;(function () {
  'use strict'
  const num = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  ]
  for (let i = 0; i < num.length; i++) {
    const number = num[i]
    if (number % 2 === 0) {
      console.log(number)
    }
  }
})()
