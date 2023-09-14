'use strict'
if (true) {
  var nome = '### Uener ###'
}

// Chamando uma variável criada dentro do escopo if, mas como foi declarado com "var", é possível chamá-la, mesmo à chamando de fora do escopo.
console.log(nome)

// Criando variável, usando let, é possível chamá-la de fora do escopo, somente de dentro.
if (true) {
  let letNome = '### Uener ###'
  console.log('dentro do escopo: >> ', letNome)
}
// console.log('Fora do escopo: >> ' + letNome) // retorna undefined
function teste() {}
