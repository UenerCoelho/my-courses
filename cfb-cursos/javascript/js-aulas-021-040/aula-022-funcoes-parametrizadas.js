// É uma função que necessita de parâmetros dentro dos parenteses
function soma(n1, n2) {
  console.log(n1 + n2)
}

soma(2) //NaN pq faltou um dos parâmetros, a não ser q seja pré definido o valor na declaração do parâmetro
soma(10, 5)
soma(5.1, 0.9)

const DEFAULT_VALUE = 0

function sum(num = DEFAULT_VALUE, num1 = DEFAULT_VALUE) {
  let res
  res = n1 + n2
  return res
}

let resultado_soma = soma(5, 4)

console.log(resultado_soma)

let value = 0

console.log(value)

function sum1(v) {
  return value + v
}

value = sum1(10)
console.log(value)

value = sum1(5)
console.log(value)
