function logParams(a, b, c) {
  console.log(a, b, c);
}
// passando os parâmetros da forma comum
logParams(1, 2, 3)

// passando parâmetros que não foi pedido na função, e no caso abaixo, o JS vai somente ignorá-los
logParams(1, 2, 3, 4, 5)

// passando menos parâmetros que foi pedido pela função, no caso abaixo não vai dar erro, mas vai dizer que o(s) parâmetro(s) faltantes são 'undefined'
logParams(1, 2)
logParams(1)
logParams()

// passando valores padrões para os parâmetros, para q não dê undefined, caso não seja passado um parâmetro
function defaultParams(a = 1, b= 2, c = 3) {
  console.log(a, b, c)
}

defaultParams(4, 5, 6)
defaultParams(4, 5)
defaultParams(4)
defaultParams()

// passando parâmetros de forma flexível. ou seja acrescentando ou retirando parâmetros, através de arrays
function logNums(nums) {
  console.log(Array.isArray(nums));
  for(let n of nums) {
    console.log(n);
  }
}

logNums([4, 5, 6])

// utilizando o operador 'spread/rest' para não precisar dos colchetes, são os 3 pontos antes de nums
function logNums2(...nums) {
  console.log(Array.isArray(nums));
  for (let n of nums) {
    console.log(n);
  }
}

logNums2(111, 22, 3)

function logNums3(...nums) {
  console.log(Array.isArray(nums));
  console.log(nums);
}

logNums3(111, 22, 3)

function sumAll(...nums) {
  let total = 0
  for(let n of nums) {
    total += n
  }
  return total
}

console.log(sumAll(4, 5, 6, 7, 8, 9, 10, 1, 2, 3));