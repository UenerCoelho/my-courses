'use strict'
// ####-#### Variável tipo "var" ####-####
console.log(`####-#### Variável tipo "var" ####-####`)
if (true) {
  var nome = '### Uener ###'
  console.log('Chamando de dentro do escopo: >> ', nome)
}

// Chamando uma variável criada dentro do escopo if, mas como foi declarado com "var", é possível chamá-la, mesmo à chamando de fora do escopo.
console.log('Chamando de fora do escopo: >> ', nome)

//######################################################################
// ####-#### Variável tipo "let" ####-####
console.log(`

####-#### Variável tipo "let" ####-####`)
// Criando variável, usando let, é possível chamá-la de fora do escopo, somente de dentro.
if (true) {
  let letNome = '### Uener ###'
  console.log('dentro do escopo: >> ', letNome)
}
// console.log('Fora do escopo: >> ' + letNome) // retornará um erro de 'undefined'

// ######################################################################
console.log(`

####-#### Variável tipo "var" DENTRO de funções ####-####`)
// ####-#### Variável tipo "var" DENTRO de funções ####-####
function varFunc() {
  if (true) {
    var varFunc = '### Resultado ###'
    console.log(
      'Chamando a VARIÁVEL de DENTRO da função, dentro do escopo do "if".',
      varFunc
    )
  }
  console.log(
    'Chamando a VARIÁVEL de DENTRO função, mas FORA do escopo do "if".',
    varFunc
  )
}
varFunc()

console.log(
  'Chamando a VARIÁVEL de FORA da função, e FORA do escopo do "if".',
  varFunc
)

/* 
  "Let" é mais usado do que "Var", pelo fato de não poder ser chamado de fora do escopo, mas 'let' e 'var', podem ser alteradas. Mas as variáveis do tipo 'const' não podem ser alteradas, pois são constantes. 
*/

const varConstante = 'O valor da constante será o mesmo'
// varConstante = 'Tentando mudar a const' //gerará um erro 'Assignment to constant variable'.
console.log(varConstante)
