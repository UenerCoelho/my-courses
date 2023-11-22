// Funções de parâmetros REST, são funções que não precisam de um número determinado de parâmetros utilizando o operador spread
function soma(...values) {
  let size = values.length
  let res = 0
  for (let i = 0; i < size; i++) {
    res += values[i]
  }
  return res
}

console.log(soma(10, 5))
console.log(soma(1, 2, 3, 4, 5))

// Utilizando for of
function sumForOf(...values) {
  let res = 0
  for (let value of values) {
    res += value
  }
  return res
}

console.log(sumForOf(1, 2, 3, 4, 5))
console.log(sumForOf(10, 5))
