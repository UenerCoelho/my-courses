const namelessFunction1 = function (value1, value2) {
  return value1 + value2
}

console.log(namelessFunction1(10, 5))

// Utilizando operador spread
const namelessFunction2 = function (...values) {
  let res = 0
  for (value of values) {
    res += value
  }
  return res
}

console.log(namelessFunction2(5, 10))

// Construtor dentro de uma função anonima
const namelessConstructorFunction = new Function(
  'value1',
  'value2',
  'return value1 + value2'
)

console.log(namelessConstructorFunction(10, 5))
