function test() {
  console.log('testeando')
}

test()

function sayMyName(name) {
  console.log(`Seu nome é: ${name}.`)
}

sayMyName('Uener')
sayMyName('Catia')

function exponentiation(value) {
  return Math.pow(value, 2)
}

console.log(exponentiation(10) + exponentiation(10))

function taxIncrement(value, tax) {
  const increaseValue = (tax / 100) * value
  return value + increaseValue
}

console.log(taxIncrement(100, 10))
console.log(taxIncrement(200, 15))
console.log(taxIncrement(300, 20))
