const num = 3
const divisor = 5
const numDividedBy = num % divisor === 0

if (numDividedBy === 0) {
  console.log('Número Inválido!')
} else if (numDividedBy) {
  console.log('Sim, o número é divisível por ' + divisor + ',')
  if (num % 2 === 0) {
    console.log('Além disso é um número Par!')
  } else {
    console.log('Além disso é um número Impar!')
  }
} else {
  console.log('Não, o número não é divisível por ' + divisor)
  if (num % 2 === 0) {
    console.log('Além disso é um número Par!')
  } else {
    console.log('Além disso é um número Impar!')
  }
}
