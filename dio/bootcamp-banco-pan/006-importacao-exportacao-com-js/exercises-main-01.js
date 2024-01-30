/*  Numa sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

    Dados de entrada::
    5
    50
    10
    98
    23

    Saída:
    98
*/
const { gets, print } = require('./exercises-functions-01')

const studentsQuantity = gets()
const sortedNumbers = []
for (let i = 0; i < studentsQuantity; i++) {
  const sortedNumber = gets()
  sortedNumbers.push(sortedNumber)
}

let highestValue = 0

for (let i = 0; i < sortedNumbers.length; i++) {
  const sortedNumber = sortedNumbers[i]
  if (sortedNumber > highestValue) {
    highestValue = sortedNumber
  }
}

print(highestValue)

// Outro jeito de fazer o código acima
// let highestValueFounded = 0
// for (let index = 0; index < 5; index++) {
//   const sortedNum = gets()
//   if (sortedNum > highestValueFounded) {
//     highestValueFounded = sortedNum
//   }
// }

// print(highestValueFounded)
